import {Icon} from "@iconify/react";
import React from "react";
import "./SoftwareSkill.scss";

let skillsSection = {
    softwareSkills: [
        {
            skillName: "Python",
            iconifyTag: "logos:python",
        },
        {
            skillName: "JavaScript",
            iconifyTag: "logos:javascript",
        },
        {
            skillName: "Typescript",
            iconifyTag: "vscode-icons:file-type-typescript",
        },
        {
            skillName: "C#",
            iconifyTag: "logos:c-sharp",
        },
        {
            skillName: "Java",
            iconifyTag: "logos:java",
        },
        {
            skillName: "C++",
            iconifyTag: "file-icons:c",
        },
        {
            skillName: "Django",
            iconifyTag: "vscode-icons:file-type-django",
        },
        {
            skillName: "Reactjs",
            iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
            skillName: "Nodejs",
            iconifyTag: "logos:nodejs",
        },
        {
            skillName: "GraphQL",
            iconifyTag: "logos:graphql",
        },
        {
            skillName: "PostgreSQL",
            iconifyTag: "logos:postgresql",
        },
        {
            skillName: "MongoDB",
            iconifyTag: "devicon:mongodb",
        },
        {
            skillName: "Github",
            iconifyTag: "akar-icons:github-fill",
        },
        {
            skillName: "AWS",
            iconifyTag: "logos:aws",
        },
        {
            skillName: "Azure",
            iconifyTag: "vscode-icons:file-type-azure",
        },
        {
            skillName: "Docker",
            iconifyTag: "logos:docker-icon",
        },
        {
            skillName: "Kubernetes",
            iconifyTag: "logos:kubernetes",
        },
    ]
}
export default function SoftwareSkill() {
    return (
        <div className="skills-section">
            <div className="skills-container software-skills-main-div">
                {skillsSection.softwareSkills.map((skill, i) => (
                    <div className="skill" key={i}> {/* Move the key to here */}
                        <div
                            className="icon icon-lg icon-shape shadow-sm rounded-circle m-1"
                            id={skill.skillName.replace(/\s/g, "")}
                        >
                            <Icon icon={skill.iconifyTag} data-inline="false"></Icon>
                        </div>
                        <span>{skill.skillName}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
