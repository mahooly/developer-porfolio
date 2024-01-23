import React from "react";
import "../styles/WorkExperience.scss";
import ExperienceCard from "../components/ExperienceCard";
import {Fade} from "react-awesome-reveal";

interface WorkExperienceType {
    role: string;
    company: string;
    companylogo: string;
    date: string;
    desc: string;
    descBullets?: string[];
}

interface WorkExperiences {
    experience: WorkExperienceType[];
}

const workExperiences: WorkExperiences = {
    experience: [
        {
            role: "Graduate Research Assistant",
            company: "University of Calgary",
            companylogo: require("../assets/images/UC-vert-rgb.png"),
            date: "Sept 2020 – Dec 2023",
            desc: "Conducted research on Decentralized Federated Learning in Vehicular Networks.",
            descBullets: [
                "Applied a Reinforcement Learning-based method to improve accuracy while reducing model aggregations by 50%.",
                "Research paper accepted at 19th International Conference on Network and Service Management, 2023."
            ]
        },
        {
            role: "Software Engineer",
            company: "Wedge Networks",
            companylogo: require("../assets/images/wedge_networks_inc__logo.jpg"),
            date: "Feb 2022 – April 2023",
            desc: "Developed and maintained high-performance network security infrastructure using Java and Node.js; implemented advanced encryption protocols that safeguarded sensitive customer data."
        },
        {
            role: "Fullstack Developer",
            company: "Behtarino",
            companylogo: require("../assets/images/behtarino_logo.jpg"),
            date: "June 2019 – Oct 2020",
            desc: "Implemented RESTful APIs and automated tasks using Django and Celery for the back-end of a website-building platform.",
            descBullets: [
                "Created React components for an online directory, part of the website-building platform, serving over 1000 businesses.",
                "Designed a MongoDB database for online orders, facilitating over 5000 online transactions daily."
            ]
        },
        {
            role: "Software Developer Intern",
            company: "Farineh Fanavar Co.",
            companylogo: require("../assets/images/1631318960380.jpg"),
            date: "Jul 2018 – Sep 2018",
            desc: "Collaborated on construction of IoT components using DBus and protocols such as MQTT, CoAP, and OPC-UA, reducing MQTT Client CPU utilization by 60%."
        }
    ]
};
const WorkExperience: React.FC = () => {
    return (
        <div id="experience">
            <Fade duration={1000}>
                <div className="experience-container" id="workExperience">
                    <div>
                        <h1 className="experience-heading">Work Experiences</h1>
                        <div className="experience-cards-div">
                            {workExperiences.experience.map((card, i) => {
                                return (
                                    <ExperienceCard
                                        key={i}
                                        cardInfo={{
                                            company: card.company,
                                            desc: card.desc,
                                            date: card.date,
                                            companylogo: card.companylogo,
                                            role: card.role,
                                            descBullets: card.descBullets
                                        }}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default WorkExperience;