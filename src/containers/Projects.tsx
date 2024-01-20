import React from "react";
import "../styles/Project.scss";
import Button from "../components/Button";
import GithubRepoCard from "../components/GithubRepoCard";

// Define the structure of the primary language
interface PrimaryLanguage {
    name: string;
    color: string;
}

// Define the structure of a repository node
interface RepoNode {
    url: string;
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
            url: "",
            name: "IoT Platform",
            description: "IoT Development Platform with LWM2M protocol and a dashboard with Django and MongoDB.",
            primaryLanguage: {
                name: "Python",
                color: "blue"
            }
        }
    },
    {
        node: {
            url: "",
            name: "Smart Mirror",
            description: "Smart mirror solution with Raspberry Pi and Python, incorporating face recognition algorithms.",
            primaryLanguage: {
                name: "Python",
                color: "blue"
            }
        }
    },
    {
        node: {
            url: "",
            name: "Accommodation Reservation",
            description: "A reservation website for 3 different types of accommodations, utilizing Django, HTML, CSS, and JavaScript.",
            primaryLanguage: {
                name: "Python",
                color: "blue"
            }
        }
    },
    {
        node: {
            url: "",
            name: "Twitter",
            description: "hello",
            primaryLanguage: {
                name: "python",
                color: "blue"
            }
        }
    },
]
const Projects: React.FC = () => {
    return (
        <div className="main" id="opensource">
            <h1 className="project-title">Projects</h1>
            <div className="repo-cards-div-main">
                {repo.map((v, i) => {
                    return (
                        <GithubRepoCard repo={v} key={i}/>
                    );
                })}
            </div>
            <Button
                text={"More Projects"}
                className="project-button"
                href="/"
                newTab={true}
            />
        </div>
    );
}
export default Projects;