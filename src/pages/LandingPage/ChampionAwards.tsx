import React from "react";

const ChampionAwards = () => {
  return (
    <div className="w-full h-40 bg-no-repeat bg-cover bg-blend-overlay bg-[#23262C] flex justify-center items-center bg-awardsBG">
      <div>
        <h2 className="text-black text-[23px] font-[500]">Champion Awards</h2>
        <div className="flex w-[160px] mb-[10px] justify-center items-center">
          <div className="w-[50%] h-1 rou bg-[#fbc02d]"></div>
          <div className="w-[50%] h-1 bg-[gray]"></div>
        </div>
      </div>
    </div>
  );
};

export default ChampionAwards;
