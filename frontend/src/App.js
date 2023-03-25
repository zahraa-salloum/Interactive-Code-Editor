import { Routes, Route, Router } from "react-router-dom"
import HomePage from './Pages/HomePage';
import CodeEditorPage from './Pages/CodeEditorPage';

function App() {
  return (
    <Routes>

      <Route path="/" element={<HomePage />} />
      <Route path="/code_editor" element={<CodeEditorPage />} />
      <Route path="*" element={<div>404</div>} />

    </Routes> 
  );
}

export default App;
