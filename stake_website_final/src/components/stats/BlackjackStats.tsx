import React from 'react';

interface BlackjackStatsProps {}

const BlackjackStats: React.FC<BlackjackStatsProps> = () => {
  return (
    <div className="space-y-8">
      {/* Basic Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="bg-[#1F2937] p-6 rounded-xl">
          <h3 className="text-gray-400 text-sm mb-2">House Edge</h3>
          <p className="text-3xl font-bold text-green-400 mb-2">0.57%</p>
          <p className="text-sm text-gray-400">One of the lowest in casino games</p>
        </div>
        <div className="bg-[#1F2937] p-6 rounded-xl">
          <h3 className="text-gray-400 text-sm mb-2">RTP</h3>
          <p className="text-3xl font-bold text-green-400 mb-2">99.43%</p>
          <p className="text-sm text-gray-400">Return to Player percentage</p>
        </div>
        <div className="bg-[#1F2937] p-6 rounded-xl">
          <h3 className="text-gray-400 text-sm mb-2">Volatility</h3>
          <p className="text-3xl font-bold text-blue-400 mb-2">Low</p>
          <p className="text-sm text-gray-400">Consistent outcomes</p>
        </div>
        <div className="bg-[#1F2937] p-6 rounded-xl">
          <h3 className="text-gray-400 text-sm mb-2">Game Type</h3>
          <p className="text-3xl font-bold text-blue-400 mb-2">Table Game</p>
          <p className="text-sm text-gray-400">Stake Originals</p>
        </div>
      </div>

      {/* Card Values */}
      <div className="bg-[#1F2937] p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-blue-400 mb-6">Card Values</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <h4 className="font-medium text-white">Number Cards</h4>
            <div className="flex flex-wrap gap-2">
              {[2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                <div key={num} className="w-12 h-16 bg-white rounded-md flex items-center justify-center text-black font-bold">
                  {num}
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-sm">Worth their face value</p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-white">Face Cards</h4>
            <div className="flex flex-wrap gap-2">
              {['J', 'Q', 'K'].map(face => (
                <div key={face} className="w-12 h-16 bg-white rounded-md flex items-center justify-center text-black font-bold">
                  {face}
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-sm">All worth 10 points</p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-white">Aces</h4>
            <div className="flex flex-wrap gap-2">
              <div className="w-12 h-16 bg-white rounded-md flex items-center justify-center text-black font-bold">
                A
              </div>
            </div>
            <p className="text-gray-400 text-sm">Worth 1 or 11 points (your choice)</p>
          </div>
        </div>
      </div>

      {/* Blackjack Payouts */}
      <div className="bg-[#1F2937] p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-blue-400 mb-6">Payouts</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-gray-700">
                <th className="pb-4 text-gray-400">Outcome</th>
                <th className="pb-4 text-gray-400">Payout</th>
                <th className="pb-4 text-gray-400">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700/50">
                <td className="py-4 text-white">Win</td>
                <td className="py-4 text-green-400">1:1</td>
                <td className="py-4 text-gray-300">Player's hand beats the dealer's hand</td>
              </tr>
              <tr className="border-b border-gray-700/50">
                <td className="py-4 text-white">Blackjack</td>
                <td className="py-4 text-green-400">3:2</td>
                <td className="py-4 text-gray-300">Player gets an Ace and a 10-value card as first two cards</td>
              </tr>
              <tr className="border-b border-gray-700/50">
                <td className="py-4 text-white">Insurance</td>
                <td className="py-4 text-yellow-400">2:1</td>
                <td className="py-4 text-gray-300">Side bet when dealer shows an Ace</td>
              </tr>
              <tr className="border-b border-gray-700/50">
                <td className="py-4 text-white">Push</td>
                <td className="py-4 text-blue-400">Bet Returned</td>
                <td className="py-4 text-gray-300">Tie between player and dealer</td>
              </tr>
              <tr className="border-b border-gray-700/50">
                <td className="py-4 text-white">Loss</td>
                <td className="py-4 text-red-400">Bet Lost</td>
                <td className="py-4 text-gray-300">Dealer's hand beats the player's hand or player busts</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Basic Strategy Chart */}
      <div className="bg-[#1F2937] p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-blue-400 mb-4">Basic Strategy Chart</h3>
        <div className="relative h-64 bg-[#111827] rounded-lg flex items-center justify-center">
          <div className="text-center text-gray-400">
            <div className="mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <p>Basic Strategy Chart</p>
            <p className="text-sm mt-2">Interactive strategy chart would appear here</p>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <p className="text-gray-300 text-sm">
            <span className="inline-block w-4 h-4 bg-green-500 rounded-sm mr-2"></span>
            Hit - Take another card
          </p>
          <p className="text-gray-300 text-sm">
            <span className="inline-block w-4 h-4 bg-blue-500 rounded-sm mr-2"></span>
            Stand - Keep current hand
          </p>
          <p className="text-gray-300 text-sm">
            <span className="inline-block w-4 h-4 bg-yellow-500 rounded-sm mr-2"></span>
            Double - Double bet and take one more card
          </p>
          <p className="text-gray-300 text-sm">
            <span className="inline-block w-4 h-4 bg-purple-500 rounded-sm mr-2"></span>
            Split - Split pair into two separate hands
          </p>
        </div>
      </div>

      {/* Key Strategy Points */}
      <div className="bg-[#1F2937] p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-blue-400 mb-6">Key Strategy Points</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h4 className="font-medium text-white">Always Split</h4>
            <div className="flex gap-2">
              <div className="w-10 h-14 bg-white rounded-md flex items-center justify-center text-black font-bold">A</div>
              <div className="w-10 h-14 bg-white rounded-md flex items-center justify-center text-black font-bold">A</div>
            </div>
            <div className="flex gap-2 mt-2">
              <div className="w-10 h-14 bg-white rounded-md flex items-center justify-center text-black font-bold">8</div>
              <div className="w-10 h-14 bg-white rounded-md flex items-center justify-center text-black font-bold">8</div>
            </div>
            <p className="text-gray-400 text-sm">Always split Aces and 8s regardless of dealer's upcard</p>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-medium text-white">Never Split</h4>
            <div className="flex gap-2">
              <div className="w-10 h-14 bg-white rounded-md flex items-center justify-center text-black font-bold">10</div>
              <div className="w-10 h-14 bg-white rounded-md flex items-center justify-center text-black font-bold">10</div>
            </div>
            <div className="flex gap-2 mt-2">
              <div className="w-10 h-14 bg-white rounded-md flex items-center justify-center text-black font-bold">5</div>
              <div className="w-10 h-14 bg-white rounded-md flex items-center justify-center text-black font-bold">5</div>
            </div>
            <p className="text-gray-400 text-sm">Never split 10s or 5s regardless of dealer's upcard</p>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-medium text-white">Double Down on 11</h4>
            <div className="flex gap-2">
              <div className="w-10 h-14 bg-white rounded-md flex items-center justify-center text-black font-bold">6</div>
              <div className="w-10 h-14 bg-white rounded-md flex items-center justify-center text-black font-bold">5</div>
            </div>
            <p className="text-gray-400 text-sm">Always double down on 11 when dealer shows 2-10</p>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-medium text-white">Stand on 17+</h4>
            <div className="flex gap-2">
              <div className="w-10 h-14 bg-white rounded-md flex items-center justify-center text-black font-bold">10</div>
              <div className="w-10 h-14 bg-white rounded-md flex items-center justify-center text-black font-bold">7</div>
            </div>
            <p className="text-gray-400 text-sm">Always stand on hard 17 or higher</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackjackStats;
