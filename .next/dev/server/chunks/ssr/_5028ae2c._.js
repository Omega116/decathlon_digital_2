module.exports = [
"[project]/lib/mock-data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "difficultyLevels",
    ()=>difficultyLevels,
    "equipmentData",
    ()=>equipmentData,
    "exerciseData",
    ()=>exerciseData,
    "muscleData",
    ()=>muscleData,
    "muscleIdToSvgName",
    ()=>muscleIdToSvgName,
    "svgNameToMuscleId",
    ()=>svgNameToMuscleId
]);
const muscleData = [
    {
        id: "glutes",
        name: "Glutes",
        count: 9,
        beginner: 5,
        intermediate: 3,
        advanced: 1
    },
    {
        id: "forearms",
        name: "Forearms",
        count: 2,
        beginner: 2,
        intermediate: 0,
        advanced: 0
    },
    {
        id: "obliques",
        name: "Obliques",
        count: 10,
        beginner: 4,
        intermediate: 3,
        advanced: 3
    },
    {
        id: "chest",
        name: "Chest",
        count: 2,
        beginner: 0,
        intermediate: 2,
        advanced: 0
    },
    {
        id: "biceps",
        name: "Biceps",
        count: 8,
        beginner: 6,
        intermediate: 2,
        advanced: 0
    },
    {
        id: "triceps",
        name: "Triceps",
        count: 4,
        beginner: 3,
        intermediate: 1,
        advanced: 0
    },
    {
        id: "shoulders",
        name: "Shoulders",
        count: 18,
        beginner: 9,
        intermediate: 7,
        advanced: 2
    },
    {
        id: "lower-back",
        name: "Lower Back",
        count: 1,
        beginner: 0,
        intermediate: 1,
        advanced: 0
    },
    {
        id: "lats",
        name: "Lats",
        count: 7,
        beginner: 2,
        intermediate: 4,
        advanced: 1
    },
    {
        id: "traps",
        name: "Traps",
        count: 6,
        beginner: 3,
        intermediate: 3,
        advanced: 0
    },
    {
        id: "quads",
        name: "Quadriceps",
        count: 22,
        beginner: 9,
        intermediate: 7,
        advanced: 6
    },
    {
        id: "hamstrings",
        name: "Hamstrings",
        count: 6,
        beginner: 1,
        intermediate: 3,
        advanced: 2
    },
    {
        id: "abdominals",
        name: "Abdominals",
        count: 6,
        beginner: 0,
        intermediate: 4,
        advanced: 2
    },
    {
        id: "calves",
        name: "Calves",
        count: 2,
        beginner: 2,
        intermediate: 0,
        advanced: 0
    }
];
const equipmentData = [
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
            "traps"
        ]
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
            "obliques"
        ]
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
            "forearms"
        ]
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
            "traps"
        ]
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
            "abdominals"
        ]
    },
    {
        id: "pull-up-bar",
        name: "Pull-up Bar",
        icon: "rectangle-horizontal",
        muscles: [
            "lats",
            "biceps",
            "shoulders",
            "traps",
            "forearms",
            "abdominals"
        ]
    },
    {
        id: "bench",
        name: "Bench",
        icon: "rectangle-horizontal",
        muscles: [
            "chest",
            "shoulders",
            "triceps",
            "biceps",
            "abdominals"
        ]
    }
];
const difficultyLevels = [
    "Beginner",
    "Intermediate",
    "Advanced"
];
const muscleIdToSvgName = {
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
    calves: "Calves"
};
const svgNameToMuscleId = {
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
    Calves: "calves"
};
const exerciseData = [
    {
        id: "barbell-row",
        name: "Barbell Row",
        muscles: [
            "lats",
            "traps",
            "lower-back"
        ],
        equipment: [
            "barbell"
        ],
        difficulty: "Intermediate",
        gif: "assets/barbell_row.gif"
    },
    {
        id: "barbell-shrug",
        name: "Barbell Shrug",
        muscles: [
            "traps"
        ],
        equipment: [
            "barbell"
        ],
        difficulty: "Beginner",
        gif: "assets/barbell_shrug.gif"
    },
    {
        id: "barbell-skullcrusher",
        name: "Barbell Skullcrusher",
        muscles: [
            "triceps"
        ],
        equipment: [
            "barbell",
            "bench"
        ],
        difficulty: "Intermediate",
        gif: "assets/Barbell Skullcrusher .jpg"
    },
    {
        id: "barbell-split-squat",
        name: "Barbell Split Squat",
        muscles: [
            "quads",
            "glutes"
        ],
        equipment: [
            "barbell"
        ],
        difficulty: "Intermediate",
        gif: "assets/Barbell Split Squat.jpg"
    },
    {
        id: "barbell-squat",
        name: "Barbell Squat",
        muscles: [
            "quads",
            "glutes"
        ],
        equipment: [
            "barbell"
        ],
        difficulty: "Beginner",
        gif: "assets/Barbell Squat.gif"
    },
    {
        id: "barbell-wrist-curl",
        name: "Barbell Wrist Curl",
        muscles: [
            "forearms"
        ],
        equipment: [
            "barbell",
            "bench"
        ],
        difficulty: "Beginner",
        gif: "assets/Barbell Wrist Curl.gif"
    },
    {
        id: "bench-leg-raise",
        name: "Bench Leg Raise",
        muscles: [
            "abdominals"
        ],
        equipment: [
            "bench",
            "none"
        ],
        difficulty: "Beginner",
        gif: "assets/Bench Leg Raise .gif"
    },
    {
        id: "bent-over-dumbbell-row",
        name: "Bent Over Dumbbell Row",
        muscles: [
            "lats",
            "traps"
        ],
        equipment: [
            "dumbbell"
        ],
        difficulty: "Intermediate",
        gif: "assets/bent_over_dumbbell_row.gif"
    },
    {
        id: "cable-bicep-curl",
        name: "Cable Bicep Curl",
        muscles: [
            "biceps"
        ],
        equipment: [
            "band"
        ],
        difficulty: "Beginner",
        gif: "assets/Cable Bicep Curl.gif"
    },
    {
        id: "cable-crossover",
        name: "Cable Crossover",
        muscles: [
            "chest"
        ],
        equipment: [
            "band"
        ],
        difficulty: "Intermediate",
        gif: "assets/cable_crossover.gif"
    },
    {
        id: "cable-lat-pullover",
        name: "Cable Lat Pullover",
        muscles: [
            "lats"
        ],
        equipment: [
            "band"
        ],
        difficulty: "Intermediate",
        gif: "assets/Cable Lat Pullover.gif"
    },
    {
        id: "chest-supported-dumbbell-row",
        name: "Chest Supported Dumbbell Row",
        muscles: [
            "lats",
            "traps"
        ],
        equipment: [
            "dumbbell",
            "bench"
        ],
        difficulty: "Beginner",
        gif: "assets/chest_supported_dumbbell_row.gif"
    },
    {
        id: "dumbbell-bench-press",
        name: "Dumbbell Bench Press",
        muscles: [
            "chest",
            "triceps"
        ],
        equipment: [
            "dumbbell",
            "bench"
        ],
        difficulty: "Intermediate",
        gif: "assets/Dumbbell Bench Press .gif"
    },
    {
        id: "dumbbell-fly",
        name: "Dumbbell Fly",
        muscles: [
            "chest"
        ],
        equipment: [
            "dumbbell",
            "bench"
        ],
        difficulty: "Intermediate",
        gif: "assets/Dumbbell Fly.gif"
    },
    {
        id: "dumbbell-overhead-triceps-extension",
        name: "Dumbbell Overhead Triceps Extension",
        muscles: [
            "triceps"
        ],
        equipment: [
            "dumbbell"
        ],
        difficulty: "Beginner",
        gif: "assets/Dumbbell Overhead Triceps Extension.jpg"
    },
    {
        id: "dumbbell-shoulder-press",
        name: "Dumbbell Shoulder Press",
        muscles: [
            "shoulders"
        ],
        equipment: [
            "dumbbell"
        ],
        difficulty: "Beginner",
        gif: "assets/Dumbbell Shoulder Press.gif"
    },
    {
        id: "one-arm-dumbbell-row",
        name: "One Arm Dumbbell Row",
        muscles: [
            "lats",
            "traps"
        ],
        equipment: [
            "dumbbell",
            "bench"
        ],
        difficulty: "Intermediate",
        gif: "assets/one_arm_dumbbell_row.gif"
    },
    {
        id: "pull-up",
        name: "Pull Up",
        muscles: [
            "lats",
            "biceps",
            "shoulders",
            "traps"
        ],
        equipment: [
            "pull-up-bar",
            "none"
        ],
        difficulty: "Intermediate",
        gif: "assets/pull_up.gif"
    },
    {
        id: "seated-barbell-twist",
        name: "Seated Barbell Twist",
        muscles: [
            "obliques"
        ],
        equipment: [
            "barbell",
            "bench"
        ],
        difficulty: "Intermediate",
        gif: "assets/Seated Barbell Twist.jpg"
    },
    {
        id: "single-arm-straight-arm-pulldown",
        name: "Single Arm Straight Arm Pulldown",
        muscles: [
            "lats"
        ],
        equipment: [
            "band"
        ],
        difficulty: "Advanced",
        gif: "assets/Single Arm Straight Arm Pulldown .gif"
    },
    {
        id: "smith-machine-bench-press",
        name: "Smith Machine Bench Press",
        muscles: [
            "chest",
            "triceps"
        ],
        equipment: [
            "barbell",
            "bench"
        ],
        difficulty: "Beginner",
        gif: "assets/Smith Machine Bench Press.gif"
    }
];
}),
"[project]/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/components/ui/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-4 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/badge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
            secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
            destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/app/assistant/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AssistantPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mock-data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
