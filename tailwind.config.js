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
      },
    },
  },
  plugins: [],
};
