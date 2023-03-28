import '../search.css'
import { useState } from 'react';
import axios from "axios";

const UserCard = ({user_id,firstName, lastName, bio, image}) => {
    const [showTextarea, setShowTextarea] = useState(false);
    const [showSendButton, setShowSendButton] = useState(false);
    const [sentMessage, setMessageToSent] = useState("");
    const [feedback, setFeedback] = useState("");

    const getMessageText =(e) =>{
        const message = e.target.value;
        setMessageToSent(message);
        console.log(sentMessage);
    }

    function handleButtonClick() {
        setShowTextarea(true);
        setShowSendButton(true);
      }

      const token = localStorage.getItem('token');

      const handleSubmit = async () =>{
        const data = new FormData();
        data.append('message_content',sentMessage);
        data.append('receiver_id',user_id);
        
    
         await axios.post('http://127.0.0.1:8000/api/v0.0.1/send_message',data,{
              headers: {
                  Authorization: `Bearer ${token}`
              }
          }).then(response => {
              setShowTextarea(false);
              setShowSendButton(false);
              setFeedback("Message Sent!");
          })
          
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
          onChange ={getMessageText}
        ></textarea>
        )}
        {showSendButton && (
        <button className="btn send_single_message" onClick={handleSubmit}>Send</button>
        
        )}
        <p className="feedback">{feedback}</p>

        
      
    </div>
    </div>
    );
}
export default UserCard