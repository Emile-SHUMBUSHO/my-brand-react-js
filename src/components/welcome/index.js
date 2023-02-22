import React from "react";
import "./style.css";
import { Link } from "react-scroll";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="welcomeButton">
        <Link> Welcome To My Portfolio </Link>
      </div>
    </div>
  );
};

export default Welcome;
