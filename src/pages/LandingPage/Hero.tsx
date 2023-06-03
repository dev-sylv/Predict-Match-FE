import React from "react";
import { ButtonProps } from "../../common";
import image from "../../assets/images/image-layer2.png";
import image2 from "../../assets/images/mg3.jpg";
import image3 from "../../assets/images/mg1.jpg";

const Hero = () => {
  const pictureHold = [
    {
      id: 1,
      image: image,
    },
    {
      id: 2,
      image: image2,
    },
    {
      id: 3,
      image: image3,
    },
  ];

  const getsinglepicture = (id: any) => {
    console.log(pictureHold.filter((el: any) => el.id === id));
  };
  return (
    <div
      id="Hero"
      className="w-[100%] h-[620px]  bg-bgi bg-no-repeat bg-cover flex justify-center
     items-center 
     relative
     ">
      {/* dark blur effect */}
      <div
        className="absolute bg-[rgba(0,0,0,0.7)] top-0 w-full
          h-[100%]
      "></div>

      <div
        className="flex  items-center w-full
      top-0
          h-[100%]
          justify-center z-10">
        <div
          className="
        w-[800px]
        h-[100%]
        flex-col
        flex
justify-center
        ">
          <h3
            className="
          font-extrabold
          text-[50px]
          text-[#ffffff]
          mb-[20px]
          font-mono
          ">
            Your Ultimate Destination for Football Fans!
          </h3>
          <span
            className="
            mb-[20px]
            text-[17px]
           text-[#ffffff]
           w-[650px]
           font-mono

          ">
            Whether you're a die-hard fan, a fantasy football enthusiast, or
            simply looking for the latest updates
          </span>
          {/* button */}
          <ButtonProps
            className="flex justify-center items-center w-[170px] bg-[#fbc02d] 
                h-[47px]
                rounded-[3px]
                uppercase
                font-[400]
                cursor-pointer
                hover:text-white hover:bg-transparent 
                hover:border hover:border-[#fbc02d] 
                duration-500
                mt-[12px]
                      "
            text="get started"
          />

          <div className="cursor-pointer flex bg-black items-center mt-5 justify-between w-[30%] h-20">
            <div className="w-[30%] h-[90%] rounded-full  overflow-hidden">
              <img
                className="w-full object-contain"
                src={pictureHold[0].image}
                alt=""
              />
            </div>
            <div className="w-[30%] h-[90%] rounded-full  overflow-hidden">
              <img
                className="w-full object-contain"
                src={pictureHold[1].image}
                alt=""
              />
            </div>
            <div className="w-[30%] h-[90%] rounded-full  overflow-hidden">
              <img
                className="w-full object-contain"
                src={pictureHold[2].image}
                alt=""
              />
            </div>
          </div>
        </div>

        {/* image */}

        <img src={image} className="h-[500px] mr-[100px]" />
      </div>
    </div>
  );
};

export default Hero;
