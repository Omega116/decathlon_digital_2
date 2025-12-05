export interface Muscle {
  id: string;
  name: string;
  count: number;
  beginner: number;
  intermediate: number;
  advanced: number;
}

export interface Equipment {
  id: string;
  name: string;
  icon: string; // Icon identifier (e.g., "dumbbell", "barbell")
  muscles: string[]; // Muscle IDs that can be trained with this equipment
}

export const muscleData: Muscle[] = [
  {
    id: "glutes",
    name: "Glutes",
    count: 9,
    beginner: 5,
    intermediate: 3,
    advanced: 1,
  },
  {
    id: "forearms",
    name: "Forearms",
    count: 2,
    beginner: 2,
    intermediate: 0,
    advanced: 0,
  },
  {
    id: "obliques",
    name: "Obliques",
    count: 10,
    beginner: 4,
    intermediate: 3,
    advanced: 3,
  },
  {
    id: "chest",
    name: "Chest",
    count: 2,
    beginner: 0,
    intermediate: 2,
    advanced: 0,
  },
  {
    id: "biceps",
    name: "Biceps",
    count: 8,
    beginner: 6,
    intermediate: 2,
    advanced: 0,
  },
  {
    id: "triceps",
    name: "Triceps",
    count: 4,
    beginner: 3,
    intermediate: 1,
    advanced: 0,
  },
  {
    id: "shoulders",
    name: "Shoulders",
    count: 18,
    beginner: 9,
    intermediate: 7,
    advanced: 2,
  },
  {
    id: "lower-back",
    name: "Lower Back",
    count: 1,
    beginner: 0,
    intermediate: 1,
    advanced: 0,
  },
  {
    id: "lats",
    name: "Lats",
    count: 7,
    beginner: 2,
    intermediate: 4,
    advanced: 1,
  },
  {
    id: "traps",
    name: "Traps",
    count: 6,
    beginner: 3,
    intermediate: 3,
    advanced: 0,
  },
  {
    id: "quads",
    name: "Quadriceps",
    count: 22,
    beginner: 9,
    intermediate: 7,
    advanced: 6,
  },
  {
    id: "hamstrings",
    name: "Hamstrings",
    count: 6,
    beginner: 1,
    intermediate: 3,
    advanced: 2,
  },
  {
    id: "abdominals",
    name: "Abdominals",
    count: 6,
    beginner: 0,
    intermediate: 4,
    advanced: 2,
  },
  {
    id: "calves",
    name: "Calves",
    count: 2,
    beginner: 2,
    intermediate: 0,
    advanced: 0,
  },
];

// Equipment to muscle mappings (scientifically accurate)
export const equipmentData: Equipment[] = [
  {
    id: "none",
    name: "Bodyweight",
    icon: "user",
    muscles: [
      "chest",
      "shoulders",
      "triceps",
      "biceps",
      "abdominals",
      "obliques",
      "quads",
      "hamstrings",
      "glutes",
      "calves",
      "lats",
      "traps",
    ],
  },
  {
    id: "dumbbell",
    name: "Dumbbell",
    icon: "dumbbell",
    muscles: [
      "chest",
      "shoulders",
      "triceps",
      "biceps",
      "forearms",
      "lats",
      "traps",
      "quads",
      "hamstrings",
      "glutes",
      "abdominals",
      "obliques",
    ],
  },
  {
    id: "barbell",
    name: "Barbell",
    icon: "grip-vertical",
    muscles: [
      "chest",
      "shoulders",
      "triceps",
      "lats",
      "traps",
      "lower-back",
      "quads",
      "hamstrings",
      "glutes",
      "forearms",
    ],
  },
  {
    id: "kettlebell",
    name: "Kettlebell",
    icon: "circle",
    muscles: [
      "shoulders",
      "forearms",
      "glutes",
      "hamstrings",
      "quads",
      "abdominals",
      "obliques",
      "lats",
      "traps",
    ],
  },
  {
    id: "band",
    name: "Resistance Band",
    icon: "waves",
    muscles: [
      "chest",
      "shoulders",
      "triceps",
      "biceps",
      "lats",
      "quads",
      "hamstrings",
      "glutes",
      "abdominals",
    ],
  },
  {
    id: "pull-up-bar",
    name: "Pull-up Bar",
    icon: "rectangle-horizontal",
    muscles: ["lats", "biceps", "shoulders", "traps", "forearms", "abdominals"],
  },
  {
    id: "bench",
    name: "Bench",
    icon: "rectangle-horizontal",
    muscles: ["chest", "shoulders", "triceps", "biceps", "abdominals"],
  },
];

