import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Mainpage from "../MainPage/Mainpage";
import Navbar from "../Navbar/Navbar";
import Projects from "../Projects/Projects";
import Resume from "../Resume/Resume";
function Homepage() {
  return (
    <>
      <Navbar />
      <Mainpage />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </>
  );
}
export default Homepage;
