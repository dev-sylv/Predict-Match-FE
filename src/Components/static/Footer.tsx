import React from "react";

const Footer = () => {
  return (
    <div
      id="contact"
      className=" text-slate-200 bg-black w-full py-10 flex justify-center items-center">
      <div className="bg-red-400 w-[85%] py-2 flex justify-between ">
        <div className="flex flex-col text-base w-[23%] text-justify">
          <div className="mb-5">
            <h2 className="text-white text-[18px] font-[500]">About Us</h2>
            <div className="flex w-[190px] mb-[10px] justify-center items-center">
              <div className="w-[30%] h-0.5 rou bg-[#fbc02d]"></div>
              <div className="w-[70%] h-0.5 bg-[gray]"></div>
            </div>
          </div>
          <div className="w-full mb-5">
            We cover a wide range of football competitions, including major
            leagues such as the English Premier League, UEFA, and many more
          </div>
          <div>
            Remember, we don't just predict the game, we enhance your football
            journey!
          </div>
        </div>

        <div className="flex flex-col w-[23%]">
          <div className="mb-5">
            <h2 className="text-white text-[18px] font-[500]">
              Recent Matches
            </h2>
            <div className="flex w-[190px] mb-[10px] justify-center items-center">
              <div className="w-[30%] h-0.5 rou bg-[#fbc02d]"></div>
              <div className="w-[70%] h-0.5 bg-[gray]"></div>
            </div>
          </div>
          <div className="flex items-center mb-3">
            <div className="w-20 h-14 bg-[#FBC02D] flex items-center justify-center flex-col">
              {" "}
              <p>28</p>
              <p>June</p>
            </div>
            <div className="ml-5 text-center">
              <h5 className="m-0 text-sm">Mancity</h5>
              <p className="text-[#FBC02D]">vs</p>
              <h5 className="m-0 text-sm">Arsenal</h5>
            </div>
          </div>
          <div className="border-b-[1px] border-[lavender]"></div>
          <div className="flex items-center mt-3">
            <div className="w-20 h-14 bg-[#FBC02D] flex items-center justify-center flex-col">
              {" "}
              <p>28</p>
              <p>June</p>
            </div>
            <div className="ml-5 text-center">
              <h5 className="m-0 text-sm">Liverpool</h5>
              <p className="text-[#FBC02D]">vs</p>
              <h5 className="m-0 text-sm">Chelsea</h5>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-5">
            <h2 className="text-white text-[18px] font-[500]">Useful Links</h2>
            <div className="flex w-[190px] mb-[10px] justify-center items-center">
              <div className="w-[30%] h-0.5 rou bg-[#fbc02d]"></div>
              <div className="w-[70%] h-0.5 bg-[gray]"></div>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-5">
            <h2 className="text-white text-[18px] font-[500]">Contact Us</h2>
            <div className="flex w-[190px] mb-[10px] justify-center items-center">
              <div className="w-[30%] h-0.5 rou bg-[#fbc02d]"></div>
              <div className="w-[70%] h-0.5 bg-[gray]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
