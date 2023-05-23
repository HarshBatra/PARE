import React from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    >
      NEXT
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

const Ourteam = () => {
  const teams = [
    {
      imgURL: require("../../Assets/Rectangle 48.png"),
      name: "Harsh Batra",
      profile: "Director",
    },
    {
      imgURL: require("../../Assets/Rectangle 48.png"),
      name: "Harsh Batra",
      profile: "Director",
    },
    {
      imgURL: require("../../Assets/Rectangle 48.png"),
      name: "Harsh Batra",
      profile: "Director",
    },
    {
      imgURL: require("../../Assets/Rectangle 48.png"),
      name: "Harsh Batra",
      profile: "Director",
    },
    {
      imgURL: require("../../Assets/Rectangle 48.png"),
      name: "Harsh Batra",
      profile: "Director",
    },
    {
      imgURL: require("../../Assets/Rectangle 48.png"),
      name: "Harsh Batra",
      profile: "Director",
    },
  ];

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="flex flex-col gap-2 px-40">
      <div className="font-light text-2xl">MEET</div>
      <div className="text-5xl font-black">OUR TEAM</div>
      <Slider {...settings} className="my-20">
        {teams.map((team) => (
          <div className="flex flex-col justify-center items-center align-middle self-center text-center">
            <img
              className="py-4 m-4 w-2/3 mx-auto drop-shadow-lg"
              src={team.imgURL}
              alt=""
            />
            <div className="font-black text-2xl mt-2">{team.name}</div>
            <div className="font-light text-sm">{team.profile}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Ourteam;
