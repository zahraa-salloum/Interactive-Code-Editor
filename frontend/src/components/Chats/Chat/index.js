import React, { useState, useEffect } from 'react';
import "../Chat/index.css"
import Send from "../Send/index";
import axios from 'axios';

const Chat =({chat_name,specific_chat})=>{


   const [message, setMessage] = useState("");
    const user_email = localStorage.getItem('email')
    const token = localStorage.getItem('token');

    const sortedChat = specific_chat.sort((a, b) => {
        return new Date(a.created_at) - new Date(b.created_at);
      });
      
      const formatedDate =(date)=>{
        const dbDate = new Date(date);
   const formatted_date = dbDate.toLocaleString(); 
   return formatted_date
      }

      const handleInputChange = (e) => {
        setMessage(e.target.value)
        console.log(message)
      }

    //    const handleSubmit = ()=> {
    //     const data=new FormData();
    //     const receiver_id = specific_chat.email === user_email ? null: specific_chat.receiver_id
    //     data.append('receiver_id',receiver_id)
    //     data.append('message_content',message)
    //     console.log(data)
    //     axios.post('http://127.0.0.1:8000/api/v0.0.1/send_message', data, {
    //             headers: {
    //                 Authorization: `Bearer ${token}`
    //             }
    //         }).then(response => {

    //         }).catch(error => {
    //             console.log(error)
    //           });
    //    }

 return(
    <>
   
        <div className='specific_name'>{chat_name}</div>
        <div className='chat_box'>
            <div className="message_container">
        {sortedChat.map((chat, index) => (
          <React.Fragment key={index}>
            {chat.email === user_email ? (
                <div className='sent'>
              <div className="message_sent" key={`i-${index}`}>
                {chat.message_content}
                <div className='time'>{formatedDate(chat.created_at)}</div>
              </div>
             
              </div>
            ) : (
                <div className='received'>
              <div className="message_received" key={`i-${index}`}>
                {`${chat.message_content}`}
                <div className='time'>{formatedDate(chat.created_at)}</div>
              </div>
              </div>
            )}
          </React.Fragment>
        ))}
        </div>
        <Send onSubmit={handleSubmit} oncChange={handleInputChange}></Send>
        </div>
        
    
    </>
)
}

export default Chat