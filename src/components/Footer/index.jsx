import logoKasaWhite from '../../assets/logoKasaWhite.png';
import './Footer.scss';

const Footer = () => {
   return (
        <footer className='footer'>
            <img src={logoKasaWhite} className='footer__logoKasaWhite' alt='logo Kasa'></img>
            <p className='footer__text'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer