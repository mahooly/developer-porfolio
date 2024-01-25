import React from "react";
import {Fade} from "react-awesome-reveal";
import "../styles/Greeting.scss";
import SocialMedia from "../components/SocialMedia";
import Button from "../components/Button";

const Greeting: React.FC = () => {
    return (
        <Fade duration={1000}>
            <div className="background-container">
                <div className="greet-main" id="about">
                    <div className="greeting-main">
                        <div className="greeting-text-div">
                            <div>
                                <h1
                                    className="greeting-text"
                                >
                                    {" "}Hi, I'm Mahtab{" "}
                                </h1>
                                <p
                                    className="greeting-text-p subTitle"
                                >
                                    I am an experienced Full Stack Developer with a solid foundation in computer science
                                    and engineering. My expertise lies in Python, Django, React.js, Node.js, and
                                    comprehensive database management. I have a proven track record of developing
                                    scalable web applications, enhancing network security infrastructures, and
                                    contributing to AI-based solutions. Committed to continuous learning and innovation,
                                    I bring a collaborative spirit and a relentless drive to achieve excellence in
                                    technology solutions.
                                </p>
                                <div className="greeting-buttons">
                                    <SocialMedia/>
                                    <div className="button-greeting-div">
                                        <Button text="Contact me" href="#contact"/>
                                        <Button
                                            text="See My Resume"
                                            newTab={true}
                                            href="https://drive.google.com/file/d/14gSfWOVf4VK7Z3voQcG5hlmisMLZy5o7/view?usp=sharing"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
}

export default Greeting;