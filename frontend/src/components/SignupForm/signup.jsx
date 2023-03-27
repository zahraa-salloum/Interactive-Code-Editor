import Partition from "../Partition/partition";
import  '../../components/LoginForm/loginform.css';
import RegisterButton from "../RegisterButton/registerbutton";
import Button from "../Button/button";
import {useState} from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
const SignUp= ()=>{
const [first,setFirst]=useState("")
const [last,setLast]=useState("")
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")

const navigator = useNavigate();
const signinNavigation = () => {
    navigator('/register');}

const handleFirst=(e)=>{
   setFirst(e.target.value)
}
const handleLast=(e)=>{
    setLast(e.target.value)
}
const handleEmail=(e)=>{
    setEmail(e.target.value)
}
const handlePassword=(e)=>{
    setPassword(e.target.value)
}
const handleSubmit=()=>{
const data = new FormData()
data.append("first_name",first)
data.append("last_name",last)
data.append("email",email)
data.append("password",password)
data.append("user_type_id",2)
axios.post("http://127.0.0.1:8000/api/v0.0.1/register",data).then((res) => {
    console.log(res.data);
}).catch((err) => {
    console.log(err);
})
}
return(
    <div className="form_container">
         <h1> Kindly fill the form</h1>
         <Partition Lname={"First Name"} Itype={"text"} onChange={handleFirst}/>
         <Partition Lname={"Last Name"} Itype={"text"} onChange={handleLast}/>
         <Partition Lname={"Email"} Itype={"email"} onChange={handleEmail}/>
         <Partition Lname={"Password"} Itype={"password"} onChange={handlePassword}/>
         <RegisterButton name={"Sign up"} onSubmit={handleSubmit}/>
         <br />
         <p onClick={signinNavigation}>already have an account?</p>
 </div>
)
}
export default SignUp