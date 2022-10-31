import React from 'react'
import Login from '../Components/Login/Login';
import Index from '../Components/Index';
import NoPage from '../Components/NoPage';
import ButtonAppBar from '../Components/Navbar/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
import Registeration from '../Components/Register/Register.jsx';

function Home() {
    return (
        <>
            <ButtonAppBar />
            <div className='container'>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Registeration />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </div>
        </>
    );
}

export default Home;