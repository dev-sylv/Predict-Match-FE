import React from "react";
import Hero from "./Hero";
import LatestAndResultWrapper from "./LatestAndResultWrapper";
import UpcomingMatches from "./UpcomingMatches";
import MatchGallery from "./MatchGallery";

const HomeScreen = () => {
  return (
    <div>
      <Hero />
      <UpcomingMatches />
      <LatestAndResultWrapper />
      <MatchGallery />
    </div>
  );
};

export default HomeScreen;
