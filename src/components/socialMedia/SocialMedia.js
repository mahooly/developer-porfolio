import React from "react";
import "./SocialMedia.scss";

export default function socialMedia() {
  return (
    <div className="social-media-div">
      <a
          href="https://github.com/mahooly/"
          className="icon-button github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
          <span></span>
        </a>

      <a
          href="https://www.linkedin.com/in/mahtab-movahedian/"
          className="icon-button linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
          <span></span>
        </a>

      <a
          href="mailto:mahtab.movahedian"
          className="icon-button google"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-envelope"></i>
          <span></span>
        </a>
    </div>
  );
}
