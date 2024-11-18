const Contact = () => {
    const socialData = [
        { url: "https://github.com/Deeva-Civia", icon: "img/icons8-github-64.png", alt: "github" },
        { url: "https://www.linkedin.com/in/deevacivia/", icon: "img/icons8-linkedin-64.png", alt: "linkedin" },
        { url: "https://www.tiktok.com/@div.chy1?is_from_webapp=1&sender_device=pc", icon: "img/icons8-tiktok-64.png", alt: "tiktok" },
        { url: "https://www.instagram.com/div.cvya/", icon: "img/icons8-instagram-64.png", alt: "instagram" }
    ];

    return (
        <section id="contact">
            <div className="contact-content">
                <h2 className="sub-title">Find Me On</h2>
                <p className="subtitle2">Feel free to connect with me</p>
                <div className="social-icons">
                    {socialData.map((social, index) => (
                    <a key={index} href={social.url} target="_blank">
                        <img src={social.icon} alt={social.alt} />
                    </a>
                    ))}
                </div>
                <p className="email">Email: deevacivia@gmail.com</p>
            </div>
        </section>
    );
};
export default Contact;