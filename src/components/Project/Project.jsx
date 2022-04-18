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
            <h4>{project.subtitle}</h4>
            <h3>{project.title}</h3>
        </div>
    );
};

export default Project;
