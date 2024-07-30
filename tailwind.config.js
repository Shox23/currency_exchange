/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      backgroundColor: {
        glass: "rgba(255, 255, 255, 0.11)",
      },
    },
  },
  plugins: [],
};
