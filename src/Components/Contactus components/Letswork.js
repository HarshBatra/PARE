import React from "react";

const Letswork = () => {
  return (
    <div className="flex justify-between items-center py-20 pl-20">
      <div className="flex flex-col gap-4 w-2/5">
        <div className="text-5xl text-[#BE1E2D] font-semibold tracking-wide">
          LET'S WORK –––––––
        </div>
        <div className="text-5xl">on your project</div>
        <div className="mt-4">
          Let's work together to turn your design dreams into reality.
        </div>
        <div className="w-3/4">
          Fill out our form and our team will be in touch with you shortly to
          get started on your project
        </div>
        <div className="mb-4 gap-4 flex flex-col">
          <input
            placeholder="NAME:"
            className="bg-[#151515] font-thin opacity-80 p-4 border-b-2 border-white border-opacity-50 w-11/12"
          />
          <input
            placeholder="PHONE NUMBER:"
            className="bg-[#151515] font-thin opacity-80 p-4 border-b-2 border-white border-opacity-50 w-11/12"
          />
          <input
            placeholder="MAIL ID:"
            className="bg-[#151515] font-thin opacity-80 p-4 border-b-2 border-white border-opacity-50 w-11/12"
          />
          <input
            placeholder="REQUIREMENT TYPE:"
            className="bg-[#151515] font-thin opacity-80 p-4 border-b-2 border-white border-opacity-50 w-11/12"
          />
          <input
            placeholder="YOUR MESSAGE:"
            className="bg-[#151515] font-thin opacity-80 p-4 py-8 border-b-2 border-white border-opacity-50 w-11/12"
          />
        </div>
        <div className="font-thin opacity-80 text-lg mb-4 tracking-wide">
          I AGREE TO TERMS OF THE PRIVACY POLICY
        </div>
        <div className="border-2 p-3 w-fit border-[#BE1E2D] cursor-pointer hover:bg-[#BE1E2D] font-thin tracking-wide text-lg">
          SEND REQUEST
        </div>
      </div>
      <img
        className="w-1/2"
        src={require("../../Assets/Screenshot 2023-04-11 225739.png")}
        alt=""
      />
    </div>
  );
};

export default Letswork;
