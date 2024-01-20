import React from "react";
import Headroom from "react-headroom";
import "../styles/Header.scss";

function Header() {
    return (
        <Headroom>
            <header className="header">
                <div className="logo-container">
                    <a href="/" className="logo">
                        <img src={require("../assets/images/profile.jpg")} alt="Mahtab Movahedian Attar Logo"
                             className="logo-image"/>
                        <span className="logo-name">Mahtab Movahedian</span>
                    </a>
                </div>
                <input className="menu-btn" type="checkbox" id="menu-btn"/>
                <label
                    className="menu-icon"
                    htmlFor="menu-btn"
                    style={{color: "white"}}
                >
                <span className="navicon"></span>
                </label>
                <ul className="menu">
                    <li>
                        <a href="#skills">About</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#experience">Work Experiences</a>
                    </li>
                    <li>
                        <a href="#education">Education</a>
                    </li>
                    <li>
                        <a href="#contact">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact Me</a>
                    </li>
                </ul>
            </header>
        </Headroom>
    );
}

export default Header;
