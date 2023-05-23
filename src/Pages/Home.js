import React from "react";
import Intro from "../Components/Homepage components/Intro.js";
import Aboutus from "../Components/Homepage components/Aboutus.js";
import Productsrange from "../Components/Homepage components/Productsrange.js";
import Trustedby from "../Components/Homepage components/Trustedby.js";
import Ourqualities from "../Components/Homepage components/Ourqualities.js";
import Chaticon from "../Components/Homepage components/Chaticon.js";
import Pastwork from "../Components/Homepage components/Pastwork.js";
import Projects from "../Components/Homepage components/Projects.js";
import Testimonials from "../Components/Homepage components/Testimonials.js";
import Nextproject from "../Components/Homepage components/Nextproject.js";
import Pareindia from "../Components/Homepage components/Pareindia.js";

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
      <Projects />
      <Testimonials />
      <Nextproject />
      <Pareindia />
    </div>
  );
};

export default Home;
