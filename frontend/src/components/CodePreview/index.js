import RegisterButton from "../RegisterButton/registerbutton";
import "./style.css";




const CodePreview = () => {
return(
    <div className="container_code_download">
    <div className="container_code_title">Code #1</div>
    <div>Print('Code Goes Here')</div>
    <RegisterButton name={"Download File"}/>
    </div>

)
}

export default CodePreview


