/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'overture-magenta': '#FF00FF',
        'overture-cyan': '#00FFFF',
        'overture-dark': '#0A0A2A',
        'overture-purple': '#1A004D',
        'overture-lavender': '#E0E0FF',
        'overture-glow': '#6B35AA',
      },
      backgroundImage: {
        'overture-gradient': 'linear-gradient(135deg, #0A0A2A 0%, #1A004D 100%)',
        'overture-glow': 'linear-gradient(45deg, #6B35AA 0%, #FF00FF 100%)',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
