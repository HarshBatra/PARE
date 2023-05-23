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
    <div className="flex flex-col lg:mt-20 my-10 lg:mb-40">
      <div className="flex gap-4 lg:gap-20 justify-around items-end lg:mx-20 mx-10 lg:mb-20 mb-10">
        <div className="font-light lg:text-5xl text-lg leading-normal lg:w-1/2 3xl:w-1/3">
          EXPLORE OUR PORTFOLIO AND DISCOVER SOME OF OUR{" "}
          <span className="font-bold text-[#BE1E2D]">PAST WORK</span>
        </div>
        <div className="lg:text-2xl text-xs lg:w-1/2 3xl:w-1/3">
          PARÉ has completed numerous innovative and world-class projects across
          India, showcasing our expertise in building materials and interior
          decor. Browse through our portfolio to see how we can help bring your
          vision to life.
        </div>
      </div>
      <div className="flex flex-col">
        <Marquee direction="right" speed={50} gradient={false}>
          {works.map((work) => (
            <img
              className="lg:m-4 drop-shadow-lg m-2 w-1/2 lg:w-auto"
              src={work.imgURL}
              alt=""
            />
          ))}
        </Marquee>
        <Marquee direction="left" speed={50} gradient={false}>
          {works.map((work) => (
            <img
              className="lg:m-4 drop-shadow-lg m-2 w-1/2 lg:w-auto"
              src={work.imgURL}
              alt=""
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Pastwork;
