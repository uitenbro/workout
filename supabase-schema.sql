-- User-owned hybrid storage for the first hosted release.
create table if not exists public.workout_data (
    user_id uuid primary key references auth.users(id) on delete cascade,
    schema_version integer not null default 1,
    data jsonb not null,
    created_at timestamptz not null default timezone('utc', now()),
    updated_at timestamptz not null default timezone('utc', now())
);

alter table public.workout_data enable row level security;

drop policy if exists "Users can read their workout data" on public.workout_data;
create policy "Users can read their workout data"
    on public.workout_data for select
    using (auth.uid() = user_id);

drop policy if exists "Users can create their workout data" on public.workout_data;
create policy "Users can create their workout data"
    on public.workout_data for insert
    with check (auth.uid() = user_id);

drop policy if exists "Users can update their workout data" on public.workout_data;
create policy "Users can update their workout data"
    on public.workout_data for update
    using (auth.uid() = user_id)
    with check (auth.uid() = user_id);

drop policy if exists "Users can delete their workout data" on public.workout_data;
create policy "Users can delete their workout data"
    on public.workout_data for delete
    using (auth.uid() = user_id);

create or replace function public.set_workout_data_updated_at()
returns trigger
language plpgsql
as $$
begin
    new.updated_at = timezone('utc', now());
    return new;
end;
$$;

drop trigger if exists set_workout_data_updated_at on public.workout_data;
create trigger set_workout_data_updated_at
    before update on public.workout_data
    for each row execute function public.set_workout_data_updated_at();

-- Normalized schema for the offline-first application. Keep workout_data until
-- the one-time migration has been verified.
create table if not exists public.exercises (
    id uuid primary key default gen_random_uuid(),
    user_id uuid not null references auth.users(id) on delete cascade,
    exercise_key text not null,
    name text not null,
    created_at timestamptz not null default timezone('utc', now()),
    updated_at timestamptz not null default timezone('utc', now()),
    unique (user_id, exercise_key)
);

create table if not exists public.workouts (
    id uuid primary key default gen_random_uuid(),
    user_id uuid not null references auth.users(id) on delete cascade,
    workout_key text not null,
    name text not null,
    source_url text,
    position integer not null default 0,
    current_day integer not null default 0,
    workout_days_per_week integer,
    created_at timestamptz not null default timezone('utc', now()),
    updated_at timestamptz not null default timezone('utc', now()),
    unique (user_id, workout_key)
);

alter table public.workouts
    add column if not exists workout_days_per_week integer;

create table if not exists public.workout_days (
    id uuid primary key default gen_random_uuid(),
    workout_id uuid not null references public.workouts(id) on delete cascade,
    name text not null,
    position integer not null default 0,
    created_at timestamptz not null default timezone('utc', now()),
    updated_at timestamptz not null default timezone('utc', now()),
    unique (workout_id, position)
);

create table if not exists public.workout_exercises (
    id uuid primary key default gen_random_uuid(),
    day_id uuid not null references public.workout_days(id) on delete cascade,
    exercise_id uuid not null references public.exercises(id) on delete restrict,
    position integer not null default 0,
    name_override text,
    created_at timestamptz not null default timezone('utc', now()),
    updated_at timestamptz not null default timezone('utc', now()),
    unique (day_id, position)
);

create table if not exists public.prescribed_sets (
    id uuid primary key default gen_random_uuid(),
    workout_exercise_id uuid not null references public.workout_exercises(id) on delete cascade,
    position integer not null default 0,
    label text not null default '',
    default_load text not null default '',
    created_at timestamptz not null default timezone('utc', now()),
    updated_at timestamptz not null default timezone('utc', now()),
    unique (workout_exercise_id, position)
);

