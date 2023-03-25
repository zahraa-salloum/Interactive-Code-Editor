import NavBar from "../../components/NavBar/Nav";
import Input from "../../components/Input/input";
import Label from "../../components/Label/label";
import Partition from "../../components/Partition/partition"


const Register = () => {
    return (
        <div>
            <NavBar/>
            <Partition Lname={'Email'} Iname={'Email address'}/>
        </div>
    );
}
export default Register;