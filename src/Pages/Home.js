import React from "react";
import Intro from "../Components/Intro.js";
import Aboutus from "../Components/Aboutus.js";
import Productsrange from "../Components/Productsrange.js";
import Trustedby from "../Components/Trustedby.js";
import Ourqualities from "../Components/Ourqualities.js";
import Chaticon from "../Components/Chaticon.js";
import Pastwork from "../Components/Pastwork.js";

const Home = () => {
  return (
    <div>
      <Chaticon />
      <Intro />
      <Aboutus />
      <Productsrange />
      <Trustedby />
      <Pastwork />
      <Ourqualities />
    </div>
  );
};

export default Home;
