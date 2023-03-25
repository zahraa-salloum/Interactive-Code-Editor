import React, {useState} from "react";
import Editor from "../../components/Editor";

const CodeEditorPage = () => {

const[python, setPython] = useState('');

return(
   
    <div className="container">
        <div className="pane top-pane">
            <Editor 
            language = "python" 
            displayName="Input" 
            value={python} 
            onChange={setPython} />
        </div>
        <div className="pane">
            <iframe
            title="output"
            sandbox="allow-scripts"
            // frameBorder="0"
            // width="50%"
            // height="100%"
            />
        </div>
    </div>
)
}
export default CodeEditorPage;