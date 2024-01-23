import React from "react";
import "../styles/Project.scss";
import GithubRepoCard from "../components/GithubRepoCard";

// Define the structure of the primary language
interface PrimaryLanguage {
    name: string;
    color: string;
}

// Define the structure of a repository node
interface RepoNode {
    url?: string;
    name: string;
    description: string;
    primaryLanguage: PrimaryLanguage;
}

// Define the structure for a repo array item
interface RepoArrayItem {
    node: RepoNode;
}

const repo: RepoArrayItem[] = [
    {
        node: {
            url: "https://github.com/mahooly/developer-porfolio",
            name: "Developer Portfolio",
            description: "Developer portfolio built with React and Typescript.",
            primaryLanguage: {
                name: "Typescript/React",
                color: "#3178c6"
            }
        }
    },
    {
        node: {
            url: "",
            name: "IoT Platform",
            description: "IoT Development Platform with LWM2M protocol and a dashboard with Django and MongoDB.",
            primaryLanguage: {
                name: "Python",
                color: "#3572A5"
            }
        }
    },
    {
        node: {
            url: "https://github.com/mahooly/Smart_Mirror",
            name: "Smart Mirror",
            description: "Smart mirror solution with Raspberry Pi and Python, incorporating face recognition algorithms.",
            primaryLanguage: {
                name: "Python",
                color: "#3572A5"
            }
        }
    },
    {
        node: {
            url: "https://github.com/mahooly/Accommodation-Reservation-and-Management-Project",
            name: "Accommodation Reservation",
            description: "A reservation website for 3 different types of accommodations, utilizing Django, HTML, CSS, and JavaScript.",
            primaryLanguage: {
                name: "Python/Django",
                color: "#3572A5"
            }
        }
    },
    {
        node: {
            url: "https://github.com/mahooly/Twitter",
            name: "Twitter",
            description: "A Django-based microblogging platform, offering a basic version of Twitter's core functionalities.",
            primaryLanguage: {
                name: "Python/Django",
                color: "#3572A5"
            }
        }
    },
]
const Projects: React.FC = () => {
    return (
        <div className="main" id="projects">
            <h1 className="project-title">Projects</h1>
            <div className="repo-cards-div-main">
                {repo.map((v, i) => {
                    return (
                        <GithubRepoCard repo={v} key={i}/>
                    );
                })}
            </div>
        </div>
    );
}
export default Projects;