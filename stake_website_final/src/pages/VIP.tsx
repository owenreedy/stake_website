import React, { useState } from 'react';
import Tabs from '../components/Tabs';
import VIPProgressTab from '../components/VIPProgressTab';
import MonthlyBonusTab from '../components/MonthlyBonusTab';
import WeeklyBonusTab from '../components/WeeklyBonusTab';

const VIP: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabTitles = ['VIP Progress', 'Monthly Bonus', 'Weekly Bonus'];
  
  return (
    <div className="space-y-8">
      <div className="bg-[#1A1E2E] rounded-lg p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-white mb-4">VIP Program</h1>
        <p className="text-gray-300">
          Join our exclusive VIP program to unlock premium benefits, personalized support, and enhanced rewards.
          Track your progress, claim weekly bonuses, and earn monthly rakeback based on your VIP level.
        </p>
      </div>
      
      
      <div className="bg-[#1A1E2E] rounded-lg p-6 shadow-lg">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabTitles}>
          {activeTab === 0 && <VIPProgressTab />}
          {activeTab === 1 && <MonthlyBonusTab />}
          {activeTab === 2 && <WeeklyBonusTab />}
        </Tabs>
      </div>
    </div>
  );
};

export default VIP;
