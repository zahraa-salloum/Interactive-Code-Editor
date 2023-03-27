import '../NavBar/Nav.css';
import Logo from '../../assets/logo.svg'
import Button from '../Button/button';
import {useNavigate} from 'react-router-dom';
const Dashboard = () => {
    const navigator = useNavigate();
    const registerNavigation = () => {
        navigator('/');
    }
    return (
        <nav>
            <div className="nav-logo-container">
                <a href="/"><img className = "logo" src={Logo} alt="Logo" /></a>
            </div>
            <div className="nav-links-container">
                <a href="/profile">Profile</a>
                <a href="/code_editor">Compiler</a>
                <a href="/users" >Search User</a>
                <a href="/chat">Chat</a>
                <a href="/codes">My Codes</a>
            </div>
            <Button name={'Log out'} action={registerNavigation}/>
        </nav>
    );
}
export default Dashboard;