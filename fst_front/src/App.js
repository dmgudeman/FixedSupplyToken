import React from 'react';
import './App.css';
import Auth from './pages/Auth';
import { BrowserRouter } from 'react-router-dom';

const App = () => (
    <BrowserRouter keyLength={12}>
        <div className='app'>
            <Auth/>
        </div>
    </BrowserRouter>
);

export default App;