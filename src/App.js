import React from "react";
import "./App.css";
import "./input.css";
import "./animation.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.js";
import Contactus from "./Pages/Contactus.js";
import Aboutus from "./Pages/Aboutus.js";
import Blog from "./Pages/Blog.js";
import Career from "./Pages/Career.js";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/career" element={<Career />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
