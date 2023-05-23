import React from "react";

const Intro = () => {
  return (
    <div className="z-10 w-screen h-screen flex">
      <img
        className="absolute w-screen h-screen object-cover"
        src={require("../../Assets/royal nut 1.png")}
        alt=""
      />
      <div className="absolute opacity-70 bg-gradient-to-r from-black to-black via-transparent w-screen h-screen top-0"></div>
      <div className="flex flex-col self-center lg:ml-40 lg:mt-20 ml-8 gap-4">
        <img
          className="z-50 w-1/2 lg:w-2/3"
          src={require("../../Assets/innovwhitred 1.png")}
          alt=""
        />
        <div className="flex font-sans lg:font-semibold font-semibold text-2xl w-1/2 lg:w-full lg:text-6xl text-white drop-shadow-lg items-center align-middle tracking-wider h-auto">
          INNOVATIVE EXCELLENCE
        </div>
        <div className="flex bg-[#BE1E2D] w-fit p-2 px-3 lg:px-8 font-thin tracking-widest border-2 border-[#BE1E2D] hover:border-[#BE1E2D] hover:border-2 hover:bg-white hover:text-[#BE1E2D] mt-8 drop-shadow-md text-white cursor-pointer text-xs lg:text-base">
          BUILD WITH US
        </div>
      </div>
    </div>
  );
};

export default Intro;
