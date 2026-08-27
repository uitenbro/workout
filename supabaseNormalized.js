// One-time importer from the legacy workoutData JSON shape to the normalized schema.
var normalizedMetricCache = {};
var normalizedMetricCacheLoaded = false;
var normalizedExerciseIdByKey = {};
var normalizedExerciseStateCache = {};
var normalizedWorkoutIdByKey = {};
var normalizedDayIdByLocation = {};
var normalizedPlacementByLocation = {};
var normalizedSetByPlacement = {};
var normalizedWorkoutData = null;

function saveNormalizedCache() {
    if (!normalizedWorkoutData) {
        return Promise.resolve();
    }
    return openSupabaseOutbox().then(function (database) {
        return new Promise(function (resolve, reject) {
        var cache = {
            key: 'workoutData',
            data: normalizedWorkoutData,
            exerciseIds: normalizedExerciseIdByKey,
            workoutIds: normalizedWorkoutIdByKey,
            dayIds: normalizedDayIdByLocation,
            placements: normalizedPlacementByLocation,
            sets: normalizedSetByPlacement,
            savedAt: Date.now()
        };
        var request = database.transaction('normalizedCache', 'readwrite')
            .objectStore('normalizedCache').put(cache);
        request.onsuccess = resolve;
        request.onerror = function () { reject(request.error); };
        });
    });
}
function loadNormalizedCache() {
    return openSupabaseOutbox().then(function (database) {
        return new Promise(function (resolve, reject) {
            var request = database.transaction('normalizedCache', 'readonly')
                .objectStore('normalizedCache').get('workoutData');
            request.onsuccess = function () {
                var cache = request.result;
                if (!cache) {
                    resolve(null);
                    return;
                }
                normalizedWorkoutData = cache.data;
                normalizedExerciseIdByKey = cache.exerciseIds || {};
                normalizedWorkoutIdByKey = cache.workoutIds || {};
                normalizedDayIdByLocation = cache.dayIds || {};
                normalizedPlacementByLocation = cache.placements || {};
                normalizedSetByPlacement = cache.sets || {};
                normalizedMetricCacheLoaded = true;
                resolve(normalizedWorkoutData);
            };
            request.onerror = function () { reject(request.error); };
        });
    });
}

function normalizedMetricArrays(rows) {
    var maxHistory = [];
    var tonnageHistory = [];
    rows.forEach(function (row) {
        if (row.equivalent_max !== null) {
            maxHistory.push({date: row.recorded_at, equivalentMax: row.equivalent_max});
        }
        if (row.tonnage !== null) {
            tonnageHistory.push({date: row.recorded_at, overallTonnage: row.tonnage});
        }
    });
    return {maxHistory: maxHistory, tonnageHistory: tonnageHistory};
}

