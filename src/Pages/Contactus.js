import React from "react";
import Getintouch from "../Components/Contactus components/Getintouch.js";
import Letswork from "../Components/Contactus components/Letswork.js";

const Contactus = () => {
  return (
    <div className="flex flex-col bg-[#151515] text-white pt-40 pb-20">
      <Getintouch />
      <Letswork />
    </div>
  );
};

export default Contactus;
