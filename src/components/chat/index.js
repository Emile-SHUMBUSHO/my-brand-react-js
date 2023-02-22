import React from "react";
import "./style.css";
import * as Unicons from "@iconscout/react-unicons";

const Chat = ({ onClick }) => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        right: 0,
        display: "flex",
        width: "300px",
        height: "95vh",
        background: "#fff",
        borderRadius: "10px",
        padding: "5px",
        margin: "10px",
        zIndex: 9999,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div className="header">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ margin: "10px" }}>
            <Unicons.UilQuestionCircle />
          </div>

          <span style={{ marginLeft: "10px" }}>Need support?</span>
        </div>
        <div onClick={onClick} style={{ margin: "10px" }} className="icon">
          <Unicons.UilAngleDown size="30" color="#2C244D" />
        </div>
      </div>
      <div className="body">
        <div className="messageSenders">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin:"10px",
            }}
          >
            <span>February 21 at 10:59 PM</span>
          </div>

          <div className="sender">
            <p className="text">Hi, there I would like to have a meeting with you if you don't mind</p>
          </div>
          <div className="receiver">
            <p className="text">Sure, let me know once you are available</p>
          </div>
        </div>
      </div>
      <div className="footer">
        <div style={{ margin: "10px" }} className="icon">
          <Unicons.UilPaperclip size="24" color="#2C244D" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "10px",
            width: "230px",
            height: "40px",
            borderRadius: "10px",
            border: "2px solid #2C244D",
          }}
        >
          <input
            style={{
              border: "none",
              boxShadow: "none",
              outline: "none",
            }}
            onFocus={(e) => {
              e.target.style.border = "none";
              e.target.style.boxShadow = "none";
            }}
            placeholder="Type a message"
          ></input>
          <div className="icon">
            <Unicons.UilMessage size="24" color="#2C244D" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
