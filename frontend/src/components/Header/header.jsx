import './header.css';
import Button from '../Button/button';
import {useNavigate} from 'react-router-dom';
const Header = () => {
    const navigator = useNavigate();
    const registerNavigation = () => {
        navigator('/register');
    }
    return (
        <div className="main-header-home" id='header'>
            <div className='main-header-title'>
                <h1>Best Online Code Editor</h1>
            </div>
            <div className='btn-div'>
                <Button name={'Join Us!'} action={registerNavigation}/>
            </div>
        </div>
    );
}
export default Header;