async function loadNormalizedMetricCache() {
    if (!supabaseClient) {
        return false;
    }
    var user = await getSupabaseUser();
    if (!user) {
        return false;
    }

    var exerciseResult = await supabaseClient
        .from('exercises')
        .select('id, exercise_key, name')
        .eq('user_id', user.id);
    if (exerciseResult.error) {
        throw exerciseResult.error;
    }
    var metricResult = await supabaseClient
        .from('exercise_metrics')
        .select('exercise_id, recorded_at, equivalent_max, tonnage')
        .order('recorded_at', {ascending: true});
    if (metricResult.error) {
        throw metricResult.error;
    }

    var keyById = {};
    exerciseResult.data.forEach(function (exercise) {
        keyById[exercise.id] = exercise.exercise_key;
        normalizedExerciseIdByKey[exercise.exercise_key] = exercise.id;
    });
    var rowsByKey = {};
    metricResult.data.forEach(function (row) {
        var exerciseKey = keyById[row.exercise_id];
        if (!exerciseKey) {
            return;
        }
        if (!rowsByKey[exerciseKey]) {
            rowsByKey[exerciseKey] = [];
        }
        rowsByKey[exerciseKey].push(row);
    });

    normalizedMetricCache = {};
    Object.keys(rowsByKey).forEach(function (exerciseKey) {
        normalizedMetricCache[exerciseKey] = normalizedMetricArrays(rowsByKey[exerciseKey]);
    });

    var stateResult = await supabaseClient
        .from('exercise_state')
        .select('exercise_id, rpe_input, tonnage_input, updated_at');
    if (stateResult.error) {
        throw stateResult.error;
    }
    normalizedExerciseStateCache = {};
    stateResult.data.forEach(function (state) {
        var exerciseKey = keyById[state.exercise_id];
        if (exerciseKey) {
            normalizedExerciseStateCache[exerciseKey] = state;
        }
    });

    var workoutResult = await supabaseClient
        .from('workouts')
        .select('id, workout_key, name, source_url, current_day, workout_days_per_week, position');
    if (workoutResult.error) {
        throw workoutResult.error;
    }
    normalizedWorkoutIdByKey = {};
    workoutResult.data.forEach(function (workout) {
        normalizedWorkoutIdByKey[workout.workout_key] = workout.id;
    });

    var dayResult = await supabaseClient
        .from('workout_days')
        .select('id, workout_id, name, position');
    if (dayResult.error) {
        throw dayResult.error;
    }
    normalizedDayIdByLocation = {};
    dayResult.data.forEach(function (day) {
        normalizedDayIdByLocation[day.workout_id + ':' + day.position] = day.id;
    });

    var placementResult = await supabaseClient
        .from('workout_exercises')
        .select('id, day_id, exercise_id, position, name_override');
    if (placementResult.error) {
        throw placementResult.error;
    }
    normalizedPlacementByLocation = {};
    placementResult.data.forEach(function (placement) {
        normalizedPlacementByLocation[placement.day_id + ':' + placement.position] = placement;
    });

    var setResult = await supabaseClient
        .from('prescribed_sets')
        .select('id, workout_exercise_id, position, label, default_load');
    if (setResult.error) {
        throw setResult.error;
    }
    normalizedSetByPlacement = {};
    setResult.data.forEach(function (set) {
        normalizedSetByPlacement[set.workout_exercise_id + ':' + set.position] = set;
    });

    var exerciseById = {};
    exerciseResult.data.forEach(function (exercise) {
        exerciseById[exercise.id] = exercise;
    });
    var daysByWorkout = {};
    dayResult.data.forEach(function (day) {
        if (!daysByWorkout[day.workout_id]) {
            daysByWorkout[day.workout_id] = [];
        }
        daysByWorkout[day.workout_id].push(day);
    });
    var placementsByDay = {};
    placementResult.data.forEach(function (placement) {
        if (!placementsByDay[placement.day_id]) {
            placementsByDay[placement.day_id] = [];
        }
        placementsByDay[placement.day_id].push(placement);
    });
    normalizedWorkoutData = {selectedWorkout: null, workouts: {}, exerciseDb: {}};
    Object.keys(normalizedExerciseIdByKey).forEach(function (exerciseKey) {
        var exerciseId = normalizedExerciseIdByKey[exerciseKey];
        var state = normalizedExerciseStateCache[exerciseKey] || {};
        var history = normalizedMetricCache[exerciseKey] || {maxHistory: [], tonnageHistory: []};
        normalizedWorkoutData.exerciseDb[exerciseKey] = {
            rpeInput: state.rpe_input || [],
            tonnageInput: state.tonnage_input || [],
            maxHistory: history.maxHistory,
            tonnageHistory: history.tonnageHistory
        };
    });
    workoutResult.data.sort(function (first, second) { return first.position - second.position; });
    workoutResult.data.forEach(function (workout) {
        var days = (daysByWorkout[workout.id] || []).sort(function (first, second) {
            return first.position - second.position;
        }).map(function (day) {
            var exercises = (placementsByDay[day.id] || []).sort(function (first, second) {
                return first.position - second.position;
            }).map(function (placement) {
                var exercise = exerciseById[placement.exercise_id];
                var sets = [];
                (setResult.data.filter(function (set) {
                    return set.workout_exercise_id == placement.id;
                })).sort(function (first, second) {
                    return first.position - second.position;
                }).forEach(function (set) {
                    sets.push({label: set.label, weight: set.default_load});
                });
                return {
                    exerciseKey: exercise.exercise_key,
                    exerciseName: placement.name_override || exercise.name,
                    sets: sets
                };
            });
            return {dayName: day.name, exercises: exercises};
        });
        normalizedWorkoutData.workouts[workout.workout_key] = {
            workoutName: workout.name,
            url: workout.source_url,
            currentDay: workout.current_day,
            workoutDaysPerWeek: workout.workout_days_per_week || days.length,
            days: days
        };
    });
    var preferenceResult = await supabaseClient
        .from('user_preferences')
        .select('active_workout_id')
        .maybeSingle();
    if (preferenceResult.error) {
        throw preferenceResult.error;
    }
    var activeWorkout = workoutResult.data.find(function (workout) {
        return preferenceResult.data && workout.id == preferenceResult.data.active_workout_id;
    });
    normalizedWorkoutData.selectedWorkout = activeWorkout
        ? activeWorkout.workout_key
        : (workoutResult.data[0] ? workoutResult.data[0].workout_key : null);
    normalizedMetricCacheLoaded = true;
    await saveNormalizedCache();
    return true;
}

