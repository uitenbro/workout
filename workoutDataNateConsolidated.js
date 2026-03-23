
var workoutJson = `
{
  "selectedWorkout": "ChargersWorkout",
  "workouts": {
    "PowerLiftingWorkout": {
      "workoutName": "Power Lifting Workout",
      "url": "https://drive.google.com/drive/folders/1wS2nOZb67Mp6y4llOIpWIRDlHVEeWWX6",
      "days": [
        {
          "dayName": "Bench Day",
          "exercises": [
            {
              "exerciseName": "Bench Press",
              "sets": [
                {
                  "label": "2 x 6",
                  "weight": " 225 / 180 lbs"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "BenchPress"
            },
            {
              "exerciseName": "Incline Dumbbell Press",
              "sets": [
                {
                  "weight": "150 lbs",
                  "label": "2 x 8"
                },
                {
                  "label": "1 x 8 ",
                  "weight": "150 lbs"
                }
              ],
              "bodyWeight": 0,
              "exerciseKey": "InclineDumbbellPress"
            },
            {
              "exerciseName": "Single Dumbbell Shoulder Press",
              "sets": [
                {
                  "label": "5x5",
                  "weight": " 150 lbs"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "SingleDumbbellShoulderPress"
            },
            {
              "exerciseName": "Barbell Shoulder Press",
              "sets": [
                {
                  "label": "2 x 6",
                  "weight": "135 lbs"
                },
                {
                  "label": "1 x 6 Heavy Double Rest",
                  "weight": "155 lbs"
                }
              ],
              "exerciseKey": "BarbellShoulderPress"
            }
          ]
        },
        {
          "dayName": "Deadlift Day",
          "exercises": [
            {
              "exerciseName": "Trap Bar Deadlifts",
              "sets": [
                {
                  "label": "2 x 8",
                  "weight": "235 lbs"
                },
                {
                  "label": "1 x 6 Heavy Double Rest",
                  "weight": "355 lbs / 265 lbs"
                }
              ],
              "bodyWeight": 235,
              "exerciseKey": "TrapBarDeadlifts"
            },
            {
              "exerciseName": "Standard Deadlifts",
              "sets": [
                {
                  "label": "2 x 6",
                  "weight": "235 lbs"
                },
                {
                  "label": "1 x 6 Heavy Double Rest",
                  "weight": "355 lbs / 265 lbs"
                }
              ],
              "bodyWeight": 215,
              "exerciseKey": "StandardDeadlifts"
            },
            {
              "exerciseName": "Pull Downs",
              "sets": [
                {
                  "label": "2 x 6",
                  "weight": "200/220 lbs"
                },
                {
                  "label": "1 x 6 Heavy Double Rest",
                  "weight": "220 lbs"
                }
              ],
              "bodyWeight": 0,
              "exerciseKey": "PullDowns"
            },
            {
              "exerciseName": "Lat Pull Overs",
              "sets": [
                {
                  "label": "2 x 6",
                  "weight": "200/220 lbs"
                },
                {
                  "label": "1 x 6 Heavy Double Rest",
                  "weight": "220 lbs"
                }
              ],
              "bodyWeight": 0,
              "exerciseKey": "LatPullOvers"
            },
            {
              "exerciseName": "Barbell Rows",
              "sets": [
                {
                  "weight": "150 lbs",
                  "label": "3 x 8"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "bodyWeight": 0,
              "exerciseKey": "BarbellRows"
            },
            {
              "exerciseName": "Lawnmowers",
              "sets": [
                {
                  "weight": "150 lbs",
                  "label": "3 x 8"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "bodyWeight": 0,
              "exerciseKey": "Lawnmowers"
            },
            {
              "exerciseName": "Hip Thrusters",
              "sets": [
                {
                  "weight": "150 lbs",
                  "label": "3 x 8"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "bodyWeight": 0,
              "exerciseKey": "HipThrusters"
            }
          ]
        },
        {
          "dayName": "Squat Day",
          "exercises": [
            {
              "exerciseName": "Squats",
              "sets": [
                {
                  "weight": "135 / 205 lbs",
                  "label": "1 x 8"
                },
                {
                  "label": "1 x 6 Heavy Double Rest",
                  "weight": "225 lbs"
                }
              ],
              "bodyWeight": 215,
              "exerciseKey": "Squats"
            },
            {
              "exerciseName": "Bulgarian Split Squats",
              "sets": [
                {
                  "weight": "135 / 205 lbs",
                  "label": "1 x 8"
                },
                {
                  "label": "1 x 6 Heavy Double Rest",
                  "weight": "225 lbs"
                }
              ],
              "bodyWeight": 215,
              "exerciseKey": "BulgarianSplitSquats"
            },
            {
              "exerciseName": "Box Jumps",
              "sets": [
                {
                  "weight": "28in",
                  "label": "2 x 8"
                },
                {
                  "label": "1 x 8 ",
                  "weight": "28in"
                }
              ],
              "bodyWeight": 0,
              "exerciseKey": "BoxJumps"
            },
            {
              "exerciseName": "Goblet Lunges",
              "sets": [
                {
                  "label": "3 x 8",
                  "weight": "35 lbs"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "GobletLunges"
            }
          ]
        },
        {
          "dayName": "Miscellaneous Exercises",
          "exercises": [
            {
              "exerciseName": "Super Burpee",
              "sets": [
                {
                  "label": "5x5",
                  "weight": "135 lbs"
                }
              ],
              "exerciseKey": "SuperBurpee"
            },
            {
              "exerciseName": "Planks",
              "sets": [
                {
                  "label": "3 sets",
                  "weight": "1  min"
                },
                {
                  "label": "Rest",
                  "weight": "1 min"
                }
              ],
              "bodyWeight": 230,
              "exerciseKey": "Planks"
            },
            {
              "exerciseName": "Ab Wheel",
              "sets": [
                {
                  "label": "3 x 10",
                  "weight": " BW"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "bodyWeight": 0,
              "exerciseKey": "AbWheel"
            }
          ]
        }
      ],
      "currentDay": 0
    },
    "HooperMuscleBuilding": {
      "workoutName": "Hooper Muscle Building",
      "url": "https://drive.google.com/drive/folders/17y3zMPwP3AUZeGVAYHAktLw9wgiroV_c?usp=drive_link",
      "days": [
        {
          "dayName": "Day 1 Upper Body",
          "exercises": [
            {
              "exerciseName": "Warm Up Cardio",
              "sets": [
                {
                  "label": "10 min",
                  "weight": "HR 135-145"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "WarmUpCardio"
            },
            {
              "exerciseName": "Warm Up Cardio",
              "sets": [
                {
                  "label": "10 min",
                  "weight": "HR 135-145"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "WarmUpCardio"
            },
            {
              "exerciseName": "Shoulder Complex Warm Up",
              "sets": [
                {
                  "label": "3 x 12",
                  "weight": "RPE 4"
                },
                {
                  "label": "calc: percentPrev",
                  "weight": 1.04
                }
              ],
              "exerciseKey": "ShoulderComplexWarmUp"
            },
            {
              "exerciseName": "Dumbbell Bench Press",
              "sets": [
                {
                  "weight": "RPE 7",
                  "label": "3 x 15"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "DumbbellBenchPress"
            },
            {
              "exerciseName": "Dumbbell Row",
              "sets": [
                {
                  "label": "3 x 20",
                  "weight": "RPE 7"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "DumbbellRow"
            },
            {
              "exerciseName": "Dumbbell Shoulder Press",
              "sets": [
                {
                  "label": "3 x 15",
                  "weight": "RPE 7"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "DumbbellShoulderPress"
            },
            {
              "exerciseName": "Pull Ups",
              "sets": [
                {
                  "label": "12 min EMOM",
                  "weight": "2 reps @ set"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "PullUps"
            },
            {
              "exerciseName": "Upright Row",
              "sets": [
                {
                  "label": "3 x 15",
                  "weight": "RPE 7"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "UprightRow"
            },
            {
              "exerciseName": "Finishing Cardio",
              "sets": [
                {
                  "label": "Tabata",
                  "weight": "8 x (20s sprint, 20s rest)"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "FinishingCardio"
            }
          ]
        },
        {
          "dayName": "Day 2 Lower Body",
          "exercises": [
            {
              "exerciseName": "Warm Up Cardio",
              "sets": [
                {
                  "label": "10 min",
                  "weight": "HR 135-145"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "WarmUpCardio"
            },
            {
              "exerciseName": "Goblet Lunges",
              "sets": [
                {
                  "label": "3 x 8 @ leg",
                  "weight": "RPE 4"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "GobletLunges"
            },
            {
              "exerciseName": "Squats",
              "sets": [
                {
                  "weight": "RPE 7",
                  "label": "3 x 8 (90 sec rest)"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "Squats"
            },
            {
              "exerciseName": "Romanian Deadlifts",
              "sets": [
                {
                  "weight": "RPE 7",
                  "label": "3 x 12"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "RomanianDeadlifts"
            },
            {
              "exerciseName": "Walking Lunges",
              "sets": [
                {
                  "weight": "RPE 7",
                  "label": "3 x 20m"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "WalkingLunges"
            },
            {
              "exerciseName": "Box Jumps",
              "sets": [
                {
                  "weight": "RPE 7",
                  "label": "3 x 15"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "BoxJumps"
            },
            {
              "exerciseName": "Finishing Cardio",
              "sets": [
                {
                  "label": "Steady State (20 min)",
                  "weight": " HR 145-155"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "FinishingCardio"
            }
          ]
        },
        {
          "dayName": "Day 4 Upper Body",
          "exercises": [
            {
              "exerciseName": "Warm Up Cardio",
              "sets": [
                {
                  "label": "10 min",
                  "weight": "HR 135-145"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "WarmUpCardio"
            },
            {
              "exerciseName": "Shoulder Complex Warm Up",
              "sets": [
                {
                  "label": "3 x 12",
                  "weight": "RPE 4"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "ShoulderComplexWarmUp"
            },
            {
              "exerciseName": "Incline Dumbbell Press",
              "sets": [
                {
                  "weight": "RPE 7",
                  "label": "3 x 15"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "InclineDumbbellPress"
            },
            {
              "exerciseName": "Lawnmowers",
              "sets": [
                {
                  "weight": "RPE 8",
                  "label": "3 x 15"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "Lawnmowers"
            },
            {
              "exerciseName": "Pull Ups",
              "sets": [
                {
                  "label": "3 x 10 (or 1-2 rep EMOM)",
                  "weight": "RPE 9"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "PullUps"
            },
            {
              "exerciseName": "Push Ups",
              "sets": [
                {
                  "label": "3 x (10 or 3 RIR)",
                  "weight": "BW"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "PushUps"
            },
            {
              "exerciseName": "Dumbbell Curls",
              "sets": [
                {
                  "label": "4 x 15",
                  "weight": "RPE 8"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "DumbbellCurls"
            },
            {
              "exerciseName": "Tricep Extension",
              "sets": [
                {
                  "label": "4 x 15",
                  "weight": "RPE 8"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "TricepExtension"
            },
            {
              "exerciseName": "Finishing Cardio",
              "sets": [
                {
                  "label": "Suitcase Carry Shuttle",
                  "weight": "5 x (10x10m = 1 set)"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "FinishingCardio"
            }
          ]
        },
        {
          "dayName": "Day 5 Lower Body",
          "exercises": [
            {
              "exerciseName": "Leg Complex Stretch",
              "sets": [
                {
                  "label": "front / back / hip / calf @ leg",
                  "weight": "20 sec"
                },
                {
                  "label": "side / side / middle",
                  "weight": "20 sec"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "LegComplexStretch"
            },
            {
              "exerciseName": "Side Planks",
              "sets": [
                {
                  "label": "8-6-4-2 reps ",
                  "weight": "10 sec @ side @ rep"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "SidePlanks"
            },
            {
              "exerciseName": "Glute Activation",
              "sets": [
                {
                  "label": "Banded walk",
                  "weight": "2 x 10m (down & back)"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "GluteActivation"
            },
            {
              "exerciseName": "Trap Bar Deadlifts",
              "sets": [
                {
                  "label": "3 x 12",
                  "weight": "RPE 7"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "TrapBarDeadlifts"
            },
            {
              "exerciseName": "Walking Lunges",
              "sets": [
                {
                  "weight": "RPE 7",
                  "label": "3 x 20m"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "WalkingLunges"
            },
            {
              "exerciseName": "Nordic Leg Curl",
              "sets": [
                {
                  "weight": "3 x 3 sec negative",
                  "label": "5 min EMOM"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "NordicLegCurl"
            },
            {
              "exerciseName": "Finishing Cardio",
              "sets": [
                {
                  "label": "Steady State (20 min)",
                  "weight": " HR 145-155"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "FinishingCardio"
            }
          ]
        },
        {
          "dayName": "Day 6 Event Day",
          "exercises": [
            {
              "exerciseName": "Leg Complex Stretch",
              "sets": [
                {
                  "label": "front / back @ leg",
                  "weight": "20 sec"
                },
                {
                  "label": "side / side / middle @ leg",
                  "weight": "20 sec"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "LegComplexStretch"
            },
            {
              "exerciseName": "Side Planks",
              "sets": [
                {
                  "label": "8-6-4-2 reps @ side",
                  "weight": "10 sec @ rep"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "SidePlanks"
            },
            {
              "exerciseName": "Glute Activation",
              "sets": [
                {
                  "label": "Banded walk",
                  "weight": "2 x 10m (down & back)"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "GluteActivation"
            },
            {
              "exerciseName": "Shoulder Complex Warm Up",
              "sets": [
                {
                  "label": "3 x 12",
                  "weight": "RPE 4"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "ShoulderComplexWarmUp"
            },
            {
              "exerciseName": "Clean and Press",
              "sets": [
                {
                  "label": "3 x 8",
                  "weight": "RPE 7"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "CleanandPress"
            },
            {
              "exerciseName": "Loading Medley",
              "sets": [
                {
                  "weight": "RPE 8",
                  "label": "2 x 3 implements x 20m"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "LoadingMedley"
            }
          ]
        }
      ],
      "currentDay": 55
    },
    "PowerLiftingEndingWorkout": {
      "workoutName": "Power Lifting Ending Workout",
      "url": "https://drive.google.com/drive/folders/1wS2nOZb67Mp6y4llOIpWIRDlHVEeWWX6",
      "days": [
        {
          "dayName": "Bench Day",
          "exercises": [
            {
              "exerciseName": "Bench Press",
              "sets": [
                {
                  "label": "2 x 6",
                  "weight": " 225 / 180 lbs"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "BenchPress"
            },
            {
              "exerciseName": "Incline Dumbbell Press",
              "sets": [
                {
                  "weight": "150 lbs",
                  "label": "2 x 8"
                },
                {
                  "label": "1 x 8 ",
                  "weight": "150 lbs"
                }
              ],
              "xht": 0,
              "exerciseKey": "InclineDumbbellPress"
            },
            {
              "exerciseName": "Single Dumbbell Shoulder Press",
              "sets": [
                {
                  "label": "5x5",
                  "weight": " 150 lbs"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "SingleDumbbellShoulderPress"
            },
            {
              "exerciseName": "Barbell Shoulder Press",
              "sets": [
                {
                  "label": "2 x 6",
                  "weight": "135 lbs"
                },
                {
                  "label": "1 x 6 Heavy Double Rest",
                  "weight": "155 lbs"
                }
              ],
              "exerciseKey": "BarbellShoulderPress"
            }
          ]
        },
        {
          "dayName": "Deadlift Day",
          "exercises": [
            {
              "exerciseName": "Trap Bar Deadlifts",
              "sets": [
                {
                  "label": "2 x 8",
                  "weight": "235 lbs"
                },
                {
                  "label": "1 x 6 Heavy Double Rest",
                  "weight": "355 lbs / 265 lbs"
                }
              ],
              "exerciseKey": "TrapBarDeadlifts"
            },
            {
              "exerciseName": "Standard Deadlifts",
              "sets": [
                {
                  "label": "2 x 6",
                  "weight": "235 lbs"
                },
                {
                  "label": "1 x 6 Heavy Double Rest",
                  "weight": "355 lbs / 265 lbs"
                }
              ],
              "exerciseKey": "StandardDeadlifts"
            },
            {
              "exerciseName": "Pull Downs",
              "sets": [
                {
                  "label": "2 x 6",
                  "weight": "200/220 lbs"
                },
                {
                  "label": "1 x 6 Heavy Double Rest",
                  "weight": "220 lbs"
                }
              ],
              "exerciseKey": "PullDowns"
            },
            {
              "exerciseName": "Lat Pull Overs",
              "sets": [
                {
                  "label": "2 x 6",
                  "weight": "200/220 lbs"
                },
                {
                  "label": "1 x 6 Heavy Double Rest",
                  "weight": "220 lbs"
                }
              ],
              "exerciseKey": "LatPullOvers"
            },
            {
              "exerciseName": "Barbell Rows",
              "sets": [
                {
                  "weight": "150 lbs",
                  "label": "3 x 8"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "BarbellRows"
            },
            {
              "exerciseName": "Lawnmowers",
              "sets": [
                {
                  "weight": "150 lbs",
                  "label": "3 x 8"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "Lawnmowers"
            },
            {
              "exerciseName": "Hip Thrusters",
              "sets": [
                {
                  "weight": "150 lbs",
                  "label": "3 x 8"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "HipThrusters"
            }
          ]
        },
        {
          "dayName": "Squat Day",
          "exercises": [
            {
              "exerciseName": "Squats",
              "sets": [
                {
                  "weight": "135 / 205 lbs",
                  "label": "1 x 8"
                },
                {
                  "label": "1 x 6 Heavy Double Rest",
                  "weight": "225 lbs"
                }
              ],
              "exerciseKey": "Squats"
            },
            {
              "exerciseName": "Bulgarian Split Squats",
              "sets": [
                {
                  "weight": "135 / 205 lbs",
                  "label": "1 x 8"
                },
                {
                  "label": "1 x 6 Heavy Double Rest",
                  "weight": "225 lbs"
                }
              ],
              "exerciseKey": "BulgarianSplitSquats"
            },
            {
              "exerciseName": "Box Jumps",
              "sets": [
                {
                  "weight": "28in",
                  "label": "2 x 8"
                },
                {
                  "label": "1 x 8 ",
                  "weight": "28in"
                }
              ],
              "exerciseKey": "BoxJumps"
            },
            {
              "exerciseName": "Goblet Lunges",
              "sets": [
                {
                  "label": "3 x 8",
                  "weight": "35 lbs"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "GobletLunges"
            }
          ]
        },
        {
          "dayName": "Miscellaneous Exercises",
          "exercises": [
            {
              "exerciseName": "Super Burpee",
              "sets": [
                {
                  "label": "5x5",
                  "weight": "135 lbs"
                }
              ],
              "exerciseKey": "SuperBurpee"
            },
            {
              "exerciseName": "Planks",
              "sets": [
                {
                  "label": "3 sets",
                  "weight": "1  min"
                },
                {
                  "label": "Rest",
                  "weight": "1 min"
                }
              ],
              "exerciseKey": "Planks"
            },
            {
              "exerciseName": "Ab Wheel",
              "sets": [
                {
                  "label": "3 x 10",
                  "weight": " BW"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "AbWheel"
            }
          ]
        }
      ],
      "currentDay": 1
    },
    "NaturalLifter'sWorkout": {
      "workoutName": "Natural Lifter's Workout",
      "url": "https://www.t-nation.com/training/the-best-damn-workout-plan-for-natural-lifters",
      "days": [
        {
          "dayName": "Monday - Pull 1",
          "exercises": [
            {
              "exerciseName": "Trap Bar Deadlifts",
              "sets": [
                {
                  "label": "2 x 8",
                  "weight": "235 lbs"
                },
                {
                  "label": "1 x 6 Heavy Double Rest",
                  "weight": "355 lbs / 265 lbs"
                }
              ],
              "bodyWeight": 215,
              "exerciseKey": "TrapBarDeadlifts"
            },
            {
              "exerciseName": "Standard Deadlifts",
              "sets": [
                {
                  "label": "2 x 6",
                  "weight": "235 lbs"
                },
                {
                  "label": "1 x 6 Heavy Double Rest",
                  "weight": "355 lbs / 265 lbs"
                }
              ],
              "bodyWeight": 215,
              "exerciseKey": "StandardDeadlifts"
            },
            {
              "exerciseName": "Pull Downs",
              "sets": [
                {
                  "label": "2 x 6",
                  "weight": "200/220 lbs"
                },
                {
                  "label": "1 x 6 Heavy Double Rest",
                  "weight": "220 lbs"
                }
              ],
              "bodyWeight": 218,
              "exerciseKey": "PullDowns"
            },
            {
              "exerciseName": "Dumbbell Curl",
              "sets": [
                {
                  "label": "2 x 6",
                  "weight": "100/110 lbs"
                },
                {
                  "label": "1 x 6 Heavy Double Rest",
                  "weight": "110 lbs"
                }
              ],
              "exerciseKey": "DumbbellCurls"
            }
          ]
        },
        {
          "dayName": "Tuesday - Cardio 1",
          "exercises": [
            {
              "exerciseName": "Super Burpee",
              "sets": [
                {
                  "weight": "35 lbs",
                  "label": "5x5"
                }
              ],
              "exerciseKey": "SuperBurpee"
            },
            {
              "exerciseName": "Planks",
              "sets": [
                {
                  "label": "3 sets",
                  "weight": "1  min"
                },
                {
                  "label": "Rest",
                  "weight": "1 min"
                }
              ],
              "bodyWeight": 230,
              "exerciseKey": "Planks"
            }
          ]
        },
        {
          "dayName": "Wednesday - Push 1",
          "exercises": [
            {
              "exerciseName": "Box Jumps",
              "sets": [
                {
                  "weight": "28in",
                  "label": "2 x 8"
                },
                {
                  "label": "1 x 8 ",
                  "weight": "28in"
                }
              ],
              "bodyWeight": 0,
              "exerciseKey": "BoxJumps"
            },
            {
              "exerciseName": "Kettle Bell Swings",
              "sets": [
                {
                  "weight": "28in",
                  "label": "2 x 8"
                },
                {
                  "label": "1 x 8 ",
                  "weight": "28in"
                }
              ],
              "bodyWeight": 215,
              "exerciseKey": "KettleBellSwings"
            },
            {
              "exerciseName": "Bench Press",
              "sets": [
                {
                  "label": "2 x 6",
                  "weight": " 225 / 180 lbs"
                },
                {
                  "label": "1 x 6 Heavy Double Rest",
                  "weight": "265 / 200 lbs"
                }
              ],
              "exerciseKey": "BenchPress"
            },
            {
              "exerciseName": "Dumbbell Bench Press",
              "sets": [
                {
                  "label": "2 x 6",
                  "weight": " 225 / 180 lbs"
                },
                {
                  "label": "1 x 6 Heavy Double Rest",
                  "weight": "265 / 200 lbs"
                }
              ],
              "exerciseKey": "DumbbellBenchPress"
            },
            {
              "exerciseName": "Skull Crushers",
              "sets": [
                {
                  "label": "2 x 6",
                  "weight": "80 lbs"
                },
                {
                  "label": "1 x 6 mTor Activation Set",
                  "weight": "90 lbs"
                }
              ],
              "exerciseKey": "SkullCrushers"
            }
          ]
        },
        {
          "dayName": "Thursday - Cardio 2",
          "exercises": [
            {
              "exerciseName": "Bike Ride",
              "sets": [
                {
                  "weight": "40 min",
                  "label": "3 miles"
                }
              ],
              "exerciseKey": "BikeRide"
            },
            {
              "exerciseName": "Hanging Crunches",
              "sets": [
                {
                  "label": "2 x 15",
                  "weight": " BW"
                },
                {
                  "label": "1 x 15",
                  "weight": "BW"
                }
              ],
              "exerciseKey": "HangingCrunches"
            }
          ]
        },
        {
          "dayName": "Friday - Push 2",
          "exercises": [
            {
              "exerciseName": "Zercher Squats",
              "sets": [
                {
                  "weight": "135 / 205 lbs",
                  "label": "1 x 8"
                },
                {
                  "label": "1 x 6 Heavy Double Rest",
                  "weight": "225 lbs"
                }
              ],
              "bodyWeight": 215,
              "exerciseKey": "ZercherSquats"
            },
            {
              "exerciseName": "Kettle Bell Swings",
              "sets": [
                {
                  "weight": "135 / 205 lbs",
                  "label": "1 x 8"
                },
                {
                  "label": "1 x 6 Heavy Double Rest",
                  "weight": "225 lbs"
                }
              ],
              "bodyWeight": 215,
              "exerciseKey": "KettleBellSwings"
            },
            {
              "exerciseName": "Barbell Shoulder Press",
              "sets": [
                {
                  "label": "2 x 6",
                  "weight": "135 lbs"
                },
                {
                  "label": "1 x 6 Heavy Double Rest",
                  "weight": "155 lbs"
                }
              ],
              "exerciseKey": "BarbellShoulderPress"
            },
            {
              "exerciseName": "Dumbbell Shoulder Press",
              "sets": [
                {
                  "label": "2 x 6",
                  "weight": "135 lbs"
                },
                {
                  "label": "1 x 6 Heavy Double Rest",
                  "weight": "155 lbs"
                }
              ],
              "exerciseKey": "DumbbellShoulderPress"
            },
            {
              "exerciseName": "Rear Delt Laterial Raises",
              "sets": [
                {
                  "label": "2 x 8",
                  "weight": "60 lbs"
                },
                {
                  "label": "1 x 6 + 8 + 10 Drop Set",
                  "weight": "70/60/50 lbs"
                }
              ],
              "exerciseKey": "RearDeltLaterialRaises"
            }
          ]
        },
        {
          "dayName": "Saturday - Extra Volume",
          "exercises": [
            {
              "exerciseName": "Incline Dumbbell Bench Press",
              "sets": [
                {
                  "weight": "50/75 lbs",
                  "label": "2x8"
                },
                {
                  "weight": "75 lns",
                  "label": "2x8 Heavy double rest"
                }
              ],
              "exerciseKey": "InclineDumbbellPress"
            },
            {
              "exerciseName": "Active Rest",
              "sets": [
                {
                  "weight": "",
                  "label": ""
                }
              ],
              "exerciseKey": "ActiveRest"
            }
          ]
        },
        {
          "dayName": "Sunday - Rest",
          "exercises": [
            {
              "exerciseName": "Rest",
              "sets": [],
              "exerciseKey": "Rest"
            }
          ]
        }
      ],
      "currentDay": 70
    },
    "HooperWeightloss": {
      "workoutName": "Hooper Weightloss",
      "url": "https://docs.google.com/spreadsheets/d/1L2KFLD-gT1OtpQBlK2OigI7xFe1TEEB9/edit?usp=drive_link&ouid=106597586590519480482&rtpof=true&sd=true",
      "days": [
        {
          "dayName": "Day 1 Upper Body",
          "exercises": [
            {
              "exerciseName": "Warm Up Cardio",
              "sets": [
                {
                  "label": "10 min",
                  "weight": "HR 135-145"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "WarmUpCardio"
            },
            {
              "exerciseName": "Shoulder Complex Warm Up",
              "sets": [
                {
                  "label": "3 x 12",
                  "weight": "RPE 4"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "ShoulderComplexWarmUp"
            },
            {
              "exerciseName": "Dumbbell Bench Press",
              "sets": [
                {
                  "weight": "RPE 7",
                  "label": "3 x 15"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "DumbbellBenchPress"
            },
            {
              "exerciseName": "Dumbbell Row",
              "sets": [
                {
                  "label": "3 x 20",
                  "weight": "RPE 7"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "DumbbellRow"
            },
            {
              "exerciseName": "Dumbbell Shoulder Press",
              "sets": [
                {
                  "label": "3 x 15",
                  "weight": "RPE 7"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "DumbbellShoulderPress"
            },
            {
              "exerciseName": "Pull Ups",
              "sets": [
                {
                  "label": "12 min EMOM",
                  "weight": "2 reps @ set"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "PullUps"
            },
            {
              "exerciseName": "Upright Row",
              "sets": [
                {
                  "label": "3 x 15",
                  "weight": "RPE 7"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "UprightRow"
            },
            {
              "exerciseName": "Finishing Cardio",
              "sets": [
                {
                  "label": "Tabata",
                  "weight": "8 x (20s sprint, 20s rest)"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "FinishingCardio"
            }
          ]
        },
        {
          "dayName": "Day 2 Lower Body",
          "exercises": [
            {
              "exerciseName": "Warm Up Cardio",
              "sets": [
                {
                  "label": "10 min",
                  "weight": "HR 135-145"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "WarmUpCardio"
            },
            {
              "exerciseName": "Goblet Lunges",
              "sets": [
                {
                  "label": "3 x 8 @ leg",
                  "weight": "RPE 4"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "GobletLunges"
            },
            {
              "exerciseName": "Squats",
              "sets": [
                {
                  "weight": "RPE 7",
                  "label": "3 x 8 (90 sec rest)"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "Squats"
            },
            {
              "exerciseName": "Romanian Deadlifts",
              "sets": [
                {
                  "weight": "RPE 7",
                  "label": "3 x 12"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "RomanianDeadlifts"
            },
            {
              "exerciseName": "Walking Lunges",
              "sets": [
                {
                  "weight": "RPE 7",
                  "label": "3 x 20m"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "WalkingLunges"
            },
            {
              "exerciseName": "Box Jumps",
              "sets": [
                {
                  "weight": "RPE 7",
                  "label": "3 x 15"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "BoxJumps"
            },
            {
              "exerciseName": "Finishing Cardio",
              "sets": [
                {
                  "label": "Steady State (20 min)",
                  "weight": " HR 145-155"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "FinishingCardio"
            }
          ]
        },
        {
          "dayName": "Day 4 Upper Body",
          "exercises": [
            {
              "exerciseName": "Warm Up Cardio",
              "sets": [
                {
                  "label": "10 min",
                  "weight": "HR 135-145"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "WarmUpCardio"
            },
            {
              "exerciseName": "Shoulder Complex Warm Up",
              "sets": [
                {
                  "label": "3 x 12",
                  "weight": "RPE 4"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "ShoulderComplexWarmUp"
            },
            {
              "exerciseName": "Incline Dumbbell Press",
              "sets": [
                {
                  "weight": "RPE 7",
                  "label": "3 x 15"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "InclineDumbbellPress"
            },
            {
              "exerciseName": "Lawnmowers",
              "sets": [
                {
                  "weight": "RPE 8",
                  "label": "3 x 15"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "Lawnmowers"
            },
            {
              "exerciseName": "Pull Ups",
              "sets": [
                {
                  "label": "3 x 10 (or 1-2 rep EMOM)",
                  "weight": "RPE 9"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "PullUps"
            },
            {
              "exerciseName": "Push Ups",
              "sets": [
                {
                  "label": "3 x (10 or 3 RIR)",
                  "weight": "BW"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "PushUps"
            },
            {
              "exerciseName": "Dumbbell Curls",
              "sets": [
                {
                  "label": "4 x 15",
                  "weight": "RPE 8"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "DumbbellCurls"
            },
            {
              "exerciseName": "Tricep Extension",
              "sets": [
                {
                  "label": "4 x 15",
                  "weight": "RPE 8"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "TricepExtension"
            },
            {
              "exerciseName": "Finishing Cardio",
              "sets": [
                {
                  "label": "Suitcase Carry Shuttle",
                  "weight": "5 x (10x10m = 1 set)"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "FinishingCardio"
            }
          ]
        },
        {
          "dayName": "Day 5 Lower Body",
          "exercises": [
            {
              "exerciseName": "Leg Complex Stretch",
              "sets": [
                {
                  "label": "front / back / hip / calf @ leg",
                  "weight": "20 sec"
                },
                {
                  "label": "side / side / middle",
                  "weight": "20 sec"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "LegComplexStretch"
            },
            {
              "exerciseName": "Side Planks",
              "sets": [
                {
                  "label": "8-6-4-2 reps ",
                  "weight": "10 sec @ side @ rep"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "SidePlanks"
            },
            {
              "exerciseName": "Glute Activation",
              "sets": [
                {
                  "label": "Banded walk",
                  "weight": "2 x 10m (down & back)"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "GluteActivation"
            },
            {
              "exerciseName": "Trap Bar Deadlifts",
              "sets": [
                {
                  "label": "3 x 12",
                  "weight": "RPE 7"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "TrapBarDeadlifts"
            },
            {
              "exerciseName": "Walking Lunges",
              "sets": [
                {
                  "weight": "RPE 7",
                  "label": "3 x 20m"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "WalkingLunges"
            },
            {
              "exerciseName": "Nordic Leg Curl",
              "sets": [
                {
                  "weight": "3 x 3 sec negative",
                  "label": "5 min EMOM"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "NordicLegCurl"
            },
            {
              "exerciseName": "Finishing Cardio",
              "sets": [
                {
                  "label": "Steady State (20 min)",
                  "weight": " HR 145-155"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "FinishingCardio"
            }
          ]
        },
        {
          "dayName": "Day 6 Event Day",
          "exercises": [
            {
              "exerciseName": "Leg Complex Stretch",
              "sets": [
                {
                  "label": "front / back @ leg",
                  "weight": "20 sec"
                },
                {
                  "label": "side / side / middle @ leg",
                  "weight": "20 sec"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "LegComplexStretch"
            },
            {
              "exerciseName": "Side Planks",
              "sets": [
                {
                  "label": "8-6-4-2 reps @ side",
                  "weight": "10 sec @ rep"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "SidePlanks"
            },
            {
              "exerciseName": "Glute Activation",
              "sets": [
                {
                  "label": "Banded walk",
                  "weight": "2 x 10m (down & back)"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "GluteActivation"
            },
            {
              "exerciseName": "Shoulder Complex Warm Up",
              "sets": [
                {
                  "label": "3 x 12",
                  "weight": "RPE 4"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "ShoulderComplexWarmUp"
            },
            {
              "exerciseName": "Clean and Press",
              "sets": [
                {
                  "label": "3 x 8",
                  "weight": "RPE 7"
                },
                {
                  "label": "",
                  "weight": ""
                }
              ],
              "exerciseKey": "CleanandPress"
            },
            {
              "exerciseName": "Loading Medley",
              "sets": [
                {
                  "weight": "RPE 8",
                  "label": "2 x 3 implements x 20m"
                },
                {
                  "label": "",
                  "weight": " "
                }
              ],
              "exerciseKey": "LoadingMedley"
            }
          ]
        }
      ],
      "currentDay": 58
    },
    "ChargersWorkout": {
      "workoutName": "Charger's Workout",
      "url": "",
      "days": [
        {
          "dayName": "Tuesday",
          "exercises": [
            {
              "exerciseName": "Trap Bar Deadlifts",
              "sets": [
                {
                  "label": "3 x 6-8",
                  "weight": " "
                }
              ],
              "exerciseKey": "TrapBarDeadlifts"
            },
            {
              "exerciseName": "Dumbbell Shoulder Press",
              "sets": [
                {
                  "label": "3 x 6-8",
                  "weight": " "
                }
              ],
              "exerciseKey": "DumbbellShoulderPress"
            }
          ]
        },
        {
          "dayName": "Wednesday",
          "exercises": [
            {
              "exerciseName": "Farmers Walk",
              "sets": [
                {
                  "label": "3 x 6-8",
                  "weight": " "
                }
              ],
              "exerciseKey": "FarmersWalk"
            },
            {
              "exerciseName": "Pull Downs",
              "sets": [
                {
                  "label": "3 x 6-8",
                  "weight": " "
                }
              ],
              "exerciseKey": "PullDowns"
            }
          ]
        },
        {
          "dayName": "Thursday",
          "exercises": [
            {
              "exerciseName": "Dumbbell Shoulder Press",
              "sets": [
                {
                  "label": "3 x 6-8",
                  "weight": " "
                }
              ],
              "exerciseKey": "DumbbellShoulderPress"
            },
            {
              "exerciseName": "Step Downs",
              "sets": [
                {
                  "label": "3 x 6-8",
                  "weight": " "
                }
              ],
              "exerciseKey": "StepDowns"
            }
          ]
        },
        {
          "dayName": "Saturday",
          "exercises": [
            {
              "exerciseName": "Kettlebell Row",
              "sets": [
                {
                  "label": "3 x 6-8",
                  "weight": " "
                }
              ],
              "exerciseKey": "KettlebellRow"
            },
            {
              "exerciseName": "Dumbbell Curls",
              "sets": [
                {
                  "label": "3 x 6-8",
                  "weight": " "
                }
              ],
              "exerciseKey": "DumbbellCurls"
            }
          ]
        },
        {
          "dayName": "Sunday",
          "exercises": [
            {
              "exerciseName": "Box Squat",
              "sets": [
                {
                  "label": "3 x 6-8",
                  "weight": " "
                }
              ],
              "exerciseKey": "BoxSquat"
            },
            {
              "exerciseName": "Kettlebell Swing",
              "sets": [
                {
                  "label": "3 x 6-8",
                  "weight": " "
                }
              ],
              "exerciseKey": "KettleBellSwings"
            }
          ]
        }
      ],
      "currentDay": 0
    }
  },
  "exerciseDb": {
    "BenchPress": {
      "rpeInput": [],
      "maxHistory": [],
      "tonnageInput": [],
      "tonnageHistory": []
    },
    "InclineDumbbellPress": {
      "maxHistory": [],
      "tonnageInput": [],
      "tonnageHistory": []
    },
    "SingleDumbbellShoulderPress": {
      "maxHistory": [],
      "tonnageInput": [],
      "tonnageHistory": []
    },
    "BarbellShoulderPress": {
      "maxHistory": [],
      "tonnageInput": [],
      "tonnageHistory": []
    },
    "TrapBarDeadlifts": {
      "maxHistory": [],
      "tonnageInput": [],
      "tonnageHistory": []
    },
    "StandardDeadlifts": {
      "maxHistory": [],
      "tonnageInput": [],
      "tonnageHistory": []
    },
    "PullDowns": {
      "maxHistory": [],
      "tonnageInput": [],
      "tonnageHistory": []
    },
    "LatPullOvers": {
      "maxHistory": [],
      "tonnageInput": [],
      "tonnageHistory": []
    },
    "BarbellRows": {
      "maxHistory": [],
      "tonnageInput": [],
      "tonnageHistory": []
    },
    "Lawnmowers": {
      "maxHistory": [],
      "tonnageInput": [],
      "tonnageHistory": []
    },
    "HipThrusters": {
      "maxHistory": [],
      "tonnageInput": [],
      "tonnageHistory": []
    },
    "Squats": {
      "maxHistory": [],
      "tonnageInput": [],
      "tonnageHistory": []
    },
    "BulgarianSplitSquats": {
      "maxHistory": [],
      "tonnageInput": [],
      "tonnageHistory": []
    },
    "BoxJumps": {
      "maxHistory": [],
      "tonnageInput": [],
      "tonnageHistory": []
    },
    "GobletLunges": {
      "maxHistory": [],
      "tonnageInput": [],
      "tonnageHistory": []
    },
    "SuperBurpee": {
      "maxHistory": [],
      "tonnageInput": [],
      "tonnageHistory": []
    },
    "Planks": {
      "maxHistory": [],
      "tonnageInput": [],
      "tonnageHistory": []
    },
    "AbWheel": {
      "maxHistory": [],
      "tonnageInput": [],
      "tonnageHistory": []
    },
    "WarmUpCardio": {
      "maxHistory": [],
      "tonnageHistory": []
    },
    "ShoulderComplexWarmUp": {
      "rpeInput": [],
      "maxHistory": [],
      "tonnageInput": [],
      "tonnageHistory": []
    },
    "DumbbellBenchPress": {
      "rpeInput": [],
      "maxHistory": [],
      "tonnageInput": [],
      "tonnageHistory": []
    },
    "DumbbellRow": {
      "rpeInput": [],
      "maxHistory": [],
      "tonnageInput": [],
      "tonnageHistory": []
    },
    "DumbbellShoulderPress": {
      "rpeInput": [],
      "maxHistory": [],
      "tonnageInput": [],
      "tonnageHistory": []
    },
    "PullUps": {
      "rpeInput": [],
      "maxHistory": [],
      "tonnageInput": [],
      "tonnageHistory": []
    },
    "UprightRow": {
      "rpeInput": [],
      "maxHistory": [],
      "tonnageInput": [],
      "tonnageHistory": []
    },
    "FinishingCardio": {
      "maxHistory": [],
      "tonnageHistory": []
    },
    "RomanianDeadlifts": {
      "rpeInput": [],
      "maxHistory": [],
      "tonnageInput": [],
      "tonnageHistory": []
    },
    "WalkingLunges": {
      "rpeInput": [],
      "maxHistory": [],
      "tonnageInput": [],
      "tonnageHistory": []
    },
    "PushUps": {
      "rpeInput": [],
      "maxHistory": [],
      "tonnageInput": [],
      "tonnageHistory": []
    },
    "DumbbellCurls": {
      "rpeInput": [],
      "maxHistory": [],
      "tonnageInput": [],
      "tonnageHistory": []
    },
    "TricepExtension": {
      "rpeInput": [],
      "maxHistory": [],
      "tonnageInput": [],
      "tonnageHistory": []
    },
    "LegComplexStretch": {
      "maxHistory": [],
      "tonnageHistory": []
    },
    "SidePlanks": {
      "rpeInput": [],
      "maxHistory": [],
      "tonnageInput": [],
      "tonnageHistory": []
    },
    "GluteActivation": {
      "maxHistory": [],
      "tonnageHistory": []
    },
    "NordicLegCurl": {
      "maxHistory": [],
      "tonnageHistory": []
    },
    "CleanandPress": {
      "rpeInput": [],
      "maxHistory": [],
      "tonnageInput": [],
      "tonnageHistory": []
    },
    "LoadingMedley": {
      "maxHistory": [],
      "tonnageHistory": []
    },
    "KettleBellSwings": {
      "maxHistory": [],
      "tonnageInput": [],
      "tonnageHistory": []
    },
    "SkullCrushers": {
      "maxHistory": [],
      "tonnageInput": [],
      "tonnageHistory": []
    },
    "BikeRide": {
      "maxHistory": [],
      "tonnageHistory": []
    },
    "HangingCrunches": {
      "maxHistory": [],
      "tonnageInput": [],
      "tonnageHistory": []
    },
    "ZercherSquats": {
      "maxHistory": [],
      "tonnageInput": [],
      "tonnageHistory": []
    },
    "RearDeltLaterialRaises": {
      "maxHistory": [],
      "tonnageInput": [],
      "tonnageHistory": []
    },
    "ActiveRest": {
      "tonnageInput": [],
      "maxHistory": [],
      "tonnageHistory": []
    },
    "Rest": {
      "tonnageInput": [],
      "maxHistory": [],
      "tonnageHistory": []
    },
    "FarmersWalk": {
      "rpeInput": [],
      "maxHistory": [],
      "tonnageInput": [],
      "tonnageHistory": []
    },
    "StepDowns": {
      "rpeInput": [],
      "maxHistory": [],
      "tonnageInput": [],
      "tonnageHistory": []
    },
    "KettlebellRow": {
      "rpeInput": [],
      "maxHistory": [],
      "tonnageInput": [],
      "tonnageHistory": []
    },
    "BoxSquat": {
      "rpeInput": [],
      "maxHistory": [],
      "tonnageInput": [],
      "tonnageHistory": []
    }
  }
}
`