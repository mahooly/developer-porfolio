import React from "react";
import "./Skills.scss";
import {Fade} from "react-reveal";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";

let skillsSection = {
  title: "Skills",
  subTitle: "hello",
  skills: [
    "Develop highly interactive Front end / User Interfaces for your web and mobile applications",
    "Progressive Web Applications ( PWA ) in normal and SPA Stacks",
    "Integration of third party services such as Firebase/ AWS / Digital Ocean"]
}
export default function Skills() {
  return (
    <div className="main" id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className="skills-heading"
            >
              {skillsSection.title}{" "}
            </h1>
            <p
              className="dark-mode subTitle skills-text-subtitle"
            >
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
            <div>
              {skillsSection.skills.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className="subTitle skills-text"
                  >
                    {skills}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
