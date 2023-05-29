import React from "react";
import cup1 from "../../assets/cup1.png";
import cup2 from "../../assets/cup2.png";
import cup3 from "../../assets/cup3.png";

const ChampionAwards = () => {
  return (
    <div className=" mt-10 w-full h-40 bg-no-repeat bg-cover bg-blend-overlay bg-[#23262C] flex  items-center justify-center bg-awardsBG">
      <div className="w-[85%] flex flex-col h-32">
        <div>
          <h2 className="text-white text-[23px] font-[500]">Champion Awards</h2>
          <div className="flex w-[160px] mb-[10px] justify-center items-center">
            <div className="w-[50%] h-1 rou bg-[#fbc02d]"></div>
            <div className="w-[50%] h-1 bg-[gray]"></div>
          </div>
        </div>

        <div>
          <img src={cup1} alt="" />
          <img src={cup2} alt="" />
          <img src={cup3} alt="" />
          <img src={cup2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ChampionAwards;
