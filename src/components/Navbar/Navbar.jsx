import React from "react";
import "./Navbar.scss";

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="navbar__container">
                <a href="" className="navbar__logo">
                    Jake Wood
                </a>
                <ul className="navbar__nav-links">
                    <li className="navbar__nav-link">Work</li>
                    <li className="navbar__nav-link">About</li>
                    <li className="navbar__nav-link">Contact</li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