create table if not exists public.exercise_state (
    exercise_id uuid primary key references public.exercises(id) on delete cascade,
    rpe_input jsonb not null default '[]'::jsonb,
    tonnage_input jsonb not null default '[]'::jsonb,
    updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.exercise_metrics (
    id uuid primary key default gen_random_uuid(),
    exercise_id uuid not null references public.exercises(id) on delete cascade,
    metric_date date not null,
    recorded_at timestamptz not null default timezone('utc', now()),
    equivalent_max numeric,
    tonnage numeric,
    mutation_id uuid not null unique,
    created_at timestamptz not null default timezone('utc', now())
);

create index if not exists exercise_metrics_chart_idx
    on public.exercise_metrics (exercise_id, metric_date, recorded_at desc, id desc);

create or replace function public.append_exercise_metric(
    p_id uuid,
    p_exercise_id uuid,
    p_metric_date date,
    p_recorded_at timestamptz,
    p_equivalent_max numeric,
    p_tonnage numeric,
    p_mutation_id uuid
)
returns integer
language plpgsql
security invoker
set search_path = public
as $$
declare
    deleted_count integer;
begin
    insert into public.exercise_metrics (
        id, exercise_id, metric_date, recorded_at,
        equivalent_max, tonnage, mutation_id
    ) values (
        p_id, p_exercise_id, p_metric_date, p_recorded_at,
        p_equivalent_max, p_tonnage, p_mutation_id
    ) on conflict (mutation_id) do nothing;

        with ranked_metrics as (
                select id,
                             row_number() over (
                                     partition by exercise_id, metric_date
                                     order by recorded_at desc, id desc
                             ) as metric_rank
                from public.exercise_metrics
                where exercise_id = p_exercise_id
                    and metric_date = p_metric_date
    )
    delete from public.exercise_metrics as metrics
        using ranked_metrics
        where metrics.id = ranked_metrics.id
            and ranked_metrics.metric_rank > 1;

    get diagnostics deleted_count = row_count;
    return deleted_count;
end;
$$;

create table if not exists public.user_preferences (
    user_id uuid primary key references auth.users(id) on delete cascade,
    active_workout_id uuid references public.workouts(id) on delete set null,
    updated_at timestamptz not null default timezone('utc', now())
);

-- The client supplies a local calendar date. Keep the latest metric per
-- exercise/day and remove earlier append-only saves.
create or replace function public.delete_redundant_exercise_metrics()
returns integer
language plpgsql
security invoker
set search_path = public
as $$
declare
    deleted_count integer;
begin
    with ranked as (
        select metrics.id,
               row_number() over (
                   partition by metrics.exercise_id, metrics.metric_date
                   order by metrics.recorded_at desc, metrics.id desc
               ) as metric_rank
        from public.exercise_metrics as metrics
        join public.exercises as exercises
            on exercises.id = metrics.exercise_id
        where exercises.user_id = auth.uid()
    ), deleted as (
        delete from public.exercise_metrics as metrics
        using ranked
        where metrics.id = ranked.id
          and ranked.metric_rank > 1
        returning metrics.id
    )
    select count(*) into deleted_count from deleted;

    return deleted_count;
end;
$$;

alter table public.exercises enable row level security;
alter table public.workouts enable row level security;
alter table public.workout_days enable row level security;
alter table public.workout_exercises enable row level security;
alter table public.prescribed_sets enable row level security;
alter table public.exercise_state enable row level security;
alter table public.exercise_metrics enable row level security;
alter table public.user_preferences enable row level security;

drop policy if exists "Users can manage their exercises" on public.exercises;
create policy "Users can manage their exercises" on public.exercises
    for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "Users can manage their workouts" on public.workouts;
create policy "Users can manage their workouts" on public.workouts
    for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "Users can manage their workout days" on public.workout_days;
create policy "Users can manage their workout days" on public.workout_days
    for all using (exists (select 1 from public.workouts where workouts.id = workout_days.workout_id and workouts.user_id = auth.uid()))
    with check (exists (select 1 from public.workouts where workouts.id = workout_days.workout_id and workouts.user_id = auth.uid()));

drop policy if exists "Users can manage their workout exercises" on public.workout_exercises;
create policy "Users can manage their workout exercises" on public.workout_exercises
    for all using (exists (select 1 from public.workout_days join public.workouts on workouts.id = workout_days.workout_id where workout_days.id = workout_exercises.day_id and workouts.user_id = auth.uid()) and exists (select 1 from public.exercises where exercises.id = workout_exercises.exercise_id and exercises.user_id = auth.uid()))
    with check (exists (select 1 from public.workout_days join public.workouts on workouts.id = workout_days.workout_id where workout_days.id = workout_exercises.day_id and workouts.user_id = auth.uid()) and exists (select 1 from public.exercises where exercises.id = workout_exercises.exercise_id and exercises.user_id = auth.uid()));

drop policy if exists "Users can manage their prescribed sets" on public.prescribed_sets;
create policy "Users can manage their prescribed sets" on public.prescribed_sets
    for all using (exists (select 1 from public.workout_exercises join public.workout_days on workout_days.id = workout_exercises.day_id join public.workouts on workouts.id = workout_days.workout_id where workout_exercises.id = prescribed_sets.workout_exercise_id and workouts.user_id = auth.uid()))
    with check (exists (select 1 from public.workout_exercises join public.workout_days on workout_days.id = workout_exercises.day_id join public.workouts on workouts.id = workout_days.workout_id where workout_exercises.id = prescribed_sets.workout_exercise_id and workouts.user_id = auth.uid()));

drop policy if exists "Users can manage their exercise state" on public.exercise_state;
create policy "Users can manage their exercise state" on public.exercise_state
    for all using (exists (select 1 from public.exercises where exercises.id = exercise_state.exercise_id and exercises.user_id = auth.uid()))
    with check (exists (select 1 from public.exercises where exercises.id = exercise_state.exercise_id and exercises.user_id = auth.uid()));

drop policy if exists "Users can manage their exercise metrics" on public.exercise_metrics;
create policy "Users can manage their exercise metrics" on public.exercise_metrics
    for all using (exists (select 1 from public.exercises where exercises.id = exercise_metrics.exercise_id and exercises.user_id = auth.uid()))
    with check (exists (select 1 from public.exercises where exercises.id = exercise_metrics.exercise_id and exercises.user_id = auth.uid()));

drop policy if exists "Users can manage their preferences" on public.user_preferences;
create policy "Users can manage their preferences" on public.user_preferences
    for all using (auth.uid() = user_id) with check (auth.uid() = user_id and (active_workout_id is null or exists (select 1 from public.workouts where workouts.id = user_preferences.active_workout_id and workouts.user_id = auth.uid())));
