import './Nav.css';
import logo from '../../assets/logo.svg'
import Button from '../Button/button';
import { useState } from 'react';
const NavBar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
        {
            text: 'Home'
        },
        {
            text: 'Our Mission'
        },
        {
            text: 'Why Us'
        },
        {
            text: 'Take A Look'
        }
    ]
    return (
        <nav>
            <div className="nav-logo-container">
                <a href="/"><img className = "logo" src={logo} alt="Logo" /></a>
            </div>
            <div className="nav-links-container">
                <a href="">Home</a>
                <a href="">Our Mission</a>
                <a href="">Why Us</a>
                <a href="">Take A Look</a>
            </div>
            <Button name={'Sign Up'}/>
        </nav>
    );
}
export default NavBar;