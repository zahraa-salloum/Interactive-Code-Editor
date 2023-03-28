import React, { useState, useEffect } from 'react';
import Dashboard from '../../components/Dashboard_NavBar/dashboard_nav';
import axios from 'axios';
import "../ChatsPage/chat.css";
import ChatsList from "../../components/Chats/ChatsList/index"
import Footer from '../../components/Footer/footer';





const ChatsPage = () => {

    const [list, setList] = useState([]);

    const token = localStorage.getItem('token');

    useEffect(() => {
        const getChats = () => {
            axios.get('http://127.0.0.1:8000/api/v0.0.1/get_all_messages', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {
                setList(response.data.data)

            })
        }
        getChats()
    }, [])

    console.log(list)

    return (
        <>
            <Dashboard />
            <div className='chat_page' id='chat_page'>
                <ChatsList list={list}></ChatsList>
                
            </div>
            
            <Footer></Footer>
        </>
    )
}

export default ChatsPage