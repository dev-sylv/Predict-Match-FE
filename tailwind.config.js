/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgi: 'url("./src/assets/images/3.jpg")',
        UpcomingHero: 'url("./src/assets/fb-upcoming.jpg")'
      },
    },
  },
  plugins: [],
};
