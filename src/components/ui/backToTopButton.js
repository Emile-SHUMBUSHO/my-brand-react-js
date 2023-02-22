import React from "react";
import styled from "styled-components";
import * as Unicons from "@iconscout/react-unicons";

const StyledDiv = styled.div`
    width:50px;
    height:50px,
    borderRadius:50px,
    back-ground-color:"red",
`;

const ChatButton = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        position: "fixed",
        bottom: 0,
        right: 0,
        display: "flex",
        width: "50px",
        height: "50px",
        background: "#fff",
        borderRadius: "50%",
        padding: "10px",
        margin: "10px",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <div>
        <Unicons.UilCommentAltMessage size="24" color="#333" />
      </div>
    </div>
  );
};

export default ChatButton;
