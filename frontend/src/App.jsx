
//import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './page/auth';
import Dashbored from './page/dashbored';
import { FinancialRecordsProvider } from './contex/Fms_contex';
import Navbar from './page/dashbored/Navbar';
import AboutUs from './componet/aboutus';
import CryptoCurrencyData from './componet/Crypto';
import Home from './componet/Home';
function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/crypto" element={<CryptoCurrencyData />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/dashbored" element={<FinancialRecordsProvider>
          <Dashbored />
        </FinancialRecordsProvider>} />
      </Routes>
    </Router>
  )
}

export default App
