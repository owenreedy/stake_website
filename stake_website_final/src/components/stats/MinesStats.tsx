import React, { useState } from 'react';

interface MinesStatsProps {}

const MinesStats: React.FC<MinesStatsProps> = () => {
  const [selectedMines, setSelectedMines] = useState(5);
  
  // Data from Excel file
  const minesData = [
    { mines: 1, winPercentage: 0.96, cashOut: 1.03 },
    { mines: 2, winPercentage: 0.92, cashOut: 1.08 },
    { mines: 3, winPercentage: 0.88, cashOut: 1.12 },
    { mines: 4, winPercentage: 0.84, cashOut: 1.18 },
    { mines: 5, winPercentage: 0.80, cashOut: 1.24 },
    { mines: 6, winPercentage: 0.76, cashOut: 1.30 },
    { mines: 7, winPercentage: 0.72, cashOut: 1.37 },
    { mines: 8, winPercentage: 0.68, cashOut: 1.46 },
    { mines: 9, winPercentage: 0.64, cashOut: 1.55 },
    { mines: 10, winPercentage: 0.60, cashOut: 1.65 },
    { mines: 11, winPercentage: 0.56, cashOut: 1.77 },
    { mines: 12, winPercentage: 0.52, cashOut: 1.90 },
    { mines: 13, winPercentage: 0.48, cashOut: 2.06 },
    { mines: 14, winPercentage: 0.44, cashOut: 2.25 },
    { mines: 15, winPercentage: 0.40, cashOut: 2.47 },
    { mines: 16, winPercentage: 0.36, cashOut: 2.75 },
    { mines: 17, winPercentage: 0.32, cashOut: 3.09 },
    { mines: 18, winPercentage: 0.28, cashOut: 3.54 },
    { mines: 19, winPercentage: 0.24, cashOut: 4.13 },
    { mines: 20, winPercentage: 0.20, cashOut: 4.95 },
    { mines: 21, winPercentage: 0.16, cashOut: 6.19 },
    { mines: 22, winPercentage: 0.12, cashOut: 8.25 },
    { mines: 23, winPercentage: 0.08, cashOut: 12.38 },
    { mines: 24, winPercentage: 0.04, cashOut: 24.75 }
  ];
  
  const currentData = minesData.find(data => data.mines === selectedMines) || minesData[4];
  
  // Determine risk level based on number of mines
  const getRiskLevel = (mines: number) => {
    if (mines <= 5) return { level: 'Low', color: 'text-green-400' };
    if (mines <= 15) return { level: 'Medium', color: 'text-yellow-400' };
    return { level: 'High', color: 'text-red-400' };
  };
  
  const riskInfo = getRiskLevel(selectedMines);

  return (
    <div className="space-y-8">
      {/* Basic Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="bg-[#1F2937] p-6 rounded-xl">
          <h3 className="text-gray-400 text-sm mb-2">RTP</h3>
          <p className="text-3xl font-bold text-green-400 mb-2">99%</p>
          <p className="text-sm text-gray-400">Return to Player percentage</p>
        </div>
        <div className="bg-[#1F2937] p-6 rounded-xl">
          <h3 className="text-gray-400 text-sm mb-2">House Edge</h3>
          <p className="text-3xl font-bold text-green-400 mb-2">1%</p>
          <p className="text-sm text-gray-400">Casino's statistical advantage</p>
        </div>
        <div className="bg-[#1F2937] p-6 rounded-xl">
          <h3 className="text-gray-400 text-sm mb-2">Volatility</h3>
          <p className="text-3xl font-bold text-blue-400 mb-2">Adjustable</p>
          <p className="text-sm text-gray-400">Based on mines selected</p>
        </div>
        <div className="bg-[#1F2937] p-6 rounded-xl">
          <h3 className="text-gray-400 text-sm mb-2">Grid Size</h3>
          <p className="text-3xl font-bold text-blue-400 mb-2">5×5</p>
          <p className="text-sm text-gray-400">25 total tiles</p>
        </div>
      </div>

      {/* Mines Selector */}
      <div className="bg-[#1F2937] p-6 rounded-xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-blue-400">Mines Calculator</h3>
          <div className={`px-3 py-1 rounded-full ${riskInfo.color} bg-opacity-20 text-sm font-medium`}>
            {riskInfo.level} Risk
          </div>
        </div>
        
        <div className="text-center mb-8">
          <span className="text-4xl font-bold text-blue-400">{selectedMines}</span>
          <span className="text-xl text-gray-400 ml-2">Mines</span>
        </div>
        
        <div className="relative w-full h-2 bg-gray-700 rounded-full mb-8">
          <div 
            className={`absolute h-full rounded-full ${
              selectedMines <= 5 ? 'bg-green-500' : 
              selectedMines <= 15 ? 'bg-yellow-500' : 
              'bg-red-500'
            }`}
            style={{ width: `${(selectedMines / 24) * 100}%` }}
          />
        </div>

        <input
          type="range"
          min="1"
          max="24"
          step="1"
          value={selectedMines}
          onChange={(e) => setSelectedMines(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
        />

        <div className="grid grid-cols-2 gap-8 mt-8">
          <div className="text-center">
            <h3 className="text-gray-400 text-sm mb-2">Win Chance</h3>
            <p className="text-2xl font-bold text-green-400">{(currentData.winPercentage * 100).toFixed(0)}%</p>
          </div>
          <div className="text-center">
            <h3 className="text-gray-400 text-sm mb-2">Multiplier</h3>
            <p className="text-2xl font-bold text-blue-400">{currentData.cashOut}x</p>
          </div>
        </div>
      </div>

      {/* Mines Data Table */}
      <div className="bg-[#1F2937] p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-blue-400 mb-6">Mines Statistics Table</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-gray-700">
                <th className="pb-4 text-gray-400">Mines</th>
                <th className="pb-4 text-gray-400">Win Chance</th>
                <th className="pb-4 text-gray-400">Multiplier</th>
                <th className="pb-4 text-gray-400">Risk Level</th>
              </tr>
            </thead>
            <tbody>
              {minesData.filter((_, index) => index % 3 === 0 || index === 23).map((data) => (
                <tr 
                  key={data.mines} 
                  className={`border-b border-gray-700/50 ${data.mines === selectedMines ? 'bg-blue-900/20' : ''}`}
                  onClick={() => setSelectedMines(data.mines)}
                >
                  <td className="py-4 text-white">{data.mines}</td>
                  <td className="py-4 text-white">{(data.winPercentage * 100).toFixed(0)}%</td>
                  <td className="py-4 text-white">{data.cashOut}x</td>
                  <td className="py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${getRiskLevel(data.mines).color}`}>
                      {getRiskLevel(data.mines).level}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Visual Representation */}
      <div className="bg-[#1F2937] p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-blue-400 mb-4">Grid Visualization</h3>
        <div className="grid grid-cols-5 gap-2 max-w-md mx-auto">
          {Array.from({ length: 25 }).map((_, index) => (
            <div 
              key={index}
              className="aspect-square bg-[#111827] rounded-md flex items-center justify-center"
            >
              <div className="w-full h-full rounded-md flex items-center justify-center">
                {index < selectedMines ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-400 mt-4 text-sm">
          Visual representation of a 5×5 grid with {selectedMines} mines and {25 - selectedMines} safe tiles.
        </p>
      </div>
    </div>
  );
};

export default MinesStats;
