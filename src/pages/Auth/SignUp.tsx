import React from "react";

const SignUp = () => {
  return (
    <div className="w-full h-screen bg-[#E6E8EA] flex items-center justify-center">
      <div className="w-[85%] h-[85%] bg-white flex">
        <div className="w-[50%] h-[100%] bg-red-500 flex items-center justify-center">
          <div className="w-[70%] h-[70%] bg-pink-300">
            <h1 className="text-2xl font-bold font-mono">Create an account</h1>
            <p className="text-base font-normal font-mono">
              Lorem ipsum dolor sit amet consectetur{" "}
            </p>

            {/* Staert from here */}
            <div className="mt-10">
              <input
                className="border-0 outline-0"
                type="text"
                placeholder="Enter your name"
              />
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
