import React from "react";
import { BsArrowLeftCircle } from "react-icons/bs";

const SignUp = () => {
  return (
    <div className="w-full h-screen bg-[#E6E8EA] flex items-center justify-center">
      <div className="w-[85%] h-[85%] bg-white flex">
        <div className="w-[50%] h-[100%] bg-red-500 flex items-center justify-center">
          <div className="w-[60%] h-[90%] bg-pink-300">
            <div className="text-2xl font-bold">
              <BsArrowLeftCircle />
            </div>
            <div className="flex items-center justify-center flex-col">
              <div className="font-bold text-xl">Sign Up</div>
              <div> Join our community of football enthusiasts</div>
            </div>
          </div>
        </div>

        <div className="w-[50%] h-[100%] bg-yellow-500 flex items-center justify-center">
          <div className="w-[95%] h-[95%] rounded-xl bg-awardsBG"></div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
