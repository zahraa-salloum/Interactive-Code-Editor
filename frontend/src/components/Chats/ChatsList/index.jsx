import React from "react";

const ChatsList = ({list, clicked}) => {
const existing_user =[]
list.forEach((data) => {
    const existing = existing_user.find((user) => user.email === data.email);
    if (!existing) {
        existing_user.push(data);
      }
})

console.log(existing_user)

    return(
         <div className='chat_list_content'>
            <div className='chat_list_header'>Messages</div>
            <div className='chat-search'><input placeholder='Search...'></input></div>
            <div className="chat_list">
            {existing_user.map((chat,index) => (
                            <React.Fragment key={index}>
                           {/* <div className="chat_list_image" key={`image-${index}`}></div> */}
                           <div className="chat_name" key={`name-${index}`} onClick={clicked}>{chat.first_name} {chat.last_name}</div>
                            </React.Fragment>
                        ))}
            </div>
        </div>
    
    )
}

export default ChatsList