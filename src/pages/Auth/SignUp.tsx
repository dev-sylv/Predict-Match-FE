import React from "react";
import {
  BsArrowLeftCircle,
  BsFillEyeFill,
  BsFillEyeSlashFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../../Api/ApiCalls";
import { useRecoilState } from "recoil";
import { ReadNewUsers } from "../../Global/RecoilStateManagement";
import Swal from "sweetalert2";
// import GoogleSignIn from "../../Global/GoogleSignIn";

interface INewUsers {
  name: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const [show, setshow] = React.useState(true);

  const toggleFn = () => {
    setshow(!show);
  };

  //Recoil state management:
  const [users, setUsers] = useRecoilState(ReadNewUsers);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }; // navigate to previous page

  const [image, setimage] = React.useState("");
  const [previewURl, setpreviewURl] = React.useState(
    "data:image/png;base64,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"
  );
  const captureImage = (e: any) => {
    const file = e.target.files[0];
    setimage(file);
    const url = URL.createObjectURL(file);
    setpreviewURl(url);
  };

  // consuming data
  const schema = yup
    .object({
      name: yup.string().required("Name must be required"),
      email: yup.string().required("Please input an email"),
      password: yup.string().required("Enter a strong password"),
    })
    .required();
  type formData = yup.InferType<typeof schema>;

  const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
  } = useForm<formData>({
    resolver: yupResolver(schema),
  });

  const posting = useMutation({
    mutationKey: ["user"],
    mutationFn: registerUser,

    // If successfull
    onSuccess: (data) => {
      Swal.fire({
        title: "User registered sucessfully",
        html: "Redirecting to email for OTP",
        timer: 2000,
        icon: "success",
        timerProgressBar: true,
        willClose: () => {
          navigate("/otp");
        },
      });
      reset();
    },

    // If an error occured:
    onError: (error: any) => {
      Swal.fire({
        title: "Couldn't create new user",
        text: error?.response?.data?.message,
        timer: 2000,
        icon: "error",
      });
    },
  });

  const Submit = handleSubmit(async (data: any) => {
    posting.mutate(data);
    setUsers(users);
  });
  // console.log("users in creating user: ", users);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[85%] h-[95%] flex">
        <div className="w-[50%]  pt-5 pb-5 flex items-center justify-center">
          <form
            onSubmit={Submit}
            className="w-[60%]  h-[90%]  flex items-center flex-col"
          >
            <div
              onClick={goBack}
              className="text-[30px] font-bold   cursor-pointer self-start"
            >
              <BsArrowLeftCircle />
            </div>
            <div className="flex items-center justify-center flex-col">
              <h1 className="font-semibold text-2xl m-2">Sign Up</h1>
              <p className="text-sm font-medium text-[rgba(0,0,0,0.6)]">
                {" "}
                Join our community of football enthusiasts
              </p>
            </div>
            <img
              src={previewURl}
              className="rounded-[400px] h-28 w-28 border border-black m-3 object-cover"
            />
            <label
              htmlFor="pix"
              className="rounded-2xl cursor-pointer bg-[#fbc02d] py-[10px] px-[30px] text-white capitalize"
            >
              <input
                onChange={captureImage}
                type="file"
                id="pix"
                className="hidden"
              />
              upload a photo
            </label>

            <input
              className="w-[90%] pb-2 pt-2 mt-2 pl-4  outline-1  outline-[rgba(0,0,0,0.6)] rounded-md h-[50px] border border-[#10475a] capitalize"
              type="text"
              {...register("name")}
              placeholder="name"
            />
            <p className="w-[90%] mb-1 text-red-700 capitalize">
              {errors.name && errors.name.message}
            </p>
            <input
              className="w-[90%] h-[50px]  pb-2 pt-2 mt-2 pl-4 outline-1 outline-[#fbc02d] rounded-md  border border-[#10475a]"
              type="email"
              placeholder="Email"
              {...register("email")}
            />
            <p className="w-[90%] mb-1 text-red-700 capitalize">
              {errors.email && errors.email.message}
            </p>
            <div className="w-[90%] pb-2 pt-2 mt-2 flex justify-center items-center h-[50px]  outline-1  outline-[rgba(0,0,0,0.6)] rounded-md bg-white pl-4 border border-[#10475a]">
              <input
                className="w-full h-full outline-none bg-transparent"
                type={show ? "password" : "text"}
                placeholder="Password"
                {...register("password")}
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
            <p className="w-[90%] mt-1 mb-1 text-red-700 capitalize">
              {errors.password && errors.password.message}
            </p>
            <div className="w-[90%] flex justify-center items-center">
              <button
                type="submit"
                className="h-12 mt-5 bg-[#fbc02d] p-1 w-[70%] text-white capitalize font-medium rounded-l-md"
              >
                {posting?.isLoading ? "Loading..." : "sign up"}
              </button>
              <Link
                className="h-12 mt-5 bg-black p-1 w-[30%] text-white capitalize font-medium rounded-r-md flex justify-center items-center"
                to={"/login"}
              >
                <button className="capitalize">sign in</button>
              </Link>
            </div>

            {/* <GoogleSignIn /> */}
          </form>
        </div>

        <div className="w-[50%] h-[100%] flex items-center justify-center">
          <div className="w-[50%] h-[50%]  rounded-xl bg-no-repeat bg-contain bg-awardsBG"></div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
