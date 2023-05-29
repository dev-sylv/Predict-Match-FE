import React from "react";
import baddaFcImg from "../../assets/images/1.png";
import dhoarFcImg from "../../assets/images/2.png";
import small1 from "../../assets/images/sma1.png";

const RecentResult = () => {
  return (
    <div className="">
      {/* Recent Results */}
      <div className="mb-7">
        <h2 className="text-black text-[23px] font-[500]">Recent Results</h2>
        <div className="flex w-[160px] mb-[10px] justify-center items-center  ">
          <div className="w-[50%]  h-1 rou bg-[#fbc02d]"></div>
          <div className="w-[50%]  h-1 bg-[gray]"></div>
        </div>
      </div>

      {/* Last Match Result */}
      <div className="w-[350px] pt-20 pb-20 h-[460px] bg-[#1e1d1bd8] bg-blend-overlay  bg-bgresult bg-no-repeat bg-cover bg-center flex-col flex justify-center items-center ">
        <span className="text-[20px] text-white font-[500]">
          Last Match Result
        </span>

        <p
          className="
          text-[12px] text-[lavender] font-[500]"
        >
          SUNDAY, MARCH 20TH,2017
        </p>
        <div className="flex mt-3">
          {/* FINAL SCORE */}
          <div
            className="flex-col flex justify-center
            mt-4 items-center mr-7"
          >
            <img src={baddaFcImg} className="rounded" />
            <span className="text-[14px] mt-0.5 text-white font-[500]">
              TRISAL KING
            </span>

            <p
              className="
              text-[12px] text-[lavender] font-[400]"
            >
              SKFC
            </p>
          </div>
          <div className="flex flex-col jitems-center">
            <span className="text-[24px] text-white flex justify-center items-center font-bold">
              07{" "}
              <span className="text-[#fbc02d] font-[500] text-[40px] mr-3 ml-3">
                -
              </span>
              02
            </span>
            <p
              className="
              text-[14px] text-[#fbc02d] font-[500] bg-black flex justify-center items-center"
            >
              FINAL SCORE
            </p>
          </div>
          <div
            className="flex-col flex justify-center
            mt-4 items-center ml-7"
          >
            <img src={dhoarFcImg} className="rounded" />
            <span className="text-[14px] mt-0.5 text-white font-[500]">
              MIRPUR KING
            </span>

            <p
              className="
              text-[12px] text-[lavender] font-[400]"
            >
              SKFC
            </p>
          </div>
        </div>
        {/* Previous Results */}
        <span className="text-[20px] mt-5 mb-10 text-white font-[500]">
          Previous Results
        </span>
        <div className="flex-col flex w-full">
          <div className="flex border-b border-[#e6e6fa91]  pb-3 mb-3">
            <div className="flex justify-center mr-10 items-center pl-3">
              <img src={small1} className="h-3.5 mr-1" />
              <span className="text-[14px] text-white font-[500]">
                Badda FC
              </span>
            </div>
            <span className="text-[14px] mr-5 ml-5 text-white font-[500]">
              3 - 2
            </span>
            <div className="flex justify-center items-center ml-10">
              <img src={small1} className="h-3.5 mr-1" />
              <span className="text-[14px] text-white font-[500]">
                Badda FC
              </span>
            </div>
          </div>
          <div className="flex border-b border-[#e6e6fa91]  pb-3 mb-3">
            <div className="flex justify-center mr-10 items-center pl-3">
              <img src={small1} className="h-3.5 mr-1" />
              <span className="text-[14px] text-white font-[500]">
                Badda FC
              </span>
            </div>
            <span className="text-[14px] mr-5 ml-5 text-white font-[500]">
              3 - 2
            </span>
            <div className="flex justify-center items-center ml-10">
              <img src={small1} className="h-3.5 mr-1" />
              <span className="text-[14px] text-white font-[500]">
                Badda FC
              </span>
            </div>
          </div>
          <div className="flex border-b border-[#e6e6fa91]  pb-3 mb-3">
            <div className="flex justify-center mr-10 items-center pl-3">
              <img src={small1} className="h-3.5 mr-1" />
              <span className="text-[14px] text-white font-[500]">
                Badda FC
              </span>
            </div>
            <span className="text-[14px] mr-5 ml-5 text-white font-[500]">
              3 - 2
            </span>
            <div className="flex justify-center items-center ml-10">
              <img src={small1} className="h-3.5 mr-1" />
              <span className="text-[14px] text-white font-[500]">
                Badda FC
              </span>
            </div>
          </div>
          <div className="flex border-b border-[#e6e6fa91]  pb-3 mb-3">
            <div className="flex justify-center mr-10 items-center pl-3">
              <img src={small1} className="h-3.5 mr-1" />
              <span className="text-[14px] text-white font-[500]">
                Badda FC
              </span>
            </div>
            <span className="text-[14px] mr-5 ml-5 text-white font-[500]">
              3 - 2
            </span>
            <div className="flex justify-center items-center ml-10">
              <img src={small1} className="h-3.5 mr-1" />
              <span className="text-[14px] text-white font-[500]">
                Badda FC
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentResult;
