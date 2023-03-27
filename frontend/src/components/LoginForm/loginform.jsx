import Partition from "../Partition/partition";
import  './loginform.css';
import RegisterButton from "../RegisterButton/registerbutton";
import {useState } from "react";
import axios from "axios"

const LoginForm = () => {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const handleEmail=(e)=>{
      setEmail(e.target.value)
  }
 const handlePassword=(e)=>{
     setPassword(e.target.value)
  }
  
  const handleSubmit=()=>{
    const data = new FormData()
    data.append("email",email)
    data.append("password",password )
    axios.post("http://127.0.0.1:8000/api/v0.0.1/auth/login",data).then((res) => {
        localStorage.setItem('token',res.data.authorisation.token);
    }).catch((err) => {
        console.log(err);
    })

  }

    return(
        <div className="form_container">
        <h1>Sign In</h1>
        <Partition Lname={"Email"} Itype={"email"} onChange={handleEmail} size="40" />
        <Partition Lname={"password"} Itype={"password"} onChange={handlePassword}/>
        <RegisterButton name={"Login"} onSubmit={handleSubmit}/>
        </div>
    );}

export default LoginForm;
