const ProjectCard = ({image, alt, title, description}) => {
    return (
        <div className="project-card">
            <div className="project-image">
                <img src={image} alt={alt} />
            </div>
            <div className="project-info">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;