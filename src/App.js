import React from 'react';
import './App.css';
import { Route,  Routes } from 'react-router-dom';
import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <p>Use NavLink instead of Link, this will help indentify easily Active className</p>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
