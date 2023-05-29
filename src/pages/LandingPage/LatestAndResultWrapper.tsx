import React from "react";
import RecentResult from "./RecentResult";
import MatchPredictTable from "./MatchPredictTable";

const LatestAndResultWrapper = () => {
  return (
    <div className="w-full py-5 flex justify-center items-center">
      <div className="w-[85%] py-5 flex justify-between">
        <MatchPredictTable />
        <RecentResult />
      </div>
    </div>
  );
};

export default LatestAndResultWrapper;
