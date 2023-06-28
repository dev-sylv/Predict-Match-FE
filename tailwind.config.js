/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgi: 'url("./src/assets/images/3.jpg")',
        bgresult: 'url("./src/assets/images/images.jpg")',
        UpcomingHero: 'url("./src/assets/fb-upcoming.jpg")',
        matchtableBG: 'url("./src/assets/match-bg.jpg")',
        signupBG: 'url("./src/assets/undraw_junior_soccer_6sop.svg")',
        awardsBG: 'url("./src/assets/undraw_game_day_ucx9.svg")',
      },
    },
  },
  plugins: [],
};
