import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState} from "react";
import { Zoom } from "react-awesome-reveal";


const Contact = () => {
    const [contact, setContact] = useState({});

    useEffect(() => {
        const db = getDatabase();
        const heroRef = ref(db, "contact/");
        onValue(heroRef, (snapshot) => {
            const data = snapshot.val();
            setContact(data);
            });
    }, []);
    const socialData = [
        { url: "https://github.com/Deeva-Civia", icon: "img/icons8-github-64.png", alt: "github" },
        { url: "https://www.linkedin.com/in/deevacivia/", icon: "img/icons8-linkedin-64.png", alt: "linkedin" },
        { url: "https://www.tiktok.com/@div.chy1?is_from_webapp=1&sender_device=pc", icon: "img/icons8-tiktok-64.png", alt: "tiktok" },
        { url: "https://www.instagram.com/div.cvya/", icon: "img/icons8-instagram-64.png", alt: "instagram" }
    ];

    return (
        <section id="contact">
            <div className="contact-content">
                <Zoom>
                    <h2 className="sub-title">{contact.title}</h2>
                </Zoom>
                <Zoom>
                    <p className="subtitle2">{contact.subtitle}</p>
                </Zoom>
                <div className="social-icons">
                    {socialData.map((social, index) => (
                    <a key={index} href={social.url} target="_blank">
                        <Zoom>
                        <img src={social.icon} alt={social.alt} />
                        </Zoom>
                    </a>
                    ))}
                </div>
                <Zoom>
                    <p className="email">{contact.email}</p>
                </Zoom>
            </div>
        </section>
    );
};
export default Contact;