import React from "react";
import "../styles/Footer.scss";
import {Fade} from "react-awesome-reveal";

export default function Footer() {
  return (
    <Fade duration={1000}>
      <div className="footer-div">
        <p className="footer-text">
          Made by Mahtab Movahedian Attar
        </p>
      </div>
    </Fade>
  );
}
