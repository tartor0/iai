import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Contact from './pages/Contact';
// import ProgressForm from './pages/ProgressForm';
// import DocumentDashboard from './pages/DocumentDashboard';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/progress" element={<ProgressForm />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/dashboard" element={<DocumentDashboard />} /> */}
      </Routes>
    </Router>
  );
}