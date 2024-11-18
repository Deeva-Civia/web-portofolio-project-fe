const Hero = () => {
    return (
        <section id="home" className="content">
            <div className="text-content">
                <p className="greeting">Hi, I'm Deeva Civia Aulia Lolong</p>
                <h1 className="title">
                    <span className="purple">Web Developer &amp;</span>
                    <span className="purple">Design Enthusiast</span>
                </h1>
                <p className="description">
                I'm a 5th-semester university student with a strong interest in web development and a love for creating visually stunning designs. Combining technical skills and creativity, I strive to build user-friendly and aesthetically pleasing web experiences.
                </p>
                <div className="blur-circle blue-circle" />
            </div>
            <div className="image-container">
                <div className="background-square-2" />
                <div className="background-square" />
                <div className="profile-frame">
                    <img src="img/foto porto.png" alt="Profile" className="profile-image" />
                </div>
                <div className="blur-circle pink-circle" />
                <div className="blur-circle blue-circle" />
                <div className="decorative-dot-small dot-1" />
                <div className="decorative-dot-medium dot-2" />
                <div className="decorative-dot-small dot-3" />
                <div className="decorative-dot-medium dot-4" />
            </div>
        </section>
    )
}

export default Hero;