import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './css/style.min.css';
import Home from './components/views/Home';
import Contact from './components/views/Contact';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/contacts" element={<Contact />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
