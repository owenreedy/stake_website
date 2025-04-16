import React from 'react';

interface TabProps {
  title: string;
  active: boolean;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ title, active, onClick }) => {
  return (
    <button
      className={`px-4 py-2 font-medium rounded-t-lg ${
        active 
          ? 'bg-[#1A1E2E] text-white border-t border-l border-r border-gray-700' 
          : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

interface TabsProps {
  children: React.ReactNode;
  activeTab: number;
  setActiveTab: (index: number) => void;
  tabs: string[];
}

const Tabs: React.FC<TabsProps> = ({ children, activeTab, setActiveTab, tabs }) => {
  return (
    <div>
      <div className="flex border-b border-gray-700 mb-4">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            title={tab}
            active={activeTab === index}
            onClick={() => setActiveTab(index)}
          />
        ))}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Tabs;
