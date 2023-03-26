import './header.css';
import Button from '../Button/button';
const Header = () => {
    return (
        <div className="main-header-home">
            <div className='main-header-title'>
                <h1>Best Online Code Editor</h1>
            </div>
            <div className='btn-div'>
                <Button name={'Join Us!'}/>
            </div>
        </div>
    );
}
export default Header;