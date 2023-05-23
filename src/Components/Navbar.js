import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-col px-12 fixed z-50 w-screen">
      <div className="flex flex-row justify-between items-center h-20">
        <img className="w-28 ml-2" src={require("../Assets/logo.png")} alt="" />
        <ul className="flex flex-row gap-12 text-white text-lg mr-4 font-sans font-light tracking-wide">
          <a href="/">
            <li>HOME</li>
          </a>
          <a href="/aboutus">
            <li>ABOUT</li>
          </a>
          <a href="/products">
            <li>PRODUCTS</li>
          </a>
          <a href="/gallery">
            <li>GALLERY</li>
          </a>
          <a href="/careers">
            <li>CAREERS</li>
          </a>
          <a href="/contactus">
            <li>CONTACT US</li>
          </a>
        </ul>
      </div>
      <div className="h-[0.15rem] bg-white"></div>
    </div>
  );
};

export default Navbar;
