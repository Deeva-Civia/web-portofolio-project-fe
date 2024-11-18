const SkillCard = ({icon, title, description}) => {
    return (
        <div className="skill-card">
        <img className="skill-icon" src={icon} alt={title.toLowerCase()} />
        <h3 className="skill-title">{title}</h3>
        <p className="skill-description">{description}</p>
    </div>
    );
};

export default SkillCard;