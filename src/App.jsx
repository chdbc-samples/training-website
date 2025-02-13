import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Morphology from './pages/Morphology';
import Nutrition from './pages/Nutrition';
import Population from './pages/Population';
import Photo from './pages/Photo';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';

function App() {
  return (
    <Router>
      <div className="custom-green-theme d-flex flex-column min-vh-100">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/morphology" element={<Morphology />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/population" element={<Population />} />
          <Route path="/photo" element={<Photo />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;