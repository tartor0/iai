// App.jsx (Add this new file to set up routing - place in src/)
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage'; // Adjust paths based on your structure
import About from './pages/About';
import Contact from './pages/Contact';
import Progress from './pages/Progress';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/progress" element={<Progress />} />
      </Routes>
    </Router>
  );
}