import './App.css';
import React, { useState } from 'react';
import { BiMoon } from 'react-icons/bi';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Countries from "./components/Countries";
import SingleCountry from './components/SingleCountry';




function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }
  return (
    <>

    <div className={`${darkMode ? 'dark-mode' : ''}`}>
    <div className='header container py-5'>
    <div className="row">
    <div className='col'>
      <h5 className='col'>Where in the world</h5>
    </div>
    <div className='col-auto'>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={toggleDarkMode}
      >
      <BiMoon className="bi me-2 fs-3" />
        Dark Mode
      </button>
    </div>
  </div>
    </div>
    
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/:name" element={<SingleCountry />} />
        </Routes>
    </BrowserRouter>
  </div>
      
    </>
    
  );
}

export default App;
