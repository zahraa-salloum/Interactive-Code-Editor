import Partition from "../Partition/partition";
import  './form.css';
import RegisterButton from "../RegisterButton/registerbutton";
import { useEffect, useState } from "react";
const Form = () => {

const [email, setEmail] = useState("");

console.log(email)
const [password, setPassword] = useState("");
const handleEmail=(e)=>{
    setTimeout(() => {
        setEmail(e.target.value)
      }, 5000);
    
  }
 const handlePassword=(e)=>{
    setTimeout(() => {
        setPassword(e.target.value)
      }, 5000);
  }

    return(
        <div className="form_container">
        <h1>Sign In</h1>
        <Partition Lname={"Email"} Itype={"text"} onChange={handleEmail} size="40"/>
        <Partition Lname={"password"} Itype={"password"} onChange={handlePassword}/>
        <RegisterButton name={"Login"}/>
        </div>
    );}

export default Form;
