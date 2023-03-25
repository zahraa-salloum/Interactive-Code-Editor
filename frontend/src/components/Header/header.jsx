import './header.css';
import Button from '../Button/button';
const Header = () => {
    return (
        <div className="main-header-home">
            <div className='main-header-title'>
                <h1>Best Online Code Editor</h1>
            </div>
            <Button name={'Join Us!'}/>
        </div>
    );
}
export default Header;