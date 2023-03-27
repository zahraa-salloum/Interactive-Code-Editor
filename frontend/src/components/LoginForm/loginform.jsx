import Partition from "../Partition/partition";
import  './loginform.css';
import RegisterButton from "../RegisterButton/registerbutton";
import {useState } from "react";
import axios from "axios"
import { Navigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[error,setError]=useState("");

const handleEmail=(e)=>{
      setEmail(e.target.value)
  }
 const handlePassword=(e)=>{
     setPassword(e.target.value)
  }
  const validateEmail=(email) =>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);}

  const validatePassword=(password)=> {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return passwordRegex.test(password);
      }
      
  
  const handleSubmit=()=>{
    if (validateEmail(email)){
        if(validatePassword(password)){
    const data = new FormData()
    data.append("email",email)
    data.append("password",password )
    axios.post("http://127.0.0.1:8000/api/v0.0.1/auth/login",data).then((res) => {
        console.log(res)
        localStorage.setItem('token',res.data.authorisation.token);
        window.location.href="http://localhost:3000/code_editor"  
}
    ).catch((err) => {
        console.log(err);
    })
}else(setError("Invalid credentials"))
}else(setError("Invalid credentials"))
  }

    return(
        <div className="form_container">
        <h1>Sign In</h1>
        <Partition Lname={"Email"} Itype={"email"} onChange={handleEmail} size="40" />
        <Partition Lname={"password"} Itype={"password"} onChange={handlePassword}/>
        <RegisterButton name={"Login"} onSubmit={handleSubmit}/>
        <p className="error"><br/>{error}</p>
        </div>
    );}

export default LoginForm;
