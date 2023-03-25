import Partition from "../Partition/partition";
import  './form.css';
import Button from "../Button/button";
const Form = () => {
    return(
        <div className="form_container">
        <h1>Sign In</h1>
        <Partition Lname={"Email"} Iname={"email"} />
        <Partition Lname={"password"} />
        <Button name={"Login"}/>
        </div>
    )

}

export default Form;