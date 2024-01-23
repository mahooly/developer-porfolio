import React from "react";
import "../styles/Education.scss";
import EducationCard from "../components/EducationCard";

// Define the structure for a school's information
interface School {
    logo: string;
    schoolName: string;
    subHeader: string;
    duration: string;
    desc: string;
    descBullets?: string[];
}

// Define the structure for the education information
interface EducationInfo {
    schools: School[];
}

const educationInfo: EducationInfo = {
    schools: [
        {
            schoolName: "University of Calgary",
            logo: require("../assets/images/UC-vert-rgb.png"),
            subHeader: "Master of Science in Computer Science",
            duration: "September 2020 - December 2023",
            desc: "Participated in the research of Decentralized Federated Learning in Vehicular Networks.",
        },
        {
            schoolName: "Sharif University of Technology",
            logo: require("../assets/images/sharif.png"),
            subHeader: "Bachelor of Science in Computer Engineering",
            duration: "September 2015 - August 2020",
            desc: "Took courses about Software Engineering, Web Security, Operating Systems, ...",
        }
    ]
};

const Education: React.FC = () => {
    return (
        <div className="education-section" id="education">
            <h1 className="education-heading">Education</h1>
            <div className="education-card-container">
                {educationInfo.schools.map((school, index) => (
                    <EducationCard key={index} school={school}/>
                ))}
            </div>
        </div>
    );
};

export default Education;
