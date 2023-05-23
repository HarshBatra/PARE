import React from "react";

const Ourqualities = () => {
  return (
    <div className="bg-[#BE1E2D] p-10 justify-around gap-5 lg:gap-28 relative mt-20 flex">
      <div className="absolute flex font-bold text-base lg:text-3xl drop-shadow-sm lg:-top-20 lg:left-20 -top-10 left-5">
        OUR QUALITIES
        <div className="border-r-2 border-t-2 lg:p-12 p-5 border-[#151515] mt-3 ml-2 -mb-2 relative">
          <div className="h-1 bg-[#151515] p-1 rounded absolute bottom-0 -right-1"></div>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-2 text-white items-center text-center tracking-wide">
        <div className="border-2 border-white p-6 mb-2 rounded-[50%] items-center align-middle justify-center self-center">
          <img
            className="self-center "
            src={require("../../Assets/Frame 41.png")}
            alt=""
          />
        </div>
        <div>SUSTAINABILITY</div>
        <div className="text-xs opacity-80 font-light">
          We believe in preserving our planet for future generations, which is
          why we use environmentally-friendly materials and sustainable
          practices in all our manufacturing processes.
        </div>
      </div>
      <div className="flex flex-col justify-center gap-2 text-white items-center text-center tracking-wide">
        <div className="border-2 border-white p-6 mb-2 rounded-[50%] items-center align-middle justify-center self-center">
          <img
            className="self-center"
            src={require("../../Assets/loader.png")}
            alt=""
          />
        </div>
        <div>SUSTAINABILITY</div>
        <div className="text-xs opacity-80 font-light">
          We believe in preserving our planet for future generations, which is
          why we use environmentally-friendly materials and sustainable
          practices in all our manufacturing processes.
        </div>
      </div>
      <div className="flex flex-col justify-center gap-2 text-white items-center text-center tracking-wide">
        <div className="border-2 border-white p-6 mb-2 rounded-[50%] items-center align-middle justify-center self-center">
          <img
            className="self-center"
            src={require("../../Assets/pen-tool.png")}
            alt=""
          />
        </div>
        <div>SUSTAINABILITY</div>
        <div className="text-xs opacity-80 font-light">
          We believe in preserving our planet for future generations, which is
          why we use environmentally-friendly materials and sustainable
          practices in all our manufacturing processes.
        </div>
      </div>
      <div className="flex flex-col justify-center gap-2 text-white items-center text-center tracking-wide">
        <div className="border-2 border-white p-6 mb-2 rounded-[50%] items-center align-middle justify-center self-center">
          <img
            className="self-center"
            src={require("../../Assets/Vector.png")}
            alt=""
          />
        </div>
        <div>SUSTAINABILITY</div>
        <div className="text-xs opacity-80 font-light">
          We believe in preserving our planet for future generations, which is
          why we use environmentally-friendly materials and sustainable
          practices in all our manufacturing processes.
        </div>
      </div>
    </div>
  );
};

export default Ourqualities;
