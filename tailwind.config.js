/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in-out",
      },
      fontFamily: {
        bowlby: ["Bowlby One SC", "sans-serif"],
        dangrek: ["Dangrek", "sans-serif"],
        playwrite: ["Playwrite GB S", "sans-serif"],
        varela: ["Varela Round", "sans-serif"],
        fredoka: ["Fredoka", "sans-serif"], // Add Fredoka font
        ntr: ["NTR", "sans-serif"], // Add NTR font
        dongle: ["Dongle", "sans-serif"], // Add Dongle font
      },
    },
  },
  plugins: [],
};
