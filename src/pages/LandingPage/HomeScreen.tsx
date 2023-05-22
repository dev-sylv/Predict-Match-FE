import React from "react";
import Hero from "./Hero";
import LatestAndResultWrapper from "./LatestAndResultWrapper";
import UpcomingMatches from "./UpcomingMatches";

const HomeScreen = () => {
  return (
    <div>
      <Hero />
      <UpcomingMatches />
      <LatestAndResultWrapper />
    </div>
  );
};

export default HomeScreen;
