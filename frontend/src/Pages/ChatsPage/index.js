import React, { useState, useEffect } from 'react';
import  Dashboard from '../../components/Dashboard_NavBar/dashboard_nav';
import axios from 'axios';
import "../ChatsPage/chat.css";
import ChatsList from "../../components/Chats/ChatsList/index"



const ChatsPage = () => {

    const [list, setList] = useState([]);

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3YwLjAuMS9hdXRoL2xvZ2luIiwiaWF0IjoxNjc5ODgxMzc3LCJleHAiOjE2Nzk4ODQ5NzcsIm5iZiI6MTY3OTg4MTM3NywianRpIjoicTZDeWJCcGh1YWx0SlJVVSIsInN1YiI6IjQiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.IpIWAI5R-Y-Ip4S3W2CX8gycZdAwso_He8xgCra9XNo"

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

    return(
        <>
        <Dashboard/>
        <div className='chat_page' id='chat_page'>
       <ChatsList list={list}></ChatsList>
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