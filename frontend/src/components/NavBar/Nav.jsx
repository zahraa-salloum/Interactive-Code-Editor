import './Nav.css';
import Button from '../Button/button';
const NavBar = () => {
    return (
        <nav>
            <div className="nav-logo-container">
                <h1>LOGO</h1>
            </div>
            <div className="nav-links-container">
                <a href="">Home</a>
                <a href="">Our Mission</a>
                <a href="">Why Us</a>
                <a href="">Testimonials</a>
            </div>
            <Button name={'Sign Up'}/>
        </nav>
    );
}
export default NavBar;