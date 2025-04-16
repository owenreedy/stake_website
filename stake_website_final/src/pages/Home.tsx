import React from 'react';
import GamesGrid from '../components/GamesGrid';

const Home: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-[#1A1E2E] rounded-lg p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-white mb-4">Welcome to Stake.us Games</h1>
        <h2 className="text-lg font-semibold text-gray-300 mb-2">Disclaimer:</h2>
        <p className="text-gray-300">
The content provided on this website is for informational and entertainment purposes only. We do not offer or facilitate any form of real-money gambling or betting. All gambling-related advice, tips, and strategies are based on personal opinions and experience and should not be interpreted as guarantees of success.

Gambling involves risk and may result in the loss of your money. Always gamble responsibly and within your means. If you feel that gambling is becoming a problem, please seek help from professional organizations such as BeGambleAware or your local support service.

Users must be 18 years or older (or the legal gambling age in your jurisdiction) to access or use this website. By using this site, you acknowledge that it is your responsibility to comply with your local laws and regulations regarding gambling.

We do not accept any liability for losses incurred through the use of information provided on this website.
        </p>
      </div>
      
        <div className="bg-[#1A1E2E] rounded-lg p-6 shadow-lg">
            <h1 className="text-2xl font-bold text-white mb-4"> About (Website Name)</h1>
            <p className="text-gray-300">
            We're two college students who discovered a passion for Stake.us and the world of online sweepstakes gaming. After spending countless hours exploring the platform and learning the ins and outs of its games, we decided to create a space where we could share what we've learned.

Over time, we've researched, tested, and refined strategies that have helped us better understand game mechanics and maximize potential winnings. Our goal is to share honest insights, tips, and experiences with others who enjoy the thrill of the game just as much as we do.

Whether you're just getting started or looking to level up your game, we’re here to help you play smarter — and maybe have a little fun along the way.
            </p>
        </div>
    </div>
  );
};

export default Home;
