import React from "react";
import {Fade} from "react-awesome-reveal";
import "../styles/Greeting.scss";
import SocialMedia from "../components/SocialMedia";
import Button from "../components/Button";

const Greeting: React.FC = () => {
    return (
        <Fade duration={1000}>
            <div className="background-container">
                <div className="greet-main" id="greeting">
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
                                    I'm a passionate Full Stack web developer with experience developing Full Stack web
                                    applications with Python, Django, React.js, and Cloud Technologies. I am strongly
                                    interested in learning new technologies and implementing them in my projects. I'm a
                                    self-motivated and hardworking individual who is always ready to learn new things
                                    and
                                    work in a team.
                                </p>
                                <div className="greeting-buttons">
                                    <SocialMedia/>
                                    <div className="button-greeting-div">
                                        <Button text="Contact me" href="#contact"/>
                                        <Button
                                            text="See My Resume"
                                            newTab={true}
                                            href="/"
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