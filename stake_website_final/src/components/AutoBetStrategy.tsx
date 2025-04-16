// src/components/AutoBetStrategy.tsx
import React from 'react';

interface Strategy {
  name: string;
  description: string;
  steps: string[];
}

interface AutoBetStrategyProps {
  game: string;
  strategies: Strategy[];
}

const AutoBetStrategy: React.FC<AutoBetStrategyProps> = ({ game, strategies }) => {
  return (
    <div className="space-y-6">
      {strategies.map((strategy, index) => (
        <div key={index} className="bg-gray-800 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-2">{strategy.name}</h3>
          <p className="text-gray-300 mb-4">{strategy.description}</p>
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-400">Implementation Steps:</h4>
            <ul className="list-disc pl-5 space-y-1">
              {strategy.steps.map((step, stepIndex) => (
                <li key={stepIndex} className="text-gray-300">{step}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AutoBetStrategy;
