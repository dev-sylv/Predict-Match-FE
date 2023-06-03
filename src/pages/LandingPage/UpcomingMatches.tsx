import React from "react";
import kapa from "../../assets/kapa.png";
import dhaor from "../../assets/dhoar.png";

const UpcomingMatches = () => {
  return (
    <div id="UpcomingMatches" className="overflow-hidden">
      <div className="bg-UpcomingHero w-full bg-no-repeat bg-cover bg-center flex justify-center flex-col items-center h-[500px] font-mono">
        {/* upcoming matches */}
        <h1 className="text-white text-5xl mb-5">Upcoming Matches</h1>
        <div className="flex justify-between items-center mt-5 ">
          <div className="flex justify-center items-center flex-col">
            <img src={kapa} alt="" />
            <h3 className="text-white text-lg mt-3">KAPA CLUB</h3>
          </div>

          <div className="text-white mr-20 ml-20 flex items-center justify-center flex-col">
            <h3 className="text-lg mb-10">JUNE 16, 17:00</h3>
            <h1 className="text-[#FBC02D] text-4xl">VS</h1>
            <h3 className="text-lg mt-10">CENTRAL OLYMPIC STADIUM</h3>
          </div>

          <div className="flex justify-center items-center flex-col">
            <img src={dhaor} alt="" />
            <h3 className="text-white text-lg mt-3">DHAOR CLUB</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingMatches;
