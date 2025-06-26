import { nextui } from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'team-bg': '#F2F3F4',
        'primary-magenta': '#FF00FF',
        'secondary-cyan': '#00FFFF',
        'navbar-dark': '#0A0A2A',
        'navbar-purple': '#1A004D',
        'border-purple': '#6B35AA',
        'glow-magenta': '#FF00FF'
      },
      backgroundImage: {
        'navbar-gradient': 'linear-gradient(135deg, #0A0A2A 0%, #1A004D 100%)',
        'border-glow': 'linear-gradient(45deg, #6B35AA, #FF00FF)'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
