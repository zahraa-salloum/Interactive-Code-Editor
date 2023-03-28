import React from "react";
import { useState, useEffect } from 'react';
import Chat from "../Chat/index"


const ChatsList = ({ list, clicked }) => {
    const existing_user = []
    list.forEach((data) => {
        const existing = existing_user.find((user) => user.email === data.email);
        if (!existing) {
            existing_user.push(data);
        }
    })



    const [selectedChat, setChat] = useState([])
    const [specific_chat, setSpecific] = useState([])
    const [name, setName] = useState()


    const handleUserClick = (chat) => {
        setChat(chat)
        setName(`${chat.first_name} ${chat.last_name}`)

    }



    useEffect(() => {
        if (selectedChat) {

            const sender_clicked_id = selectedChat.sender_id
            const receiver_clicked_id = selectedChat.receiver_id


            const filteredData = list.filter((item) => {
                return (
                    (item.sender_id === sender_clicked_id ||
                        item.sender_id === receiver_clicked_id) &&
                    (item.receiver_id === receiver_clicked_id ||
                        item.receiver_id === sender_clicked_id)
                );

            });

            const specificChat = filteredData.map((item) => {
                return {
                    message_content: item.message_content,
                    sender_id: item.sender_id,
                    receiver_id: item.receiver_id,
                    created_at: item.created_at,
                    email:item.email
                }
            });
            setSpecific(specificChat);
        }
    }, [selectedChat, list])

    useEffect(() => {
        console.log(specific_chat)
    }, [specific_chat])




    return (
        <>
        <div className='chat_list_content'>
            <div className='chat_list_header'>Messages</div>
            <div className='chat-search'><input placeholder='Search...'></input></div>
            <div className="chat_list">
                {existing_user.map((chat, index) => (
                    <React.Fragment key={index}>
                        {/* <div className="chat_list_image" key={`image-${index}`}></div> */}
                        <div className="chat_name" key={`name-${index}`} onClick={() => handleUserClick(chat)}>{chat.first_name} {chat.last_name}</div>
                    </React.Fragment>
                ))}
            </div>
        </div>
          <div className='individual_chat_content'>
          <div className='chat_box'>
              {specific_chat && name && (
                  <Chat chat_name={name} specific_chat={specific_chat} />
              )}
          </div>
      </div>
      </>

    )
}

export default ChatsList