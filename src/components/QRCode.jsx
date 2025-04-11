import image from '../assets/images/image-qr-code.png';
import '../assets/sass/components/qrcode.sass';

const QRCode = () => {
    return (
        <section className="card">
            <div className="card__qrcode">
                <img className="card__qrcode-image" src={image} alt="QR Code Image" />
            </div>
            <div className="card__text">
                <h1 className="card__text-title">Improve your front-end skills by building projects</h1>
                <p className="card__text-description">Scan the QR code to visit Frontend Mentor and take 
                    your coding skills to the next level</p>
            </div>
        </section>
    );
}

export default QRCode;