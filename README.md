# Muscle Selector - Next.js Workout App

A modern, sport-themed workout application built with Next.js, TypeScript, and Tailwind CSS. Select muscles and equipment to build your perfect workout plan.

## Features

- 🎯 **Interactive Muscle Selection**: Click on muscle groups to select them for your workout
- 🏋️ **Equipment Filtering**: Filter muscles based on available equipment
- 📊 **Difficulty Levels**: Filter exercises by difficulty (Beginner, Intermediate, Advanced)
- 💪 **Scientific Accuracy**: Equipment-to-muscle mappings based on exercise science
- 🎨 **Modern Sport Theme**: Beautiful, responsive UI with gradient designs

## Tech Stack

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Hooks** - State management

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:

```bash
cd muscle-selector
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
muscle-selector/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Main page
│   └── globals.css      # Global styles
├── components/
│   ├── Muscles.tsx              # Main muscles component
│   ├── MuscleIllustration.tsx   # Interactive muscle diagram
│   ├── EquipmentFilter.tsx      # Equipment selection filter
│   └── DifficultyFilter.tsx     # Difficulty level filter
├── lib/
│   └── mock-data.ts     # Mock data for muscles and equipment
└── README.md
```

## Features Explained

### Equipment Filter

Select the equipment you have available. The app will automatically filter muscle groups that can be trained with your selected equipment.

### Muscle Selection

Click on muscle groups in the interactive diagram to select them. The app recommends selecting 2-3 muscle groups for optimal training.

### Difficulty Filter

Optionally filter exercises by difficulty level to match your fitness level.

## Equipment to Muscle Mappings

The app includes scientifically accurate mappings:

- **Bodyweight**: Full body training capabilities
- **Dumbbell**: Upper body, core, and lower body
- **Barbell**: Compound movements for major muscle groups
- **Kettlebell**: Functional movements, core, and posterior chain
- **Resistance Band**: Versatile full-body training
- **Pull-up Bar**: Upper body pulling muscles
- **Bench**: Upper body pushing movements

## Development

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## License

MIT
