import React from "react";
import { IoChatbubblesOutline } from "react-icons/io5";

const Chaticon = () => {
  return (
    <div className="bg-[#BE1E2D] p-4 rounded-[50%] drop-shadow-lg fixed right-10 bottom-10 cursor-pointer z-50 hover:scale-125">
      <IoChatbubblesOutline className="text-white w-6 h-6" />
    </div>
  );
};

export default Chaticon;
