// import logo from './logo.svg';
import React from 'react';
import './App.css';
import About from './Component/About';
import Contect from './Component/Contect';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return ( 
    <>
    
      <BrowserRouter>
        <Navbar  Home='props pass'/> 
        <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route  path='/About' element={<About/>} />
        <Route  path="/Contect" element={<Contect/>}/>
        </Routes>
         
  </BrowserRouter>
    </>
  );
}

export default App;
