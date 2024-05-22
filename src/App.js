import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import React, { useState, useRef } from "react";



import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Landing3 from './components/Landing3';
import ScrollToTopButton from './components/ScrollToTopButton';



function App() {

return (
    <div className="App">
            
        <Landing3 />
        <ScrollToTopButton />


        
    </div>
);
}

export default App;
