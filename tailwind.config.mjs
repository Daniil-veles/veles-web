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
        'c-gray': '#E6EDF5',
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      animation: {
        slideIn: 'slideIn 0.3s ease forwards',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(10px)' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}