import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState, CSSProperties } from "react";
import RingLoader from "react-spinners/ClipLoader";


const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "#ffffff",
};

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
    
    return (
        <section id="home" className="content">
            {loading ? (
                <div className="spinner">
                    <RingLoader cssOverride={override} size={60} />
                </div>
            ) : (
                <>
                <div className="text-content">
                    <p className="greeting">{hero.greeting}</p>
                    <h1 className="title">
                        {hero.title}
                    </h1>
                    <p className="description">
                        {hero.description}
                    </p>
                    <div className="blur-circle blue-circle" />
                </div>
                <div className="image-container">
                    <div className="background-square-2" />
                    <div className="background-square" />
                    <div className="profile-frame">
                        <img 
                        src={`data:image/jpg;base64, ${hero.image}`} 
                        alt="Profile" 
                        className="profile-image" 
                        />
                    </div>
                    <div className="blur-circle pink-circle" />
                    <div className="blur-circle blue-circle" />
                    <div className="decorative-dot-small dot-1" />
                    <div className="decorative-dot-medium dot-2" />
                    <div className="decorative-dot-small dot-3" />
                    <div className="decorative-dot-medium dot-4" />
                </div>
            </>
            )}
        </section>
    );
};

export default Hero;