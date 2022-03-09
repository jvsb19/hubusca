import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import MoreInfo from './pages/MoreInfo';

export default function Rotas(){
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/moreInfo" element={<MoreInfo />} />
                </Routes>
            </Router>
        </div>
    );
}
