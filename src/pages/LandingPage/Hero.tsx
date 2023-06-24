import React, { useState } from "react";
import { ButtonProps } from "../../common";
import images from "../../assets/images/image-layer2.png";
import image2 from "../../assets/hero2.png";
import image3 from "../../assets/neymar-football-png-23.png";
import { NavLink } from "react-router-dom";

const Hero = () => {
  const pictureHold = [
    {
      id: 1,
      image: images,
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

  const [pictureState, setPictureState] = useState(images);

  const getsinglepicture = (id: any) => {
    const pic = pictureHold
      .filter((el: any) => el?.id === id)
      .map((el) => el?.image)
      .toString();
    setPictureState(pic);
  };

  return (
    <div
      id="Hero"
      className="w-[100%] h-[620px]  bg-bgi bg-no-repeat bg-cover flex justify-center
     items-center 
     relative
     "
    >
      {/* dark blur effect */}
      <div
        className="absolute bg-[rgba(0,0,0,0.7)] top-0 w-full
          h-[100%]
      "
      ></div>

      <div
        className="flex  items-center w-full
      top-0
          h-[100%]
          justify-center z-10"
      >
        <div
          className="
        w-[800px]
        h-[100%]
        flex-col
        flex
justify-center
        "
        >
          <h3
            className="
          font-extrabold
          text-[50px]
          text-[#ffffff]
          mb-[20px]
          font-mono
          "
          >
            Your Ultimate Destination for Football Fans!
          </h3>
          <span
            className="
            mb-[20px]
            text-[17px]
           text-[#ffffff]
           w-[650px]
           font-mono

          "
          >
            Whether you're a die-hard fan, a fantasy football enthusiast, or
            simply looking for the latest updates
          </span>
          {/* button */}
          <NavLink to="/sign-up" className={"w-[fit-content]"}>
            <ButtonProps
              className="flex justify-center items-center w-[170px] bg-[#fbc02d] 
                h-[47px]
                rounded-[3px]
                uppercase
                font-[500]
                cursor-pointer
                hover:text-white hover:bg-transparent 
                hover:border hover:border-[#fbc02d] 
                duration-500
                mt-[12px]
                      "
              text="get started"
            />
          </NavLink>

          <div className="cursor-pointer flex items-center mt-5 justify-between w-[30%] h-20 ">
            {pictureHold?.map((el) => (
              <div
                onClick={() => {
                  getsinglepicture(el?.id);
                }}
                className="w-[30%] h-[90%] rounded-full hover:border hover:transform transition-all hover:border-[#fbc02d]  overflow-hidden"
              >
                <img className="w-full object-contain" src={el?.image} alt="" />
              </div>
            ))}
          </div>
        </div>

        {/* image */}

        <img src={pictureState} className=" h-[500px] mr-[100px]" />
      </div>
    </div>
  );
};

export default Hero;
