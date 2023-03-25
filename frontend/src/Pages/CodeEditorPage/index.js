import React, {useState} from "react";
import Editor from "../../components/Editor";

const CodeEditorPage = () => {

const[python, setPython] = useState('');
const srcDoc = `<html>
<py-script>
${python}
</py-script>
</html>`

return(
   
    <div className="container">
        <div className="pane top_pane">
            <Editor 
            language = "python" 
            displayName="Input" 
            value={python} 
            onChange={setPython} />
        </div>
        <div className="pane iframe_pane">
            <iframe
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%"
            />
        </div>
    </div>
)
}
export default CodeEditorPage;