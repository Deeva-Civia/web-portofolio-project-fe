import CertificateCard from "./CertificateCard";

const Certificate = () => {
	const certificatesData = [
		{ image: "img/sertifikat alibaba.png", alt: "Certificate from Alibaba" },
		{ image: "img/sertifikat bootstrap.png", alt: "Certificate Bootstrap" },
		{ image: "img/sertifikat dicoding.png", alt: "Certificate from Dicoding" },
		{ image: "img/sertifikat javascript.png", alt: "Certificate Javascript" }
	];
	const bottomCertificatesData = [
		{ image: "img/sertifikat ksn nasional.png", alt: "Certificate KSN Astronomi" },
		{ image: "img/sertifikat sololearn.png", alt: "Certificate from Sololearn" }
	];
	return (
		<section id="certificate">
			<h2 className="sub-title">Certificate</h2>
			<div className="certificates-grid">
				{certificatesData.map((cert, index) => (
				<CertificateCard key={index} {...cert} />
				))}
			</div>
			<div className="bottom-certificates">
				{bottomCertificatesData.map((cert, index) => (
				<CertificateCard key={index} {...cert} />
				))}
			</div>
			<div className="blur-circle blue-circle" />
		</section>
	);
};

export default Certificate;