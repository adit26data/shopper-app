import React from 'react';
import './App.css'
import Header from './Header.js'
import Curved from './Curved.js'
import Product from './Product';
import Features from './Features';
import Testimonials from './Testimonials.js'
import Footer from './Footer.js'
import Ethnic from './Ethnic'
import Modern from './Modern'
import Purses from './Purses'
import Casuals from './Casuals';
import Login from './Login'
import Register from './Register'
import Checkout from './Checkout'
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                </Routes>
                <Routes>
                    <Route path="/register" element={<Register />} />
                </Routes>
                <Routes>
                    <Route path="/home" element={<Header />} />
                </Routes>
                <Routes>
                    <Route path="/home" element={<Curved />} />
                </Routes>
                <Routes>
                    <Route path="/home" element={<Features />} />
                </Routes>
                <Routes>
                    <Route path="/home" element={<Product />} />
                </Routes>
                <Routes>
                    <Route path="/home" element={< Testimonials />} />
                </Routes>
                <Routes>
                    <Route path="/home" element={<Footer />} />
                </Routes>
                <Routes>
                    <Route path="/ethnic" element={<Header />} />
                </Routes>
                <Routes>
                    <Route path="/ethnic" element={<Ethnic />} />
                </Routes>
                <Routes>
                    <Route path="/modern" element={<Header />} />
                </Routes>
                <Routes>
                    <Route path="/modern" element={<Modern />} />
                </Routes>
                <Routes>
                    <Route path="/purses" element={<Header />} />
                </Routes>
                <Routes>
                    <Route path="/purses" element={<Purses />} />
                </Routes>
                <Routes>
                    <Route path="/casuals" element={<Header />} />
                </Routes>
                <Routes>
                    <Route path="/casuals" element={<Casuals />} />
                </Routes>
                <Routes>
                    <Route path="/checkout" element={<Header />} />
                </Routes>
                <Routes>
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
            </BrowserRouter>
        </div >
    )
}

export default App;