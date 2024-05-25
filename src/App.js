import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import React, { useState, useRef } from "react";



import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Landing4 from './components/Landing4';
import ScrollToTopButton from './components/ScrollToTopButton';



function App() {

return (
    <div className="App">
            
        <Landing4 />
        <ScrollToTopButton />


        
    </div>
);
}

export default App;
