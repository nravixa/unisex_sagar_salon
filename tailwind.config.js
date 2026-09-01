/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#07110D",
        secondary: "#0B1712",
        tertiary: "#102A20",
        gold: {
          light: "#D9BF8A",
          bright: "#C9A66B",
        },
        emerald: {
          dark: "#102A20",
          light: "#12382B",
        },
        cream: "#EEE6D5",
        muted: "#A8A49A",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
