import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import СurrencyСonverter from './components/СurrencyСonverter';
import CurrencyRates from './components/CurrencyRates';
import Navbars from './components/Navbars';

const App = () => {

  return (
    <Router>
      <Navbars />
      <Routes>
        <Route path="/" element={<СurrencyСonverter />} />
        <Route path="/CurrencyRates" element={<CurrencyRates />} />
      </Routes>
    </Router>
  );
}

export default App;
