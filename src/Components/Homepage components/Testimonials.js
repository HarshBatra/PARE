import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const projects = [
    { imgURL: require("../../Assets/projects/Artisan Oak - Lobby.png") },
    { imgURL: require("../../Assets/projects/Mahogany.png") },
    { imgURL: require("../../Assets/projects/Oakwood Ocre.png") },
  ];

  const settings = {
    infinite: true,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="flex flex-col gap-8 bg-[#151515] px-20 py-10 text-white items-center">
      <div className="flex text-6xl justify-around items-end">
        <div className="w-1/3 leading-[5rem]">
          WHAT OUR{" "}
          <span className="text-[#BE1E2D] font-black w-1/2">CLIENTS</span> HAVE
          TO SAY ABOUT US
        </div>
        <div className="text-xl font-thin w-1/4 text-right">
          Browse through our client testimonials to hear first-hand accounts of
          our quality products and exceptional customer service.
        </div>
      </div>
      <div className="block items-center w-1/2 mt-4">
        <Slider {...settings}>
          {projects.map((project) => (
            <div className="flex m-4 drop-shadow-lg">
              <img className="w-full" src={project.imgURL} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