async function loadNormalizedWorkoutData() {
    var cachedData = await loadNormalizedCache();
    if (cachedData) {
        if (navigator.onLine) {
            loadNormalizedMetricCache().then(function () {
                console.log("Normalized workout cache refreshed from Supabase");
            }).catch(function (error) {
                console.warn("Normalized workout refresh failed; continuing with cache:", error.message);
            });
        }
        return cachedData;
    }

    try {
        var loaded = await loadNormalizedMetricCache();
        if (loaded) {
            return normalizedWorkoutData;
        }
    } catch (error) {
        throw error;
    }
    return null;
}

function getNormalizedMetricHistory(exerciseKey) {
    return normalizedMetricCache[exerciseKey] || null;
}

function saveNormalizedExerciseState(exerciseKey, rpeInput, tonnageInput) {
    var exerciseId = normalizedExerciseIdByKey[exerciseKey];
    if (!exerciseId) {
        return Promise.resolve();
    }
    var state = {
        exercise_id: exerciseId,
        rpe_input: rpeInput || [],
        tonnage_input: tonnageInput || [],
        updated_at: new Date().toISOString()
    };
    normalizedExerciseStateCache[exerciseKey] = state;
    return addSupabaseOutboxRecord({
        kind: 'normalized_exercise_state',
        payload: state,
        accountId: supabaseSession ? supabaseSession.user.id : null,
        createdAt: Date.now(),
        attempts: 0,
        lastError: null
    }).then(function () {
        return flushSupabaseOutbox();
    }).catch(function (error) {
        console.error("Normalized exercise state upsert failed:", {
            exerciseKey: exerciseKey,
            exerciseId: exerciseId,
            error: error
        });
        throw error;
    });
}

function queueNormalizedDefinitionUpdate(kind, payload) {
    return addSupabaseOutboxRecord({
        kind: kind,
        payload: payload,
        accountId: supabaseSession ? supabaseSession.user.id : null,
        createdAt: Date.now(),
        attempts: 0,
        lastError: null
    }).then(function () {
        return flushSupabaseOutbox();
    });
}

function saveNormalizedWorkoutProgress(workoutKey, currentDay) {
    var workoutId = normalizedWorkoutIdByKey[workoutKey];
    if (!workoutId) {
        return Promise.resolve();
    }
    if (normalizedWorkoutData && normalizedWorkoutData.workouts[workoutKey]) {
        normalizedWorkoutData.workouts[workoutKey].currentDay = currentDay;
        saveNormalizedCache();
    }
    return queueNormalizedDefinitionUpdate('normalized_workout_progress', {
        id: workoutId,
        current_day: currentDay,
        updated_at: new Date().toISOString()
    });
}

function saveNormalizedActiveWorkout(workoutKey) {
    var workoutId = normalizedWorkoutIdByKey[workoutKey];
    if (!workoutId) {
        return Promise.resolve();
    }
    if (normalizedWorkoutData) {
        normalizedWorkoutData.selectedWorkout = workoutKey;
        saveNormalizedCache();
    }
    return queueNormalizedDefinitionUpdate('normalized_active_workout', {
        user_id: supabaseSession.user.id,
        active_workout_id: workoutId,
        updated_at: new Date().toISOString()
    });
}

