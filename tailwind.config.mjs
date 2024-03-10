/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#a8d8a8",
        secondary: {
          100: "#335b39",
          200: "#E2E2D5",
        },
      },
    },
  },
  plugins: [],
};
