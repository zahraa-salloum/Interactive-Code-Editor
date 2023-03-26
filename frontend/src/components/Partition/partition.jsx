import Label from "../Label/label";
import Input from "../Input/input";
import  './partition.css';

const Partition=({Lname},{Iname})=>{
    return(
    <div className="part">
        <Label name={Lname}/>
        <Input name={Iname}/>
    </div>);

}
export default Partition;