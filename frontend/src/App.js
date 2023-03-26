import { Routes, Route } from "react-router-dom"
import HomePage from './Pages/HomePage';
import CodeEditorPage from './Pages/CodeEditorPage';
import RegisterPage from "./Pages/RegisterPage";
import AdminPage from "./Pages/AdminPage";
<<<<<<< Updated upstream
import CodesPage from "./Pages/CodesPage";
=======
import DisplayUsers from "./Pages/DisplayUsersPage";
>>>>>>> Stashed changes


function App() {
  return (
    <Routes>

      <Route path="/" element={<HomePage />} />
      <Route path="/code_editor" element={<CodeEditorPage />} />
      <Route path="/codes" element={<CodesPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/admin" element={<AdminPage/>}/>
<<<<<<< Updated upstream
      <Route path="*" element={<div>404</div>} />
=======
      <Route path="/users" element={<DisplayUsers/>}/>
>>>>>>> Stashed changes

    </Routes> 
  );
}

export default App;
