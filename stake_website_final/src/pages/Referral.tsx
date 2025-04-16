import React from 'react';

const Referral: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="bg-[#1A1E2E] rounded-lg p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-white mb-4">Referral Program</h1>
        <p className="text-gray-300 mb-4">
          Join our referral program to earn bonus rewards!
        </p>
        
        
      </div>

      <div className="space-y-8">
        <div className="bg-[#1A1E2E] rounded-lg p-6 shadow-lg">
          <a href="https://stake.us/?c=db2hlOzu" target="_blank" rel="noopener noreferrer">
            <img src= '/images/Banners/StakeBanner.jpg' alt="Referral Program" className="w-full h-auto" />
          </a>
        </div>
      </div>
    
      
      
      <div className="bg-[#1A1E2E] rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-bold text-white mb-4">Referral Code</h2>
        <div className="flex items-center space-x-4">
          <div className="bg-gray-800 p-3 rounded-lg flex-grow">
            <code className="text-yellow-400 text-lg font-mono">db2hlOzu</code>
          </div>
        </div>
        
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#1A1E2E] rounded-lg p-6 shadow-lg">
          <div className="text-blue-400 text-4xl font-bold mb-2">1</div>
          <h3 className="text-lg font-bold text-white mb-2">Go to the link</h3>
          <p className="text-gray-300">
            Use te link above to stake you to stake.us
          </p>
        </div>
        
        <div className="bg-[#1A1E2E] rounded-lg p-6 shadow-lg">
          <div className="text-blue-400 text-4xl font-bold mb-2">2</div>
          <h3 className="text-lg font-bold text-white mb-2">Sign Up</h3>
          <p className="text-gray-300">
            Create a account using the referral code.
          </p>
        </div>
        
        <div className="bg-[#1A1E2E] rounded-lg p-6 shadow-lg">
          <div className="text-blue-400 text-4xl font-bold mb-2">3</div>
          <h3 className="text-lg font-bold text-white mb-2">Earn Rewards</h3>
          <p className="text-gray-300">
            Receive bonus rewards for playing games
          </p>
        </div>
      </div>
    </div>
  );
};

export default Referral;
