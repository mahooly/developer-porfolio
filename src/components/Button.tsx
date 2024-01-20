import React from "react";
import "../styles/Button.scss";

interface Props {
    text: string,
    newTab?: boolean,
    className?: string,
    href: string
}

const Button: React.FC<Props> = ({text, className = '', href, newTab = false}) => {
    return (
        <div className={className}>
            <a className="main-button" href={href} target={newTab ? "_blank" : undefined}
               rel={newTab ? "noopener noreferrer" : undefined}>
                {text}
            </a>
        </div>
    );
}

export default Button;
