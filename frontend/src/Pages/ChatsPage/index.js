import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar/Nav';
import axios from 'axios';
import "../ChatsPage/chat.css"

const ChatsPage = () => {
    return(
        <>
        <NavBar></NavBar>
        <div className='chat_page'>
        <div className='chat_list_content'>
            <div className='chat_list_header'>Messages</div>
            <div className='chat-search'><input placeholder='Search...'></input></div>
            <div class="chat_list"></div>
        </div>
        <div className='individual_chat_content'>
            <div className='chat_box'>
                <div className='chat_box_content'>Hello</div>
            </div>
        </div>
        </div>
        </>
    )
}

export default ChatsPage