import { fontFamily } from "tailwindcss/defaultTheme";

const bgColors = {
  'bg-first': 'var(--bg-first)',
  'bg-second': 'var(--bg-second)',
  'bg-third': 'var(--bg-third)',
  'bg-third-easy': 'var(--bg-third-easy)',
  'bg-fourth': 'var(--bg-fourth)',
  'bg-fourth-light': 'var(--bg-fourth-light)',
  'bg-fifth': 'var(--bg-fifth)',
  'bg-six': 'var(--bg-six)',
};

const textColors = {
  'text-first': 'var(--text-first)',
  'text-second': 'var(--text-second)',
  'text-third': 'var(--text-third)',
  'text-fourth': 'var(--text-fourth)',
  'text-fifth': 'var(--text-fifth)',
  'text-six': 'var(--text-six)',
};


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
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      padding: {
        '120px': '120px',
      },
      colors: {
        ...bgColors,
        ...textColors,
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}