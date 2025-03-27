// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './Dashboard';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import TrackBall from './components/TrackBall';
import Counter from './components/Counter';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Pricing from './components/Pricing'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/track-ball" element={<TrackBall />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  );
}

export default App;