import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pocetna from './components/Pocetna';
import Kontakt from './components/Kontakt';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Pocetna />} />
          <Route path="/kontakt-strana" element={<Kontakt />} />
        </Routes>
      </Router >
    </div>
  );
}

export default App;
