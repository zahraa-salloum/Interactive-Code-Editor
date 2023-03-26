import React, {useState} from "react";
import Editor from "../../components/Editor/Editor.js";
import Output from "../../components/Editor/Output.js";
import NavBar from "../../components/NavBar/Nav.jsx";
import Footer from "../../components/Footer/footer.jsx";
import axios from "axios";

const CodeEditorPage = () => {
  const [python, setPython] = useState("");
  const [code_output, setOutput] = useState("Waiting for your code ...");

  const pythonCompile = async () => {
    const python_code = python;

    const encodedParams = new URLSearchParams();
    encodedParams.append("LanguageChoice", "5");
    encodedParams.append("Program", python_code);

    const options = {
      method: "POST",
      url: "https://code-compiler.p.rapidapi.com/v2",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "68d519edb5mshba2573f86109024p1f84e8jsn394c08753888",
        "X-RapidAPI-Host": "code-compiler.p.rapidapi.com",
      },
      data: encodedParams,
    };

    axios
      .request(options)
      .then(function (response) {
        setOutput(response.data.Result);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <>
    <div className="code_editor_page">
    <NavBar />
    <button className = "btn compile_btn" onClick={pythonCompile}>Run</button>
    <div className="container_code_editor">
      <div className="pane top-pane">
        <Editor
          language="python"
          displayName="Input"
          value={python}
          onChange={setPython}
        />
      </div>
      <div className="pane top_pane">
        <Output 
        displayName="Output"
        value={code_output} />
      </div>
    </div>
    </div>
    <Footer />
    
    </>
  );
};

export default CodeEditorPage;
