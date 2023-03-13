import './css/style.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/views/Home';
import Contact from './components/views/Contact';
import Header from './components/partials/Header';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/contacts" element={<Contact />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
