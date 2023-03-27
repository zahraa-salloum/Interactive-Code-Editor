import React,{useState, useEffect} from 'react';
import Footer from '../../components/Footer/footer';
import axios from 'axios';
import CodePreview from '../../components/CodePreview';
import './style.css'
import Dashboard from '../../components/Dashboard_NavBar/dashboard_nav';


const CodesPage = () => {

    const [messages, setMessages] = useState([]);
    let i = 1;
    

    const token = localStorage.getItem('token');
    
    useEffect(() => {
        const getCodes = () => {
            axios.get('http://127.0.0.1:8000/api/v0.0.1/get_code', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
                }).then(response => {
                    setMessages(response.data.message)
                    
                })
        }
        getCodes()
    },[]) 

    const download = (code) => {
        const blob = new Blob([code], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.download = "mycode.txt";
        link.href = url;
        link.click();
       
    }

return(
    <div>
        
        <Dashboard/>
        <div className='container_flex_code'>
            {messages.map((message,index) => (
        
                <React.Fragment key={index}>
                    <CodePreview 
                    code_title={"Code #"+(i++)+"  Date: "+message['created_at']}
                    code_content={message['code']}
                    onclick={() => download(message['code'])}
                />
                </React.Fragment>

           ))}
        </div>
    </div>
)
}

export default CodesPage