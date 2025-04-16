import React, { useState, useEffect } from 'react';

interface VIPLevel {
  name: string;
  requiredBet: number;
}

const VIPCalculator: React.FC = () => {
  const [currentVIP, setCurrentVIP] = useState<string>('Bronze');
  const [progressPercentage, setProgressPercentage] = useState<number>(0);
  const [requiredBet, setRequiredBet] = useState<number>(0);
  
  const vipLevels: VIPLevel[] = [
    { name: 'Unranked', requiredBet: 0 },
    { name: 'Bronze', requiredBet: 10000 },
    { name: 'Silver', requiredBet: 40000 },
    { name: 'Gold', requiredBet: 60000 },
    { name: 'Platinum I', requiredBet: 150000 },
    { name: 'Platinum II', requiredBet: 250000 },
    { name: 'Platinum III', requiredBet: 500000 },
    { name: 'Platinum IV', requiredBet: 1500000 },
    { name: 'Platinum V', requiredBet: 2500000 },
    { name: 'Diamond', requiredBet: 2500000 }
  ];
  

  
  // Format number as currency
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  };
  
  // Format large numbers with commas
  const formatNumber = (value: number): string => {
    return new Intl.NumberFormat('en-US').format(value);
  };
  
  // Calculate required bet to next level
  useEffect(() => {
    const calculateRequiredBet = () => {
      const currentIndex = vipLevels.findIndex(level => level.name === currentVIP);
      
      if (currentIndex === vipLevels.length - 1) {
        // Already at highest level
        setRequiredBet(0);
        return;
      }
      
      const currentLevelBet = vipLevels[currentIndex].requiredBet;
      const nextLevelBet = vipLevels[currentIndex + 1].requiredBet;
      const totalRequired = nextLevelBet - currentLevelBet;
      const completed = totalRequired * (progressPercentage / 100);
      const remaining = totalRequired - completed;
      
      setRequiredBet(remaining);
    };
    
    calculateRequiredBet();
  }, [currentVIP, progressPercentage]);
  
  return (
    <div className="bg-[#1A1E2E] rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-6">VIP Level Calculator</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="vipLevel" className="block text-gray-300 mb-2">
            Current VIP Level
          </label>
          <select
            id="vipLevel"
            value={currentVIP}
            onChange={(e) => setCurrentVIP(e.target.value)}
            className="w-full bg-gray-800 text-white border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {vipLevels.map((level, index) => (
              <option key={index} value={level.name}>
                {level.name}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="progressPercentage" className="block text-gray-300 mb-2">
            Progress Percentage: {progressPercentage}%
          </label>
          <input
            id="progressPercentage"
            type="range"
            min="0"
            max="99"
            value={progressPercentage}
            onChange={(e) => setProgressPercentage(Number(e.target.value))}
            className="w-full bg-gray-800 accent-blue-500"
          />
          <input
            type="number"
            min="0"
            max="99"
            value={progressPercentage}
            onChange={(e) => setProgressPercentage(Number(e.target.value))}
            className="mt-2 w-full bg-gray-800 text-white border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      
      <div className="bg-gray-800 rounded-lg p-6 mb-6">
        <h3 className="text-xl font-bold text-white mb-4">Results</h3>
        
        {currentVIP !== 'Diamond' ? (
          <>
            <p className="text-gray-300 mb-2">
              Next VIP Level: <span className="text-yellow-400 font-bold">
                {vipLevels[vipLevels.findIndex(level => level.name === currentVIP) + 1]?.name || 'None'}
              </span>
            </p>
            <p className="text-gray-300 mb-2">
              Required Bet to Next Level: <span className="text-green-400 font-bold">
                {formatCurrency(requiredBet)}
              </span>
            </p>
            <p className="text-gray-300">
              Total Progress: <span className="text-blue-400 font-bold">
                {progressPercentage}%
              </span>
            </p>
          </>
        ) : (
          <p className="text-yellow-400 font-bold">
            Congratulations! You've reached the highest VIP level.
          </p>
        )}
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-white">
          <thead>
            <tr className="bg-gray-800">
              <th className="px-4 py-2 text-left">VIP Level</th>
              <th className="px-4 py-2 text-left">Required Bet</th>
            </tr>
          </thead>
          <tbody>
            {vipLevels.map((level, index) => (
              <tr 
                key={index} 
                className={`border-t border-gray-700 ${currentVIP === level.name ? 'bg-blue-900 bg-opacity-30' : ''}`}
              >
                <td className="px-4 py-2">{level.name}</td>
                <td className="px-4 py-2">{formatNumber(level.requiredBet)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 text-gray-400 text-sm">
        <p>This calculator shows how much more you need to bet to reach the next VIP level based on your current progress.</p>
        <p>Adjust the slider or enter a percentage to see how your progress affects the required bet amount.</p>
      </div>
    </div>
  );
};

export default VIPCalculator;
