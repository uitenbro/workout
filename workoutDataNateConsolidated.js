
var workoutJson = `
{
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
              "exerciseName": "Incline Dumbbell Press",
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
                  "weight": ""
                }
              ],
              "exerciseKey": "LoadingMedley"
            }
          ]
        }
      ],
      "currentDay": 58
    }
  },
  "exerciseDb": {
    "BenchPress": {
      "rpeInput": [
        [
          1,
          10,
          "315"
        ],
        [
          6,
          4,
          "0"
        ]
      ],
      "maxHistory": [
        {
          "date": "2021-07-07T01:09:57.324Z",
          "equivalentMax": 234
        },
        {
          "date": "2021-07-07T01:09:57.324Z",
          "equivalentMax": 234
        },
        {
          "date": "2021-07-07T01:09:57.324Z",
          "equivalentMax": 234
        },
        {
          "date": "2021-07-07T01:09:57.324Z",
          "equivalentMax": 234
        },
        {
          "date": "2021-07-14T01:53:07.809Z",
          "equivalentMax": 234
        },
        {
          "date": "2021-07-14T01:53:07.809Z",
          "equivalentMax": 234
        },
        {
          "date": "2021-07-14T01:53:07.809Z",
          "equivalentMax": 234
        },
        {
          "date": "2021-07-14T01:53:07.809Z",
          "equivalentMax": 234
        },
        {
          "date": "2021-08-18T12:16:06.204Z",
          "equivalentMax": 260
        },
        {
          "date": "2021-08-18T12:16:06.204Z",
          "equivalentMax": 260
        },
        {
          "date": "2021-08-18T12:16:06.204Z",
          "equivalentMax": 260
        },
        {
          "date": "2021-08-18T12:16:06.204Z",
          "equivalentMax": 260
        },
        {
          "date": "2021-08-25T10:52:11.924Z",
          "equivalentMax": 272
        },
        {
          "date": "2021-08-25T10:52:11.924Z",
          "equivalentMax": 272
        },
        {
          "date": "2021-08-25T10:52:11.924Z",
          "equivalentMax": 272
        },
        {
          "date": "2021-08-25T10:52:11.924Z",
          "equivalentMax": 272
        },
        {
          "date": "2021-09-01T10:56:28.055Z",
          "equivalentMax": 270
        },
        {
          "date": "2021-09-01T10:56:28.055Z",
          "equivalentMax": 270
        },
        {
          "date": "2021-09-01T10:56:28.055Z",
          "equivalentMax": 270
        },
        {
          "date": "2021-09-01T10:56:28.055Z",
          "equivalentMax": 270
        },
        {
          "date": "2021-09-08T10:55:54.977Z",
          "equivalentMax": 278
        },
        {
          "date": "2021-09-08T10:55:54.977Z",
          "equivalentMax": 278
        },
        {
          "date": "2021-09-08T10:55:54.977Z",
          "equivalentMax": 278
        },
        {
          "date": "2021-09-08T10:55:54.977Z",
          "equivalentMax": 278
        },
        {
          "date": "2021-09-15T11:09:16.216Z",
          "equivalentMax": 278
        },
        {
          "date": "2021-09-15T11:09:16.216Z",
          "equivalentMax": 278
        },
        {
          "date": "2021-09-15T11:09:16.216Z",
          "equivalentMax": 278
        },
        {
          "date": "2021-09-15T11:09:16.216Z",
          "equivalentMax": 278
        },
        {
          "date": "2021-09-22T10:56:32.839Z",
          "equivalentMax": 278
        },
        {
          "date": "2021-09-22T10:56:32.839Z",
          "equivalentMax": 278
        },
        {
          "date": "2021-09-22T10:56:32.839Z",
          "equivalentMax": 278
        },
        {
          "date": "2021-09-22T10:56:32.839Z",
          "equivalentMax": 278
        },
        {
          "date": "2021-10-06T11:14:37.629Z",
          "equivalentMax": 295
        },
        {
          "date": "2021-10-06T11:14:37.629Z",
          "equivalentMax": 295
        },
        {
          "date": "2021-10-06T11:14:37.629Z",
          "equivalentMax": 295
        },
        {
          "date": "2021-10-06T11:14:37.629Z",
          "equivalentMax": 295
        },
        {
          "date": "2021-10-15T10:53:48.775Z",
          "equivalentMax": 278
        },
        {
          "date": "2021-10-15T10:53:48.775Z",
          "equivalentMax": 278
        },
        {
          "date": "2021-10-15T10:53:48.775Z",
          "equivalentMax": 278
        },
        {
          "date": "2021-10-15T10:53:48.775Z",
          "equivalentMax": 278
        },
        {
          "date": "2021-10-20T10:54:38.948Z",
          "equivalentMax": 289
        },
        {
          "date": "2021-10-20T10:54:38.948Z",
          "equivalentMax": 289
        },
        {
          "date": "2021-10-20T10:54:38.948Z",
          "equivalentMax": 289
        },
        {
          "date": "2021-10-20T10:54:38.948Z",
          "equivalentMax": 289
        },
        {
          "date": "2022-01-01T21:27:25.926Z",
          "equivalentMax": 263
        },
        {
          "date": "2022-01-01T21:27:25.926Z",
          "equivalentMax": 263
        },
        {
          "date": "2022-01-01T21:27:25.926Z",
          "equivalentMax": 263
        },
        {
          "date": "2022-01-01T21:27:25.926Z",
          "equivalentMax": 263
        },
        {
          "date": "2022-01-09T21:46:26.258Z",
          "equivalentMax": 281
        },
        {
          "date": "2022-01-09T21:46:26.258Z",
          "equivalentMax": 281
        },
        {
          "date": "2022-01-09T21:46:26.258Z",
          "equivalentMax": 281
        },
        {
          "date": "2022-01-09T21:46:26.258Z",
          "equivalentMax": 281
        },
        {
          "date": "2022-03-09T02:44:48.884Z",
          "equivalentMax": 278
        },
        {
          "date": "2022-03-09T02:44:48.884Z",
          "equivalentMax": 278
        },
        {
          "date": "2022-03-22T18:27:40.984Z",
          "equivalentMax": 285
        },
        {
          "date": "2022-03-22T18:27:40.984Z",
          "equivalentMax": 285
        },
        {
          "date": "2022-04-01T00:27:37.066Z",
          "equivalentMax": 292
        },
        {
          "date": "2022-04-01T00:27:37.066Z",
          "equivalentMax": 292
        },
        {
          "date": "2022-04-14T01:42:58.657Z",
          "equivalentMax": 273
        },
        {
          "date": "2022-04-14T01:42:58.657Z",
          "equivalentMax": 273
        },
        {
          "date": "2022-04-23T22:26:27.435Z",
          "equivalentMax": 287
        },
        {
          "date": "2022-04-23T22:26:27.435Z",
          "equivalentMax": 287
        },
        {
          "date": "2022-05-13T20:11:54.521Z",
          "equivalentMax": 287
        },
        {
          "date": "2022-05-13T20:11:54.521Z",
          "equivalentMax": 287
        },
        {
          "date": "2022-06-11T20:17:05.946Z",
          "equivalentMax": 260
        },
        {
          "date": "2022-06-11T20:17:05.946Z",
          "equivalentMax": 260
        },
        {
          "date": "2022-06-15T01:28:25.075Z",
          "equivalentMax": 225
        },
        {
          "date": "2022-06-15T01:28:25.075Z",
          "equivalentMax": 225
        },
        {
          "date": "2022-08-12T01:18:28.596Z",
          "equivalentMax": 253
        },
        {
          "date": "2022-08-12T01:18:28.596Z",
          "equivalentMax": 253
        },
        {
          "date": "2022-08-26T02:22:50.036Z",
          "equivalentMax": 271
        },
        {
          "date": "2022-08-26T02:22:50.036Z",
          "equivalentMax": 271
        },
        {
          "date": "2022-09-08T02:04:47.626Z",
          "equivalentMax": 255
        },
        {
          "date": "2022-09-08T02:04:47.626Z",
          "equivalentMax": 255
        },
        {
          "date": "2022-09-10T03:39:10.237Z",
          "equivalentMax": 258
        },
        {
          "date": "2022-09-10T03:39:10.237Z",
          "equivalentMax": 258
        },
        {
          "date": "2022-09-11T05:00:08.219Z",
          "equivalentMax": 248
        },
        {
          "date": "2022-09-11T05:00:08.219Z",
          "equivalentMax": 248
        },
        {
          "date": "2022-09-12T02:38:33.213Z",
          "equivalentMax": 255
        },
        {
          "date": "2022-09-12T02:38:33.213Z",
          "equivalentMax": 255
        },
        {
          "date": "2022-09-13T02:22:27.974Z",
          "equivalentMax": 258
        },
        {
          "date": "2022-09-13T02:22:27.974Z",
          "equivalentMax": 258
        },
        {
          "date": "2022-09-15T01:06:54.723Z",
          "equivalentMax": 258
        },
        {
          "date": "2022-09-15T01:06:54.723Z",
          "equivalentMax": 258
        },
        {
          "date": "2022-09-15T03:45:36.115Z",
          "equivalentMax": 257
        },
        {
          "date": "2022-09-15T03:45:36.115Z",
          "equivalentMax": 257
        },
        {
          "date": "2022-09-16T04:13:20.445Z",
          "equivalentMax": 284
        },
        {
          "date": "2022-09-17T19:22:54.681Z",
          "equivalentMax": 275
        },
        {
          "date": "2022-09-19T03:16:35.588Z",
          "equivalentMax": 284
        },
        {
          "date": "2022-09-21T00:23:01.495Z",
          "equivalentMax": 293
        },
        {
          "date": "2022-09-24T01:57:46.068Z",
          "equivalentMax": 284
        },
        {
          "date": "2022-09-26T01:22:38.117Z",
          "equivalentMax": 299
        },
        {
          "date": "2022-09-27T02:37:40.373Z",
          "equivalentMax": 299
        },
        {
          "date": "2022-10-01T03:17:29.043Z",
          "equivalentMax": 302
        },
        {
          "date": "2022-10-02T02:37:40.737Z",
          "equivalentMax": 301
        },
        {
          "date": "2022-10-06T02:23:51.983Z",
          "equivalentMax": 305
        },
        {
          "date": "2022-10-08T02:52:34.262Z",
          "equivalentMax": 305
        },
        {
          "date": "2022-10-10T01:38:55.445Z",
          "equivalentMax": 298
        },
        {
          "date": "2022-10-13T02:48:46.144Z",
          "equivalentMax": 309
        },
        {
          "date": "2022-11-03T01:54:47.452Z",
          "equivalentMax": 309
        },
        {
          "date": "2022-11-06T00:46:07.933Z",
          "equivalentMax": 309
        },
        {
          "date": "2022-11-09T03:52:43.569Z",
          "equivalentMax": 295
        },
        {
          "date": "2022-11-11T02:34:22.661Z",
          "equivalentMax": 308
        },
        {
          "date": "2022-11-20T23:44:02.333Z",
          "equivalentMax": 309
        },
        {
          "date": "2022-11-28T03:18:30.119Z",
          "equivalentMax": 308
        },
        {
          "date": "2022-12-02T02:11:32.371Z",
          "equivalentMax": 320
        }
      ],
      "tonnageInput": [
        [
          1,
          3,
          10,
          "230"
        ],
        [
          3,
          6,
          10,
          "215"
        ],
        [
          0,
          3,
          10,
          "205"
        ]
      ],
      "tonnageHistory": [
        {
          "date": "2021-07-07T01:09:57.324Z",
          "overallTonnage": 3650
        },
        {
          "date": "2021-07-07T01:09:57.324Z",
          "overallTonnage": 3650
        },
        {
          "date": "2021-07-07T01:09:57.324Z",
          "overallTonnage": 3650
        },
        {
          "date": "2021-07-07T01:09:57.324Z",
          "overallTonnage": 3650
        },
        {
          "date": "2021-07-14T01:53:07.809Z",
          "overallTonnage": 3650
        },
        {
          "date": "2021-07-14T01:53:07.809Z",
          "overallTonnage": 3650
        },
        {
          "date": "2021-07-14T01:53:07.809Z",
          "overallTonnage": 3650
        },
        {
          "date": "2021-07-14T01:53:07.809Z",
          "overallTonnage": 3650
        },
        {
          "date": "2021-08-18T12:16:06.204Z",
          "overallTonnage": 4640
        },
        {
          "date": "2021-08-18T12:16:06.204Z",
          "overallTonnage": 4640
        },
        {
          "date": "2021-08-18T12:16:06.204Z",
          "overallTonnage": 4640
        },
        {
          "date": "2021-08-18T12:16:06.204Z",
          "overallTonnage": 4640
        },
        {
          "date": "2021-08-25T10:52:11.924Z",
          "overallTonnage": 4360
        },
        {
          "date": "2021-08-25T10:52:11.924Z",
          "overallTonnage": 4360
        },
        {
          "date": "2021-08-25T10:52:11.924Z",
          "overallTonnage": 4360
        },
        {
          "date": "2021-08-25T10:52:11.924Z",
          "overallTonnage": 4360
        },
        {
          "date": "2021-09-01T10:56:28.055Z",
          "overallTonnage": 3990
        },
        {
          "date": "2021-09-01T10:56:28.055Z",
          "overallTonnage": 3990
        },
        {
          "date": "2021-09-01T10:56:28.055Z",
          "overallTonnage": 3990
        },
        {
          "date": "2021-09-01T10:56:28.055Z",
          "overallTonnage": 3990
        },
        {
          "date": "2021-09-08T10:55:54.977Z",
          "overallTonnage": 4295
        },
        {
          "date": "2021-09-08T10:55:54.977Z",
          "overallTonnage": 4295
        },
        {
          "date": "2021-09-08T10:55:54.977Z",
          "overallTonnage": 4295
        },
        {
          "date": "2021-09-08T10:55:54.977Z",
          "overallTonnage": 4295
        },
        {
          "date": "2021-09-15T11:09:16.216Z",
          "overallTonnage": 4325
        },
        {
          "date": "2021-09-15T11:09:16.216Z",
          "overallTonnage": 4325
        },
        {
          "date": "2021-09-15T11:09:16.216Z",
          "overallTonnage": 4325
        },
        {
          "date": "2021-09-15T11:09:16.216Z",
          "overallTonnage": 4325
        },
        {
          "date": "2021-09-22T10:56:32.839Z",
          "overallTonnage": 4550
        },
        {
          "date": "2021-09-22T10:56:32.839Z",
          "overallTonnage": 4550
        },
        {
          "date": "2021-09-22T10:56:32.839Z",
          "overallTonnage": 4550
        },
        {
          "date": "2021-09-22T10:56:32.839Z",
          "overallTonnage": 4550
        },
        {
          "date": "2021-10-06T11:14:37.629Z",
          "overallTonnage": 4240
        },
        {
          "date": "2021-10-06T11:14:37.629Z",
          "overallTonnage": 4240
        },
        {
          "date": "2021-10-06T11:14:37.629Z",
          "overallTonnage": 4240
        },
        {
          "date": "2021-10-06T11:14:37.629Z",
          "overallTonnage": 4240
        },
        {
          "date": "2021-10-15T10:53:48.775Z",
          "overallTonnage": 4775
        },
        {
          "date": "2021-10-15T10:53:48.775Z",
          "overallTonnage": 4775
        },
        {
          "date": "2021-10-15T10:53:48.775Z",
          "overallTonnage": 4775
        },
        {
          "date": "2021-10-15T10:53:48.775Z",
          "overallTonnage": 4775
        },
        {
          "date": "2021-10-20T10:54:38.948Z",
          "overallTonnage": 4220
        },
        {
          "date": "2021-10-20T10:54:38.948Z",
          "overallTonnage": 4220
        },
        {
          "date": "2021-10-20T10:54:38.948Z",
          "overallTonnage": 4220
        },
        {
          "date": "2021-10-20T10:54:38.948Z",
          "overallTonnage": 4220
        },
        {
          "date": "2022-01-01T21:27:25.926Z",
          "overallTonnage": 3435
        },
        {
          "date": "2022-01-01T21:27:25.926Z",
          "overallTonnage": 3435
        },
        {
          "date": "2022-01-01T21:27:25.926Z",
          "overallTonnage": 3435
        },
        {
          "date": "2022-01-01T21:27:25.926Z",
          "overallTonnage": 3435
        },
        {
          "date": "2022-01-09T21:46:26.258Z",
          "overallTonnage": 3755
        },
        {
          "date": "2022-01-09T21:46:26.258Z",
          "overallTonnage": 3755
        },
        {
          "date": "2022-01-09T21:46:26.258Z",
          "overallTonnage": 3755
        },
        {
          "date": "2022-01-09T21:46:26.258Z",
          "overallTonnage": 3755
        },
        {
          "date": "2022-03-09T02:44:48.884Z",
          "overallTonnage": 4565
        },
        {
          "date": "2022-03-09T02:44:48.884Z",
          "overallTonnage": 4565
        },
        {
          "date": "2022-03-22T18:27:40.984Z",
          "overallTonnage": 5470
        },
        {
          "date": "2022-03-22T18:27:40.984Z",
          "overallTonnage": 5470
        },
        {
          "date": "2022-04-01T00:27:37.066Z",
          "overallTonnage": 6570
        },
        {
          "date": "2022-04-01T00:27:37.066Z",
          "overallTonnage": 6570
        },
        {
          "date": "2022-04-14T01:42:58.657Z",
          "overallTonnage": 6370
        },
        {
          "date": "2022-04-14T01:42:58.657Z",
          "overallTonnage": 6370
        },
        {
          "date": "2022-04-23T22:26:27.435Z",
          "overallTonnage": 5880
        },
        {
          "date": "2022-04-23T22:26:27.435Z",
          "overallTonnage": 5880
        },
        {
          "date": "2022-05-13T20:11:54.521Z",
          "overallTonnage": 6860
        },
        {
          "date": "2022-05-13T20:11:54.521Z",
          "overallTonnage": 6860
        },
        {
          "date": "2022-06-11T20:17:05.946Z",
          "overallTonnage": 4160
        },
        {
          "date": "2022-06-11T20:17:05.946Z",
          "overallTonnage": 4160
        },
        {
          "date": "2022-06-15T01:28:25.075Z",
          "overallTonnage": 6500
        },
        {
          "date": "2022-06-15T01:28:25.075Z",
          "overallTonnage": 6500
        },
        {
          "date": "2022-08-12T01:18:28.596Z",
          "overallTonnage": 4915
        },
        {
          "date": "2022-08-12T01:18:28.596Z",
          "overallTonnage": 4915
        },
        {
          "date": "2022-08-26T02:22:50.036Z",
          "overallTonnage": 5140
        },
        {
          "date": "2022-08-26T02:22:50.036Z",
          "overallTonnage": 5140
        },
        {
          "date": "2022-09-08T02:04:47.626Z",
          "overallTonnage": 2700
        },
        {
          "date": "2022-09-08T02:04:47.626Z",
          "overallTonnage": 2700
        },
        {
          "date": "2022-09-10T03:39:10.237Z",
          "overallTonnage": 3870
        },
        {
          "date": "2022-09-10T03:39:10.237Z",
          "overallTonnage": 3870
        },
        {
          "date": "2022-09-11T05:00:08.219Z",
          "overallTonnage": 2025
        },
        {
          "date": "2022-09-11T05:00:08.219Z",
          "overallTonnage": 2025
        },
        {
          "date": "2022-09-12T02:38:33.213Z",
          "overallTonnage": 1485
        },
        {
          "date": "2022-09-12T02:38:33.213Z",
          "overallTonnage": 1485
        },
        {
          "date": "2022-09-13T02:22:27.974Z",
          "overallTonnage": 4560
        },
        {
          "date": "2022-09-13T02:22:27.974Z",
          "overallTonnage": 4560
        },
        {
          "date": "2022-09-15T01:06:54.723Z",
          "overallTonnage": 4560
        },
        {
          "date": "2022-09-15T01:06:54.723Z",
          "overallTonnage": 4560
        },
        {
          "date": "2022-09-15T03:45:36.115Z",
          "overallTonnage": 4560
        },
        {
          "date": "2022-09-15T03:45:36.115Z",
          "overallTonnage": 4560
        },
        {
          "date": "2022-09-16T04:13:20.445Z",
          "overallTonnage": 4560
        },
        {
          "date": "2022-09-17T19:22:54.681Z",
          "overallTonnage": 1840
        },
        {
          "date": "2022-09-19T03:16:35.588Z",
          "overallTonnage": 1640
        },
        {
          "date": "2022-09-21T00:23:01.495Z",
          "overallTonnage": 1920
        },
        {
          "date": "2022-09-24T01:57:46.068Z",
          "overallTonnage": 980
        },
        {
          "date": "2022-09-26T01:22:38.117Z",
          "overallTonnage": 1675
        },
        {
          "date": "2022-09-27T02:37:40.373Z",
          "overallTonnage": 5875
        },
        {
          "date": "2022-10-01T03:17:29.043Z",
          "overallTonnage": 3715
        },
        {
          "date": "2022-10-02T02:37:40.737Z",
          "overallTonnage": 1300
        },
        {
          "date": "2022-10-06T02:23:51.983Z",
          "overallTonnage": 1715
        },
        {
          "date": "2022-10-08T02:52:34.262Z",
          "overallTonnage": 5075
        },
        {
          "date": "2022-10-10T01:38:55.445Z",
          "overallTonnage": 3650
        },
        {
          "date": "2022-10-13T02:48:46.144Z",
          "overallTonnage": 1875
        },
        {
          "date": "2022-11-03T01:54:47.452Z",
          "overallTonnage": 1875
        },
        {
          "date": "2022-11-06T00:46:07.933Z",
          "overallTonnage": 7035
        },
        {
          "date": "2022-11-09T03:52:43.569Z",
          "overallTonnage": 4050
        },
        {
          "date": "2022-11-11T02:34:22.661Z",
          "overallTonnage": 2590
        },
        {
          "date": "2022-11-20T23:44:02.333Z",
          "overallTonnage": 7535
        },
        {
          "date": "2022-11-28T03:18:30.119Z",
          "overallTonnage": 4400
        },
        {
          "date": "2022-12-02T02:11:32.371Z",
          "overallTonnage": 930
        }
      ]
    },
    "InclineDumbbellPress": {
      "maxHistory": [
        {
          "date": "2021-09-12T04:52:46.713Z",
          "equivalentMax": 200
        },
        {
          "date": "2021-09-12T04:52:46.713Z",
          "equivalentMax": 200
        },
        {
          "date": "2021-09-19T01:52:36.461Z",
          "equivalentMax": 200
        },
        {
          "date": "2021-09-19T01:52:36.461Z",
          "equivalentMax": 200
        },
        {
          "date": "2022-08-04T02:44:03.835Z",
          "equivalentMax": 200
        },
        {
          "date": "2022-08-04T02:44:03.835Z",
          "equivalentMax": 200
        },
        {
          "date": "2022-08-04T02:44:03.835Z",
          "equivalentMax": 200
        },
        {
          "date": "2022-08-04T02:44:03.835Z",
          "equivalentMax": 200
        },
        {
          "date": "2022-08-24T02:20:02.680Z",
          "equivalentMax": 200
        },
        {
          "date": "2022-08-24T02:20:02.680Z",
          "equivalentMax": 200
        },
        {
          "date": "2022-08-24T02:20:02.680Z",
          "equivalentMax": 200
        },
        {
          "date": "2022-08-24T02:20:02.680Z",
          "equivalentMax": 200
        },
        {
          "date": "2022-09-08T02:05:17.103Z",
          "equivalentMax": 190
        },
        {
          "date": "2022-09-08T02:05:17.103Z",
          "equivalentMax": 190
        },
        {
          "date": "2022-09-08T02:05:17.103Z",
          "equivalentMax": 190
        },
        {
          "date": "2022-09-08T02:05:17.103Z",
          "equivalentMax": 190
        },
        {
          "date": "2022-09-11T05:00:45.708Z",
          "equivalentMax": 133
        },
        {
          "date": "2022-09-11T05:00:45.708Z",
          "equivalentMax": 133
        },
        {
          "date": "2022-09-11T05:00:45.708Z",
          "equivalentMax": 133
        },
        {
          "date": "2022-09-11T05:00:45.708Z",
          "equivalentMax": 133
        },
        {
          "date": "2022-09-13T02:46:22.536Z",
          "equivalentMax": 127
        },
        {
          "date": "2022-09-13T02:46:22.536Z",
          "equivalentMax": 127
        },
        {
          "date": "2022-09-13T02:46:22.536Z",
          "equivalentMax": 127
        },
        {
          "date": "2022-09-13T02:46:22.536Z",
          "equivalentMax": 127
        },
        {
          "date": "2022-09-17T19:29:53.902Z",
          "equivalentMax": 230
        },
        {
          "date": "2022-09-17T19:29:53.902Z",
          "equivalentMax": 230
        },
        {
          "date": "2022-09-17T19:29:53.902Z",
          "equivalentMax": 230
        },
        {
          "date": "2022-09-22T23:27:05.488Z",
          "equivalentMax": 214
        },
        {
          "date": "2022-09-22T23:27:05.488Z",
          "equivalentMax": 214
        },
        {
          "date": "2022-09-22T23:27:05.488Z",
          "equivalentMax": 214
        },
        {
          "date": "2022-09-27T02:52:11.203Z",
          "equivalentMax": 203
        },
        {
          "date": "2022-09-27T02:52:11.203Z",
          "equivalentMax": 203
        },
        {
          "date": "2022-09-27T02:52:11.203Z",
          "equivalentMax": 203
        },
        {
          "date": "2022-10-08T03:09:08.062Z",
          "equivalentMax": 203
        },
        {
          "date": "2022-10-08T03:09:08.062Z",
          "equivalentMax": 203
        },
        {
          "date": "2022-10-08T03:09:08.062Z",
          "equivalentMax": 203
        },
        {
          "date": "2023-03-03T03:14:46.503Z",
          "equivalentMax": 167
        },
        {
          "date": "2023-03-03T03:14:46.503Z",
          "equivalentMax": 167
        },
        {
          "date": "2023-05-26T02:06:23.591Z",
          "equivalentMax": 221
        },
        {
          "date": "2023-05-26T02:06:23.591Z",
          "equivalentMax": 221
        },
        {
          "date": "2023-12-08T01:35:08.632Z",
          "equivalentMax": 225
        },
        {
          "date": "2023-12-08T01:35:08.632Z",
          "equivalentMax": 225
        },
        {
          "date": "2023-12-16T02:43:01.211Z",
          "equivalentMax": 230
        },
        {
          "date": "2023-12-16T02:43:01.211Z",
          "equivalentMax": 230
        },
        {
          "date": "2023-12-29T02:11:42.316Z",
          "equivalentMax": 225
        },
        {
          "date": "2023-12-29T02:11:42.316Z",
          "equivalentMax": 225
        },
        {
          "date": "2024-01-05T03:08:39.245Z",
          "equivalentMax": 235
        },
        {
          "date": "2024-01-05T03:08:39.245Z",
          "equivalentMax": 235
        },
        {
          "date": "2024-01-12T02:56:31.604Z",
          "equivalentMax": 284
        },
        {
          "date": "2024-01-12T02:56:31.604Z",
          "equivalentMax": 284
        },
        {
          "date": "2024-01-19T03:04:35.690Z",
          "equivalentMax": 284
        },
        {
          "date": "2024-01-19T03:04:35.690Z",
          "equivalentMax": 284
        },
        {
          "date": "2024-02-09T01:51:27.848Z",
          "equivalentMax": 280
        }
      ],
      "tonnageInput": [
        [
          "0",
          "10",
          "100"
        ],
        [
          "2",
          "8",
          "100"
        ],
        [
          "0",
          "0",
          "0"
        ],
        [
          "0",
          "0",
          "0"
        ],
        [
          "0",
          "0",
          "0"
        ]
      ],
      "tonnageHistory": [
        {
          "date": "2021-09-12T04:52:46.713Z",
          "overallTonnage": 4000
        },
        {
          "date": "2021-09-12T04:52:46.713Z",
          "overallTonnage": 4000
        },
        {
          "date": "2021-09-19T01:52:36.461Z",
          "overallTonnage": 4000
        },
        {
          "date": "2021-09-19T01:52:36.461Z",
          "overallTonnage": 4000
        },
        {
          "date": "2022-08-04T02:44:03.835Z",
          "overallTonnage": 3900
        },
        {
          "date": "2022-08-04T02:44:03.835Z",
          "overallTonnage": 3900
        },
        {
          "date": "2022-08-04T02:44:03.835Z",
          "overallTonnage": 3900
        },
        {
          "date": "2022-08-04T02:44:03.835Z",
          "overallTonnage": 3900
        },
        {
          "date": "2022-08-24T02:20:02.680Z",
          "overallTonnage": 4000
        },
        {
          "date": "2022-08-24T02:20:02.680Z",
          "overallTonnage": 4000
        },
        {
          "date": "2022-08-24T02:20:02.680Z",
          "overallTonnage": 4000
        },
        {
          "date": "2022-08-24T02:20:02.680Z",
          "overallTonnage": 4000
        },
        {
          "date": "2022-09-08T02:05:17.103Z",
          "overallTonnage": 2400
        },
        {
          "date": "2022-09-08T02:05:17.103Z",
          "overallTonnage": 2400
        },
        {
          "date": "2022-09-08T02:05:17.103Z",
          "overallTonnage": 2400
        },
        {
          "date": "2022-09-08T02:05:17.103Z",
          "overallTonnage": 2400
        },
        {
          "date": "2022-09-11T05:00:45.708Z",
          "overallTonnage": 2000
        },
        {
          "date": "2022-09-11T05:00:45.708Z",
          "overallTonnage": 2000
        },
        {
          "date": "2022-09-11T05:00:45.708Z",
          "overallTonnage": 2000
        },
        {
          "date": "2022-09-11T05:00:45.708Z",
          "overallTonnage": 2000
        },
        {
          "date": "2022-09-13T02:46:22.536Z",
          "overallTonnage": 1600
        },
        {
          "date": "2022-09-13T02:46:22.536Z",
          "overallTonnage": 1600
        },
        {
          "date": "2022-09-13T02:46:22.536Z",
          "overallTonnage": 1600
        },
        {
          "date": "2022-09-13T02:46:22.536Z",
          "overallTonnage": 1600
        },
        {
          "date": "2022-09-17T19:29:53.902Z",
          "overallTonnage": 3000
        },
        {
          "date": "2022-09-17T19:29:53.902Z",
          "overallTonnage": 3000
        },
        {
          "date": "2022-09-17T19:29:53.902Z",
          "overallTonnage": 3000
        },
        {
          "date": "2022-09-22T23:27:05.488Z",
          "overallTonnage": 4100
        },
        {
          "date": "2022-09-22T23:27:05.488Z",
          "overallTonnage": 4100
        },
        {
          "date": "2022-09-22T23:27:05.488Z",
          "overallTonnage": 4100
        },
        {
          "date": "2022-09-27T02:52:11.203Z",
          "overallTonnage": 3600
        },
        {
          "date": "2022-09-27T02:52:11.203Z",
          "overallTonnage": 3600
        },
        {
          "date": "2022-09-27T02:52:11.203Z",
          "overallTonnage": 3600
        },
        {
          "date": "2022-10-08T03:09:08.062Z",
          "overallTonnage": 4800
        },
        {
          "date": "2022-10-08T03:09:08.062Z",
          "overallTonnage": 4800
        },
        {
          "date": "2022-10-08T03:09:08.062Z",
          "overallTonnage": 4800
        },
        {
          "date": "2023-03-03T03:14:46.503Z",
          "overallTonnage": 2000
        },
        {
          "date": "2023-03-03T03:14:46.503Z",
          "overallTonnage": 2000
        },
        {
          "date": "2023-05-26T02:06:23.591Z",
          "overallTonnage": 3600
        },
        {
          "date": "2023-05-26T02:06:23.591Z",
          "overallTonnage": 3600
        },
        {
          "date": "2023-12-08T01:35:08.632Z",
          "overallTonnage": 6750
        },
        {
          "date": "2023-12-08T01:35:08.632Z",
          "overallTonnage": 6750
        },
        {
          "date": "2023-12-16T02:43:01.211Z",
          "overallTonnage": 6000
        },
        {
          "date": "2023-12-16T02:43:01.211Z",
          "overallTonnage": 6000
        },
        {
          "date": "2023-12-29T02:11:42.316Z",
          "overallTonnage": 6750
        },
        {
          "date": "2023-12-29T02:11:42.316Z",
          "overallTonnage": 6750
        },
        {
          "date": "2024-01-05T03:08:39.245Z",
          "overallTonnage": 7650
        },
        {
          "date": "2024-01-05T03:08:39.245Z",
          "overallTonnage": 7650
        },
        {
          "date": "2024-01-12T02:56:31.604Z",
          "overallTonnage": 4080
        },
        {
          "date": "2024-01-12T02:56:31.604Z",
          "overallTonnage": 4080
        },
        {
          "date": "2024-01-19T03:04:35.690Z",
          "overallTonnage": 6120
        },
        {
          "date": "2024-01-19T03:04:35.690Z",
          "overallTonnage": 6120
        },
        {
          "date": "2024-02-09T01:51:27.848Z",
          "overallTonnage": 6800
        }
      ]
    },
    "SingleDumbbellShoulderPress": {
      "maxHistory": [
        {
          "date": "2022-02-20T01:36:30.610Z",
          "equivalentMax": 185
        },
        {
          "date": "2022-02-20T01:36:30.610Z",
          "equivalentMax": 185
        },
        {
          "date": "2022-03-11T19:41:06.337Z",
          "equivalentMax": 185
        },
        {
          "date": "2022-03-11T19:41:06.337Z",
          "equivalentMax": 185
        },
        {
          "date": "2022-03-25T01:42:06.902Z",
          "equivalentMax": 185
        },
        {
          "date": "2022-03-25T01:42:06.902Z",
          "equivalentMax": 185
        },
        {
          "date": "2022-04-02T00:06:51.979Z",
          "equivalentMax": 190
        },
        {
          "date": "2022-04-02T00:06:51.979Z",
          "equivalentMax": 190
        },
        {
          "date": "2022-04-11T18:13:49.384Z",
          "equivalentMax": 190
        },
        {
          "date": "2022-04-11T18:13:49.384Z",
          "equivalentMax": 190
        },
        {
          "date": "2022-05-19T01:44:01.937Z",
          "equivalentMax": 190
        },
        {
          "date": "2022-05-19T01:44:01.937Z",
          "equivalentMax": 190
        },
        {
          "date": "2022-08-07T00:34:43.393Z",
          "equivalentMax": 190
        },
        {
          "date": "2022-08-07T00:34:43.393Z",
          "equivalentMax": 190
        },
        {
          "date": "2022-08-23T01:13:08.796Z",
          "equivalentMax": 190
        },
        {
          "date": "2022-08-23T01:13:08.796Z",
          "equivalentMax": 190
        }
      ],
      "tonnageInput": [
        [
          "1",
          "10",
          "100"
        ],
        [
          "2",
          "8",
          "150"
        ],
        [
          "0",
          "0",
          "0"
        ],
        [
          "0",
          "0",
          "0"
        ],
        [
          "0",
          "0",
          "0"
        ]
      ],
      "tonnageHistory": [
        {
          "date": "2022-02-20T01:36:30.610Z",
          "overallTonnage": 3050
        },
        {
          "date": "2022-02-20T01:36:30.610Z",
          "overallTonnage": 3050
        },
        {
          "date": "2022-03-11T19:41:06.337Z",
          "overallTonnage": 2900
        },
        {
          "date": "2022-03-11T19:41:06.337Z",
          "overallTonnage": 2900
        },
        {
          "date": "2022-03-25T01:42:06.902Z",
          "overallTonnage": 3150
        },
        {
          "date": "2022-03-25T01:42:06.902Z",
          "overallTonnage": 3150
        },
        {
          "date": "2022-04-02T00:06:51.979Z",
          "overallTonnage": 3600
        },
        {
          "date": "2022-04-02T00:06:51.979Z",
          "overallTonnage": 3600
        },
        {
          "date": "2022-04-11T18:13:49.384Z",
          "overallTonnage": 3600
        },
        {
          "date": "2022-04-11T18:13:49.384Z",
          "overallTonnage": 3600
        },
        {
          "date": "2022-05-19T01:44:01.937Z",
          "overallTonnage": 3600
        },
        {
          "date": "2022-05-19T01:44:01.937Z",
          "overallTonnage": 3600
        },
        {
          "date": "2022-08-07T00:34:43.393Z",
          "overallTonnage": 3600
        },
        {
          "date": "2022-08-07T00:34:43.393Z",
          "overallTonnage": 3600
        },
        {
          "date": "2022-08-23T01:13:08.796Z",
          "overallTonnage": 3400
        },
        {
          "date": "2022-08-23T01:13:08.796Z",
          "overallTonnage": 3400
        }
      ]
    },
    "BarbellShoulderPress": {
      "maxHistory": [
        {
          "date": "2021-07-09T01:34:31.845Z",
          "equivalentMax": 120
        },
        {
          "date": "2021-07-09T01:34:31.845Z",
          "equivalentMax": 120
        },
        {
          "date": "2021-07-09T01:34:31.845Z",
          "equivalentMax": 120
        },
        {
          "date": "2021-07-09T01:34:31.845Z",
          "equivalentMax": 120
        },
        {
          "date": "2021-07-17T02:02:25.297Z",
          "equivalentMax": 133
        },
        {
          "date": "2021-07-17T02:02:25.297Z",
          "equivalentMax": 133
        },
        {
          "date": "2021-07-17T02:02:25.297Z",
          "equivalentMax": 133
        },
        {
          "date": "2021-07-17T02:02:25.297Z",
          "equivalentMax": 133
        },
        {
          "date": "2021-08-20T10:57:13.896Z",
          "equivalentMax": 158
        },
        {
          "date": "2021-08-20T10:57:13.896Z",
          "equivalentMax": 158
        },
        {
          "date": "2021-08-20T10:57:13.896Z",
          "equivalentMax": 158
        },
        {
          "date": "2021-08-20T10:57:13.896Z",
          "equivalentMax": 158
        },
        {
          "date": "2021-09-03T11:02:30.756Z",
          "equivalentMax": 171
        },
        {
          "date": "2021-09-03T11:02:30.756Z",
          "equivalentMax": 171
        },
        {
          "date": "2021-09-03T11:02:30.756Z",
          "equivalentMax": 171
        },
        {
          "date": "2021-09-03T11:02:30.756Z",
          "equivalentMax": 171
        },
        {
          "date": "2021-09-10T11:04:31.541Z",
          "equivalentMax": 187
        },
        {
          "date": "2021-09-10T11:04:31.541Z",
          "equivalentMax": 187
        },
        {
          "date": "2021-09-10T11:04:31.541Z",
          "equivalentMax": 187
        },
        {
          "date": "2021-09-10T11:04:31.541Z",
          "equivalentMax": 187
        },
        {
          "date": "2021-09-17T11:10:27.980Z",
          "equivalentMax": 193
        },
        {
          "date": "2021-09-17T11:10:27.980Z",
          "equivalentMax": 193
        },
        {
          "date": "2021-09-17T11:10:27.980Z",
          "equivalentMax": 193
        },
        {
          "date": "2021-09-17T11:10:27.980Z",
          "equivalentMax": 193
        },
        {
          "date": "2021-09-24T11:12:24.315Z",
          "equivalentMax": 193
        },
        {
          "date": "2021-09-24T11:12:24.315Z",
          "equivalentMax": 193
        },
        {
          "date": "2021-09-24T11:12:24.315Z",
          "equivalentMax": 193
        },
        {
          "date": "2021-09-24T11:12:24.315Z",
          "equivalentMax": 193
        },
        {
          "date": "2021-10-09T19:36:03.076Z",
          "equivalentMax": 186
        },
        {
          "date": "2021-10-09T19:36:03.076Z",
          "equivalentMax": 186
        },
        {
          "date": "2021-10-09T19:36:03.076Z",
          "equivalentMax": 186
        },
        {
          "date": "2021-10-09T19:36:03.076Z",
          "equivalentMax": 186
        },
        {
          "date": "2022-01-05T03:46:14.745Z",
          "equivalentMax": 181
        },
        {
          "date": "2022-01-05T03:46:14.745Z",
          "equivalentMax": 181
        },
        {
          "date": "2022-01-05T03:46:14.745Z",
          "equivalentMax": 181
        },
        {
          "date": "2022-01-05T03:46:14.745Z",
          "equivalentMax": 181
        },
        {
          "date": "2022-02-12T17:09:45.367Z",
          "equivalentMax": 171
        },
        {
          "date": "2022-02-12T17:09:45.367Z",
          "equivalentMax": 171
        },
        {
          "date": "2022-03-02T19:26:20.800Z",
          "equivalentMax": 180
        },
        {
          "date": "2022-03-02T19:26:20.800Z",
          "equivalentMax": 180
        },
        {
          "date": "2022-03-21T19:40:22.361Z",
          "equivalentMax": 171
        },
        {
          "date": "2022-03-21T19:40:22.361Z",
          "equivalentMax": 171
        },
        {
          "date": "2022-03-26T01:54:54.775Z",
          "equivalentMax": 198
        },
        {
          "date": "2022-03-26T01:54:54.775Z",
          "equivalentMax": 198
        },
        {
          "date": "2022-03-30T18:57:47.740Z",
          "equivalentMax": 198
        },
        {
          "date": "2022-03-30T18:57:47.740Z",
          "equivalentMax": 198
        },
        {
          "date": "2022-04-09T17:22:49.783Z",
          "equivalentMax": 204
        },
        {
          "date": "2022-04-09T17:22:49.783Z",
          "equivalentMax": 204
        },
        {
          "date": "2022-04-15T02:00:38.582Z",
          "equivalentMax": 180
        },
        {
          "date": "2022-04-15T02:00:38.582Z",
          "equivalentMax": 180
        },
        {
          "date": "2022-04-25T17:09:25.867Z",
          "equivalentMax": 189
        },
        {
          "date": "2022-04-25T17:09:25.867Z",
          "equivalentMax": 189
        },
        {
          "date": "2022-04-28T20:10:59.075Z",
          "equivalentMax": 209
        },
        {
          "date": "2022-04-28T20:10:59.075Z",
          "equivalentMax": 209
        },
        {
          "date": "2022-05-25T13:35:11.611Z",
          "equivalentMax": 189
        },
        {
          "date": "2022-05-25T13:35:11.611Z",
          "equivalentMax": 189
        },
        {
          "date": "2022-06-09T00:29:18.629Z",
          "equivalentMax": 196
        },
        {
          "date": "2022-06-09T00:29:18.629Z",
          "equivalentMax": 196
        },
        {
          "date": "2022-07-31T01:11:40.222Z",
          "equivalentMax": 133
        },
        {
          "date": "2022-07-31T01:11:40.222Z",
          "equivalentMax": 133
        },
        {
          "date": "2022-08-03T11:50:34.700Z",
          "equivalentMax": 171
        },
        {
          "date": "2022-08-03T11:50:34.700Z",
          "equivalentMax": 171
        },
        {
          "date": "2022-08-14T21:10:22.287Z",
          "equivalentMax": 189
        },
        {
          "date": "2022-08-14T21:10:22.287Z",
          "equivalentMax": 189
        },
        {
          "date": "2022-08-18T01:35:43.648Z",
          "equivalentMax": 196
        },
        {
          "date": "2022-08-18T01:35:43.648Z",
          "equivalentMax": 196
        }
      ],
      "tonnageInput": [
        [
          "1",
          "8",
          "135"
        ],
        [
          "2",
          "8",
          "155"
        ],
        [
          "0",
          "12",
          "135"
        ],
        [
          "0",
          "0",
          "0"
        ],
        [
          "0",
          "0",
          "0"
        ]
      ],
      "tonnageHistory": [
        {
          "date": "2021-07-09T01:34:31.845Z",
          "overallTonnage": 3120
        },
        {
          "date": "2021-07-09T01:34:31.845Z",
          "overallTonnage": 3120
        },
        {
          "date": "2021-07-09T01:34:31.845Z",
          "overallTonnage": 3120
        },
        {
          "date": "2021-07-09T01:34:31.845Z",
          "overallTonnage": 3120
        },
        {
          "date": "2021-07-17T02:02:25.297Z",
          "overallTonnage": 3160
        },
        {
          "date": "2021-07-17T02:02:25.297Z",
          "overallTonnage": 3160
        },
        {
          "date": "2021-07-17T02:02:25.297Z",
          "overallTonnage": 3160
        },
        {
          "date": "2021-07-17T02:02:25.297Z",
          "overallTonnage": 3160
        },
        {
          "date": "2021-08-20T10:57:13.896Z",
          "overallTonnage": 1920
        },
        {
          "date": "2021-08-20T10:57:13.896Z",
          "overallTonnage": 1920
        },
        {
          "date": "2021-08-20T10:57:13.896Z",
          "overallTonnage": 1920
        },
        {
          "date": "2021-08-20T10:57:13.896Z",
          "overallTonnage": 1920
        },
        {
          "date": "2021-09-03T11:02:30.756Z",
          "overallTonnage": 3160
        },
        {
          "date": "2021-09-03T11:02:30.756Z",
          "overallTonnage": 3160
        },
        {
          "date": "2021-09-03T11:02:30.756Z",
          "overallTonnage": 3160
        },
        {
          "date": "2021-09-03T11:02:30.756Z",
          "overallTonnage": 3160
        },
        {
          "date": "2021-09-10T11:04:31.541Z",
          "overallTonnage": 2740
        },
        {
          "date": "2021-09-10T11:04:31.541Z",
          "overallTonnage": 2740
        },
        {
          "date": "2021-09-10T11:04:31.541Z",
          "overallTonnage": 2740
        },
        {
          "date": "2021-09-10T11:04:31.541Z",
          "overallTonnage": 2740
        },
        {
          "date": "2021-09-17T11:10:27.980Z",
          "overallTonnage": 2985
        },
        {
          "date": "2021-09-17T11:10:27.980Z",
          "overallTonnage": 2985
        },
        {
          "date": "2021-09-17T11:10:27.980Z",
          "overallTonnage": 2985
        },
        {
          "date": "2021-09-17T11:10:27.980Z",
          "overallTonnage": 2985
        },
        {
          "date": "2021-09-24T11:12:24.315Z",
          "overallTonnage": 2755
        },
        {
          "date": "2021-09-24T11:12:24.315Z",
          "overallTonnage": 2755
        },
        {
          "date": "2021-09-24T11:12:24.315Z",
          "overallTonnage": 2755
        },
        {
          "date": "2021-09-24T11:12:24.315Z",
          "overallTonnage": 2755
        },
        {
          "date": "2021-10-09T19:36:03.076Z",
          "overallTonnage": 2785
        },
        {
          "date": "2021-10-09T19:36:03.076Z",
          "overallTonnage": 2785
        },
        {
          "date": "2021-10-09T19:36:03.076Z",
          "overallTonnage": 2785
        },
        {
          "date": "2021-10-09T19:36:03.076Z",
          "overallTonnage": 2785
        },
        {
          "date": "2022-01-05T03:46:14.745Z",
          "overallTonnage": 2630
        },
        {
          "date": "2022-01-05T03:46:14.745Z",
          "overallTonnage": 2630
        },
        {
          "date": "2022-01-05T03:46:14.745Z",
          "overallTonnage": 2630
        },
        {
          "date": "2022-01-05T03:46:14.745Z",
          "overallTonnage": 2630
        },
        {
          "date": "2022-02-12T17:09:45.367Z",
          "overallTonnage": 3240
        },
        {
          "date": "2022-02-12T17:09:45.367Z",
          "overallTonnage": 3240
        },
        {
          "date": "2022-03-02T19:26:20.800Z",
          "overallTonnage": 3240
        },
        {
          "date": "2022-03-02T19:26:20.800Z",
          "overallTonnage": 3240
        },
        {
          "date": "2022-03-21T19:40:22.361Z",
          "overallTonnage": 3240
        },
        {
          "date": "2022-03-21T19:40:22.361Z",
          "overallTonnage": 3240
        },
        {
          "date": "2022-03-26T01:54:54.775Z",
          "overallTonnage": 3580
        },
        {
          "date": "2022-03-26T01:54:54.775Z",
          "overallTonnage": 3580
        },
        {
          "date": "2022-03-30T18:57:47.740Z",
          "overallTonnage": 3580
        },
        {
          "date": "2022-03-30T18:57:47.740Z",
          "overallTonnage": 3580
        },
        {
          "date": "2022-04-09T17:22:49.783Z",
          "overallTonnage": 3590
        },
        {
          "date": "2022-04-09T17:22:49.783Z",
          "overallTonnage": 3590
        },
        {
          "date": "2022-04-15T02:00:38.582Z",
          "overallTonnage": 2700
        },
        {
          "date": "2022-04-15T02:00:38.582Z",
          "overallTonnage": 2700
        },
        {
          "date": "2022-04-25T17:09:25.867Z",
          "overallTonnage": 4860
        },
        {
          "date": "2022-04-25T17:09:25.867Z",
          "overallTonnage": 4860
        },
        {
          "date": "2022-04-28T20:10:59.075Z",
          "overallTonnage": 3910
        },
        {
          "date": "2022-04-28T20:10:59.075Z",
          "overallTonnage": 3910
        },
        {
          "date": "2022-05-25T13:35:11.611Z",
          "overallTonnage": 4320
        },
        {
          "date": "2022-05-25T13:35:11.611Z",
          "overallTonnage": 4320
        },
        {
          "date": "2022-06-09T00:29:18.629Z",
          "overallTonnage": 3970
        },
        {
          "date": "2022-06-09T00:29:18.629Z",
          "overallTonnage": 3970
        },
        {
          "date": "2022-07-31T01:11:40.222Z",
          "overallTonnage": 3960
        },
        {
          "date": "2022-07-31T01:11:40.222Z",
          "overallTonnage": 3960
        },
        {
          "date": "2022-08-03T11:50:34.700Z",
          "overallTonnage": 3240
        },
        {
          "date": "2022-08-03T11:50:34.700Z",
          "overallTonnage": 3240
        },
        {
          "date": "2022-08-14T21:10:22.287Z",
          "overallTonnage": 3780
        },
        {
          "date": "2022-08-14T21:10:22.287Z",
          "overallTonnage": 3780
        },
        {
          "date": "2022-08-18T01:35:43.648Z",
          "overallTonnage": 3560
        },
        {
          "date": "2022-08-18T01:35:43.648Z",
          "overallTonnage": 3560
        }
      ]
    },
    "TrapBarDeadlifts": {
      "maxHistory": [
        {
          "date": "2021-08-16T10:46:01.211Z",
          "equivalentMax": 534
        },
        {
          "date": "2021-08-16T10:46:01.211Z",
          "equivalentMax": 534
        },
        {
          "date": "2021-08-16T10:46:01.211Z",
          "equivalentMax": 534
        },
        {
          "date": "2021-08-23T10:46:53.004Z",
          "equivalentMax": 528
        },
        {
          "date": "2021-08-23T10:46:53.004Z",
          "equivalentMax": 528
        },
        {
          "date": "2021-08-23T10:46:53.004Z",
          "equivalentMax": 528
        },
        {
          "date": "2021-08-30T10:52:05.966Z",
          "equivalentMax": 564
        },
        {
          "date": "2021-08-30T10:52:05.966Z",
          "equivalentMax": 564
        },
        {
          "date": "2021-08-30T10:52:05.966Z",
          "equivalentMax": 564
        },
        {
          "date": "2021-09-06T20:27:30.805Z",
          "equivalentMax": 576
        },
        {
          "date": "2021-09-06T20:27:30.805Z",
          "equivalentMax": 576
        },
        {
          "date": "2021-09-06T20:27:30.805Z",
          "equivalentMax": 576
        },
        {
          "date": "2021-09-20T12:44:17.026Z",
          "equivalentMax": 627
        },
        {
          "date": "2021-09-20T12:44:17.026Z",
          "equivalentMax": 627
        },
        {
          "date": "2021-09-20T12:44:17.026Z",
          "equivalentMax": 627
        },
        {
          "date": "2021-09-27T10:49:05.648Z",
          "equivalentMax": 660
        },
        {
          "date": "2021-09-27T10:49:05.648Z",
          "equivalentMax": 660
        },
        {
          "date": "2021-09-27T10:49:05.648Z",
          "equivalentMax": 660
        },
        {
          "date": "2021-10-26T10:43:08.060Z",
          "equivalentMax": 660
        },
        {
          "date": "2021-10-26T10:43:08.060Z",
          "equivalentMax": 660
        },
        {
          "date": "2021-10-26T10:43:08.060Z",
          "equivalentMax": 660
        },
        {
          "date": "2022-01-01T20:58:13.894Z",
          "equivalentMax": 561
        },
        {
          "date": "2022-01-01T20:58:13.894Z",
          "equivalentMax": 561
        },
        {
          "date": "2022-01-01T20:58:13.894Z",
          "equivalentMax": 561
        },
        {
          "date": "2022-01-09T21:38:18.428Z",
          "equivalentMax": 601
        },
        {
          "date": "2022-01-09T21:38:18.428Z",
          "equivalentMax": 601
        },
        {
          "date": "2022-01-09T21:38:18.428Z",
          "equivalentMax": 601
        },
        {
          "date": "2022-03-11T19:24:22.148Z",
          "equivalentMax": 636
        },
        {
          "date": "2022-03-25T01:25:38.905Z",
          "equivalentMax": 678
        },
        {
          "date": "2022-04-17T19:35:48.804Z",
          "equivalentMax": 713
        },
        {
          "date": "2022-05-13T20:39:54.741Z",
          "equivalentMax": 671
        },
        {
          "date": "2022-06-10T02:26:43.276Z",
          "equivalentMax": 703
        },
        {
          "date": "2022-08-14T20:44:52.771Z",
          "equivalentMax": 679
        },
        {
          "date": "2022-08-18T01:21:44.125Z",
          "equivalentMax": 713
        },
        {
          "date": "2022-08-23T00:45:07.784Z",
          "equivalentMax": 703
        },
        {
          "date": "2022-09-17T01:09:32.577Z",
          "equivalentMax": 407
        },
        {
          "date": "2022-09-17T01:09:32.577Z",
          "equivalentMax": 407
        },
        {
          "date": "2022-09-17T01:09:32.577Z",
          "equivalentMax": 407
        },
        {
          "date": "2023-02-07T03:41:04.354Z",
          "equivalentMax": 420
        },
        {
          "date": "2023-02-07T03:41:04.354Z",
          "equivalentMax": 420
        },
        {
          "date": "2023-12-09T03:12:42.156Z",
          "equivalentMax": 267
        },
        {
          "date": "2023-12-09T03:12:42.156Z",
          "equivalentMax": 267
        },
        {
          "date": "2023-12-17T01:54:26.583Z",
          "equivalentMax": 267
        },
        {
          "date": "2023-12-17T01:54:26.583Z",
          "equivalentMax": 267
        },
        {
          "date": "2023-12-24T01:16:22.466Z",
          "equivalentMax": 388
        },
        {
          "date": "2023-12-24T01:16:22.466Z",
          "equivalentMax": 388
        },
        {
          "date": "2023-12-30T02:16:38.525Z",
          "equivalentMax": 417
        },
        {
          "date": "2023-12-30T02:16:38.525Z",
          "equivalentMax": 417
        },
        {
          "date": "2024-01-07T03:13:53.259Z",
          "equivalentMax": 434
        },
        {
          "date": "2024-01-07T03:13:53.259Z",
          "equivalentMax": 434
        },
        {
          "date": "2024-01-13T02:30:02.485Z",
          "equivalentMax": 451
        },
        {
          "date": "2024-01-13T02:30:02.485Z",
          "equivalentMax": 451
        },
        {
          "date": "2024-01-20T02:19:21.540Z",
          "equivalentMax": 451
        },
        {
          "date": "2024-01-20T02:19:21.540Z",
          "equivalentMax": 451
        },
        {
          "date": "2024-01-27T01:53:52.368Z",
          "equivalentMax": 467
        },
        {
          "date": "2024-01-27T01:53:52.368Z",
          "equivalentMax": 467
        },
        {
          "date": "2024-02-03T01:21:38.506Z",
          "equivalentMax": 447
        },
        {
          "date": "2024-02-03T01:21:38.506Z",
          "equivalentMax": 447
        }
      ],
      "tonnageInput": [
        [
          "1",
          "15",
          "160"
        ],
        [
          "1",
          "12",
          "230"
        ],
        [
          "1",
          "8",
          "320"
        ],
        [
          "1",
          "3",
          "370"
        ],
        [
          "0",
          "0",
          "0"
        ]
      ],
      "tonnageHistory": [
        {
          "date": "2021-08-16T10:46:01.211Z",
          "overallTonnage": 5510
        },
        {
          "date": "2021-08-16T10:46:01.211Z",
          "overallTonnage": 5510
        },
        {
          "date": "2021-08-16T10:46:01.211Z",
          "overallTonnage": 5510
        },
        {
          "date": "2021-08-23T10:46:53.004Z",
          "overallTonnage": 7260
        },
        {
          "date": "2021-08-23T10:46:53.004Z",
          "overallTonnage": 7260
        },
        {
          "date": "2021-08-23T10:46:53.004Z",
          "overallTonnage": 7260
        },
        {
          "date": "2021-08-30T10:52:05.966Z",
          "overallTonnage": 8000
        },
        {
          "date": "2021-08-30T10:52:05.966Z",
          "overallTonnage": 8000
        },
        {
          "date": "2021-08-30T10:52:05.966Z",
          "overallTonnage": 8000
        },
        {
          "date": "2021-09-06T20:27:30.805Z",
          "overallTonnage": 10280
        },
        {
          "date": "2021-09-06T20:27:30.805Z",
          "overallTonnage": 10280
        },
        {
          "date": "2021-09-06T20:27:30.805Z",
          "overallTonnage": 10280
        },
        {
          "date": "2021-09-20T12:44:17.026Z",
          "overallTonnage": 12260
        },
        {
          "date": "2021-09-20T12:44:17.026Z",
          "overallTonnage": 12260
        },
        {
          "date": "2021-09-20T12:44:17.026Z",
          "overallTonnage": 12260
        },
        {
          "date": "2021-09-27T10:49:05.648Z",
          "overallTonnage": 13250
        },
        {
          "date": "2021-09-27T10:49:05.648Z",
          "overallTonnage": 13250
        },
        {
          "date": "2021-09-27T10:49:05.648Z",
          "overallTonnage": 13250
        },
        {
          "date": "2021-10-26T10:43:08.060Z",
          "overallTonnage": 13650
        },
        {
          "date": "2021-10-26T10:43:08.060Z",
          "overallTonnage": 13650
        },
        {
          "date": "2021-10-26T10:43:08.060Z",
          "overallTonnage": 13650
        },
        {
          "date": "2022-01-01T20:58:13.894Z",
          "overallTonnage": 7650
        },
        {
          "date": "2022-01-01T20:58:13.894Z",
          "overallTonnage": 7650
        },
        {
          "date": "2022-01-01T20:58:13.894Z",
          "overallTonnage": 7650
        },
        {
          "date": "2022-01-09T21:38:18.428Z",
          "overallTonnage": 9135
        },
        {
          "date": "2022-01-09T21:38:18.428Z",
          "overallTonnage": 9135
        },
        {
          "date": "2022-01-09T21:38:18.428Z",
          "overallTonnage": 9135
        },
        {
          "date": "2022-03-11T19:24:22.148Z",
          "overallTonnage": 12830
        },
        {
          "date": "2022-03-25T01:25:38.905Z",
          "overallTonnage": 12680
        },
        {
          "date": "2022-04-17T19:35:48.804Z",
          "overallTonnage": 13750
        },
        {
          "date": "2022-05-13T20:39:54.741Z",
          "overallTonnage": 14015
        },
        {
          "date": "2022-06-10T02:26:43.276Z",
          "overallTonnage": 16185
        },
        {
          "date": "2022-08-14T20:44:52.771Z",
          "overallTonnage": 16380
        },
        {
          "date": "2022-08-18T01:21:44.125Z",
          "overallTonnage": 17095
        },
        {
          "date": "2022-08-23T00:45:07.784Z",
          "overallTonnage": 17760
        },
        {
          "date": "2022-09-17T01:09:32.577Z",
          "overallTonnage": 8350
        },
        {
          "date": "2022-09-17T01:09:32.577Z",
          "overallTonnage": 8350
        },
        {
          "date": "2022-09-17T01:09:32.577Z",
          "overallTonnage": 8350
        },
        {
          "date": "2023-02-07T03:41:04.354Z",
          "overallTonnage": 7940
        },
        {
          "date": "2023-02-07T03:41:04.354Z",
          "overallTonnage": 7940
        },
        {
          "date": "2023-12-09T03:12:42.156Z",
          "overallTonnage": 5760
        },
        {
          "date": "2023-12-09T03:12:42.156Z",
          "overallTonnage": 5760
        },
        {
          "date": "2023-12-17T01:54:26.583Z",
          "overallTonnage": 5760
        },
        {
          "date": "2023-12-17T01:54:26.583Z",
          "overallTonnage": 5760
        },
        {
          "date": "2023-12-24T01:16:22.466Z",
          "overallTonnage": 3465
        },
        {
          "date": "2023-12-24T01:16:22.466Z",
          "overallTonnage": 3465
        },
        {
          "date": "2023-12-30T02:16:38.525Z",
          "overallTonnage": 9000
        },
        {
          "date": "2023-12-30T02:16:38.525Z",
          "overallTonnage": 9000
        },
        {
          "date": "2024-01-07T03:13:53.259Z",
          "overallTonnage": 9360
        },
        {
          "date": "2024-01-07T03:13:53.259Z",
          "overallTonnage": 9360
        },
        {
          "date": "2024-01-13T02:30:02.485Z",
          "overallTonnage": 9720
        },
        {
          "date": "2024-01-13T02:30:02.485Z",
          "overallTonnage": 9720
        },
        {
          "date": "2024-01-20T02:19:21.540Z",
          "overallTonnage": 9720
        },
        {
          "date": "2024-01-20T02:19:21.540Z",
          "overallTonnage": 9720
        },
        {
          "date": "2024-01-27T01:53:52.368Z",
          "overallTonnage": 10080
        },
        {
          "date": "2024-01-27T01:53:52.368Z",
          "overallTonnage": 10080
        },
        {
          "date": "2024-02-03T01:21:38.506Z",
          "overallTonnage": 10260
        },
        {
          "date": "2024-02-03T01:21:38.506Z",
          "overallTonnage": 10260
        }
      ]
    },
    "StandardDeadlifts": {
      "maxHistory": [
        {
          "date": "2021-07-05T19:49:59.813Z",
          "equivalentMax": 235
        },
        {
          "date": "2021-07-05T19:49:59.813Z",
          "equivalentMax": 235
        },
        {
          "date": "2021-07-05T19:49:59.813Z",
          "equivalentMax": 235
        },
        {
          "date": "2021-07-05T19:55:03.213Z",
          "equivalentMax": 0
        },
        {
          "date": "2021-07-05T19:55:03.213Z",
          "equivalentMax": 0
        },
        {
          "date": "2021-07-05T19:55:03.213Z",
          "equivalentMax": 0
        },
        {
          "date": "2021-07-05T20:16:24.389Z",
          "equivalentMax": 265
        },
        {
          "date": "2021-07-05T20:16:24.389Z",
          "equivalentMax": 265
        },
        {
          "date": "2021-07-05T20:16:24.389Z",
          "equivalentMax": 265
        },
        {
          "date": "2021-07-05T20:17:20.685Z",
          "equivalentMax": 251
        },
        {
          "date": "2021-07-05T20:17:20.685Z",
          "equivalentMax": 251
        },
        {
          "date": "2021-07-05T20:17:20.685Z",
          "equivalentMax": 251
        },
        {
          "date": "2021-07-05T20:20:39.258Z",
          "equivalentMax": 265
        },
        {
          "date": "2021-07-05T20:20:39.258Z",
          "equivalentMax": 265
        },
        {
          "date": "2021-07-05T20:20:39.258Z",
          "equivalentMax": 265
        },
        {
          "date": "2021-07-06T00:46:46.826Z",
          "equivalentMax": 408
        },
        {
          "date": "2021-07-06T00:46:46.826Z",
          "equivalentMax": 408
        },
        {
          "date": "2021-07-06T00:46:46.826Z",
          "equivalentMax": 408
        },
        {
          "date": "2021-07-06T18:06:26.596Z",
          "equivalentMax": 623
        },
        {
          "date": "2021-07-06T18:06:26.596Z",
          "equivalentMax": 623
        },
        {
          "date": "2021-07-06T18:06:26.596Z",
          "equivalentMax": 623
        },
        {
          "date": "2021-07-13T02:45:49.184Z",
          "equivalentMax": 620
        },
        {
          "date": "2021-07-13T02:45:49.184Z",
          "equivalentMax": 620
        },
        {
          "date": "2021-07-13T02:45:49.184Z",
          "equivalentMax": 620
        },
        {
          "date": "2021-08-16T10:46:01.211Z",
          "equivalentMax": 534
        },
        {
          "date": "2021-08-16T10:46:01.211Z",
          "equivalentMax": 534
        },
        {
          "date": "2021-08-16T10:46:01.211Z",
          "equivalentMax": 534
        },
        {
          "date": "2021-08-23T10:46:53.004Z",
          "equivalentMax": 528
        },
        {
          "date": "2021-08-23T10:46:53.004Z",
          "equivalentMax": 528
        },
        {
          "date": "2021-08-23T10:46:53.004Z",
          "equivalentMax": 528
        },
        {
          "date": "2021-09-13T11:10:51.452Z",
          "equivalentMax": 570
        },
        {
          "date": "2021-09-13T11:10:51.452Z",
          "equivalentMax": 570
        },
        {
          "date": "2021-09-13T11:10:51.452Z",
          "equivalentMax": 570
        },
        {
          "date": "2021-10-04T10:46:15.481Z",
          "equivalentMax": 583
        },
        {
          "date": "2021-10-04T10:46:15.481Z",
          "equivalentMax": 583
        },
        {
          "date": "2021-10-04T10:46:15.481Z",
          "equivalentMax": 583
        },
        {
          "date": "2021-10-11T20:15:12.245Z",
          "equivalentMax": 595
        },
        {
          "date": "2021-10-11T20:15:12.245Z",
          "equivalentMax": 595
        },
        {
          "date": "2021-10-11T20:15:12.245Z",
          "equivalentMax": 595
        },
        {
          "date": "2021-10-19T10:52:18.765Z",
          "equivalentMax": 608
        },
        {
          "date": "2021-10-19T10:52:18.765Z",
          "equivalentMax": 608
        },
        {
          "date": "2021-10-19T10:52:18.765Z",
          "equivalentMax": 608
        },
        {
          "date": "2022-02-12T16:54:45.019Z",
          "equivalentMax": 621
        },
        {
          "date": "2022-02-20T01:09:35.181Z",
          "equivalentMax": 587
        },
        {
          "date": "2022-03-21T19:27:39.133Z",
          "equivalentMax": 594
        },
        {
          "date": "2022-03-30T18:44:49.098Z",
          "equivalentMax": 612
        },
        {
          "date": "2022-04-09T17:05:06.732Z",
          "equivalentMax": 595
        },
        {
          "date": "2022-04-28T20:02:58.167Z",
          "equivalentMax": 680
        },
        {
          "date": "2022-05-23T00:44:16.910Z",
          "equivalentMax": 612
        },
        {
          "date": "2022-07-31T00:59:50.290Z",
          "equivalentMax": 587
        },
        {
          "date": "2022-08-03T02:03:40.878Z",
          "equivalentMax": 616
        },
        {
          "date": "2022-09-05T17:50:33.088Z",
          "equivalentMax": 616
        },
        {
          "date": "2022-09-10T02:07:46.162Z",
          "equivalentMax": 469
        },
        {
          "date": "2022-09-12T02:46:46.364Z",
          "equivalentMax": 589
        },
        {
          "date": "2022-09-12T02:46:46.364Z",
          "equivalentMax": 314
        },
        {
          "date": "2022-09-16T04:10:19.804Z",
          "equivalentMax": 314
        },
        {
          "date": "2022-09-16T13:29:03.872Z",
          "equivalentMax": 314
        },
        {
          "date": "2022-09-19T03:42:23.659Z",
          "equivalentMax": 335
        },
        {
          "date": "2022-09-21T00:11:28.037Z",
          "equivalentMax": 319
        },
        {
          "date": "2022-09-22T23:17:15.884Z",
          "equivalentMax": 329
        },
        {
          "date": "2022-09-26T02:14:22.938Z",
          "equivalentMax": 359
        },
        {
          "date": "2022-10-01T02:52:11.800Z",
          "equivalentMax": 364
        },
        {
          "date": "2022-10-06T03:00:23.599Z",
          "equivalentMax": 359
        },
        {
          "date": "2022-10-13T03:01:05.369Z",
          "equivalentMax": 356
        },
        {
          "date": "2022-10-13T03:01:50.383Z",
          "equivalentMax": 356
        },
        {
          "date": "2022-11-03T02:31:47.027Z",
          "equivalentMax": 356
        },
        {
          "date": "2022-11-09T03:39:15.982Z",
          "equivalentMax": 353
        },
        {
          "date": "2022-11-11T03:50:36.957Z",
          "equivalentMax": 363
        },
        {
          "date": "2022-11-28T02:38:52.711Z",
          "equivalentMax": 364
        },
        {
          "date": "2022-12-02T03:27:47.470Z",
          "equivalentMax": 365
        }
      ],
      "tonnageInput": [
        [
          "1",
          "1",
          "305"
        ],
        [
          "1",
          "4",
          "305"
        ],
        [
          "0",
          "5",
          "295"
        ],
        [
          "0",
          "3",
          "315"
        ],
        [
          "0",
          "0",
          "0"
        ]
      ],
      "tonnageHistory": [
        {
          "date": "2021-07-05T19:49:59.813Z",
          "overallTonnage": 235
        },
        {
          "date": "2021-07-05T19:49:59.813Z",
          "overallTonnage": 235
        },
        {
          "date": "2021-07-05T19:49:59.813Z",
          "overallTonnage": 235
        },
        {
          "date": "2021-07-05T19:55:03.213Z",
          "overallTonnage": 470
        },
        {
          "date": "2021-07-05T19:55:03.213Z",
          "overallTonnage": 470
        },
        {
          "date": "2021-07-05T19:55:03.213Z",
          "overallTonnage": 470
        },
        {
          "date": "2021-07-05T20:16:24.389Z",
          "overallTonnage": 470
        },
        {
          "date": "2021-07-05T20:16:24.389Z",
          "overallTonnage": 470
        },
        {
          "date": "2021-07-05T20:16:24.389Z",
          "overallTonnage": 470
        },
        {
          "date": "2021-07-05T20:17:20.685Z",
          "overallTonnage": 470
        },
        {
          "date": "2021-07-05T20:17:20.685Z",
          "overallTonnage": 470
        },
        {
          "date": "2021-07-05T20:17:20.685Z",
          "overallTonnage": 470
        },
        {
          "date": "2021-07-05T20:20:39.258Z",
          "overallTonnage": 470
        },
        {
          "date": "2021-07-05T20:20:39.258Z",
          "overallTonnage": 470
        },
        {
          "date": "2021-07-05T20:20:39.258Z",
          "overallTonnage": 470
        },
        {
          "date": "2021-07-06T00:46:46.826Z",
          "overallTonnage": 6610
        },
        {
          "date": "2021-07-06T00:46:46.826Z",
          "overallTonnage": 6610
        },
        {
          "date": "2021-07-06T00:46:46.826Z",
          "overallTonnage": 6610
        },
        {
          "date": "2021-07-06T18:06:26.596Z",
          "overallTonnage": 13490
        },
        {
          "date": "2021-07-06T18:06:26.596Z",
          "overallTonnage": 13490
        },
        {
          "date": "2021-07-06T18:06:26.596Z",
          "overallTonnage": 13490
        },
        {
          "date": "2021-07-13T02:45:49.184Z",
          "overallTonnage": 12850
        },
        {
          "date": "2021-07-13T02:45:49.184Z",
          "overallTonnage": 12850
        },
        {
          "date": "2021-07-13T02:45:49.184Z",
          "overallTonnage": 12850
        },
        {
          "date": "2021-08-16T10:46:01.211Z",
          "overallTonnage": 5510
        },
        {
          "date": "2021-08-16T10:46:01.211Z",
          "overallTonnage": 5510
        },
        {
          "date": "2021-08-16T10:46:01.211Z",
          "overallTonnage": 5510
        },
        {
          "date": "2021-08-23T10:46:53.004Z",
          "overallTonnage": 7260
        },
        {
          "date": "2021-08-23T10:46:53.004Z",
          "overallTonnage": 7260
        },
        {
          "date": "2021-08-23T10:46:53.004Z",
          "overallTonnage": 7260
        },
        {
          "date": "2021-09-13T11:10:51.452Z",
          "overallTonnage": 9760
        },
        {
          "date": "2021-09-13T11:10:51.452Z",
          "overallTonnage": 9760
        },
        {
          "date": "2021-09-13T11:10:51.452Z",
          "overallTonnage": 9760
        },
        {
          "date": "2021-10-04T10:46:15.481Z",
          "overallTonnage": 11760
        },
        {
          "date": "2021-10-04T10:46:15.481Z",
          "overallTonnage": 11760
        },
        {
          "date": "2021-10-04T10:46:15.481Z",
          "overallTonnage": 11760
        },
        {
          "date": "2021-10-11T20:15:12.245Z",
          "overallTonnage": 10000
        },
        {
          "date": "2021-10-11T20:15:12.245Z",
          "overallTonnage": 10000
        },
        {
          "date": "2021-10-11T20:15:12.245Z",
          "overallTonnage": 10000
        },
        {
          "date": "2021-10-19T10:52:18.765Z",
          "overallTonnage": 10080
        },
        {
          "date": "2021-10-19T10:52:18.765Z",
          "overallTonnage": 10080
        },
        {
          "date": "2021-10-19T10:52:18.765Z",
          "overallTonnage": 10080
        },
        {
          "date": "2022-02-12T16:54:45.019Z",
          "overallTonnage": 10240
        },
        {
          "date": "2022-02-20T01:09:35.181Z",
          "overallTonnage": 13000
        },
        {
          "date": "2022-03-21T19:27:39.133Z",
          "overallTonnage": 10680
        },
        {
          "date": "2022-03-30T18:44:49.098Z",
          "overallTonnage": 11220
        },
        {
          "date": "2022-04-09T17:05:06.732Z",
          "overallTonnage": 10130
        },
        {
          "date": "2022-04-28T20:02:58.167Z",
          "overallTonnage": 13700
        },
        {
          "date": "2022-05-23T00:44:16.910Z",
          "overallTonnage": 13250
        },
        {
          "date": "2022-07-31T00:59:50.290Z",
          "overallTonnage": 13000
        },
        {
          "date": "2022-08-03T02:03:40.878Z",
          "overallTonnage": 13880
        },
        {
          "date": "2022-09-05T17:50:33.088Z",
          "overallTonnage": 13620
        },
        {
          "date": "2022-09-10T02:07:46.162Z",
          "overallTonnage": 2640
        },
        {
          "date": "2022-09-12T02:46:46.364Z",
          "overallTonnage": 2600
        },
        {
          "date": "2022-09-12T02:46:46.364Z",
          "overallTonnage": 2600
        },
        {
          "date": "2022-09-16T04:10:19.804Z",
          "overallTonnage": 2820
        },
        {
          "date": "2022-09-16T13:29:03.872Z",
          "overallTonnage": 1530
        },
        {
          "date": "2022-09-19T03:42:23.659Z",
          "overallTonnage": 2315
        },
        {
          "date": "2022-09-21T00:11:28.037Z",
          "overallTonnage": 2315
        },
        {
          "date": "2022-09-22T23:17:15.884Z",
          "overallTonnage": 2200
        },
        {
          "date": "2022-09-26T02:14:22.938Z",
          "overallTonnage": 2945
        },
        {
          "date": "2022-10-01T02:52:11.800Z",
          "overallTonnage": 2360
        },
        {
          "date": "2022-10-06T03:00:23.599Z",
          "overallTonnage": 3485
        },
        {
          "date": "2022-10-10T01:23:43.111Z",
          "overallTonnage": 3050
        },
        {
          "date": "2022-10-13T03:01:50.383Z",
          "overallTonnage": 3675
        },
        {
          "date": "2022-11-03T02:31:47.027Z",
          "overallTonnage": 3675
        },
        {
          "date": "2022-11-09T03:39:15.982Z",
          "overallTonnage": 3285
        },
        {
          "date": "2022-11-11T03:50:36.957Z",
          "overallTonnage": 4310
        },
        {
          "date": "2022-11-28T02:38:52.711Z",
          "overallTonnage": 1950
        },
        {
          "date": "2022-12-02T03:27:47.470Z",
          "overallTonnage": 690
        }
      ]
    },
    "PullDowns": {
      "maxHistory": [
        {
          "date": "2021-07-06T01:04:47.791Z",
          "equivalentMax": 43
        },
        {
          "date": "2021-07-06T01:04:47.791Z",
          "equivalentMax": 43
        },
        {
          "date": "2021-07-06T01:07:19.720Z",
          "equivalentMax": 258
        },
        {
          "date": "2021-07-06T01:07:19.720Z",
          "equivalentMax": 258
        },
        {
          "date": "2021-08-16T10:47:31.062Z",
          "equivalentMax": 252
        },
        {
          "date": "2021-08-16T10:47:31.062Z",
          "equivalentMax": 252
        },
        {
          "date": "2021-08-16T10:47:31.062Z",
          "equivalentMax": 252
        },
        {
          "date": "2021-08-16T10:47:31.062Z",
          "equivalentMax": 252
        },
        {
          "date": "2021-08-25T10:49:29.819Z",
          "equivalentMax": 259
        },
        {
          "date": "2021-08-25T10:49:29.819Z",
          "equivalentMax": 259
        },
        {
          "date": "2021-08-25T10:49:29.819Z",
          "equivalentMax": 259
        },
        {
          "date": "2021-08-25T10:49:29.819Z",
          "equivalentMax": 259
        },
        {
          "date": "2021-08-30T10:59:48.684Z",
          "equivalentMax": 259
        },
        {
          "date": "2021-08-30T10:59:48.684Z",
          "equivalentMax": 259
        },
        {
          "date": "2021-08-30T10:59:48.684Z",
          "equivalentMax": 259
        },
        {
          "date": "2021-08-30T10:59:48.684Z",
          "equivalentMax": 259
        },
        {
          "date": "2021-09-06T20:50:23.997Z",
          "equivalentMax": 259
        },
        {
          "date": "2021-09-06T20:50:23.997Z",
          "equivalentMax": 259
        },
        {
          "date": "2021-09-06T20:50:23.997Z",
          "equivalentMax": 259
        },
        {
          "date": "2021-09-06T20:50:23.997Z",
          "equivalentMax": 259
        },
        {
          "date": "2021-09-13T12:18:39.493Z",
          "equivalentMax": 259
        },
        {
          "date": "2021-09-13T12:18:39.493Z",
          "equivalentMax": 259
        },
        {
          "date": "2021-09-13T12:18:39.493Z",
          "equivalentMax": 259
        },
        {
          "date": "2021-09-13T12:18:39.493Z",
          "equivalentMax": 259
        },
        {
          "date": "2021-09-20T12:01:04.593Z",
          "equivalentMax": 259
        },
        {
          "date": "2021-09-20T12:01:04.593Z",
          "equivalentMax": 259
        },
        {
          "date": "2021-09-20T12:01:04.593Z",
          "equivalentMax": 259
        },
        {
          "date": "2021-09-20T12:01:04.593Z",
          "equivalentMax": 259
        },
        {
          "date": "2021-09-27T11:11:45.912Z",
          "equivalentMax": 266
        },
        {
          "date": "2021-09-27T11:11:45.912Z",
          "equivalentMax": 266
        },
        {
          "date": "2021-09-27T11:11:45.912Z",
          "equivalentMax": 266
        },
        {
          "date": "2021-09-27T11:11:45.912Z",
          "equivalentMax": 266
        },
        {
          "date": "2021-10-04T11:00:51.295Z",
          "equivalentMax": 276
        },
        {
          "date": "2021-10-04T11:00:51.295Z",
          "equivalentMax": 276
        },
        {
          "date": "2021-10-04T11:00:51.295Z",
          "equivalentMax": 276
        },
        {
          "date": "2021-10-04T11:00:51.295Z",
          "equivalentMax": 276
        },
        {
          "date": "2021-10-19T11:09:24.343Z",
          "equivalentMax": 269
        },
        {
          "date": "2021-10-19T11:09:24.343Z",
          "equivalentMax": 269
        },
        {
          "date": "2021-10-19T11:09:24.343Z",
          "equivalentMax": 269
        },
        {
          "date": "2021-10-19T11:09:24.343Z",
          "equivalentMax": 269
        },
        {
          "date": "2021-10-26T10:58:52.497Z",
          "equivalentMax": 269
        },
        {
          "date": "2021-10-26T10:58:52.497Z",
          "equivalentMax": 269
        },
        {
          "date": "2021-10-26T10:58:52.497Z",
          "equivalentMax": 269
        },
        {
          "date": "2021-10-26T10:58:52.497Z",
          "equivalentMax": 269
        },
        {
          "date": "2022-01-05T03:32:08.206Z",
          "equivalentMax": 477
        },
        {
          "date": "2022-01-05T03:32:08.206Z",
          "equivalentMax": 247
        },
        {
          "date": "2022-01-05T03:32:08.206Z",
          "equivalentMax": 477
        },
        {
          "date": "2022-01-05T03:32:08.206Z",
          "equivalentMax": 477
        },
        {
          "date": "2022-03-27T00:37:17.519Z",
          "equivalentMax": 491
        },
        {
          "date": "2022-03-27T00:37:17.519Z",
          "equivalentMax": 261
        },
        {
          "date": "2022-04-11T18:18:56.627Z",
          "equivalentMax": 491
        },
        {
          "date": "2022-04-11T18:18:56.627Z",
          "equivalentMax": 261
        },
        {
          "date": "2022-04-25T17:16:10.461Z",
          "equivalentMax": 491
        },
        {
          "date": "2022-04-25T17:16:10.461Z",
          "equivalentMax": 261
        },
        {
          "date": "2022-05-13T20:41:02.686Z",
          "equivalentMax": 513
        },
        {
          "date": "2022-05-13T20:41:02.686Z",
          "equivalentMax": 283
        },
        {
          "date": "2022-08-07T00:54:31.064Z",
          "equivalentMax": 173
        },
        {
          "date": "2022-08-07T00:54:31.064Z",
          "equivalentMax": 173
        },
        {
          "date": "2022-09-05T18:07:39.083Z",
          "equivalentMax": 173
        },
        {
          "date": "2022-09-05T18:07:39.083Z",
          "equivalentMax": 173
        },
        {
          "date": "2022-09-08T02:06:12.355Z",
          "equivalentMax": 146
        },
        {
          "date": "2022-09-08T02:06:12.355Z",
          "equivalentMax": 146
        },
        {
          "date": "2022-09-11T05:01:00.520Z",
          "equivalentMax": 153
        },
        {
          "date": "2022-09-11T05:01:00.520Z",
          "equivalentMax": 153
        },
        {
          "date": "2022-09-13T03:43:18.090Z",
          "equivalentMax": 177
        },
        {
          "date": "2022-09-13T03:43:18.090Z",
          "equivalentMax": 177
        },
        {
          "date": "2022-09-17T19:39:19.301Z",
          "equivalentMax": 214
        },
        {
          "date": "2022-09-22T23:31:25.366Z",
          "equivalentMax": 217
        },
        {
          "date": "2022-10-08T03:25:45.525Z",
          "equivalentMax": 183
        },
        {
          "date": "2022-11-20T23:54:21.008Z",
          "equivalentMax": 177
        }
      ],
      "tonnageInput": [
        [
          "2",
          "8",
          "115"
        ],
        [
          "2",
          "8",
          "140"
        ],
        [
          "0",
          "3",
          "235"
        ],
        [
          "0",
          "4",
          "235"
        ],
        [
          "0",
          "0",
          "0"
        ]
      ],
      "tonnageHistory": [
        {
          "date": "2021-07-06T01:04:47.791Z",
          "overallTonnage": 0
        },
        {
          "date": "2021-07-06T01:04:47.791Z",
          "overallTonnage": 0
        },
        {
          "date": "2021-07-06T01:07:19.720Z",
          "overallTonnage": 3870
        },
        {
          "date": "2021-07-06T01:07:19.720Z",
          "overallTonnage": 3870
        },
        {
          "date": "2021-08-16T10:47:31.062Z",
          "overallTonnage": 3780
        },
        {
          "date": "2021-08-16T10:47:31.062Z",
          "overallTonnage": 3780
        },
        {
          "date": "2021-08-16T10:47:31.062Z",
          "overallTonnage": 3780
        },
        {
          "date": "2021-08-16T10:47:31.062Z",
          "overallTonnage": 3780
        },
        {
          "date": "2021-08-25T10:49:29.819Z",
          "overallTonnage": 3990
        },
        {
          "date": "2021-08-25T10:49:29.819Z",
          "overallTonnage": 3990
        },
        {
          "date": "2021-08-25T10:49:29.819Z",
          "overallTonnage": 3990
        },
        {
          "date": "2021-08-25T10:49:29.819Z",
          "overallTonnage": 3990
        },
        {
          "date": "2021-08-30T10:59:48.684Z",
          "overallTonnage": 4410
        },
        {
          "date": "2021-08-30T10:59:48.684Z",
          "overallTonnage": 4410
        },
        {
          "date": "2021-08-30T10:59:48.684Z",
          "overallTonnage": 4410
        },
        {
          "date": "2021-08-30T10:59:48.684Z",
          "overallTonnage": 4410
        },
        {
          "date": "2021-09-06T20:50:23.997Z",
          "overallTonnage": 4410
        },
        {
          "date": "2021-09-06T20:50:23.997Z",
          "overallTonnage": 4410
        },
        {
          "date": "2021-09-06T20:50:23.997Z",
          "overallTonnage": 4410
        },
        {
          "date": "2021-09-06T20:50:23.997Z",
          "overallTonnage": 4410
        },
        {
          "date": "2021-09-13T12:18:39.493Z",
          "overallTonnage": 4410
        },
        {
          "date": "2021-09-13T12:18:39.493Z",
          "overallTonnage": 4410
        },
        {
          "date": "2021-09-13T12:18:39.493Z",
          "overallTonnage": 4410
        },
        {
          "date": "2021-09-13T12:18:39.493Z",
          "overallTonnage": 4410
        },
        {
          "date": "2021-09-20T12:01:04.593Z",
          "overallTonnage": 4410
        },
        {
          "date": "2021-09-20T12:01:04.593Z",
          "overallTonnage": 4410
        },
        {
          "date": "2021-09-20T12:01:04.593Z",
          "overallTonnage": 4410
        },
        {
          "date": "2021-09-20T12:01:04.593Z",
          "overallTonnage": 4410
        },
        {
          "date": "2021-09-27T11:11:45.912Z",
          "overallTonnage": 5040
        },
        {
          "date": "2021-09-27T11:11:45.912Z",
          "overallTonnage": 5040
        },
        {
          "date": "2021-09-27T11:11:45.912Z",
          "overallTonnage": 5040
        },
        {
          "date": "2021-09-27T11:11:45.912Z",
          "overallTonnage": 5040
        },
        {
          "date": "2021-10-04T11:00:51.295Z",
          "overallTonnage": 5014
        },
        {
          "date": "2021-10-04T11:00:51.295Z",
          "overallTonnage": 5014
        },
        {
          "date": "2021-10-04T11:00:51.295Z",
          "overallTonnage": 5014
        },
        {
          "date": "2021-10-04T11:00:51.295Z",
          "overallTonnage": 5014
        },
        {
          "date": "2021-10-19T11:09:24.343Z",
          "overallTonnage": 3924
        },
        {
          "date": "2021-10-19T11:09:24.343Z",
          "overallTonnage": 3924
        },
        {
          "date": "2021-10-19T11:09:24.343Z",
          "overallTonnage": 3924
        },
        {
          "date": "2021-10-19T11:09:24.343Z",
          "overallTonnage": 3924
        },
        {
          "date": "2021-10-26T10:58:52.497Z",
          "overallTonnage": 4142
        },
        {
          "date": "2021-10-26T10:58:52.497Z",
          "overallTonnage": 4142
        },
        {
          "date": "2021-10-26T10:58:52.497Z",
          "overallTonnage": 4142
        },
        {
          "date": "2021-10-26T10:58:52.497Z",
          "overallTonnage": 4142
        },
        {
          "date": "2022-01-05T03:32:08.206Z",
          "overallTonnage": 9754
        },
        {
          "date": "2022-01-05T03:32:08.206Z",
          "overallTonnage": 6342
        },
        {
          "date": "2022-01-05T03:32:08.206Z",
          "overallTonnage": 9754
        },
        {
          "date": "2022-01-05T03:32:08.206Z",
          "overallTonnage": 9754
        },
        {
          "date": "2022-03-27T00:37:17.519Z",
          "overallTonnage": 10190
        },
        {
          "date": "2022-03-27T00:37:17.519Z",
          "overallTonnage": 6342
        },
        {
          "date": "2022-04-11T18:18:56.627Z",
          "overallTonnage": 10806
        },
        {
          "date": "2022-04-11T18:18:56.627Z",
          "overallTonnage": 6342
        },
        {
          "date": "2022-04-25T17:16:10.461Z",
          "overallTonnage": 10806
        },
        {
          "date": "2022-04-25T17:16:10.461Z",
          "overallTonnage": 6342
        },
        {
          "date": "2022-05-13T20:41:02.686Z",
          "overallTonnage": 6342
        },
        {
          "date": "2022-05-13T20:41:02.686Z",
          "overallTonnage": 6342
        },
        {
          "date": "2022-08-07T00:54:31.064Z",
          "overallTonnage": 5175
        },
        {
          "date": "2022-08-07T00:54:31.064Z",
          "overallTonnage": 5175
        },
        {
          "date": "2022-09-05T18:07:39.083Z",
          "overallTonnage": 5175
        },
        {
          "date": "2022-09-05T18:07:39.083Z",
          "overallTonnage": 5175
        },
        {
          "date": "2022-09-08T02:06:12.355Z",
          "overallTonnage": 1840
        },
        {
          "date": "2022-09-08T02:06:12.355Z",
          "overallTonnage": 1840
        },
        {
          "date": "2022-09-11T05:01:00.520Z",
          "overallTonnage": 2300
        },
        {
          "date": "2022-09-11T05:01:00.520Z",
          "overallTonnage": 2300
        },
        {
          "date": "2022-09-13T03:43:18.090Z",
          "overallTonnage": 4080
        },
        {
          "date": "2022-09-13T03:43:18.090Z",
          "overallTonnage": 4080
        },
        {
          "date": "2022-09-17T19:39:19.301Z",
          "overallTonnage": 6160
        },
        {
          "date": "2022-09-22T23:31:25.366Z",
          "overallTonnage": 4680
        },
        {
          "date": "2022-10-08T03:25:45.525Z",
          "overallTonnage": 5000
        },
        {
          "date": "2022-11-20T23:54:21.008Z",
          "overallTonnage": 4000
        }
      ]
    },
    "LatPullOvers": {
      "maxHistory": [
        {
          "date": "2021-08-16T10:47:31.062Z",
          "equivalentMax": 252
        },
        {
          "date": "2021-08-25T10:49:29.819Z",
          "equivalentMax": 259
        },
        {
          "date": "2021-08-30T10:59:48.684Z",
          "equivalentMax": 259
        },
        {
          "date": "2021-09-06T20:50:23.997Z",
          "equivalentMax": 259
        },
        {
          "date": "2021-09-13T12:18:39.493Z",
          "equivalentMax": 259
        },
        {
          "date": "2021-09-20T12:01:04.593Z",
          "equivalentMax": 259
        },
        {
          "date": "2021-09-27T11:11:45.912Z",
          "equivalentMax": 266
        },
        {
          "date": "2021-10-04T11:00:51.295Z",
          "equivalentMax": 276
        },
        {
          "date": "2021-10-19T11:09:24.343Z",
          "equivalentMax": 269
        },
        {
          "date": "2021-10-26T10:58:52.497Z",
          "equivalentMax": 269
        },
        {
          "date": "2022-01-05T03:32:08.206Z",
          "equivalentMax": 477
        },
        {
          "date": "2022-03-27T00:37:17.519Z",
          "equivalentMax": 491
        },
        {
          "date": "2022-04-11T18:18:56.627Z",
          "equivalentMax": 491
        },
        {
          "date": "2022-04-25T17:16:10.461Z",
          "equivalentMax": 491
        },
        {
          "date": "2022-05-13T20:41:02.686Z",
          "equivalentMax": 513
        },
        {
          "date": "2022-08-07T00:54:31.064Z",
          "equivalentMax": 173
        },
        {
          "date": "2022-09-05T18:07:39.083Z",
          "equivalentMax": 173
        },
        {
          "date": "2022-09-08T02:06:12.355Z",
          "equivalentMax": 146
        },
        {
          "date": "2022-09-11T05:01:00.520Z",
          "equivalentMax": 153
        },
        {
          "date": "2022-09-16T04:14:27.406Z",
          "equivalentMax": 78
        },
        {
          "date": "2022-10-01T03:38:09.568Z",
          "equivalentMax": 78
        }
      ],
      "tonnageInput": [
        [
          "2",
          "10",
          "115"
        ],
        [
          "0",
          "3",
          "235"
        ],
        [
          "0",
          "3",
          "235"
        ],
        [
          "0",
          "4",
          "235"
        ],
        [
          "0",
          "0",
          "0"
        ]
      ],
      "tonnageHistory": [
        {
          "date": "2021-08-16T10:47:31.062Z",
          "overallTonnage": 3780
        },
        {
          "date": "2021-08-25T10:49:29.819Z",
          "overallTonnage": 3990
        },
        {
          "date": "2021-08-30T10:59:48.684Z",
          "overallTonnage": 4410
        },
        {
          "date": "2021-09-06T20:50:23.997Z",
          "overallTonnage": 4410
        },
        {
          "date": "2021-09-13T12:18:39.493Z",
          "overallTonnage": 4410
        },
        {
          "date": "2021-09-20T12:01:04.593Z",
          "overallTonnage": 4410
        },
        {
          "date": "2021-09-27T11:11:45.912Z",
          "overallTonnage": 5040
        },
        {
          "date": "2021-10-04T11:00:51.295Z",
          "overallTonnage": 5014
        },
        {
          "date": "2021-10-19T11:09:24.343Z",
          "overallTonnage": 3924
        },
        {
          "date": "2021-10-26T10:58:52.497Z",
          "overallTonnage": 4142
        },
        {
          "date": "2022-01-05T03:32:08.206Z",
          "overallTonnage": 9754
        },
        {
          "date": "2022-03-27T00:37:17.519Z",
          "overallTonnage": 10190
        },
        {
          "date": "2022-04-11T18:18:56.627Z",
          "overallTonnage": 10806
        },
        {
          "date": "2022-04-25T17:16:10.461Z",
          "overallTonnage": 10806
        },
        {
          "date": "2022-05-13T20:41:02.686Z",
          "overallTonnage": 6342
        },
        {
          "date": "2022-08-07T00:54:31.064Z",
          "overallTonnage": 5175
        },
        {
          "date": "2022-09-05T18:07:39.083Z",
          "overallTonnage": 5175
        },
        {
          "date": "2022-09-08T02:06:12.355Z",
          "overallTonnage": 1840
        },
        {
          "date": "2022-09-11T05:01:00.520Z",
          "overallTonnage": 2300
        },
        {
          "date": "2022-09-16T04:14:27.406Z",
          "overallTonnage": 900
        },
        {
          "date": "2022-10-01T03:38:09.568Z",
          "overallTonnage": 900
        }
      ]
    },
    "BarbellRows": {
      "maxHistory": [
        {
          "date": "2022-04-01T00:37:45.114Z",
          "equivalentMax": 200
        },
        {
          "date": "2022-04-01T00:37:45.114Z",
          "equivalentMax": 200
        },
        {
          "date": "2022-04-20T02:31:45.567Z",
          "equivalentMax": 200
        },
        {
          "date": "2022-04-20T02:31:45.567Z",
          "equivalentMax": 200
        }
      ],
      "tonnageInput": [
        [
          "1",
          "10",
          "150"
        ],
        [
          "2",
          "10",
          "150"
        ],
        [
          "0",
          "0",
          "0"
        ],
        [
          "0",
          "0",
          "0"
        ],
        [
          "0",
          "0",
          "0"
        ]
      ],
      "tonnageHistory": [
        {
          "date": "2022-04-01T00:37:45.114Z",
          "overallTonnage": 4500
        },
        {
          "date": "2022-04-01T00:37:45.114Z",
          "overallTonnage": 4500
        },
        {
          "date": "2022-04-20T02:31:45.567Z",
          "overallTonnage": 4500
        },
        {
          "date": "2022-04-20T02:31:45.567Z",
          "overallTonnage": 4500
        }
      ]
    },
    "Lawnmowers": {
      "maxHistory": [
        {
          "date": "2022-04-01T00:37:45.114Z",
          "equivalentMax": 200
        },
        {
          "date": "2022-04-01T00:37:45.114Z",
          "equivalentMax": 200
        },
        {
          "date": "2022-04-01T00:37:45.114Z",
          "equivalentMax": 200
        },
        {
          "date": "2022-04-01T00:37:45.114Z",
          "equivalentMax": 200
        },
        {
          "date": "2022-04-20T02:31:45.567Z",
          "equivalentMax": 200
        },
        {
          "date": "2022-04-20T02:31:45.567Z",
          "equivalentMax": 200
        },
        {
          "date": "2022-04-20T02:31:45.567Z",
          "equivalentMax": 200
        },
        {
          "date": "2022-04-20T02:31:45.567Z",
          "equivalentMax": 200
        },
        {
          "date": "2022-09-16T04:16:26.502Z",
          "equivalentMax": 230
        },
        {
          "date": "2022-09-16T04:16:26.502Z",
          "equivalentMax": 230
        },
        {
          "date": "2022-09-16T04:16:26.502Z",
          "equivalentMax": 230
        },
        {
          "date": "2022-10-01T03:40:30.624Z",
          "equivalentMax": 230
        },
        {
          "date": "2022-10-01T03:40:30.624Z",
          "equivalentMax": 230
        },
        {
          "date": "2022-10-01T03:40:30.624Z",
          "equivalentMax": 230
        },
        {
          "date": "2023-12-08T01:45:56.485Z",
          "equivalentMax": 75
        },
        {
          "date": "2023-12-08T01:45:56.485Z",
          "equivalentMax": 75
        },
        {
          "date": "2023-12-16T02:52:31.895Z",
          "equivalentMax": 75
        },
        {
          "date": "2023-12-16T02:52:31.895Z",
          "equivalentMax": 75
        },
        {
          "date": "2023-12-29T02:20:26.195Z",
          "equivalentMax": 75
        },
        {
          "date": "2023-12-29T02:20:26.195Z",
          "equivalentMax": 75
        },
        {
          "date": "2024-01-05T03:17:03.145Z",
          "equivalentMax": 78
        },
        {
          "date": "2024-01-05T03:17:03.145Z",
          "equivalentMax": 78
        },
        {
          "date": "2024-01-12T03:09:06.697Z",
          "equivalentMax": 125
        },
        {
          "date": "2024-01-12T03:09:06.697Z",
          "equivalentMax": 125
        },
        {
          "date": "2024-01-19T03:12:08.219Z",
          "equivalentMax": 125
        },
        {
          "date": "2024-01-19T03:12:08.219Z",
          "equivalentMax": 125
        },
        {
          "date": "2024-02-02T02:17:18.685Z",
          "equivalentMax": 121
        },
        {
          "date": "2024-02-02T02:17:18.685Z",
          "equivalentMax": 121
        },
        {
          "date": "2024-02-09T02:09:08.082Z",
          "equivalentMax": 123
        }
      ],
      "tonnageInput": [
        [
          "1",
          "10",
          "150"
        ],
        [
          "2",
          "10",
          "150"
        ],
        [
          "0",
          "0",
          "0"
        ],
        [
          "0",
          "0",
          "0"
        ],
        [
          "0",
          "0",
          "0"
        ]
      ],
      "tonnageHistory": [
        {
          "date": "2022-04-01T00:37:45.114Z",
          "overallTonnage": 4500
        },
        {
          "date": "2022-04-01T00:37:45.114Z",
          "overallTonnage": 4500
        },
        {
          "date": "2022-04-01T00:37:45.114Z",
          "overallTonnage": 4500
        },
        {
          "date": "2022-04-01T00:37:45.114Z",
          "overallTonnage": 4500
        },
        {
          "date": "2022-04-20T02:31:45.567Z",
          "overallTonnage": 4500
        },
        {
          "date": "2022-04-20T02:31:45.567Z",
          "overallTonnage": 4500
        },
        {
          "date": "2022-04-20T02:31:45.567Z",
          "overallTonnage": 4500
        },
        {
          "date": "2022-04-20T02:31:45.567Z",
          "overallTonnage": 4500
        },
        {
          "date": "2022-09-16T04:16:26.502Z",
          "overallTonnage": 3000
        },
        {
          "date": "2022-09-16T04:16:26.502Z",
          "overallTonnage": 3000
        },
        {
          "date": "2022-09-16T04:16:26.502Z",
          "overallTonnage": 3000
        },
        {
          "date": "2022-10-01T03:40:30.624Z",
          "overallTonnage": 3000
        },
        {
          "date": "2022-10-01T03:40:30.624Z",
          "overallTonnage": 3000
        },
        {
          "date": "2022-10-01T03:40:30.624Z",
          "overallTonnage": 3000
        },
        {
          "date": "2023-12-08T01:45:56.485Z",
          "overallTonnage": 2250
        },
        {
          "date": "2023-12-08T01:45:56.485Z",
          "overallTonnage": 2250
        },
        {
          "date": "2023-12-16T02:52:31.895Z",
          "overallTonnage": 2250
        },
        {
          "date": "2023-12-16T02:52:31.895Z",
          "overallTonnage": 2250
        },
        {
          "date": "2023-12-29T02:20:26.195Z",
          "overallTonnage": 2250
        },
        {
          "date": "2023-12-29T02:20:26.195Z",
          "overallTonnage": 2250
        },
        {
          "date": "2024-01-05T03:17:03.145Z",
          "overallTonnage": 2550
        },
        {
          "date": "2024-01-05T03:17:03.145Z",
          "overallTonnage": 2550
        },
        {
          "date": "2024-01-12T03:09:06.697Z",
          "overallTonnage": 2550
        },
        {
          "date": "2024-01-12T03:09:06.697Z",
          "overallTonnage": 2550
        },
        {
          "date": "2024-01-19T03:12:08.219Z",
          "overallTonnage": 2700
        },
        {
          "date": "2024-01-19T03:12:08.219Z",
          "overallTonnage": 2700
        },
        {
          "date": "2024-02-02T02:17:18.685Z",
          "overallTonnage": 2925
        },
        {
          "date": "2024-02-02T02:17:18.685Z",
          "overallTonnage": 2925
        },
        {
          "date": "2024-02-09T02:09:08.082Z",
          "overallTonnage": 3150
        }
      ]
    },
    "HipThrusters": {
      "maxHistory": [
        {
          "date": "2022-04-01T00:37:45.114Z",
          "equivalentMax": 200
        },
        {
          "date": "2022-04-01T00:37:45.114Z",
          "equivalentMax": 200
        },
        {
          "date": "2022-04-20T02:31:45.567Z",
          "equivalentMax": 200
        },
        {
          "date": "2022-04-20T02:31:45.567Z",
          "equivalentMax": 200
        },
        {
          "date": "2022-09-16T04:17:08.405Z",
          "equivalentMax": 176
        }
      ],
      "tonnageInput": [
        [
          "1",
          "10",
          "150"
        ],
        [
          "2",
          "10",
          "150"
        ],
        [
          "0",
          "0",
          "0"
        ],
        [
          "0",
          "0",
          "0"
        ],
        [
          "0",
          "0",
          "0"
        ]
      ],
      "tonnageHistory": [
        {
          "date": "2022-04-01T00:37:45.114Z",
          "overallTonnage": 4500
        },
        {
          "date": "2022-04-01T00:37:45.114Z",
          "overallTonnage": 4500
        },
        {
          "date": "2022-04-20T02:31:45.567Z",
          "overallTonnage": 4500
        },
        {
          "date": "2022-04-20T02:31:45.567Z",
          "overallTonnage": 4500
        },
        {
          "date": "2022-09-16T04:17:08.405Z",
          "overallTonnage": 2300
        }
      ]
    },
    "Squats": {
      "maxHistory": [
        {
          "date": "2021-07-09T01:36:24.467Z",
          "equivalentMax": 532
        },
        {
          "date": "2021-07-17T01:52:41.584Z",
          "equivalentMax": 532
        },
        {
          "date": "2021-08-20T10:55:39.329Z",
          "equivalentMax": 507
        },
        {
          "date": "2021-09-03T10:41:53.925Z",
          "equivalentMax": 532
        },
        {
          "date": "2021-09-10T10:51:32.746Z",
          "equivalentMax": 557
        },
        {
          "date": "2021-09-17T10:47:28.430Z",
          "equivalentMax": 557
        },
        {
          "date": "2021-09-24T10:58:17.294Z",
          "equivalentMax": 488
        },
        {
          "date": "2021-10-09T19:27:11.936Z",
          "equivalentMax": 480
        },
        {
          "date": "2022-01-01T21:45:58.093Z",
          "equivalentMax": 480
        },
        {
          "date": "2022-03-02T20:40:04.476Z",
          "equivalentMax": 528
        },
        {
          "date": "2022-03-09T02:28:05.191Z",
          "equivalentMax": 532
        },
        {
          "date": "2022-03-26T02:12:56.466Z",
          "equivalentMax": 557
        },
        {
          "date": "2022-04-14T01:15:33.507Z",
          "equivalentMax": 557
        },
        {
          "date": "2022-04-23T22:03:49.048Z",
          "equivalentMax": 587
        },
        {
          "date": "2022-05-13T19:51:44.035Z",
          "equivalentMax": 601
        },
        {
          "date": "2022-06-11T19:59:13.470Z",
          "equivalentMax": 578
        },
        {
          "date": "2022-08-12T00:55:09.361Z",
          "equivalentMax": 557
        },
        {
          "date": "2022-09-09T02:27:02.760Z",
          "equivalentMax": 525
        },
        {
          "date": "2022-09-12T02:33:10.965Z",
          "equivalentMax": 490
        },
        {
          "date": "2022-09-14T02:36:21.094Z",
          "equivalentMax": 510
        },
        {
          "date": "2022-09-14T02:36:21.094Z",
          "equivalentMax": 295
        },
        {
          "date": "2022-09-14T02:36:21.094Z",
          "equivalentMax": 295
        },
        {
          "date": "2022-09-14T02:36:21.094Z",
          "equivalentMax": 295
        },
        {
          "date": "2022-09-19T02:51:57.207Z",
          "equivalentMax": 352
        },
        {
          "date": "2022-09-19T02:51:57.207Z",
          "equivalentMax": 352
        },
        {
          "date": "2022-09-19T02:51:57.207Z",
          "equivalentMax": 352
        },
        {
          "date": "2022-09-20T23:59:07.644Z",
          "equivalentMax": 332
        },
        {
          "date": "2022-09-20T23:59:07.644Z",
          "equivalentMax": 332
        },
        {
          "date": "2022-09-20T23:59:07.644Z",
          "equivalentMax": 332
        },
        {
          "date": "2022-09-26T01:04:34.094Z",
          "equivalentMax": 347
        },
        {
          "date": "2022-09-26T01:04:34.094Z",
          "equivalentMax": 347
        },
        {
          "date": "2022-09-26T01:04:34.094Z",
          "equivalentMax": 347
        },
        {
          "date": "2022-09-29T02:28:12.983Z",
          "equivalentMax": 342
        },
        {
          "date": "2022-09-29T02:28:12.983Z",
          "equivalentMax": 342
        },
        {
          "date": "2022-09-29T02:28:12.983Z",
          "equivalentMax": 342
        },
        {
          "date": "2022-10-06T02:10:16.459Z",
          "equivalentMax": 345
        },
        {
          "date": "2022-10-06T02:10:16.459Z",
          "equivalentMax": 345
        },
        {
          "date": "2022-10-06T02:10:16.459Z",
          "equivalentMax": 345
        },
        {
          "date": "2022-10-13T02:15:58.851Z",
          "equivalentMax": 342
        },
        {
          "date": "2022-10-13T02:15:58.851Z",
          "equivalentMax": 342
        },
        {
          "date": "2022-10-13T02:15:58.851Z",
          "equivalentMax": 342
        },
        {
          "date": "2022-11-03T01:25:29.035Z",
          "equivalentMax": 342
        },
        {
          "date": "2022-11-03T01:25:29.035Z",
          "equivalentMax": 342
        },
        {
          "date": "2022-11-03T01:25:29.035Z",
          "equivalentMax": 342
        },
        {
          "date": "2022-11-06T22:04:36.713Z",
          "equivalentMax": 342
        },
        {
          "date": "2022-11-06T22:04:36.713Z",
          "equivalentMax": 342
        },
        {
          "date": "2022-11-06T22:04:36.713Z",
          "equivalentMax": 342
        },
        {
          "date": "2022-11-11T02:06:43.800Z",
          "equivalentMax": 352
        },
        {
          "date": "2022-11-11T02:06:43.800Z",
          "equivalentMax": 352
        },
        {
          "date": "2022-11-11T02:06:43.800Z",
          "equivalentMax": 352
        },
        {
          "date": "2022-12-02T01:44:59.546Z",
          "equivalentMax": 355
        },
        {
          "date": "2022-12-02T01:44:59.546Z",
          "equivalentMax": 355
        },
        {
          "date": "2022-12-02T01:44:59.546Z",
          "equivalentMax": 355
        },
        {
          "date": "2022-12-26T21:14:22.988Z",
          "equivalentMax": 350
        },
        {
          "date": "2022-12-26T21:14:22.988Z",
          "equivalentMax": 350
        },
        {
          "date": "2023-02-15T02:30:16.589Z",
          "equivalentMax": 350
        },
        {
          "date": "2023-02-15T02:30:16.589Z",
          "equivalentMax": 350
        },
        {
          "date": "2023-03-01T04:41:47.492Z",
          "equivalentMax": 339
        },
        {
          "date": "2023-03-01T04:41:47.492Z",
          "equivalentMax": 339
        },
        {
          "date": "2023-03-05T01:39:51.308Z",
          "equivalentMax": 332
        },
        {
          "date": "2023-03-05T01:39:51.308Z",
          "equivalentMax": 332
        },
        {
          "date": "2023-05-29T00:29:55.467Z",
          "equivalentMax": 333
        },
        {
          "date": "2023-05-29T00:29:55.467Z",
          "equivalentMax": 333
        },
        {
          "date": "2023-06-05T01:54:46.849Z",
          "equivalentMax": 332
        },
        {
          "date": "2023-06-05T01:54:46.849Z",
          "equivalentMax": 332
        },
        {
          "date": "2023-06-07T04:07:12.261Z",
          "equivalentMax": 359
        },
        {
          "date": "2023-06-07T04:07:12.261Z",
          "equivalentMax": 359
        },
        {
          "date": "2023-06-11T03:17:29.585Z",
          "equivalentMax": 361
        },
        {
          "date": "2023-06-11T03:17:29.585Z",
          "equivalentMax": 361
        },
        {
          "date": "2023-07-23T00:18:29.553Z",
          "equivalentMax": 354
        },
        {
          "date": "2023-07-23T00:18:29.553Z",
          "equivalentMax": 354
        },
        {
          "date": "2023-07-26T01:13:33.061Z",
          "equivalentMax": 365
        },
        {
          "date": "2023-07-26T01:13:33.061Z",
          "equivalentMax": 365
        },
        {
          "date": "2023-07-29T23:58:20.838Z",
          "equivalentMax": 353
        },
        {
          "date": "2023-07-29T23:58:20.838Z",
          "equivalentMax": 353
        },
        {
          "date": "2023-08-02T14:35:31.051Z",
          "equivalentMax": 353
        },
        {
          "date": "2023-08-02T14:35:31.051Z",
          "equivalentMax": 353
        },
        {
          "date": "2023-08-09T01:51:36.620Z",
          "equivalentMax": 353
        },
        {
          "date": "2023-08-09T01:51:36.620Z",
          "equivalentMax": 353
        },
        {
          "date": "2023-09-03T00:19:19.199Z",
          "equivalentMax": 364
        },
        {
          "date": "2023-09-03T00:19:19.199Z",
          "equivalentMax": 364
        },
        {
          "date": "2023-09-06T02:00:37.341Z",
          "equivalentMax": 361
        },
        {
          "date": "2023-09-06T02:00:37.341Z",
          "equivalentMax": 361
        },
        {
          "date": "2023-09-20T02:29:30.053Z",
          "equivalentMax": 361
        },
        {
          "date": "2023-09-20T02:29:30.053Z",
          "equivalentMax": 361
        },
        {
          "date": "2023-10-01T01:01:31.463Z",
          "equivalentMax": 354
        },
        {
          "date": "2023-10-01T01:01:31.463Z",
          "equivalentMax": 354
        },
        {
          "date": "2023-10-04T01:05:57.038Z",
          "equivalentMax": 295
        },
        {
          "date": "2023-10-04T01:05:57.038Z",
          "equivalentMax": 295
        },
        {
          "date": "2023-10-08T00:00:55.393Z",
          "equivalentMax": 354
        },
        {
          "date": "2023-10-08T00:00:55.393Z",
          "equivalentMax": 354
        },
        {
          "date": "2023-10-11T01:49:03.371Z",
          "equivalentMax": 356
        },
        {
          "date": "2023-10-11T01:49:03.371Z",
          "equivalentMax": 356
        },
        {
          "date": "2023-10-14T23:27:27.600Z",
          "equivalentMax": 364
        },
        {
          "date": "2023-10-14T23:27:27.600Z",
          "equivalentMax": 364
        },
        {
          "date": "2023-10-18T13:56:58.888Z",
          "equivalentMax": 353
        },
        {
          "date": "2023-10-18T13:56:58.888Z",
          "equivalentMax": 353
        },
        {
          "date": "2023-10-18T16:40:38.479Z",
          "equivalentMax": 353
        },
        {
          "date": "2023-10-18T16:40:38.479Z",
          "equivalentMax": 353
        },
        {
          "date": "2023-10-18T20:13:52.342Z",
          "equivalentMax": 353
        },
        {
          "date": "2023-10-18T20:13:52.342Z",
          "equivalentMax": 353
        },
        {
          "date": "2023-10-21T19:30:42.525Z",
          "equivalentMax": 364
        },
        {
          "date": "2023-10-21T19:30:42.525Z",
          "equivalentMax": 364
        },
        {
          "date": "2023-10-25T02:05:40.536Z",
          "equivalentMax": 365
        },
        {
          "date": "2023-10-25T02:05:40.536Z",
          "equivalentMax": 365
        },
        {
          "date": "2023-10-29T19:54:42.256Z",
          "equivalentMax": 365
        },
        {
          "date": "2023-10-29T19:54:42.256Z",
          "equivalentMax": 365
        },
        {
          "date": "2023-11-01T02:02:32.450Z",
          "equivalentMax": 364
        },
        {
          "date": "2023-11-01T02:02:32.450Z",
          "equivalentMax": 364
        },
        {
          "date": "2023-11-04T20:06:25.739Z",
          "equivalentMax": 374
        },
        {
          "date": "2023-11-04T20:06:25.739Z",
          "equivalentMax": 374
        },
        {
          "date": "2023-12-07T02:09:23.367Z",
          "equivalentMax": 191
        },
        {
          "date": "2023-12-07T02:09:23.367Z",
          "equivalentMax": 191
        },
        {
          "date": "2023-12-14T13:58:30.242Z",
          "equivalentMax": 191
        },
        {
          "date": "2023-12-14T13:58:30.242Z",
          "equivalentMax": 191
        },
        {
          "date": "2023-12-27T01:51:59.807Z",
          "equivalentMax": 318
        },
        {
          "date": "2023-12-27T01:51:59.807Z",
          "equivalentMax": 318
        },
        {
          "date": "2024-01-03T02:25:07.240Z",
          "equivalentMax": 318
        },
        {
          "date": "2024-01-03T02:25:07.240Z",
          "equivalentMax": 318
        },
        {
          "date": "2024-01-10T02:31:22.877Z",
          "equivalentMax": 318
        },
        {
          "date": "2024-01-10T02:31:22.877Z",
          "equivalentMax": 318
        },
        {
          "date": "2024-01-17T02:19:12.878Z",
          "equivalentMax": 332
        },
        {
          "date": "2024-01-17T02:19:12.878Z",
          "equivalentMax": 332
        },
        {
          "date": "2024-01-31T02:26:57.177Z",
          "equivalentMax": 362
        },
        {
          "date": "2024-01-31T02:26:57.177Z",
          "equivalentMax": 362
        },
        {
          "date": "2024-02-07T02:22:59.647Z",
          "equivalentMax": 369
        }
      ],
      "tonnageInput": [
        [
          "1",
          "1",
          "295"
        ],
        [
          "3",
          "5",
          "190"
        ],
        [
          "0",
          "4",
          "295"
        ],
        [
          "0",
          "0",
          "0"
        ],
        [
          "0",
          "0",
          "0"
        ]
      ],
      "tonnageHistory": [
        {
          "date": "2021-07-09T01:36:24.467Z",
          "overallTonnage": 9520
        },
        {
          "date": "2021-07-17T01:52:41.584Z",
          "overallTonnage": 9520
        },
        {
          "date": "2021-08-20T10:55:39.329Z",
          "overallTonnage": 8400
        },
        {
          "date": "2021-09-03T10:41:53.925Z",
          "overallTonnage": 9600
        },
        {
          "date": "2021-09-10T10:51:32.746Z",
          "overallTonnage": 9920
        },
        {
          "date": "2021-09-17T10:47:28.430Z",
          "overallTonnage": 9920
        },
        {
          "date": "2021-09-24T10:58:17.294Z",
          "overallTonnage": 8400
        },
        {
          "date": "2021-10-09T19:27:11.936Z",
          "overallTonnage": 7200
        },
        {
          "date": "2022-01-01T21:45:58.093Z",
          "overallTonnage": 7600
        },
        {
          "date": "2022-03-02T20:40:04.476Z",
          "overallTonnage": 7960
        },
        {
          "date": "2022-03-09T02:28:05.191Z",
          "overallTonnage": 9500
        },
        {
          "date": "2022-03-26T02:12:56.466Z",
          "overallTonnage": 9920
        },
        {
          "date": "2022-04-14T01:15:33.507Z",
          "overallTonnage": 10540
        },
        {
          "date": "2022-04-23T22:03:49.048Z",
          "overallTonnage": 10720
        },
        {
          "date": "2022-05-13T19:51:44.035Z",
          "overallTonnage": 12600
        },
        {
          "date": "2022-06-11T19:59:13.470Z",
          "overallTonnage": 10810
        },
        {
          "date": "2022-08-12T00:55:09.361Z",
          "overallTonnage": 11240
        },
        {
          "date": "2022-09-09T02:27:02.760Z",
          "overallTonnage": 7690
        },
        {
          "date": "2022-09-12T02:33:10.965Z",
          "overallTonnage": 4640
        },
        {
          "date": "2022-09-14T02:36:21.094Z",
          "overallTonnage": 6585
        },
        {
          "date": "2022-09-14T02:36:21.094Z",
          "overallTonnage": 6585
        },
        {
          "date": "2022-09-14T02:36:21.094Z",
          "overallTonnage": 6585
        },
        {
          "date": "2022-09-14T02:36:21.094Z",
          "overallTonnage": 6585
        },
        {
          "date": "2022-09-19T02:51:57.207Z",
          "overallTonnage": 2595
        },
        {
          "date": "2022-09-19T02:51:57.207Z",
          "overallTonnage": 2595
        },
        {
          "date": "2022-09-19T02:51:57.207Z",
          "overallTonnage": 2595
        },
        {
          "date": "2022-09-20T23:59:07.644Z",
          "overallTonnage": 4960
        },
        {
          "date": "2022-09-20T23:59:07.644Z",
          "overallTonnage": 4960
        },
        {
          "date": "2022-09-20T23:59:07.644Z",
          "overallTonnage": 4960
        },
        {
          "date": "2022-09-26T01:04:34.094Z",
          "overallTonnage": 2745
        },
        {
          "date": "2022-09-26T01:04:34.094Z",
          "overallTonnage": 2745
        },
        {
          "date": "2022-09-26T01:04:34.094Z",
          "overallTonnage": 2745
        },
        {
          "date": "2022-09-29T02:28:12.983Z",
          "overallTonnage": 5690
        },
        {
          "date": "2022-09-29T02:28:12.983Z",
          "overallTonnage": 5690
        },
        {
          "date": "2022-09-29T02:28:12.983Z",
          "overallTonnage": 5690
        },
        {
          "date": "2022-10-06T02:10:16.459Z",
          "overallTonnage": 2855
        },
        {
          "date": "2022-10-06T02:10:16.459Z",
          "overallTonnage": 2855
        },
        {
          "date": "2022-10-06T02:10:16.459Z",
          "overallTonnage": 2855
        },
        {
          "date": "2022-10-13T02:15:58.851Z",
          "overallTonnage": 2780
        },
        {
          "date": "2022-10-13T02:15:58.851Z",
          "overallTonnage": 2780
        },
        {
          "date": "2022-10-13T02:15:58.851Z",
          "overallTonnage": 2780
        },
        {
          "date": "2022-11-03T01:25:29.035Z",
          "overallTonnage": 2780
        },
        {
          "date": "2022-11-03T01:25:29.035Z",
          "overallTonnage": 2780
        },
        {
          "date": "2022-11-03T01:25:29.035Z",
          "overallTonnage": 2780
        },
        {
          "date": "2022-11-06T22:04:36.713Z",
          "overallTonnage": 7235
        },
        {
          "date": "2022-11-06T22:04:36.713Z",
          "overallTonnage": 7235
        },
        {
          "date": "2022-11-06T22:04:36.713Z",
          "overallTonnage": 7235
        },
        {
          "date": "2022-11-11T02:06:43.800Z",
          "overallTonnage": 3275
        },
        {
          "date": "2022-11-11T02:06:43.800Z",
          "overallTonnage": 3275
        },
        {
          "date": "2022-11-11T02:06:43.800Z",
          "overallTonnage": 3275
        },
        {
          "date": "2022-12-02T01:44:59.546Z",
          "overallTonnage": 1345
        },
        {
          "date": "2022-12-02T01:44:59.546Z",
          "overallTonnage": 1345
        },
        {
          "date": "2022-12-02T01:44:59.546Z",
          "overallTonnage": 1345
        },
        {
          "date": "2022-12-26T21:14:22.988Z",
          "overallTonnage": 4125
        },
        {
          "date": "2022-12-26T21:14:22.988Z",
          "overallTonnage": 4125
        },
        {
          "date": "2023-02-15T02:30:16.589Z",
          "overallTonnage": 4550
        },
        {
          "date": "2023-02-15T02:30:16.589Z",
          "overallTonnage": 4550
        },
        {
          "date": "2023-03-01T04:41:47.492Z",
          "overallTonnage": 4500
        },
        {
          "date": "2023-03-01T04:41:47.492Z",
          "overallTonnage": 4500
        },
        {
          "date": "2023-03-05T01:39:51.308Z",
          "overallTonnage": 2615
        },
        {
          "date": "2023-03-05T01:39:51.308Z",
          "overallTonnage": 2615
        },
        {
          "date": "2023-05-29T00:29:55.467Z",
          "overallTonnage": 2620
        },
        {
          "date": "2023-05-29T00:29:55.467Z",
          "overallTonnage": 2620
        },
        {
          "date": "2023-06-05T01:54:46.849Z",
          "overallTonnage": 2625
        },
        {
          "date": "2023-06-05T01:54:46.849Z",
          "overallTonnage": 2625
        },
        {
          "date": "2023-06-07T04:07:12.261Z",
          "overallTonnage": 5300
        },
        {
          "date": "2023-06-07T04:07:12.261Z",
          "overallTonnage": 5300
        },
        {
          "date": "2023-06-11T03:17:29.585Z",
          "overallTonnage": 2855
        },
        {
          "date": "2023-06-11T03:17:29.585Z",
          "overallTonnage": 2855
        },
        {
          "date": "2023-07-23T00:18:29.553Z",
          "overallTonnage": 2815
        },
        {
          "date": "2023-07-23T00:18:29.553Z",
          "overallTonnage": 2815
        },
        {
          "date": "2023-07-26T01:13:33.061Z",
          "overallTonnage": 5030
        },
        {
          "date": "2023-07-26T01:13:33.061Z",
          "overallTonnage": 5030
        },
        {
          "date": "2023-07-29T23:58:20.838Z",
          "overallTonnage": 2970
        },
        {
          "date": "2023-07-29T23:58:20.838Z",
          "overallTonnage": 2970
        },
        {
          "date": "2023-08-02T14:35:31.051Z",
          "overallTonnage": 7505
        },
        {
          "date": "2023-08-02T14:35:31.051Z",
          "overallTonnage": 7505
        },
        {
          "date": "2023-08-09T01:51:36.620Z",
          "overallTonnage": 3065
        },
        {
          "date": "2023-08-09T01:51:36.620Z",
          "overallTonnage": 3065
        },
        {
          "date": "2023-09-03T00:19:19.199Z",
          "overallTonnage": 3045
        },
        {
          "date": "2023-09-03T00:19:19.199Z",
          "overallTonnage": 3045
        },
        {
          "date": "2023-09-06T02:00:37.341Z",
          "overallTonnage": 4715
        },
        {
          "date": "2023-09-06T02:00:37.341Z",
          "overallTonnage": 4715
        },
        {
          "date": "2023-09-20T02:29:30.053Z",
          "overallTonnage": 4715
        },
        {
          "date": "2023-09-20T02:29:30.053Z",
          "overallTonnage": 4715
        },
        {
          "date": "2023-10-01T01:01:31.463Z",
          "overallTonnage": 2805
        },
        {
          "date": "2023-10-01T01:01:31.463Z",
          "overallTonnage": 2805
        },
        {
          "date": "2023-10-04T01:05:57.038Z",
          "overallTonnage": 4500
        },
        {
          "date": "2023-10-04T01:05:57.038Z",
          "overallTonnage": 4500
        },
        {
          "date": "2023-10-08T00:00:55.393Z",
          "overallTonnage": 2815
        },
        {
          "date": "2023-10-08T00:00:55.393Z",
          "overallTonnage": 2815
        },
        {
          "date": "2023-10-11T01:49:03.371Z",
          "overallTonnage": 5090
        },
        {
          "date": "2023-10-11T01:49:03.371Z",
          "overallTonnage": 5090
        },
        {
          "date": "2023-10-14T23:27:27.600Z",
          "overallTonnage": 3070
        },
        {
          "date": "2023-10-14T23:27:27.600Z",
          "overallTonnage": 3070
        },
        {
          "date": "2023-10-18T13:56:58.888Z",
          "overallTonnage": 7505
        },
        {
          "date": "2023-10-18T13:56:58.888Z",
          "overallTonnage": 7505
        },
        {
          "date": "2023-10-18T16:40:38.479Z",
          "overallTonnage": 7505
        },
        {
          "date": "2023-10-18T16:40:38.479Z",
          "overallTonnage": 7505
        },
        {
          "date": "2023-10-18T20:13:52.342Z",
          "overallTonnage": 7505
        },
        {
          "date": "2023-10-18T20:13:52.342Z",
          "overallTonnage": 7505
        },
        {
          "date": "2023-10-21T19:30:42.525Z",
          "overallTonnage": 3385
        },
        {
          "date": "2023-10-21T19:30:42.525Z",
          "overallTonnage": 3385
        },
        {
          "date": "2023-10-25T02:05:40.536Z",
          "overallTonnage": 4605
        },
        {
          "date": "2023-10-25T02:05:40.536Z",
          "overallTonnage": 4605
        },
        {
          "date": "2023-10-29T19:54:42.256Z",
          "overallTonnage": 3240
        },
        {
          "date": "2023-10-29T19:54:42.256Z",
          "overallTonnage": 3240
        },
        {
          "date": "2023-11-01T02:02:32.450Z",
          "overallTonnage": 3660
        },
        {
          "date": "2023-11-01T02:02:32.450Z",
          "overallTonnage": 3660
        },
        {
          "date": "2023-11-04T20:06:25.739Z",
          "overallTonnage": 1605
        },
        {
          "date": "2023-11-04T20:06:25.739Z",
          "overallTonnage": 1605
        },
        {
          "date": "2023-12-07T02:09:23.367Z",
          "overallTonnage": 3240
        },
        {
          "date": "2023-12-07T02:09:23.367Z",
          "overallTonnage": 3240
        },
        {
          "date": "2023-12-14T13:58:30.242Z",
          "overallTonnage": 3240
        },
        {
          "date": "2023-12-14T13:58:30.242Z",
          "overallTonnage": 3240
        },
        {
          "date": "2023-12-27T01:51:59.807Z",
          "overallTonnage": 5400
        },
        {
          "date": "2023-12-27T01:51:59.807Z",
          "overallTonnage": 5400
        },
        {
          "date": "2024-01-03T02:25:07.240Z",
          "overallTonnage": 5400
        },
        {
          "date": "2024-01-03T02:25:07.240Z",
          "overallTonnage": 5400
        },
        {
          "date": "2024-01-10T02:31:22.877Z",
          "overallTonnage": 5400
        },
        {
          "date": "2024-01-10T02:31:22.877Z",
          "overallTonnage": 5400
        },
        {
          "date": "2024-01-17T02:19:12.878Z",
          "overallTonnage": 5640
        },
        {
          "date": "2024-01-17T02:19:12.878Z",
          "overallTonnage": 5640
        },
        {
          "date": "2024-01-31T02:26:57.177Z",
          "overallTonnage": 6120
        },
        {
          "date": "2024-01-31T02:26:57.177Z",
          "overallTonnage": 6120
        },
        {
          "date": "2024-02-07T02:22:59.647Z",
          "overallTonnage": 6240
        }
      ]
    },
    "BulgarianSplitSquats": {
      "maxHistory": [
        {
          "date": "2021-07-09T01:36:24.467Z",
          "equivalentMax": 532
        },
        {
          "date": "2021-07-17T01:52:41.584Z",
          "equivalentMax": 532
        },
        {
          "date": "2021-08-20T10:55:39.329Z",
          "equivalentMax": 507
        },
        {
          "date": "2021-09-03T10:41:53.925Z",
          "equivalentMax": 532
        },
        {
          "date": "2021-09-10T10:51:32.746Z",
          "equivalentMax": 557
        },
        {
          "date": "2021-09-17T10:47:28.430Z",
          "equivalentMax": 557
        },
        {
          "date": "2021-09-24T10:58:17.294Z",
          "equivalentMax": 488
        },
        {
          "date": "2021-10-09T19:27:11.936Z",
          "equivalentMax": 480
        },
        {
          "date": "2022-01-01T21:45:58.093Z",
          "equivalentMax": 480
        },
        {
          "date": "2022-03-02T20:40:04.476Z",
          "equivalentMax": 528
        },
        {
          "date": "2022-03-09T02:28:05.191Z",
          "equivalentMax": 532
        },
        {
          "date": "2022-03-26T02:12:56.466Z",
          "equivalentMax": 557
        },
        {
          "date": "2022-04-14T01:15:33.507Z",
          "equivalentMax": 557
        },
        {
          "date": "2022-04-23T22:03:49.048Z",
          "equivalentMax": 587
        },
        {
          "date": "2022-05-13T19:51:44.035Z",
          "equivalentMax": 601
        },
        {
          "date": "2022-06-11T19:59:13.470Z",
          "equivalentMax": 578
        },
        {
          "date": "2022-08-12T00:55:09.361Z",
          "equivalentMax": 557
        },
        {
          "date": "2022-09-09T02:27:02.760Z",
          "equivalentMax": 525
        }
      ],
      "tonnageInput": [
        [
          "1",
          "2",
          "255"
        ],
        [
          "3",
          "5",
          "235"
        ],
        [
          "0",
          "4",
          "295"
        ],
        [
          "0",
          "0",
          "0"
        ],
        [
          "0",
          "0",
          "0"
        ]
      ],
      "tonnageHistory": [
        {
          "date": "2021-07-09T01:36:24.467Z",
          "overallTonnage": 9520
        },
        {
          "date": "2021-07-17T01:52:41.584Z",
          "overallTonnage": 9520
        },
        {
          "date": "2021-08-20T10:55:39.329Z",
          "overallTonnage": 8400
        },
        {
          "date": "2021-09-03T10:41:53.925Z",
          "overallTonnage": 9600
        },
        {
          "date": "2021-09-10T10:51:32.746Z",
          "overallTonnage": 9920
        },
        {
          "date": "2021-09-17T10:47:28.430Z",
          "overallTonnage": 9920
        },
        {
          "date": "2021-09-24T10:58:17.294Z",
          "overallTonnage": 8400
        },
        {
          "date": "2021-10-09T19:27:11.936Z",
          "overallTonnage": 7200
        },
        {
          "date": "2022-01-01T21:45:58.093Z",
          "overallTonnage": 7600
        },
        {
          "date": "2022-03-02T20:40:04.476Z",
          "overallTonnage": 7960
        },
        {
          "date": "2022-03-09T02:28:05.191Z",
          "overallTonnage": 9500
        },
        {
          "date": "2022-03-26T02:12:56.466Z",
          "overallTonnage": 9920
        },
        {
          "date": "2022-04-14T01:15:33.507Z",
          "overallTonnage": 10540
        },
        {
          "date": "2022-04-23T22:03:49.048Z",
          "overallTonnage": 10720
        },
        {
          "date": "2022-05-13T19:51:44.035Z",
          "overallTonnage": 12600
        },
        {
          "date": "2022-06-11T19:59:13.470Z",
          "overallTonnage": 10810
        },
        {
          "date": "2022-08-12T00:55:09.361Z",
          "overallTonnage": 11240
        },
        {
          "date": "2022-09-09T02:27:02.760Z",
          "overallTonnage": 7690
        }
      ]
    },
    "BoxJumps": {
      "maxHistory": [
        {
          "date": "2021-07-09T18:31:29.299Z",
          "equivalentMax": 35
        },
        {
          "date": "2021-07-09T18:31:29.299Z",
          "equivalentMax": 35
        },
        {
          "date": "2021-07-09T18:31:29.299Z",
          "equivalentMax": 35
        },
        {
          "date": "2021-07-09T18:31:29.299Z",
          "equivalentMax": 35
        },
        {
          "date": "2021-07-09T18:31:29.299Z",
          "equivalentMax": 35
        },
        {
          "date": "2021-07-09T18:31:29.299Z",
          "equivalentMax": 35
        },
        {
          "date": "2021-07-14T01:37:20.188Z",
          "equivalentMax": 35
        },
        {
          "date": "2021-07-14T01:37:20.188Z",
          "equivalentMax": 35
        },
        {
          "date": "2021-07-14T01:37:20.188Z",
          "equivalentMax": 35
        },
        {
          "date": "2021-07-14T01:37:20.188Z",
          "equivalentMax": 35
        },
        {
          "date": "2021-07-14T01:37:20.188Z",
          "equivalentMax": 35
        },
        {
          "date": "2021-07-14T01:37:20.188Z",
          "equivalentMax": 35
        },
        {
          "date": "2021-08-18T12:15:26.695Z",
          "equivalentMax": 34
        },
        {
          "date": "2021-08-18T12:15:26.695Z",
          "equivalentMax": 34
        },
        {
          "date": "2021-08-18T12:15:26.695Z",
          "equivalentMax": 34
        },
        {
          "date": "2021-08-18T12:15:26.695Z",
          "equivalentMax": 34
        },
        {
          "date": "2021-08-18T12:15:26.695Z",
          "equivalentMax": 34
        },
        {
          "date": "2021-08-18T12:15:26.695Z",
          "equivalentMax": 34
        },
        {
          "date": "2021-12-18T17:58:32.833Z",
          "equivalentMax": 34
        },
        {
          "date": "2021-12-18T17:58:32.833Z",
          "equivalentMax": 34
        },
        {
          "date": "2021-12-18T17:58:32.833Z",
          "equivalentMax": 34
        },
        {
          "date": "2021-12-18T17:58:32.833Z",
          "equivalentMax": 34
        },
        {
          "date": "2021-12-18T17:58:32.833Z",
          "equivalentMax": 34
        },
        {
          "date": "2021-12-18T17:58:32.833Z",
          "equivalentMax": 34
        },
        {
          "date": "2022-12-09T01:37:33.691Z",
          "equivalentMax": 33
        },
        {
          "date": "2022-12-09T01:37:33.691Z",
          "equivalentMax": 33
        },
        {
          "date": "2022-12-21T01:19:19.643Z",
          "equivalentMax": 36
        },
        {
          "date": "2022-12-21T01:19:19.643Z",
          "equivalentMax": 36
        },
        {
          "date": "2023-02-25T16:36:05.879Z",
          "equivalentMax": 40
        },
        {
          "date": "2023-02-25T16:36:05.879Z",
          "equivalentMax": 40
        },
        {
          "date": "2023-12-07T02:41:24.562Z",
          "equivalentMax": 18
        },
        {
          "date": "2023-12-07T02:41:24.562Z",
          "equivalentMax": 18
        },
        {
          "date": "2023-12-14T14:22:16.829Z",
          "equivalentMax": 28
        },
        {
          "date": "2023-12-14T14:22:16.829Z",
          "equivalentMax": 28
        },
        {
          "date": "2024-01-03T02:53:12.182Z",
          "equivalentMax": 18
        },
        {
          "date": "2024-01-03T02:53:12.182Z",
          "equivalentMax": 18
        }
      ],
      "tonnageInput": [
        [
          "3",
          "6",
          "28"
        ],
        [
          "0",
          "0",
          "0"
        ],
        [
          "0",
          "0",
          "0"
        ],
        [
          "0",
          "0",
          "0"
        ],
        [
          "0",
          "0",
          "0"
        ]
      ],
      "tonnageHistory": [
        {
          "date": "2021-07-09T18:31:29.299Z",
          "overallTonnage": 672
        },
        {
          "date": "2021-07-09T18:31:29.299Z",
          "overallTonnage": 672
        },
        {
          "date": "2021-07-09T18:31:29.299Z",
          "overallTonnage": 672
        },
        {
          "date": "2021-07-09T18:31:29.299Z",
          "overallTonnage": 672
        },
        {
          "date": "2021-07-09T18:31:29.299Z",
          "overallTonnage": 672
        },
        {
          "date": "2021-07-09T18:31:29.299Z",
          "overallTonnage": 672
        },
        {
          "date": "2021-07-14T01:37:20.188Z",
          "overallTonnage": 672
        },
        {
          "date": "2021-07-14T01:37:20.188Z",
          "overallTonnage": 672
        },
        {
          "date": "2021-07-14T01:37:20.188Z",
          "overallTonnage": 672
        },
        {
          "date": "2021-07-14T01:37:20.188Z",
          "overallTonnage": 672
        },
        {
          "date": "2021-07-14T01:37:20.188Z",
          "overallTonnage": 672
        },
        {
          "date": "2021-07-14T01:37:20.188Z",
          "overallTonnage": 672
        },
        {
          "date": "2021-08-18T12:15:26.695Z",
          "overallTonnage": 504
        },
        {
          "date": "2021-08-18T12:15:26.695Z",
          "overallTonnage": 504
        },
        {
          "date": "2021-08-18T12:15:26.695Z",
          "overallTonnage": 504
        },
        {
          "date": "2021-08-18T12:15:26.695Z",
          "overallTonnage": 504
        },
        {
          "date": "2021-08-18T12:15:26.695Z",
          "overallTonnage": 504
        },
        {
          "date": "2021-08-18T12:15:26.695Z",
          "overallTonnage": 504
        },
        {
          "date": "2021-12-18T17:58:32.833Z",
          "overallTonnage": 504
        },
        {
          "date": "2021-12-18T17:58:32.833Z",
          "overallTonnage": 504
        },
        {
          "date": "2021-12-18T17:58:32.833Z",
          "overallTonnage": 504
        },
        {
          "date": "2021-12-18T17:58:32.833Z",
          "overallTonnage": 504
        },
        {
          "date": "2021-12-18T17:58:32.833Z",
          "overallTonnage": 504
        },
        {
          "date": "2021-12-18T17:58:32.833Z",
          "overallTonnage": 504
        },
        {
          "date": "2022-12-09T01:37:33.691Z",
          "overallTonnage": 456
        },
        {
          "date": "2022-12-09T01:37:33.691Z",
          "overallTonnage": 456
        },
        {
          "date": "2022-12-21T01:19:19.643Z",
          "overallTonnage": 504
        },
        {
          "date": "2022-12-21T01:19:19.643Z",
          "overallTonnage": 504
        },
        {
          "date": "2023-02-25T16:36:05.879Z",
          "overallTonnage": 672
        },
        {
          "date": "2023-02-25T16:36:05.879Z",
          "overallTonnage": 672
        },
        {
          "date": "2023-12-07T02:41:24.562Z",
          "overallTonnage": 540
        },
        {
          "date": "2023-12-07T02:41:24.562Z",
          "overallTonnage": 540
        },
        {
          "date": "2023-12-14T14:22:16.829Z",
          "overallTonnage": 540
        },
        {
          "date": "2023-12-14T14:22:16.829Z",
          "overallTonnage": 540
        },
        {
          "date": "2024-01-03T02:53:12.182Z",
          "overallTonnage": 540
        },
        {
          "date": "2024-01-03T02:53:12.182Z",
          "overallTonnage": 540
        }
      ]
    },
    "GobletLunges": {
      "maxHistory": [
        {
          "date": "2022-02-12T18:00:55.573Z",
          "equivalentMax": 44
        },
        {
          "date": "2022-02-12T18:00:55.573Z",
          "equivalentMax": 44
        },
        {
          "date": "2022-02-12T18:00:55.573Z",
          "equivalentMax": 44
        },
        {
          "date": "2022-02-12T18:00:55.573Z",
          "equivalentMax": 44
        },
        {
          "date": "2022-04-01T23:48:07.283Z",
          "equivalentMax": 49
        },
        {
          "date": "2022-04-01T23:48:07.283Z",
          "equivalentMax": 49
        },
        {
          "date": "2022-04-01T23:48:07.283Z",
          "equivalentMax": 49
        },
        {
          "date": "2022-04-01T23:48:07.283Z",
          "equivalentMax": 49
        },
        {
          "date": "2022-05-19T01:09:32.999Z",
          "equivalentMax": 49
        },
        {
          "date": "2022-05-19T01:09:32.999Z",
          "equivalentMax": 49
        },
        {
          "date": "2022-05-19T01:09:32.999Z",
          "equivalentMax": 49
        },
        {
          "date": "2022-05-19T01:09:32.999Z",
          "equivalentMax": 49
        },
        {
          "date": "2023-12-07T01:54:59.264Z",
          "equivalentMax": 15
        },
        {
          "date": "2023-12-07T01:54:59.264Z",
          "equivalentMax": 15
        },
        {
          "date": "2023-12-14T13:47:47.220Z",
          "equivalentMax": 15
        },
        {
          "date": "2023-12-14T13:47:47.220Z",
          "equivalentMax": 15
        },
        {
          "date": "2023-12-27T01:40:43.000Z",
          "equivalentMax": 15
        },
        {
          "date": "2023-12-27T01:40:43.000Z",
          "equivalentMax": 15
        },
        {
          "date": "2024-01-03T02:06:02.337Z",
          "equivalentMax": 15
        },
        {
          "date": "2024-01-03T02:06:02.337Z",
          "equivalentMax": 15
        },
        {
          "date": "2024-01-25T02:16:43.759Z",
          "equivalentMax": 15
        },
        {
          "date": "2024-01-25T02:16:43.759Z",
          "equivalentMax": 15
        },
        {
          "date": "2024-01-31T02:12:13.975Z",
          "equivalentMax": 18
        },
        {
          "date": "2024-01-31T02:12:13.975Z",
          "equivalentMax": 18
        },
        {
          "date": "2024-02-07T02:16:07.921Z",
          "equivalentMax": 18
        }
      ],
      "tonnageInput": [
        [
          "1",
          "12",
          "35"
        ],
        [
          "2",
          "12",
          "35"
        ],
        [
          "0",
          "0",
          "0"
        ],
        [
          "0",
          "0",
          "0"
        ],
        [
          "0",
          "0",
          "0"
        ]
      ],
      "tonnageHistory": [
        {
          "date": "2022-02-12T18:00:55.573Z",
          "overallTonnage": 840
        },
        {
          "date": "2022-02-12T18:00:55.573Z",
          "overallTonnage": 840
        },
        {
          "date": "2022-02-12T18:00:55.573Z",
          "overallTonnage": 840
        },
        {
          "date": "2022-02-12T18:00:55.573Z",
          "overallTonnage": 840
        },
        {
          "date": "2022-04-01T23:48:07.283Z",
          "overallTonnage": 1260
        },
        {
          "date": "2022-04-01T23:48:07.283Z",
          "overallTonnage": 1260
        },
        {
          "date": "2022-04-01T23:48:07.283Z",
          "overallTonnage": 1260
        },
        {
          "date": "2022-04-01T23:48:07.283Z",
          "overallTonnage": 1260
        },
        {
          "date": "2022-05-19T01:09:32.999Z",
          "overallTonnage": 1260
        },
        {
          "date": "2022-05-19T01:09:32.999Z",
          "overallTonnage": 1260
        },
        {
          "date": "2022-05-19T01:09:32.999Z",
          "overallTonnage": 1260
        },
        {
          "date": "2022-05-19T01:09:32.999Z",
          "overallTonnage": 1260
        },
        {
          "date": "2023-12-07T01:54:59.264Z",
          "overallTonnage": 480
        },
        {
          "date": "2023-12-07T01:54:59.264Z",
          "overallTonnage": 480
        },
        {
          "date": "2023-12-14T13:47:47.220Z",
          "overallTonnage": 480
        },
        {
          "date": "2023-12-14T13:47:47.220Z",
          "overallTonnage": 480
        },
        {
          "date": "2023-12-27T01:40:43.000Z",
          "overallTonnage": 480
        },
        {
          "date": "2023-12-27T01:40:43.000Z",
          "overallTonnage": 480
        },
        {
          "date": "2024-01-03T02:06:02.337Z",
          "overallTonnage": 480
        },
        {
          "date": "2024-01-03T02:06:02.337Z",
          "overallTonnage": 480
        },
        {
          "date": "2024-01-25T02:16:43.759Z",
          "overallTonnage": 480
        },
        {
          "date": "2024-01-25T02:16:43.759Z",
          "overallTonnage": 480
        },
        {
          "date": "2024-01-31T02:12:13.975Z",
          "overallTonnage": 480
        },
        {
          "date": "2024-01-31T02:12:13.975Z",
          "overallTonnage": 480
        },
        {
          "date": "2024-02-07T02:16:07.921Z",
          "overallTonnage": 480
        }
      ]
    },
    "SuperBurpee": {
      "maxHistory": [
        {
          "date": "2022-02-05T16:26:39.176Z",
          "equivalentMax": 158
        },
        {
          "date": "2022-02-05T16:26:39.176Z",
          "equivalentMax": 158
        },
        {
          "date": "2022-02-05T16:26:39.176Z",
          "equivalentMax": 158
        },
        {
          "date": "2022-02-05T16:26:39.176Z",
          "equivalentMax": 158
        },
        {
          "date": "2022-02-07T03:05:00.920Z",
          "equivalentMax": 158
        },
        {
          "date": "2022-02-07T03:05:00.920Z",
          "equivalentMax": 158
        },
        {
          "date": "2022-03-23T18:20:12.026Z",
          "equivalentMax": 158
        },
        {
          "date": "2022-03-23T18:20:12.026Z",
          "equivalentMax": 158
        },
        {
          "date": "2022-03-30T01:22:52.349Z",
          "equivalentMax": 158
        },
        {
          "date": "2022-03-30T01:22:52.349Z",
          "equivalentMax": 158
        },
        {
          "date": "2022-04-08T02:48:33.874Z",
          "equivalentMax": 158
        },
        {
          "date": "2022-04-08T02:48:33.874Z",
          "equivalentMax": 158
        },
        {
          "date": "2022-04-22T21:48:04.358Z",
          "equivalentMax": 181
        },
        {
          "date": "2022-04-22T21:48:04.358Z",
          "equivalentMax": 181
        }
      ],
      "tonnageInput": [
        [
          "1",
          "5",
          "135"
        ],
        [
          "2",
          "5",
          "155"
        ],
        [
          "0",
          "0",
          "0"
        ],
        [
          "0",
          "0",
          "0"
        ],
        [
          "0",
          "0",
          "0"
        ]
      ],
      "tonnageHistory": [
        {
          "date": "2022-02-05T16:26:39.176Z",
          "overallTonnage": 3375
        },
        {
          "date": "2022-02-05T16:26:39.176Z",
          "overallTonnage": 3375
        },
        {
          "date": "2022-02-05T16:26:39.176Z",
          "overallTonnage": 3375
        },
        {
          "date": "2022-02-05T16:26:39.176Z",
          "overallTonnage": 3375
        },
        {
          "date": "2022-02-07T03:05:00.920Z",
          "overallTonnage": 3375
        },
        {
          "date": "2022-02-07T03:05:00.920Z",
          "overallTonnage": 3375
        },
        {
          "date": "2022-03-23T18:20:12.026Z",
          "overallTonnage": 3375
        },
        {
          "date": "2022-03-23T18:20:12.026Z",
          "overallTonnage": 3375
        },
        {
          "date": "2022-03-30T01:22:52.349Z",
          "overallTonnage": 3375
        },
        {
          "date": "2022-03-30T01:22:52.349Z",
          "overallTonnage": 3375
        },
        {
          "date": "2022-04-08T02:48:33.874Z",
          "overallTonnage": 3375
        },
        {
          "date": "2022-04-08T02:48:33.874Z",
          "overallTonnage": 3375
        },
        {
          "date": "2022-04-22T21:48:04.358Z",
          "overallTonnage": 2225
        },
        {
          "date": "2022-04-22T21:48:04.358Z",
          "overallTonnage": 2225
        }
      ]
    },
    "Planks": {
      "maxHistory": [
        {
          "date": "2022-02-05T16:51:57.156Z",
          "equivalentMax": 253
        },
        {
          "date": "2022-02-05T16:51:57.156Z",
          "equivalentMax": 253
        },
        {
          "date": "2022-02-07T03:06:34.208Z",
          "equivalentMax": 690
        },
        {
          "date": "2022-02-07T03:06:34.208Z",
          "equivalentMax": 690
        },
        {
          "date": "2022-02-12T18:01:22.554Z",
          "equivalentMax": 690
        },
        {
          "date": "2022-02-12T18:01:22.554Z",
          "equivalentMax": 690
        },
        {
          "date": "2022-04-09T17:24:38.782Z",
          "equivalentMax": 690
        },
        {
          "date": "2022-04-09T17:24:38.782Z",
          "equivalentMax": 690
        },
        {
          "date": "2022-04-14T02:41:04.390Z",
          "equivalentMax": 690
        },
        {
          "date": "2022-04-14T02:41:04.390Z",
          "equivalentMax": 690
        },
        {
          "date": "2022-08-23T02:22:31.159Z",
          "equivalentMax": 690
        },
        {
          "date": "2022-08-23T02:22:31.159Z",
          "equivalentMax": 690
        }
      ],
      "tonnageInput": [
        [
          "1",
          "60",
          "0"
        ],
        [
          "1",
          "60",
          "0"
        ],
        [
          "1",
          "60",
          "0"
        ],
        [
          "0",
          "0",
          "0"
        ],
        [
          "0",
          "0",
          "0"
        ]
      ],
      "tonnageHistory": [
        {
          "date": "2022-02-05T16:51:57.156Z",
          "overallTonnage": 2070
        },
        {
          "date": "2022-02-05T16:51:57.156Z",
          "overallTonnage": 2070
        },
        {
          "date": "2022-02-07T03:06:34.208Z",
          "overallTonnage": 27600
        },
        {
          "date": "2022-02-07T03:06:34.208Z",
          "overallTonnage": 27600
        },
        {
          "date": "2022-02-12T18:01:22.554Z",
          "overallTonnage": 41400
        },
        {
          "date": "2022-02-12T18:01:22.554Z",
          "overallTonnage": 41400
        },
        {
          "date": "2022-04-09T17:24:38.782Z",
          "overallTonnage": 41400
        },
        {
          "date": "2022-04-09T17:24:38.782Z",
          "overallTonnage": 41400
        },
        {
          "date": "2022-04-14T02:41:04.390Z",
          "overallTonnage": 41400
        },
        {
          "date": "2022-04-14T02:41:04.390Z",
          "overallTonnage": 41400
        },
        {
          "date": "2022-08-23T02:22:31.159Z",
          "overallTonnage": 41400
        },
        {
          "date": "2022-08-23T02:22:31.159Z",
          "overallTonnage": 41400
        }
      ]
    },
    "AbWheel": {
      "maxHistory": [
        {
          "date": "2022-08-31T13:15:30.308Z",
          "equivalentMax": 210
        },
        {
          "date": "2022-08-31T13:15:30.308Z",
          "equivalentMax": 210
        }
      ],
      "tonnageInput": [
        [
          "1",
          "15",
          "100"
        ],
        [
          "3",
          "12",
          "150"
        ],
        [
          "0",
          "0",
          "0"
        ],
        [
          "0",
          "0",
          "0"
        ],
        [
          "0",
          "0",
          "0"
        ]
      ],
      "tonnageHistory": [
        {
          "date": "2022-08-31T13:15:30.308Z",
          "overallTonnage": 6900
        },
        {
          "date": "2022-08-31T13:15:30.308Z",
          "overallTonnage": 6900
        }
      ]
    },
    "WarmUpCardio": {
      "maxHistory": [],
      "tonnageHistory": []
    },
    "ShoulderComplexWarmUp": {
      "rpeInput": [
        [
          1,
          10,
          "0"
        ],
        [
          1,
          10,
          "0"
        ]
      ],
      "maxHistory": [
        {
          "date": "2023-12-04T04:06:11.560Z",
          "equivalentMax": 23
        },
        {
          "date": "2023-12-04T04:06:11.560Z",
          "equivalentMax": 23
        },
        {
          "date": "2023-12-05T04:11:30.291Z",
          "equivalentMax": 23
        },
        {
          "date": "2023-12-05T04:11:30.291Z",
          "equivalentMax": 23
        },
        {
          "date": "2023-12-08T01:31:52.505Z",
          "equivalentMax": 23
        },
        {
          "date": "2023-12-08T01:31:52.505Z",
          "equivalentMax": 23
        },
        {
          "date": "2023-12-13T13:32:49.123Z",
          "equivalentMax": 23
        },
        {
          "date": "2023-12-13T13:32:49.123Z",
          "equivalentMax": 23
        },
        {
          "date": "2023-12-16T02:34:12.441Z",
          "equivalentMax": 23
        },
        {
          "date": "2023-12-16T02:34:12.441Z",
          "equivalentMax": 23
        },
        {
          "date": "2023-12-19T03:16:20.790Z",
          "equivalentMax": 23
        },
        {
          "date": "2023-12-19T03:16:20.790Z",
          "equivalentMax": 23
        },
        {
          "date": "2023-12-26T02:12:27.030Z",
          "equivalentMax": 23
        },
        {
          "date": "2023-12-26T02:12:27.030Z",
          "equivalentMax": 23
        },
        {
          "date": "2023-12-29T02:10:29.510Z",
          "equivalentMax": 23
        },
        {
          "date": "2023-12-29T02:10:29.510Z",
          "equivalentMax": 23
        },
        {
          "date": "2024-01-02T00:36:27.163Z",
          "equivalentMax": 21
        },
        {
          "date": "2024-01-02T00:36:27.163Z",
          "equivalentMax": 21
        },
        {
          "date": "2024-01-05T02:58:14.307Z",
          "equivalentMax": 23
        },
        {
          "date": "2024-01-05T02:58:14.307Z",
          "equivalentMax": 23
        },
        {
          "date": "2024-02-06T02:03:27.667Z",
          "equivalentMax": 20
        }
      ],
      "tonnageInput": [
        [
          3,
          10,
          4,
          "12"
        ],
        [
          0,
          0,
          3,
          "0"
        ],
        [
          0,
          0,
          3,
          "0"
        ],
        [
          0,
          0,
          3,
          "0"
        ]
      ],
      "tonnageHistory": [
        {
          "date": "2023-12-04T04:06:11.560Z",
          "overallTonnage": 432
        },
        {
          "date": "2023-12-04T04:06:11.560Z",
          "overallTonnage": 432
        },
        {
          "date": "2023-12-05T04:11:30.291Z",
          "overallTonnage": 432
        },
        {
          "date": "2023-12-05T04:11:30.291Z",
          "overallTonnage": 432
        },
        {
          "date": "2023-12-08T01:31:52.505Z",
          "overallTonnage": 432
        },
        {
          "date": "2023-12-08T01:31:52.505Z",
          "overallTonnage": 432
        },
        {
          "date": "2023-12-13T13:32:49.123Z",
          "overallTonnage": 432
        },
        {
          "date": "2023-12-13T13:32:49.123Z",
          "overallTonnage": 432
        },
        {
          "date": "2023-12-16T02:34:12.441Z",
          "overallTonnage": 432
        },
        {
          "date": "2023-12-16T02:34:12.441Z",
          "overallTonnage": 432
        },
        {
          "date": "2023-12-19T03:16:20.790Z",
          "overallTonnage": 432
        },
        {
          "date": "2023-12-19T03:16:20.790Z",
          "overallTonnage": 432
        },
        {
          "date": "2023-12-26T02:12:27.030Z",
          "overallTonnage": 432
        },
        {
          "date": "2023-12-26T02:12:27.030Z",
          "overallTonnage": 432
        },
        {
          "date": "2023-12-29T02:10:29.510Z",
          "overallTonnage": 432
        },
        {
          "date": "2023-12-29T02:10:29.510Z",
          "overallTonnage": 432
        },
        {
          "date": "2024-01-02T00:36:27.163Z",
          "overallTonnage": 360
        },
        {
          "date": "2024-01-02T00:36:27.163Z",
          "overallTonnage": 360
        },
        {
          "date": "2024-01-05T02:58:14.307Z",
          "overallTonnage": 432
        },
        {
          "date": "2024-01-05T02:58:14.307Z",
          "overallTonnage": 432
        },
        {
          "date": "2024-02-06T02:03:27.667Z",
          "overallTonnage": 240
        }
      ]
    },
    "DumbbellBenchPress": {
      "rpeInput": [
        [
          12,
          7,
          "170"
        ],
        [
          8,
          7,
          "0"
        ]
      ],
      "maxHistory": [
        {
          "date": "2022-08-04T02:44:03.835Z",
          "equivalentMax": 200
        },
        {
          "date": "2022-08-04T02:44:03.835Z",
          "equivalentMax": 200
        },
        {
          "date": "2022-08-24T02:20:02.680Z",
          "equivalentMax": 200
        },
        {
          "date": "2022-08-24T02:20:02.680Z",
          "equivalentMax": 200
        },
        {
          "date": "2022-09-08T02:05:17.103Z",
          "equivalentMax": 190
        },
        {
          "date": "2022-09-08T02:05:17.103Z",
          "equivalentMax": 190
        },
        {
          "date": "2022-09-11T05:00:45.708Z",
          "equivalentMax": 133
        },
        {
          "date": "2022-09-11T05:00:45.708Z",
          "equivalentMax": 133
        },
        {
          "date": "2022-09-13T02:46:22.536Z",
          "equivalentMax": 127
        },
        {
          "date": "2022-09-13T02:46:22.536Z",
          "equivalentMax": 127
        },
        {
          "date": "2022-09-17T19:29:53.902Z",
          "equivalentMax": 230
        },
        {
          "date": "2022-09-17T19:29:53.902Z",
          "equivalentMax": 230
        },
        {
          "date": "2022-09-22T23:27:05.488Z",
          "equivalentMax": 214
        },
        {
          "date": "2022-09-22T23:27:05.488Z",
          "equivalentMax": 214
        },
        {
          "date": "2022-09-27T02:52:11.203Z",
          "equivalentMax": 203
        },
        {
          "date": "2022-09-27T02:52:11.203Z",
          "equivalentMax": 203
        },
        {
          "date": "2022-10-08T03:09:08.062Z",
          "equivalentMax": 203
        },
        {
          "date": "2022-10-08T03:09:08.062Z",
          "equivalentMax": 203
        },
        {
          "date": "2023-03-03T03:14:46.503Z",
          "equivalentMax": 167
        },
        {
          "date": "2023-03-03T03:14:46.503Z",
          "equivalentMax": 167
        },
        {
          "date": "2023-05-26T02:06:23.591Z",
          "equivalentMax": 221
        },
        {
          "date": "2023-05-26T02:06:23.591Z",
          "equivalentMax": 221
        },
        {
          "date": "2023-12-04T04:38:09.330Z",
          "equivalentMax": 167
        },
        {
          "date": "2023-12-04T04:38:09.330Z",
          "equivalentMax": 167
        },
        {
          "date": "2023-12-05T04:20:22.574Z",
          "equivalentMax": 250
        },
        {
          "date": "2023-12-05T04:20:22.574Z",
          "equivalentMax": 250
        },
        {
          "date": "2023-12-13T13:38:22.419Z",
          "equivalentMax": 167
        },
        {
          "date": "2023-12-13T13:38:22.419Z",
          "equivalentMax": 167
        },
        {
          "date": "2023-12-19T03:26:25.170Z",
          "equivalentMax": 225
        },
        {
          "date": "2023-12-19T03:26:25.170Z",
          "equivalentMax": 225
        },
        {
          "date": "2023-12-26T02:14:27.997Z",
          "equivalentMax": 225
        },
        {
          "date": "2023-12-26T02:14:27.997Z",
          "equivalentMax": 225
        },
        {
          "date": "2024-01-02T00:42:47.991Z",
          "equivalentMax": 235
        },
        {
          "date": "2024-01-02T00:42:47.991Z",
          "equivalentMax": 235
        },
        {
          "date": "2024-01-08T22:10:54.971Z",
          "equivalentMax": 272
        },
        {
          "date": "2024-01-08T22:10:54.971Z",
          "equivalentMax": 272
        },
        {
          "date": "2024-01-16T01:49:49.475Z",
          "equivalentMax": 272
        },
        {
          "date": "2024-01-16T01:49:49.475Z",
          "equivalentMax": 272
        },
        {
          "date": "2024-01-24T03:21:45.583Z",
          "equivalentMax": 284
        },
        {
          "date": "2024-01-24T03:21:45.583Z",
          "equivalentMax": 284
        },
        {
          "date": "2024-01-30T03:43:00.937Z",
          "equivalentMax": 273
        },
        {
          "date": "2024-01-30T03:43:00.937Z",
          "equivalentMax": 273
        },
        {
          "date": "2024-02-06T02:03:59.391Z",
          "equivalentMax": 273
        }
      ],
      "tonnageInput": [
        [
          0,
          20,
          7,
          "100"
        ],
        [
          2,
          13,
          7,
          "170"
        ],
        [
          1,
          12,
          7,
          "170"
        ],
        [
          0,
          0,
          10,
          "0"
        ]
      ],
      "tonnageHistory": [
        {
          "date": "2022-08-04T02:44:03.835Z",
          "overallTonnage": 3900
        },
        {
          "date": "2022-08-04T02:44:03.835Z",
          "overallTonnage": 3900
        },
        {
          "date": "2022-08-24T02:20:02.680Z",
          "overallTonnage": 4000
        },
        {
          "date": "2022-08-24T02:20:02.680Z",
          "overallTonnage": 4000
        },
        {
          "date": "2022-09-08T02:05:17.103Z",
          "overallTonnage": 2400
        },
        {
          "date": "2022-09-08T02:05:17.103Z",
          "overallTonnage": 2400
        },
        {
          "date": "2022-09-11T05:00:45.708Z",
          "overallTonnage": 2000
        },
        {
          "date": "2022-09-11T05:00:45.708Z",
          "overallTonnage": 2000
        },
        {
          "date": "2022-09-13T02:46:22.536Z",
          "overallTonnage": 1600
        },
        {
          "date": "2022-09-13T02:46:22.536Z",
          "overallTonnage": 1600
        },
        {
          "date": "2022-09-17T19:29:53.902Z",
          "overallTonnage": 3000
        },
        {
          "date": "2022-09-17T19:29:53.902Z",
          "overallTonnage": 3000
        },
        {
          "date": "2022-09-22T23:27:05.488Z",
          "overallTonnage": 4100
        },
        {
          "date": "2022-09-22T23:27:05.488Z",
          "overallTonnage": 4100
        },
        {
          "date": "2022-09-27T02:52:11.203Z",
          "overallTonnage": 3600
        },
        {
          "date": "2022-09-27T02:52:11.203Z",
          "overallTonnage": 3600
        },
        {
          "date": "2022-10-08T03:09:08.062Z",
          "overallTonnage": 4800
        },
        {
          "date": "2022-10-08T03:09:08.062Z",
          "overallTonnage": 4800
        },
        {
          "date": "2023-03-03T03:14:46.503Z",
          "overallTonnage": 2000
        },
        {
          "date": "2023-03-03T03:14:46.503Z",
          "overallTonnage": 2000
        },
        {
          "date": "2023-05-26T02:06:23.591Z",
          "overallTonnage": 3600
        },
        {
          "date": "2023-05-26T02:06:23.591Z",
          "overallTonnage": 3600
        },
        {
          "date": "2023-12-04T04:38:09.330Z",
          "overallTonnage": 3600
        },
        {
          "date": "2023-12-04T04:38:09.330Z",
          "overallTonnage": 3600
        },
        {
          "date": "2023-12-05T04:20:22.574Z",
          "overallTonnage": 6300
        },
        {
          "date": "2023-12-05T04:20:22.574Z",
          "overallTonnage": 6300
        },
        {
          "date": "2023-12-13T13:38:22.419Z",
          "overallTonnage": 6000
        },
        {
          "date": "2023-12-13T13:38:22.419Z",
          "overallTonnage": 6000
        },
        {
          "date": "2023-12-19T03:26:25.170Z",
          "overallTonnage": 6750
        },
        {
          "date": "2023-12-19T03:26:25.170Z",
          "overallTonnage": 6750
        },
        {
          "date": "2023-12-26T02:14:27.997Z",
          "overallTonnage": 6750
        },
        {
          "date": "2023-12-26T02:14:27.997Z",
          "overallTonnage": 6750
        },
        {
          "date": "2024-01-02T00:42:47.991Z",
          "overallTonnage": 7500
        },
        {
          "date": "2024-01-02T00:42:47.991Z",
          "overallTonnage": 7500
        },
        {
          "date": "2024-01-08T22:10:54.971Z",
          "overallTonnage": 6120
        },
        {
          "date": "2024-01-08T22:10:54.971Z",
          "overallTonnage": 6120
        },
        {
          "date": "2024-01-16T01:49:49.475Z",
          "overallTonnage": 6120
        },
        {
          "date": "2024-01-16T01:49:49.475Z",
          "overallTonnage": 6120
        },
        {
          "date": "2024-01-24T03:21:45.583Z",
          "overallTonnage": 6120
        },
        {
          "date": "2024-01-24T03:21:45.583Z",
          "overallTonnage": 6120
        },
        {
          "date": "2024-01-30T03:43:00.937Z",
          "overallTonnage": 6460
        },
        {
          "date": "2024-01-30T03:43:00.937Z",
          "overallTonnage": 6460
        },
        {
          "date": "2024-02-06T02:03:59.391Z",
          "overallTonnage": 6630
        }
      ]
    },
    "DumbbellRow": {
      "rpeInput": [
        [
          1,
          10,
          "0"
        ],
        [
          1,
          10,
          "0"
        ]
      ],
      "maxHistory": [
        {
          "date": "2023-12-04T04:39:55.789Z",
          "equivalentMax": 67
        },
        {
          "date": "2023-12-04T04:39:55.789Z",
          "equivalentMax": 67
        },
        {
          "date": "2023-12-05T04:25:22.505Z",
          "equivalentMax": 100
        },
        {
          "date": "2023-12-05T04:25:22.505Z",
          "equivalentMax": 100
        },
        {
          "date": "2023-12-13T13:44:00.560Z",
          "equivalentMax": 100
        },
        {
          "date": "2023-12-13T13:44:00.560Z",
          "equivalentMax": 100
        },
        {
          "date": "2023-12-19T03:34:41.372Z",
          "equivalentMax": 133
        },
        {
          "date": "2023-12-19T03:34:41.372Z",
          "equivalentMax": 133
        },
        {
          "date": "2023-12-26T02:29:56.937Z",
          "equivalentMax": 133
        },
        {
          "date": "2023-12-26T02:29:56.937Z",
          "equivalentMax": 133
        },
        {
          "date": "2024-01-02T00:53:08.429Z",
          "equivalentMax": 133
        },
        {
          "date": "2024-01-02T00:53:08.429Z",
          "equivalentMax": 133
        },
        {
          "date": "2024-01-08T22:19:33.938Z",
          "equivalentMax": 160
        },
        {
          "date": "2024-01-08T22:19:33.938Z",
          "equivalentMax": 160
        },
        {
          "date": "2024-01-16T01:57:51.131Z",
          "equivalentMax": 167
        },
        {
          "date": "2024-01-16T01:57:51.131Z",
          "equivalentMax": 167
        },
        {
          "date": "2024-01-24T03:30:56.481Z",
          "equivalentMax": 167
        },
        {
          "date": "2024-01-24T03:30:56.481Z",
          "equivalentMax": 167
        },
        {
          "date": "2024-01-30T03:51:54.681Z",
          "equivalentMax": 187
        },
        {
          "date": "2024-01-30T03:51:54.681Z",
          "equivalentMax": 187
        },
        {
          "date": "2024-02-06T02:12:59.361Z",
          "equivalentMax": 191
        }
      ],
      "tonnageInput": [
        [
          0,
          20,
          7,
          "60"
        ],
        [
          3,
          20,
          7,
          "100"
        ],
        [
          0,
          0,
          3,
          "0"
        ],
        [
          0,
          0,
          3,
          "0"
        ]
      ],
      "tonnageHistory": [
        {
          "date": "2023-12-04T04:39:55.789Z",
          "overallTonnage": 1440
        },
        {
          "date": "2023-12-04T04:39:55.789Z",
          "overallTonnage": 1440
        },
        {
          "date": "2023-12-05T04:25:22.505Z",
          "overallTonnage": 2800
        },
        {
          "date": "2023-12-05T04:25:22.505Z",
          "overallTonnage": 2800
        },
        {
          "date": "2023-12-13T13:44:00.560Z",
          "overallTonnage": 3600
        },
        {
          "date": "2023-12-13T13:44:00.560Z",
          "overallTonnage": 3600
        },
        {
          "date": "2023-12-19T03:34:41.372Z",
          "overallTonnage": 4400
        },
        {
          "date": "2023-12-19T03:34:41.372Z",
          "overallTonnage": 4400
        },
        {
          "date": "2023-12-26T02:29:56.937Z",
          "overallTonnage": 4800
        },
        {
          "date": "2023-12-26T02:29:56.937Z",
          "overallTonnage": 4800
        },
        {
          "date": "2024-01-02T00:53:08.429Z",
          "overallTonnage": 4800
        },
        {
          "date": "2024-01-02T00:53:08.429Z",
          "overallTonnage": 4800
        },
        {
          "date": "2024-01-08T22:19:33.938Z",
          "overallTonnage": 5400
        },
        {
          "date": "2024-01-08T22:19:33.938Z",
          "overallTonnage": 5400
        },
        {
          "date": "2024-01-16T01:57:51.131Z",
          "overallTonnage": 6000
        },
        {
          "date": "2024-01-16T01:57:51.131Z",
          "overallTonnage": 6000
        },
        {
          "date": "2024-01-24T03:30:56.481Z",
          "overallTonnage": 6000
        },
        {
          "date": "2024-01-24T03:30:56.481Z",
          "overallTonnage": 6000
        },
        {
          "date": "2024-01-30T03:51:54.681Z",
          "overallTonnage": 6000
        },
        {
          "date": "2024-01-30T03:51:54.681Z",
          "overallTonnage": 6000
        },
        {
          "date": "2024-02-06T02:12:59.361Z",
          "overallTonnage": 6300
        }
      ]
    },
    "DumbbellShoulderPress": {
      "rpeInput": [
        [
          1,
          10,
          "225"
        ],
        [
          1,
          8,
          "0"
        ]
      ],
      "maxHistory": [
        {
          "date": "2021-07-07T01:09:57.324Z",
          "equivalentMax": 234
        },
        {
          "date": "2021-07-07T01:09:57.324Z",
          "equivalentMax": 234
        },
        {
          "date": "2021-07-09T01:34:31.845Z",
          "equivalentMax": 120
        },
        {
          "date": "2021-07-09T01:34:31.845Z",
          "equivalentMax": 120
        },
        {
          "date": "2021-07-09T01:34:31.845Z",
          "equivalentMax": 120
        },
        {
          "date": "2021-07-09T01:34:31.845Z",
          "equivalentMax": 120
        },
        {
          "date": "2021-07-14T01:53:07.809Z",
          "equivalentMax": 234
        },
        {
          "date": "2021-07-14T01:53:07.809Z",
          "equivalentMax": 234
        },
        {
          "date": "2021-07-17T02:02:25.297Z",
          "equivalentMax": 133
        },
        {
          "date": "2021-07-17T02:02:25.297Z",
          "equivalentMax": 133
        },
        {
          "date": "2021-07-17T02:02:25.297Z",
          "equivalentMax": 133
        },
        {
          "date": "2021-07-17T02:02:25.297Z",
          "equivalentMax": 133
        },
        {
          "date": "2021-08-18T12:16:06.204Z",
          "equivalentMax": 260
        },
        {
          "date": "2021-08-18T12:16:06.204Z",
          "equivalentMax": 260
        },
        {
          "date": "2021-08-20T10:57:13.896Z",
          "equivalentMax": 158
        },
        {
          "date": "2021-08-20T10:57:13.896Z",
          "equivalentMax": 158
        },
        {
          "date": "2021-08-20T10:57:13.896Z",
          "equivalentMax": 158
        },
        {
          "date": "2021-08-20T10:57:13.896Z",
          "equivalentMax": 158
        },
        {
          "date": "2021-08-25T10:52:11.924Z",
          "equivalentMax": 272
        },
        {
          "date": "2021-08-25T10:52:11.924Z",
          "equivalentMax": 272
        },
        {
          "date": "2021-09-03T11:02:30.756Z",
          "equivalentMax": 171
        },
        {
          "date": "2021-09-03T11:02:30.756Z",
          "equivalentMax": 171
        },
        {
          "date": "2021-09-10T11:04:31.541Z",
          "equivalentMax": 187
        },
        {
          "date": "2021-09-10T11:04:31.541Z",
          "equivalentMax": 187
        },
        {
          "date": "2021-09-17T11:10:27.980Z",
          "equivalentMax": 193
        },
        {
          "date": "2021-09-17T11:10:27.980Z",
          "equivalentMax": 193
        },
        {
          "date": "2021-09-24T11:12:24.315Z",
          "equivalentMax": 193
        },
        {
          "date": "2021-09-24T11:12:24.315Z",
          "equivalentMax": 193
        },
        {
          "date": "2021-10-09T19:36:03.076Z",
          "equivalentMax": 186
        },
        {
          "date": "2021-10-09T19:36:03.076Z",
          "equivalentMax": 186
        },
        {
          "date": "2022-01-05T03:46:14.745Z",
          "equivalentMax": 181
        },
        {
          "date": "2022-01-05T03:46:14.745Z",
          "equivalentMax": 181
        },
        {
          "date": "2022-02-12T17:09:45.367Z",
          "equivalentMax": 171
        },
        {
          "date": "2022-02-12T17:09:45.367Z",
          "equivalentMax": 171
        },
        {
          "date": "2022-03-02T19:26:20.800Z",
          "equivalentMax": 180
        },
        {
          "date": "2022-03-02T19:26:20.800Z",
          "equivalentMax": 180
        },
        {
          "date": "2022-03-21T19:40:22.361Z",
          "equivalentMax": 171
        },
        {
          "date": "2022-03-21T19:40:22.361Z",
          "equivalentMax": 171
        },
        {
          "date": "2022-03-26T01:54:54.775Z",
          "equivalentMax": 198
        },
        {
          "date": "2022-03-26T01:54:54.775Z",
          "equivalentMax": 198
        },
        {
          "date": "2022-03-30T18:57:47.740Z",
          "equivalentMax": 198
        },
        {
          "date": "2022-03-30T18:57:47.740Z",
          "equivalentMax": 198
        },
        {
          "date": "2022-04-09T17:22:49.783Z",
          "equivalentMax": 204
        },
        {
          "date": "2022-04-09T17:22:49.783Z",
          "equivalentMax": 204
        },
        {
          "date": "2022-04-15T02:00:38.582Z",
          "equivalentMax": 180
        },
        {
          "date": "2022-04-15T02:00:38.582Z",
          "equivalentMax": 180
        },
        {
          "date": "2022-04-25T17:09:25.867Z",
          "equivalentMax": 189
        },
        {
          "date": "2022-04-25T17:09:25.867Z",
          "equivalentMax": 189
        },
        {
          "date": "2022-04-28T20:10:59.075Z",
          "equivalentMax": 209
        },
        {
          "date": "2022-04-28T20:10:59.075Z",
          "equivalentMax": 209
        },
        {
          "date": "2022-05-25T13:35:11.611Z",
          "equivalentMax": 189
        },
        {
          "date": "2022-05-25T13:35:11.611Z",
          "equivalentMax": 189
        },
        {
          "date": "2022-06-09T00:29:18.629Z",
          "equivalentMax": 196
        },
        {
          "date": "2022-06-09T00:29:18.629Z",
          "equivalentMax": 196
        },
        {
          "date": "2022-07-31T01:11:40.222Z",
          "equivalentMax": 133
        },
        {
          "date": "2022-07-31T01:11:40.222Z",
          "equivalentMax": 133
        },
        {
          "date": "2022-08-03T11:50:34.700Z",
          "equivalentMax": 171
        },
        {
          "date": "2022-08-03T11:50:34.700Z",
          "equivalentMax": 171
        },
        {
          "date": "2022-08-14T21:10:22.287Z",
          "equivalentMax": 189
        },
        {
          "date": "2022-08-14T21:10:22.287Z",
          "equivalentMax": 189
        },
        {
          "date": "2022-08-18T01:35:43.648Z",
          "equivalentMax": 196
        },
        {
          "date": "2022-08-18T01:35:43.648Z",
          "equivalentMax": 196
        },
        {
          "date": "2022-12-09T01:57:50.432Z",
          "equivalentMax": 172
        },
        {
          "date": "2022-12-09T01:57:50.432Z",
          "equivalentMax": 172
        },
        {
          "date": "2022-12-21T01:25:34.677Z",
          "equivalentMax": 197
        },
        {
          "date": "2022-12-21T01:25:34.677Z",
          "equivalentMax": 197
        },
        {
          "date": "2022-12-26T21:29:28.348Z",
          "equivalentMax": 210
        },
        {
          "date": "2022-12-26T21:29:28.348Z",
          "equivalentMax": 210
        },
        {
          "date": "2023-02-10T02:12:05.195Z",
          "equivalentMax": 199
        },
        {
          "date": "2023-02-10T02:12:05.195Z",
          "equivalentMax": 199
        },
        {
          "date": "2023-02-15T02:44:30.695Z",
          "equivalentMax": 207
        },
        {
          "date": "2023-02-15T02:44:30.695Z",
          "equivalentMax": 207
        },
        {
          "date": "2023-02-22T02:50:39.331Z",
          "equivalentMax": 221
        },
        {
          "date": "2023-02-22T02:50:39.331Z",
          "equivalentMax": 221
        },
        {
          "date": "2023-08-29T02:30:46.114Z",
          "equivalentMax": 191
        },
        {
          "date": "2023-08-29T02:30:46.114Z",
          "equivalentMax": 191
        },
        {
          "date": "2023-08-31T02:00:25.505Z",
          "equivalentMax": 196
        },
        {
          "date": "2023-08-31T02:00:25.505Z",
          "equivalentMax": 196
        },
        {
          "date": "2023-09-01T02:01:08.050Z",
          "equivalentMax": 203
        },
        {
          "date": "2023-09-01T02:01:08.050Z",
          "equivalentMax": 203
        },
        {
          "date": "2023-09-03T00:33:46.709Z",
          "equivalentMax": 204
        },
        {
          "date": "2023-09-03T00:33:46.709Z",
          "equivalentMax": 204
        },
        {
          "date": "2023-09-07T01:39:03.437Z",
          "equivalentMax": 203
        },
        {
          "date": "2023-09-07T01:39:03.437Z",
          "equivalentMax": 203
        },
        {
          "date": "2023-09-08T00:49:26.942Z",
          "equivalentMax": 209
        },
        {
          "date": "2023-09-08T00:49:26.942Z",
          "equivalentMax": 209
        },
        {
          "date": "2023-09-20T01:56:46.438Z",
          "equivalentMax": 203
        },
        {
          "date": "2023-09-20T01:56:46.438Z",
          "equivalentMax": 203
        },
        {
          "date": "2023-09-22T02:31:29.881Z",
          "equivalentMax": 203
        },
        {
          "date": "2023-09-22T02:31:29.881Z",
          "equivalentMax": 203
        },
        {
          "date": "2023-09-22T20:27:37.863Z",
          "equivalentMax": 215
        },
        {
          "date": "2023-09-22T20:27:37.863Z",
          "equivalentMax": 215
        },
        {
          "date": "2023-09-26T02:44:05.527Z",
          "equivalentMax": 223
        },
        {
          "date": "2023-09-26T02:44:05.527Z",
          "equivalentMax": 223
        },
        {
          "date": "2023-09-28T02:01:54.010Z",
          "equivalentMax": 214
        },
        {
          "date": "2023-09-28T02:01:54.010Z",
          "equivalentMax": 214
        },
        {
          "date": "2023-10-01T01:22:28.276Z",
          "equivalentMax": 219
        },
        {
          "date": "2023-10-01T01:22:28.276Z",
          "equivalentMax": 219
        },
        {
          "date": "2023-10-05T02:52:05.751Z",
          "equivalentMax": 219
        },
        {
          "date": "2023-10-05T02:52:05.751Z",
          "equivalentMax": 219
        },
        {
          "date": "2023-10-06T00:45:32.126Z",
          "equivalentMax": 219
        },
        {
          "date": "2023-10-06T00:45:32.126Z",
          "equivalentMax": 219
        },
        {
          "date": "2023-10-08T00:18:10.563Z",
          "equivalentMax": 219
        },
        {
          "date": "2023-10-08T00:18:10.563Z",
          "equivalentMax": 219
        },
        {
          "date": "2023-10-10T12:15:22.080Z",
          "equivalentMax": 222
        },
        {
          "date": "2023-10-10T12:15:22.080Z",
          "equivalentMax": 222
        },
        {
          "date": "2023-10-12T02:02:31.945Z",
          "equivalentMax": 219
        },
        {
          "date": "2023-10-12T02:02:31.945Z",
          "equivalentMax": 219
        },
        {
          "date": "2023-10-13T01:20:04.664Z",
          "equivalentMax": 219
        },
        {
          "date": "2023-10-13T01:20:04.664Z",
          "equivalentMax": 219
        },
        {
          "date": "2023-10-14T23:44:25.742Z",
          "equivalentMax": 219
        },
        {
          "date": "2023-10-14T23:44:25.742Z",
          "equivalentMax": 219
        },
        {
          "date": "2023-10-17T03:48:38.265Z",
          "equivalentMax": 222
        },
        {
          "date": "2023-10-17T03:48:38.265Z",
          "equivalentMax": 222
        },
        {
          "date": "2023-10-19T01:26:26.929Z",
          "equivalentMax": 222
        },
        {
          "date": "2023-10-19T01:26:26.929Z",
          "equivalentMax": 222
        },
        {
          "date": "2023-10-21T19:48:22.868Z",
          "equivalentMax": 222
        },
        {
          "date": "2023-10-21T19:48:22.868Z",
          "equivalentMax": 222
        },
        {
          "date": "2023-10-24T01:04:41.425Z",
          "equivalentMax": 228
        },
        {
          "date": "2023-10-24T01:04:41.425Z",
          "equivalentMax": 228
        },
        {
          "date": "2023-10-26T02:45:26.546Z",
          "equivalentMax": 224
        },
        {
          "date": "2023-10-26T02:45:26.546Z",
          "equivalentMax": 224
        },
        {
          "date": "2023-10-27T00:58:14.182Z",
          "equivalentMax": 207
        },
        {
          "date": "2023-10-27T00:58:14.182Z",
          "equivalentMax": 207
        },
        {
          "date": "2023-10-29T20:15:25.907Z",
          "equivalentMax": 226
        },
        {
          "date": "2023-10-29T20:15:25.907Z",
          "equivalentMax": 226
        },
        {
          "date": "2023-11-02T01:30:08.200Z",
          "equivalentMax": 225
        },
        {
          "date": "2023-11-02T01:30:08.200Z",
          "equivalentMax": 225
        },
        {
          "date": "2023-11-03T01:10:43.343Z",
          "equivalentMax": 224
        },
        {
          "date": "2023-11-03T01:10:43.343Z",
          "equivalentMax": 224
        },
        {
          "date": "2023-11-04T20:29:07.494Z",
          "equivalentMax": 233
        },
        {
          "date": "2023-11-04T20:29:07.494Z",
          "equivalentMax": 233
        },
        {
          "date": "2023-11-09T01:38:01.767Z",
          "equivalentMax": 226
        },
        {
          "date": "2023-11-09T01:38:01.767Z",
          "equivalentMax": 226
        },
        {
          "date": "2023-12-04T04:41:03.042Z",
          "equivalentMax": 67
        },
        {
          "date": "2023-12-04T04:41:03.042Z",
          "equivalentMax": 67
        },
        {
          "date": "2023-12-05T04:30:02.943Z",
          "equivalentMax": 90
        },
        {
          "date": "2023-12-05T04:30:02.943Z",
          "equivalentMax": 90
        },
        {
          "date": "2023-12-19T03:41:48.654Z",
          "equivalentMax": 90
        },
        {
          "date": "2023-12-19T03:41:48.654Z",
          "equivalentMax": 90
        },
        {
          "date": "2023-12-26T02:22:34.543Z",
          "equivalentMax": 120
        },
        {
          "date": "2023-12-26T02:22:34.543Z",
          "equivalentMax": 120
        },
        {
          "date": "2023-12-29T02:28:39.950Z",
          "equivalentMax": 123
        },
        {
          "date": "2023-12-29T02:28:39.950Z",
          "equivalentMax": 123
        },
        {
          "date": "2024-01-02T01:02:20.294Z",
          "equivalentMax": 128
        },
        {
          "date": "2024-01-02T01:02:20.294Z",
          "equivalentMax": 128
        },
        {
          "date": "2024-01-08T22:27:09.559Z",
          "equivalentMax": 167
        },
        {
          "date": "2024-01-08T22:27:09.559Z",
          "equivalentMax": 167
        },
        {
          "date": "2024-01-16T02:06:41.197Z",
          "equivalentMax": 167
        },
        {
          "date": "2024-01-16T02:06:41.197Z",
          "equivalentMax": 167
        },
        {
          "date": "2024-01-24T03:43:15.017Z",
          "equivalentMax": 143
        },
        {
          "date": "2024-01-24T03:43:15.017Z",
          "equivalentMax": 143
        },
        {
          "date": "2024-02-06T02:24:24.240Z",
          "equivalentMax": 161
        }
      ],
      "tonnageInput": [
        [
          0,
          15,
          7,
          "40"
        ],
        [
          3,
          13,
          7,
          "100"
        ],
        [
          0,
          18,
          7,
          "80"
        ],
        [
          0,
          2,
          8,
          "185"
        ]
      ],
      "tonnageHistory": [
        {
          "date": "2021-07-07T01:09:57.324Z",
          "overallTonnage": 3650
        },
        {
          "date": "2021-07-07T01:09:57.324Z",
          "overallTonnage": 3650
        },
        {
          "date": "2021-07-09T01:34:31.845Z",
          "overallTonnage": 3120
        },
        {
          "date": "2021-07-09T01:34:31.845Z",
          "overallTonnage": 3120
        },
        {
          "date": "2021-07-09T01:34:31.845Z",
          "overallTonnage": 3120
        },
        {
          "date": "2021-07-09T01:34:31.845Z",
          "overallTonnage": 3120
        },
        {
          "date": "2021-07-14T01:53:07.809Z",
          "overallTonnage": 3650
        },
        {
          "date": "2021-07-14T01:53:07.809Z",
          "overallTonnage": 3650
        },
        {
          "date": "2021-07-17T02:02:25.297Z",
          "overallTonnage": 3160
        },
        {
          "date": "2021-07-17T02:02:25.297Z",
          "overallTonnage": 3160
        },
        {
          "date": "2021-07-17T02:02:25.297Z",
          "overallTonnage": 3160
        },
        {
          "date": "2021-07-17T02:02:25.297Z",
          "overallTonnage": 3160
        },
        {
          "date": "2021-08-18T12:16:06.204Z",
          "overallTonnage": 4640
        },
        {
          "date": "2021-08-18T12:16:06.204Z",
          "overallTonnage": 4640
        },
        {
          "date": "2021-08-20T10:57:13.896Z",
          "overallTonnage": 1920
        },
        {
          "date": "2021-08-20T10:57:13.896Z",
          "overallTonnage": 1920
        },
        {
          "date": "2021-08-20T10:57:13.896Z",
          "overallTonnage": 1920
        },
        {
          "date": "2021-08-20T10:57:13.896Z",
          "overallTonnage": 1920
        },
        {
          "date": "2021-08-25T10:52:11.924Z",
          "overallTonnage": 4360
        },
        {
          "date": "2021-08-25T10:52:11.924Z",
          "overallTonnage": 4360
        },
        {
          "date": "2021-09-03T11:02:30.756Z",
          "overallTonnage": 3160
        },
        {
          "date": "2021-09-03T11:02:30.756Z",
          "overallTonnage": 3160
        },
        {
          "date": "2021-09-10T11:04:31.541Z",
          "overallTonnage": 2740
        },
        {
          "date": "2021-09-10T11:04:31.541Z",
          "overallTonnage": 2740
        },
        {
          "date": "2021-09-17T11:10:27.980Z",
          "overallTonnage": 2985
        },
        {
          "date": "2021-09-17T11:10:27.980Z",
          "overallTonnage": 2985
        },
        {
          "date": "2021-09-24T11:12:24.315Z",
          "overallTonnage": 2755
        },
        {
          "date": "2021-09-24T11:12:24.315Z",
          "overallTonnage": 2755
        },
        {
          "date": "2021-10-09T19:36:03.076Z",
          "overallTonnage": 2785
        },
        {
          "date": "2021-10-09T19:36:03.076Z",
          "overallTonnage": 2785
        },
        {
          "date": "2022-01-05T03:46:14.745Z",
          "overallTonnage": 2630
        },
        {
          "date": "2022-01-05T03:46:14.745Z",
          "overallTonnage": 2630
        },
        {
          "date": "2022-02-12T17:09:45.367Z",
          "overallTonnage": 3240
        },
        {
          "date": "2022-02-12T17:09:45.367Z",
          "overallTonnage": 3240
        },
        {
          "date": "2022-03-02T19:26:20.800Z",
          "overallTonnage": 3240
        },
        {
          "date": "2022-03-02T19:26:20.800Z",
          "overallTonnage": 3240
        },
        {
          "date": "2022-03-21T19:40:22.361Z",
          "overallTonnage": 3240
        },
        {
          "date": "2022-03-21T19:40:22.361Z",
          "overallTonnage": 3240
        },
        {
          "date": "2022-03-26T01:54:54.775Z",
          "overallTonnage": 3580
        },
        {
          "date": "2022-03-26T01:54:54.775Z",
          "overallTonnage": 3580
        },
        {
          "date": "2022-03-30T18:57:47.740Z",
          "overallTonnage": 3580
        },
        {
          "date": "2022-03-30T18:57:47.740Z",
          "overallTonnage": 3580
        },
        {
          "date": "2022-04-09T17:22:49.783Z",
          "overallTonnage": 3590
        },
        {
          "date": "2022-04-09T17:22:49.783Z",
          "overallTonnage": 3590
        },
        {
          "date": "2022-04-15T02:00:38.582Z",
          "overallTonnage": 2700
        },
        {
          "date": "2022-04-15T02:00:38.582Z",
          "overallTonnage": 2700
        },
        {
          "date": "2022-04-25T17:09:25.867Z",
          "overallTonnage": 4860
        },
        {
          "date": "2022-04-25T17:09:25.867Z",
          "overallTonnage": 4860
        },
        {
          "date": "2022-04-28T20:10:59.075Z",
          "overallTonnage": 3910
        },
        {
          "date": "2022-04-28T20:10:59.075Z",
          "overallTonnage": 3910
        },
        {
          "date": "2022-05-25T13:35:11.611Z",
          "overallTonnage": 4320
        },
        {
          "date": "2022-05-25T13:35:11.611Z",
          "overallTonnage": 4320
        },
        {
          "date": "2022-06-09T00:29:18.629Z",
          "overallTonnage": 3970
        },
        {
          "date": "2022-06-09T00:29:18.629Z",
          "overallTonnage": 3970
        },
        {
          "date": "2022-07-31T01:11:40.222Z",
          "overallTonnage": 3960
        },
        {
          "date": "2022-07-31T01:11:40.222Z",
          "overallTonnage": 3960
        },
        {
          "date": "2022-08-03T11:50:34.700Z",
          "overallTonnage": 3240
        },
        {
          "date": "2022-08-03T11:50:34.700Z",
          "overallTonnage": 3240
        },
        {
          "date": "2022-08-14T21:10:22.287Z",
          "overallTonnage": 3780
        },
        {
          "date": "2022-08-14T21:10:22.287Z",
          "overallTonnage": 3780
        },
        {
          "date": "2022-08-18T01:35:43.648Z",
          "overallTonnage": 3560
        },
        {
          "date": "2022-08-18T01:35:43.648Z",
          "overallTonnage": 3560
        },
        {
          "date": "2022-12-09T01:57:50.432Z",
          "overallTonnage": 3240
        },
        {
          "date": "2022-12-09T01:57:50.432Z",
          "overallTonnage": 3240
        },
        {
          "date": "2022-12-21T01:25:34.677Z",
          "overallTonnage": 2940
        },
        {
          "date": "2022-12-21T01:25:34.677Z",
          "overallTonnage": 2940
        },
        {
          "date": "2022-12-26T21:29:28.348Z",
          "overallTonnage": 3250
        },
        {
          "date": "2022-12-26T21:29:28.348Z",
          "overallTonnage": 3250
        },
        {
          "date": "2023-02-10T02:12:05.195Z",
          "overallTonnage": 3240
        },
        {
          "date": "2023-02-10T02:12:05.195Z",
          "overallTonnage": 3240
        },
        {
          "date": "2023-02-15T02:44:30.695Z",
          "overallTonnage": 3210
        },
        {
          "date": "2023-02-15T02:44:30.695Z",
          "overallTonnage": 3210
        },
        {
          "date": "2023-02-22T02:50:39.331Z",
          "overallTonnage": 3020
        },
        {
          "date": "2023-02-22T02:50:39.331Z",
          "overallTonnage": 3020
        },
        {
          "date": "2023-08-29T02:30:46.114Z",
          "overallTonnage": 1800
        },
        {
          "date": "2023-08-29T02:30:46.114Z",
          "overallTonnage": 1800
        },
        {
          "date": "2023-08-31T02:00:25.505Z",
          "overallTonnage": 2610
        },
        {
          "date": "2023-08-31T02:00:25.505Z",
          "overallTonnage": 2610
        },
        {
          "date": "2023-09-01T02:01:08.050Z",
          "overallTonnage": 1485
        },
        {
          "date": "2023-09-01T02:01:08.050Z",
          "overallTonnage": 1485
        },
        {
          "date": "2023-09-03T00:33:46.709Z",
          "overallTonnage": 1130
        },
        {
          "date": "2023-09-03T00:33:46.709Z",
          "overallTonnage": 1130
        },
        {
          "date": "2023-09-07T01:39:03.437Z",
          "overallTonnage": 1485
        },
        {
          "date": "2023-09-07T01:39:03.437Z",
          "overallTonnage": 1485
        },
        {
          "date": "2023-09-08T00:49:26.942Z",
          "overallTonnage": 1400
        },
        {
          "date": "2023-09-08T00:49:26.942Z",
          "overallTonnage": 1400
        },
        {
          "date": "2023-09-20T01:56:46.438Z",
          "overallTonnage": 3195
        },
        {
          "date": "2023-09-20T01:56:46.438Z",
          "overallTonnage": 3195
        },
        {
          "date": "2023-09-22T02:31:29.881Z",
          "overallTonnage": 1485
        },
        {
          "date": "2023-09-22T02:31:29.881Z",
          "overallTonnage": 1485
        },
        {
          "date": "2023-09-22T20:27:37.863Z",
          "overallTonnage": 1420
        },
        {
          "date": "2023-09-22T20:27:37.863Z",
          "overallTonnage": 1420
        },
        {
          "date": "2023-09-26T02:44:05.527Z",
          "overallTonnage": 5160
        },
        {
          "date": "2023-09-26T02:44:05.527Z",
          "overallTonnage": 5160
        },
        {
          "date": "2023-09-28T02:01:54.010Z",
          "overallTonnage": 1480
        },
        {
          "date": "2023-09-28T02:01:54.010Z",
          "overallTonnage": 1480
        },
        {
          "date": "2023-10-01T01:22:28.276Z",
          "overallTonnage": 1215
        },
        {
          "date": "2023-10-01T01:22:28.276Z",
          "overallTonnage": 1215
        },
        {
          "date": "2023-10-05T02:52:05.751Z",
          "overallTonnage": 2670
        },
        {
          "date": "2023-10-05T02:52:05.751Z",
          "overallTonnage": 2670
        },
        {
          "date": "2023-10-06T00:45:32.126Z",
          "overallTonnage": 975
        },
        {
          "date": "2023-10-06T00:45:32.126Z",
          "overallTonnage": 975
        },
        {
          "date": "2023-10-08T00:18:10.563Z",
          "overallTonnage": 1215
        },
        {
          "date": "2023-10-08T00:18:10.563Z",
          "overallTonnage": 1215
        },
        {
          "date": "2023-10-10T12:15:22.080Z",
          "overallTonnage": 3605
        },
        {
          "date": "2023-10-10T12:15:22.080Z",
          "overallTonnage": 3605
        },
        {
          "date": "2023-10-12T02:02:31.945Z",
          "overallTonnage": 2670
        },
        {
          "date": "2023-10-12T02:02:31.945Z",
          "overallTonnage": 2670
        },
        {
          "date": "2023-10-13T01:20:04.664Z",
          "overallTonnage": 975
        },
        {
          "date": "2023-10-13T01:20:04.664Z",
          "overallTonnage": 975
        },
        {
          "date": "2023-10-14T23:44:25.742Z",
          "overallTonnage": 1305
        },
        {
          "date": "2023-10-14T23:44:25.742Z",
          "overallTonnage": 1305
        },
        {
          "date": "2023-10-17T03:48:38.265Z",
          "overallTonnage": 5305
        },
        {
          "date": "2023-10-17T03:48:38.265Z",
          "overallTonnage": 5305
        },
        {
          "date": "2023-10-19T01:26:26.929Z",
          "overallTonnage": 2425
        },
        {
          "date": "2023-10-19T01:26:26.929Z",
          "overallTonnage": 2425
        },
        {
          "date": "2023-10-21T19:48:22.868Z",
          "overallTonnage": 1685
        },
        {
          "date": "2023-10-21T19:48:22.868Z",
          "overallTonnage": 1685
        },
        {
          "date": "2023-10-24T01:04:41.425Z",
          "overallTonnage": 6135
        },
        {
          "date": "2023-10-24T01:04:41.425Z",
          "overallTonnage": 6135
        },
        {
          "date": "2023-10-26T02:45:26.546Z",
          "overallTonnage": 3100
        },
        {
          "date": "2023-10-26T02:45:26.546Z",
          "overallTonnage": 3100
        },
        {
          "date": "2023-10-27T00:58:14.182Z",
          "overallTonnage": 1110
        },
        {
          "date": "2023-10-27T00:58:14.182Z",
          "overallTonnage": 1110
        },
        {
          "date": "2023-10-29T20:15:25.907Z",
          "overallTonnage": 2165
        },
        {
          "date": "2023-10-29T20:15:25.907Z",
          "overallTonnage": 2165
        },
        {
          "date": "2023-11-02T01:30:08.200Z",
          "overallTonnage": 3015
        },
        {
          "date": "2023-11-02T01:30:08.200Z",
          "overallTonnage": 3015
        },
        {
          "date": "2023-11-03T01:10:43.343Z",
          "overallTonnage": 800
        },
        {
          "date": "2023-11-03T01:10:43.343Z",
          "overallTonnage": 800
        },
        {
          "date": "2023-11-04T20:29:07.494Z",
          "overallTonnage": 1970
        },
        {
          "date": "2023-11-04T20:29:07.494Z",
          "overallTonnage": 1970
        },
        {
          "date": "2023-11-09T01:38:01.767Z",
          "overallTonnage": 585
        },
        {
          "date": "2023-11-09T01:38:01.767Z",
          "overallTonnage": 585
        },
        {
          "date": "2023-12-04T04:41:03.042Z",
          "overallTonnage": 1440
        },
        {
          "date": "2023-12-04T04:41:03.042Z",
          "overallTonnage": 1440
        },
        {
          "date": "2023-12-05T04:30:02.943Z",
          "overallTonnage": 2400
        },
        {
          "date": "2023-12-05T04:30:02.943Z",
          "overallTonnage": 2400
        },
        {
          "date": "2023-12-19T03:41:48.654Z",
          "overallTonnage": 2700
        },
        {
          "date": "2023-12-19T03:41:48.654Z",
          "overallTonnage": 2700
        },
        {
          "date": "2023-12-26T02:22:34.543Z",
          "overallTonnage": 3600
        },
        {
          "date": "2023-12-26T02:22:34.543Z",
          "overallTonnage": 3600
        },
        {
          "date": "2023-12-29T02:28:39.950Z",
          "overallTonnage": 3840
        },
        {
          "date": "2023-12-29T02:28:39.950Z",
          "overallTonnage": 3840
        },
        {
          "date": "2024-01-02T01:02:20.294Z",
          "overallTonnage": 4160
        },
        {
          "date": "2024-01-02T01:02:20.294Z",
          "overallTonnage": 4160
        },
        {
          "date": "2024-01-08T22:27:09.559Z",
          "overallTonnage": 3600
        },
        {
          "date": "2024-01-08T22:27:09.559Z",
          "overallTonnage": 3600
        },
        {
          "date": "2024-01-16T02:06:41.197Z",
          "overallTonnage": 3600
        },
        {
          "date": "2024-01-16T02:06:41.197Z",
          "overallTonnage": 3600
        },
        {
          "date": "2024-01-24T03:43:15.017Z",
          "overallTonnage": 3900
        },
        {
          "date": "2024-01-24T03:43:15.017Z",
          "overallTonnage": 3900
        },
        {
          "date": "2024-02-06T02:24:24.240Z",
          "overallTonnage": 3900
        }
      ]
    },
    "PullUps": {
      "rpeInput": [
        [
          4,
          10,
          "235"
        ],
        [
          8,
          6,
          "0"
        ]
      ],
      "maxHistory": [
        {
          "date": "2021-08-16T10:47:31.062Z",
          "equivalentMax": 252
        },
        {
          "date": "2021-08-16T10:47:31.062Z",
          "equivalentMax": 252
        },
        {
          "date": "2021-08-25T10:49:29.819Z",
          "equivalentMax": 259
        },
        {
          "date": "2021-08-25T10:49:29.819Z",
          "equivalentMax": 259
        },
        {
          "date": "2021-08-30T10:59:48.684Z",
          "equivalentMax": 259
        },
        {
          "date": "2021-08-30T10:59:48.684Z",
          "equivalentMax": 259
        },
        {
          "date": "2021-09-06T20:50:23.997Z",
          "equivalentMax": 259
        },
        {
          "date": "2021-09-06T20:50:23.997Z",
          "equivalentMax": 259
        },
        {
          "date": "2021-09-13T12:18:39.493Z",
          "equivalentMax": 259
        },
        {
          "date": "2021-09-13T12:18:39.493Z",
          "equivalentMax": 259
        },
        {
          "date": "2021-09-20T12:01:04.593Z",
          "equivalentMax": 259
        },
        {
          "date": "2021-09-20T12:01:04.593Z",
          "equivalentMax": 259
        },
        {
          "date": "2021-09-27T11:11:45.912Z",
          "equivalentMax": 266
        },
        {
          "date": "2021-09-27T11:11:45.912Z",
          "equivalentMax": 266
        },
        {
          "date": "2021-10-04T11:00:51.295Z",
          "equivalentMax": 276
        },
        {
          "date": "2021-10-04T11:00:51.295Z",
          "equivalentMax": 276
        },
        {
          "date": "2021-10-19T11:09:24.343Z",
          "equivalentMax": 269
        },
        {
          "date": "2021-10-19T11:09:24.343Z",
          "equivalentMax": 269
        },
        {
          "date": "2021-10-26T10:58:52.497Z",
          "equivalentMax": 269
        },
        {
          "date": "2021-10-26T10:58:52.497Z",
          "equivalentMax": 269
        },
        {
          "date": "2022-01-05T03:32:08.206Z",
          "equivalentMax": 247
        },
        {
          "date": "2022-01-05T03:32:08.206Z",
          "equivalentMax": 247
        },
        {
          "date": "2022-03-27T00:37:17.519Z",
          "equivalentMax": 261
        },
        {
          "date": "2022-03-27T00:37:17.519Z",
          "equivalentMax": 261
        },
        {
          "date": "2022-04-11T18:18:56.627Z",
          "equivalentMax": 261
        },
        {
          "date": "2022-04-11T18:18:56.627Z",
          "equivalentMax": 261
        },
        {
          "date": "2022-04-25T17:16:10.461Z",
          "equivalentMax": 261
        },
        {
          "date": "2022-04-25T17:16:10.461Z",
          "equivalentMax": 261
        },
        {
          "date": "2022-05-13T20:41:02.686Z",
          "equivalentMax": 283
        },
        {
          "date": "2022-05-13T20:41:02.686Z",
          "equivalentMax": 283
        },
        {
          "date": "2022-08-07T00:54:31.064Z",
          "equivalentMax": 173
        },
        {
          "date": "2022-08-07T00:54:31.064Z",
          "equivalentMax": 173
        },
        {
          "date": "2022-09-05T18:07:39.083Z",
          "equivalentMax": 173
        },
        {
          "date": "2022-09-05T18:07:39.083Z",
          "equivalentMax": 173
        },
        {
          "date": "2022-09-08T02:06:12.355Z",
          "equivalentMax": 146
        },
        {
          "date": "2022-09-08T02:06:12.355Z",
          "equivalentMax": 146
        },
        {
          "date": "2022-09-11T05:01:00.520Z",
          "equivalentMax": 153
        },
        {
          "date": "2022-09-11T05:01:00.520Z",
          "equivalentMax": 153
        },
        {
          "date": "2022-09-13T03:43:18.090Z",
          "equivalentMax": 177
        },
        {
          "date": "2022-09-13T03:43:18.090Z",
          "equivalentMax": 177
        },
        {
          "date": "2022-09-17T19:39:19.301Z",
          "equivalentMax": 214
        },
        {
          "date": "2022-09-17T19:39:19.301Z",
          "equivalentMax": 214
        },
        {
          "date": "2022-09-22T23:31:25.366Z",
          "equivalentMax": 217
        },
        {
          "date": "2022-09-22T23:31:25.366Z",
          "equivalentMax": 217
        },
        {
          "date": "2022-10-08T03:25:45.525Z",
          "equivalentMax": 183
        },
        {
          "date": "2022-10-08T03:25:45.525Z",
          "equivalentMax": 183
        },
        {
          "date": "2022-11-20T23:54:21.008Z",
          "equivalentMax": 177
        },
        {
          "date": "2022-11-20T23:54:21.008Z",
          "equivalentMax": 177
        },
        {
          "date": "2023-12-08T02:02:16.352Z",
          "equivalentMax": 249
        },
        {
          "date": "2023-12-08T02:02:16.352Z",
          "equivalentMax": 249
        },
        {
          "date": "2023-12-13T13:57:09.710Z",
          "equivalentMax": 225
        },
        {
          "date": "2023-12-13T13:57:09.710Z",
          "equivalentMax": 225
        },
        {
          "date": "2023-12-16T03:11:09.556Z",
          "equivalentMax": 249
        },
        {
          "date": "2023-12-16T03:11:09.556Z",
          "equivalentMax": 249
        },
        {
          "date": "2023-12-29T02:42:41.062Z",
          "equivalentMax": 267
        },
        {
          "date": "2023-12-29T02:42:41.062Z",
          "equivalentMax": 267
        },
        {
          "date": "2024-01-05T03:30:58.486Z",
          "equivalentMax": 249
        },
        {
          "date": "2024-01-05T03:30:58.486Z",
          "equivalentMax": 249
        },
        {
          "date": "2024-01-19T03:16:38.483Z",
          "equivalentMax": 249
        },
        {
          "date": "2024-01-19T03:16:38.483Z",
          "equivalentMax": 249
        },
        {
          "date": "2024-01-24T03:50:10.526Z",
          "equivalentMax": 267
        },
        {
          "date": "2024-01-24T03:50:10.526Z",
          "equivalentMax": 267
        }
      ],
      "tonnageInput": [
        [
          0,
          8,
          10,
          "115"
        ],
        [
          12,
          2,
          7,
          "230"
        ],
        [
          0,
          3,
          10,
          "235"
        ],
        [
          0,
          4,
          10,
          "235"
        ]
      ],
      "tonnageHistory": [
        {
          "date": "2021-08-16T10:47:31.062Z",
          "overallTonnage": 3780
        },
        {
          "date": "2021-08-16T10:47:31.062Z",
          "overallTonnage": 3780
        },
        {
          "date": "2021-08-25T10:49:29.819Z",
          "overallTonnage": 3990
        },
        {
          "date": "2021-08-25T10:49:29.819Z",
          "overallTonnage": 3990
        },
        {
          "date": "2021-08-30T10:59:48.684Z",
          "overallTonnage": 4410
        },
        {
          "date": "2021-08-30T10:59:48.684Z",
          "overallTonnage": 4410
        },
        {
          "date": "2021-09-06T20:50:23.997Z",
          "overallTonnage": 4410
        },
        {
          "date": "2021-09-06T20:50:23.997Z",
          "overallTonnage": 4410
        },
        {
          "date": "2021-09-13T12:18:39.493Z",
          "overallTonnage": 4410
        },
        {
          "date": "2021-09-13T12:18:39.493Z",
          "overallTonnage": 4410
        },
        {
          "date": "2021-09-20T12:01:04.593Z",
          "overallTonnage": 4410
        },
        {
          "date": "2021-09-20T12:01:04.593Z",
          "overallTonnage": 4410
        },
        {
          "date": "2021-09-27T11:11:45.912Z",
          "overallTonnage": 5040
        },
        {
          "date": "2021-09-27T11:11:45.912Z",
          "overallTonnage": 5040
        },
        {
          "date": "2021-10-04T11:00:51.295Z",
          "overallTonnage": 5014
        },
        {
          "date": "2021-10-04T11:00:51.295Z",
          "overallTonnage": 5014
        },
        {
          "date": "2021-10-19T11:09:24.343Z",
          "overallTonnage": 3924
        },
        {
          "date": "2021-10-19T11:09:24.343Z",
          "overallTonnage": 3924
        },
        {
          "date": "2021-10-26T10:58:52.497Z",
          "overallTonnage": 4142
        },
        {
          "date": "2021-10-26T10:58:52.497Z",
          "overallTonnage": 4142
        },
        {
          "date": "2022-01-05T03:32:08.206Z",
          "overallTonnage": 6342
        },
        {
          "date": "2022-01-05T03:32:08.206Z",
          "overallTonnage": 6342
        },
        {
          "date": "2022-03-27T00:37:17.519Z",
          "overallTonnage": 6342
        },
        {
          "date": "2022-03-27T00:37:17.519Z",
          "overallTonnage": 6342
        },
        {
          "date": "2022-04-11T18:18:56.627Z",
          "overallTonnage": 6342
        },
        {
          "date": "2022-04-11T18:18:56.627Z",
          "overallTonnage": 6342
        },
        {
          "date": "2022-04-25T17:16:10.461Z",
          "overallTonnage": 6342
        },
        {
          "date": "2022-04-25T17:16:10.461Z",
          "overallTonnage": 6342
        },
        {
          "date": "2022-05-13T20:41:02.686Z",
          "overallTonnage": 6342
        },
        {
          "date": "2022-05-13T20:41:02.686Z",
          "overallTonnage": 6342
        },
        {
          "date": "2022-08-07T00:54:31.064Z",
          "overallTonnage": 5175
        },
        {
          "date": "2022-08-07T00:54:31.064Z",
          "overallTonnage": 5175
        },
        {
          "date": "2022-09-05T18:07:39.083Z",
          "overallTonnage": 5175
        },
        {
          "date": "2022-09-05T18:07:39.083Z",
          "overallTonnage": 5175
        },
        {
          "date": "2022-09-08T02:06:12.355Z",
          "overallTonnage": 1840
        },
        {
          "date": "2022-09-08T02:06:12.355Z",
          "overallTonnage": 1840
        },
        {
          "date": "2022-09-11T05:01:00.520Z",
          "overallTonnage": 2300
        },
        {
          "date": "2022-09-11T05:01:00.520Z",
          "overallTonnage": 2300
        },
        {
          "date": "2022-09-13T03:43:18.090Z",
          "overallTonnage": 4080
        },
        {
          "date": "2022-09-13T03:43:18.090Z",
          "overallTonnage": 4080
        },
        {
          "date": "2022-09-17T19:39:19.301Z",
          "overallTonnage": 6160
        },
        {
          "date": "2022-09-17T19:39:19.301Z",
          "overallTonnage": 6160
        },
        {
          "date": "2022-09-22T23:31:25.366Z",
          "overallTonnage": 4680
        },
        {
          "date": "2022-09-22T23:31:25.366Z",
          "overallTonnage": 4680
        },
        {
          "date": "2022-10-08T03:25:45.525Z",
          "overallTonnage": 5000
        },
        {
          "date": "2022-10-08T03:25:45.525Z",
          "overallTonnage": 5000
        },
        {
          "date": "2022-11-20T23:54:21.008Z",
          "overallTonnage": 4000
        },
        {
          "date": "2022-11-20T23:54:21.008Z",
          "overallTonnage": 4000
        },
        {
          "date": "2023-12-08T02:02:16.352Z",
          "overallTonnage": 5520
        },
        {
          "date": "2023-12-08T02:02:16.352Z",
          "overallTonnage": 5520
        },
        {
          "date": "2023-12-13T13:57:09.710Z",
          "overallTonnage": 4860
        },
        {
          "date": "2023-12-13T13:57:09.710Z",
          "overallTonnage": 4860
        },
        {
          "date": "2023-12-16T03:11:09.556Z",
          "overallTonnage": 5520
        },
        {
          "date": "2023-12-16T03:11:09.556Z",
          "overallTonnage": 5520
        },
        {
          "date": "2023-12-29T02:42:41.062Z",
          "overallTonnage": 5520
        },
        {
          "date": "2023-12-29T02:42:41.062Z",
          "overallTonnage": 5520
        },
        {
          "date": "2024-01-05T03:30:58.486Z",
          "overallTonnage": 5520
        },
        {
          "date": "2024-01-05T03:30:58.486Z",
          "overallTonnage": 5520
        },
        {
          "date": "2024-01-19T03:16:38.483Z",
          "overallTonnage": 5520
        },
        {
          "date": "2024-01-19T03:16:38.483Z",
          "overallTonnage": 5520
        },
        {
          "date": "2024-01-24T03:50:10.526Z",
          "overallTonnage": 5520
        },
        {
          "date": "2024-01-24T03:50:10.526Z",
          "overallTonnage": 5520
        }
      ]
    },
    "UprightRow": {
      "rpeInput": [
        [
          1,
          10,
          "0"
        ],
        [
          1,
          10,
          "0"
        ]
      ],
      "maxHistory": [
        {
          "date": "2023-12-05T04:43:10.437Z",
          "equivalentMax": 53
        },
        {
          "date": "2023-12-05T04:43:10.437Z",
          "equivalentMax": 53
        },
        {
          "date": "2023-12-13T14:03:43.281Z",
          "equivalentMax": 53
        },
        {
          "date": "2023-12-13T14:03:43.281Z",
          "equivalentMax": 53
        },
        {
          "date": "2023-12-19T04:02:14.228Z",
          "equivalentMax": 53
        },
        {
          "date": "2023-12-19T04:02:14.228Z",
          "equivalentMax": 53
        },
        {
          "date": "2023-12-26T02:45:15.299Z",
          "equivalentMax": 53
        },
        {
          "date": "2023-12-26T02:45:15.299Z",
          "equivalentMax": 53
        },
        {
          "date": "2023-12-29T02:45:52.451Z",
          "equivalentMax": 53
        },
        {
          "date": "2023-12-29T02:45:52.451Z",
          "equivalentMax": 53
        },
        {
          "date": "2024-01-08T23:45:36.322Z",
          "equivalentMax": 53
        },
        {
          "date": "2024-01-08T23:45:36.322Z",
          "equivalentMax": 53
        },
        {
          "date": "2024-01-16T02:45:29.202Z",
          "equivalentMax": 53
        },
        {
          "date": "2024-01-16T02:45:29.202Z",
          "equivalentMax": 53
        },
        {
          "date": "2024-01-24T03:56:11.026Z",
          "equivalentMax": 53
        },
        {
          "date": "2024-01-24T03:56:11.026Z",
          "equivalentMax": 53
        },
        {
          "date": "2024-01-30T04:02:23.368Z",
          "equivalentMax": 59
        },
        {
          "date": "2024-01-30T04:02:23.368Z",
          "equivalentMax": 59
        },
        {
          "date": "2024-02-06T02:44:25.111Z",
          "equivalentMax": 60
        }
      ],
      "tonnageInput": [
        [
          3,
          15,
          7,
          "35"
        ],
        [
          0,
          0,
          3,
          "0"
        ],
        [
          0,
          0,
          3,
          "0"
        ],
        [
          0,
          0,
          3,
          "0"
        ]
      ],
      "tonnageHistory": [
        {
          "date": "2023-12-05T04:43:10.437Z",
          "overallTonnage": 1575
        },
        {
          "date": "2023-12-05T04:43:10.437Z",
          "overallTonnage": 1575
        },
        {
          "date": "2023-12-13T14:03:43.281Z",
          "overallTonnage": 1575
        },
        {
          "date": "2023-12-13T14:03:43.281Z",
          "overallTonnage": 1575
        },
        {
          "date": "2023-12-19T04:02:14.228Z",
          "overallTonnage": 1575
        },
        {
          "date": "2023-12-19T04:02:14.228Z",
          "overallTonnage": 1575
        },
        {
          "date": "2023-12-26T02:45:15.299Z",
          "overallTonnage": 1575
        },
        {
          "date": "2023-12-26T02:45:15.299Z",
          "overallTonnage": 1575
        },
        {
          "date": "2023-12-29T02:45:52.451Z",
          "overallTonnage": 1575
        },
        {
          "date": "2023-12-29T02:45:52.451Z",
          "overallTonnage": 1575
        },
        {
          "date": "2024-01-08T23:45:36.322Z",
          "overallTonnage": 1575
        },
        {
          "date": "2024-01-08T23:45:36.322Z",
          "overallTonnage": 1575
        },
        {
          "date": "2024-01-16T02:45:29.202Z",
          "overallTonnage": 1575
        },
        {
          "date": "2024-01-16T02:45:29.202Z",
          "overallTonnage": 1575
        },
        {
          "date": "2024-01-24T03:56:11.026Z",
          "overallTonnage": 1575
        },
        {
          "date": "2024-01-24T03:56:11.026Z",
          "overallTonnage": 1575
        },
        {
          "date": "2024-01-30T04:02:23.368Z",
          "overallTonnage": 1575
        },
        {
          "date": "2024-01-30T04:02:23.368Z",
          "overallTonnage": 1575
        },
        {
          "date": "2024-02-06T02:44:25.111Z",
          "overallTonnage": 1680
        }
      ]
    },
    "FinishingCardio": {
      "maxHistory": [
        {
          "date": "2023-12-08T02:25:08.304Z",
          "equivalentMax": 110
        },
        {
          "date": "2023-12-08T02:25:08.304Z",
          "equivalentMax": 110
        }
      ],
      "tonnageHistory": [
        {
          "date": "2023-12-08T02:25:08.304Z",
          "overallTonnage": 3750
        },
        {
          "date": "2023-12-08T02:25:08.304Z",
          "overallTonnage": 3750
        }
      ]
    },
    "RomanianDeadlifts": {
      "rpeInput": [
        [
          1,
          10,
          "0"
        ],
        [
          1,
          10,
          "0"
        ]
      ],
      "maxHistory": [
        {
          "date": "2023-12-07T02:15:48.124Z",
          "equivalentMax": 105
        },
        {
          "date": "2023-12-07T02:15:48.124Z",
          "equivalentMax": 105
        },
        {
          "date": "2023-12-14T14:05:07.607Z",
          "equivalentMax": 105
        },
        {
          "date": "2023-12-14T14:05:07.607Z",
          "equivalentMax": 105
        },
        {
          "date": "2023-12-27T01:58:29.076Z",
          "equivalentMax": 134
        },
        {
          "date": "2023-12-27T01:58:29.076Z",
          "equivalentMax": 134
        },
        {
          "date": "2024-01-03T02:32:02.481Z",
          "equivalentMax": 134
        },
        {
          "date": "2024-01-03T02:32:02.481Z",
          "equivalentMax": 134
        },
        {
          "date": "2024-01-10T02:39:25.650Z",
          "equivalentMax": 167
        },
        {
          "date": "2024-01-10T02:39:25.650Z",
          "equivalentMax": 167
        },
        {
          "date": "2024-01-17T02:28:20.001Z",
          "equivalentMax": 167
        },
        {
          "date": "2024-01-17T02:28:20.001Z",
          "equivalentMax": 167
        },
        {
          "date": "2024-01-25T02:36:15.991Z",
          "equivalentMax": 250
        },
        {
          "date": "2024-01-25T02:36:15.991Z",
          "equivalentMax": 250
        },
        {
          "date": "2024-01-31T02:38:20.248Z",
          "equivalentMax": 235
        },
        {
          "date": "2024-01-31T02:38:20.248Z",
          "equivalentMax": 235
        },
        {
          "date": "2024-02-07T02:36:25.721Z",
          "equivalentMax": 241
        }
      ],
      "tonnageInput": [
        [
          0,
          12,
          6,
          "40"
        ],
        [
          3,
          12,
          7,
          "150"
        ],
        [
          0,
          0,
          3,
          "0"
        ],
        [
          0,
          0,
          3,
          "0"
        ]
      ],
      "tonnageHistory": [
        {
          "date": "2023-12-07T02:15:48.124Z",
          "overallTonnage": 1920
        },
        {
          "date": "2023-12-07T02:15:48.124Z",
          "overallTonnage": 1920
        },
        {
          "date": "2023-12-14T14:05:07.607Z",
          "overallTonnage": 2160
        },
        {
          "date": "2023-12-14T14:05:07.607Z",
          "overallTonnage": 2160
        },
        {
          "date": "2023-12-27T01:58:29.076Z",
          "overallTonnage": 2880
        },
        {
          "date": "2023-12-27T01:58:29.076Z",
          "overallTonnage": 2880
        },
        {
          "date": "2024-01-03T02:32:02.481Z",
          "overallTonnage": 2880
        },
        {
          "date": "2024-01-03T02:32:02.481Z",
          "overallTonnage": 2880
        },
        {
          "date": "2024-01-10T02:39:25.650Z",
          "overallTonnage": 3600
        },
        {
          "date": "2024-01-10T02:39:25.650Z",
          "overallTonnage": 3600
        },
        {
          "date": "2024-01-17T02:28:20.001Z",
          "overallTonnage": 3600
        },
        {
          "date": "2024-01-17T02:28:20.001Z",
          "overallTonnage": 3600
        },
        {
          "date": "2024-01-25T02:36:15.991Z",
          "overallTonnage": 5400
        },
        {
          "date": "2024-01-25T02:36:15.991Z",
          "overallTonnage": 5400
        },
        {
          "date": "2024-01-31T02:38:20.248Z",
          "overallTonnage": 5400
        },
        {
          "date": "2024-01-31T02:38:20.248Z",
          "overallTonnage": 5400
        },
        {
          "date": "2024-02-07T02:36:25.721Z",
          "overallTonnage": 5850
        }
      ]
    },
    "WalkingLunges": {
      "rpeInput": [
        [
          1,
          10,
          "0"
        ],
        [
          1,
          10,
          "0"
        ]
      ],
      "maxHistory": [
        {
          "date": "2023-12-07T02:16:56.562Z",
          "equivalentMax": 58
        },
        {
          "date": "2023-12-07T02:16:56.562Z",
          "equivalentMax": 58
        },
        {
          "date": "2023-12-09T03:29:05.933Z",
          "equivalentMax": 58
        },
        {
          "date": "2023-12-09T03:29:05.933Z",
          "equivalentMax": 58
        },
        {
          "date": "2023-12-14T14:13:01.077Z",
          "equivalentMax": 58
        },
        {
          "date": "2023-12-14T14:13:01.077Z",
          "equivalentMax": 58
        },
        {
          "date": "2023-12-17T03:20:36.248Z",
          "equivalentMax": 58
        },
        {
          "date": "2023-12-17T03:20:36.248Z",
          "equivalentMax": 58
        },
        {
          "date": "2023-12-27T02:09:55.050Z",
          "equivalentMax": 58
        },
        {
          "date": "2023-12-27T02:09:55.050Z",
          "equivalentMax": 58
        },
        {
          "date": "2024-01-03T02:46:27.924Z",
          "equivalentMax": 58
        },
        {
          "date": "2024-01-03T02:46:27.924Z",
          "equivalentMax": 58
        },
        {
          "date": "2024-01-07T03:24:44.704Z",
          "equivalentMax": 58
        },
        {
          "date": "2024-01-07T03:24:44.704Z",
          "equivalentMax": 58
        },
        {
          "date": "2024-01-25T02:52:40.740Z",
          "equivalentMax": 58
        },
        {
          "date": "2024-01-25T02:52:40.740Z",
          "equivalentMax": 58
        }
      ],
      "tonnageInput": [
        [
          3,
          20,
          7,
          "35"
        ],
        [
          0,
          0,
          3,
          "0"
        ],
        [
          0,
          0,
          3,
          "0"
        ],
        [
          0,
          0,
          3,
          "0"
        ]
      ],
      "tonnageHistory": [
        {
          "date": "2023-12-07T02:16:56.562Z",
          "overallTonnage": 2100
        },
        {
          "date": "2023-12-07T02:16:56.562Z",
          "overallTonnage": 2100
        },
        {
          "date": "2023-12-09T03:29:05.933Z",
          "overallTonnage": 2100
        },
        {
          "date": "2023-12-09T03:29:05.933Z",
          "overallTonnage": 2100
        },
        {
          "date": "2023-12-14T14:13:01.077Z",
          "overallTonnage": 2100
        },
        {
          "date": "2023-12-14T14:13:01.077Z",
          "overallTonnage": 2100
        },
        {
          "date": "2023-12-17T03:20:36.248Z",
          "overallTonnage": 2100
        },
        {
          "date": "2023-12-17T03:20:36.248Z",
          "overallTonnage": 2100
        },
        {
          "date": "2023-12-27T02:09:55.050Z",
          "overallTonnage": 2100
        },
        {
          "date": "2023-12-27T02:09:55.050Z",
          "overallTonnage": 2100
        },
        {
          "date": "2024-01-03T02:46:27.924Z",
          "overallTonnage": 2100
        },
        {
          "date": "2024-01-03T02:46:27.924Z",
          "overallTonnage": 2100
        },
        {
          "date": "2024-01-07T03:24:44.704Z",
          "overallTonnage": 2100
        },
        {
          "date": "2024-01-07T03:24:44.704Z",
          "overallTonnage": 2100
        },
        {
          "date": "2024-01-25T02:52:40.740Z",
          "overallTonnage": 2100
        },
        {
          "date": "2024-01-25T02:52:40.740Z",
          "overallTonnage": 2100
        }
      ]
    },
    "PushUps": {
      "rpeInput": [
        [
          1,
          10,
          "0"
        ],
        [
          1,
          10,
          "0"
        ]
      ],
      "maxHistory": [
        {
          "date": "2023-12-08T02:07:34.193Z",
          "equivalentMax": 352
        },
        {
          "date": "2023-12-08T02:07:34.193Z",
          "equivalentMax": 352
        },
        {
          "date": "2023-12-16T03:18:39.574Z",
          "equivalentMax": 352
        },
        {
          "date": "2023-12-16T03:18:39.574Z",
          "equivalentMax": 352
        },
        {
          "date": "2024-01-05T03:36:13.179Z",
          "equivalentMax": 352
        },
        {
          "date": "2024-01-05T03:36:13.179Z",
          "equivalentMax": 352
        },
        {
          "date": "2024-01-12T03:27:02.783Z",
          "equivalentMax": 384
        },
        {
          "date": "2024-01-12T03:27:02.783Z",
          "equivalentMax": 384
        },
        {
          "date": "2024-02-02T02:33:37.022Z",
          "equivalentMax": 387
        },
        {
          "date": "2024-02-02T02:33:37.022Z",
          "equivalentMax": 387
        },
        {
          "date": "2024-02-09T02:24:03.280Z",
          "equivalentMax": 404
        }
      ],
      "tonnageInput": [
        [
          3,
          15,
          7,
          "230"
        ],
        [
          0,
          0,
          3,
          "0"
        ],
        [
          0,
          0,
          3,
          "0"
        ],
        [
          0,
          0,
          3,
          "0"
        ]
      ],
      "tonnageHistory": [
        {
          "date": "2023-12-08T02:07:34.193Z",
          "overallTonnage": 6900
        },
        {
          "date": "2023-12-08T02:07:34.193Z",
          "overallTonnage": 6900
        },
        {
          "date": "2023-12-16T03:18:39.574Z",
          "overallTonnage": 6900
        },
        {
          "date": "2023-12-16T03:18:39.574Z",
          "overallTonnage": 6900
        },
        {
          "date": "2024-01-05T03:36:13.179Z",
          "overallTonnage": 6900
        },
        {
          "date": "2024-01-05T03:36:13.179Z",
          "overallTonnage": 6900
        },
        {
          "date": "2024-01-12T03:27:02.783Z",
          "overallTonnage": 8280
        },
        {
          "date": "2024-01-12T03:27:02.783Z",
          "overallTonnage": 8280
        },
        {
          "date": "2024-02-02T02:33:37.022Z",
          "overallTonnage": 10350
        },
        {
          "date": "2024-02-02T02:33:37.022Z",
          "overallTonnage": 10350
        },
        {
          "date": "2024-02-09T02:24:03.280Z",
          "overallTonnage": 11730
        }
      ]
    },
    "DumbbellCurls": {
      "rpeInput": [
        [
          1,
          10,
          "0"
        ],
        [
          1,
          10,
          "0"
        ]
      ],
      "maxHistory": [
        {
          "date": "2021-07-06T01:22:10.150Z",
          "equivalentMax": 67
        },
        {
          "date": "2021-07-06T01:22:10.150Z",
          "equivalentMax": 67
        },
        {
          "date": "2021-07-13T03:16:47.078Z",
          "equivalentMax": 90
        },
        {
          "date": "2021-07-13T03:16:47.078Z",
          "equivalentMax": 90
        },
        {
          "date": "2021-08-30T11:08:38.822Z",
          "equivalentMax": 127
        },
        {
          "date": "2021-08-30T11:08:38.822Z",
          "equivalentMax": 127
        },
        {
          "date": "2021-09-06T21:01:48.469Z",
          "equivalentMax": 127
        },
        {
          "date": "2021-09-06T21:01:48.469Z",
          "equivalentMax": 127
        },
        {
          "date": "2021-09-13T12:18:57.330Z",
          "equivalentMax": 120
        },
        {
          "date": "2021-09-13T12:18:57.330Z",
          "equivalentMax": 120
        },
        {
          "date": "2021-09-27T11:22:45.410Z",
          "equivalentMax": 133
        },
        {
          "date": "2021-09-27T11:22:45.410Z",
          "equivalentMax": 133
        },
        {
          "date": "2021-10-04T11:20:10.904Z",
          "equivalentMax": 133
        },
        {
          "date": "2021-10-04T11:20:10.904Z",
          "equivalentMax": 133
        },
        {
          "date": "2023-12-08T02:09:49.839Z",
          "equivalentMax": 60
        },
        {
          "date": "2023-12-08T02:09:49.839Z",
          "equivalentMax": 60
        },
        {
          "date": "2023-12-16T03:26:50.936Z",
          "equivalentMax": 60
        },
        {
          "date": "2023-12-16T03:26:50.936Z",
          "equivalentMax": 60
        },
        {
          "date": "2024-01-05T04:15:10.888Z",
          "equivalentMax": 60
        },
        {
          "date": "2024-01-05T04:15:10.888Z",
          "equivalentMax": 60
        },
        {
          "date": "2024-01-12T03:41:28.891Z",
          "equivalentMax": 67
        },
        {
          "date": "2024-01-12T03:41:28.891Z",
          "equivalentMax": 67
        },
        {
          "date": "2024-01-19T03:25:27.623Z",
          "equivalentMax": 60
        },
        {
          "date": "2024-01-19T03:25:27.623Z",
          "equivalentMax": 60
        },
        {
          "date": "2024-02-09T02:30:32.867Z",
          "equivalentMax": 67
        }
      ],
      "tonnageInput": [
        [
          0,
          20,
          7,
          "40"
        ],
        [
          4,
          15,
          7,
          "40"
        ],
        [
          0,
          0,
          3,
          "0"
        ],
        [
          0,
          0,
          3,
          "0"
        ]
      ],
      "tonnageHistory": [
        {
          "date": "2021-07-06T01:22:10.150Z",
          "overallTonnage": 2000
        },
        {
          "date": "2021-07-06T01:22:10.150Z",
          "overallTonnage": 2000
        },
        {
          "date": "2021-07-13T03:16:47.078Z",
          "overallTonnage": 2700
        },
        {
          "date": "2021-07-13T03:16:47.078Z",
          "overallTonnage": 2700
        },
        {
          "date": "2021-08-30T11:08:38.822Z",
          "overallTonnage": 2040
        },
        {
          "date": "2021-08-30T11:08:38.822Z",
          "overallTonnage": 2040
        },
        {
          "date": "2021-09-06T21:01:48.469Z",
          "overallTonnage": 2400
        },
        {
          "date": "2021-09-06T21:01:48.469Z",
          "overallTonnage": 2400
        },
        {
          "date": "2021-09-13T12:18:57.330Z",
          "overallTonnage": 1800
        },
        {
          "date": "2021-09-13T12:18:57.330Z",
          "overallTonnage": 1800
        },
        {
          "date": "2021-09-27T11:22:45.410Z",
          "overallTonnage": 2400
        },
        {
          "date": "2021-09-27T11:22:45.410Z",
          "overallTonnage": 2400
        },
        {
          "date": "2021-10-04T11:20:10.904Z",
          "overallTonnage": 2600
        },
        {
          "date": "2021-10-04T11:20:10.904Z",
          "overallTonnage": 2600
        },
        {
          "date": "2023-12-08T02:09:49.839Z",
          "overallTonnage": 1800
        },
        {
          "date": "2023-12-08T02:09:49.839Z",
          "overallTonnage": 1800
        },
        {
          "date": "2023-12-16T03:26:50.936Z",
          "overallTonnage": 1800
        },
        {
          "date": "2023-12-16T03:26:50.936Z",
          "overallTonnage": 1800
        },
        {
          "date": "2024-01-05T04:15:10.888Z",
          "overallTonnage": 2400
        },
        {
          "date": "2024-01-05T04:15:10.888Z",
          "overallTonnage": 2400
        },
        {
          "date": "2024-01-12T03:41:28.891Z",
          "overallTonnage": 2800
        },
        {
          "date": "2024-01-12T03:41:28.891Z",
          "overallTonnage": 2800
        },
        {
          "date": "2024-01-19T03:25:27.623Z",
          "overallTonnage": 2400
        },
        {
          "date": "2024-01-19T03:25:27.623Z",
          "overallTonnage": 2400
        },
        {
          "date": "2024-02-09T02:30:32.867Z",
          "overallTonnage": 2400
        }
      ]
    },
    "TricepExtension": {
      "rpeInput": [
        [
          1,
          10,
          "0"
        ],
        [
          1,
          10,
          "0"
        ]
      ],
      "maxHistory": [
        {
          "date": "2023-12-08T02:10:10.053Z",
          "equivalentMax": 60
        },
        {
          "date": "2023-12-08T02:10:10.053Z",
          "equivalentMax": 60
        },
        {
          "date": "2023-12-16T03:27:00.979Z",
          "equivalentMax": 60
        },
        {
          "date": "2023-12-16T03:27:00.979Z",
          "equivalentMax": 60
        },
        {
          "date": "2024-01-05T04:15:51.928Z",
          "equivalentMax": 63
        },
        {
          "date": "2024-01-05T04:15:51.928Z",
          "equivalentMax": 63
        },
        {
          "date": "2024-01-12T03:42:01.079Z",
          "equivalentMax": 67
        },
        {
          "date": "2024-01-12T03:42:01.079Z",
          "equivalentMax": 67
        },
        {
          "date": "2024-01-19T03:25:47.363Z",
          "equivalentMax": 67
        },
        {
          "date": "2024-01-19T03:25:47.363Z",
          "equivalentMax": 67
        },
        {
          "date": "2024-02-09T02:43:46.149Z",
          "equivalentMax": 126
        }
      ],
      "tonnageInput": [
        [
          4,
          20,
          7,
          "40"
        ],
        [
          0,
          15,
          7,
          "40"
        ],
        [
          0,
          0,
          3,
          "0"
        ],
        [
          0,
          0,
          3,
          "0"
        ]
      ],
      "tonnageHistory": [
        {
          "date": "2023-12-08T02:10:10.053Z",
          "overallTonnage": 1800
        },
        {
          "date": "2023-12-08T02:10:10.053Z",
          "overallTonnage": 1800
        },
        {
          "date": "2023-12-16T03:27:00.979Z",
          "overallTonnage": 1800
        },
        {
          "date": "2023-12-16T03:27:00.979Z",
          "overallTonnage": 1800
        },
        {
          "date": "2024-01-05T04:15:51.928Z",
          "overallTonnage": 2560
        },
        {
          "date": "2024-01-05T04:15:51.928Z",
          "overallTonnage": 2560
        },
        {
          "date": "2024-01-12T03:42:01.079Z",
          "overallTonnage": 2800
        },
        {
          "date": "2024-01-12T03:42:01.079Z",
          "overallTonnage": 2800
        },
        {
          "date": "2024-01-19T03:25:47.363Z",
          "overallTonnage": 3200
        },
        {
          "date": "2024-01-19T03:25:47.363Z",
          "overallTonnage": 3200
        },
        {
          "date": "2024-02-09T02:43:46.149Z",
          "overallTonnage": 4275
        }
      ]
    },
    "LegComplexStretch": {
      "maxHistory": [],
      "tonnageHistory": []
    },
    "SidePlanks": {
      "rpeInput": [
        [
          1,
          10,
          "0"
        ],
        [
          1,
          10,
          "0"
        ]
      ],
      "maxHistory": [
        {
          "date": "2022-12-17T20:29:48.799Z",
          "equivalentMax": 60
        },
        {
          "date": "2022-12-17T20:29:48.799Z",
          "equivalentMax": 60
        },
        {
          "date": "2022-12-17T20:29:48.799Z",
          "equivalentMax": 60
        },
        {
          "date": "2022-12-17T20:29:48.799Z",
          "equivalentMax": 60
        }
      ],
      "tonnageInput": [
        [
          3,
          1,
          10,
          "60"
        ],
        [
          0,
          12,
          10,
          "0"
        ],
        [
          0,
          12,
          10,
          "0"
        ],
        [
          0,
          0,
          10,
          "0"
        ]
      ],
      "tonnageHistory": [
        {
          "date": "2022-12-17T20:29:48.799Z",
          "overallTonnage": 180
        },
        {
          "date": "2022-12-17T20:29:48.799Z",
          "overallTonnage": 180
        },
        {
          "date": "2022-12-17T20:29:48.799Z",
          "overallTonnage": 180
        },
        {
          "date": "2022-12-17T20:29:48.799Z",
          "overallTonnage": 180
        }
      ]
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
      "rpeInput": [
        [
          1,
          10,
          "225"
        ],
        [
          1,
          8,
          "0"
        ]
      ],
      "maxHistory": [
        {
          "date": "2021-07-09T01:34:31.845Z",
          "equivalentMax": 120
        },
        {
          "date": "2021-07-09T01:34:31.845Z",
          "equivalentMax": 120
        },
        {
          "date": "2021-07-17T02:02:25.297Z",
          "equivalentMax": 133
        },
        {
          "date": "2021-07-17T02:02:25.297Z",
          "equivalentMax": 133
        },
        {
          "date": "2021-08-20T10:57:13.896Z",
          "equivalentMax": 158
        },
        {
          "date": "2021-08-20T10:57:13.896Z",
          "equivalentMax": 158
        },
        {
          "date": "2021-09-03T11:02:30.756Z",
          "equivalentMax": 171
        },
        {
          "date": "2021-09-03T11:02:30.756Z",
          "equivalentMax": 171
        },
        {
          "date": "2021-09-10T11:04:31.541Z",
          "equivalentMax": 187
        },
        {
          "date": "2021-09-10T11:04:31.541Z",
          "equivalentMax": 187
        },
        {
          "date": "2021-09-17T11:10:27.980Z",
          "equivalentMax": 193
        },
        {
          "date": "2021-09-17T11:10:27.980Z",
          "equivalentMax": 193
        },
        {
          "date": "2021-09-24T11:12:24.315Z",
          "equivalentMax": 193
        },
        {
          "date": "2021-09-24T11:12:24.315Z",
          "equivalentMax": 193
        },
        {
          "date": "2021-10-09T19:36:03.076Z",
          "equivalentMax": 186
        },
        {
          "date": "2021-10-09T19:36:03.076Z",
          "equivalentMax": 186
        },
        {
          "date": "2022-01-05T03:46:14.745Z",
          "equivalentMax": 181
        },
        {
          "date": "2022-01-05T03:46:14.745Z",
          "equivalentMax": 181
        },
        {
          "date": "2022-02-12T17:09:45.367Z",
          "equivalentMax": 171
        },
        {
          "date": "2022-02-12T17:09:45.367Z",
          "equivalentMax": 171
        },
        {
          "date": "2022-03-02T19:26:20.800Z",
          "equivalentMax": 180
        },
        {
          "date": "2022-03-02T19:26:20.800Z",
          "equivalentMax": 180
        },
        {
          "date": "2022-03-21T19:40:22.361Z",
          "equivalentMax": 171
        },
        {
          "date": "2022-03-21T19:40:22.361Z",
          "equivalentMax": 171
        },
        {
          "date": "2022-03-26T01:54:54.775Z",
          "equivalentMax": 198
        },
        {
          "date": "2022-03-26T01:54:54.775Z",
          "equivalentMax": 198
        },
        {
          "date": "2022-03-30T18:57:47.740Z",
          "equivalentMax": 198
        },
        {
          "date": "2022-03-30T18:57:47.740Z",
          "equivalentMax": 198
        },
        {
          "date": "2022-04-09T17:22:49.783Z",
          "equivalentMax": 204
        },
        {
          "date": "2022-04-09T17:22:49.783Z",
          "equivalentMax": 204
        },
        {
          "date": "2022-04-15T02:00:38.582Z",
          "equivalentMax": 180
        },
        {
          "date": "2022-04-15T02:00:38.582Z",
          "equivalentMax": 180
        },
        {
          "date": "2022-04-25T17:09:25.867Z",
          "equivalentMax": 189
        },
        {
          "date": "2022-04-25T17:09:25.867Z",
          "equivalentMax": 189
        },
        {
          "date": "2022-04-28T20:10:59.075Z",
          "equivalentMax": 209
        },
        {
          "date": "2022-04-28T20:10:59.075Z",
          "equivalentMax": 209
        },
        {
          "date": "2022-05-25T13:35:11.611Z",
          "equivalentMax": 189
        },
        {
          "date": "2022-05-25T13:35:11.611Z",
          "equivalentMax": 189
        },
        {
          "date": "2022-06-09T00:29:18.629Z",
          "equivalentMax": 196
        },
        {
          "date": "2022-06-09T00:29:18.629Z",
          "equivalentMax": 196
        },
        {
          "date": "2022-07-31T01:11:40.222Z",
          "equivalentMax": 133
        },
        {
          "date": "2022-07-31T01:11:40.222Z",
          "equivalentMax": 133
        },
        {
          "date": "2022-08-03T11:50:34.700Z",
          "equivalentMax": 171
        },
        {
          "date": "2022-08-03T11:50:34.700Z",
          "equivalentMax": 171
        },
        {
          "date": "2022-08-14T21:10:22.287Z",
          "equivalentMax": 189
        },
        {
          "date": "2022-08-14T21:10:22.287Z",
          "equivalentMax": 189
        },
        {
          "date": "2022-08-18T01:35:43.648Z",
          "equivalentMax": 196
        },
        {
          "date": "2022-08-18T01:35:43.648Z",
          "equivalentMax": 196
        },
        {
          "date": "2022-12-09T01:57:50.432Z",
          "equivalentMax": 172
        },
        {
          "date": "2022-12-09T01:57:50.432Z",
          "equivalentMax": 172
        },
        {
          "date": "2022-12-21T01:25:34.677Z",
          "equivalentMax": 197
        },
        {
          "date": "2022-12-21T01:25:34.677Z",
          "equivalentMax": 197
        },
        {
          "date": "2022-12-26T21:29:28.348Z",
          "equivalentMax": 210
        },
        {
          "date": "2022-12-26T21:29:28.348Z",
          "equivalentMax": 210
        },
        {
          "date": "2023-02-10T02:12:05.195Z",
          "equivalentMax": 199
        },
        {
          "date": "2023-02-10T02:12:05.195Z",
          "equivalentMax": 199
        },
        {
          "date": "2023-02-15T02:44:30.695Z",
          "equivalentMax": 207
        },
        {
          "date": "2023-02-15T02:44:30.695Z",
          "equivalentMax": 207
        },
        {
          "date": "2023-02-22T02:50:39.331Z",
          "equivalentMax": 221
        },
        {
          "date": "2023-02-22T02:50:39.331Z",
          "equivalentMax": 221
        },
        {
          "date": "2023-08-29T02:30:46.114Z",
          "equivalentMax": 191
        },
        {
          "date": "2023-08-29T02:30:46.114Z",
          "equivalentMax": 191
        },
        {
          "date": "2023-08-31T02:00:25.505Z",
          "equivalentMax": 196
        },
        {
          "date": "2023-08-31T02:00:25.505Z",
          "equivalentMax": 196
        },
        {
          "date": "2023-09-01T02:01:08.050Z",
          "equivalentMax": 203
        },
        {
          "date": "2023-09-01T02:01:08.050Z",
          "equivalentMax": 203
        },
        {
          "date": "2023-09-03T00:33:46.709Z",
          "equivalentMax": 204
        },
        {
          "date": "2023-09-03T00:33:46.709Z",
          "equivalentMax": 204
        },
        {
          "date": "2023-09-07T01:39:03.437Z",
          "equivalentMax": 203
        },
        {
          "date": "2023-09-07T01:39:03.437Z",
          "equivalentMax": 203
        },
        {
          "date": "2023-09-08T00:49:26.942Z",
          "equivalentMax": 209
        },
        {
          "date": "2023-09-08T00:49:26.942Z",
          "equivalentMax": 209
        },
        {
          "date": "2023-09-20T01:56:46.438Z",
          "equivalentMax": 203
        },
        {
          "date": "2023-09-20T01:56:46.438Z",
          "equivalentMax": 203
        },
        {
          "date": "2023-09-22T02:31:29.881Z",
          "equivalentMax": 203
        },
        {
          "date": "2023-09-22T02:31:29.881Z",
          "equivalentMax": 203
        },
        {
          "date": "2023-09-22T20:27:37.863Z",
          "equivalentMax": 215
        },
        {
          "date": "2023-09-22T20:27:37.863Z",
          "equivalentMax": 215
        },
        {
          "date": "2023-09-26T02:44:05.527Z",
          "equivalentMax": 223
        },
        {
          "date": "2023-09-26T02:44:05.527Z",
          "equivalentMax": 223
        },
        {
          "date": "2023-09-28T02:01:54.010Z",
          "equivalentMax": 214
        },
        {
          "date": "2023-09-28T02:01:54.010Z",
          "equivalentMax": 214
        },
        {
          "date": "2023-10-01T01:22:28.276Z",
          "equivalentMax": 219
        },
        {
          "date": "2023-10-01T01:22:28.276Z",
          "equivalentMax": 219
        },
        {
          "date": "2023-10-05T02:52:05.751Z",
          "equivalentMax": 219
        },
        {
          "date": "2023-10-05T02:52:05.751Z",
          "equivalentMax": 219
        },
        {
          "date": "2023-10-06T00:45:32.126Z",
          "equivalentMax": 219
        },
        {
          "date": "2023-10-06T00:45:32.126Z",
          "equivalentMax": 219
        },
        {
          "date": "2023-10-08T00:18:10.563Z",
          "equivalentMax": 219
        },
        {
          "date": "2023-10-08T00:18:10.563Z",
          "equivalentMax": 219
        },
        {
          "date": "2023-10-10T12:15:22.080Z",
          "equivalentMax": 222
        },
        {
          "date": "2023-10-10T12:15:22.080Z",
          "equivalentMax": 222
        },
        {
          "date": "2023-10-12T02:02:31.945Z",
          "equivalentMax": 219
        },
        {
          "date": "2023-10-12T02:02:31.945Z",
          "equivalentMax": 219
        },
        {
          "date": "2023-10-13T01:20:04.664Z",
          "equivalentMax": 219
        },
        {
          "date": "2023-10-13T01:20:04.664Z",
          "equivalentMax": 219
        },
        {
          "date": "2023-10-14T23:44:25.742Z",
          "equivalentMax": 219
        },
        {
          "date": "2023-10-14T23:44:25.742Z",
          "equivalentMax": 219
        },
        {
          "date": "2023-10-17T03:48:38.265Z",
          "equivalentMax": 222
        },
        {
          "date": "2023-10-17T03:48:38.265Z",
          "equivalentMax": 222
        },
        {
          "date": "2023-10-19T01:26:26.929Z",
          "equivalentMax": 222
        },
        {
          "date": "2023-10-19T01:26:26.929Z",
          "equivalentMax": 222
        },
        {
          "date": "2023-10-21T19:48:22.868Z",
          "equivalentMax": 222
        },
        {
          "date": "2023-10-21T19:48:22.868Z",
          "equivalentMax": 222
        },
        {
          "date": "2023-10-24T01:04:41.425Z",
          "equivalentMax": 228
        },
        {
          "date": "2023-10-24T01:04:41.425Z",
          "equivalentMax": 228
        },
        {
          "date": "2023-10-26T02:45:26.546Z",
          "equivalentMax": 224
        },
        {
          "date": "2023-10-26T02:45:26.546Z",
          "equivalentMax": 224
        },
        {
          "date": "2023-10-27T00:58:14.182Z",
          "equivalentMax": 207
        },
        {
          "date": "2023-10-27T00:58:14.182Z",
          "equivalentMax": 207
        },
        {
          "date": "2023-10-29T20:15:25.907Z",
          "equivalentMax": 226
        },
        {
          "date": "2023-10-29T20:15:25.907Z",
          "equivalentMax": 226
        },
        {
          "date": "2023-11-02T01:30:08.200Z",
          "equivalentMax": 225
        },
        {
          "date": "2023-11-02T01:30:08.200Z",
          "equivalentMax": 225
        },
        {
          "date": "2023-11-03T01:10:43.343Z",
          "equivalentMax": 224
        },
        {
          "date": "2023-11-03T01:10:43.343Z",
          "equivalentMax": 224
        },
        {
          "date": "2023-11-04T20:29:07.494Z",
          "equivalentMax": 233
        },
        {
          "date": "2023-11-04T20:29:07.494Z",
          "equivalentMax": 233
        },
        {
          "date": "2023-11-09T01:38:01.767Z",
          "equivalentMax": 226
        },
        {
          "date": "2023-11-09T01:38:01.767Z",
          "equivalentMax": 226
        }
      ],
      "tonnageInput": [
        [
          0,
          1,
          8,
          "215"
        ],
        [
          3,
          1,
          6,
          "195"
        ],
        [
          0,
          2,
          8,
          "195"
        ],
        [
          0,
          2,
          8,
          "185"
        ]
      ],
      "tonnageHistory": [
        {
          "date": "2021-07-09T01:34:31.845Z",
          "overallTonnage": 3120
        },
        {
          "date": "2021-07-09T01:34:31.845Z",
          "overallTonnage": 3120
        },
        {
          "date": "2021-07-17T02:02:25.297Z",
          "overallTonnage": 3160
        },
        {
          "date": "2021-07-17T02:02:25.297Z",
          "overallTonnage": 3160
        },
        {
          "date": "2021-08-20T10:57:13.896Z",
          "overallTonnage": 1920
        },
        {
          "date": "2021-08-20T10:57:13.896Z",
          "overallTonnage": 1920
        },
        {
          "date": "2021-09-03T11:02:30.756Z",
          "overallTonnage": 3160
        },
        {
          "date": "2021-09-03T11:02:30.756Z",
          "overallTonnage": 3160
        },
        {
          "date": "2021-09-10T11:04:31.541Z",
          "overallTonnage": 2740
        },
        {
          "date": "2021-09-10T11:04:31.541Z",
          "overallTonnage": 2740
        },
        {
          "date": "2021-09-17T11:10:27.980Z",
          "overallTonnage": 2985
        },
        {
          "date": "2021-09-17T11:10:27.980Z",
          "overallTonnage": 2985
        },
        {
          "date": "2021-09-24T11:12:24.315Z",
          "overallTonnage": 2755
        },
        {
          "date": "2021-09-24T11:12:24.315Z",
          "overallTonnage": 2755
        },
        {
          "date": "2021-10-09T19:36:03.076Z",
          "overallTonnage": 2785
        },
        {
          "date": "2021-10-09T19:36:03.076Z",
          "overallTonnage": 2785
        },
        {
          "date": "2022-01-05T03:46:14.745Z",
          "overallTonnage": 2630
        },
        {
          "date": "2022-01-05T03:46:14.745Z",
          "overallTonnage": 2630
        },
        {
          "date": "2022-02-12T17:09:45.367Z",
          "overallTonnage": 3240
        },
        {
          "date": "2022-02-12T17:09:45.367Z",
          "overallTonnage": 3240
        },
        {
          "date": "2022-03-02T19:26:20.800Z",
          "overallTonnage": 3240
        },
        {
          "date": "2022-03-02T19:26:20.800Z",
          "overallTonnage": 3240
        },
        {
          "date": "2022-03-21T19:40:22.361Z",
          "overallTonnage": 3240
        },
        {
          "date": "2022-03-21T19:40:22.361Z",
          "overallTonnage": 3240
        },
        {
          "date": "2022-03-26T01:54:54.775Z",
          "overallTonnage": 3580
        },
        {
          "date": "2022-03-26T01:54:54.775Z",
          "overallTonnage": 3580
        },
        {
          "date": "2022-03-30T18:57:47.740Z",
          "overallTonnage": 3580
        },
        {
          "date": "2022-03-30T18:57:47.740Z",
          "overallTonnage": 3580
        },
        {
          "date": "2022-04-09T17:22:49.783Z",
          "overallTonnage": 3590
        },
        {
          "date": "2022-04-09T17:22:49.783Z",
          "overallTonnage": 3590
        },
        {
          "date": "2022-04-15T02:00:38.582Z",
          "overallTonnage": 2700
        },
        {
          "date": "2022-04-15T02:00:38.582Z",
          "overallTonnage": 2700
        },
        {
          "date": "2022-04-25T17:09:25.867Z",
          "overallTonnage": 4860
        },
        {
          "date": "2022-04-25T17:09:25.867Z",
          "overallTonnage": 4860
        },
        {
          "date": "2022-04-28T20:10:59.075Z",
          "overallTonnage": 3910
        },
        {
          "date": "2022-04-28T20:10:59.075Z",
          "overallTonnage": 3910
        },
        {
          "date": "2022-05-25T13:35:11.611Z",
          "overallTonnage": 4320
        },
        {
          "date": "2022-05-25T13:35:11.611Z",
          "overallTonnage": 4320
        },
        {
          "date": "2022-06-09T00:29:18.629Z",
          "overallTonnage": 3970
        },
        {
          "date": "2022-06-09T00:29:18.629Z",
          "overallTonnage": 3970
        },
        {
          "date": "2022-07-31T01:11:40.222Z",
          "overallTonnage": 3960
        },
        {
          "date": "2022-07-31T01:11:40.222Z",
          "overallTonnage": 3960
        },
        {
          "date": "2022-08-03T11:50:34.700Z",
          "overallTonnage": 3240
        },
        {
          "date": "2022-08-03T11:50:34.700Z",
          "overallTonnage": 3240
        },
        {
          "date": "2022-08-14T21:10:22.287Z",
          "overallTonnage": 3780
        },
        {
          "date": "2022-08-14T21:10:22.287Z",
          "overallTonnage": 3780
        },
        {
          "date": "2022-08-18T01:35:43.648Z",
          "overallTonnage": 3560
        },
        {
          "date": "2022-08-18T01:35:43.648Z",
          "overallTonnage": 3560
        },
        {
          "date": "2022-12-09T01:57:50.432Z",
          "overallTonnage": 3240
        },
        {
          "date": "2022-12-09T01:57:50.432Z",
          "overallTonnage": 3240
        },
        {
          "date": "2022-12-21T01:25:34.677Z",
          "overallTonnage": 2940
        },
        {
          "date": "2022-12-21T01:25:34.677Z",
          "overallTonnage": 2940
        },
        {
          "date": "2022-12-26T21:29:28.348Z",
          "overallTonnage": 3250
        },
        {
          "date": "2022-12-26T21:29:28.348Z",
          "overallTonnage": 3250
        },
        {
          "date": "2023-02-10T02:12:05.195Z",
          "overallTonnage": 3240
        },
        {
          "date": "2023-02-10T02:12:05.195Z",
          "overallTonnage": 3240
        },
        {
          "date": "2023-02-15T02:44:30.695Z",
          "overallTonnage": 3210
        },
        {
          "date": "2023-02-15T02:44:30.695Z",
          "overallTonnage": 3210
        },
        {
          "date": "2023-02-22T02:50:39.331Z",
          "overallTonnage": 3020
        },
        {
          "date": "2023-02-22T02:50:39.331Z",
          "overallTonnage": 3020
        },
        {
          "date": "2023-08-29T02:30:46.114Z",
          "overallTonnage": 1800
        },
        {
          "date": "2023-08-29T02:30:46.114Z",
          "overallTonnage": 1800
        },
        {
          "date": "2023-08-31T02:00:25.505Z",
          "overallTonnage": 2610
        },
        {
          "date": "2023-08-31T02:00:25.505Z",
          "overallTonnage": 2610
        },
        {
          "date": "2023-09-01T02:01:08.050Z",
          "overallTonnage": 1485
        },
        {
          "date": "2023-09-01T02:01:08.050Z",
          "overallTonnage": 1485
        },
        {
          "date": "2023-09-03T00:33:46.709Z",
          "overallTonnage": 1130
        },
        {
          "date": "2023-09-03T00:33:46.709Z",
          "overallTonnage": 1130
        },
        {
          "date": "2023-09-07T01:39:03.437Z",
          "overallTonnage": 1485
        },
        {
          "date": "2023-09-07T01:39:03.437Z",
          "overallTonnage": 1485
        },
        {
          "date": "2023-09-08T00:49:26.942Z",
          "overallTonnage": 1400
        },
        {
          "date": "2023-09-08T00:49:26.942Z",
          "overallTonnage": 1400
        },
        {
          "date": "2023-09-20T01:56:46.438Z",
          "overallTonnage": 3195
        },
        {
          "date": "2023-09-20T01:56:46.438Z",
          "overallTonnage": 3195
        },
        {
          "date": "2023-09-22T02:31:29.881Z",
          "overallTonnage": 1485
        },
        {
          "date": "2023-09-22T02:31:29.881Z",
          "overallTonnage": 1485
        },
        {
          "date": "2023-09-22T20:27:37.863Z",
          "overallTonnage": 1420
        },
        {
          "date": "2023-09-22T20:27:37.863Z",
          "overallTonnage": 1420
        },
        {
          "date": "2023-09-26T02:44:05.527Z",
          "overallTonnage": 5160
        },
        {
          "date": "2023-09-26T02:44:05.527Z",
          "overallTonnage": 5160
        },
        {
          "date": "2023-09-28T02:01:54.010Z",
          "overallTonnage": 1480
        },
        {
          "date": "2023-09-28T02:01:54.010Z",
          "overallTonnage": 1480
        },
        {
          "date": "2023-10-01T01:22:28.276Z",
          "overallTonnage": 1215
        },
        {
          "date": "2023-10-01T01:22:28.276Z",
          "overallTonnage": 1215
        },
        {
          "date": "2023-10-05T02:52:05.751Z",
          "overallTonnage": 2670
        },
        {
          "date": "2023-10-05T02:52:05.751Z",
          "overallTonnage": 2670
        },
        {
          "date": "2023-10-06T00:45:32.126Z",
          "overallTonnage": 975
        },
        {
          "date": "2023-10-06T00:45:32.126Z",
          "overallTonnage": 975
        },
        {
          "date": "2023-10-08T00:18:10.563Z",
          "overallTonnage": 1215
        },
        {
          "date": "2023-10-08T00:18:10.563Z",
          "overallTonnage": 1215
        },
        {
          "date": "2023-10-10T12:15:22.080Z",
          "overallTonnage": 3605
        },
        {
          "date": "2023-10-10T12:15:22.080Z",
          "overallTonnage": 3605
        },
        {
          "date": "2023-10-12T02:02:31.945Z",
          "overallTonnage": 2670
        },
        {
          "date": "2023-10-12T02:02:31.945Z",
          "overallTonnage": 2670
        },
        {
          "date": "2023-10-13T01:20:04.664Z",
          "overallTonnage": 975
        },
        {
          "date": "2023-10-13T01:20:04.664Z",
          "overallTonnage": 975
        },
        {
          "date": "2023-10-14T23:44:25.742Z",
          "overallTonnage": 1305
        },
        {
          "date": "2023-10-14T23:44:25.742Z",
          "overallTonnage": 1305
        },
        {
          "date": "2023-10-17T03:48:38.265Z",
          "overallTonnage": 5305
        },
        {
          "date": "2023-10-17T03:48:38.265Z",
          "overallTonnage": 5305
        },
        {
          "date": "2023-10-19T01:26:26.929Z",
          "overallTonnage": 2425
        },
        {
          "date": "2023-10-19T01:26:26.929Z",
          "overallTonnage": 2425
        },
        {
          "date": "2023-10-21T19:48:22.868Z",
          "overallTonnage": 1685
        },
        {
          "date": "2023-10-21T19:48:22.868Z",
          "overallTonnage": 1685
        },
        {
          "date": "2023-10-24T01:04:41.425Z",
          "overallTonnage": 6135
        },
        {
          "date": "2023-10-24T01:04:41.425Z",
          "overallTonnage": 6135
        },
        {
          "date": "2023-10-26T02:45:26.546Z",
          "overallTonnage": 3100
        },
        {
          "date": "2023-10-26T02:45:26.546Z",
          "overallTonnage": 3100
        },
        {
          "date": "2023-10-27T00:58:14.182Z",
          "overallTonnage": 1110
        },
        {
          "date": "2023-10-27T00:58:14.182Z",
          "overallTonnage": 1110
        },
        {
          "date": "2023-10-29T20:15:25.907Z",
          "overallTonnage": 2165
        },
        {
          "date": "2023-10-29T20:15:25.907Z",
          "overallTonnage": 2165
        },
        {
          "date": "2023-11-02T01:30:08.200Z",
          "overallTonnage": 3015
        },
        {
          "date": "2023-11-02T01:30:08.200Z",
          "overallTonnage": 3015
        },
        {
          "date": "2023-11-03T01:10:43.343Z",
          "overallTonnage": 800
        },
        {
          "date": "2023-11-03T01:10:43.343Z",
          "overallTonnage": 800
        },
        {
          "date": "2023-11-04T20:29:07.494Z",
          "overallTonnage": 1970
        },
        {
          "date": "2023-11-04T20:29:07.494Z",
          "overallTonnage": 1970
        },
        {
          "date": "2023-11-09T01:38:01.767Z",
          "overallTonnage": 585
        },
        {
          "date": "2023-11-09T01:38:01.767Z",
          "overallTonnage": 585
        }
      ]
    },
    "LoadingMedley": {
      "maxHistory": [],
      "tonnageHistory": []
    },
    "KettleBellSwings": {
      "maxHistory": [
        {
          "date": "2021-07-09T01:36:24.467Z",
          "equivalentMax": 532
        },
        {
          "date": "2021-07-09T01:36:24.467Z",
          "equivalentMax": 532
        },
        {
          "date": "2021-07-09T18:31:29.299Z",
          "equivalentMax": 35
        },
        {
          "date": "2021-07-09T18:31:29.299Z",
          "equivalentMax": 35
        },
        {
          "date": "2021-07-14T01:37:20.188Z",
          "equivalentMax": 35
        },
        {
          "date": "2021-07-14T01:37:20.188Z",
          "equivalentMax": 35
        },
        {
          "date": "2021-07-17T01:52:41.584Z",
          "equivalentMax": 532
        },
        {
          "date": "2021-07-17T01:52:41.584Z",
          "equivalentMax": 532
        },
        {
          "date": "2021-08-18T12:15:26.695Z",
          "equivalentMax": 34
        },
        {
          "date": "2021-08-18T12:15:26.695Z",
          "equivalentMax": 34
        },
        {
          "date": "2021-08-20T10:55:39.329Z",
          "equivalentMax": 507
        },
        {
          "date": "2021-08-20T10:55:39.329Z",
          "equivalentMax": 507
        },
        {
          "date": "2021-09-01T10:33:29.561Z",
          "equivalentMax": 350
        },
        {
          "date": "2021-09-01T10:33:29.561Z",
          "equivalentMax": 350
        },
        {
          "date": "2021-09-08T10:31:16.835Z",
          "equivalentMax": 350
        },
        {
          "date": "2021-09-08T10:31:16.835Z",
          "equivalentMax": 350
        },
        {
          "date": "2021-09-15T10:40:38.199Z",
          "equivalentMax": 350
        },
        {
          "date": "2021-09-15T10:40:38.199Z",
          "equivalentMax": 350
        },
        {
          "date": "2021-09-22T10:30:06.916Z",
          "equivalentMax": 333
        },
        {
          "date": "2021-09-22T10:30:06.916Z",
          "equivalentMax": 333
        },
        {
          "date": "2021-10-06T10:46:23.212Z",
          "equivalentMax": 333
        },
        {
          "date": "2021-10-06T10:46:23.212Z",
          "equivalentMax": 333
        },
        {
          "date": "2021-10-15T10:46:41.176Z",
          "equivalentMax": 350
        },
        {
          "date": "2021-10-15T10:46:41.176Z",
          "equivalentMax": 350
        },
        {
          "date": "2021-10-20T10:30:50.187Z",
          "equivalentMax": 350
        },
        {
          "date": "2021-10-20T10:30:50.187Z",
          "equivalentMax": 350
        },
        {
          "date": "2021-12-18T17:27:34.464Z",
          "equivalentMax": 350
        },
        {
          "date": "2021-12-18T17:27:34.464Z",
          "equivalentMax": 350
        }
      ],
      "tonnageInput": [
        [
          "2",
          "12",
          "35"
        ],
        [
          "1",
          "12",
          "35"
        ],
        [
          "0",
          "0",
          "0"
        ],
        [
          "0",
          "0",
          "0"
        ],
        [
          "0",
          "0",
          "0"
        ]
      ],
      "tonnageHistory": [
        {
          "date": "2021-07-09T01:36:24.467Z",
          "overallTonnage": 9520
        },
        {
          "date": "2021-07-09T01:36:24.467Z",
          "overallTonnage": 9520
        },
        {
          "date": "2021-07-09T18:31:29.299Z",
          "overallTonnage": 672
        },
        {
          "date": "2021-07-09T18:31:29.299Z",
          "overallTonnage": 672
        },
        {
          "date": "2021-07-14T01:37:20.188Z",
          "overallTonnage": 672
        },
        {
          "date": "2021-07-14T01:37:20.188Z",
          "overallTonnage": 672
        },
        {
          "date": "2021-07-17T01:52:41.584Z",
          "overallTonnage": 9520
        },
        {
          "date": "2021-07-17T01:52:41.584Z",
          "overallTonnage": 9520
        },
        {
          "date": "2021-08-18T12:15:26.695Z",
          "overallTonnage": 504
        },
        {
          "date": "2021-08-18T12:15:26.695Z",
          "overallTonnage": 504
        },
        {
          "date": "2021-08-20T10:55:39.329Z",
          "overallTonnage": 8400
        },
        {
          "date": "2021-08-20T10:55:39.329Z",
          "overallTonnage": 8400
        },
        {
          "date": "2021-09-01T10:33:29.561Z",
          "overallTonnage": 7000
        },
        {
          "date": "2021-09-01T10:33:29.561Z",
          "overallTonnage": 7000
        },
        {
          "date": "2021-09-08T10:31:16.835Z",
          "overallTonnage": 7000
        },
        {
          "date": "2021-09-08T10:31:16.835Z",
          "overallTonnage": 7000
        },
        {
          "date": "2021-09-15T10:40:38.199Z",
          "overallTonnage": 8000
        },
        {
          "date": "2021-09-15T10:40:38.199Z",
          "overallTonnage": 8000
        },
        {
          "date": "2021-09-22T10:30:06.916Z",
          "overallTonnage": 7500
        },
        {
          "date": "2021-09-22T10:30:06.916Z",
          "overallTonnage": 7500
        },
        {
          "date": "2021-10-06T10:46:23.212Z",
          "overallTonnage": 7500
        },
        {
          "date": "2021-10-06T10:46:23.212Z",
          "overallTonnage": 7500
        },
        {
          "date": "2021-10-15T10:46:41.176Z",
          "overallTonnage": 9000
        },
        {
          "date": "2021-10-15T10:46:41.176Z",
          "overallTonnage": 9000
        },
        {
          "date": "2021-10-20T10:30:50.187Z",
          "overallTonnage": 9000
        },
        {
          "date": "2021-10-20T10:30:50.187Z",
          "overallTonnage": 9000
        },
        {
          "date": "2021-12-18T17:27:34.464Z",
          "overallTonnage": 9000
        },
        {
          "date": "2021-12-18T17:27:34.464Z",
          "overallTonnage": 9000
        }
      ]
    },
    "SkullCrushers": {
      "maxHistory": [
        {
          "date": "2021-07-07T01:22:06.827Z",
          "equivalentMax": 77
        },
        {
          "date": "2021-07-07T01:22:06.827Z",
          "equivalentMax": 77
        },
        {
          "date": "2021-07-14T02:05:39.629Z",
          "equivalentMax": 77
        },
        {
          "date": "2021-07-14T02:05:39.629Z",
          "equivalentMax": 77
        },
        {
          "date": "2021-09-01T11:10:48.992Z",
          "equivalentMax": 91
        },
        {
          "date": "2021-09-01T11:10:48.992Z",
          "equivalentMax": 91
        },
        {
          "date": "2021-09-08T11:15:50.176Z",
          "equivalentMax": 105
        },
        {
          "date": "2021-09-08T11:15:50.176Z",
          "equivalentMax": 105
        },
        {
          "date": "2021-09-15T11:22:47.336Z",
          "equivalentMax": 107
        },
        {
          "date": "2021-09-15T11:22:47.336Z",
          "equivalentMax": 107
        },
        {
          "date": "2021-09-22T11:15:17.246Z",
          "equivalentMax": 113
        },
        {
          "date": "2021-09-22T11:15:17.246Z",
          "equivalentMax": 113
        },
        {
          "date": "2021-10-15T11:03:45.140Z",
          "equivalentMax": 101
        },
        {
          "date": "2021-10-15T11:03:45.140Z",
          "equivalentMax": 101
        },
        {
          "date": "2021-10-20T11:15:36.688Z",
          "equivalentMax": 114
        },
        {
          "date": "2021-10-20T11:15:36.688Z",
          "equivalentMax": 114
        }
      ],
      "tonnageInput": [
        [
          "1",
          "6",
          "95"
        ],
        [
          "2",
          "6",
          "95"
        ],
        [
          "0",
          "0",
          "0"
        ],
        [
          "0",
          "0",
          "0"
        ],
        [
          "0",
          "0",
          "0"
        ]
      ],
      "tonnageHistory": [
        {
          "date": "2021-07-07T01:22:06.827Z",
          "overallTonnage": 1860
        },
        {
          "date": "2021-07-07T01:22:06.827Z",
          "overallTonnage": 1860
        },
        {
          "date": "2021-07-14T02:05:39.629Z",
          "overallTonnage": 1995
        },
        {
          "date": "2021-07-14T02:05:39.629Z",
          "overallTonnage": 1995
        },
        {
          "date": "2021-09-01T11:10:48.992Z",
          "overallTonnage": 1320
        },
        {
          "date": "2021-09-01T11:10:48.992Z",
          "overallTonnage": 1320
        },
        {
          "date": "2021-09-08T11:15:50.176Z",
          "overallTonnage": 2550
        },
        {
          "date": "2021-09-08T11:15:50.176Z",
          "overallTonnage": 2550
        },
        {
          "date": "2021-09-15T11:22:47.336Z",
          "overallTonnage": 2200
        },
        {
          "date": "2021-09-15T11:22:47.336Z",
          "overallTonnage": 2200
        },
        {
          "date": "2021-09-22T11:15:17.246Z",
          "overallTonnage": 2450
        },
        {
          "date": "2021-09-22T11:15:17.246Z",
          "overallTonnage": 2450
        },
        {
          "date": "2021-10-15T11:03:45.140Z",
          "overallTonnage": 1920
        },
        {
          "date": "2021-10-15T11:03:45.140Z",
          "overallTonnage": 1920
        },
        {
          "date": "2021-10-20T11:15:36.688Z",
          "overallTonnage": 1710
        },
        {
          "date": "2021-10-20T11:15:36.688Z",
          "overallTonnage": 1710
        }
      ]
    },
    "BikeRide": {
      "maxHistory": [],
      "tonnageHistory": []
    },
    "HangingCrunches": {
      "maxHistory": [
        {
          "date": "2021-07-07T01:09:57.324Z",
          "equivalentMax": 234
        },
        {
          "date": "2021-07-07T01:09:57.324Z",
          "equivalentMax": 234
        },
        {
          "date": "2021-07-14T01:53:07.809Z",
          "equivalentMax": 234
        },
        {
          "date": "2021-07-14T01:53:07.809Z",
          "equivalentMax": 234
        },
        {
          "date": "2021-08-18T12:16:06.204Z",
          "equivalentMax": 260
        },
        {
          "date": "2021-08-18T12:16:06.204Z",
          "equivalentMax": 260
        },
        {
          "date": "2021-08-25T10:52:11.924Z",
          "equivalentMax": 272
        },
        {
          "date": "2021-08-25T10:52:11.924Z",
          "equivalentMax": 272
        }
      ],
      "tonnageInput": [
        [
          "1",
          "8",
          "155"
        ],
        [
          "1",
          "8",
          "175"
        ],
        [
          "1",
          "8",
          "215"
        ],
        [
          "0",
          "0",
          "0"
        ],
        [
          "0",
          "0",
          "0"
        ]
      ],
      "tonnageHistory": [
        {
          "date": "2021-07-07T01:09:57.324Z",
          "overallTonnage": 3650
        },
        {
          "date": "2021-07-07T01:09:57.324Z",
          "overallTonnage": 3650
        },
        {
          "date": "2021-07-14T01:53:07.809Z",
          "overallTonnage": 3650
        },
        {
          "date": "2021-07-14T01:53:07.809Z",
          "overallTonnage": 3650
        },
        {
          "date": "2021-08-18T12:16:06.204Z",
          "overallTonnage": 4640
        },
        {
          "date": "2021-08-18T12:16:06.204Z",
          "overallTonnage": 4640
        },
        {
          "date": "2021-08-25T10:52:11.924Z",
          "overallTonnage": 4360
        },
        {
          "date": "2021-08-25T10:52:11.924Z",
          "overallTonnage": 4360
        }
      ]
    },
    "ZercherSquats": {
      "maxHistory": [
        {
          "date": "2021-07-09T01:36:24.467Z",
          "equivalentMax": 532
        },
        {
          "date": "2021-07-09T01:36:24.467Z",
          "equivalentMax": 532
        },
        {
          "date": "2021-07-17T01:52:41.584Z",
          "equivalentMax": 532
        },
        {
          "date": "2021-07-17T01:52:41.584Z",
          "equivalentMax": 532
        },
        {
          "date": "2021-08-20T10:55:39.329Z",
          "equivalentMax": 507
        },
        {
          "date": "2021-08-20T10:55:39.329Z",
          "equivalentMax": 507
        },
        {
          "date": "2021-09-03T10:41:53.925Z",
          "equivalentMax": 532
        },
        {
          "date": "2021-09-03T10:41:53.925Z",
          "equivalentMax": 532
        },
        {
          "date": "2021-09-10T10:51:32.746Z",
          "equivalentMax": 557
        },
        {
          "date": "2021-09-10T10:51:32.746Z",
          "equivalentMax": 557
        },
        {
          "date": "2021-09-17T10:47:28.430Z",
          "equivalentMax": 557
        },
        {
          "date": "2021-09-17T10:47:28.430Z",
          "equivalentMax": 557
        },
        {
          "date": "2021-09-24T10:58:17.294Z",
          "equivalentMax": 488
        },
        {
          "date": "2021-09-24T10:58:17.294Z",
          "equivalentMax": 488
        },
        {
          "date": "2021-10-09T19:27:11.936Z",
          "equivalentMax": 480
        },
        {
          "date": "2021-10-09T19:27:11.936Z",
          "equivalentMax": 480
        },
        {
          "date": "2022-01-01T21:45:58.093Z",
          "equivalentMax": 480
        },
        {
          "date": "2022-01-01T21:45:58.093Z",
          "equivalentMax": 480
        }
      ],
      "tonnageInput": [
        [
          "1",
          "8",
          "135"
        ],
        [
          "1",
          "6",
          "185"
        ],
        [
          "1",
          "6",
          "185"
        ],
        [
          "0",
          "0",
          "0"
        ],
        [
          "0",
          "0",
          "0"
        ]
      ],
      "tonnageHistory": [
        {
          "date": "2021-07-09T01:36:24.467Z",
          "overallTonnage": 9520
        },
        {
          "date": "2021-07-09T01:36:24.467Z",
          "overallTonnage": 9520
        },
        {
          "date": "2021-07-17T01:52:41.584Z",
          "overallTonnage": 9520
        },
        {
          "date": "2021-07-17T01:52:41.584Z",
          "overallTonnage": 9520
        },
        {
          "date": "2021-08-20T10:55:39.329Z",
          "overallTonnage": 8400
        },
        {
          "date": "2021-08-20T10:55:39.329Z",
          "overallTonnage": 8400
        },
        {
          "date": "2021-09-03T10:41:53.925Z",
          "overallTonnage": 9600
        },
        {
          "date": "2021-09-03T10:41:53.925Z",
          "overallTonnage": 9600
        },
        {
          "date": "2021-09-10T10:51:32.746Z",
          "overallTonnage": 9920
        },
        {
          "date": "2021-09-10T10:51:32.746Z",
          "overallTonnage": 9920
        },
        {
          "date": "2021-09-17T10:47:28.430Z",
          "overallTonnage": 9920
        },
        {
          "date": "2021-09-17T10:47:28.430Z",
          "overallTonnage": 9920
        },
        {
          "date": "2021-09-24T10:58:17.294Z",
          "overallTonnage": 8400
        },
        {
          "date": "2021-09-24T10:58:17.294Z",
          "overallTonnage": 8400
        },
        {
          "date": "2021-10-09T19:27:11.936Z",
          "overallTonnage": 7200
        },
        {
          "date": "2021-10-09T19:27:11.936Z",
          "overallTonnage": 7200
        },
        {
          "date": "2022-01-01T21:45:58.093Z",
          "overallTonnage": 7600
        },
        {
          "date": "2022-01-01T21:45:58.093Z",
          "overallTonnage": 7600
        }
      ]
    },
    "RearDeltLaterialRaises": {
      "maxHistory": [
        {
          "date": "2021-09-03T11:12:09.936Z",
          "equivalentMax": 84
        },
        {
          "date": "2021-09-03T11:12:09.936Z",
          "equivalentMax": 84
        },
        {
          "date": "2021-09-10T11:13:43.951Z",
          "equivalentMax": 101
        },
        {
          "date": "2021-09-10T11:13:43.951Z",
          "equivalentMax": 101
        },
        {
          "date": "2021-09-17T11:21:35.949Z",
          "equivalentMax": 107
        },
        {
          "date": "2021-09-17T11:21:35.949Z",
          "equivalentMax": 107
        },
        {
          "date": "2021-09-24T11:19:54.280Z",
          "equivalentMax": 107
        },
        {
          "date": "2021-09-24T11:19:54.280Z",
          "equivalentMax": 107
        },
        {
          "date": "2021-10-09T19:44:05.459Z",
          "equivalentMax": 107
        },
        {
          "date": "2021-10-09T19:44:05.459Z",
          "equivalentMax": 107
        }
      ],
      "tonnageInput": [
        [
          "2",
          "10",
          "80"
        ],
        [
          "1",
          "10",
          "80"
        ],
        [
          "0",
          "0",
          "0"
        ],
        [
          "0",
          "0",
          "0"
        ],
        [
          "0",
          "0",
          "0"
        ]
      ],
      "tonnageHistory": [
        {
          "date": "2021-09-03T11:12:09.936Z",
          "overallTonnage": 1800
        },
        {
          "date": "2021-09-03T11:12:09.936Z",
          "overallTonnage": 1800
        },
        {
          "date": "2021-09-10T11:13:43.951Z",
          "overallTonnage": 1960
        },
        {
          "date": "2021-09-10T11:13:43.951Z",
          "overallTonnage": 1960
        },
        {
          "date": "2021-09-17T11:21:35.949Z",
          "overallTonnage": 2400
        },
        {
          "date": "2021-09-17T11:21:35.949Z",
          "overallTonnage": 2400
        },
        {
          "date": "2021-09-24T11:19:54.280Z",
          "overallTonnage": 2400
        },
        {
          "date": "2021-09-24T11:19:54.280Z",
          "overallTonnage": 2400
        },
        {
          "date": "2021-10-09T19:44:05.459Z",
          "overallTonnage": 2400
        },
        {
          "date": "2021-10-09T19:44:05.459Z",
          "overallTonnage": 2400
        }
      ]
    },
    "ActiveRest": {
      "tonnageInput": [
        [
          "1",
          "10",
          "100"
        ],
        [
          "1",
          "10",
          "150"
        ],
        [
          "1",
          "15",
          "150"
        ],
        [
          "0",
          "0",
          "0"
        ],
        [
          "0",
          "0",
          "0"
        ]
      ],
      "maxHistory": [],
      "tonnageHistory": []
    },
    "Rest": {
      "tonnageInput": [
        [
          0,
          0,
          0
        ],
        [
          0,
          0,
          0
        ],
        [
          0,
          0,
          0
        ],
        [
          0,
          0,
          0
        ],
        [
          0,
          0,
          0
        ]
      ],
      "maxHistory": [],
      "tonnageHistory": []
    }
  }
}    `

var workout = JSON.parse(workoutJson);
