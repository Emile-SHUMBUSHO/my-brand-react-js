import React, { useEffect, useState } from "react";
import Logo from "../../images/logo.png";
import { Link } from "react-scroll";
import "./style.css";
import Modal from "../modal";

const Nav = () => {

  const [isScrolling, setIsScrolling] = useState(false);
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <>
      <div
        className="navBar"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          color: "#fff",
          zIndex: 10,
          backgroundColor: isScrolling ? "#0d1b2a" : "transparent",
          transition: "background-color 0.5s ease",
        }}
      >
        <div className="log">
          <img src={Logo} />
        </div>
        <div className="navigation">
          <div className="menu">
            <ul>
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>About</Link>
              </li>
              <li>
                <Link>Skills</Link>
              </li>
              <li>
                <Link>MyWork</Link>
              </li>
              <li>
                <Link>Blog</Link>
              </li>
              <li>
                <Link>Login</Link>
              </li>
            </ul>
          </div>
          <div className="letConnectBtn" onClick={()=> Toggle()}>
            <Link>Let's connect</Link>
          </div>
        </div>
      </div>
      <Modal show={modal} close={Toggle}/>
    </>
  );
};

export default Nav;
