import React, {useState} from "react";
import Editor from "../../components/Editor/Editor.js";
import Output from "../../components/Editor/Output.js";
import NavBar from "../../components/NavBar/Nav.jsx";
import Footer from "../../components/Footer/footer.jsx";
import axios from "axios";
import Dashboard from "../../components/Dashboard_NavBar/dashboard_nav.jsx";


const CodeEditorPage = () => {
  const [python, setPython] = useState("");
  const [code_output, setOutput] = useState("Waiting for your code ...");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

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
        console.log(response.data)
        const splitted_code = (response.data.Result).split("\n")
        let html = "";
        {html =splitted_code.map((code,index) => (
         <p key={index}>{code}</p>
      ))}
        setOutput(html);
        setError("");
      })
      .catch(function (error) {
        setError("Your code is invalid");
      });
  };

  const token = localStorage.getItem('token');


  const saveCode = async () =>{
    const data = new FormData();
    data.append('code',python);

      axios.post('http://127.0.0.1:8000/api/v0.0.1/store_code',data,{
          headers: {
              Authorization: `Bearer ${token}`
          }
      }).then(response => {
          console.log(response.data)
          if(response.data){
          setMessage(response.data.message)}
      })
  }

  

  return (
    <>
    <div className="code_editor_page">
    <Dashboard/>
    <button className = "btn compile_btn" onClick={pythonCompile}>Run</button>
    <div className = "message">{error}</div>
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
    <button className = "btn save_btn compile_btn" onClick={saveCode}>Save</button>
    <div className = "message">{message}</div>
    </div>
    <Footer/>
    </>
  );
};

export default CodeEditorPage;
