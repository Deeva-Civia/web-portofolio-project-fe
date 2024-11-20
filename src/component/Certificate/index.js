import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState} from "react";
import { Zoom } from "react-awesome-reveal";


const Certificate = () => {
	const [certificate, setCertificate] = useState({});

    useEffect(() => {
        const db = getDatabase();
        const heroRef = ref(db, "certificate/");
        onValue(heroRef, (snapshot) => {
            const data = snapshot.val();
            setCertificate(data);
        });

        const popup = document.getElementById("popup");
        const popupImg = document.getElementById("popup-img");
        const closePopup = document.querySelector(".close");

        const images = document.querySelectorAll(".certificate-card img");
        images.forEach((img) => {
            img.addEventListener("click", () => {
                popupImg.src = img.src; 
                popup.style.display = "flex"; 
            });
        });

        closePopup.addEventListener("click", () => {
            popup.style.display = "none";
        });

        popup.addEventListener("click", (e) => {
            if (e.target === popup) {
                popup.style.display = "none";
            }
        });

        return () => {
            images.forEach((img) => img.removeEventListener("click", () => {}));
            closePopup.removeEventListener("click", () => {});
            popup.removeEventListener("click", () => {});
        };
    }, []);

	return (
		<section id="certificate">
			<div className="blur-circle pink-circle" />
			<Zoom 
				duration={2000}>
				<h2 className="sub-title">{certificate.title}</h2>
			</Zoom>
				<div className="certificates-grid">
					<Zoom  
						duration={2000}>
						<div className="certificate-card">
							<img src={`data:image/jpg;base64, ${certificate.image1}`} alt="Certificate 1" />
							<div className="overlay">Click to open</div>
						</div>
					</Zoom>
					<Zoom 
						duration={2000}>
						<div className="certificate-card">
							<img src={`data:image/jpg;base64, ${certificate.image2}`} alt="Certificate 2" />
							<div className="overlay">Click to open</div>
						</div>
					</Zoom>
					<Zoom
						duration={2000}>
						<div className="certificate-card">
							<img src={`data:image/jpg;base64, ${certificate.image3}`} alt="Certificate 3" />
							<div className="overlay">Click to open</div>
						</div>
					</Zoom>
					<Zoom
						duration={2000}>
						<div className="certificate-card">
							<img src={`data:image/jpg;base64, ${certificate.image4}`} alt="Certificate 4" />
							<div className="overlay">Click to open</div>
						</div>
					</Zoom>
					<Zoom
						duration={2000}>
						<div className="certificate-card">
							<img src={`data:image/jpg;base64, ${certificate.image5}`} alt="Certificate 5" />
							<div className="overlay">Click to open</div>
						</div>
					</Zoom>
					<Zoom
						duration={2000}>
						<div className="certificate-card">
							<img src={`data:image/jpg;base64, ${certificate.image6}`} alt="Certificate 6" />
							<div className="overlay">Click to open</div>
						</div>
					</Zoom>
				</div>
				<div id="popup" class="popup">
					<span class="close">&times;</span>
					<img class="popup-img" id="popup-img" src="" alt="Certificate"/>
				</div>
				<div className="blur-circle pink-circle" />
		</section>
	)
}

export default Certificate;