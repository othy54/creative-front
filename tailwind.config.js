/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector', // or 'media' or 'class'
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        mocha: {
          100: "#f5f0ed",
          200: "#e0d1c9",
          300: "#cbb2a6",
          400: "#b69382",
          500: "#a1745e",
          600: "#7d5a49",
          700: "#594034",
          800: "#36271f",
          900: "#120d0a",
        },
      },
    },
  },
  plugins: [],
};
