import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Game from './pages/game';
import { PageTransitionProvider } from './context/page-transition-context';

function App() {
  return (
    <PageTransitionProvider>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </PageTransitionProvider>
  );
}

export default App
