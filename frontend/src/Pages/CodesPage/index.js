import React,{useState, useEffect} from 'react';
import NavBar from '../../components/NavBar/Nav';
import Footer from '../../components/Footer/footer';
import axios from 'axios';
import CodePreview from '../../components/CodePreview';


const CodesPage = () => {

    const [messages, setMessages] = useState([]);
    

    // const token = window.localStorage.getItem('token');
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3YwLjAuMS9hdXRoL2xvZ2luIiwiaWF0IjoxNjc5ODQ1OTEyLCJleHAiOjE2Nzk4NDk1MTIsIm5iZiI6MTY3OTg0NTkxMiwianRpIjoiZmhVOEk3aloySkVuZUtxZiIsInN1YiI6IjIiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.5ZjAAOga8QoBNAGF6bzY6sZRwE9E4g44P2_HdJTiUdw"

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
        {messages.map(message => (
            
            <CodePreview 
        code_title={message['created_at']}
        code_content={message['code']}/>

           ))}
        
        
        
    </div>
)
}

export default CodesPage