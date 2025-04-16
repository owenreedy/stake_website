import React from 'react';

const WeeklyBonusTab: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="bg-[#1A1E2E] rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-4">Weekly Reload Bonus</h2>
        <p className="text-gray-300">
          Claim your weekly reload bonus based on your VIP level. The higher your VIP level, the greater percentage bonus you'll receive each week.
        </p>
      </div>
      
      <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-lg p-6 shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white mb-2">Your Weekly Bonus</h2>
            <div className="text-3xl font-bold text-yellow-400">5%</div>
            <p className="text-gray-300 mt-2">Next claim available: 3 days</p>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-bold">
              Claim Bonus
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-[#1A1E2E] rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-bold text-white mb-4">How Weekly Bonuses Work</h2>
        <div className="space-y-4 text-gray-300">
          <p>
            Weekly bonuses are reload bonuses that you can claim once per week. The bonus percentage is determined by your current VIP level, and the bonus amount is calculated based on your deposit.
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Make a deposit of at least $10</li>
            <li>Click the "Claim Bonus" button to activate your weekly bonus</li>
            <li>Your deposit will be matched by the percentage corresponding to your VIP level</li>
            <li>Bonus funds must be wagered 10x before withdrawal</li>
            <li>Weekly bonuses reset every Monday at 00:00 UTC</li>
          </ol>
        </div>
      </div>
      
      <div className="bg-[#1A1E2E] rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-bold text-white mb-4">Weekly Bonus Rates</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-white">
            <thead>
              <tr className="bg-gray-800">
                <th className="px-4 py-2 text-left">VIP Level</th>
                <th className="px-4 py-2 text-left">Bonus Percentage</th>
                <th className="px-4 py-2 text-left">Max Bonus Amount</th>
                <th className="px-4 py-2 text-left">Example (on $100 deposit)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-700">
                <td className="px-4 py-2">Bronze</td>
                <td className="px-4 py-2">5%</td>
                <td className="px-4 py-2">$50</td>
                <td className="px-4 py-2">$5</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="px-4 py-2">Silver</td>
                <td className="px-4 py-2">10%</td>
                <td className="px-4 py-2">$100</td>
                <td className="px-4 py-2">$10</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="px-4 py-2">Gold</td>
                <td className="px-4 py-2">15%</td>
                <td className="px-4 py-2">$200</td>
                <td className="px-4 py-2">$15</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="px-4 py-2">Platinum I</td>
                <td className="px-4 py-2">20%</td>
                <td className="px-4 py-2">$300</td>
                <td className="px-4 py-2">$20</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="px-4 py-2">Platinum II</td>
                <td className="px-4 py-2">25%</td>
                <td className="px-4 py-2">$500</td>
                <td className="px-4 py-2">$25</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="px-4 py-2">Platinum III</td>
                <td className="px-4 py-2">30%</td>
                <td className="px-4 py-2">$750</td>
                <td className="px-4 py-2">$30</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="px-4 py-2">Platinum IV</td>
                <td className="px-4 py-2">35%</td>
                <td className="px-4 py-2">$1,000</td>
                <td className="px-4 py-2">$35</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="px-4 py-2">Platinum V</td>
                <td className="px-4 py-2">40%</td>
                <td className="px-4 py-2">$1,500</td>
                <td className="px-4 py-2">$40</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="px-4 py-2">Diamond</td>
                <td className="px-4 py-2">50%</td>
                <td className="px-4 py-2">$2,500</td>
                <td className="px-4 py-2">$50</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="bg-[#1A1E2E] rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-bold text-white mb-4">Weekly Bonus History</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-white">
            <thead>
              <tr className="bg-gray-800">
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">VIP Level</th>
                <th className="px-4 py-2 text-left">Deposit Amount</th>
                <th className="px-4 py-2 text-left">Bonus Percentage</th>
                <th className="px-4 py-2 text-left">Bonus Amount</th>
                <th className="px-4 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-700">
                <td className="px-4 py-2">Apr 8, 2025</td>
                <td className="px-4 py-2">Bronze</td>
                <td className="px-4 py-2">$100</td>
                <td className="px-4 py-2">5%</td>
                <td className="px-4 py-2">$5</td>
                <td className="px-4 py-2"><span className="text-green-400">Completed</span></td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="px-4 py-2">Apr 1, 2025</td>
                <td className="px-4 py-2">Bronze</td>
                <td className="px-4 py-2">$50</td>
                <td className="px-4 py-2">5%</td>
                <td className="px-4 py-2">$2.50</td>
                <td className="px-4 py-2"><span className="text-green-400">Completed</span></td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="px-4 py-2">Mar 25, 2025</td>
                <td className="px-4 py-2">Bronze</td>
                <td className="px-4 py-2">$75</td>
                <td className="px-4 py-2">5%</td>
                <td className="px-4 py-2">$3.75</td>
                <td className="px-4 py-2"><span className="text-green-400">Completed</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WeeklyBonusTab;
