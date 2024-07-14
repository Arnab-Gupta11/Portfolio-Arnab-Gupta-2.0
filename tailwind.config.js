/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // colors: {
    //   secondary: "#888A8B",
    // },
    extend: {
      backgroundImage: {
        "button-gradient": "linear-gradient(to right, rgb(135, 80, 247) , rgb(42, 20, 84))",
        "button-gradient-hover": "linear-gradient(to left, rgb(135, 80, 247) , rgb(42, 20, 84))",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        bricolage: ["Bricolage Grotesque", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
