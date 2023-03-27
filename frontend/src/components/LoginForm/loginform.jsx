import Partition from "../Partition/partition";
import  './loginform.css';
import RegisterButton from "../RegisterButton/registerbutton";
import {useState } from "react";
import axios from "axios"
import { Navigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[error1,setError1]=useState("");
  const[error2,setError2]=useState("");

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
   // if(validateEmail(email))
    const data = new FormData()
    data.append("email",email)
    data.append("password",password )
    axios.post("http://127.0.0.1:8000/api/v0.0.1/auth/login",data).then((res) => {
        if (res.status===200){
        console.log(res)
        localStorage.setItem('token',res.data.authorisation.token);
       {window.location.href="http://localhost:3000/code_editor"}}
    }).catch((err) => {
        console.log(err);
        if (!validateEmail(email)){
            setError1(`Email is not verified`)
        }
        if (!validatePassword(password)){
            setError2(`Password is not verified`)
        }

    })

  }

    return(
        <div className="form_container">
        <h1>Sign In</h1>
        <Partition Lname={"Email"} Itype={"email"} onChange={handleEmail} size="40" />
        <Partition Lname={"password"} Itype={"password"} onChange={handlePassword}/>
        <RegisterButton name={"Login"} onSubmit={handleSubmit}/>
        <p className="error">{error1}<br/><br/>{error2}</p>
        </div>
    );}

export default LoginForm;
