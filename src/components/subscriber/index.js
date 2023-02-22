import React from "react";
import "./style.css";

const Subscribe = () => {
  return (
    <div className="subscribe-container">
      <div className="subscribe">
        <p className="subscribe-intro">
          Subscribe to my news latter and never miss any updates
        </p>
        <div className="subscribe-field-wrapper">
          <div className="field">
            <input type="text" name="email" placeholder="Email address" />
            <label for="email" className="s-btn">
              Subscribe
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
