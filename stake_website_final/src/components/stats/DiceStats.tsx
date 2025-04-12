import React from 'react';

interface DiceStatsProps {}

const DiceStats: React.FC<DiceStatsProps> = () => {
  return (
    <div className="space-y-8">
      {/* Basic Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="bg-[#1F2937] p-6 rounded-xl">
          <h3 className="text-gray-400 text-sm mb-2">House Edge</h3>
          <p className="text-3xl font-bold text-green-400 mb-2">1.00%</p>
          <p className="text-sm text-gray-400">Casino's statistical advantage</p>
        </div>
        <div className="bg-[#1F2937] p-6 rounded-xl">
          <h3 className="text-gray-400 text-sm mb-2">RTP</h3>
          <p className="text-3xl font-bold text-green-400 mb-2">99.00%</p>
          <p className="text-sm text-gray-400">Return to Player percentage</p>
        </div>
        <div className="bg-[#1F2937] p-6 rounded-xl">
          <h3 className="text-gray-400 text-sm mb-2">Volatility</h3>
          <p className="text-3xl font-bold text-blue-400 mb-2">Adjustable</p>
          <p className="text-sm text-gray-400">Based on target number</p>
        </div>
        <div className="bg-[#1F2937] p-6 rounded-xl">
          <h3 className="text-gray-400 text-sm mb-2">Max Multiplier</h3>
          <p className="text-3xl font-bold text-blue-400 mb-2">9900x</p>
          <p className="text-sm text-gray-400">Theoretical maximum</p>
        </div>
      </div>

      {/* Dice Probability Chart */}
      <div className="bg-[#1F2937] p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-blue-400 mb-6">Dice Probability Chart</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-gray-700">
                <th className="pb-4 text-gray-400">Target Number</th>
                <th className="pb-4 text-gray-400">Win Chance</th>
                <th className="pb-4 text-gray-400">Multiplier</th>
                <th className="pb-4 text-gray-400">Risk Level</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700/50">
                <td className="py-4 text-white">Over 1</td>
                <td className="py-4 text-white">98.00%</td>
                <td className="py-4 text-white">1.01x</td>
                <td className="py-4"><span className="px-2 py-1 rounded-full text-xs text-green-400">Very Low</span></td>
              </tr>
              <tr className="border-b border-gray-700/50">
                <td className="py-4 text-white">Over 25</td>
                <td className="py-4 text-white">74.00%</td>
                <td className="py-4 text-white">1.33x</td>
                <td className="py-4"><span className="px-2 py-1 rounded-full text-xs text-green-400">Low</span></td>
              </tr>
              <tr className="border-b border-gray-700/50">
                <td className="py-4 text-white">Over 50</td>
                <td className="py-4 text-white">49.00%</td>
                <td className="py-4 text-white">2.02x</td>
                <td className="py-4"><span className="px-2 py-1 rounded-full text-xs text-yellow-400">Medium</span></td>
              </tr>
              <tr className="border-b border-gray-700/50">
                <td className="py-4 text-white">Over 75</td>
                <td className="py-4 text-white">24.00%</td>
                <td className="py-4 text-white">4.12x</td>
                <td className="py-4"><span className="px-2 py-1 rounded-full text-xs text-orange-400">High</span></td>
              </tr>
              <tr className="border-b border-gray-700/50">
                <td className="py-4 text-white">Over 90</td>
                <td className="py-4 text-white">9.00%</td>
                <td className="py-4 text-white">11.00x</td>
                <td className="py-4"><span className="px-2 py-1 rounded-full text-xs text-red-400">Very High</span></td>
              </tr>
              <tr className="border-b border-gray-700/50">
                <td className="py-4 text-white">Over 95</td>
                <td className="py-4 text-white">4.00%</td>
                <td className="py-4 text-white">24.75x</td>
                <td className="py-4"><span className="px-2 py-1 rounded-full text-xs text-red-400">Extreme</span></td>
              </tr>
              <tr className="border-b border-gray-700/50">
                <td className="py-4 text-white">Over 99</td>
                <td className="py-4 text-white">0.01%</td>
                <td className="py-4 text-white">9900.00x</td>
                <td className="py-4"><span className="px-2 py-1 rounded-full text-xs text-purple-400">Ultra</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Dice Visualization */}
      <div className="bg-[#1F2937] p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-blue-400 mb-4">Dice Roll Visualization</h3>
        <div className="relative h-64 bg-[#111827] rounded-lg flex items-center justify-center">
          <div className="text-center text-gray-400">
            <div className="mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <p>Dice Roll Probability Distribution</p>
            <p className="text-sm mt-2">Interactive visualization would appear here</p>
          </div>
        </div>
      </div>

      {/* Strategy Tips */}
      <div className="bg-[#1F2937] p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-blue-400 mb-6">Optimal Betting Strategies</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <h4 className="font-medium text-white">Conservative Strategy</h4>
            <div className="w-full h-12 bg-gradient-to-r from-green-500 to-green-700 rounded-md flex items-center justify-center text-white font-bold">
              Over 25 (1.33x)
            </div>
            <p className="text-gray-400 text-sm">74% win chance with small but consistent returns</p>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-medium text-white">Balanced Strategy</h4>
            <div className="w-full h-12 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-md flex items-center justify-center text-white font-bold">
              Over 50 (2.02x)
            </div>
            <p className="text-gray-400 text-sm">Near 50% win chance with double returns</p>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-medium text-white">Aggressive Strategy</h4>
            <div className="w-full h-12 bg-gradient-to-r from-red-500 to-red-700 rounded-md flex items-center justify-center text-white font-bold">
              Over 75 (4.12x)
            </div>
            <p className="text-gray-400 text-sm">24% win chance with 4x returns</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiceStats;
