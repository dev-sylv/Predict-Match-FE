import React from "react";

const MatchPredictTable = () => {
  return (
    <div className="bg-orange-500">
      <h2 className="text-black text-[23px] font-[500]">Match Fixture</h2>
      <div className="flex w-[160px] mb-[10px] justify-center items-center">
        <div className="w-[50%] h-1 rou bg-[#fbc02d]"></div>
        <div className="w-[50%] h-1 bg-[gray]"></div>
      </div>

      <div className="w-full py-10 bg-green-500 flex justify-center items-center">
        <div className="w-[90%] flex bg-slate-500 justify-center items-center flex-col">
          <div className="flex bg-[gray] py-4 justify-between items-center">
            <h2>
              NETTROCK FC <span className="text-[#fbc02d]">VS</span> BAMMA FC
            </h2>
            <h2 className="text-[#fbc02d]">June 16, 17:00</h2>
            <h2>NETRO STADIUM</h2>
            <h2 className="text-[#fbc02d]">Predict Matches</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchPredictTable;
