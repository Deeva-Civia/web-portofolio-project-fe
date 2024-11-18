import SkillCard from './SkillCard';
const Skills = () => {
    const skillsData = [
        {
            icon: 'img/icons-programming.png',
            title: 'Programming',
            description: 'Proficient in Python, C#, SQL, JavaScript, HTML, and CSS to develop functional and efficient solutions for web and software projects.'
        },
        {
            icon: 'img/icons-design.png',
            title: 'Design Tools',
            description: 'Experienced in using Figma, Canva, Visual Studio, and XAMPP to create visually stunning designs and streamline development workflows.'
        },
        {
            icon: 'img/icons-project-management.png',
            title: 'Project Management',
            description: 'Skilled in creating and managing Gantt charts, performing cost analysis, and calculating Break-Even Points (BEP) for effective project execution.'
        },
        {
            icon: 'img/icons-leadership.png',
            title: 'Leadership',
            description: 'Proven ability to lead and inspire teams, driving success in various projects and large-scale events through effective communication and coordination.'
        }
    ];
    
    return (
    <section id="skills">
        <h2 className="sub-title">Skills</h2>
        <div className="skills-grid">
        {skillsData.map((skill, index) => (
            <SkillCard key={index} {...skill} />
        ))}
        <div className="blur-circle blue-circle" />
        </div>
    </section>
    );
};
export default Skills;