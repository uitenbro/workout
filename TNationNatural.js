
var workoutJson = `
{
    "workoutName": "Natural Lifter's Workout",
    "url": "https://www.t-nation.com/training/the-best-damn-workout-plan-for-natural-lifters",
    "days": [{
        "dayName": "Monday - Pull 1",
        "exercises": [{
            "exerciseName": "Deadlifts / Romanian Deadlift",
            "sets": [{
                "label": "2 x 6",
                "weight": "245 lbs"
            }, {
                "label": "1 x 6 Heavy Double Rest",
                "weight": "355 lbs / 265 lbs"
            }]
        }, {
            "exerciseName": "Lat Pulldown / Pull Ups",
            "sets": [{
                "label": "2 x 6",
                "weight": "200/220 lbs"
            }, {
                "label": "1 x 6 Heavy Double Rest",
                "weight": "220 lbs"
            }]
        }, {
            "exerciseName": "Bent Over Side Lateral Raises",
            "sets": [{
                "label": "2 x 8",
                "weight": "60 lbs"
            }, {
                "label": "1 x 6 + 8 + 10 Drop Set",
                "weight": "70/60/50 lbs"
            }]
        }, {
            "exerciseName": "Dumbbell Curl",
            "sets": [{
                "label": "2 x 6",
                "weight": "100/110 lbs"
            }, {
                "label": "1 x 6 Heavy Double Rest",
                "weight": "110 lbs"
            }]
        }, {
            "exerciseName": "Standing Crunches",
            "sets": [{
                "label": "3 x 8",
                "weight": "150 lbs"
            }]
        }]
    }, {
        "dayName": "Tuesday - Push 1",
        "exercises": [{
            "exerciseName": "Box Jumps",
            "sets": [{
                "label": "2 x 6",
                "weight": "38/ 38"
            }, {
                "label": "1 x 6 ",
                "weight": "38"
            }]
        }, {
            "exerciseName": "Bench Press / Dumbbell Press",
            "sets": [{
                "label": "2 x 6",
                "weight": " 225 / 180 lbs"
            }, {
                "label": "1 x 6 Heavy Double Rest",
                "weight": "265 / 200 lbs"
            }]
        }, {
            "exerciseName": "Dumbbell Side Laterial Raises",
            "sets": [{
                "label": "2 x 8",
                "weight": "60 lbs"
            }, {
                "label": "1 x 6 + 8 + 10 Drop Set",
                "weight": "70/60/50 lbs"
            }]
        }, {
            "exerciseName": "Lying Dumbbell Tricep Extension",
            "sets": [{
                "label": "2 x 6",
                "weight": "80 lbs"
            }, {
                "label": "1 x 6 mTor Activation Set",
                "weight": "90 lbs"
            }]
        }, {
            "exerciseName": "Oblique Crunches",
            "sets": [{
                "label": "3 x 8",
                "weight": "100 lbs"
            }]
        }]
    }, {
        "dayName": "Wednesday - Pull 2",
        "exercises": [{
            "exerciseName": "Leg Curl (single leg)",
            "sets": [{
                "label": "2 x 6",
                "weight": "160 lbs"
            }, {
                "label": "1 x 6 + 8 + 10 Drop Set",
                "weight": "180/160/140 lbs"
            }]
        }, {
            "exerciseName": "Straight-Arm Pulldown",
            "sets": [{
                "label": "2 x 6",
                "weight": "190 lbs"
            }, {
                "label": "1 x 6 mTor Activation Set",
                "weight": "190 lbs"
            }]
        }, {
            "exerciseName": "Chest Support Row / Lawnmowers",
            "sets": [{
                "label": "2 x 8",
                "weight": "245 lbs / 140 lbs"
            }, {
                "label": "1 x 8 Heavy Double Rest",
                "weight": "245 lbs / 160 lbs "
            }]
        }, {
            "exerciseName": "Preacher Curl",
            "sets": [{
                "label": "2 x 6",
                "weight": "100 lbs"
            }, {
                "label": "1 x 6 mTor Activation Set",
                "weight": "100 lbs"
            }]
        }, {
            "exerciseName": "Incline board medicine ball crunches",
            "sets": [{
                "label": "3 x 8",
                "weight": " 20 lbs"
            }]
        }]
    }, {
        "dayName": "Thursday - Push 2",
        "exercises": [{
            "exerciseName": "Squats",
            "sets": [{
                "label": "2 x 6",
                "weight": "205 /225 lbs"
            }, {
                "label": "1 x 6 Heavy Double Rest",
                "weight": "245 lbs"
            }]
        }, {
            "exerciseName": "Barbbell Shoulder Press",
            "sets": [{
                "label": "2 x 6",
                "weight": "135 lbs"
            }, {
                "label": "1 x 6 Heavy Double Rest",
                "weight": "155 lbs"
            }]
        }, {
            "exerciseName": "Pec Deck",
            "sets": [{
                "label": "2 x 6",
                "weight": "190 lbs"
            }, {
                "label": "1 x 6 mTor Activation",
                "weight": " 190 lbs"
            }]
        }, {
            "exerciseName": "Weighted Dips",
            "sets": [{
                "label": "2 x 8",
                "weight": "BW/BW+45 lbs"
            }, {
                "label": "1 x 6 mTor Activation",
                "weight": "BW+45 lbs"
            }]
        }, {
            "exerciseName": "Oblique Twist Machine / Farmers Walk",
            "sets": [{
                "label": "3 x 8",
                "weight": "150 lbs / 88 lbs"
            }]
        }]
    }, {
        "dayName": "Friday - Pull 3",
        "exercises": [{
            "exerciseName": "Glute Ham Raise or Reverse Hyper",
            "sets": [{
                "label": "2 x 6",
                "weight": "BW + 25 lbs"
            }, {
                "label": "1 x 6 mTor Activation Set",
                "weight": "BW + 45 lbs"
            }]
        }, {
            "exerciseName": "Supinated Lat Pulldown",
            "sets": [{
                "label": "2 x 6",
                "weight": "220 lbs"
            }, {
                "label": "1 x 6 + 8 + 10 Drop Set",
                "weight": "220/165/125 lbs"
            }]
        }, {
            "exerciseName": "Neutral-Grip Cable Seated Row",
            "sets": [{
                "label": "2 x 6",
                "weight": "200 lbs"
            }, {
                "label": "1 x 6 mTor Activation Set",
                "weight": "200 lbs"
            }]
        }, {
            "exerciseName": "Reverse Curl",
            "sets": [{
                "label": "2 x 6",
                "weight": "90 lbs"
            }, {
                "label": "1 x 6 + 8 + 10 Drop Set",
                "weight": "90/60/40 lbs"
            }]
        }, {
            "exerciseName": "Seated Crunch Machine",
            "sets": [{
                "label": "3 x 8",
                "weight": "170 lbs"
            }]
        }]
    }, {
        "dayName": "Saturday - Push 4",
        "exercises": [{
            "exerciseName": "Leg Press",
            "sets": [{
                "label": "2 x 6",
                "weight": "315 lbs / 495 lbs"
            }, {
                "label": "1 x 6 mTor Activation Set",
                "weight": "585  lbs"
            }]
        }, {
            "exerciseName": "Incline Dumbbell Press",
            "sets": [{
                "label": "2 x 6",
                "weight": "140 lbs"
            }, {
                "label": "1 x 6 + 8 + 10 Drop Set",
                "weight": "150/120/80 lbs"
            }]
        }, {
            "exerciseName": "Dumbbell Front Raise on Incline Bench",
            "sets": [{
                "label": "2 x 6",
                "weight": "50 lbs"
            }, {
                "label": "1 x 6 mTor Activation Set",
                "weight": "50 lbs"
            }]
        }, {
            "exerciseName": "Cable Triceps Extension",
            "sets": [{
                "label": "2 x 6",
                "weight": "42.5 lbs"
            }, {
                "label": "1 x 6 + 8 + 10 Drop Set",
                "weight": "42.5/30/20 lbs"
            }]
        }, {
            "exerciseName": "Oblique Crunches / Farmers Walk",
            "sets": [{
                "label": "3 x 8",
                "weight": "95 lbs / 88 lbs"
            }]
        }]
    }, {
        "dayName": "Sunday - Rest",
        "exercises": [{
            "exerciseName": "Rest",
            "sets": []
        }]
    }],
    "currentDay": 189
}`

var workout = JSON.parse(workoutJson);
