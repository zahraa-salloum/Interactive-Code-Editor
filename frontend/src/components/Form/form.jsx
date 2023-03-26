import Partition from "../Partition/partition";
import  './form.css';
import RegisterButton from "../RegisterButton/registerbutton";
const Form = () => {
    return(
        <div className="form_container">
        <h1>Sign In</h1>
        <Partition Lname={"Email"} Iname={"hola"} />
        <Partition Lname={"password"} />
        <RegisterButton name={"Login"}/>
        </div>
    )

}

export default Form;