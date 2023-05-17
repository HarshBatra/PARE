import React from "react";
import Intro from "../Components/Intro.js";
import Aboutus from "../Components/Aboutus.js";
import Productsrange from "../Components/Productsrange.js";
import Trustedby from "../Components/Trustedby.js";

const Home = () => {
  return (
    <div>
      <Intro />
      <Aboutus />
      <Productsrange />
      <Trustedby />
    </div>
  );
};

export default Home;
