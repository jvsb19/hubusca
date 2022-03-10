import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Home from './pages/Home';
import MoreInfo from './pages/MoreInfo';
import Historic from './pages/Historic';

export default function Rotas(){
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/moreInfo" element={<MoreInfo />} />
                    <Route path="/historic" element={<Historic />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Router>
        </div>
    );
}