export const difficultyLevels = [
  "Beginner",
  "Intermediate",
  "Advanced",
] as const;
export type Difficulty = (typeof difficultyLevels)[number];

// Map muscle IDs to SVG data-elem names (used in the Illustration component)
export const muscleIdToSvgName: Record<string, string> = {
  glutes: "Glutes",
  forearms: "Forearms",
  obliques: "Obliques",
  chest: "Chest",
  biceps: "Biceps",
  triceps: "Triceps",
  shoulders: "Shoulders",
  "lower-back": "Lower back",
  lats: "Lats",
  traps: "Traps",
  quads: "Quads",
  hamstrings: "Hamstrings",
  abdominals: "Abdominals",
  calves: "Calves",
};

// Map SVG data-elem names back to muscle IDs
export const svgNameToMuscleId: Record<string, string> = {
  Glutes: "glutes",
  Forearms: "forearms",
  Obliques: "obliques",
  Chest: "chest",
  Biceps: "biceps",
  Triceps: "triceps",
  Shoulders: "shoulders",
  "Lower back": "lower-back",
  Lats: "lats",
  Traps: "traps",
  Quads: "quads",
  Hamstrings: "hamstrings",
  Abdominals: "abdominals",
  Calves: "calves",
};

export interface Exercise {
  id: string;
  name: string;
  muscles: string[]; // Muscle IDs
  equipment: string[]; // Equipment IDs
  difficulty: Difficulty;
  gif: string; // GIF filename
  description?: string; // Exercise description
}

