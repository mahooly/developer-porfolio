import React from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";

const repo = [
    {
        node: {
            id: 1,
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
            id: 2,
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
            id: 3,
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
            id: 4,
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
export default function Projects() {
    return (
        <div className="main" id="opensource">
            <h1 className="project-title">Projects</h1>
            <div className="repo-cards-div-main">
                {repo.map((v, i) => {
                    return (
                        <GithubRepoCard repo={v} key={v.node.id}/>
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
