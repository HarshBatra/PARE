import React from "react";
import CountUp from "react-countup";

const Aboutusintro = () => {
  return (
    <div className="flex flex-col text-justify w-full gap-8 p-40">
      <div className="text-4xl font-semibold">ABOUT US</div>
      <div className="text-xl">
        PARÉ, where innovation meets experience! We're India's leading
        manufacturer of Soffit panels and innovative surfaces, established in
        2020. Our world-class products stand the test of time, transforming your
        dream home with unmatched quality. Trust the only manufacturer in India
        for exceptional surfaces and unrivaled expertise.
      </div>
      <img
        className="drop-shadow-lg"
        src={require("../../Assets/main photo.png")}
        alt=""
      />
      <div className="flex justify-between mx-4">
        <div className="flex flex-col text-left text-xl font-semibold gap-4 w-1/6">
          <div className="text-6xl font-semibold">
            <CountUp end={10} enableScrollSpy={true} />
            <span>+</span>
          </div>
          <div className="h-[0.1rem] w-full bg-black"></div>
          Quality Products
        </div>
        <div className="flex flex-col text-left text-xl font-semibold gap-4 w-1/6">
          <div className="text-6xl font-semibold">
            <CountUp end={500} enableScrollSpy={true} />
            <span>+</span>
          </div>
          <div className="h-[0.1rem] w-full bg-black"></div>
          Architectural Projects of Houses
        </div>
        <div className="flex flex-col text-left text-xl font-semibold gap-4 w-1/6">
          <div className="text-6xl font-semibold">
            <CountUp end={5000} enableScrollSpy={true} />
            <span>+</span>
          </div>
          <div className="h-[0.1rem] w-full bg-black"></div>
          Satisfied Clients
        </div>
        <div className="flex flex-col text-left text-xl font-semibold gap-4 w-1/6">
          <div className="text-6xl font-semibold">
            <CountUp end={2000} enableScrollSpy={true} />
            <span>+</span>
          </div>
          <div className="h-[0.1rem] w-full bg-black"></div>
          Unique Spaces Modified
        </div>
      </div>
      <div className="flex flex-col gap-6 my-20">
        <div className="flex text-justify justify-around">
          <div className="text-3xl text-[#BE1E2D] font-semibold w-1/5">
            AGILITY
          </div>
          <div className="text-lg font-light w-1/2">
            PARÉ Innovations' agility sets them apart from the rest, allowing
            them to adapt to changing market trends and deliver innovative
            products that exceed expectations.
          </div>
        </div>
        <div className="flex text-justify justify-around">
          <div className="text-3xl text-[#BE1E2D] font-semibold w-1/5">
            QUALITY
          </div>
          <div className="text-lg font-light w-1/2">
            At PARÉ Innovations, we believe in delivering the highest quality
            interior goods that stand the test of time. Our team works
            collaboratively to create products that not only look great but also
            exceed expectations.
          </div>
        </div>
        <div className="flex text-justify justify-around">
          <div className="text-3xl text-[#BE1E2D] font-semibold w-1/5">
            HUMAN CENTERED
          </div>
          <div className="text-lg font-light w-1/2">
            Our customers are at the heart of everything we do at PARÉ
            Innovations.
          </div>
        </div>
        <div className="flex text-justify justify-around">
          <div className="text-3xl text-[#BE1E2D] font-semibold w-1/5">
            INTEGRITY
          </div>
          <div className="text-lg font-light w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutusintro;
