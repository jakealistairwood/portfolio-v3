import React from "react";
import "./Home.scss";
import ScrollIndicator from "../../assets/images/icons/scroll-indicator.svg";
import { designProjects } from "../../data/projects";
import ArrowDown from "../../assets/images/icons/arrow-down.svg";
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
        </>
    );
};

export default Home;
