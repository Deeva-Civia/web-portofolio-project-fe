import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState, CSSProperties } from "react";
import RingLoader from "react-spinners/RingLoader";
import { Zoom } from "react-awesome-reveal";


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
                    <RingLoader 
                        color={"#ffffff"} 
                        loading={loading} 
                        size={150} 
                        margin={100}/>
                </div>
            ) : (
                <>
                
                    <div className="text-content">
                        <Zoom>
                            <p className="greeting">{hero.greeting}</p>
                        	duration={2000}>
                            <h1 className="title">
                                {hero.title}
                            </h1>
                            <p className="description">
                            {hero.description}
                            </p>
                        </Zoom>
                            <div className="blur-circle blue-circle" />
                        </div>
                        <Zoom
                            duration={2000}>
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
                        </Zoom>
                </>
                )}
            </section>
    );
};

export default Hero;