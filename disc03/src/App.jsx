import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import Users from './components/Users';

function App() {
  return (
    <BrowserRouter>
      <Navigation title="Woof & Meow" first="USER" second="Product" third="Contact" />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/user" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



