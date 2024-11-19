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
    }, []);
	return (
		<section id="certificate">
			<Zoom 
				duration={2000}>
				<h2 className="sub-title">{certificate.title}</h2>
			</Zoom>
				<div className="certificates-grid">
					<Zoom  
						duration={2000}>
						<div className="certificate-card">
							<img src={`data:image/jpg;base64, ${certificate.image1}`} alt="Certificate 1" />
						</div>
					</Zoom>
					<Zoom 
						duration={2000}>
						<div className="certificate-card">
							<img src={`data:image/jpg;base64, ${certificate.image2}`} alt="Certificate 2" />
						</div>
					</Zoom>
					<Zoom
						duration={2000}>
						<div className="certificate-card">
							<img src={`data:image/jpg;base64, ${certificate.image3}`} alt="Certificate 3" />
						</div>
					</Zoom>
					<Zoom
						duration={2000}>
						<div className="certificate-card">
							<img src={`data:image/jpg;base64, ${certificate.image4}`} alt="Certificate 4" />
						</div>
					</Zoom>
					<Zoom
						duration={2000}>
						<div className="certificate-card">
							<img src={`data:image/jpg;base64, ${certificate.image5}`} alt="Certificate 5" />
						</div>
					</Zoom>
					<Zoom
						duration={2000}>
						<div className="certificate-card">
							<img src={`data:image/jpg;base64, ${certificate.image6}`} alt="Certificate 6" />
						</div>
					</Zoom>
				</div>
		</section>
	)
}

export default Certificate;