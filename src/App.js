import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Landing3 from './components/Landing3';
import Landing2 from './components/Landing2';

import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
return (
    <Router basename="/questions">
    <div className="App">
        <Routes>
        <Route path="/icm" element={<Landing2 />} />

        <Route path="/" element={<Landing3 />} />
        {/* Add more routes here */}
        </Routes>
        <ScrollToTopButton />
    </div>
    </Router>
);
}

export default App;