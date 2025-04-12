import React from 'react';

interface PlinkoStatsProps {}

const PlinkoStats: React.FC<PlinkoStatsProps> = () => {
  const [activeTab, setActiveTab] = React.useState<'low' | 'medium' | 'high'>('low');

  return (
    <div className="space-y-8">
      {/* Basic Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="bg-[#1F2937] p-6 rounded-xl">
          <h3 className="text-gray-400 text-sm mb-2">House Edge</h3>
          <p className="text-3xl font-bold text-green-400 mb-2">1.00%</p>
          <p className="text-sm text-gray-400">Casino's statistical advantage</p>
        </div>
        <div className="bg-[#1F2937] p-6 rounded-xl">
          <h3 className="text-gray-400 text-sm mb-2">RTP</h3>
          <p className="text-3xl font-bold text-green-400 mb-2">99.00%</p>
          <p className="text-sm text-gray-400">Return to Player percentage</p>
        </div>
        <div className="bg-[#1F2937] p-6 rounded-xl">
          <h3 className="text-gray-400 text-sm mb-2">Risk Levels</h3>
          <p className="text-3xl font-bold text-blue-400 mb-2">3</p>
          <p className="text-sm text-gray-400">Low, Medium, High</p>
        </div>
        <div className="bg-[#1F2937] p-6 rounded-xl">
          <h3 className="text-gray-400 text-sm mb-2">Row Options</h3>
          <p className="text-3xl font-bold text-blue-400 mb-2">8-16</p>
          <p className="text-sm text-gray-400">Customizable pin layout</p>
        </div>
      </div>

      {/* Risk Level Tabs */}
      <div className="space-y-6">
        <div className="flex border-b border-gray-700">
          <button
            className={`py-2 px-4 font-medium ${
              activeTab === 'low' 
                ? 'text-blue-400 border-b-2 border-blue-400' 
                : 'text-gray-400 hover:text-gray-300'
            }`}
            onClick={() => setActiveTab('low')}
          >
            Low Risk
          </button>
          <button
            className={`py-2 px-4 font-medium ${
              activeTab === 'medium' 
                ? 'text-blue-400 border-b-2 border-blue-400' 
                : 'text-gray-400 hover:text-gray-300'
            }`}
            onClick={() => setActiveTab('medium')}
          >
            Medium Risk
          </button>
          <button
            className={`py-2 px-4 font-medium ${
              activeTab === 'high' 
                ? 'text-blue-400 border-b-2 border-blue-400' 
                : 'text-gray-400 hover:text-gray-300'
            }`}
            onClick={() => setActiveTab('high')}
          >
            High Risk
          </button>
        </div>

        {/* Low Risk Table */}
        {activeTab === 'low' && (
          <div>
            <p className="text-gray-300 mb-4">
              For players looking to minimize volatility while playing Plinko, these options help manage your bankroll
              while offering a more consistent gaming experience.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b border-gray-700">
                    <th className="pb-4 text-gray-400">Risk/Pins</th>
                    <th className="pb-4 text-gray-400"># of Destinations</th>
                    <th className="pb-4 text-gray-400">Min Win</th>
                    <th className="pb-4 text-gray-400">Max Win</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">Low/8 9</td>
                    <td className="py-4 text-white">0.5</td>
                    <td className="py-4 text-white">5.6</td>
                    <td className="py-4 text-white">-</td>
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">Low/9 10</td>
                    <td className="py-4 text-white">0.7</td>
                    <td className="py-4 text-white">5.6</td>
                    <td className="py-4 text-white">-</td>
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">Low/10 11</td>
                    <td className="py-4 text-white">0.5</td>
                    <td className="py-4 text-white">8.9</td>
                    <td className="py-4 text-white">-</td>
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">Low/11 12</td>
                    <td className="py-4 text-white">0.7</td>
                    <td className="py-4 text-white">8.4</td>
                    <td className="py-4 text-white">-</td>
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">Low/12 13</td>
                    <td className="py-4 text-white">0.5</td>
                    <td className="py-4 text-white">10</td>
                    <td className="py-4 text-white">-</td>
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">Low/13 14</td>
                    <td className="py-4 text-white">0.7</td>
                    <td className="py-4 text-white">8.1</td>
                    <td className="py-4 text-white">-</td>
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">Low/14 15</td>
                    <td className="py-4 text-white">0.5</td>
                    <td className="py-4 text-white">7.1</td>
                    <td className="py-4 text-white">-</td>
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">Low/15 16</td>
                    <td className="py-4 text-white">0.7</td>
                    <td className="py-4 text-white">15</td>
                    <td className="py-4 text-white">-</td>
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">Low/16 17</td>
                    <td className="py-4 text-white">0.5</td>
                    <td className="py-4 text-white">16</td>
                    <td className="py-4 text-white">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Medium Risk Table */}
        {activeTab === 'medium' && (
          <div>
            <p className="text-gray-300 mb-4">
              Medium-risk playing options offer a suitable choice for players seeking a balance between
              risk and gaming excitement. These options provide an opportunity for greater wins while still
              maintaining a manageable level of risk.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b border-gray-700">
                    <th className="pb-4 text-gray-400">Risk/Pins</th>
                    <th className="pb-4 text-gray-400"># of Destinations</th>
                    <th className="pb-4 text-gray-400">Min Win</th>
                    <th className="pb-4 text-gray-400">Max Win</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">Medium/8</td>
                    <td className="py-4 text-white">9</td>
                    <td className="py-4 text-white">0.4</td>
                    <td className="py-4 text-white">13</td>
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">Medium/9</td>
                    <td className="py-4 text-white">10</td>
                    <td className="py-4 text-white">0.5</td>
                    <td className="py-4 text-white">18</td>
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">Medium/10</td>
                    <td className="py-4 text-white">11</td>
                    <td className="py-4 text-white">0.4</td>
                    <td className="py-4 text-white">22</td>
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">Medium/14</td>
                    <td className="py-4 text-white">15</td>
                    <td className="py-4 text-white">0.2</td>
                    <td className="py-4 text-white">58</td>
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">Medium/15</td>
                    <td className="py-4 text-white">16</td>
                    <td className="py-4 text-white">0.3</td>
                    <td className="py-4 text-white">88</td>
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">Medium/16</td>
                    <td className="py-4 text-white">17</td>
                    <td className="py-4 text-white">0.3</td>
                    <td className="py-4 text-white">110</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* High Risk Table */}
        {activeTab === 'high' && (
          <div>
            <p className="text-gray-300 mb-4">
              For players who enjoy taking on more risk for the chance of higher wins, the high-risk playing
              options are a perfect choice. These options come with increased risk, but the potential for
              substantial wins is also greater.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b border-gray-700">
                    <th className="pb-4 text-gray-400">Risk/Pins</th>
                    <th className="pb-4 text-gray-400"># of Destinations</th>
                    <th className="pb-4 text-gray-400">Min Win</th>
                    <th className="pb-4 text-gray-400">Max Win</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">High/8 9</td>
                    <td className="py-4 text-white">0.2</td>
                    <td className="py-4 text-white">29</td>
                    <td className="py-4 text-white">-</td>
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">High/9 10</td>
                    <td className="py-4 text-white">0.2</td>
                    <td className="py-4 text-white">43</td>
                    <td className="py-4 text-white">-</td>
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">High/10</td>
                    <td className="py-4 text-white">11</td>
                    <td className="py-4 text-white">0.2</td>
                    <td className="py-4 text-white">76</td>
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">High/11</td>
                    <td className="py-4 text-white">12</td>
                    <td className="py-4 text-white">0.2</td>
                    <td className="py-4 text-white">120</td>
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">High/12</td>
                    <td className="py-4 text-white">13</td>
                    <td className="py-4 text-white">0.2</td>
                    <td className="py-4 text-white">170</td>
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">High/13</td>
                    <td className="py-4 text-white">14</td>
                    <td className="py-4 text-white">0.2</td>
                    <td className="py-4 text-white">260</td>
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">High/14</td>
                    <td className="py-4 text-white">15</td>
                    <td className="py-4 text-white">0.2</td>
                    <td className="py-4 text-white">420</td>
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">High/15</td>
                    <td className="py-4 text-white">16</td>
                    <td className="py-4 text-white">0.2</td>
                    <td className="py-4 text-white">620</td>
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">High/16</td>
                    <td className="py-4 text-white">17</td>
                    <td className="py-4 text-white">0.2</td>
                    <td className="py-4 text-white">1,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Visual Representation */}
      <div className="bg-[#1F2937] p-6 rounded-xl">
        <h3 className="text-xl font-semibold text-blue-400 mb-4">Pin Pyramid Visualization</h3>
        <div className="relative h-64 bg-[#111827] rounded-lg flex items-center justify-center">
          <div className="text-center text-gray-400">
            <div className="mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            <p>Pin Pyramid Visualization</p>
            <p className="text-sm mt-2">Interactive visualization would appear here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlinkoStats;
