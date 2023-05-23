import React from "react";

const Productsrange = () => {
  return (
    <div className="flex flex-col lg:my-32 my-20 lg:gap-20 gap-10 text-[#151515]">
      <div className="font-black text-[25rem] left-0 -ml-52 opacity-5 verticalwrap z-0 absolute lg:flex hidden">
        PARE
      </div>
      <div className="flex flex-col w-fit justify-center self-center">
        <div className="text-center font-bold text-2xl lg:text-6xl text-[#151515] tracking-wide">
          PRODUCTS RANGE
        </div>
        <div className="lg:h-1 h-[0.1rem] bg-[#BE1E2D] w-full lg:mt-4 mt-2"></div>
      </div>
      <div className="flex justify-between z-10 lg:ml-8 ml-2">
        <div className="flex justify-start gap-4">
          <div className="font-bold lg:text-2xl text-base">01</div>
          <div className="flex flex-col gap-6">
            <div className="lg:text-6xl text-4xl font-bold tracking-wide lg:-mt-2">
              INNOV+
            </div>
            <div className="lg:w-3/4 w-full tracking-wide text-xs lg:text-base">
              Elevate your space with PARÉ Soffit Systems. Embrace the allure of
              wood, minus the drawbacks. Transform effortlessly with our
              versatile Soffit Louvers or sleek Vertica Soffit Panels. Discover
              our first-time-in-India products for walls and ceilings.
            </div>
            <div className="border-2 p-2 w-fit border-[#BE1E2D] cursor-pointer hover:bg-[#BE1E2D] hover:text-white lg:text-base text-xs">
              VIEW PRODUCTS
            </div>
          </div>
          <img
            className="lg:w-5/6 mt-10"
            src={require("../../Assets/Oakwood Ocre.png")}
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-between z-10 lg:mr-8 mr-2">
        <div className="flex justify-end text-end gap-4">
          <img
            className="lg:w-5/6 mt-10"
            src={require("../../Assets/Oakwood Ocre (1).png")}
            alt=""
          />
          <div className="flex flex-col gap-6">
            <div className="lg:text-6xl text-4xl font-bold tracking-wide lg:-mt-2">
              EASY+
            </div>
            <div className="lg:w-3/4 tracking-wide self-end w-full text-xs lg:text-base">
              PARÉ's Easy+ Locking System revolutionizes wall and ceiling panel
              integration with a seamless, hassle-free installation. Embrace the
              Pyramid design for added texture or choose Linea panels for clean
              lines and easy flexibility. Experience effortless, dust-free
              installation with PARÉ's world-first innovation.
            </div>
            <div className="border-2 p-2 w-fit border-[#BE1E2D] cursor-pointer self-end hover:bg-[#BE1E2D] hover:text-white lg:text-base text-xs">
              VIEW PRODUCTS
            </div>
          </div>{" "}
          <div className="font-bold lg:text-2xl text-base">02</div>
        </div>
      </div>
      <div className="flex justify-between z-10 lg:ml-8 ml-2">
        <div className="flex justify-start gap-4">
          <div className="font-bold lg:text-2xl text-base">03</div>
          <div className="flex flex-col gap-6">
            <div className="lg:text-6xl text-4xl font-bold tracking-wide lg:-mt-2">
              DURA+
            </div>
            <div className="lg:w-3/4 w-full tracking-wide text-xs lg:text-base">
              PARÉ DURA+ Systems redefine durability and functionality, ensuring
              a smooth and flexible experience. Elevate exteriors with Norma
              panels for long-lasting exterior facades, and enhance wall
              cladding with Stretta panels' high impact resistance. Experience
              excellence with PARÉ DURA+.
            </div>
            <div className="border-2 p-2 w-fit border-[#BE1E2D] cursor-pointer hover:bg-[#BE1E2D] hover:text-white lg:text-base text-xs">
              VIEW PRODUCTS
            </div>
          </div>
          <img
            className="lg:w-5/6 mt-10"
            src={require("../../Assets/Larch 1.png")}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Productsrange;
