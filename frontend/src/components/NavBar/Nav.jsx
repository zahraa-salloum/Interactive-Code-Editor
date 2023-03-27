import './Nav.css';
import Logo from '../../assets/Logo.svg'
import Button from '../Button/button';
const NavBar = () => {
    return (
        <nav>
            <div className="nav-logo-container">
                <a href="/"><img className = "logo" src={Logo} alt="Logo" /></a>
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