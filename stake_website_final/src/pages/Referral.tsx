import React from 'react';

const Referral: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="bg-[#1A1E2E] rounded-lg p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-white mb-4">Referral Program</h1>
        <p className="text-gray-300">
          Share Stake.us with your friends and earn rewards! Our referral program offers benefits for both you and the people you refer.
        </p>
      </div>
      
      <div className="bg-[#1A1E2E] rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-bold text-white mb-4">Your Referral Code</h2>
        <div className="flex items-center space-x-4">
          <div className="bg-gray-800 p-3 rounded-lg flex-grow">
            <code className="text-yellow-400 text-lg font-mono">STAKEGUIDE2025</code>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
            Copy
          </button>
        </div>
        <p className="text-gray-400 mt-3">
          Share this code with friends to earn rewards when they sign up.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#1A1E2E] rounded-lg p-6 shadow-lg">
          <div className="text-blue-400 text-4xl font-bold mb-2">1</div>
          <h3 className="text-lg font-bold text-white mb-2">Share Your Code</h3>
          <p className="text-gray-300">
            Share your unique referral code with friends through social media, email, or messaging apps.
          </p>
        </div>
        
        <div className="bg-[#1A1E2E] rounded-lg p-6 shadow-lg">
          <div className="text-blue-400 text-4xl font-bold mb-2">2</div>
          <h3 className="text-lg font-bold text-white mb-2">Friends Sign Up</h3>
          <p className="text-gray-300">
            Your friends create an account using your referral code during registration.
          </p>
        </div>
        
        <div className="bg-[#1A1E2E] rounded-lg p-6 shadow-lg">
          <div className="text-blue-400 text-4xl font-bold mb-2">3</div>
          <h3 className="text-lg font-bold text-white mb-2">Earn Rewards</h3>
          <p className="text-gray-300">
            Receive bonus rewards for each friend who signs up and plays using your code.
          </p>
        </div>
      </div>
      
      <div className="bg-[#1A1E2E] rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-bold text-white mb-4">Referral Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-white">0</div>
            <div className="text-gray-400">Total Referrals</div>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-white">$0.00</div>
            <div className="text-gray-400">Earnings</div>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-white">0</div>
            <div className="text-gray-400">Active Referrals</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referral;
