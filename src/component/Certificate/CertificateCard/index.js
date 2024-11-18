const CertificateCard = ({image, alt}) => {
    return (
        <div className="certificate-card">
            <img src={image} alt={alt} />
        </div>
    )
};

export default CertificateCard;