import React from 'react';
import AutoBetStrategy from '../components/AutoBetStrategy';
import BetCalculator from '../components/BetCalculator';


const AutoBet: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="bg-[#1A1E2E] rounded-lg p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-white mb-4">Auto Bet Strategies</h1>
        <p className="text-gray-300">
          Optimize your gameplay with these automated betting strategies for Stake.us games.
          These strategies are designed to help maximize your potential returns and manage risk effectively.
        </p>
      </div>

      <div className="bg-[#1A1E2E] rounded-lg p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-white mb-4">Best Auto Bet</h1>
        <p className="text-gray-300">
          The best stradegy is the crash conservitive auto bet. If you can cover for 7 loses the only time i have seen it lose is on the weekends. It is the most consistent and safe method we have found.
        </p>
      </div>

      <BetCalculator />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#1A1E2E] rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-bold text-white mb-4">Crash / Limbo Auto Bet</h2>
          <p className="text-gray-300 mb-4">
            Limbo is much more volitile than crash, so prepare for more losses.
            </p>
          <AutoBetStrategy 
            game="Crash"
            strategies={[
              {
                name: "Conservative Auto Bet",
                description: "A low risk and consistent strategy for steady returns.",
                steps: [
                  "Auto cash-out: 1.5x",
                  "On Win: reset bet",
                  "On lose: increase bet by 200% to 250% (250% if bankroll is high)",
                  "Prepare for 5 or 6 loses in a row",
                ]
              },
              {
                name: "Argresive Auto Bet",
                description: "A high risk strategy for maximizing potential returns.",
                steps: [
                  "Auto cash-out: 3.0x",
                  "On Win: reset bet",
                  "On lose: increase bet by 60%",
                  "Prepare for 15 to 18 loses in a row",
                ]
              }
            ]}
          />
        </div>
        
        <div className="bg-[#1A1E2E] rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-bold text-white mb-4">Dragons Tower Auto Bet</h2>
          <p className="text-gray-300 mb-4">
            Dragons Tower is much riskier but it will have large leaps in profit.
            </p>
          <AutoBetStrategy 
            game="Dragons Tower"
            strategies={[
              {
                name: "Conservative Auto Bet",
                description: "A mildly riskier method with big leaps in profit",
                steps: [
                  "Select 3 rows on medium risk",
                  "on Win: reset bet",
                  "on lose: increase bet by 70% - 75%",
                  "Prepare for 13 - 15 loses in a row",
                ]
              },
              {
                name: "Agressive Auto Bet",
                description: "A lot riskier method but with much larger leaps in profit",
                steps: [
                  "Select 4 rows on medium risk",
                  "On win: reset bet",
                  "On lose: increase bet by 50%",
                  "Prepare for 18 - 20 loses in a row",
                ]
              }
            ]}
          />
        </div>
        
        <div className="bg-[#1A1E2E] rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-bold text-white mb-4">Wheel Auto Bet</h2>
          <AutoBetStrategy 
            game="Wheel"
            strategies={[
              {
                name: "",
                description: "A stategy defined by its large leaps in profit",
                steps: [
                  "Medium risk with 30 segments",
                  "On Win: reset bet",
                  "On lose: increase bet by 190% to 250%",
                  "Prepare for 7 - 9 loses in a row",
                ]
              },
            ]}
          />
        </div>
        
        <div className="bg-[#1A1E2E] rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-bold text-white mb-4">Kino Auto Bet</h2>
          <AutoBetStrategy 
            game="Kino"
            strategies={[
              {
                name: "the only keno stratgy",
                description: "has consistent gain with the occasional jump in profit",
                steps: [
                  "Select 10 tiles on classic Risk",
                  "On Win: reset bet",
                  "On lose: increase bet by 200%",
                  "Prepare for 7 - 9 loses in a row",
                ]
              },
              
            ]}
          />
        </div>

        <div className="bg-[#1A1E2E] rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-bold text-white mb-4">Pump Auto Bet</h2>
          <AutoBetStrategy 
            game="pump"
            strategies={[
              {
                name: "the only pump stratgy",
                description: "has consistent gain with the occasional jump in profit",
                steps: [
                  "6 pumps on hard Risk",
                  "On Win: reset bet",
                  "On lose: increase bet by 70% to 75%",
                  "Prepare for 17 - 20 loses in a row",
                ]
              },
              
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default AutoBet;
