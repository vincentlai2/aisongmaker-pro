import type { Config } from "tailwindcss"

// all in fixtures is set to tailwind v3 as interims solutions

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          50: "#f0f4ff",
          100: "#e0e7ff",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
        },
        // 🎵 Music-themed colors
        music: {
          // Sound wave colors - inspired by audio visualizers
          wave: {
            50: "#f0f9ff",   // Light cyan
            100: "#e0f2fe",  // Lighter cyan
            200: "#bae6fd",  // Light blue
            300: "#7dd3fc",  // Medium blue
            400: "#38bdf8",  // Bright blue
            500: "#0ea5e9",  // Primary blue
            600: "#0284c7",  // Darker blue
            700: "#0369a1",  // Deep blue
            800: "#075985",  // Very deep blue
            900: "#0c4a6e",  // Darkest blue
          },
          // Beat colors - inspired by rhythm and energy
          beat: {
            50: "#fef7ee",   // Light orange
            100: "#fdedd3",  // Lighter orange
            200: "#fed7aa",  // Light peach
            300: "#fdba74",  // Medium orange
            400: "#fb923c",  // Bright orange
            500: "#f97316",  // Primary orange
            600: "#ea580c",  // Darker orange
            700: "#c2410c",  // Deep orange
            800: "#9a3412",  // Very deep orange
            900: "#7c2d12",  // Darkest orange
          },
          // Melody colors - inspired by harmony and flow
          melody: {
            50: "#f0fdf4",   // Light green
            100: "#dcfce7",  // Lighter green
            200: "#bbf7d0",  // Light mint
            300: "#86efac",  // Medium green
            400: "#4ade80",  // Bright green
            500: "#22c55e",  // Primary green
            600: "#16a34a",  // Darker green
            700: "#15803d",  // Deep green
            800: "#166534",  // Very deep green
            900: "#14532d",  // Darkest green
          },
          // Bass colors - deep and powerful
          bass: {
            50: "#faf5ff",   // Light purple
            100: "#f3e8ff",  // Lighter purple
            200: "#e9d5ff",  // Light lavender
            300: "#d8b4fe",  // Medium purple
            400: "#c084fc",  // Bright purple
            500: "#a855f7",  // Primary purple
            600: "#9333ea",  // Darker purple
            700: "#7c3aed",  // Deep purple
            800: "#6b21a8",  // Very deep purple
            900: "#581c87",  // Darkest purple
          },
          // Neon colors - for highlights and accents
          neon: {
            cyan: "#00ffff",     // Electric cyan
            pink: "#ff1493",     // Hot pink
            green: "#39ff14",    // Electric green
            yellow: "#ffff00",   // Electric yellow
            purple: "#bf00ff",   // Electric purple
            orange: "#ff4500",   // Electric orange
          },
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        // 🎵 Music-themed animations
        "sound-wave": {
          "0%, 100%": {
            transform: "scaleY(1)",
            opacity: "0.7"
          },
          "50%": {
            transform: "scaleY(1.5)",
            opacity: "1"
          },
        },
        "pulse-beat": {
          "0%, 100%": {
            transform: "scale(1)",
            opacity: "0.8"
          },
          "50%": {
            transform: "scale(1.1)",
            opacity: "1"
          },
        },
        "float-melody": {
          "0%, 100%": {
            transform: "translateY(0px) rotate(0deg)",
          },
          "33%": {
            transform: "translateY(-10px) rotate(1deg)",
          },
          "66%": {
            transform: "translateY(-5px) rotate(-1deg)",
          },
        },
        "glow-neon": {
          "0%, 100%": {
            boxShadow: "0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor",
          },
          "50%": {
            boxShadow: "0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor",
          },
        },
        "spectrum-shift": {
          "0%": {
            background: "linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)",
          },
          "14%": {
            background: "linear-gradient(45deg, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3, #ff0000)",
          },
          "28%": {
            background: "linear-gradient(45deg, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3, #ff0000, #ff7f00)",
          },
          "42%": {
            background: "linear-gradient(45deg, #00ff00, #0000ff, #4b0082, #9400d3, #ff0000, #ff7f00, #ffff00)",
          },
          "57%": {
            background: "linear-gradient(45deg, #0000ff, #4b0082, #9400d3, #ff0000, #ff7f00, #ffff00, #00ff00)",
          },
          "71%": {
            background: "linear-gradient(45deg, #4b0082, #9400d3, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff)",
          },
          "85%": {
            background: "linear-gradient(45deg, #9400d3, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082)",
          },
          "100%": {
            background: "linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        // 🎵 Music animations
        "sound-wave": "sound-wave 1.5s ease-in-out infinite",
        "sound-wave-delay-1": "sound-wave 1.5s ease-in-out infinite 0.1s",
        "sound-wave-delay-2": "sound-wave 1.5s ease-in-out infinite 0.2s",
        "sound-wave-delay-3": "sound-wave 1.5s ease-in-out infinite 0.3s",
        "pulse-beat": "pulse-beat 2s ease-in-out infinite",
        "float-melody": "float-melody 6s ease-in-out infinite",
        "glow-neon": "glow-neon 2s ease-in-out infinite",
        "spectrum-shift": "spectrum-shift 8s linear infinite",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
        "gradient-hero": "linear-gradient(135deg, #8b5cf6 0%, #a855f7 50%, #7c3aed 100%)",
        // 🎵 Music-themed gradients
        "gradient-sound-wave": "linear-gradient(90deg, #0ea5e9 0%, #38bdf8 25%, #7dd3fc 50%, #38bdf8 75%, #0ea5e9 100%)",
        "gradient-beat-pulse": "linear-gradient(45deg, #f97316 0%, #fb923c 50%, #fdba74 100%)",
        "gradient-melody-flow": "linear-gradient(135deg, #22c55e 0%, #4ade80 50%, #86efac 100%)",
        "gradient-bass-deep": "linear-gradient(180deg, #581c87 0%, #7c3aed 50%, #a855f7 100%)",
        "gradient-neon-glow": "linear-gradient(45deg, #00ffff 0%, #ff1493 25%, #39ff14 50%, #ffff00 75%, #bf00ff 100%)",
        "gradient-spectrum": "linear-gradient(90deg, #ff0000 0%, #ff7f00 14%, #ffff00 28%, #00ff00 42%, #0000ff 57%, #4b0082 71%, #9400d3 85%, #ff0000 100%)",
        "gradient-vinyl": "radial-gradient(circle, #1a1a1a 0%, #2d2d2d 30%, #1a1a1a 60%, #000000 100%)",
        "gradient-studio": "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 25%, #2d2d2d 50%, #1a1a1a 75%, #0f0f0f 100%)",
        // Audio visualizer patterns
        "pattern-equalizer": "repeating-linear-gradient(90deg, transparent 0px, transparent 8px, rgba(14, 165, 233, 0.3) 8px, rgba(14, 165, 233, 0.3) 12px)",
        "pattern-waveform": "repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(56, 189, 248, 0.2) 2px, rgba(56, 189, 248, 0.2) 4px)",
        "pattern-vinyl-grooves": "repeating-radial-gradient(circle, transparent 0px, transparent 2px, rgba(255, 255, 255, 0.1) 2px, rgba(255, 255, 255, 0.1) 3px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
