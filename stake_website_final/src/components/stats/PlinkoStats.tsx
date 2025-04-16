import React from 'react';

interface PlinkoStatsProps {}

const PlinkoStats: React.FC<PlinkoStatsProps> = () => {
  const [activeTab, setActiveTab] = React.useState<'8' | '9' | '10' | '11' | '12' | '13' | '14' | '15' | '16'>('8');

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
            onClick={() => setActiveTab('8')}
          >
            8 Rows
          </button>

          <button
            className={`py-2 px-4 font-medium ${
              activeTab === 'medium' 
                ? 'text-blue-400 border-b-2 border-blue-400' 
                : 'text-gray-400 hover:text-gray-300'
            }`}
            onClick={() => setActiveTab('9')}
          >
            9 Rows
          </button>

          <button
            className={`py-2 px-4 font-medium ${
              activeTab === 'high' 
                ? 'text-blue-400 border-b-2 border-blue-400' 
                : 'text-gray-400 hover:text-gray-300'
            }`}
            onClick={() => setActiveTab('10')}
          >
            10 Rows
          </button>
          
          <button
            className={`py-2 px-4 font-medium ${
              activeTab === 'high' 
                ? 'text-blue-400 border-b-2 border-blue-400' 
                : 'text-gray-400 hover:text-gray-300'
            }`}
            onClick={() => setActiveTab('11')}
          >
            11 Rows
          </button>

          <button
            className={`py-2 px-4 font-medium ${
              activeTab === 'high' 
                ? 'text-blue-400 border-b-2 border-blue-400' 
                : 'text-gray-400 hover:text-gray-300'
            }`}
            onClick={() => setActiveTab('12')}
          >
            12 Rows
          </button>

          <button
            className={`py-2 px-4 font-medium ${
              activeTab === 'high' 
                ? 'text-blue-400 border-b-2 border-blue-400' 
                : 'text-gray-400 hover:text-gray-300'
            }`}
            onClick={() => setActiveTab('13')}
          >
            13 Rows
          </button>


          <button
            className={`py-2 px-4 font-medium ${
              activeTab === 'high' 
                ? 'text-blue-400 border-b-2 border-blue-400' 
                : 'text-gray-400 hover:text-gray-300'
            }`}
            onClick={() => setActiveTab('14')}
          >
            14 Rows
          </button>


          <button
            className={`py-2 px-4 font-medium ${
              activeTab === 'high' 
                ? 'text-blue-400 border-b-2 border-blue-400' 
                : 'text-gray-400 hover:text-gray-300'
            }`}
            onClick={() => setActiveTab('15')}
          >
            15 Rows
          </button>

          <button
            className={`py-2 px-4 font-medium ${
              activeTab === 'high' 
                ? 'text-blue-400 border-b-2 border-blue-400' 
                : 'text-gray-400 hover:text-gray-300'
            }`}
            onClick={() => setActiveTab('16')}
          >
            16 Rows
          </button>


        </div>

        {/* Low Risk Table */}
        {activeTab === '8' && (
          <div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b border-gray-700">
                    <th className="pb-4 text-gray-400">Pins</th>
                    <th className="pb-4 text-gray-400">Chance</th>
                    <th className="pb-4 text-gray-400">low</th>
                    <th className="pb-4 text-gray-400">medium</th>
                    <th className="pb-4 text-gray-400">High</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">5</td>
                    <td className="py-4 text-white">0.5</td>
                    <td className="py-4 text-white">0.5</td>
                    <td className="py-4 text-white">0.4</td>
                    <td className="py-4 text-white">0.2</td>
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">4/6</td>  {/* pins */}
                    <td className="py-4 text-white">0.5</td>  {/* Chance */}
                    <td className="py-4 text-white">1.0</td>  {/* Low */}
                    <td className="py-4 text-white">0.7</td>  {/* Medium */}
                    <td className="py-4 text-white">0.3</td>  {/* High */}
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">3/7</td>
                    <td className="py-4 text-white">0.5</td>  {/* Chance */}
                    <td className="py-4 text-white">1.1</td>  {/* Low */}
                    <td className="py-4 text-white">1.3</td>  {/* Medium */}
                    <td className="py-4 text-white">1.5</td>  {/* High */}
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">2/8</td>
                    <td className="py-4 text-white">0.5</td>  {/* Chance */}
                    <td className="py-4 text-white">2.1</td>  {/* Low */}
                    <td className="py-4 text-white">3.0</td>  {/* Medium */}
                    <td className="py-4 text-white">4.0</td>  {/* High */}
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">1/9</td>
                    <td className="py-4 text-white">0.5</td>  {/* Chance */}
                    <td className="py-4 text-white">5.6</td>  {/* Low */}
                    <td className="py-4 text-white">13.0</td>  {/* Medium */}
                    <td className="py-4 text-white">29.0</td>  {/* High */}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Low Risk Table */}
        {activeTab === '9' && (
          <div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b border-gray-700">
                    <th className="pb-4 text-gray-400">Pins</th>
                    <th className="pb-4 text-gray-400">Chance</th>
                    <th className="pb-4 text-gray-400">low</th>
                    <th className="pb-4 text-gray-400">medium</th>
                    <th className="pb-4 text-gray-400">High</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">5/6</td>
                    <td className="py-4 text-white">0.5</td>
                    <td className="py-4 text-white">0.7</td>
                    <td className="py-4 text-white">0.5</td>
                    <td className="py-4 text-white">0.2</td>
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">4/7</td>  {/* pins */}
                    <td className="py-4 text-white">0.5</td>  {/* Chance */}
                    <td className="py-4 text-white">1.0</td>  {/* Low */}
                    <td className="py-4 text-white">0.9</td>  {/* Medium */}
                    <td className="py-4 text-white">0.6</td>  {/* High */}
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">3/8</td>
                    <td className="py-4 text-white">0.5</td>  {/* Chance */}
                    <td className="py-4 text-white">1.6</td>  {/* Low */}
                    <td className="py-4 text-white">1.7</td>  {/* Medium */}
                    <td className="py-4 text-white">2.0</td>  {/* High */}
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">2/9</td>
                    <td className="py-4 text-white">0.5</td>  {/* Chance */}
                    <td className="py-4 text-white">2.0</td>  {/* Low */}
                    <td className="py-4 text-white">4.0</td>  {/* Medium */}
                    <td className="py-4 text-white">7.0</td>  {/* High */}
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">1/10</td>
                    <td className="py-4 text-white">0.5</td>  {/* Chance */}
                    <td className="py-4 text-white">5.6</td>  {/* Low */}
                    <td className="py-4 text-white">18.0</td>  {/* Medium */}
                    <td className="py-4 text-white">43.0</td>  {/* High */}
                  </tr>
                  
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Low Risk Table */}
        {activeTab === '10' && (
          <div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b border-gray-700">
                    <th className="pb-4 text-gray-400">Pins</th>
                    <th className="pb-4 text-gray-400">Chance</th>
                    <th className="pb-4 text-gray-400">low</th>
                    <th className="pb-4 text-gray-400">medium</th>
                    <th className="pb-4 text-gray-400">High</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">6</td>
                    <td className="py-4 text-white">0.5</td>
                    <td className="py-4 text-white">0.5</td>
                    <td className="py-4 text-white">0.4</td>
                    <td className="py-4 text-white">0.2</td>
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">5/7</td>  {/* pins */}
                    <td className="py-4 text-white">0.5</td>  {/* Chance */}
                    <td className="py-4 text-white">1.0</td>  {/* Low */}
                    <td className="py-4 text-white">0.6</td>  {/* Medium */}
                    <td className="py-4 text-white">0.3</td>  {/* High */}
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">4/8</td>
                    <td className="py-4 text-white">0.5</td>  {/* Chance */}
                    <td className="py-4 text-white">1.1</td>  {/* Low */}
                    <td className="py-4 text-white">1.4</td>  {/* Medium */}
                    <td className="py-4 text-white">0.9</td>  {/* High */}
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">3/9</td>
                    <td className="py-4 text-white">0.5</td>  {/* Chance */}
                    <td className="py-4 text-white">1.4</td>  {/* Low */}
                    <td className="py-4 text-white">2.0</td>  {/* Medium */}
                    <td className="py-4 text-white">3.0</td>  {/* High */}
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">2/10</td>
                    <td className="py-4 text-white">0.5</td>  {/* Chance */}
                    <td className="py-4 text-white">3.0</td>  {/* Low */}
                    <td className="py-4 text-white">5.0</td>  {/* Medium */}
                    <td className="py-4 text-white">10.0</td>  {/* High */}
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">1/11</td>
                    <td className="py-4 text-white">0.5</td>  {/* Chance */}
                    <td className="py-4 text-white">8.9</td>  {/* Low */}
                    <td className="py-4 text-white">22.0</td>  {/* Medium */}
                    <td className="py-4 text-white">76.0</td>  {/* High */}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}


        {/* Low Risk Table */}
        {activeTab === '11' && (
          <div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b border-gray-700">
                    <th className="pb-4 text-gray-400">Pins</th>
                    <th className="pb-4 text-gray-400">Chance</th>
                    <th className="pb-4 text-gray-400">low</th>
                    <th className="pb-4 text-gray-400">medium</th>
                    <th className="pb-4 text-gray-400">High</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">6/7</td>
                    <td className="py-4 text-white">0.5</td>
                    <td className="py-4 text-white">0.7</td>
                    <td className="py-4 text-white">0.5</td>
                    <td className="py-4 text-white">0.2</td>
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">5/8</td>  {/* pins */}
                    <td className="py-4 text-white">0.5</td>  {/* Chance */}
                    <td className="py-4 text-white">1.0</td>  {/* Low */}
                    <td className="py-4 text-white">0.7</td>  {/* Medium */}
                    <td className="py-4 text-white">0.4</td>  {/* High */}
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">4/9</td>
                    <td className="py-4 text-white">0.5</td>  {/* Chance */}
                    <td className="py-4 text-white">1.3</td>  {/* Low */}
                    <td className="py-4 text-white">1.8</td>  {/* Medium */}
                    <td className="py-4 text-white">1.4</td>  {/* High */}
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">3/10</td>
                    <td className="py-4 text-white">0.5</td>  {/* Chance */}
                    <td className="py-4 text-white">1.9</td>  {/* Low */}
                    <td className="py-4 text-white">3.0</td>  {/* Medium */}
                    <td className="py-4 text-white">5.2</td>  {/* High */}
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">2/11</td>
                    <td className="py-4 text-white">0.5</td>  {/* Chance */}
                    <td className="py-4 text-white">3.0</td>  {/* Low */}
                    <td className="py-4 text-white">6.0</td>  {/* Medium */}
                    <td className="py-4 text-white">14.0</td>  {/* High */}
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">1/12</td>
                    <td className="py-4 text-white">0.5</td>  {/* Chance */}
                    <td className="py-4 text-white">8.4</td>  {/* Low */}
                    <td className="py-4 text-white">24.0</td>  {/* Medium */}
                    <td className="py-4 text-white">120.0</td>  {/* High */}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}


        {/* Low Risk Table */}
        {activeTab === '12' && (
          <div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b border-gray-700">
                    <th className="pb-4 text-gray-400">Pins</th>
                    <th className="pb-4 text-gray-400">Chance</th>
                    <th className="pb-4 text-gray-400">low</th>
                    <th className="pb-4 text-gray-400">medium</th>
                    <th className="pb-4 text-gray-400">High</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">5</td>
                    <td className="py-4 text-white">0.5</td>
                    <td className="py-4 text-white">0.5</td>
                    <td className="py-4 text-white">0.4</td>
                    <td className="py-4 text-white">0.2</td>
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">4/6</td>  {/* pins */}
                    <td className="py-4 text-white">0.5</td>  {/* Chance */}
                    <td className="py-4 text-white">1.0</td>  {/* Low */}
                    <td className="py-4 text-white">0.7</td>  {/* Medium */}
                    <td className="py-4 text-white">0.2</td>  {/* High */}
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">3/7</td>
                    <td className="py-4 text-white">0.5</td>  {/* Chance */}
                    <td className="py-4 text-white">1.1</td>  {/* Low */}
                    <td className="py-4 text-white">1.3</td>  {/* Medium */}
                    <td className="py-4 text-white">0.7</td>  {/* High */}
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">2/8</td>
                    <td className="py-4 text-white">0.5</td>  {/* Chance */}
                    <td className="py-4 text-white">2.1</td>  {/* Low */}
                    <td className="py-4 text-white">3.0</td>  {/* Medium */}
                    <td className="py-4 text-white">4.0</td>  {/* High */}
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">1/9</td>
                    <td className="py-4 text-white">0.5</td>  {/* Chance */}
                    <td className="py-4 text-white">5.6</td>  {/* Low */}
                    <td className="py-4 text-white">13.0</td>  {/* Medium */}
                    <td className="py-4 text-white">29.0</td>  {/* High */}
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">2/8</td>
                    <td className="py-4 text-white">0.5</td>  {/* Chance */}
                    <td className="py-4 text-white">2.1</td>  {/* Low */}
                    <td className="py-4 text-white">3.0</td>  {/* Medium */}
                    <td className="py-4 text-white">4.0</td>  {/* High */}
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">1/9</td>
                    <td className="py-4 text-white">0.5</td>  {/* Chance */}
                    <td className="py-4 text-white">5.6</td>  {/* Low */}
                    <td className="py-4 text-white">13.0</td>  {/* Medium */}
                    <td className="py-4 text-white">29.0</td>  {/* High */}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}


        {/* Low Risk Table */}
        {activeTab === '13' && (
          <div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b border-gray-700">
                    <th className="pb-4 text-gray-400">Pins</th>
                    <th className="pb-4 text-gray-400">Chance</th>
                    <th className="pb-4 text-gray-400">low</th>
                    <th className="pb-4 text-gray-400">medium</th>
                    <th className="pb-4 text-gray-400">High</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">5</td>
                    <td className="py-4 text-white">0.5</td>
                    <td className="py-4 text-white">0.5</td>
                    <td className="py-4 text-white">0.4</td>
                    <td className="py-4 text-white">0.2</td>
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">4/6</td>  {/* pins */}
                    <td className="py-4 text-white">0.5</td>  {/* Chance */}
                    <td className="py-4 text-white">1.0</td>  {/* Low */}
                    <td className="py-4 text-white">0.7</td>  {/* Medium */}
                    <td className="py-4 text-white">0.3</td>  {/* High */}
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">3/7</td>
                    <td className="py-4 text-white">0.5</td>  {/* Chance */}
                    <td className="py-4 text-white">1.1</td>  {/* Low */}
                    <td className="py-4 text-white">1.3</td>  {/* Medium */}
                    <td className="py-4 text-white">1.5</td>  {/* High */}
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">2/8</td>
                    <td className="py-4 text-white">0.5</td>  {/* Chance */}
                    <td className="py-4 text-white">2.1</td>  {/* Low */}
                    <td className="py-4 text-white">3.0</td>  {/* Medium */}
                    <td className="py-4 text-white">4.0</td>  {/* High */}
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">1/9</td>
                    <td className="py-4 text-white">0.5</td>  {/* Chance */}
                    <td className="py-4 text-white">5.6</td>  {/* Low */}
                    <td className="py-4 text-white">13.0</td>  {/* Medium */}
                    <td className="py-4 text-white">29.0</td>  {/* High */}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}


        {/* Low Risk Table */}
        {activeTab === '14' && (
          <div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b border-gray-700">
                    <th className="pb-4 text-gray-400">Pins</th>
                    <th className="pb-4 text-gray-400">Chance</th>
                    <th className="pb-4 text-gray-400">low</th>
                    <th className="pb-4 text-gray-400">medium</th>
                    <th className="pb-4 text-gray-400">High</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">5</td>
                    <td className="py-4 text-white">0.5</td>
                    <td className="py-4 text-white">0.5</td>
                    <td className="py-4 text-white">0.4</td>
                    <td className="py-4 text-white">0.2</td>
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">4/6</td>  {/* pins */}
                    <td className="py-4 text-white">0.5</td>  {/* Chance */}
                    <td className="py-4 text-white">1.0</td>  {/* Low */}
                    <td className="py-4 text-white">0.7</td>  {/* Medium */}
                    <td className="py-4 text-white">0.3</td>  {/* High */}
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">3/7</td>
                    <td className="py-4 text-white">0.5</td>  {/* Chance */}
                    <td className="py-4 text-white">1.1</td>  {/* Low */}
                    <td className="py-4 text-white">1.3</td>  {/* Medium */}
                    <td className="py-4 text-white">1.5</td>  {/* High */}
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">2/8</td>
                    <td className="py-4 text-white">0.5</td>  {/* Chance */}
                    <td className="py-4 text-white">2.1</td>  {/* Low */}
                    <td className="py-4 text-white">3.0</td>  {/* Medium */}
                    <td className="py-4 text-white">4.0</td>  {/* High */}
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">1/9</td>
                    <td className="py-4 text-white">0.5</td>  {/* Chance */}
                    <td className="py-4 text-white">5.6</td>  {/* Low */}
                    <td className="py-4 text-white">13.0</td>  {/* Medium */}
                    <td className="py-4 text-white">29.0</td>  {/* High */}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}


        {/* Low Risk Table */}
        {activeTab === '15' && (
          <div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b border-gray-700">
                    <th className="pb-4 text-gray-400">Pins</th>
                    <th className="pb-4 text-gray-400">Chance</th>
                    <th className="pb-4 text-gray-400">low</th>
                    <th className="pb-4 text-gray-400">medium</th>
                    <th className="pb-4 text-gray-400">High</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">5</td>
                    <td className="py-4 text-white">0.5</td>
                    <td className="py-4 text-white">0.5</td>
                    <td className="py-4 text-white">0.4</td>
                    <td className="py-4 text-white">0.2</td>
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">4/6</td>  {/* pins */}
                    <td className="py-4 text-white">0.5</td>  {/* Chance */}
                    <td className="py-4 text-white">1.0</td>  {/* Low */}
                    <td className="py-4 text-white">0.7</td>  {/* Medium */}
                    <td className="py-4 text-white">0.3</td>  {/* High */}
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">3/7</td>
                    <td className="py-4 text-white">0.5</td>  {/* Chance */}
                    <td className="py-4 text-white">1.1</td>  {/* Low */}
                    <td className="py-4 text-white">1.3</td>  {/* Medium */}
                    <td className="py-4 text-white">1.5</td>  {/* High */}
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">2/8</td>
                    <td className="py-4 text-white">0.5</td>  {/* Chance */}
                    <td className="py-4 text-white">2.1</td>  {/* Low */}
                    <td className="py-4 text-white">3.0</td>  {/* Medium */}
                    <td className="py-4 text-white">4.0</td>  {/* High */}
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">1/9</td>
                    <td className="py-4 text-white">0.5</td>  {/* Chance */}
                    <td className="py-4 text-white">5.6</td>  {/* Low */}
                    <td className="py-4 text-white">13.0</td>  {/* Medium */}
                    <td className="py-4 text-white">29.0</td>  {/* High */}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}


        {/* Low Risk Table */}
        {activeTab === '16' && (
          <div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b border-gray-700">
                    <th className="pb-4 text-gray-400">Pins</th>
                    <th className="pb-4 text-gray-400">Chance</th>
                    <th className="pb-4 text-gray-400">low</th>
                    <th className="pb-4 text-gray-400">medium</th>
                    <th className="pb-4 text-gray-400">High</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">5</td>
                    <td className="py-4 text-white">0.5</td>
                    <td className="py-4 text-white">0.5</td>
                    <td className="py-4 text-white">0.4</td>
                    <td className="py-4 text-white">0.2</td>
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">4/6</td>  {/* pins */}
                    <td className="py-4 text-white">0.5</td>  {/* Chance */}
                    <td className="py-4 text-white">1.0</td>  {/* Low */}
                    <td className="py-4 text-white">0.7</td>  {/* Medium */}
                    <td className="py-4 text-white">0.3</td>  {/* High */}
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">3/7</td>
                    <td className="py-4 text-white">0.5</td>  {/* Chance */}
                    <td className="py-4 text-white">1.1</td>  {/* Low */}
                    <td className="py-4 text-white">1.3</td>  {/* Medium */}
                    <td className="py-4 text-white">1.5</td>  {/* High */}
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">2/8</td>
                    <td className="py-4 text-white">0.5</td>  {/* Chance */}
                    <td className="py-4 text-white">2.1</td>  {/* Low */}
                    <td className="py-4 text-white">3.0</td>  {/* Medium */}
                    <td className="py-4 text-white">4.0</td>  {/* High */}
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-4 text-white">1/9</td>
                    <td className="py-4 text-white">0.5</td>  {/* Chance */}
                    <td className="py-4 text-white">5.6</td>  {/* Low */}
                    <td className="py-4 text-white">13.0</td>  {/* Medium */}
                    <td className="py-4 text-white">29.0</td>  {/* High */}
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
