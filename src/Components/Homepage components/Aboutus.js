import React from "react";
import CountUp from "react-countup";

const Aboutus = () => {
  return (
    <div className="flex lg:flex-row flex-col-reverse lg:my-20 my-10 mx-auto justify-center relative">
      <div className="flex flex-col font-bold text-lg lg:text-3xl h-full">
        <div className="mb-4 lg:-ml-4 hidden lg:flex">ABOUT US</div>
        <div className="border-2 border-[#BE1E2D] w-fit self-end mt-8 mr-8 lg:mt-0 lg:mr-0">
          <img
            className="lg:h-[30rem] h-60 -ml-4 -mb-4 mt-4"
            src={require("../../Assets/Armani Grey 1.png")}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col justify-between mx-10 lg:ml-0 lg:items-end lg:gap-8 gap-4 lg:text-end lg:w-1/2">
        <div className="font-light lg:text-6xl text-3xl w-5/6">
          GIVE YOUR SPACE AN{" "}
          <span className="text-[#BE1E2D] font-semibold">ASTONISHING</span>{" "}
          FEEL.
        </div>
        <div className="tracking-wider lg:text-xl text-xs w-full lg:w-2/3 4xl:w-1/2">
          Our vision is to impart a global outreach to Indian-made Interior
          products. We identify innovative global trends and manufacture a
          matchless range in India.
        </div>
        <div className="flex flex-row-reverse lg:flex-row items-end justify-between">
          <div className="flex lg:mr-16 lg:gap-8 font-light">
            <div className="flex flex-col text-center lg:text-sm text-xs w-20 items-center">
              <div className="text-lg lg:text-4xl font-bold text-[#BE1E2D]">
                <CountUp end={20} enableScrollSpy={true} />
                <span>+</span>
              </div>
              HAPPY CUSTOMERS
            </div>
            <div className="flex flex-col text-center lg:text-sm text-xs w-20 items-center">
              <div className="text-lg lg:text-4xl font-bold text-[#BE1E2D]">
                <CountUp end={45} enableScrollSpy={true} />
                <span>+</span>
              </div>
              CITIES SERVED
            </div>
            <div className="flex flex-col text-center lg:text-sm text-xs w-20 items-center">
              <div className="text-lg lg:text-4xl font-bold text-[#BE1E2D]">
                <CountUp end={200} enableScrollSpy={true} />
                <span>+</span>
              </div>
              CLIENT REVIEWS
            </div>
          </div>
          <div className="border-2 border-[#BE1E2D] mr-2">
            <img
              className="h-full lg:-ml-4 lg:-mb-4 lg:mt-4 -ml-2 -mb-2 mt-2 "
              src={require("../../Assets/Staturio.png")}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
