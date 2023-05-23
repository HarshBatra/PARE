import React from "react";

const Trustedby = () => {
  return (
    <div className="bg-[#BE1E2D] lg:p-10 p-4 justify-around align-middle items-center relative flex h-auto w-full gap-4">
      <div className="absolute flex font-bold lg:text-xl text-sm lg:-top-20 lg:left-20 -top-10 left-5">
        TRUSTED BY
        <div className="border-r-2 border-t-2 lg:p-12 p-5 border-[#151515] mt-3 ml-2 -mb-2 relative">
          <div className="h-1 bg-[#151515] p-1 rounded absolute bottom-0 -right-1"></div>
        </div>
      </div>
      <div>
        <img className="" src={require("../../Assets/Godrej.png")} alt="" />
      </div>
      <div>
        <img className="" src={require("../../Assets/dlf.png")} alt="" />
      </div>
      <div>
        <img className="" src={require("../../Assets/Brigade.png")} alt="" />
      </div>
      <div>
        <img className="" src={require("../../Assets/indiabulls.png")} alt="" />
      </div>
    </div>
  );
};

export default Trustedby;
