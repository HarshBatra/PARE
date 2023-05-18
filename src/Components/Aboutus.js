import React from "react";
import CountUp from "react-countup";

const Aboutus = () => {
  return (
    <div className="flex my-20 mx-40 justify-around relative">
      <div className="flex flex-col font-bold text-3xl h-full">
        <div className="mb-4 -ml-4">ABOUT US</div>
        <div className="border-2 border-[#BE1E2D]">
          <img
            className="h-[30rem] -ml-4 -mb-4 mt-4"
            src={require("../Assets/Armani Grey 1.png")}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col justify-between items-end gap-8 text-end w-1/2">
        <div className="font-light text-6xl">
          GIVE YOUR SPACE AN{" "}
          <span className="text-[#BE1E2D] font-semibold">ASTONISHING</span>{" "}
          FEEL.
        </div>
        <div className="tracking-wider text-xl w-2/3">
          Our vision is to impart a global outreach to Indian-made Interior
          products. We identify innovative global trends and manufacture a
          matchless range in India.
        </div>
        <div className="flex items-end justify-between">
          <div className="flex mr-16 gap-8 font-light">
            <div className="flex flex-col text-center text-sm w-20 items-center">
              <div className="text-4xl font-bold text-[#BE1E2D]">
                <CountUp end={20} enableScrollSpy={true} />
                <span>+</span>
              </div>
              HAPPY CUSTOMERS
            </div>
            <div className="flex flex-col text-center text-sm w-20 items-center">
              <div className="text-4xl font-bold text-[#BE1E2D]">
                <CountUp end={45} enableScrollSpy={true} />
                <span>+</span>
              </div>
              CITIES SERVED
            </div>
            <div className="flex flex-col text-center text-sm w-20 items-center">
              <div className="text-4xl font-bold text-[#BE1E2D]">
                <CountUp end={200} enableScrollSpy={true} />
                <span>+</span>
              </div>
              CLIENT REVIEWS
            </div>
          </div>
          <div className="border-2 border-[#BE1E2D]">
            <img
              className="h-full -ml-4 -mb-4 mt-4"
              src={require("../Assets/Staturio.png")}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
