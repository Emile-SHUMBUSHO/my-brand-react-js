import React from "react";
// import Image from "./UI/images/rocket.svg"
import "./style.css"

const About = () => {
  return (
      <div className="content">
        <div className="leftSide">
          <h1>Hi! I’m Emile, Software Developer</h1>
          <p>
            Skilled at using educational knowledge and industry expertise to
            achieve cutting-edge results. Ready and open to develop new skills
            and grow knowledge by gaining.
          </p>
          <div className="let-connect-section-content">
            <span>Let's connect</span>
            
          </div>
        </div>
        <div className="rightSide">
          {/* <img src={Image}/> */}
        </div>
      </div>
    
  );
};

export default About
