import React from 'react';
import GamesGrid from '../components/GamesGrid';

const Home: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-[#1A1E2E] rounded-lg p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-white mb-4">Welcome to Stake.us Games</h1>
        <h2 className="text-gray-300">
          Disclaimer - This site is not affiliated with Stake.us. This is not finacial advice. (Website Name) is not responsible for any money lose. Gamble responsibly.
        </h2>
      </div>
      
        <div className="bg-[#1A1E2E] rounded-lg p-6 shadow-lg">
            <h1 className="text-2xl font-bold text-white mb-4"> About (Website Name)</h1>
            <p className="text-gray-300">
            We are 2 college kids who found a intrest in stake.us. we have been playing for a while and have learned a lot about the games. We wanted to share our knowledge with the world. We have studied and tested many strategies to maximize winnings.
            
            </p>
        </div>
    </div>
  );
};

export default Home;
