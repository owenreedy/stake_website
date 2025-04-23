import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { gameContent, defaultGameContent } from '../config/gameContent';
import PlinkoStats from '../components/stats/PlinkoStats';
import MinesStats from '../components/stats/MinesStats';
import CrashStats from '../components/stats/CrashStats';
import BlackjackStats from '../components/stats/BlackjackStats';
import DiceStats from '../components/stats/DiceStats';
import TomeOfLifeStats from '../components/stats/TomeOfLifeStats';
import AutoBetStrategy from '../components/AutoBetStrategy';

function GamePage() {
  const { title } = useParams<{ title: string }>();
  const game = title ? gameContent[title] || defaultGameContent : defaultGameContent;
  const gameTitle = title ? title.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : 'Game';
  const Icon = game.icon;

  // Function to render the appropriate stats component based on game title
  const renderStatsComponent = () => {
    switch (title) {
      case 'plinko':
        return <PlinkoStats />;
      case 'mines':
        return <MinesStats />;
      case 'crash':
        return <CrashStats />;
      case 'blackjack':
        return <BlackjackStats />;
      case 'dice':
        return <DiceStats />;
      case 'tome-of-life':
        return <TomeOfLifeStats stats={game.stats} />;
      default:
        // Generic stats display for other games
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="bg-[#1F2937] p-6 rounded-xl">
                <h3 className="text-gray-400 text-sm mb-2">RTP</h3>
                <p className="text-3xl font-bold text-green-400 mb-2">{game.stats.rtp}</p>
                <p className="text-sm text-gray-400">Return to Player percentage</p>
              </div>
              <div className="bg-[#1F2937] p-6 rounded-xl">
                <h3 className="text-gray-400 text-sm mb-2">Volatility</h3>
                <p className="text-3xl font-bold text-blue-400 mb-2">{game.stats.volatility}</p>
                <p className="text-sm text-gray-400">Risk level of the game</p>
              </div>
              <div className="bg-[#1F2937] p-6 rounded-xl">
                <h3 className="text-gray-400 text-sm mb-2">Min Bet</h3>
                <p className="text-3xl font-bold text-blue-400 mb-2">{game.stats.minBet}</p>
                <p className="text-sm text-gray-400">Minimum bet amount</p>
              </div>
              <div className="bg-[#1F2937] p-6 rounded-xl">
                <h3 className="text-gray-400 text-sm mb-2">Max Multiplier</h3>
                <p className="text-3xl font-bold text-blue-400 mb-2">{game.stats.maxMultiplier}</p>
                <p className="text-sm text-gray-400">Highest possible win multiplier</p>
              </div>
              {game.stats.houseEdge && (
                <div className="bg-[#1F2937] p-6 rounded-xl">
                  <h3 className="text-gray-400 text-sm mb-2">House Edge</h3>
                  <p className="text-3xl font-bold text-green-400 mb-2">{game.stats.houseEdge}</p>
                  <p className="text-sm text-gray-400">Casino's statistical advantage</p>
                </div>
              )}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#1B2330] text-white p-6">
      <div className="max-w-7xl mx-auto">
        <nav className="mb-8">
          <Link to="/stats" className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Games
          </Link>
        </nav>

        <header className="mb-12 flex items-center gap-6">
          <div className="w-16 h-16 bg-blue-500 bg-opacity-20 rounded-full flex items-center justify-center">
            <Icon className="w-8 h-8 text-blue-400" />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2">{gameTitle}</h1>
            <p className="text-xl text-gray-300">{game.description}</p>
          </div>
        </header>

        <div className="space-y-16">
          {/* How to Play Section */}
          <section>
            <h2 className="text-2xl font-bold text-blue-400 mb-6">How to Play</h2>
            <div className="bg-[#2A3543] rounded-xl p-8">
              <ol className="space-y-4">
                {game.rules.map((rule, index) => (
                  <li key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 bg-opacity-20 rounded-full flex items-center justify-center text-blue-400 font-bold">
                      {index + 1}
                    </div>
                    <p className="text-gray-200">{rule}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* Statistics Section */}
          <section>
            <h2 className="text-2xl font-bold text-blue-400 mb-6">Statistics</h2>
            <div className="bg-[#2A3543] rounded-xl p-8">
              {renderStatsComponent()}
            </div>
          </section>

          {/* Strategy Section */}
          <section>
            <h2 className="text-2xl font-bold text-blue-400 mb-6">Strategy</h2>
            <div className="bg-[#2A3543] rounded-xl p-8">
              <ul className="space-y-4">
                {game.strategy.map((tip, index) => (
                  <li key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 bg-opacity-20 rounded-full flex items-center justify-center text-green-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-200">{tip}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>This guide is for informational purposes only. Play responsibly.</p>
        </footer>
      </div>
    </div>
  );
}

export default GamePage;
