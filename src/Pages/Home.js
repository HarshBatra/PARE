import React from "react";
import Intro from "../Components/Intro.js";
import Aboutus from "../Components/Aboutus.js";
import Productsrange from "../Components/Productsrange.js";
import Trustedby from "../Components/Trustedby.js";
import Ourqualities from "../Components/Ourqualities.js";
import Chaticon from "../Components/Chaticon.js";

const Home = () => {
  return (
    <div>
      <Chaticon />
      <Intro />
      <Aboutus />
      <Productsrange />
      <Trustedby />
      <Ourqualities />
    </div>
  );
};

export default Home;
