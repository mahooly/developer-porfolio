import React from "react";
import "../styles/Skills.scss";
import {Fade} from "react-awesome-reveal";
import SoftwareSkill from "../components/SoftwareSkill";
import {Icon} from "@iconify/react";

interface SkillsSection {
    title: string;
    subTitle: string;
    skills: string[];
}

const skillsSection: SkillsSection = {
    title: "Skills",
    subTitle: "",
    skills: [
        "Expertise in full-stack web development, encompassing both frontend and backend aspects of web applications.",
        "Proficiency in creating secure, scalable, and efficient digital solutions for diverse business requirements.",
        "Skilled in designing and managing databases for high-volume online transactions.",
        "Proficient in automating tasks and implementing RESTful APIs to enhance web application functionality.",
        "Ability to adapt to new technologies quickly and efficiently for project requirements.",
        "Experience in mentoring and leading teams in an agile and Scrum-based development environment.",
    ]
};

const Skills: React.FC = () => {
    return (
        <div className="main" id="skills">
            <div className="skills-main-div">
                <Fade direction={"left"} duration={1000}>
                    <div className="skills-image-div">
                        <h1
                            className="skills-heading"
                        >
                            {skillsSection.title}{" "}
                        </h1>
                        {skillsSection.skills.map((skills, i) => {
                            return (

                                <div key={i}
                                     className="skills-text">
                                    <div
                                        className="icon icon-lg icon-shape shadow-sm rounded-circle m-1 circle"
                                    >
                                        <Icon icon="pepicons-print:circle-big" data-inline="false"></Icon>
                                    </div>
                                    <span>{skills}</span>
                                </div>

                            );
                        })}
                    </div>
                </Fade>
                <Fade direction={"right"} duration={1000}>
                    <div className="skills-text-div">
                        <h1
                            className="skills-heading"
                        >
                            <br></br>
                        </h1>
                        <SoftwareSkill/>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default Skills;