import React from "react";
import Aboutusintro from "../Components/Aboutus Components/Aboutusintro.js";
import Ourvision from "../Components/Aboutus Components/Ourvision.js";
import Ourteam from "../Components/Aboutus Components/Ourteam.js";

const Aboutus = () => {
  return (
    <div className="flex flex-col">
      <Aboutusintro />
      <Ourteam />
      <Ourvision />
    </div>
  );
};

export default Aboutus;
