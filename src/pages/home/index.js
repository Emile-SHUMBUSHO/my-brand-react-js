import React from "react";
import Nav from "../../components/navigation";
import Welcome from "../../components/welcome";
import About from "../../components/about";
import Skills from "../../components/skills";
import Work from "../../components/work";
import Subscribe from "../../components/subscriber";
import Footer from "../../components/footer";

const Home = () => {
  return (
    <div className="main">
      <Nav />
      <Welcome />
      <About />
      <Skills />
      <Work />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
