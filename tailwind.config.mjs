import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        'c-light-blue': '#F4F9FD',
        'c-blue': '#3F8CFF',
        'c-blue-darker': '#2B5BCC',
        'c-gray': '#E6EDF5',
        'c-dark-gray': '#7D8592',
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
}