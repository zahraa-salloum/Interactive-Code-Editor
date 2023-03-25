import Button from '../Button/button';
import './footer.css';
const Footer = () => {
    return (
        <div className='footer-section'>
            <div className='footer-section-links'>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Our Mission</a></li>
                    <li><a href="">Why Us</a></li>
                    <li><a href="">Take A Look</a></li>
                </ul>
                <div className='footer-action'>
                    <p>Ready to get started?</p>
                    <Button name={'Join'}/>
                </div>
            </div>
        </div>
    );
}
export default Footer;