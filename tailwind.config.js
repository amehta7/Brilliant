/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Add this line to enable purging of unused styles
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
