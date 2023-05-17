import React from "react";

const Trustedby = () => {
  return (
    <div className="bg-[#BE1E2D] p-10 justify-between align-middle items-center relative flex h-48">
      <div className="absolute flex font-bold text-xl -top-20 left-96">
        TRUSTED BY
        <div className="border-r-2 border-t-2 p-12 border-[#151515] mt-3 ml-2 -mb-2 relative">
          <div className="h-1 bg-[#151515] p-1 rounded absolute bottom-0 -right-1"></div>
        </div>
      </div>
      <img className="" src={require("../Assets/Godrej.png")} alt="" />
      <img className="" src={require("../Assets/dlf.png")} alt="" />
      <img className="" src={require("../Assets/Brigade.png")} alt="" />
      <img className="" src={require("../Assets/indiabulls.png")} alt="" />
    </div>
  );
};

export default Trustedby;
