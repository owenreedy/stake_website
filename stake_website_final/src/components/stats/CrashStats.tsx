import React, { useState } from 'react';

interface CrashStatsProps {}

const CrashStats: React.FC<CrashStatsProps> = () => {
  const [selectedMultiplier, setSelectedMultiplier] = useState(2.00);
  
  const stats = [
    { range: [1.00, 1.04], chance: 3.7 },
    { range: [1.05, 1.15], chance: 7.9 },
    { range: [1.16, 1.25], chance: 5.6 },
    { range: [1.26, 1.35], chance: 6.6 },
    { range: [1.36, 1.45], chance: 3.5 },
    { range: [1.46, 1.55], chance: 3.4 },
    { range: [1.56, 1.65], chance: 4.0 },
    { range: [1.66, 1.75], chance: 3.2 },
    { range: [1.76, 1.85], chance: 3.6 },
    { range: [1.86, 2.75], chance: 14.7 }
  ];

  const calculateProbability = (target: number) => {
    let probability = 0;
    for (const stat of stats) {
      if (target >= stat.range[1]) {
        probability += stat.chance;
      } else if (target >= stat.range[0]) {
        // Interpolate within the range
        const rangeSize = stat.range[1] - stat.range[0];
        const portion = (target - stat.range[0]) / rangeSize;
        probability += stat.chance * portion;
      }
    }
    return Math.min(100, Math.max(0, probability));
  };

  const probability = calculateProbability(selectedMultiplier);

  const keyStats = [
    { label: "RTP", value: "96%", subtext: "Return to Player percentage" },
    { label: "House Edge", value: "4%", subtext: "Casino's statistical advantage" },
    { label: "Volatility", value: "High", subtext: "Risk level of the game" },
    { label: "Max Multiplier", value: "1000x", subtext: "Theoretical maximum multiplier" }
  ];

  const crashProbabilities = [
    { label: "1.01x and over", value: "95.4%", subtext: "Requires 100x stake to recover loss" },
    { label: "1.05x and over", value: "91.7%", subtext: "Requires 20x stake to recover loss" },
    { label: "1.50x and over", value: "65.3%", subtext: "Requires 3x stake to recover loss" },
    { label: "2.00x and over", value: "49.0%", subtext: "Requires 2x stake to recover loss" }
  ];

  return (
    <div className="space-y-8">
      {/* Basic Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {keyStats.map((stat, index) => (
          <div key={index} className="bg-[#1F2937] p-6 rounded-xl">
            <h3 className="text-gray-400 text-sm mb-2">{stat.label}</h3>
            <p className="text-3xl font-bold text-green-400 mb-2">{stat.value}</p>
            <p className="text-sm text-gray-400">{stat.subtext}</p>
          </div>
        ))}
      </div>

      {/* Multiplier Calculator */}
      <div className="bg-[#1F2937] p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-blue-400 mb-6">Crash Multiplier Calculator</h3>
        
        <div className="text-center mb-8">
          <span className="text-4xl font-bold text-blue-400">{selectedMultiplier.toFixed(2)}x</span>
        </div>
        
        <div className="relative w-full h-2 bg-gray-700 rounded-full mb-8">
          <div 
            className="absolute h-full bg-blue-500 rounded-full"
            style={{ width: `${probability}%` }}
          />
        </div>

        <input
          type="range"
          min="1"
          max="5"
          step="0.01"
          value={selectedMultiplier}
          onChange={(e) => setSelectedMultiplier(parseFloat(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
        />

        <div className="grid grid-cols-2 gap-8 mt-8">
          <div className="text-center">
            <h3 className="text-gray-400 text-sm mb-2">Probability Under {selectedMultiplier.toFixed(2)}x</h3>
            <p className="text-2xl font-bold text-green-400">{probability.toFixed(1)}%</p>
          </div>
          <div className="text-center">
            <h3 className="text-gray-400 text-sm mb-2">Required Multiplier on Loss</h3>
            <p className="text-2xl font-bold text-blue-400">{(100 / (100 - probability)).toFixed(2)}x</p>
          </div>
        </div>
      </div>

      {/* Key Crash Probabilities */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {crashProbabilities.map((stat, index) => (
          <div key={index} className="bg-[#1F2937] p-6 rounded-xl">
            <h3 className="text-gray-400 text-sm mb-2">{stat.label}</h3>
            <p className="text-3xl font-bold text-green-400 mb-2">{stat.value}</p>
            <p className="text-sm text-gray-400">{stat.subtext}</p>
          </div>
        ))}
      </div>

      {/* Crash Probability Distribution */}
      <div className="bg-[#1F2937] p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-blue-400 mb-6">Crash Probability Distribution</h3>
        {stats.map((stat, index) => (
          <div key={index} className="space-y-2 mb-4">
            <div className="flex justify-between text-sm text-gray-400 mb-1">
              <span>{stat.range[0].toFixed(2)}x - {stat.range[1].toFixed(2)}x</span>
              <span>{stat.chance}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className={`h-full rounded-full ${
                  selectedMultiplier >= stat.range[0] && selectedMultiplier <= stat.range[1]
                    ? 'bg-blue-500'
                    : selectedMultiplier > stat.range[1]
                    ? 'bg-green-500'
                    : 'bg-gray-600'
                }`}
                style={{ width: `${stat.chance * 3}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Optimal Strategy */}
      <div className="bg-[#1F2937] p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-blue-400 mb-4">Optimal Cash-out Points</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xl">
              1.5x
            </div>
            <div>
              <h4 className="font-semibold text-white">Conservative Strategy</h4>
              <p className="text-gray-400">Consistent returns with 65.3% win rate</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold text-xl">
              2.0x
            </div>
            <div>
              <h4 className="font-semibold text-white">Balanced Strategy</h4>
              <p className="text-gray-400">Equal win/loss probability with higher returns</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-xl">
              3.0x
            </div>
            <div>
              <h4 className="font-semibold text-white">Aggressive Strategy</h4>
              <p className="text-gray-400">Higher risk with 32.7% win rate but 3x returns</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrashStats;
