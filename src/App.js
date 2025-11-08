
import './App.css';
import Main from './components/Main';
import ProjDisplay from './components/ProjDisplay';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/project" element={<Project />} /> */}
        <Route path="/project/:id" element={<ProjDisplay />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
