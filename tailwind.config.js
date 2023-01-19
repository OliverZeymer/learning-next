/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{html,js,jsx}", "./components/**/*.{html,js,jsx}", "./sections/**/*.{html,js,jsx}", "./styles/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "primary-black": "#1A232E",
        "secondary-white": "#c7c7c7",
        "primary-blue": "rgb(40, 54, 101)",
      },
      transitionTimingFunction: {
        "out-flex": "cubic-bezier(0.05, 0.6, 0.4, 0.9)",
      },
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(0, 1fr));",
        "auto-fill": "repeat(auto-fill, minmax(0, 1fr))",
      },
      gridTemplateRows: {
        "auto-fit": "repeat(auto-fit, minmax(0, 1fr))",
        "auto-fill": "repeat(auto-fill, minmax(0, 1fr))",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