export const exerciseData: Exercise[] = [
  {
    id: "barbell-row",
    name: "Barbell Row",
    muscles: ["lats", "traps", "lower-back"],
    equipment: ["barbell"],
    difficulty: "Intermediate",
    gif: "assets/barbell_row.gif",
  },
  {
    id: "barbell-shrug",
    name: "Barbell Shrug",
    muscles: ["traps"],
    equipment: ["barbell"],
    difficulty: "Beginner",
    gif: "assets/barbell_shrug.gif",
  },
  {
    id: "barbell-skullcrusher",
    name: "Barbell Skullcrusher",
    muscles: ["triceps"],
    equipment: ["barbell", "bench"],
    difficulty: "Intermediate",
    gif: "assets/Barbell Skullcrusher .jpg",
  },
  {
    id: "barbell-split-squat",
    name: "Barbell Split Squat",
    muscles: ["quads", "glutes"],
    equipment: ["barbell"],
    difficulty: "Intermediate",
    gif: "assets/Barbell Split Squat.jpg",
  },
  {
    id: "barbell-squat",
    name: "Barbell Squat",
    muscles: ["quads", "glutes"],
    equipment: ["barbell"],
    difficulty: "Beginner",
    gif: "assets/Barbell Squat.gif",
  },
  {
    id: "barbell-wrist-curl",
    name: "Barbell Wrist Curl",
    muscles: ["forearms"],
    equipment: ["barbell", "bench"],
    difficulty: "Beginner",
    gif: "assets/Barbell Wrist Curl.gif",
  },
  {
    id: "bench-leg-raise",
    name: "Bench Leg Raise",
    muscles: ["abdominals"],
    equipment: ["bench", "none"],
    difficulty: "Beginner",
    gif: "assets/Bench Leg Raise .gif",
  },
  {
    id: "bent-over-dumbbell-row",
    name: "Bent Over Dumbbell Row",
    muscles: ["lats", "traps"],
    equipment: ["dumbbell"],
    difficulty: "Intermediate",
    gif: "assets/bent_over_dumbbell_row.gif",
  },
  {
    id: "cable-bicep-curl",
    name: "Cable Bicep Curl",
    muscles: ["biceps"],
    equipment: ["band"],
    difficulty: "Beginner",
    gif: "assets/Cable Bicep Curl.gif",
  },
  {
    id: "cable-crossover",
    name: "Cable Crossover",
    muscles: ["chest"],
    equipment: ["band"],
    difficulty: "Intermediate",
    gif: "assets/cable_crossover.gif",
  },
  {
    id: "cable-lat-pullover",
    name: "Cable Lat Pullover",
    muscles: ["lats"],
    equipment: ["band"],
    difficulty: "Intermediate",
    gif: "assets/Cable Lat Pullover.gif",
  },
  {
    id: "chest-supported-dumbbell-row",
    name: "Chest Supported Dumbbell Row",
    muscles: ["lats", "traps"],
    equipment: ["dumbbell", "bench"],
    difficulty: "Beginner",
    gif: "assets/chest_supported_dumbbell_row.gif",
  },
  {
    id: "dumbbell-bench-press",
    name: "Dumbbell Bench Press",
    muscles: ["chest", "triceps"],
    equipment: ["dumbbell", "bench"],
    difficulty: "Intermediate",
    gif: "assets/Dumbbell Bench Press .gif",
  },
  {
    id: "dumbbell-fly",
    name: "Dumbbell Fly",
    muscles: ["chest"],
    equipment: ["dumbbell", "bench"],
    difficulty: "Intermediate",
    gif: "assets/Dumbbell Fly.gif",
  },
  {
    id: "dumbbell-overhead-triceps-extension",
    name: "Dumbbell Overhead Triceps Extension",
    muscles: ["triceps"],
    equipment: ["dumbbell"],
    difficulty: "Beginner",
    gif: "assets/Dumbbell Overhead Triceps Extension.jpg",
  },
  {
    id: "dumbbell-shoulder-press",
    name: "Dumbbell Shoulder Press",
    muscles: ["shoulders"],
    equipment: ["dumbbell"],
    difficulty: "Beginner",
    gif: "assets/Dumbbell Shoulder Press.gif",
  },
  {
    id: "one-arm-dumbbell-row",
    name: "One Arm Dumbbell Row",
    muscles: ["lats", "traps"],
    equipment: ["dumbbell", "bench"],
    difficulty: "Intermediate",
    gif: "assets/one_arm_dumbbell_row.gif",
  },
  {
    id: "pull-up",
    name: "Pull Up",
    muscles: ["lats", "biceps", "shoulders", "traps"],
    equipment: ["pull-up-bar", "none"],
    difficulty: "Intermediate",
    gif: "assets/pull_up.gif",
  },
  {
    id: "seated-barbell-twist",
    name: "Seated Barbell Twist",
    muscles: ["obliques"],
    equipment: ["barbell", "bench"],
    difficulty: "Intermediate",
    gif: "assets/Seated Barbell Twist.jpg",
  },
  {
    id: "single-arm-straight-arm-pulldown",
    name: "Single Arm Straight Arm Pulldown",
    muscles: ["lats"],
    equipment: ["band"],
    difficulty: "Advanced",
    gif: "assets/Single Arm Straight Arm Pulldown .gif",
  },
  {
    id: "smith-machine-bench-press",
    name: "Smith Machine Bench Press",
    muscles: ["chest", "triceps"],
    equipment: ["barbell", "bench"],
    difficulty: "Beginner",
    gif: "assets/Smith Machine Bench Press.gif",
  },
];
