import React from "react";

const Testimonials = () => {
  return (
    <div className="flex flex-col gap-8 bg-[#151515] px-20 py-10 text-white items-center">
      <div className="flex text-6xl justify-around items-end">
        <div className="w-1/2 leading-[5rem]">
          WHAT OUR{" "}
          <span className="text-[#BE1E2D] font-black w-1/2">CLIENTS</span> HAVE
          TO SAY ABOUT US
        </div>
        <div className="text-xl font-thin w-1/4 text-right">
          Browse through our client testimonials to hear first-hand accounts of
          our quality products and exceptional customer service.
        </div>
      </div>
      <div className="m-4 drop-shadow-lg">
        <iframe
          width="885"
          height="498"
          src="https://www.youtube.com/embed/sXZk9u3I_EI"
          title="T &amp; Sugah - Lost In The Middle (ft. Mara Necia) [NCS Release]"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Testimonials;
