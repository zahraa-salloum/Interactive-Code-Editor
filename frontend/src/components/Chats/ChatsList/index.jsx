import React from "react";

const ChatsList = ({list}) => {
    return(
         <div className='chat_list_content'>
            <div className='chat_list_header'>Messages</div>
            <div className='chat-search'><input placeholder='Search...'></input></div>
            <div className="chat_list">
            {list.map((chat,index) => (
                            <React.Fragment key={index}>
                           <div className="chat_list_image" key={`image-${index}`}></div>
                           <div className="Chat-name" key={`name-${index}`}>{chat.first_name} {chat.last_name}</div>
                            </React.Fragment>
                        ))}
            </div>
        </div>
    
    )
}

export default ChatsList