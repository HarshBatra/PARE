import React from "react";
import Slider from "react-slick";

const Projects = () => {
  const projects = [
    { imgURL: require("../Assets/projects/Artisan Oak - Lobby.png") },
    { imgURL: require("../Assets/projects/Mahogany.png") },
    { imgURL: require("../Assets/projects/Oakwood Ocre.png") },
  ];

  const settings = {
    dots: true,
    infinite: true,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="flex bg-[#151515] flex-col text-4xl font-black p-20 gap-4 text-white">
      PROJECTS
      <div className="text-lg w-1/3 font-light">
        Browse through and see how we have transformed spaces and exceeded our
        client's expectations, one project at a time.
      </div>
      <div className="h-1 bg-white opacity-10 w-full m-10"></div>
      <div className="flex flex-row">
        <Slider {...settings}>
          {projects.map((project) => (
            <div className="flex m-4 drop-shadow-lg">
              <img
                className="hover:bg-black hover:overlay-opacity-30"
                src={project.imgURL}
                alt=""
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="h-1 bg-white opacity-10 w-full m-10"></div>
    </div>
  );
};

export default Projects;