// Simple helper math
function angleDeg(ax, ay, bx, by) {
    // angle of vector AB to vertical (in degrees)
    const dx = ax - bx;
    const dy = ay - by;
    const rad = Math.atan2(dx, dy); // swap to measure vs vertical axis
    return rad * 180 / Math.PI;
}
function AssistantPage() {
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [feedback, setFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [confidence, setConfidence] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [currentExercise, setCurrentExercise] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exerciseData"][0]?.id ?? "");
    const currentExerciseName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exerciseData"].find((e)=>e.id === currentExercise)?.name ?? "", [
        currentExercise
    ]);
    const draw = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback((poses)=>{
        const ctx = canvasRef.current?.getContext("2d");
        const v = videoRef.current;
        if (!ctx || !v || !canvasRef.current) return;
        canvasRef.current.width = v.videoWidth;
        canvasRef.current.height = v.videoHeight;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.save();
        ctx.scale(-1, 1); // mirror for selfie view
        ctx.translate(-ctx.canvas.width, 0);
        ctx.drawImage(v, 0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.restore();
        const kp = {};
        const first = poses?.[0];
        if (first?.keypoints) {
            for (const p of first.keypoints){
                if (p?.name) kp[p.name] = p;
            }
        }
        // draw keypoints
        ctx.fillStyle = "#22c55e";
        for (const k of Object.values(kp)){
            if (!k || (k.score ?? 0) < 0.3) continue;
            ctx.beginPath();
            ctx.arc(k.x, k.y, 4, 0, Math.PI * 2);
            ctx.fill();
        }
        // Feedback heuristics
        const fb = [];
        const scores = [];
        for (const k of Object.values(kp))if (typeof k?.score === "number") scores.push(k.score);
        const avg = scores.length ? scores.reduce((a, b)=>a + b, 0) / scores.length * 100 : 0;
        const ls = (n)=>kp[n];
        const shoulder = avgPoint(ls("left_shoulder"), ls("right_shoulder"));
        const hip = avgPoint(ls("left_hip"), ls("right_hip"));
        const knee = avgPoint(ls("left_knee"), ls("right_knee"));
        const elbowL = ls("left_elbow");
        const elbowR = ls("right_elbow");
        // Back alignment
        if (shoulder && hip) {
            const backAngle = Math.abs(angleDeg(shoulder.x, shoulder.y, hip.x, hip.y));
            if (isPress(currentExerciseName) || isRow(currentExerciseName) || isSquat(currentExerciseName)) {
                if (backAngle > 15) fb.push("Straighten your back");
            }
        }
        // Elbow cue (rows/presses)
        if ((isRow(currentExerciseName) || isPress(currentExerciseName)) && shoulder && elbowL && elbowR) {
            const dYL = Math.abs(elbowL.y - shoulder.y);
            const dYR = Math.abs(elbowR.y - shoulder.y);
            if (dYL > 80 || dYR > 80) fb.push("Lower your elbows");
        }
        // Knee alignment (squat hint)
        if (isSquat(currentExerciseName) && knee && hip) {
            const kneeBack = knee.y < hip.y - 20; // rough check
            if (!kneeBack) fb.push("Keep your knees aligned");
        }
        setFeedback(fb.length ? fb : [
            "Good form! Keep going."
        ]);
        setConfidence(Math.round(avg));
    }, [
        currentExerciseName
    ]);
    const loadScripts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        const add = (src)=>new Promise((resolve, reject)=>{
                const s = document.createElement("script");
                s.src = src;
                s.async = true;
                s.onload = ()=>resolve();
                s.onerror = (e)=>reject(e);
                document.body.appendChild(s);
            });
        await add("https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@4.16.0/dist/tf.min.js");
        await add("https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-backend-webgl@4.16.0/dist/tf-backend-webgl.min.js");
        await add("https://cdn.jsdelivr.net/npm/@tensorflow-models/pose-detection@3.3.0/dist/pose-detection.min.js");
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let stop = false;
        let detector = null;
        async function init() {
            try {
                setLoading(true);
                await loadScripts();
                const w = window;
                const tf = w.tf;
                const poseDetection = w.poseDetection;
                await tf.setBackend("webgl");
                await tf.ready();
                detector = await poseDetection.createDetector(poseDetection.SupportedModels.MoveNet, {
                    modelType: poseDetection.movenet.modelType.SINGLEPOSE_LIGHTNING,
                    enableSmoothing: true
                });
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: {
                        facingMode: "user"
                    },
                    audio: false
                });
                if (!videoRef.current) return;
                videoRef.current.srcObject = stream;
                await videoRef.current.play();
                setReady(true);
                const loop = async ()=>{
                    if (stop) return;
                    if (!videoRef.current || !canvasRef.current) {
                        requestAnimationFrame(loop);
                        return;
                    }
                    if (!detector) {
                        requestAnimationFrame(loop);
                        return;
                    }
                    const poses = await detector.estimatePoses(videoRef.current, {
                        flipHorizontal: true
                    });
                    draw(poses);
                    requestAnimationFrame(loop);
                };
                loop();
            } catch (e) {
                console.error(e);
                setFeedback([
                    "Camera or model failed to initialize."
                ]);
            } finally{
                setLoading(false);
            }
        }
        init();
        return ()=>{
            stop = true;
            try {
                const v = videoRef.current;
                const src = v?.srcObject;
                src?.getTracks().forEach((t)=>t.stop());
            } catch  {}
        };
    }, [
        loadScripts,
        currentExerciseName,
        draw
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto max-w-5xl px-4 pb-10 space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-semibold",
                        children: "AI Posture Assistant"
                    }, void 0, false, {
                        fileName: "[project]/app/assistant/page.tsx",
                        lineNumber: 254,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "border rounded-md px-2 py-1 text-sm bg-background",
                                value: currentExercise,
                                onChange: (e)=>setCurrentExercise(e.target.value),
                                "aria-label": "Select exercise",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exerciseData"].map((ex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: ex.id,
                                        children: ex.name
                                    }, ex.id, false, {
                                        fileName: "[project]/app/assistant/page.tsx",
                                        lineNumber: 263,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/assistant/page.tsx",
                                lineNumber: 256,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                variant: "secondary",
                                children: [
                                    "Confidence: ",
                                    confidence,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/assistant/page.tsx",
                                lineNumber: 268,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/assistant/page.tsx",
                        lineNumber: 255,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/assistant/page.tsx",
                lineNumber: 253,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                className: "border-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                children: "Live Camera"
                            }, void 0, false, {
                                fileName: "[project]/app/assistant/page.tsx",
                                lineNumber: 274,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                children: ready ? "Tracking keypoints in real-time" : loading ? "Loading model/camera..." : "Waiting for camera"
                            }, void 0, false, {
                                fileName: "[project]/app/assistant/page.tsx",
                                lineNumber: 275,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/assistant/page.tsx",
                        lineNumber: 273,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full max-w-full aspect-video bg-muted rounded-lg overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                        ref: videoRef,
                                        className: "hidden",
                                        playsInline: true,
                                        muted: true
                                    }, void 0, false, {
                                        fileName: "[project]/app/assistant/page.tsx",
                                        lineNumber: 285,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                        ref: canvasRef,
                                        className: "absolute inset-0 w-full h-full"
                                    }, void 0, false, {
                                        fileName: "[project]/app/assistant/page.tsx",
                                        lineNumber: 286,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/assistant/page.tsx",
                                lineNumber: 284,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex flex-wrap gap-2",
                                "aria-live": "polite",
                                children: feedback.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                        variant: f === "Good form! Keep going." ? "secondary" : "destructive",
                                        children: f
                                    }, i, false, {
                                        fileName: "[project]/app/assistant/page.tsx",
                                        lineNumber: 293,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/assistant/page.tsx",
                                lineNumber: 291,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/assistant/page.tsx",
                        lineNumber: 283,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/assistant/page.tsx",
                lineNumber: 272,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/assistant/page.tsx",
        lineNumber: 252,
        columnNumber: 5
    }, this);
}
function avgPoint(a, b) {
    if (!a || !b) return undefined;
    return {
        x: (a.x + b.x) / 2,
        y: (a.y + b.y) / 2,
        score: Math.min(a.score ?? 1, b.score ?? 1)
    };
}
function isSquat(name) {
    return /squat/i.test(name);
}
function isRow(name) {
    return /row|pulldown|pull/i.test(name);
}
function isPress(name) {
    return /press|fly|overhead/i.test(name);
}
}),
];

//# sourceMappingURL=_5028ae2c._.js.map