import logo from '../../assets/logoKasa.png';
import './Header.scss'
import { NavLink } from 'react-router-dom'

const Header = () => {
   return (
    <>
        <header className='header'>
            <img src={logo} className='header__logoKasa' alt='logo Kasa'></img>
            <nav className='header__nav'>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/about">A Propos</NavLink>
            </nav>
        </header>
    </>
    )
}

export default Header;