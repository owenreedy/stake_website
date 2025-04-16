import React, { useState } from 'react';

const rakebackRates: Record<string, number> = {
  Bronze: 2,
  Silver: 5,
  Gold: 10,
  'Platinum I': 12,
  'Platinum II': 15,
  'Platinum III': 18,
  'Platinum IV': 20,
  'Platinum V': 25,
  Diamond: 30,
};

const MonthlyBonusTab: React.FC = () => {
  const [vipLevel, setVipLevel] = useState<string>('Bronze');
  const bettingVolume = 10000;
  const currentRakeback = rakebackRates[vipLevel];
  const rakebackAmount = ((currentRakeback / 100) * bettingVolume).toFixed(2);

  return (
    <div className="space-y-8">
      <div className="bg-[#1A1E2E] rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-4">Monthly Rakeback Bonus</h2>
        <p className="text-gray-300">
          Earn monthly rakeback based on your VIP level and betting activity. The higher your VIP level, the greater percentage of rakeback you'll receive each month.
        </p>
      </div>

      <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-lg p-6 shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white mb-2">Your Monthly Rakeback</h2>
            <label className="block text-gray-300 mb-2">
              Select VIP Level:
              <select
                value={vipLevel}
                onChange={(e) => setVipLevel(e.target.value)}
                className="ml-2 p-1 bg-[#1A1E2E] text-white rounded"
              >
                {Object.keys(rakebackRates).map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </label>
            <div className="text-3xl font-bold text-yellow-400">{currentRakeback}%</div>
            <p className="text-gray-300 mt-2">
              Based on ${bettingVolume.toLocaleString()} betting volume: ${rakebackAmount}
            </p>
            <p className="text-gray-300 mt-1">Next rakeback payment: 1st of next month</p>
          </div>
        </div>
      </div>
      
      <div className="bg-[#1A1E2E] rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-bold text-white mb-4">How Monthly Rakeback Works</h2>
        <div className="space-y-4 text-gray-300">
          <p>
            Monthly rakeback is calculated based on your total betting volume throughout the month and your VIP level. The rakeback percentage increases as you climb the VIP ladder.
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Rakeback is calculated as a percentage of your total betting volume for the month</li>
            <li>The percentage is determined by your VIP level at the end of the month</li>
            <li>Payments are processed automatically on the 1st of each month</li>
            <li>Funds are added directly to your account balance</li>
          </ol>
        </div>
      </div>
      
      <div className="bg-[#1A1E2E] rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-bold text-white mb-4">Monthly Rakeback Rates</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-white">
            <thead>
              <tr className="bg-gray-800">
                <th className="px-4 py-2 text-left">VIP Level</th>
                <th className="px-4 py-2 text-left">Rakeback Percentage</th>
                <th className="px-4 py-2 text-left">Example (on $10,000 betting volume)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-700">
                <td className="px-4 py-2">Bronze</td>
                <td className="px-4 py-2">2%</td>
                <td className="px-4 py-2">$200</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="px-4 py-2">Silver</td>
                <td className="px-4 py-2">5%</td>
                <td className="px-4 py-2">$500</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="px-4 py-2">Gold</td>
                <td className="px-4 py-2">10%</td>
                <td className="px-4 py-2">$1,000</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="px-4 py-2">Platinum I</td>
                <td className="px-4 py-2">12%</td>
                <td className="px-4 py-2">$1,200</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="px-4 py-2">Platinum II</td>
                <td className="px-4 py-2">15%</td>
                <td className="px-4 py-2">$1,500</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="px-4 py-2">Platinum III</td>
                <td className="px-4 py-2">18%</td>
                <td className="px-4 py-2">$1,800</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="px-4 py-2">Platinum IV</td>
                <td className="px-4 py-2">20%</td>
                <td className="px-4 py-2">$2,000</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="px-4 py-2">Platinum V</td>
                <td className="px-4 py-2">25%</td>
                <td className="px-4 py-2">$2,500</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="px-4 py-2">Diamond</td>
                <td className="px-4 py-2">30%</td>
                <td className="px-4 py-2">$3,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="bg-[#1A1E2E] rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-bold text-white mb-4">Monthly Rakeback History</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-white">
            <thead>
              <tr className="bg-gray-800">
                <th className="px-4 py-2 text-left">Month</th>
                <th className="px-4 py-2 text-left">VIP Level</th>
                <th className="px-4 py-2 text-left">Betting Volume</th>
                <th className="px-4 py-2 text-left">Rakeback Percentage</th>
                <th className="px-4 py-2 text-left">Rakeback Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-700">
                <td className="px-4 py-2">March 2025</td>
                <td className="px-4 py-2">Bronze</td>
                <td className="px-4 py-2">$5,230</td>
                <td className="px-4 py-2">2%</td>
                <td className="px-4 py-2">$104.60</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="px-4 py-2">February 2025</td>
                <td className="px-4 py-2">Bronze</td>
                <td className="px-4 py-2">$3,750</td>
                <td className="px-4 py-2">2%</td>
                <td className="px-4 py-2">$75.00</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="px-4 py-2">January 2025</td>
                <td className="px-4 py-2">Bronze</td>
                <td className="px-4 py-2">$2,100</td>
                <td className="px-4 py-2">2%</td>
                <td className="px-4 py-2">$42.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MonthlyBonusTab;
