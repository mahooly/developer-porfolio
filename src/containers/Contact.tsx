import React from "react";
import "../styles/Contact.scss";
import SocialMedia from "../components/SocialMedia";
import {Fade} from "react-awesome-reveal";

// Define the structure for contactInfo
interface ContactInfo {
    title: string;
    subtitle: string;
    email_address: string;
}

const contactInfo: ContactInfo = {
    title: "Contact Me",
    subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
    email_address: "saadpasta70@gmail.com"
};

const Contact: React.FC = () => {
    return (
        <Fade duration={1000}>
            <div className="main contact-margin-top" id="contact">
                <div className="contact-div-main">
                    <div className="contact-header">
                        <h1 className="heading contact-title">{contactInfo.title}</h1>
                        <p
                            className="subTitle contact-subtitle"
                        >
                            {contactInfo.subtitle}
                        </p>
                        <div className="location-div"><span className="desc-prof"><svg viewBox="-0.5 -2 20 19"
                                                                                       version="1.1"
                                                                                       width="22" height="16"
                                                                                       aria-hidden="true"
                                                                                       stroke="currentColor"><path
                            fill-rule="evenodd"
                            d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>Calgary, Canada</span>
                        </div>
                        <div
                            className="contact-text-div"
                        >
                            <SocialMedia/>
                        </div>
                    </div>
                    <div className="image-content-profile"><img className="profile-image"
                                                                src={require("../assets/images/profile.jpg")}
                                                                alt="Mahtab Movahedian"/></div>
                </div>
            </div>
        </Fade>
    );
}

export default Contact;
