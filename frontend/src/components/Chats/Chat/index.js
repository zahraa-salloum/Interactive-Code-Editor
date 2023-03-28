import React, { useState, useEffect } from 'react';

const Chat =({chat_name,specific_chat})=>{

    const user_email = localStorage.getItem('email')
    
    // useEffect(()=>{
    //     console.log(user_email)
    // },[])

    const sortedChat = specific_chat.sort((a, b) => {
        return new Date(a.created_at) - new Date(b.created_at);
      });

return(
    <>
    <div className="chat_content">
        <div className='specific_name'>{chat_name}</div>
        {sortedChat.map((chat, index) => (
          <React.Fragment key={index}>
            {chat.email === user_email ? (
              <div className="message_sent" key={`i-${index}`}>
                {chat.message_content}
              </div>
            ) : (
              <div className="message_received" key={`i-${index}`}>
                {chat.message_content}
              </div>
            )}
          </React.Fragment>
        ))}
    </div>
    </>
)
}

export default Chat