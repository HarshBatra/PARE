import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col text-white bg-[#151515] py-10 tracking-wide font-light">
      <div className="flex px-20 items-center justify-around mt-10 mb-16">
        <div className="text-6xl font-extralight w-[50rem]">
          LET'S WORK TOGETHER TO CREATE THE SPACE OF YOUR DREAMS.
        </div>
        <a href="/contactus">
          <div className="font-light py-16 px-8 border-[0.01rem] border-white rounded-[100%] cursor-pointer">
            CONTACT US
          </div>
        </a>
      </div>
      <div className="flex px-28 w-full">
        <div className="flex flex-col border-[0.01rem] border-opacity-50 border-white p-10 justify-between">
          <img
            className="w-1/5 -mt-4"
            src={require("../Assets/logo.png")}
            alt=""
          />
          <div className="font-light text-lg tracking-wider">
            Transform your living spaces with PARÉ's innovative, sustainable,
            and high-quality products. Let's work together to create a space
            that reflects your unique style and create unforgettable memories.
          </div>
        </div>
        <div className="flex flex-col w-2/3">
          <div className="flex flex-col border-[0.01rem] border-opacity-50 border-white p-10 h-1/2">
            <ul>
              <li className="font-bold tracking-wider text-2xl mb-4">LEGAL</li>
              <a href="/">
                <li className="mb-2">COOKIE POLICY</li>
              </a>
              <a href="/">
                <li>PRIVACY POLICY</li>
              </a>
            </ul>
          </div>
          <div className="flex flex-col border-[0.01rem] border-opacity-50 border-white p-10 h-2/3 w-auto">
            <ul>
              <li className="font-bold tracking-wider text-2xl mb-4">SOCIAL</li>
              <a href="/">
                <li className="mb-2">INSTAGRAM</li>
              </a>
              <a href="/">
                <li className="mb-2">FACEBOOK</li>
              </a>
              <a href="/">
                <li>LINKEDIN</li>
              </a>
            </ul>
          </div>
        </div>
        <div className="flex flex-col border-[0.01rem] border-opacity-50 border-white p-10 w-2/3">
          <ul>
            <li className="font-bold tracking-wider text-2xl mb-4">MENU</li>
            <a href="/">
              <li className="mb-3">HOME</li>
            </a>
            <a href="/aboutus">
              <li className="mb-3">ABOUT</li>
            </a>
            <a href="/">
              <li className="mb-3">PRODUCTS</li>
            </a>
            <a href="/">
              <li className="mb-3">GALLERY</li>
            </a>
            <a href="/">
              <li className="mb-3">CONTACTS</li>
            </a>
            <a href="/">
              <li className="mb-3">BLOG</li>
            </a>
            <a href="/">
              <li className="mb-3">CAREERS</li>
            </a>
          </ul>
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        © Pare India Limited {new Date().getFullYear()} | Developed with ❤️ by
        PixySquare
      </div>
    </div>
  );
};

export default Footer;
