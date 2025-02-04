import './App.css'
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home';
import Game from './pages/game';
import { PageTransitionProvider } from './context/page-transition-context';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/game" element={<Game />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
