import React from "react";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="bg-[#080A10] flex items-center justify-center w-full h-20">
      <div className="bg-[#080A10] w-[90%] h-[80%] flex items-center justify-between text-white">
        <div className="w-[60px] h-[60px] object-contain">
          <img src={logo} alt="" />
        </div>

        <div className="flex justify-between items-center cursor-pointer">
          <p className="mr-5 text-xl hover:text-[#FBC02D]">Home</p>
          <p className="mr-5 text-xl hover:text-[#FBC02D]">Matches</p>
          <p className="mr-5 text-xl hover:text-[#FBC02D]">
            Fixtures & Predict
          </p>
          <p className="mr-5 text-xl hover:text-[#FBC02D]">Results</p>
          <p className="mr-5 text-xl hover:text-[#FBC02D]">Gallery</p>
          <p className="mr-5 text-xl hover:text-[#FBC02D]">Contact</p>
        </div>

        <div className="flex justify-between items-center">
          <button>Sign Up</button>

          <button>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
