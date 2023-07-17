/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        112: "28rem",
      },
      maxWidth: {
        96: "24rem",
        screen: "80vw",
      },
      maxHeight: {
        screen: "80vh",
        100: "25rem",
      },
      minWidth: {
        36: "9rem",
      },
      minHeight: {
        32: "8rem",
      },
      zIndex: {
        modal: 1000,
        loading: 5000,
        navigateBar: 4000,
      },
    },
  },
  plugins: [],
};
