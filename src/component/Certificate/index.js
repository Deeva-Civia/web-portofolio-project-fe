import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState} from "react";

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
				<h2 className="sub-title">{certificate.title}</h2>
				<div className="certificates-grid">
				<div className="certificate-card">
					<img src={`data:image/jpg;base64, ${certificate.image1}`} alt="Certificate 1" />
				</div>
				<div className="certificate-card">
					<img src={`data:image/jpg;base64, ${certificate.image2}`} alt="Certificate 2" />
				</div>
				<div className="certificate-card">
					<img src={`data:image/jpg;base64, ${certificate.image3}`} alt="Certificate 3" />
				</div>
				<div className="certificate-card">
					<img src={`data:image/jpg;base64, ${certificate.image4}`} alt="Certificate 4" />
				</div>
				<div className="certificate-card">
					<img src={`data:image/jpg;base64, ${certificate.image5}`} alt="Certificate 5" />
				</div>
				<div className="certificate-card">
					<img src={`data:image/jpg;base64, ${certificate.image6}`} alt="Certificate 6" />
				</div>
			</div>
		</section>
	)
}

export default Certificate;