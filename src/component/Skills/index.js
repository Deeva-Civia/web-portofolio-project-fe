import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState} from "react";
import { Zoom } from "react-awesome-reveal";

const Skills = () => {
    const [skill, setSkill] = useState({});

    useEffect(() => {
        const db = getDatabase();
        const heroRef = ref(db, "skil/");
        onValue(heroRef, (snapshot) => {
            const data = snapshot.val();
            setSkill(data);
        });
}, []);
    
    return (
        <section id="skills" className="skills-section">
                <div div className="container">
                    <Zoom
                    duration={2000}>
                        <h2 className="sub-title">{skill.title}</h2>
                    </Zoom>
                    <div className="skills-grid">
                    <Zoom
                    duration={2000}>
                        <div className="skill-card">
                            <img className="skill-icon" src='img/icons-programming.png' alt='programming' />
                            <h2 className="skill-title">{skill.subtitle1}</h2>
                            <p className="skill-description">
                                {skill.text1}
                            </p>
                        </div>
                    </Zoom>
                    <Zoom
                    duration={2000}>
                        <div className="skill-card">
                            <img className="skill-icon" src='img/icons-design.png' alt='design' /> 
                            <h2 className="skill-title">{skill.subtitle2}</h2>
                            <p className="skill-description">
                                {skill.text2}
                            </p>
                        </div>
                    </Zoom>
                    <Zoom
                    duration={2000}>
                        <div className="skill-card">
                            <img className="skill-icon" src='img/icons-project-management.png' alt='project-management' />
                            <h2 className="skill-title">{skill.subtitle3}</h2>
                            <p className="skill-description">
                                {skill.text3}
                            </p>
                        </div>
                    </Zoom>
                    <Zoom
                    duration={2000}>
                        <div className="skill-card">
                            <img className="skill-icon" src='img/icons-leadership.png' alt='leadership' />
                            <h2 className="skill-title">{skill.subtitle4}</h2>
                            <p className="skill-description">
                                {skill.text4}
                            </p>
                        </div>
                    </Zoom>
                    </div>
                    <div className="blur-circle blue-circle" />
                </div>
        </section>
    );
};

export default Skills;