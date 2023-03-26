import React,{useState, useEffect} from 'react';
import NavBar from '../../components/NavBar/Nav';
import Footer from '../../components/Footer/footer';
import axios from 'axios';
import CodePreview from '../../components/CodePreview';
import './style.css'


const CodesPage = () => {

    const [messages, setMessages] = useState([]);
    let i = 1;
    

    // const token = window.localStorage.getItem('token');
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3YwLjAuMS9hdXRoL2xvZ2luIiwiaWF0IjoxNjc5ODU3MTI0LCJleHAiOjE2Nzk4NjA3MjQsIm5iZiI6MTY3OTg1NzEyNCwianRpIjoiVFhRbDYwREh2THRWZVNRSCIsInN1YiI6IjIiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.XDOq9v_rpkepazg1z2ZGUcKnIl7KvTPrLH2ld3SBdGI"

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

return(
    <div>
        
        <NavBar/>
        <div className='container_flex_code'>
            {messages.map((message,index) => (
        
                <React.Fragment key={index}>
                    <CodePreview 
                    code_title={"Code #"+(i++)+"  Date: "+message['created_at']}
                    code_content={message['code']}
                />
                </React.Fragment>

           ))}
        </div>
        
        
        
    </div>
)
}

export default CodesPage