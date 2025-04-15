import React from 'react';
import { useParams } from 'react-router-dom';
import { games } from '../config/gameContent';
import PlinkoStats from '../components/stats/PlinkoStats';
import MinesStats from '../components/stats/MinesStats';
import CrashStats from '../components/stats/CrashStats';
import BlackjackStats from '../components/stats/BlackjackStats';
import DiceStats from '../components/stats/DiceStats';
import TomeOfLifeStats from '../components/stats/TomeOfLifeStats';
import AutoBetStrategy from '../components/AutoBetStrategy';

const Stats: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="bg-[#1A1E2E] rounded-lg p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-white mb-4">Stake.us Game Statistics</h1>
        <p className="text-gray-300">
          This page is to show all the stats we could collect on Stake.us games. 
        </p>
      </div>

      <div className="bg-[#1A1E2E] rounded-lg p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-white mb-4">Basic statiscal things we found</h1>
        <p className="text-gray-300">
          The safest times to gamble are in the moring times on week days. We believe that they rig the most popular hours to be more risky. So late at night and on the weekends we have found that more loses come.  
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#1A1E2E] rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-bold text-white mb-4">Plinko</h2>
          <PlinkoStats />
        </div>
        
        <div className="bg-[#1A1E2E] rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-bold text-white mb-4">Mines</h2>
          <MinesStats />
        </div>
        
        <div className="bg-[#1A1E2E] rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-bold text-white mb-4">Crash</h2>
          <CrashStats />
        </div>
        
        <div className="bg-[#1A1E2E] rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-bold text-white mb-4">Blackjack</h2>
          <BlackjackStats />
        </div>
        
        <div className="bg-[#1A1E2E] rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-bold text-white mb-4">Dice</h2>
          <DiceStats />
        </div>
        
        <div className="bg-[#1A1E2E] rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-bold text-white mb-4">Tome of Life</h2>
          <TomeOfLifeStats />
        </div>
      </div>
    </div>
  );
};

export default Stats;
