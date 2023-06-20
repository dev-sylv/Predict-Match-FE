import React from "react";
import {
  BsArrowLeftCircle,
  BsFillEyeFill,
  BsFillEyeSlashFill,
} from "react-icons/bs";

const SignUp = () => {
  const [show, setshow] = React.useState(false);

  const toggleFn = () => {
    setshow(!show);
  };

  return (
    <div className="w-full h-screen bg-[#E6E8EA] flex items-center justify-center">
      <div className="w-[85%] h-[85%] bg-white flex">
        <div className="w-[50%] h-[100%] bg-red-500 flex items-center justify-center">
          <div className="w-[60%] h-[90%] bg-pink-300 flex items-center flex-col">
            <div className="text-[30px] font-bold w-full cursor-pointer">
              <BsArrowLeftCircle />
            </div>
            <div className="flex items-center justify-center flex-col">
              <h1 className="font-semibold text-2xl m-2">Sign Up</h1>
              <p className="text-sm font-medium text-[rgba(0,0,0,0.6)]">
                {" "}
                Join our community of football enthusiasts
              </p>
            </div>
            <div className="rounded-[400px] h-20 w-20 border border-black m-3"></div>
            <button className="rounded-2xl bg-slate-600 py-[10px] px-[30px] text-white capitalize">
              upload a photo
            </button>

            <input
              className="w-[90%] h-12 m-3 pl-4  outline-1  outline-[rgba(0,0,0,0.6)] rounded-md  border border-[#10475a] capitalize"
              type="text"
              placeholder="name"
            />
            <input
              className="w-[90%] h-12 m-3 pl-4  outline-1  outline-[rgba(0,0,0,0.6)] rounded-md  border border-[#10475a] capitalize"
              type="email"
              placeholder="email"
            />
            <div className="w-[90%] flex justify-center items-center outline-1  outline-[rgba(0,0,0,0.6)] rounded-md bg-white pl-1 border border-[#10475a]">
              <input
                className="w-full h-full outline-none m-3 bg-transparent capitalize"
                type={show ? "password" : "text"}
                placeholder="password"
              />
              {show ? (
                <div onClick={toggleFn} className="mr-3 cursor-pointer">
                  <BsFillEyeSlashFill />
                </div>
              ) : (
                <div onClick={toggleFn} className="mr-3 cursor-pointer">
                  <BsFillEyeFill />
                </div>
              )}
            </div>
            <button className="h-11 mt-5 bg-black p-1 w-[90%] text-white capitalize font-medium rounded-md">
              sign up
            </button>
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
