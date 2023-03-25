import logo from './logo.svg';
import './App.css';

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
