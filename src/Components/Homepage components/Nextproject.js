import React from "react";

const Nextproject = () => {
  return (
    <div className="flex bg-[#151515] p-20 px-60 gap-16 justify-center text-white align-middle items-center">
      <div className="flex flex-col xl:w-2/3 gap-4">
        <div className="text-6xl leading-[5rem] font-normal">
          <div>IT'S TIME TO</div>
          <div> DISCUSS YOUR </div>
          <span className="font-bold text-[#BE1E2D] tracking-wide">
            NEXT PROJECT
          </span>
        </div>
        <div className="text-sm opacity-90 font-normal tracking-wide">
          Let's get the ball rolling on your next project! Reach out to us at
          PARÉ and let's discuss how we can bring your vision to life. We're
          excited to hear from you!
        </div>
        <div className="mb-4 gap-4 flex flex-col">
          <input
            placeholder="NAME:"
            className="bg-[#151515] font-light opacity-80 p-4 border-b-2 border-white border-opacity-50 w-11/12 focus:outline-none"
          />
          <input
            placeholder="PHONE NUMBER:"
            className="bg-[#151515] font-light opacity-80 p-4 border-b-2 border-white border-opacity-50 w-11/12 focus:outline-none"
          />
          <input
            placeholder="EMAIL:"
            className="bg-[#151515] font-light opacity-80 p-4 border-b-2 border-white border-opacity-50 w-11/12 focus:outline-none"
          />
          <input
            placeholder="MESSAGE:"
            className="bg-[#151515] font-light opacity-80 p-4 border-b-2 border-white border-opacity-50 w-11/12 focus:outline-none"
          />
        </div>
        <div className="font-light text-lg mb-4 tracking-wide">
          I AGREE TO TERMS OF THE PRIVACY POLICY
        </div>
        <div className="border-2 p-3 w-fit border-[#BE1E2D] cursor-pointer hover:bg-[#BE1E2D] font-light tracking-wide text-lg">
          SEND REQUEST
        </div>
      </div>
      <div>
        <img
          className=""
          src={require("../../Assets/Royal Nut (2).png")}
          alt=""
        />
      </div>
    </div>
  );
};

export default Nextproject;
