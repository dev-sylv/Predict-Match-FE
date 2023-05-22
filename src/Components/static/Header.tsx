import React from "react";
import logo from "../../assets/logo.png";
import { ButtonProps } from "../../common";

const Header = () => {
  return (
    <div className="bg-[#080A10] font-mono flex items-center justify-center w-full h-20">
      <div className="bg-[#080A10] w-[85%] h-[80%] flex items-center justify-between">
        <div className="w-[60px] h-[60px] object-contain cursor-pointer">
          <img src={logo} alt="" />
        </div>

        <div className="flex justify-between items-center cursor-pointer text-white">
          <p className="mr-5 text-lg hover:text-[#FBC02D]">Home</p>
          <p className="mr-5 text-lg hover:text-[#FBC02D]">Matches</p>
          <p className="mr-5 text-lg hover:text-[#FBC02D]">
            Fixtures & Predict
          </p>
          <p className="mr-5 text-lg hover:text-[#FBC02D]">Results</p>
          <p className="mr-5 text-lg hover:text-[#FBC02D]">Gallery</p>
          <p className="mr-5 text-lg hover:text-[#FBC02D]">Contact</p>
        </div>

        <div className="flex justify-between items-center">
          <ButtonProps
            className="px-4 py-2 mr-5 cursor-pointer rounded-md bg-[#FBC02D]  hover:bg-transparent hover:border hover:border-[#FBC02D] text-white transition-all duration-100"
            text="Sign Up"
          />
          <ButtonProps
            className="px-4 py-2 cursor-pointer rounded-md border border-[#FBC02D] text-[#FBC02D] hover:bg-[#FBC02D] hover:text-white"
            text="Login"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
