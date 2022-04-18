import React from "react";
import "./SocialIconsBar.scss";
import DribbbleIcon from "../../assets/images/icons/dribbble.svg";
import BehanceIcon from "../../assets/images/icons/behance.svg";
import LinkedinIcon from "../../assets/images/icons/linkedin.svg";

const SocialIconsBar = () => {
    return (
        <div className="social-icons">
            <a
                className="social-icon"
                href="https://www.linkedin.com/in/jake-wood-726141114/"
                target="_blank"
            >
                <img src={LinkedinIcon} alt="linkedin-icon" />
            </a>
            <a
                className="social-icon"
                href="https://www.linkedin.com/in/jake-wood-726141114/"
                target="_blank"
            >
                <img src={BehanceIcon} alt="behance-icon" />
            </a>
            <a
                className="social-icon"
                href="https://dribbble.com/jakealistairwood"
                target="_blank"
            >
                <img src={DribbbleIcon} alt="dribbble-icon" />
            </a>
        </div>
    );
};

export default SocialIconsBar;
