import React from "react";
import mg1 from "../../assets/images/mg1.jpg";
import mg2 from "../../assets/images/mg2.jpg";
import mg3 from "../../assets/images/mg3.jpg";
import mg4 from "../../assets/images/mg4.jpg";
import mg5 from "../../assets/images/mg5.jpg";
import mg6 from "../../assets/images/mg6.jpg";

const MatchGallery = () => {
  return (
    <div id="matchGallery" className="flex flex-col mb-5">
      <h2 className="text-black ml-[4em] text-[23px] font-[500]">
        Match Gallery
      </h2>
      <div className="flex w-[150px] ml-[5.9em] mb-[10px] justify-center items-center  ">
        <div className="w-[50%]  h-1 rou bg-[#fbc02d]"></div>
        <div className="w-[50%]  h-1 bg-[gray]"></div>
      </div>
      {/* images */}
      <div className="flex justify-center items-center flex-wrap w-full h-[600px] ">
        <img src={mg1} className="w-[360px] h-[280px] m-5 object-cover" />
        <img src={mg2} className="w-[360px] h-[280px] m-5 object-cover" />
        <img src={mg3} className="w-[360px] h-[280px] m-5 object-cover" />
        <img src={mg4} className="w-[360px] h-[280px] m-5 object-cover" />
        <img src={mg5} className="w-[360px] h-[280px] m-5 object-cover" />
        <img src={mg6} className="w-[360px] h-[280px] m-5 object-cover" />
      </div>
    </div>
  );
};

export default MatchGallery;
