import React from "react";

const Getintouch = () => {
  return (
    <div className="flex items-end justify-around gap-8 px-20">
      <img
        className="w-1/4 drop-shadow-lg"
        src={require("../../Assets/unsplash_x_VOtnVJeGE.png")}
        alt=""
      />
      <div className="flex flex-col w-1/3 text-right font-light gap-8 tracking-wide">
        <div className="opacity-80"> +91 8356954856</div>
        <div className="opacity-80">hello@pareindia.com</div>
        <div className="opacity-80">
          Experience Gallery - 21/N, Laxmi Industrial Estate, New Link Rd, near
          Laxmi Chhaya Hotel, Andheri West, Mumbai, Maharashtra 400053
        </div>
        <div className="opacity-80">
          Corporate Office Address - 102, 103, Jai Commercial Complex, Cadbury
          Junction, Khopat, Thane West, Thane, Maharashtra 400601
        </div>
        <div className="font-semibold -mr-4 text-9xl">GET IN</div>
        <div className="font-semibold text-9xl">TOUCH</div>
      </div>
    </div>
  );
};

export default Getintouch;
