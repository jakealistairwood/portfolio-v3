import "./Project.scss";

const Project = ({ project }) => {
    console.log(project);
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
            <h3>{project.subtitle}</h3>
            <h4>{project.title}</h4>
        </div>
    );
};

export default Project;
