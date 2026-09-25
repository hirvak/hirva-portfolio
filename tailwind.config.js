/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#F59E0B',
          hover: '#D97706',
          light: '#FEF3C7',
        },
        light: {
          bg: '#fafaf8',
          card: '#ffffff',
          border: '#e5e7eb',
          text: '#171717',
          muted: '#5f6368'
        },
        dark: {
          bg: '#0f1117',
          card: '#181b24',
          border: '#272c3b',
          text: '#f3f4f6',
          muted: '#9ca3af'
        }
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        heading: ['"DM Sans"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      }
    },
  },
  plugins: [],
}
