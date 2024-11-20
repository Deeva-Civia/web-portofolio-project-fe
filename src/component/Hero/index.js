import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import RingLoader from "react-spinners/RingLoader";
import { Fade } from "react-awesome-reveal";
import Typed from "typed.js";


const Hero = () => {
    const [hero, setHero] = useState({
        greeting: '',
        title: '',
        description: '',
        image: ''
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getDatabase();
        setLoading(true);
        const heroRef = ref(db, "hero/");
        onValue(heroRef, (snapshot) => {
            const data = snapshot.val();
            setHero(data);
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        if (hero.title1) {
            const typed = new Typed('.typed-text',  {
                strings: [hero.title1, hero.title2],
                showCursor: true, 
                cursorChar: '|', 
                typeSpeed: 100, 
                delay: 100,
                backSpeed: 100, 
                loop: true, 
            });

            return () => {
                typed.destroy(); 
            };
        }
    }, [hero.title1]);

    return (
        <section id="home" className="content">
            {loading ? (
                <div className="spinner">
                    <RingLoader 
                        color={"#ffffff"} 
                        loading={loading} 
                        size={150} 
                        margin={100}/>
                </div>
            ) : (
                <>
                <div className="text-content">
                    <p className="greeting">{hero.greeting}</p>
                    <h1 className="title">
                        <span className="typed-text"></span>
                    </h1>
                    <p className="description">{hero.description}</p>
                    <div className="blur-circle blue-circle" />
                </div>
                <Fade
                duration={2000}>
                    <div className="image-container">
                        <div className="background-square-2" />
                        <div className="background-square" />
                        <img
                            src={`data:image/jpg;base64, ${hero.image}`}
                            alt="Profile"
                            className="profile-image"
                        />
                        <div className="blur-circle pink-circle" />
                        <div className="blur-circle blue-circle" />
                        <div className="decorative-dot-small dot-1" />
                        <div className="decorative-dot-medium dot-2" />
                        <div className="decorative-dot-small dot-3" />
                        <div className="decorative-dot-medium dot-4" />
                    </div>
                </Fade>
            </>
            )}
        </section>
    );
};

export default Hero;
