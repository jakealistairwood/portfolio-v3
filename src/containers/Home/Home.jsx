import React from "react";
import "./Home.scss";
import ScrollIndicator from "../../assets/images/icons/scroll-indicator.svg";
import { designProjects } from "../../data/projects";
import ArrowDown from "../../assets/images/icons/arrow-down.svg";
import MailIcon from "../../assets/images/icons/email.svg";
import Project from "../../components/Project/Project";
import ImageOfMe from "../../assets/images/me.jpg";
import uuid from "react-uuid";
import CV from "../../assets/docs/cv.pdf";

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
                <div className="about-container">
                    <h2>About</h2>
                    <div className="about__img-container">
                        <img src={ImageOfMe} alt="jake-wood" />
                    </div>
                    <h3>
                        On a mission to produce elegant and intuitive digital
                        applications that help others reach their intended goals
                        and potential.
                    </h3>
                    <p>
                        Hey, I'm Jake Wood! A Creative Developer, Designer and
                        Dreamer based in Bristol, UK.
                    </p>
                    <a href="mailto:jakealistairwood@gmail.com" target="_blank">
                        <button className="primary-btn">Get in Touch</button>
                    </a>
                </div>
            </section>
            <footer className="footer">
                <div className="container">
                    <div className="footer__contact-icons">
                        <a
                            href="mailto:jakealistairwood@gmail.com"
                            target="_blank"
                            className="footer__contact-icon"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M22.2396 0.93077C22.1006 0.815358 21.9316 0.741828 21.7524 0.718748C21.5732 0.695668 21.3912 0.723989 21.2274 0.800411L1.58142 10.0218V11.8062L9.83315 15.1068L15.1261 23.25H16.9108L22.5499 1.9031C22.5956 1.72828 22.5907 1.54407 22.5358 1.37192C22.4808 1.19977 22.3781 1.04678 22.2396 0.93077V0.93077ZM15.8089 21.5481L11.2594 14.5486L18.2603 6.88066L17.1526 5.86929L10.0969 13.597L3.2933 10.8755L20.7984 2.65872L15.8089 21.5481Z"
                                    fill="white"
                                />
                            </svg>
                        </a>
                        <a
                            className="footer__contact-icon"
                            href="https://www.linkedin.com/in/jake-wood-726141114/"
                            target="_blank"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M9.429 8.969H13.143V10.819C13.678 9.755 15.05 8.799 17.111 8.799C21.062 8.799 22 10.917 22 14.803V22H18V15.688C18 13.475 17.465 12.227 16.103 12.227C14.214 12.227 13.429 13.572 13.429 15.687V22H9.429V8.969V8.969ZM2.57 21.83H6.57V8.799H2.57V21.83V21.83ZM7.143 4.55C7.14315 4.88528 7.07666 5.21724 6.94739 5.52659C6.81812 5.83594 6.62865 6.11651 6.39 6.352C5.9064 6.83262 5.25181 7.10165 4.57 7.1C3.88939 7.09954 3.23631 6.8312 2.752 6.353C2.51421 6.11671 2.32539 5.83582 2.19634 5.52643C2.0673 5.21704 2.00058 4.88522 2 4.55C2 3.873 2.27 3.225 2.753 2.747C3.23689 2.26816 3.89024 1.9997 4.571 2C5.253 2 5.907 2.269 6.39 2.747C6.872 3.225 7.143 3.873 7.143 4.55Z"
                                    fill="white"
                                />
                            </svg>
                        </a>
                        <a
                            className="footer__contact-icon"
                            target="_blank"
                            href={CV}
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.6803 15.3902C11.2215 16.1113 10.7813 16.8168 9.79491 17.5021C9.26728 17.872 8.05284 18.5946 6.32663 18.5946C3.03323 18.5946 0.375 16.2002 0.375 11.9907C0.375 8.31164 2.87555 5.4054 6.39684 5.4054C7.82344 5.4054 9.09094 5.89857 10.0244 6.6384C10.8875 7.32511 11.2918 8.01202 11.6445 8.62852L9.17981 9.86007C9.00347 9.45572 8.79122 9.03277 8.24639 8.57541C7.64714 8.0994 7.0492 7.95891 6.53733 7.95891C4.53009 7.95891 3.47339 9.82571 3.47339 11.9032C3.47339 14.6331 4.86558 15.988 6.53733 15.988C8.15747 15.988 8.80983 14.8611 9.23142 14.1399L11.6803 15.3902V15.3902ZM20.3144 5.79254H23.625L19.3108 18.2247H16.1422L11.881 5.79254H15.1916L17.7623 14.6332L20.3144 5.79254Z"
                                    fill="white"
                                />
                            </svg>
                        </a>
                    </div>
                    <div className="footer__copyright"></div>
                </div>
            </footer>
        </>
    );
};

export default Home;
