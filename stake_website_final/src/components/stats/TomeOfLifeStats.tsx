import React from 'react';

interface TomeOfLifeStatsProps {
  stats: {
    rtp: string;
    volatility: string;
    minBet: string;
    maxBet: string;
    maxMultiplier: string;
    houseEdge?: string;
  };
}

const TomeOfLifeStats: React.FC<TomeOfLifeStatsProps> = ({ stats }) => {
  return (
    <div className="space-y-8">
      {/* Basic Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="bg-[#1F2937] p-6 rounded-xl">
          <h3 className="text-gray-400 text-sm mb-2">RTP</h3>
          <p className="text-3xl font-bold text-green-400 mb-2">{stats.rtp}</p>
          <p className="text-sm text-gray-400">Return to Player percentage</p>
        </div>
        <div className="bg-[#1F2937] p-6 rounded-xl">
          <h3 className="text-gray-400 text-sm mb-2">Volatility</h3>
          <p className="text-3xl font-bold text-blue-400 mb-2">{stats.volatility}</p>
          <p className="text-sm text-gray-400">Risk level of the game</p>
        </div>
        <div className="bg-[#1F2937] p-6 rounded-xl">
          <h3 className="text-gray-400 text-sm mb-2">Min Bet</h3>
          <p className="text-3xl font-bold text-blue-400 mb-2">{stats.minBet}</p>
          <p className="text-sm text-gray-400">Minimum bet amount</p>
        </div>
        <div className="bg-[#1F2937] p-6 rounded-xl">
          <h3 className="text-gray-400 text-sm mb-2">Max Bet</h3>
          <p className="text-3xl font-bold text-blue-400 mb-2">{stats.maxBet}</p>
          <p className="text-sm text-gray-400">Maximum bet amount</p>
        </div>
        <div className="bg-[#1F2937] p-6 rounded-xl">
          <h3 className="text-gray-400 text-sm mb-2">Max Multiplier</h3>
          <p className="text-3xl font-bold text-blue-400 mb-2">{stats.maxMultiplier}</p>
          <p className="text-sm text-gray-400">Highest possible win multiplier</p>
        </div>
        {stats.houseEdge && (
          <div className="bg-[#1F2937] p-6 rounded-xl">
            <h3 className="text-gray-400 text-sm mb-2">House Edge</h3>
            <p className="text-3xl font-bold text-green-400 mb-2">{stats.houseEdge}</p>
            <p className="text-sm text-gray-400">Casino's statistical advantage</p>
          </div>
        )}
      </div>

      {/* Game Features */}
      <div className="bg-[#1F2937] p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-blue-400 mb-6">Game Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-white">Free Spins</h4>
              <p className="text-gray-400">Unlock free spins by landing 3 or more scatter symbols</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-white">Wild Symbols</h4>
              <p className="text-gray-400">Wild symbols substitute for any regular symbol to create winning combinations</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-white">Multipliers</h4>
              <p className="text-gray-400">Special symbols can multiply your winnings up to 100x</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-white">Auto Play</h4>
              <p className="text-gray-400">Set the game to automatically spin with your chosen parameters</p>
            </div>
          </div>
        </div>
      </div>

      {/* Paylines */}
      <div className="bg-[#1F2937] p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-blue-400 mb-4">Paylines Visualization</h3>
        <div className="relative h-64 bg-[#111827] rounded-lg flex items-center justify-center">
          <div className="text-center text-gray-400">
            <div className="mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <p>Paylines Visualization</p>
            <p className="text-sm mt-2">Interactive visualization would appear here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TomeOfLifeStats;
