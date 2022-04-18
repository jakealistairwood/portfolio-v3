import React from "react";
import "./Home.scss";
import ScrollIndicator from "../../assets/images/icons/scroll-indicator.svg";
import { designProjects } from "../../data/projects";
import ArrowDown from "../../assets/images/icons/arrow-down.svg";
import MailIcon from "../../assets/images/icons/email.svg";
import Project from "../../components/Project/Project";
import uuid from "react-uuid";

const Home = () => {
    console.log(designProjects);

    return (
        <>
            <section className="hero container">
                <h1 className="hero__title">
                    On a mission to produce{" "}
                    <span className="hero__title hero__title--span">
                        wonderfully simple
                    </span>{" "}
                    yet{" "}
                    <span className="hero__title hero__title--span">
                        captivating
                    </span>{" "}
                    digital experiences.
                </h1>
                <div className="hero__scroll-indicator">
                    <img
                        src={ScrollIndicator}
                        alt="scroll-for-more-indicator"
                    />
                </div>
                <div className="hero__footer">
                    <a
                        href="mailto:jakealistairwood@gmail.com"
                        className="hero__email"
                        target="_blank"
                    >
                        jakealistairwood@gmail.com
                    </a>
                    <a
                        href="mailto:jakealistairwood@gmail.com"
                        className="hero__email-icon"
                        target="_blank"
                    >
                        {/* <img src={MailIcon} alt="email-icon" /> */}
                        <svg
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M37.75 9C40.65 9 43 11.35 43 14.25V33.75C43 36.65 40.65 39 37.75 39H10.25C8.85761 39 7.52226 38.4469 6.53769 37.4623C5.55312 36.4777 5 35.1424 5 33.75V14.25C5 11.35 7.35 9 10.25 9H37.75ZM40.5 18.351L24.602 27.095C24.4384 27.1849 24.2568 27.2371 24.0704 27.2477C23.884 27.2582 23.6977 27.2269 23.525 27.156L23.398 27.096L7.5 18.35V33.75C7.5 34.4793 7.78973 35.1788 8.30546 35.6945C8.82118 36.2103 9.52065 36.5 10.25 36.5H37.75C38.4793 36.5 39.1788 36.2103 39.6945 35.6945C40.2103 35.1788 40.5 34.4793 40.5 33.75V18.351ZM37.75 11.5H10.25C9.52065 11.5 8.82118 11.7897 8.30546 12.3055C7.78973 12.8212 7.5 13.5207 7.5 14.25V15.499L24 24.573L40.5 15.498V14.25C40.5 13.5207 40.2103 12.8212 39.6945 12.3055C39.1788 11.7897 38.4793 11.5 37.75 11.5Z"
                                fill="#365351"
                            />
                        </svg>
                    </a>
                    <a href="#projects" className="hero__link">
                        <span>selected works</span>
                    </a>
                </div>
            </section>
            <section className="projects container" id="projects">
                <header className="projects-header">
                    <h2>Projects</h2>
                    <img src={ArrowDown} alt="arrow-down-icon" />
                </header>
                <div className="projects-container">
                    {designProjects.map(project => {
                        return <Project key={uuid()} project={project} />;
                    })}
                </div>
            </section>
            <section className="about container">
                <h2>About</h2>
                <div className="about-container">
                    <h3>
                        On a mission of mine to produce elegant and intuitive
                        digital applications that help others reach their
                        intended goals and potential.
                    </h3>
                    <p>
                        Hey, I'm Jake Wood! A Creative Developer, Designer and
                        Dreamer based in Bristol, UK.
                    </p>
                </div>
            </section>
        </>
    );
};

export default Home;
