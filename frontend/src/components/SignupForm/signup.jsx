import Partition from "../Partition/partition";
import NavBar from "../NavBar/Nav";
import "../SignupForm/signup.css"
import RegisterButton from "../RegisterButton/registerbutton";
import {useState} from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/footer";

const SignUp= ()=>{
   const [first,setFirst]=useState("")
   const [last,setLast]=useState("")
   const [email,setEmail]=useState("")
   const [password,setPassword]=useState("")
   const [error,setError]=useState("")

   const navigator = useNavigate();
   const signinNavigation = () => {
     navigator('/login');
    }
   const validateEmail=(email) =>{
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     return emailRegex.test(email);
    }
   
   const validatePassword=(password)=> {
     const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
     return passwordRegex.test(password);
    }

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
     if (first==="" || last==="" || email==="" || password===""){
         setError("All input are required")
        }else{
          if (validateEmail(email)){
            if(validatePassword(password)){  
              const data = new FormData()
              data.append("first_name",first)
              data.append("last_name",last)
              data.append("email",email)
              data.append("password",password)
              data.append("user_type_id",2)
              axios.post("http://127.0.0.1:8000/api/v0.0.1/register",data)
              .then((res) => {
                 console.log(res)
                 localStorage.setItem('token',res.data.authorisation.token);
                 localStorage.setItem('email',res.data.user.email);
                 window.location.href="http://localhost:3000/code_editor"     
                 }).catch((err) => {
                    console.log(err);
                 })
             }else(setError("Invalid credentials"))
        }else(setError("Invalid credentials"))
             }
     }
return(
    <>
      < NavBar/>
        <div className="form_container">
         <h1 className="form_title"> Kindly fill the form</h1>
         <Partition Lname={"First Name"} Itype={"text"} onChange={handleFirst}/>
         <Partition Lname={"Last Name"} Itype={"text"} onChange={handleLast}/>
         <Partition Lname={"Email"} Itype={"email"} onChange={handleEmail}/>
         <Partition Lname={"Password"} Itype={"password"} onChange={handlePassword}/>
         <RegisterButton name={"Sign up"} onSubmit={handleSubmit}/>
         <br />
         <p className="error">{error}</p>
         <p className="test" onClick={signinNavigation}>already have an account?</p>
         </div>
      <Footer/>
    </>
       )
}
export default SignUp