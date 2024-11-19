import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState} from "react";

const Project = () => {
    const [project, setProject] = useState({});

    useEffect(() => {
        const db = getDatabase();
        const heroRef = ref(db, "project/");
        onValue(heroRef, (snapshot) => {
            const data = snapshot.val();
            setProject(data);
            });
    }, []);
    return (
        <section id="project">
            <h2 className="sub-title">{project.title}</h2>
            <div className="project-grid">
                <div className="project-card">
                    <div className="project-image">
                        <img src={`data:image/png;base64, ${project.image1}`}  alt="GoWash Project" />
                    </div>
                    <div className="project-info">
                        <h2>{project.subtitle1}</h2>
                        <p>{project.text1}</p>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-image">
                        <img src={`data:image/png;base64, ${project.image2}`}  alt="GoWash Project" />
                    </div>
                    <div className="project-info">
                        <h2>{project.subtitle2}</h2>
                        <p>{project.text2}</p>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-image">
                        <img src={`data:image/png;base64, ${project.image3}`}  alt="GoWash Project" />
                    </div>
                    <div className="project-info">
                        <h2>{project.subtitle3}</h2>
                        <p>{project.text3}</p>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-image">
                        <img src={`data:image/png;base64, ${project.image4}`}  alt="GoWash Project" />
                    </div>
                    <div className="project-info">
                        <h2>{project.subtitle4}</h2>
                        <p>{project.text4}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project;