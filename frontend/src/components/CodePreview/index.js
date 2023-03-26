import RegisterButton from "../RegisterButton/registerbutton";
import "./style.css";




const CodePreview = ({code_title,code_content}) => {
return(
    <div className="container_code_download">
    <div className="container_code_title">{code_title}</div>
    <div className="container_code_content">{code_content}</div>
    <RegisterButton name={"Download File"}/>
    </div>

)
}

export default CodePreview


