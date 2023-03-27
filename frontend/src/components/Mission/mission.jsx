import './mission.css';
import Missions from '../mission_components/missions';
const Mission = () => {
    return (
        <div className="mission-container" id='mission'>
            <div className='mission-header'>
                <h1>Delivering Tech Solutions</h1>
                <p>We provide a code editor for those who wants to start learning to code</p>
            </div>
            <Missions/>
        </div>
        
    );
}
export default Mission;