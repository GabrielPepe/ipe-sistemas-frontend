/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00AAFF",
        secondary: "#CCDDFF",
        tertiary: "#1F8FC7",
      },
      fontFamily: {
        sans: "Inter",
      },
    },
  },
  plugins: [],
};
