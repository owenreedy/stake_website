import React from 'react';

interface AutoBetStrategyProps {
  strategies: string[];
}

const AutoBetStrategy: React.FC<AutoBetStrategyProps> = ({ strategies }) => {
  return (
    <div className="space-y-8">
      <div className="bg-[#1F2937] p-6 rounded-xl">
        <h3 className="text-xl font-bold text-blue-400 mb-4">Auto Bet Strategies</h3>
        <ul className="space-y-4">
          {strategies.map((strategy, index) => (
            <li key={index} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-500 bg-opacity-20 rounded-full flex items-center justify-center text-purple-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-200">{strategy}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AutoBetStrategy;
