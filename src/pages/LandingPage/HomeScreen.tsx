import React from "react";
import Hero from "./Hero";
import LatestAndResultWrapper from "./LatestAndResultWrapper";
import UpcomingMatches from "./UpcomingMatches";

import MatchPredictTable from "./MatchPredictTable";

import MatchGallery from "./MatchGallery";
import ChampionAwards from "./ChampionAwards";

const HomeScreen = () => {
  return (
    <div>
      <Hero />
      <UpcomingMatches />
      <LatestAndResultWrapper />
      <MatchGallery />
      <ChampionAwards />
    </div>
  );
};

export default HomeScreen;
