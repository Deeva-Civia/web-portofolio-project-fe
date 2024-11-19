import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState} from "react";

const Footer = () => {
    const [footer, setFooter] = useState({});

    useEffect(() => {
        const db = getDatabase();
        const heroRef = ref(db, "footer/");
        onValue(heroRef, (snapshot) => {
            const data = snapshot.val();
            setFooter(data);
            });
    }, []);
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <p>&copy; {footer.copyRight}</p>
            </div>
        </footer>
    );
};

export default Footer;