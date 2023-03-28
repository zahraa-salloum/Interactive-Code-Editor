import '../search.css'
import { useState } from 'react';
const UserCard = ({firstName, lastName, bio, image}) => {
    const [showTextarea, setShowTextarea] = useState(false);
    const [showSendButton, setShowSendButton] = useState(false);
    function handleButtonClick() {
        setShowTextarea(true);
        setShowSendButton(true);
      }
    return(
        <div className='user_card'>
        <h1>{firstName} {lastName}</h1>
        <img className='user-profile-img' src={image}/>
        <p>{bio}</p>
        <button className="btn profile_submit_btn" onClick={handleButtonClick}>Chat Now!</button>
        <div className="single_message_box">
      {showTextarea && (
        <textarea className='message_area'
          rows="4"
          cols="50"
          placeholder="Enter your message..."
        ></textarea>
        )}
        {showSendButton && (
        <button className="btn send_single_message" onClick={handleButtonClick}>Send</button>
        )}

        
      
    </div>
    </div>
    );
}
export default UserCard