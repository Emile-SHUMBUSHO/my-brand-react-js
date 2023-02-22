import React, { useState } from "react";
import Logo from "../../images/logo.png";
import "./style.css";
import ChatButton from "../ui/backToTopButton";
import Chat from "../chat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [chatButton, setChatButton] = useState("chatButton");
  const [chatCard, setChatCard] = useState("chatCard");
  const openChat = () => {
    setChatCard("");
  };
  const closeChat = () => {
    setChatCard("hide");
  };

  return (
    <div>
      <div className="footer-section">
        <div className="footer-left-side">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-right-side">
          <div className="icons">
            <FontAwesomeIcon icon={faGithub} size="lg" color="#2C244D" />
          </div>
          <div className="icons">
            <FontAwesomeIcon icon={faTwitter} size="lg" color="#2C244D" />
          </div>
          <div className="icons">
            <FontAwesomeIcon icon={faLinkedin} size="lg" color="#2C244D" />
          </div>
        </div>
      </div>
      {chatButton === "chatButton" && <ChatButton onClick={openChat} />}
      {chatCard === "" && <Chat onClick={closeChat} />}
    </div>
  );
};

export default Footer;
