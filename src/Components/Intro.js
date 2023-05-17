import React from "react";

const Intro = () => {
  return (
    <div className="z-10 w-screen h-screen flex">
      <img
        className="absolute w-screen h-screen object-cover"
        src={require("../Assets/royal nut 1.png")}
        alt=""
      />
      <div className="absolute opacity-70 bg-gradient-to-r from-black to-black via-transparent w-screen h-screen top-0"></div>
      <div className="flex flex-col self-center">
        <div className="flex font-sans font-bold text-8xl text-white drop-shadow-lg items-center align-middle w-96 tracking-wider h-auto ml-24">
          INNOVATIVE EXCELLENCE
        </div>
        <div className="flex bg-[#BE1E2D] w-fit p-2 px-8 font-thin tracking-widest border-2 border-[#BE1E2D] hover:border-[#BE1E2D] hover:border-2 hover:bg-white hover:text-[#BE1E2D] mt-8 ml-40 drop-shadow-md text-white cursor-pointer">
          BUILD WITH US
        </div>
      </div>
    </div>
  );
};

export default Intro;