async function saveNormalizedWorkoutExercise(workoutKey, dayPosition, exercisePosition, exercise) {
    var workoutId = normalizedWorkoutIdByKey[workoutKey];
    if (!workoutId) {
        return;
    }
    var dayId = normalizedDayIdByLocation[workoutId + ':' + dayPosition];
    if (!dayId) {
        return;
    }
    var exerciseId = normalizedExerciseIdByKey[exercise.exerciseKey];
    if (!exerciseId) {
        var user = await getSupabaseUser();
        var newExercise = {
            id: normalizedUuid(),
            user_id: user.id,
            exercise_key: exercise.exerciseKey,
            name: exercise.exerciseName || exercise.exerciseKey,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        };
        normalizedExerciseIdByKey[exercise.exerciseKey] = newExercise.id;
        await queueNormalizedDefinitionUpdate('normalized_exercise', newExercise);
        exerciseId = newExercise.id;
    }

    var location = dayId + ':' + exercisePosition;
    var placement = normalizedPlacementByLocation[location] || {
        id: normalizedUuid(),
        day_id: dayId,
        position: exercisePosition,
        created_at: new Date().toISOString()
    };
    placement.exercise_id = exerciseId;
    placement.name_override = exercise.exerciseName || null;
    placement.updated_at = new Date().toISOString();
    normalizedPlacementByLocation[location] = placement;
    await queueNormalizedDefinitionUpdate('normalized_workout_exercise', placement);

    for (var setPosition = 0; setPosition < exercise.sets.length; setPosition++) {
        var setLocation = placement.id + ':' + setPosition;
        var set = normalizedSetByPlacement[setLocation] || {
            id: normalizedUuid(),
            workout_exercise_id: placement.id,
            position: setPosition,
            created_at: new Date().toISOString()
        };
        set.label = exercise.sets[setPosition].label || '';
        set.default_load = exercise.sets[setPosition].weight || '';
        set.updated_at = new Date().toISOString();
        normalizedSetByPlacement[setLocation] = set;
        await queueNormalizedDefinitionUpdate('normalized_prescribed_set', set);
    }
}

function appendNormalizedMetric(exerciseKey, equivalentMax, tonnage) {
    var exerciseId = normalizedExerciseIdByKey[exerciseKey];
    if (!exerciseId) {
        return Promise.resolve();
    }
    var recordedAt = new Date();
    var metric = {
        id: normalizedUuid(),
        exercise_id: exerciseId,
        metric_date: normalizedLocalDate(recordedAt.toISOString()),
        recorded_at: recordedAt.toISOString(),
        equivalent_max: equivalentMax,
        tonnage: tonnage,
        mutation_id: normalizedUuid()
    };
    var metricDate = metric.metric_date;
    var history = normalizedMetricCache[exerciseKey] || {maxHistory: [], tonnageHistory: []};
    history.maxHistory = history.maxHistory.filter(function (entry) {
        return normalizedLocalDate(entry.date) != metricDate;
    });
    history.tonnageHistory = history.tonnageHistory.filter(function (entry) {
        return normalizedLocalDate(entry.date) != metricDate;
    });
    history.maxHistory.push({date: metric.recorded_at, equivalentMax: equivalentMax});
    history.tonnageHistory.push({date: metric.recorded_at, overallTonnage: tonnage});
    normalizedMetricCache[exerciseKey] = history;
    return addSupabaseOutboxRecord({
        kind: 'normalized_metric',
        payload: metric,
        accountId: supabaseSession ? supabaseSession.user.id : null,
        createdAt: Date.now(),
        attempts: 0,
        lastError: null
    }).then(function () {
        return flushSupabaseOutbox();
    });
}

function normalizedUuid() {
    if (window.crypto && window.crypto.randomUUID) {
        return window.crypto.randomUUID();
    }
    return 'legacy-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2);
}

function normalizedLocalDate(timestamp) {
    var date = new Date(timestamp);
    var year = date.getFullYear();
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var day = String(date.getDate()).padStart(2, '0');
    return year + '-' + month + '-' + day;
}

