import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import React, { useState, useRef } from "react";



import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Landing2 from './components/Landing2';
import ScrollToTopButton from './components/ScrollToTopButton';



function App() {

return (
    <div className="App">
            
        <Landing2 />
        <ScrollToTopButton />


        
    </div>
);
}

export default App;
