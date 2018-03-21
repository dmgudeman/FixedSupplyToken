import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter } from 'react-router-dom';

const App = () => (
    <BrowserRouter keyLength={12}>
        <div className='app'>
            <Home/>
        </div>
    </BrowserRouter>
);

export default App;