function normalizedMetricRows(exerciseId, exerciseDb) {
    var maxHistory = exerciseDb.maxHistory || [];
    var tonnageHistory = exerciseDb.tonnageHistory || [];
    var timestamps = {};

    maxHistory.forEach(function (entry) {
        timestamps[entry.date] = true;
    });
    tonnageHistory.forEach(function (entry) {
        timestamps[entry.date] = true;
    });

    return Object.keys(timestamps).map(function (timestamp) {
        var maxEntry = maxHistory.find(function (entry) { return entry.date == timestamp; });
        var tonnageEntry = tonnageHistory.find(function (entry) { return entry.date == timestamp; });
        return {
            id: normalizedUuid(),
            exercise_id: exerciseId,
            metric_date: normalizedLocalDate(timestamp),
            recorded_at: new Date(timestamp).toISOString(),
            equivalent_max: maxEntry ? maxEntry.equivalentMax : null,
            tonnage: tonnageEntry ? tonnageEntry.overallTonnage : null,
            mutation_id: normalizedUuid()
        };
    });
}

function buildNormalizedWorkoutData(legacyData, userId) {
    var exercises = {};
    var workouts = [];
    var workoutDays = [];
    var workoutExercises = [];
    var prescribedSets = [];
    var exerciseStates = [];
    var exerciseMetrics = [];
    var legacyExercises = legacyData.exerciseDb || {};

    Object.keys(legacyExercises).forEach(function (exerciseKey) {
        var exerciseId = normalizedUuid();
        var exerciseDb = legacyExercises[exerciseKey] || {};
        exercises[exerciseKey] = {
            id: exerciseId,
            user_id: userId,
            exercise_key: exerciseKey,
            name: exerciseKey,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        };
        exerciseStates.push({
            exercise_id: exerciseId,
            rpe_input: exerciseDb.rpeInput || [],
            tonnage_input: exerciseDb.tonnageInput || [],
            updated_at: new Date().toISOString()
        });
        exerciseMetrics = exerciseMetrics.concat(normalizedMetricRows(exerciseId, exerciseDb));
    });

    Object.keys(legacyData.workouts || {}).forEach(function (workoutKey, workoutPosition) {
        var legacyWorkout = legacyData.workouts[workoutKey];
        var workoutId = normalizedUuid();
        workouts.push({
            id: workoutId,
            user_id: userId,
            workout_key: workoutKey,
            name: legacyWorkout.workoutName || workoutKey,
            source_url: legacyWorkout.url || null,
            position: workoutPosition,
            current_day: legacyWorkout.currentDay || 0,
            workout_days_per_week: legacyWorkout.workoutDaysPerWeek || null,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        });

        (legacyWorkout.days || []).forEach(function (legacyDay, dayPosition) {
            var dayId = normalizedUuid();
            workoutDays.push({
                id: dayId,
                workout_id: workoutId,
                name: legacyDay.dayName || 'Day ' + (dayPosition + 1),
                position: dayPosition,
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
            });

            (legacyDay.exercises || []).forEach(function (legacyExercise, exercisePosition) {
                var exerciseKey = legacyExercise.exerciseKey;
                if (!exerciseKey || !exercises[exerciseKey]) {
                    return;
                }
                var workoutExerciseId = normalizedUuid();
                workoutExercises.push({
                    id: workoutExerciseId,
                    day_id: dayId,
                    exercise_id: exercises[exerciseKey].id,
                    position: exercisePosition,
                    name_override: legacyExercise.exerciseName || null,
                    created_at: new Date().toISOString(),
                    updated_at: new Date().toISOString()
                });
                (legacyExercise.sets || []).forEach(function (set, setPosition) {
                    prescribedSets.push({
                        id: normalizedUuid(),
                        workout_exercise_id: workoutExerciseId,
                        position: setPosition,
                        label: set.label || '',
                        default_load: set.weight || '',
                        created_at: new Date().toISOString(),
                        updated_at: new Date().toISOString()
                    });
                });
            });
        });
    });

    return {
        exercises: Object.keys(exercises).map(function (key) { return exercises[key]; }),
        workouts: workouts,
        workoutDays: workoutDays,
        workoutExercises: workoutExercises,
        prescribedSets: prescribedSets,
        exerciseStates: exerciseStates,
        exerciseMetrics: exerciseMetrics,
        preferences: {
            user_id: userId,
            active_workout_id: workouts.find(function (workout) {
                return workout.workout_key == legacyData.selectedWorkout;
            })?.id || null,
            updated_at: new Date().toISOString()
        }
    };
}

