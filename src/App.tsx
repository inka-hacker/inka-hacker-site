import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your SVGs
import AndeanSun from './assets/Andean-sun.svg';
import Chakana from './assets/chakana.svg';
import AntiParlamentario from './assets/anti-parlamentario.svg';
import SunAccPage from './pages/SunAccPage';
import PachacuTechPage from './pages/PachacuTechPage';
import AntiParlamentarioPage from './pages/AntiParlamentarioPage';

function LandingPage() {
  return (
    <div className="font-sans h-screen grid grid-cols-1 md:grid-cols-3">
      {/* Andean Sun Section */}
      <section
        id="andean-sun"
        className="flex flex-col items-center justify-center text-center p-8"
        style={{ backgroundColor: '#A23223', color: 'white', height: '100vh' }}
      >
        <a href="/sun-acc" className="flex flex-col items-center">
          <img src={AndeanSun} alt="Andean Sun Logo" className="w-40 h-40 mb-4" />
          <h1 className="text-4xl font-bold mb-2">Sun/acc</h1>
          <h2 className="text-2xl font-semibold">Philosophy</h2>
        </a>
      </section>

      {/* Pachacu-Tech Section */}
      <section
        id="chakana"
        className="flex flex-col items-center justify-center text-center p-8"
        style={{ backgroundColor: '#00796B', color: 'white', height: '100vh' }}
      >
        <a href="/pachacu-tech" className="flex flex-col items-center">
          <img src={Chakana} alt="Chakana Logo" className="w-40 h-40 mb-4" />
          <h1 className="text-4xl font-bold mb-2">Pachacu-Tech</h1>
          <h2 className="text-2xl font-semibold">Culture</h2>
        </a>
      </section>

      {/* Anti-Parlamentario Section */}
      <section
        id="logo-circle"
        className="flex flex-col items-center justify-center text-center p-8"
        style={{ backgroundColor: '#DADADA', color: 'black', height: '100vh' }}
      >
        <a href="/anti-parlamentario" className="flex flex-col items-center">
          <img src={AntiParlamentario} alt="Anti-Parlamentario Logo" className="w-40 h-40 mb-4" />
          <h1 className="text-4xl font-bold mb-2">Anti-Parliament</h1>
          <h2 className="text-2xl font-semibold">Politics</h2>
        </a>
      </section>
    </div>
  );
}



function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sun-acc" element={<SunAccPage />} />
        <Route path="/pachacu-tech" element={<PachacuTechPage />} />
        <Route path="/anti-parlamentario" element={<AntiParlamentarioPage />} />
      </Routes>
    </Router>
  );
}

export default App;
