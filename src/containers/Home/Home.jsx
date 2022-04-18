import React from "react";
import "./Home.scss";
import ScrollIndicator from "../../assets/images/icons/scroll-indicator.svg";
import { designProjects } from "../../data/projects";

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
                    <img src={ScrollIndicator} alt="" />
                </div>
                <div className="hero__footer">
                    <a
                        href="mailto:jakealistairwood@gmail.com"
                        className="hero__email"
                        target="_blank"
                    >
                        jakealistairwood@gmail.com
                    </a>
                    <a href="" className="hero__link">
                        <span>selected works</span>
                    </a>
                </div>
            </section>
            <section className="projects">
                <h2>Projects</h2>
                <div className="projects-container">
                    {designProjects.map(project => {
                        return (
                            <div className="project">
                                <a
                                    href={project.figmaLinks.prototype}
                                    target="_blank"
                                    className="project__img-container"
                                >
                                    <img
                                        className="project__img"
                                        src={project.imgInfo.imgSrc}
                                        alt={project.imgInfo.imgAlt}
                                    />
                                </a>
                                <h4>{project.subtitle}</h4>
                                <h3>{project.title}</h3>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default Home;
