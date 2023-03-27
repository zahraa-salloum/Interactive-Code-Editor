import React from "react";
import { useState, useEffect } from 'react';

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
    

    const handleUserClick = (chat) => {
        setChat(chat)
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
                    created_at: item.created_at
                }
            });
            setSpecific(specificChat);
        }
    }, [selectedChat, list])

    useEffect(() => {
        console.log(specific_chat)
    }, [specific_chat])




    return (
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

    )
}

export default ChatsList