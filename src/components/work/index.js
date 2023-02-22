import React, { useState } from "react";
import "./style.css";
import { MyWorkCard } from "../ui/cards";
import TabImage1 from "../../images/work.png";
import TabImage2 from "../../images/portfolio.png";
import TabImage3 from "../../images/gitHub.png";

const Work = () => {
  const [tabOne, setTabOne] = useState("tabOne");
  const [tabTwo, setTabTwo] = useState("");
  const [tabThree, setTabThree] = useState("");
  return (
    <div className="my-work-section" id="my-work-section">
      <div className="my-work-content">
        <div className="intro-titles">
          <h3>My Work</h3>
          <p className="my-work-description">
            For a while I have been working on some of different projects, in
            different areas of software development ecosystem.
          </p>
        </div>
        {/* tabs section */}
        <div className="tabs">
          <button
            style={{
              backgroundColor: tabOne === "tabOne" ? "#696672" : "transparent",
            }}
            className="tabBtn active"
            onClick={() => {
              setTabOne("tabOne");
              setTabTwo("");
              setTabThree("");
            }}
          >
            Back-End
          </button>
          <button
            style={{
              backgroundColor: tabTwo === "tabTwo" ? "#696672" : "transparent",
            }}
            className="tabBtn"
            onClick={() => {
              setTabOne("");
              setTabThree("");
              setTabTwo("tabTwo");
            }}
          >
            Front-End
          </button>
          <button
            style={{
              backgroundColor:
                tabThree === "tabThree" ? "#696672" : "transparent",
            }}
            className="tabBtn"
            onClick={() => {
              setTabOne("");
              setTabTwo("");
              setTabThree("tabThree");
            }}
          >
            UI/UX
          </button>
        </div>
        {tabOne === "tabOne" && (
          <MyWorkCard
            image1={TabImage1}
            image2={TabImage2}
            image3={TabImage3}
          />
        )}
        {tabTwo === "tabTwo" && (
          <MyWorkCard
            image1={TabImage3}
            image2={TabImage3}
            image3={TabImage3}
          />
        )}
        {tabThree === "tabThree" && (
          <MyWorkCard
            image1={TabImage1}
            image2={TabImage1}
            image3={TabImage1}
          />
        )}
      </div>
    </div>
  );
};

export default Work;
