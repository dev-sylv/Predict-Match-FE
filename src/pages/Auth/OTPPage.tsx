import React from "react";
import Otp from "react-otp-input";
import email_Image from "../../assets/emailImage.png";

const OptPage = () => {
  const [otp, setOtp] = React.useState("");

  return (
    <div className="relative flex justify-center items-center  w-full h-[100vh] flex-col">
      <img
        className="w-[250px] mb-8 h-[250px] bg-[#181c25] rounded-[400px]"
        src={email_Image}
      />
      <span className="font-semibold mb-3 text-2xl">Enter OTP</span>
      <p className="text-[rgb(0,0,0,0.5)] text-lg font-medium">
        We have sent you an <strong>OTP</strong> to your e-mail address for
        verification
      </p>
      <div className="m-6">
        <Otp
          inputStyle={{
            border: "1px solid #6ea04b",
            margin: "10px",
            width: "25px",
            height: "30px",
            outline: "none",
            borderRadius: "3px",
            fontSize: "17px",
          }}
          value={otp}
          onChange={setOtp}
          numInputs={4}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
        />
      </div>
      <button
        onClick={() => {
          setOtp("OTP received");
          setTimeout(() => {
            setOtp("Processing...");
          }, 2000);
          setTimeout(() => {
            setOtp("Done!");
          }, 2000);
        }}
        className="w-[300px] mb-5 h-12 rounded-full capitalize text-white font-medium text-lg bg-[#181c25]">
        next
      </button>
      <b>Didn't Receive the OTP?</b>
      <strong className="text-[#6ea04b] cursor-pointer">Resend Code</strong>

      {/* for fun (input an otp and click the button) */}
      {/* <div className="absolute right-7 flex justify-center items-center text-white text-2xl capitalize bg-slate-600 w-[200px] h-[200px]">
        {otp}
      </div> */}
    </div>
  );
};

export default OptPage;
