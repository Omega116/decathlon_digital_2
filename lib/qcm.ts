export type QcmDifficulty = "Beginner" | "Intermediate" | "Advanced";

export interface QcmQuestion {
  id: string;
  difficulty: QcmDifficulty;
  tags: string[];
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const qcmQuestions: QcmQuestion[] = [
  {
    id: "squat-form-1",
    difficulty: "Beginner",
    tags: ["legs", "quads", "glutes"],
    question: "On a bodyweight squat, what is the best cue for knee alignment?",
    options: [
      "Let the knees cave inward to go deeper",
      "Track knees over toes while keeping feet flat",
      "Keep knees locked the whole movement",
      "Lift the heels to keep balance",
    ],
    correctIndex: 1,
    explanation:
      "Tracking the knees over the toes with full foot contact improves stability and reduces valgus stress.",
  },
  {
    id: "bench-breathing-1",
    difficulty: "Intermediate",
    tags: ["chest", "bench", "tempo"],
    question: "During the dumbbell bench press, proper breathing is:",
    options: [
      "Exhale on the way down and inhale on the way up",
      "Hold your breath for all reps",
      "Inhale on the way down, exhale when pressing up",
      "Breathe randomly to avoid bracing",
    ],
    correctIndex: 2,
    explanation:
      "Inhale on the eccentric to brace the torso, exhale as you press concentrically for power.",
  },
  {
    id: "row-posture-1",
    difficulty: "Beginner",
    tags: ["back", "lats", "posture"],
    question:
      "For a bent-over row, which spine position minimizes injury risk while maximizing lat engagement?",
    options: [
      "Rounded upper and lower back",
      "Hyperextended lower back",
      "Neutral spine with braced core",
      "Twist the torso for each rep",
    ],
    correctIndex: 2,
    explanation:
      "A neutral spine with a braced core maintains safe loading and efficient force transfer.",
  },
  {
    id: "shoulder-press-range-1",
    difficulty: "Advanced",
    tags: ["shoulders", "mobility"],
    question:
      "In an overhead press, what indicates insufficient shoulder mobility or setup?",
    options: [
      "Ribs flare and lower back arches excessively",
      "Elbows slightly forward under the wrists",
      "Wrists stacked over elbows",
      "Head moves slightly back to let bar travel vertically",
    ],
    correctIndex: 0,
    explanation:
      "Excessive rib flare and lumbar arching suggests compensating for limited shoulder flexion or bracing.",
  },
  {
    id: "band-row-tempo-1",
    difficulty: "Beginner",
    tags: ["band", "tempo"],
    question: "What is a solid tempo for a resistance-band row?",
    options: [
      "0-0-0 (as fast as possible)",
      "2-1-1 (control back, brief squeeze, smooth return)",
      "5-5-5 (super slow)",
      "1-0-3 (jerk the weight then drop)",
    ],
    correctIndex: 1,
    explanation:
      "A 2-1-1 or similar controlled tempo promotes tension, a peak squeeze, and safe return.",
  },
];
