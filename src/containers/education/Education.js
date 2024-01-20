import React from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";

const educationInfo = {
     schools: [
        {
            schoolName: "University of Calgary",
            logo: require("../../assets/images/UC-vert-rgb.png"),
            subHeader: "Master of Science in Computer Science",
            duration: "September 2020 - December 2023",
            desc: "Participated in the research of XXX and published 3 papers.",
            descBullets: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            ]
        },
        {
            schoolName: "Stanford University",
            logo: require("../../assets/images/sharif.png"),
            subHeader: "Bachelor of Science in Computer Engineering",
            duration: "September 2015 - August 2020",
            desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
            descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
        }
    ]
};
export default function Education() {
  return (
      <div className="education-section" id="education">
        <h1 className="education-heading">Education</h1>
        <div className="education-card-container">
          {educationInfo.schools.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </div>
    );
}
