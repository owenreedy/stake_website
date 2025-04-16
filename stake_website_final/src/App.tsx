import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Stats from './pages/Games';
import AutoBet from './pages/AutoBet';
import Referral from './pages/Referral';
import VIP from './pages/VIP';
import GamePage from './pages/GamePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#1B2330]">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/autobet" element={<AutoBet />} />
            <Route path="/referral" element={<Referral />} />
            <Route path="/vip" element={<VIP />} />
            <Route path="/game/:title" element={<GamePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
