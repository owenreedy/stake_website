import React from 'react';
import VIPCalculator from '../components/VIPCalculator';

const VIPProgressTab: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="bg-[#1A1E2E] rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-4">VIP Progress</h2>
        <p className="text-gray-300">
          Track your progress towards the next VIP level and see how much more you need to bet to advance.
          Use the calculator below to estimate your requirements based on your current status.
        </p>
      </div>
      
      <VIPCalculator />
      
      <div className="bg-[#1A1E2E] rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-bold text-white mb-4">VIP Benefits Overview</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-white">
            <thead>
              <tr className="bg-gray-800">
                <th className="px-4 py-2 text-left">VIP Level</th>
                <th className="px-4 py-2 text-left">Weekly Bonus</th>
                <th className="px-4 py-2 text-left">Monthly Rakeback</th>
                <th className="px-4 py-2 text-left">Support</th>
                <th className="px-4 py-2 text-left">Additional Benefits</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-700">
                <td className="px-4 py-2">Bronze</td>
                <td className="px-4 py-2">5%</td>
                <td className="px-4 py-2">2%</td>
                <td className="px-4 py-2">Standard</td>
                <td className="px-4 py-2">-</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="px-4 py-2">Silver</td>
                <td className="px-4 py-2">10%</td>
                <td className="px-4 py-2">5%</td>
                <td className="px-4 py-2">Priority</td>
                <td className="px-4 py-2">Withdrawal Limit +25%</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="px-4 py-2">Gold</td>
                <td className="px-4 py-2">15%</td>
                <td className="px-4 py-2">10%</td>
                <td className="px-4 py-2">VIP</td>
                <td className="px-4 py-2">Withdrawal Limit +50%, Exclusive Promotions</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="px-4 py-2">Platinum I</td>
                <td className="px-4 py-2">20%</td>
                <td className="px-4 py-2">12%</td>
                <td className="px-4 py-2">Dedicated Manager</td>
                <td className="px-4 py-2">Withdrawal Limit +75%, Exclusive Promotions</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="px-4 py-2">Platinum II</td>
                <td className="px-4 py-2">25%</td>
                <td className="px-4 py-2">15%</td>
                <td className="px-4 py-2">Dedicated Manager</td>
                <td className="px-4 py-2">Withdrawal Limit +100%, Exclusive Promotions, Custom Rewards</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="px-4 py-2">Platinum III</td>
                <td className="px-4 py-2">30%</td>
                <td className="px-4 py-2">18%</td>
                <td className="px-4 py-2">Dedicated Manager</td>
                <td className="px-4 py-2">Withdrawal Limit +150%, Exclusive Promotions, Custom Rewards</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="px-4 py-2">Platinum IV</td>
                <td className="px-4 py-2">35%</td>
                <td className="px-4 py-2">20%</td>
                <td className="px-4 py-2">Dedicated Manager</td>
                <td className="px-4 py-2">Withdrawal Limit +200%, Exclusive Promotions, Custom Rewards</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="px-4 py-2">Platinum V</td>
                <td className="px-4 py-2">40%</td>
                <td className="px-4 py-2">25%</td>
                <td className="px-4 py-2">Dedicated Manager</td>
                <td className="px-4 py-2">Withdrawal Limit +250%, Exclusive Promotions, Custom Rewards</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="px-4 py-2">Diamond</td>
                <td className="px-4 py-2">50%</td>
                <td className="px-4 py-2">30%</td>
                <td className="px-4 py-2">Executive Manager</td>
                <td className="px-4 py-2">Unlimited Withdrawal, Exclusive Promotions, Custom Rewards, VIP Events</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VIPProgressTab;
