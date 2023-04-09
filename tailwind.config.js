/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "kaiser-text-gradient":
          "linear-gradient(90deg, #bb0e8b 1.52%, #8e0ebb 93.4%)",
        "kaiser-background-gradient":
          "linear-gradient(180deg, #690d53 0%, #1616b7 100%)",
      },
      colors: {
        white: "#fff",
        pink: "#bb0e8b",
        gray: "#25252c",
        "body-black": "#1e1e1e",
        "cord-black": "#0e0e12",
        "footer-black": "#0e0e11",
        "text-gradient-start": "#bb0e8b",
        "text-gradient-end": "#8e0ebb",
        "background-gradient-start": "#690d53",
        "background-gradient-end": "#1616b7",
      },
      fontFamily: {
        english: "'Inter', 'Poppins', 'Roboto', 'sans-serif'",
      },
      boxShadow: {
        md: "0px 36px 11px -14px rgba(0, 0, 0, 0.25)",
        lg: "42px 75px 42px -42px rgba(0, 0, 0, 0.58)",
      },
    },
  },
  plugins: [],
};
