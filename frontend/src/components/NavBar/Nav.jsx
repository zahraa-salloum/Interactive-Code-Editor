import './Nav.css';
import Logo from '../../assets/Logo.svg'
import Button from '../Button/button';
import {useNavigate} from 'react-router-dom';
const NavBar = () => {
    const navigator = useNavigate();
    const registerNavigation = () => {
        navigator('/login');
    }
    const signupNavigation = () => {
        navigator('/register');
    }
    return (
        <nav>
            <div className="nav-logo-container">
                <a href="/"><img className = "logo" src={Logo} alt="Logo" /></a>
            </div>
            <div className="nav-links-container">
                <a href="#header">Home</a>
                <a href="#mission" >Our Mission</a>
                <a href="#whyus">Why Us/Benefit</a>
                <a href="#look">Take A Look</a>
            </div>
            <Button name={'Register'} action={signupNavigation}/>
            <Button name={'Log In'} action={registerNavigation}/>
        </nav>
    );
}
export default NavBar;