/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xsm: "360px",
      xs: "476px",
      // xs: "425px",
      sm: "640px",
      md: "768px",
      bs: "900px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1550px",

      "2xl-mx": { max: "1535px" },
      "xl-mx": { max: "1279px" },
      "lg-mx": { max: "1023px" },
      "bs-mx": { max: "899px" },
      "md-mx": { max: "767px" },
      "sm-mx": { max: "639px" },
      "xs-mx": { max: "475px" },
      "xsm-mx": { max: "349px" },
    },
    extend: {
      backgroundImage: {
        "main-bg": "radial-gradient(circle at 60% 80%, #19192d, #2d1929, #332C56 130%)",
        "main-bg-light": "radial-gradient(circle at 50% 10%,#d8bbeb,#c8bfef,#edd2e7 120%)",
        "button-gradient": "linear-gradient(to right,rgb(42, 20, 84), #b964a8 )",
        "button-gradient-hover": "linear-gradient(to left, rgb(135, 80, 247) , rgb(42, 20, 84))",
        "card-gradient": "linear-gradient(to bottom right,#070215, #120D24)",
        "card-gradient-light": "linear-gradient(145deg,#c7d6ef,#E6EBF4)",
        "title-gradient": "linear-gradient(to right,#8750f7, #dddddd)",
        "title-gradient-light": "linear-gradient(to right, rgb(135, 80, 247) 0%, rgb(42, 20, 84) 51%, rgb(135, 80, 247) 100%)"
      },
      fontFamily: {
        lora: ["Lora", "sans-serif"],
        bricolage: ["Bricolage Grotesque", "sans-serif"],
        jetBrains: ["JetBrains Mono", "monospace"],
        tangerine: ["Tangerine", "cursive"],
        DancingScript: ["Dancing Script", "cursive"],
        Jost: ["Jost", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#9C6FF8",
          200: "#8750f733",
          300: "#120D24",
          400: "#070215",
          500: "#262a2e",
          600: "#474e60",
          700: "#2a1454"
        },
        secondary: {
          100: "#f0f2f5b3",
          200: "#f0f2f5",
          300: "#c7d6ef",
          400: "#a0a4af"
        },
      },
      boxShadow: {
        "project-details-shadow": "2px 2px 0px 1px #8750f733, -2px -2px 0px 0.5px #8750f733",
        "project-details-shadow-light": "2px 2px 0px 1px #c8bfef, -2px -2px 0px 0.5px #c8bfef",
        "contact-form-shadow": "2px 2px 0px 1px #9C6FF8, -2px -2px 0px 0.5px #9C6FF8",
        "card-shadow": "2px 2px 0px 1px #8750f733, -6px -6px 10px -1px rgba(0, 0, 0, 0.15)",
        "card-shadow-light": "5px 5px 15px #c7d6ef,2px 2px 0px 1px #c8bfef",
        "project-card-shadow": "0px 3px 0px 0px #8750f733, -6px -6px 10px -1px rgba(0, 0, 0, 0.15)",
        "project-card-shadow-light": "0px 3px 0px 0px #c8bfef, -3px -3px 5px -1px #c8bfef",
        "social-btn-shadow": "0px 2px 1px 1px #8750f733",
        "skill-card-shadow": "#0e0814 10px 10px 19px 0px, #0e0814 -10px -10px 19px 0px",
        "skill-card-shadow-light": "#c7d6ef 10px 10px 19px 0px, #c7d6ef -10px -10px 19px 0px",
        "light-container-shadow": "0px 0px 2px #a0a4af"
      },
    },
  },
  plugins: [
    require("daisyui"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-stroke-1": {
          "-webkit-text-stroke": "0.5px rgba(124, 103, 142, 0.176)",
          "-webkit-text-fill-color": "transparent",
        },
        ".text-stroke-2": {
          "-webkit-text-stroke-width": "2px",
          "-webkit-text-stroke-color": "#1F2937",
          "-webkit-text-fill-color": "transparent",
        },
        ".text-stroke-3": {
          "-webkit-text-stroke": "0.5px #c7d6ef",
          "-webkit-text-fill-color": "transparent",
        },
        ".text-stroke-4": {
          "-webkit-text-stroke-width": "2px",
          "-webkit-text-stroke-color": "#969fbd",
          "-webkit-text-fill-color": "transparent",
        },
        ".gradient-bottom-border": {
          position: 'relative',
          paddingBottom: '3px', // Adjust for border height
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '3px', // Adjust for border thickness
            background: 'linear-gradient(to right, #8750f7, #8750f733)', // Gradient colors
            borderRadius: '0.5rem 0.5rem 0.5rem 0.5rem', // Match with the element's border radius
          }
        },
        ".active": {
          color: "#9C6FF8"
        },
        ".gradient-bottom-border-light": {
          position: 'relative',
          paddingBottom: '3px', // Adjust for border height
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '3px', // Adjust for border thickness
            background: 'linear-gradient(to right,rgb(42, 20, 84), #8750f7)', // Gradient colors
            borderRadius: '0.5rem 0.5rem 0.5rem 0.5rem', // Match with the element's border radius
          }
        },
        ".active-light": {
          color: "rgb(42, 20, 84)"
        }
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
  // daisyui: {
  //   themes: ['light', 'dark'], // Configure DaisyUI to use both light and dark themes
  // },
};
// "radial-gradient(circle at bottom, #a692fe, #efa3ed, #a692fe)"
