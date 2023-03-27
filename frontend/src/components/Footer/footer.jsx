import Button from '../Button/button';
import {useNavigate} from 'react-router-dom';
import './footer.css';
const Footer = () => {
    const navigator = useNavigate();
    const registerNavigation = () => {
        navigator('/register');
    }
    return (
        <div className='footer-section'>
            <div className='footer-section-links'>
                <ul>
                    <a href="#header">Home</a>
                    <a href="#mission" >Our Mission</a>
                    <a href="#whyus">Why Us/Benefit</a>
                    <a href="#look">Take A Look</a>
                </ul>
                <div className='footer-action'>
                    <p>Ready to get started?</p>
                    <Button name={'Join'} action={registerNavigation}/>
                </div>
            </div>
        </div>
    );
}
export default Footer;