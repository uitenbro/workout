
var workoutJson = `
{
"workoutName" : "Natural Lifter's Workout", 
"url" : "https://www.t-nation.com/training/the-best-damn-workout-plan-for-natural-lifters",
"currentDay" : 0,
"days" : [
    {
    "dayName" : "Monday - Pull 1",
    "exercises" : [
        {
        "exerciseName" : "Romanian Deadlift",
        "sets" : [
            {"label" : "2 x 6", "weight" : "add weight"},
            {"label" : "1 x 6 Heavy Double Rest", "weight" : "add weight"}
            ]
        },
        {
        "exerciseName" : "Lat Pulldown / Pull Ups", 
        "sets" : [
            {"label" : "2 x 6", "weight" : "add weight"},
            {"label" : "1 x 6 Heavy Double Rest", "weight" : "add weight"}
            ]
        },
        {
        "exerciseName" : "Bent Over Side Lateral Raises", 
        "sets" : [
            {"label" : "2 x 8", "weight" : "add weight"},
            {"label" : "1 x 6 + 8 + 10 Drop Set", "weight" : "add weight"}
            ]
        },
        {
        "exerciseName" : "Standing Barbell Curl", 
        "sets" : [
            {"label" : "2 x 6", "weight" : "add weight"},
            {"label" : "1 x 6 Heavy Double Rest", "weight" : "add weight"}
            ]
        }
    ]
    },
    {
    "dayName" : "Tuesday - Push 1",
    "exercises" : [
        {
        "exerciseName" : "Squats",
        "sets" : [
            {"label" : "2 x 6", "weight" : "add weight"},
            {"label" : "1 x 6 Heavy Double Rest", "weight" : "add weight"}
            ]
        },
        {
        "exerciseName" : "Bench Press", 
        "sets" : [
            {"label" : "2 x 6", "weight" : "add weight"},
            {"label" : "1 x 6 Heavy Double Rest", "weight" : "add weight"}
            ]
        },
        {
        "exerciseName" : "Dumbell Side Laterial Raises", 
        "sets" : [
            {"label" : "2 x 8", "weight" : "add weight"},
            {"label" : "1 x 6 + 8 + 10 Drop Set", "weight" : "add weight"}
            ]
        },
        {
        "exerciseName" : "Lying Dumbell Tricep Extension", 
        "sets" : [
            {"label" : "2 x 6", "weight" : "add weight"},
            {"label" : "1 x 6 mTor Activation Set", "weight" : "add weight"}
            ]
        }
    ]
    },
    {
    "dayName" : "Wednesday - Pull 2",
    "exercises" : [
        {
        "exerciseName" : "Leg Curl",
        "sets" : [
            {"label" : "2 x 6", "weight" : "add weight"},
            {"label" : "1 x 6 + 8 + 10 Drop Set", "weight" : "add weight"}
            ]
        },
        {
        "exerciseName" : "Straight-Arm Pulldown / Dumbell Pullover", 
        "sets" : [
            {"label" : "2 x 6", "weight" : "add weight"},
            {"label" : "1 x 6 mTor Activation Set", "weight" : "add weight"}
            ]
        },
        {
        "exerciseName" : "Pronated Chest Support Row", 
        "sets" : [
            {"label" : "2 x 8", "weight" : "add weight"},
            {"label" : "1 x 8 Heavy Double Rest", "weight" : "add weight"}
            ]
        },
        {
        "exerciseName" : "Preacher Curl", 
        "sets" : [
            {"label" : "2 x 6", "weight" : "add weight"},
            {"label" : "1 x 6 mTor Activation Set", "weight" : "add weight"}
            ]
        }
    ]
    },
    {
    "dayName" : "Thursday - Push 2",
    "exercises" : [
        {
        "exerciseName" : "Leg Extension",
        "sets" : [
            {"label" : "2 x 6", "weight" : "add weight"},
            {"label" : "1 x 6 + 8 + 10 Drop Set", "weight" : "add weight"}
            ]
        },
        {
        "exerciseName" : "Pec Deck / Cable Crossover", 
        "sets" : [
            {"label" : "2 x 6", "weight" : "add weight"},
            {"label" : "1 x 6 mTor Activation Set", "weight" : "add weight"}
            ]
        },
        {
        "exerciseName" : "Military Press / Arnold Press", 
        "sets" : [
            {"label" : "2 x 6", "weight" : "add weight"},
            {"label" : "1 x 6 Heavy Double Rest", "weight" : "add weight"}
            ]
        },
        {
        "exerciseName" : "Close-Grip Decline Bench Press or Dip", 
        "sets" : [
            {"label" : "2 x 6", "weight" : "add weight"},
            {"label" : "1 x 6 Heavy Double Rest", "weight" : "add weight"}
            ]
        }
    ]
    },
    {
    "dayName" : "Friday - Pull 3",
    "exercises" : [
        {
        "exerciseName" : "Glute Ham Raise or Reverse Hyper",
        "sets" : [
            {"label" : "2 x 6", "weight" : "add weight"},
            {"label" : "1 x 6 mTor Activation Set", "weight" : "add weight"}
            ]
        },
        {
        "exerciseName" : "Supinated Lat Pulldown", 
        "sets" : [
            {"label" : "2 x 6", "weight" : "add weight"},
            {"label" : "1 x 6 + 8 + 10 Drop Set", "weight" : "add weight"}
            ]
        },
        {
        "exerciseName" : "Neutral-Grip Cable Seated Row", 
        "sets" : [
            {"label" : "2 x 6", "weight" : "add weight"},
            {"label" : "1 x 6 mTor Activation Set", "weight" : "add weight"}
            ]
        },
        {
        "exerciseName" : "Dumbbell Hammer Curl", 
        "sets" : [
            {"label" : "2 x 6", "weight" : "add weight"},
            {"label" : "1 x 6 + 8 + 10 Drop Set", "weight" : "add weight"}
            ]
        }
    ]
    },
    {
    "dayName" : "Saturday - Push 4",
    "exercises" : [
        {
        "exerciseName" : "Hack Squat Machine or Leg Press",
        "sets" : [
            {"label" : "2 x 6", "weight" : "add weight"},
            {"label" : "1 x 6 mTor Activation Set", "weight" : "add weight"}
            ]
        },
        {
        "exerciseName" : "Incline Bench Press or Incline Dumbbell Press", 
        "sets" : [
            {"label" : "2 x 6", "weight" : "add weight"},
            {"label" : "1 x 6 + 8 + 10 Drop Set", "weight" : "add weight"}
            ]
        },
        {
        "exerciseName" : "Dumbbell Front Raise on Incline Bench", 
        "sets" : [
            {"label" : "2 x 6", "weight" : "add weight"},
            {"label" : "1 x 6 mTor Activation Set", "weight" : "add weight"}
            ]
        },
        {
        "exerciseName" : "Rope Triceps Extension", 
        "sets" : [
            {"label" : "2 x 6", "weight" : "add weight"},
            {"label" : "1 x 6 + 8 + 10 Drop Set", "weight" : "add weight"}
            ]
        }
    ]
    },
    {
    "dayName" : "Sunday - Rest",
    "exercises" : [
        {
        "exerciseName" : "Rest",
        "sets" : []
        }
    ]
    }
]
}
`

var workout = JSON.parse(workoutJson);