async function insertNormalizedRows(table, rows) {
    for (var offset = 0; offset < rows.length; offset += 100) {
        var result = await supabaseClient.from(table).insert(rows.slice(offset, offset + 100));
        if (result.error) {
            throw result.error;
        }
    }
}

async function migrateLegacyWorkoutDataToSupabase() {
    if (!supabaseClient) {
        throw new Error('Supabase is not configured');
    }
    var user = await getSupabaseUser();
    if (!user) {
        throw new Error('A signed-in user is required');
    }
    var existing = await supabaseClient.from('workouts').select('id').limit(1);
    if (existing.error) {
        throw existing.error;
    }
    if (existing.data && existing.data.length) {
        throw new Error('Normalized workouts already exist for this account');
    }

    var normalized = buildNormalizedWorkoutData(workoutData, user.id);
    await insertNormalizedRows('exercises', normalized.exercises);
    await insertNormalizedRows('workouts', normalized.workouts);
    await insertNormalizedRows('workout_days', normalized.workoutDays);
    await insertNormalizedRows('workout_exercises', normalized.workoutExercises);
    await insertNormalizedRows('prescribed_sets', normalized.prescribedSets);
    await insertNormalizedRows('exercise_state', normalized.exerciseStates);
    await insertNormalizedRows('exercise_metrics', normalized.exerciseMetrics);
    await insertNormalizedRows('user_preferences', [normalized.preferences]);
}

async function syncNormalizedWorkoutData() {
    await flushSupabaseOutbox();
    await loadNormalizedMetricCache();
    var normalizedData = normalizedWorkoutData;
    if (!normalizedData) {
        throw new Error('No normalized workout data was found');
    }
    workoutData = normalizedData;
    syncData = workoutData;
    selectedWorkoutData = workoutData.workouts[workoutData.selectedWorkout];
    printAll();
}

async function replaceNormalizedWorkoutDataFromLocal() {
    if (!supabaseClient) {
        throw new Error('Supabase is not configured');
    }
    var user = await getSupabaseUser();
    if (!user) {
        throw new Error('A signed-in user is required');
    }
    var pendingRecords = await getSupabaseOutboxRecords();
    if (pendingRecords.length) {
        throw new Error('Sync pending changes before replacing normalized data');
    }

    var preferenceResult = await supabaseClient
        .from('user_preferences')
        .delete()
        .eq('user_id', user.id);
    if (preferenceResult.error) {
        throw preferenceResult.error;
    }
    var workoutResult = await supabaseClient
        .from('workouts')
        .delete()
        .eq('user_id', user.id);
    if (workoutResult.error) {
        throw workoutResult.error;
    }
    var exerciseResult = await supabaseClient
        .from('exercises')
        .delete()
        .eq('user_id', user.id);
    if (exerciseResult.error) {
        throw exerciseResult.error;
    }

    normalizedWorkoutData = null;
    normalizedExerciseIdByKey = {};
    normalizedWorkoutIdByKey = {};
    normalizedDayIdByLocation = {};
    normalizedPlacementByLocation = {};
    normalizedSetByPlacement = {};
    normalizedMetricCache = {};
    normalizedExerciseStateCache = {};
    normalizedMetricCacheLoaded = false;
    await migrateLegacyWorkoutDataToSupabase();
    await syncNormalizedWorkoutData();
}

function syncNormalizedDataFromPanel() {
    syncNormalizedWorkoutData().then(function () {
        alert('Normalized data was synchronized.');
        displaySupabaseOptions();
    }).catch(function (error) {
        alert('Unable to synchronize normalized data\n' + error.message);
    });
}

function replaceNormalizedDataFromPanel() {
    if (!window.confirm('Replace all normalized Supabase data for this account with the current local JSON?')) {
        return;
    }
    replaceNormalizedWorkoutDataFromLocal().then(function () {
        alert('Normalized Supabase data was replaced from local JSON.');
        displaySupabaseOptions();
    }).catch(function (error) {
        alert('Unable to replace normalized data\n' + error.message);
    });
}
