/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,mjs}"],
  // These component classes are only @applied from markdown.css (applied to rendered
  // markdown), so Tailwind purges them when there are no posts to scan. Keep them alive.
  safelist: ["link", "btn-regular-dark"],
  darkMode: "class", // allows toggling dark mode manually
  theme: {
    // Pixel/dot style: square every corner by zeroing all border-radius scales.
    borderRadius: {
      none: "0",
      sm: "0",
      DEFAULT: "0",
      md: "0",
      lg: "0",
      xl: "0",
      "2xl": "0",
      "3xl": "0",
      full: "0",
    },
    extend: {
      fontFamily: {
        sans: ["Galmuri11", ...defaultTheme.fontFamily.sans],
        mono: ["GalmuriMono11", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
