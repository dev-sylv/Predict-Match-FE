import React from "react";
import Hero from "./Hero";
import LatestAndResultWrapper from "./LatestAndResultWrapper";
import UpcomingMatches from "./UpcomingMatches";

import MatchPredictTable from "./MatchPredictTable";

import MatchGallery from "./MatchGallery";

const HomeScreen = () => {
  return (
    <div>
      <Hero />
      <UpcomingMatches />

      <div className="w-full py-5 flex justify-center items-center">
        <div className="w-[85%] py-5 flex justify-between items-center">
          <MatchPredictTable />
          <LatestAndResultWrapper />
        </div>
      </div>
      <MatchGallery />
    </div>
  );
};

export default HomeScreen;
