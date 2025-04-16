import React, { useState, useEffect } from 'react';

interface BetRow {
  betNumber: number;
  betAmount: number;
  netLoss: number;
  neededAmount: number;
}

const BetCalculator: React.FC = () => {
  const [initialBet, setInitialBet] = useState<string>('1.00');
  const [raisePercentage, setRaisePercentage] = useState<string>('210');
  const [rowCount, setRowCount] = useState<number>(10);
  const [betRows, setBetRows] = useState<BetRow[]>([]);
  
  // Format number as currency
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  };
  
  // Calculate bet progression
  useEffect(() => {
    const calculateBets = () => {
      const initialBetValue = parseFloat(initialBet) || 1;
      const raisePercentageValue = parseFloat(raisePercentage) || 100;
      
      const rows: BetRow[] = [];
      let currentBet = initialBetValue;
      let totalLoss = 0;
      
      for (let i = 1; i <= rowCount; i++) {
        if (i === 1) {
          // First row is special case
          currentBet = initialBetValue * (1 + raisePercentageValue / 100);
          totalLoss = initialBetValue;
        } else {
          // Calculate next bet based on raise percentage
          currentBet = currentBet * (1 + raisePercentageValue / 100);
          totalLoss += rows[i - 2].betAmount;
        }
        
        rows.push({
          betNumber: i,
          betAmount: currentBet,
          netLoss: totalLoss,
          neededAmount: currentBet + totalLoss
        });
      }
      
      setBetRows(rows);
    };
    
    calculateBets();
  }, [initialBet, raisePercentage, rowCount]);
  
  return (
    <div className="bg-[#1A1E2E] rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-6">Bet Calculator</h2>
      <p className="text-gray-300 mb-4">
        This calculator helps you understand the progression of bets after consecutive losses using a raise percentage.
        Adjust the parameters below to see how your betting strategy would work over time.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div>
          <label htmlFor="initialBet" className="block text-gray-300 mb-2">
            Bet Amount ($)
          </label>
          <input
            id="initialBet"
            type="number"
            step="0.01"
            min="0.01"
            value={initialBet}
            onChange={(e) => setInitialBet(e.target.value)}
            className="w-full bg-gray-800 text-white border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="raisePercentage" className="block text-gray-300 mb-2">
            % Raise Amount
          </label>
          <input
            id="raisePercentage"
            type="number"
            step="1"
            min="1"
            value={raisePercentage}
            onChange={(e) => setRaisePercentage(e.target.value)}
            className="w-full bg-gray-800 text-white border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="rowCount" className="block text-gray-300 mb-2">
            Number of Rows
          </label>
          <select
            id="rowCount"
            value={rowCount}
            onChange={(e) => setRowCount(Number(e.target.value))}
            className="w-full bg-gray-800 text-white border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value={10}>10 Rows</option>
            <option value={20}>20 Rows</option>
            <option value={30}>30 Rows</option>
            <option value={40}>40 Rows</option>
            <option value={50}>50 Rows</option>
          </select>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-white">
          <thead>
            <tr className="bg-gray-800">
              <th className="px-4 py-2 text-left">#</th>
              <th className="px-4 py-2 text-left">Bet After Loss</th>
              <th className="px-4 py-2 text-left">Net Loss</th>
              <th className="px-4 py-2 text-left">Needed Amount</th>
            </tr>
          </thead>
          <tbody>
            {betRows.map((row) => (
              <tr key={row.betNumber} className="border-t border-gray-700">
                <td className="px-4 py-2">{row.betNumber}</td>
                <td className="px-4 py-2">{formatCurrency(row.betAmount)}</td>
                <td className="px-4 py-2">{formatCurrency(row.netLoss)}</td>
                <td className="px-4 py-2">{formatCurrency(row.neededAmount)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 text-gray-400 text-sm">
        <p>This calculator shows the progression of bet amounts after consecutive losses using the specified raise percentage.</p>
        <p>The "Needed Amount" column represents the total funds required to continue the betting strategy after each loss.</p>
        <p>Use the dropdown menu to view more rows and see the long-term implications of your betting strategy.</p>
      </div>
    </div>
  );
};

export default BetCalculator;
