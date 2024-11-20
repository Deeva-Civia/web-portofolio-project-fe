import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState} from "react";
import { Zoom } from "react-awesome-reveal";

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
            <div className="blur-circle blue-circle" />
            <Zoom
            	duration={2000}>
                <h2 className="sub-title">{project.title}</h2>
            </Zoom>
                <div className="project-grid">
                    <Zoom
                    	duration={2000}>
                        <div className="project-card">
                            <div className="project-image">
                                <img src={`data:image/png;base64, ${project.image1}`}  alt="GoWash Project" />
                            </div>
                            <div className="project-info">
                                <h2>{project.subtitle1}</h2>
                                <p>{project.text1}</p>
                            </div>
                        </div>
                    </Zoom>
                    <Zoom
                    	duration={2000}>
                        <div className="project-card">
                            <div className="project-image">
                                <img src={`data:image/png;base64, ${project.image2}`}  alt="GoWash Project" />
                            </div>
                            <div className="project-info">
                                <h2>{project.subtitle2}</h2>
                                <p>{project.text2}</p>
                            </div>
                        </div>
                    </Zoom>
                    <Zoom
                    	duration={2000}>
                        <div className="project-card">
                            <div className="project-image">
                                <img src={`data:image/png;base64, ${project.image3}`}  alt="GoWash Project" />
                            </div>
                            <div className="project-info">
                                <h2>{project.subtitle3}</h2>
                                <p>{project.text3}</p>
                            </div>
                        </div>
                    </Zoom>
                    <Zoom
                    	duration={2000}>
                        <div className="project-card">
                            <div className="project-image">
                                <img src={`data:image/png;base64, ${project.image4}`}  alt="GoWash Project" />
                            </div>
                            <div className="project-info">
                                <h2>{project.subtitle4}</h2>
                                <p>{project.text4}</p>
                            </div>
                        </div>
                    </Zoom>
                </div>
                <div className="blur-circle blue-circle" />
        </section>
    )
}

export default Project;