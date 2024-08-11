/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xsm: "350px",
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
        "button-gradient": "linear-gradient(to right,rgb(42, 20, 84), #b964a8 )",
        "button-gradient-hover": "linear-gradient(to left, rgb(135, 80, 247) , rgb(42, 20, 84))",
        "card-gradient": "linear-gradient(to bottom right,#070215, #120D24)",
        "title-gradient": "linear-gradient(to right,#8750f7, #dddddd)",
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
        },
        secondary: {
          100: "#f0f2f5b3",
          200: "#f0f2f5",
        },
      },
      boxShadow: {
        "project-details-shadow": "2px 2px 0px 1px #8750f733, -2px -2px 0px 0.5px #8750f733",
        "contact-form-shadow": "2px 2px 0px 1px #9C6FF8, -2px -2px 0px 0.5px #9C6FF8",
        "project-card-shadow": "0px 3px 0px 0px #8750f733, -6px -6px 10px -1px rgba(0, 0, 0, 0.15)",
        "social-btn-shadow": "0px 2px 1px 1px #8750f733"
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
        '.gradient-bottom-border': {
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
        }
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
