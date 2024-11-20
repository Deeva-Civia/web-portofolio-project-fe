import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState} from "react";
import { Zoom } from "react-awesome-reveal";


const Experience = () => {
    const [experience, setExperience] = useState({});

    useEffect(() => {
        const db = getDatabase();
        const heroRef = ref(db, "experience/");
        onValue(heroRef, (snapshot) => {
            const data = snapshot.val();
            setExperience(data);
            });
    }, []);
    return (
        <section id="experience">
            <Zoom
            	duration={2000}>
                <h2 className="sub-title">{experience.title}</h2>
            </Zoom>
            
                <div className="timeline">
                    <div className="timeline-item">
                    <Zoom
                        duration={3000}>
                        <div className="date">{experience.date1}</div>
                        <div className="subtitle">{experience.subtitle1}</div>
                        <div className="role">{experience.role1}</div>
                        <div className="description">{experience.description1}</div>
                    </Zoom>
                    </div>
                    <div className="timeline-item">
                    <Zoom
                        duration={3000}>
                        <div className="date">{experience.date2}</div>
                        <div className="subtitle">{experience.subtitle2}</div>
                        <div className="role">{experience.role2}</div>
                        <div className="description">{experience.description2}</div>
                    </Zoom>
                    </div>
                    <div className="timeline-item">
                    <Zoom
                        duration={3000}>
                        <div className="date">{experience.date3}</div>
                        <div className="subtitle">{experience.subtitle3}</div>
                        <div className="role">{experience.role3}</div>
                        <div className="description">{experience.description3}</div>
                    </Zoom>
                    </div>
                    <div className="timeline-item">
                    <Zoom
                        duration={3000}>
                        <div className="date">{experience.date4}</div>
                        <div className="subtitle">{experience.subtitle4}</div>
                        <div className="role">{experience.role4}</div>
                        <div className="description">{experience.description4}</div>
                    </Zoom>
                    </div>
                    <div className="blur-circle pink-circle" />
                </div>
        </section>
    )
}

export default Experience;
