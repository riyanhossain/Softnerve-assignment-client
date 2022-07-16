
import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Students from './pages/Students';
import Navbar from './components/Navbar/Navbar';
import UpdateStudent from './pages/UpdateStudent';

function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/update-student/:id" element={<UpdateStudent />} />
      </Routes>
    </div>
  );
}

export default App;
