import React from "react";

const Ourvision = () => {
  return (
    <div className="flex flex-col text-white p-20 bg-[#BE1E2D] gap-10">
      <div className="text-xl font-semibold justify-end items-end self-end w-1/2 tracking-wider leading-relaxed">
        <span className="text-4xl">Our Vision</span>, is to bring Indian-made
        products to a global audience by leveraging our expertise in
        manufacturing and identifying emerging trends. Our ultimate goal is to
        revolutionize Indian products and make them a benchmark for excellence
        in the 21st century.
      </div>
      <div className="text-xl tracking-wide">Our Clients include:</div>
      <div className="flex justify-between">
        <img src={require("../../Assets/Group 2.png")} alt="" />
        <img src={require("../../Assets/Group 3.png")} alt="" />
        <img src={require("../../Assets/Group 2.png")} alt="" />
        <img src={require("../../Assets/Group 3.png")} alt="" />
        <img src={require("../../Assets/Group 2.png")} alt="" />
        <img src={require("../../Assets/Group 3.png")} alt="" />
      </div>
    </div>
  );
};

export default Ourvision;
