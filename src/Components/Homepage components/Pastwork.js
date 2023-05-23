import React from "react";
import Marquee from "react-fast-marquee";

const Pastwork = () => {
  const works = [
    { imgURL: require("../../Assets/marquee/Bathroom vertica gold.png") },
    { imgURL: require("../../Assets/marquee/Copper.png") },
    { imgURL: require("../../Assets/marquee/Imperial Nut.png") },
    { imgURL: require("../../Assets/marquee/Mahogany.png") },
    { imgURL: require("../../Assets/marquee/Oak Wood Ocre.png") },
    { imgURL: require("../../Assets/marquee/Oakwood Ocre (1).png") },
    { imgURL: require("../../Assets/marquee/Oakwood Ocre.png") },
    { imgURL: require("../../Assets/marquee/Statuario 002.png") },
  ];

  return (
    <div className="flex flex-col mt-20 mb-40">
      <div className="flex gap-20 justify-between mx-20 mb-20">
        <div className="font-light text-5xl leading-normal w-5/6">
          EXPLORE OUR PORTFOLIO AND DISCOVER SOME OF OUR{" "}
          <span className="font-bold text-[#BE1E2D]">PAST WORK</span>
        </div>
        <div className="text-2xl w-5/6">
          PARÉ has completed numerous innovative and world-class projects across
          India, showcasing our expertise in building materials and interior
          decor. Browse through our portfolio to see how we can help bring your
          vision to life.
        </div>
      </div>
      <div className="flex flex-col">
        <Marquee direction="right" speed={50} gradient={false}>
          {works.map((work) => (
            <div className="flex h-auto w-auto">
              <img className="m-4 drop-shadow-lg" src={work.imgURL} alt="" />
            </div>
          ))}
        </Marquee>
        <Marquee direction="left" speed={50} gradient={false}>
          {works.map((work) => (
            <img className="m-4 drop-shadow-lg" src={work.imgURL} alt="" />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Pastwork;
