/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",   // MUHIM: app folderini qo‘shish kerak
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode:'class'
}
