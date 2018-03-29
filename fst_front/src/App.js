import React from 'react';
import './App.css';
import Home from './containers/NavBar';
import { BrowserRouter } from 'react-router-dom';

const App = () => (
    <BrowserRouter>
        <div className='app'>
            <Home />
        </div>
    </BrowserRouter>
);

export default App;