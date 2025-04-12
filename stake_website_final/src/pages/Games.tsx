import React from 'react';
import { Link } from 'react-router-dom';
import GamesGrid from '../components/GamesGrid';

function Games() {
  return (
    <div className="min-h-screen bg-[#1B2330] text-white p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Stake.us Games</h1>
          <p className="text-xl text-gray-300">
            Comprehensive guides and strategies for all Stake.us games
          </p>
        </header>

        {/* Games Grid */}
        <GamesGrid />

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-blue-400 mb-6">About Our Guides</h2>
          <div className="bg-[#2A3543] rounded-xl p-8">
            <p className="text-gray-200 mb-4">
              Our comprehensive guides provide in-depth information on how to play each Stake.us game, 
              detailed statistics, auto bet strategies, and general strategies to improve your gameplay experience.
            </p>
            <p className="text-gray-200">
              Click on any game to access its dedicated guide with step-by-step instructions, 
              statistical analysis, and expert strategies.
            </p>
          </div>
        </section>

        <footer className="mt-16 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>This guide is for informational purposes only. Play responsibly.</p>
        </footer>
      </div>
    </div>
  );
}

export default Games;
