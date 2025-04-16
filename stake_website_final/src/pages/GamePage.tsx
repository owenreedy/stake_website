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

  // Function to render auto bet strategies based on game title
  const renderAutoBetStrategies = () => {
    switch (title) {
      case 'crash':
        return (
          <AutoBetStrategy 
            strategies={[
              "Set auto cash-out at 1.5x-2.0x for consistent returns with lower risk.",
              "Use 'Increase bet on loss' with 30% increase and reset on win, with auto cash-out at 2x.",
              "For conservative play, set small bets with auto cash-out at 1.2x-1.5x and no bet increases.",
              "Target the 1.05x - 1.25x range with auto cash-out for frequent small wins.",
              "Consider waiting for an 'Instaloss' (crash between 1.00x and 1.04x) before resuming auto betting."
            ]} 
          />
        );
      case 'plinko':
        return (
          <AutoBetStrategy 
            strategies={[
              "Use auto bet with Medium risk level and 16 rows for balanced risk-reward.",
              "Set max 10 bets together at Medium risk for consistent returns.",
              "For high volatility play, use High risk with 8-12 rows and smaller bet amounts.",
              "Toggle animations off for faster gameplay when using auto bet for multiple rounds.",
              "Use the Martingale strategy with auto bet by increasing bet size after losses."
            ]} 
          />
        );
      case 'mines':
        return (
          <AutoBetStrategy 
            strategies={[
              "Set 9 mines and select 5 tiles with minimum bet, using 9% increase on loss and reset on wins.",
              "For low-risk auto betting, set 1 mine and select 1-2 tiles with continuous play.",
              "Set 18 mines and target the same 4 squares consistently for high volatility play.",
              "Use the Reverse Martingale Strategy: increase bet after wins, decrease after losses.",
              "For balanced play, set 3-5 mines with 2 clicks per round and stop auto bet after 50% profit."
            ]} 
          />
        );
      case 'dice':
        return (
          <AutoBetStrategy 
            strategies={[
              "Use 1.1x multiplier (over 50.50) with base bet amount of balance divided by 200.",
              "Set condition to increase bet by 230% on loss and decrease win chance by 5% on win.",
              "For conservative auto betting, use 2x multiplier with 1-2% of balance as base bet.",
              "Implement stop conditions: stop after 10 consecutive losses or when profit reaches 20%.",
              "For wager grinding, use low-risk settings (95% win chance) with small bets and no progression."
            ]} 
          />
        );
      case 'blackjack':
        return (
          <AutoBetStrategy 
            strategies={[
              "Auto betting is limited in Blackjack, but you can use consistent bet sizing strategies.",
              "Set a base bet of 1-2% of your bankroll and maintain it throughout your session.",
              "Implement a positive progression by increasing bets by 50% after wins, resetting after losses.",
              "Use the 1-3-2-6 betting system across multiple hands for structured progression.",
              "For conservative play, maintain the same bet size regardless of outcome."
            ]} 
          />
        );
      default:
        return (
          <AutoBetStrategy 
            strategies={[
              "Start with smaller bets to understand the game's mechanics and volatility.",
              "Set stop-loss and take-profit limits to protect your bankroll during auto betting.",
              "Consider using a percentage-based betting system rather than fixed amounts.",
              "Adjust auto bet settings based on your risk tolerance and bankroll size.",
              "Monitor results and be prepared to modify your strategy based on performance."
            ]} 
          />
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

          {/* Auto Bet Strategies Section */}
          <section>
            <h2 className="text-2xl font-bold text-blue-400 mb-6">Auto Bet Strategies</h2>
            <div className="bg-[#2A3543] rounded-xl p-8">
              {renderAutoBetStrategies()}
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
