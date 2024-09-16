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
        'c-blue-300': '#F4F9FD',
        'c-blue-500': '#3F8CFF',
        'c-blue-600': '#3A81EB',
        'c-blue-800': '#1F6DE0',
        'c-gray-500': '#E6EDF5',
        'c-gray-800': '#7D8592',
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
}