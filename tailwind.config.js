/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      white: "#fff",
      primary: "#8db338",
      red: "#bf2020",
      stroke: "#f5f5f6",
      line: "#e5e5e5",
      background: "#1c1c1c",
      "dark-primary": "#49423d",
      secondary: "#909090",
      terteriary: "#606060",
    },
    extend: {
      fontFamily: {
        sans: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
