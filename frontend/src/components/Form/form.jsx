import Partition from "../Partition/partition";
import  './form.css';
import RegisterButton from "../RegisterButton/registerbutton";
import { useEffect, useState } from "react";
import axios from "axios"

const Form = () => {

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
        console.log(res);
    }).catch((err) => {
        console.error("Error response:");
        console.error(err.response.data.message);  
        console.error(err.response.status);
        console.log(err);
    })

  }

    return(
        <div className="form_container">
        <h1>Sign In</h1>
        <Partition Lname={"Email"} Itype={"text"} onChange={handleEmail} size="40" />
        <Partition Lname={"password"} Itype={"password"} onChange={handlePassword}/>
        <RegisterButton name={"Login"} onSubmit={handleSubmit}/>
        </div>
    );}

export default Form;
