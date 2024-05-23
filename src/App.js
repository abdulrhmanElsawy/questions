import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Landing3 from './components/Landing3';
import Landing2 from './components/Landing2';

import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
return (
    <Router>
    <div className="App">
        <Routes>
        <Route path="/questions/" element={<Landing3 />} />
        <Route path="/questions/icm" element={<Landing2 />} />

        {/* Add more routes here */}
        </Routes>
        <ScrollToTopButton />
    </div>
    </Router>
);
}

export default App;