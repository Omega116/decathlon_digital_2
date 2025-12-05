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
"[project]/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-sm": "size-8",
            "icon-lg": "size-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/assistant/MediaPipeAssistant.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MediaPipeAssistant
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CirclePlay$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-play.js [app-ssr] (ecmascript) <export default as CirclePlay>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square.js [app-ssr] (ecmascript) <export default as Square>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LoaderCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as LoaderCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mock-data.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const ALL_EXERCISES = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exerciseData"];
const IDEAL_ANGLES = {
    squat: {
        "Left Knee": [
            80,
            110
        ],
        "Right Knee": [
            80,
            110
        ],
        "Back Alignment": [
            160,
            180
        ]
    },
    pushup: {
        "Left Elbow": [
            80,
            110
        ],
        "Right Elbow": [
            80,
            110
        ],
        "Back Alignment": [
            160,
            180
        ]
    },
    deadlift: {
        "Back Alignment": [
            160,
            180
        ],
        "Left Knee": [
            160,
            180
        ],
        "Right Knee": [
            160,
            180
        ]
    },
    bicep_curl: {
        "Left Elbow": [
            30,
            50
        ],
        "Right Elbow": [
            30,
            50
        ]
    },
    shoulder_press: {
        "Left Elbow": [
            80,
            100
        ],
        "Right Elbow": [
            80,
            100
        ],
        "Left Shoulder": [
            160,
            180
        ],
        "Right Shoulder": [
            160,
            180
        ]
    }
};
function MediaPipeAssistant() {
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cameraRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const poseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [currentExercise, setCurrentExercise] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(ALL_EXERCISES[0]?.id ?? "");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAnalyzing, setIsAnalyzing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [feedbackText, setFeedbackText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Click "Start Camera" and begin your exercise to receive real-time AI feedback on your form.');
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        label: "Ready to analyze",
        variant: "hidden"
    });
    const prevFeedbackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])("");
    const analyzingFlagRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const selectedExercise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>ALL_EXERCISES.find((e)=>e.id === currentExercise), [
        currentExercise
    ]);
    const referenceImage = selectedExercise ? `/${selectedExercise.gif}` : undefined;
    const loadScripts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        const add = (src)=>new Promise((resolve, reject)=>{
                const s = document.createElement("script");
                s.src = src;
                s.async = true;
                s.onload = ()=>resolve();
                s.onerror = (e)=>reject(e);
                document.body.appendChild(s);
            });
        if (window.Pose && window.Camera) return;
        await add("https://cdn.jsdelivr.net/npm/@mediapipe/pose@0.5.1675469404/pose.js");
        await add("https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils@0.3.1675466862/camera_utils.js");
    }, []);
    const updateFeedback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((text)=>{
        setFeedbackText(text);
    }, []);
    const updateFormStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((label, kind)=>{
        setStatus({
            label,
            variant: kind
        });
    }, []);
    const showAnalyzing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((show)=>{
        setIsAnalyzing(show);
    }, []);
    function mapExerciseToIdealKey(name) {
        const n = name.toLowerCase();
        if (/squat/.test(n)) return "squat";
        if (/deadlift/.test(n)) return "deadlift";
        if (/push\s?-?\s?up/.test(n)) return "pushup";
        if (/curl/.test(n)) return "bicep_curl";
        if (/(shoulder\s*press|overhead\s*press)/.test(n)) return "shoulder_press";
        return null;
    }
    const startCamera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            setLoading(true);
            await loadScripts();
            // Request camera
            const stream = await navigator.mediaDevices.getUserMedia({
                video: {
                    width: 640,
                    height: 480
                }
            });
            if (!videoRef.current) return;
            videoRef.current.srcObject = stream;
            // Init Pose
            poseRef.current = new window.Pose({
                locateFile: (file)=>`https://cdn.jsdelivr.net/npm/@mediapipe/pose@0.5.1675469404/${file}`
            });
            poseRef.current.setOptions({
                modelComplexity: 1,
                smoothLandmarks: true,
                enableSegmentation: false,
                minDetectionConfidence: 0.5,
                minTrackingConfidence: 0.5
            });
            poseRef.current.onResults(onPoseResults);
            // Camera wrapper reads from the HTMLVideoElement
            cameraRef.current = new window.Camera(videoRef.current, {
                onFrame: async ()=>{
                    if (poseRef.current && videoRef.current?.readyState === 4) {
                        await poseRef.current.send({
                            image: videoRef.current
                        });
                    }
                },
                width: 640,
                height: 480
            });
            cameraRef.current.start();
            setReady(true);
            updateFeedback("📹 Camera started! Begin your exercise and AI will analyze your form.");
            updateFormStatus("Ready to analyze", "good");
        } catch (e) {
            console.error("Camera init error:", e);
            updateFeedback("❌ Error accessing camera. Please allow camera permissions and try again.");
        } finally{
            setLoading(false);
        }
    }, [
        loadScripts,
        updateFeedback,
        updateFormStatus
    ]);
    const stopCamera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        try {
            const v = videoRef.current;
            const src = v?.srcObject;
            src?.getTracks().forEach((t)=>t.stop());
            if (cameraRef.current) cameraRef.current.stop();
            setReady(false);
            updateFeedback('⏹️ Camera stopped. Click "Start Camera" to resume.');
            updateFormStatus("Ready to analyze", "hidden");
        } catch  {}
    }, [
        updateFeedback,
        updateFormStatus
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            try {
                const v = videoRef.current;
                const src = v?.srcObject;
                src?.getTracks().forEach((t)=>t.stop());
            } catch  {}
            try {
                cameraRef.current?.stop?.();
            } catch  {}
        };
    }, []);
    function drawPose(landmarks) {
        const canvas = canvasRef.current;
        const video = videoRef.current;
        if (!canvas || !video) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        ctx.save();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // draw skeleton
        const connections = [
            [
                11,
                12
            ],
            [
                11,
                13
            ],
            [
                13,
                15
            ],
            [
                12,
                14
            ],
            [
                14,
                16
            ],
            [
                11,
                23
            ],
            [
                12,
                24
            ],
            [
                23,
                24
            ],
            [
                23,
                25
            ],
            [
                25,
                27
            ],
            [
                27,
                29
            ],
            [
                27,
                31
            ],
            [
                24,
                26
            ],
            [
                26,
                28
            ],
            [
                28,
                30
            ],
            [
                28,
                32
            ]
        ];
        ctx.strokeStyle = "#22c55e";
        ctx.lineWidth = 3;
        for (const [s, e] of connections){
            const start = landmarks[s];
            const end = landmarks[e];
            if (start && end && start.visibility > 0.5 && end.visibility > 0.5) {
                ctx.beginPath();
                ctx.moveTo(start.x * canvas.width, start.y * canvas.height);
                ctx.lineTo(end.x * canvas.width, end.y * canvas.height);
                ctx.stroke();
            }
        }
        ctx.fillStyle = "#ef4444";
        ctx.strokeStyle = "#22c55e";
        ctx.lineWidth = 2;
        for (const lm of landmarks){
            if (lm.visibility > 0.5) {
                ctx.beginPath();
                ctx.arc(lm.x * canvas.width, lm.y * canvas.height, 5, 0, 2 * Math.PI);
                ctx.fill();
                ctx.stroke();
            }
        }
        ctx.restore();
    }
    function calculateAngles(landmarks) {
        const getAngle = (a, b, c)=>{
            const radians = Math.atan2(c.y - b.y, c.x - b.x) - Math.atan2(a.y - b.y, a.x - b.x);
            let angle = Math.abs(radians * 180.0 / Math.PI);
            if (angle > 180.0) angle = 360 - angle;
            return Math.round(angle);
        };
        const angles = {};
        try {
            angles["Left Knee"] = getAngle(landmarks[23], landmarks[25], landmarks[27]);
            angles["Right Knee"] = getAngle(landmarks[24], landmarks[26], landmarks[28]);
            angles["Left Hip"] = getAngle(landmarks[11], landmarks[23], landmarks[25]);
            angles["Right Hip"] = getAngle(landmarks[12], landmarks[24], landmarks[26]);
            angles["Left Elbow"] = getAngle(landmarks[11], landmarks[13], landmarks[15]);
            angles["Right Elbow"] = getAngle(landmarks[12], landmarks[14], landmarks[16]);
            angles["Left Shoulder"] = getAngle(landmarks[13], landmarks[11], landmarks[23]);
            angles["Right Shoulder"] = getAngle(landmarks[14], landmarks[12], landmarks[24]);
            const midShoulder = {
                x: (landmarks[11].x + landmarks[12].x) / 2,
                y: (landmarks[11].y + landmarks[12].y) / 2
            };
            const midHip = {
                x: (landmarks[23].x + landmarks[24].x) / 2,
                y: (landmarks[23].y + landmarks[24].y) / 2
            };
            angles["Back Alignment"] = getAngle({
                x: midShoulder.x,
                y: 0
            }, midShoulder, midHip);
        } catch (e) {
        // ignore
        }
        return angles;
    }
    function checkFormAccuracy(currentAngles, idealAngles) {
        let total = 0;
        let pass = 0;
        for (const [joint, [min, max]] of Object.entries(idealAngles)){
            if (currentAngles[joint] !== undefined) {
                total++;
                const angle = currentAngles[joint];
                const tolerance = 15;
                if (angle >= min - tolerance && angle <= max + tolerance) pass++;
            }
        }
        const accuracy = total > 0 ? Math.round(pass / total * 100) : 0;
        return {
            accuracy,
            isPerfect: accuracy >= 95
        };
    }
    async function analyzePose(landmarks) {
        if (analyzingFlagRef.current) return;
        analyzingFlagRef.current = true;
        showAnalyzing(true);
        try {
            const angles = calculateAngles(landmarks);
            const idealKey = mapExerciseToIdealKey(selectedExercise?.name || "");
            const ideal = idealKey ? IDEAL_ANGLES[idealKey] : undefined;
            const form = ideal ? checkFormAccuracy(angles, ideal) : null;
            const frameDataUrl = canvasRef.current?.toDataURL("image/jpeg", 0.85) || "";
            const res = await fetch("/api/gemini-feedback", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    exercise: selectedExercise?.name || currentExercise,
                    angles,
                    idealAngles: ideal || {},
                    referenceImagePath: selectedExercise?.gif || "",
                    currentFrameDataUrl: frameDataUrl,
                    previousFeedback: prevFeedbackRef.current || ""
                })
            });
            if (!res.ok) throw new Error(`API Error: ${res.status}`);
            const data = await res.json();
            const fb = data.text || data.error || "";
            prevFeedbackRef.current = fb;
            updateFeedback(fb);
            if (form?.isPerfect) {
                updateFormStatus("PERFECT FORM! ✓", "perfect");
            } else if (form && form.accuracy >= 80) {
                updateFormStatus(`Good Form (${form.accuracy}%)`, "good");
            } else if (form) {
                updateFormStatus(`Needs Improvement (${form.accuracy}%)`, "needs");
            } else {
                // No ideal profile known for this exercise; hide status box
                updateFormStatus("", "hidden");
            }
        } catch (e) {
            console.error("Analysis error:", e);
            updateFeedback(`❌ Error: ${e.message || "Failed to analyze"}`);
        } finally{
            showAnalyzing(false);
            setTimeout(()=>{
                analyzingFlagRef.current = false;
            }, 3000);
        }
    }
    function onPoseResults(results) {
        if (!results?.poseLandmarks) return;
        drawPose(results.poseLandmarks);
        if (!analyzingFlagRef.current) analyzePose(results.poseLandmarks);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto max-w-6xl px-4 pb-10 space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-semibold",
                        children: "AI Posture Assistant"
                    }, void 0, false, {
                        fileName: "[project]/components/assistant/MediaPipeAssistant.tsx",
                        lineNumber: 429,
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
                                children: ALL_EXERCISES.map((ex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: ex.id,
                                        children: ex.name
                                    }, ex.id, false, {
                                        fileName: "[project]/components/assistant/MediaPipeAssistant.tsx",
                                        lineNumber: 438,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/assistant/MediaPipeAssistant.tsx",
                                lineNumber: 431,
                                columnNumber: 11
                            }, this),
                            !ready ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: startCamera,
                                disabled: loading,
                                size: "sm",
                                children: [
                                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LoaderCircle$3e$__["LoaderCircle"], {
                                        className: "animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/components/assistant/MediaPipeAssistant.tsx",
                                        lineNumber: 446,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CirclePlay$3e$__["CirclePlay"], {}, void 0, false, {
                                        fileName: "[project]/components/assistant/MediaPipeAssistant.tsx",
                                        lineNumber: 448,
                                        columnNumber: 17
                                    }, this),
                                    "Start Camera"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/assistant/MediaPipeAssistant.tsx",
                                lineNumber: 444,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: stopCamera,
                                variant: "destructive",
                                size: "sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__["Square"], {}, void 0, false, {
                                        fileName: "[project]/components/assistant/MediaPipeAssistant.tsx",
                                        lineNumber: 454,
                                        columnNumber: 15
                                    }, this),
                                    " Stop"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/assistant/MediaPipeAssistant.tsx",
                                lineNumber: 453,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/assistant/MediaPipeAssistant.tsx",
                        lineNumber: 430,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/assistant/MediaPipeAssistant.tsx",
                lineNumber: 428,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        className: "border-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        children: "Live Camera"
                                    }, void 0, false, {
                                        fileName: "[project]/components/assistant/MediaPipeAssistant.tsx",
                                        lineNumber: 463,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                        children: ready ? "Tracking landmarks in real-time" : loading ? "Starting camera..." : "Waiting for camera"
                                    }, void 0, false, {
                                        fileName: "[project]/components/assistant/MediaPipeAssistant.tsx",
                                        lineNumber: 464,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/assistant/MediaPipeAssistant.tsx",
                                lineNumber: 462,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-full max-w-full aspect-video bg-black rounded-lg overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                ref: videoRef,
                                                className: "absolute inset-0 w-full h-full",
                                                autoPlay: true,
                                                playsInline: true
                                            }, void 0, false, {
                                                fileName: "[project]/components/assistant/MediaPipeAssistant.tsx",
                                                lineNumber: 474,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                                ref: canvasRef,
                                                className: "absolute inset-0 w-full h-full"
                                            }, void 0, false, {
                                                fileName: "[project]/components/assistant/MediaPipeAssistant.tsx",
                                                lineNumber: 480,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/assistant/MediaPipeAssistant.tsx",
                                        lineNumber: 473,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-muted-foreground",
                                                children: "Reference: "
                                            }, void 0, false, {
                                                fileName: "[project]/components/assistant/MediaPipeAssistant.tsx",
                                                lineNumber: 486,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 flex items-center gap-3",
                                                children: [
                                                    referenceImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: referenceImage,
                                                        alt: "Exercise reference",
                                                        className: "h-24 w-auto rounded-md border"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assistant/MediaPipeAssistant.tsx",
                                                        lineNumber: 489,
                                                        columnNumber: 19
                                                    }, this) : null,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                        variant: "secondary",
                                                        className: "text-xs",
                                                        children: selectedExercise?.name ?? currentExercise
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/assistant/MediaPipeAssistant.tsx",
                                                        lineNumber: 495,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/assistant/MediaPipeAssistant.tsx",
                                                lineNumber: 487,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/assistant/MediaPipeAssistant.tsx",
                                        lineNumber: 485,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/assistant/MediaPipeAssistant.tsx",
                                lineNumber: 472,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/assistant/MediaPipeAssistant.tsx",
                        lineNumber: 461,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        className: "border-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        children: "AI Feedback"
                                    }, void 0, false, {
                                        fileName: "[project]/components/assistant/MediaPipeAssistant.tsx",
                                        lineNumber: 505,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                        children: isAnalyzing ? "Analyzing your form..." : "Live guidance based on your movement"
                                    }, void 0, false, {
                                        fileName: "[project]/components/assistant/MediaPipeAssistant.tsx",
                                        lineNumber: 506,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/assistant/MediaPipeAssistant.tsx",
                                lineNumber: 504,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: [
                                    isAnalyzing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-muted-foreground flex items-center gap-2 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LoaderCircle$3e$__["LoaderCircle"], {
                                                className: "animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/components/assistant/MediaPipeAssistant.tsx",
                                                lineNumber: 515,
                                                columnNumber: 17
                                            }, this),
                                            " Processing"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/assistant/MediaPipeAssistant.tsx",
                                        lineNumber: 514,
                                        columnNumber: 15
                                    }, this),
                                    status.variant !== "hidden" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-3 rounded-md px-3 py-2 text-sm font-medium " + (status.variant === "perfect" ? "bg-green-100 text-green-700 border border-green-300" : status.variant === "good" ? "bg-blue-100 text-blue-700 border border-blue-300" : "bg-amber-100 text-amber-700 border border-amber-300"),
                                        children: status.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/assistant/MediaPipeAssistant.tsx",
                                        lineNumber: 519,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm whitespace-pre-wrap leading-6",
                                        children: feedbackText
                                    }, void 0, false, {
                                        fileName: "[project]/components/assistant/MediaPipeAssistant.tsx",
                                        lineNumber: 532,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/assistant/MediaPipeAssistant.tsx",
                                lineNumber: 512,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/assistant/MediaPipeAssistant.tsx",
                        lineNumber: 503,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/assistant/MediaPipeAssistant.tsx",
                lineNumber: 460,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/assistant/MediaPipeAssistant.tsx",
        lineNumber: 427,
        columnNumber: 5
    }, this);
}
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
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$assistant$2f$MediaPipeAssistant$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/assistant/MediaPipeAssistant.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$assistant$2f$MediaPipeAssistant$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/app/assistant/page.tsx",
        lineNumber: 36,
        columnNumber: 10
    }, this);
    //TURBOPACK unreachable
    ;
    const videoRef = undefined;
    const canvasRef = undefined;
    const loading = undefined, setLoading = undefined;
    const ready = undefined, setReady = undefined;
    const feedback = undefined, setFeedback = undefined;
    const confidence = undefined, setConfidence = undefined;
    const currentExercise = undefined, setCurrentExercise = undefined;
    const isRecording = undefined, setIsRecording = undefined;
    const isAnalyzing = undefined, setIsAnalyzing = undefined;
    const aiText = undefined, setAiText = undefined;
    const mediaRecorderRef = undefined;
    const chunksRef = undefined;
    const currentExerciseName = undefined;
    const currentExerciseNameRef = undefined;
    const draw = undefined;
    const loadScripts = undefined;
    const startRecording = undefined;
    const stopRecording = undefined;
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

//# sourceMappingURL=_fd908590._.js.map