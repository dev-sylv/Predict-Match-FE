import React from "react";

const RecentResult = () => {
  return (
    <div>
      <h2 className="text-black text-[23px] font-[500]">Recent Results</h2>
      <div className="flex w-[160px] mb-[10px] justify-center items-center  ">
        <div className="w-[50%] rounded h-1 rou bg-[#fbc02d]"></div>
        <div className="w-[50%] rounded h-1 bg-[gray]"></div>
      </div>
      <div className="w-[350px] h-[400px] bg-bgresult bg-no-repeat bg-cover bg-center flex-col flex justify-center items-center ">
        <span className="text-[20px] text-white font-[500]">
          Last Match Result
        </span>
        <p
          className="
              text-[11px] text-[lavender] font-[500]"
        >
          SUNDAY, MARCH 20TH,2017
        </p>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default RecentResult;
