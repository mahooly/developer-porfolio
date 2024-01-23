import React from "react";
import "../styles/GithubRepoCard.scss";
import {Fade} from "react-awesome-reveal";

// Define the structure of the repository data expected in the props
interface RepoNode {
    name: string;
    url?: string;
    description?: string;
    primaryLanguage: {
        name: string;
        color: string;
    };
}

interface GithubRepoCardProps {
    repo: {
        node: RepoNode;
    };
    key: number;
}

const GithubRepoCard: React.FC<GithubRepoCardProps> = ({repo, key}) => {
    const openUrlInNewTab = (url: string, name: string) => {
        if (!url) {
            console.log(`URL in ${name} is undefined`);
            return;
        }
        const win = window.open(url, "_blank");
        win?.focus();
    };

    return (
        <Fade duration={1000}>
            <div>
                <div
                    className="repo-card-div"
                    key={key}
                    onClick={() => repo.node.url ? openUrlInNewTab(repo.node.url, repo.node.name) : null}
                >
                    <div className="repo-name-div">
                        {repo.node.url ?
                            <div className="octicon repo-svg"><i className="fab fa-github"></i>
                                <span></span></div>

                            :
                            <svg
                                aria-hidden="true"
                                className="octicon repo-svg"
                                height="20"
                                role="img"
                                viewBox="0 0 12 16"
                                width="14"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
                                ></path>
                            </svg>}
                        <p className="repo-name">{repo.node.name}</p>
                    </div>
                    <p className="repo-description">{repo.node.description}</p>
                    <div className="repo-stats">
                        <div className="repo-left-stat">
              <span>

                  <div
                      className="language-color"
                      style={{backgroundColor: repo.node.primaryLanguage.color}}
                  ></div>
                  <p>{repo.node.primaryLanguage.name}</p>
                </span>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
}
export default GithubRepoCard;
