import { Routes, Route } from "react-router-dom"
import HomePage from './Pages/HomePage';
import CodeEditorPage from './Pages/CodeEditorPage';
import RegisterPage from "./Pages/RegisterPage";


function App() {
  return (
    <Routes>

      <Route path="/" element={<HomePage />} />
      <Route path="/code_editor" element={<CodeEditorPage />} />
      <Route path="*" element={<div>404</div>} />
      <Route path="/register" element={<RegisterPage/>}/>

    </Routes> 
  );
}

export default App;
