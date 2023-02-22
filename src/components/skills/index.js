import React from "react";
import "./style.css"

const Skills = () =>{
    return(
        <div className="skills-section" id="skills-section">
        <div className="skills-content">
          <div className="intro-titles">
            <h3>Skills</h3>
            <p>
              Being a software developer, takes time to learn, develop, solving
              diffent programs and cooperate with others in order to improve and
              keep thriving in this environment. As a developer I try to improve
              my self throught learning, here I have enumerated some of the most
              skills I have acquired in this environment.
            </p>
          </div>
          <div className="skills-container">
            <div className="skills-box">
              <div className="skills-radio-box">
                <h3>58%</h3>
              </div>
              <h4>Front-End</h4>
            </div>

            <div className="skills-box">
              <div className="skills-radio-box">
                <h3>40%</h3>
              </div>
              <h4>Back-End</h4>
            </div>

            <div className="skills-box">
              <div className="skills-radio-box">
                <h3>60%</h3>
              </div>
              <h4>UI/UX</h4>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Skills