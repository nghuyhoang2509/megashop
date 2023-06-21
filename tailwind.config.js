/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minWidth: {
        36: "9rem",
      },
      minHeight: {
        32: "8rem",
      },
    },
  },
  plugins: [],
};
