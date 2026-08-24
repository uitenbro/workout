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
