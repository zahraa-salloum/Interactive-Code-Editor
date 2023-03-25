import React, { useState } from "react";
import Editor from "../../components/Editor";

const CodeEditorPage = () => {
  const [python, setPython] = useState("");
  const [output, setOutput] = useState("");

  const pythonCompile = async (e) => {
    const python_code = python;
    const pyodide = await window.loadPyodide();
    const output = pyodide.runPython(python_code);
    setOutput(output);
  };

  return (
    <div className="container">
<<<<<<< HEAD
      <div className="pane top-pane">
        <Editor
          language="python"
          displayName="Input"
          value={python}
          onChange={setPython}
        />
      </div>
      <div className="pane">
        <div className="output_container top_pane">{output}</div>
      </div>
      <button onClick={pythonCompile}>click me to compile</button>
=======
        <div className="pane top_pane">
            <Editor 
            language = "python" 
            displayName="Input" 
            value={python} 
            onChange={setPython} />
        </div>
        <div className="pane iframe_pane">
            <iframe
            title="output"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%"
            />
        </div>
>>>>>>> 4961dd17cda98f50452b16035cd57e5d5b9b8738
    </div>
  );
};

export default CodeEditorPage;