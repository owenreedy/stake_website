import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'bg-blue-700' : '';
  };

  return (
    <nav className="bg-[#1A1E2E] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold">Stake Cracked</span>
            </div>
          </div>
          
          <div className="flex">
            <div className="hidden md:ml-6 md:flex md:space-x-4">
              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600 ${isActive('/')}`}
              >
                Home
              </Link>
              <Link
                to="/stats"
                className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600 ${isActive('/stats')}`}
              >
                Stats
              </Link>
              <Link
                to="/autobet"
                className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600 ${isActive('/autobet')}`}
              >
                AutoBet
              </Link>
              <Link
                to="/referral"
                className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600 ${isActive('/referral')}`}
              >
                Referral Code
              </Link>
              <Link
                to="/vip"
                className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600 ${isActive('/vip')}`}
              >
                VIP
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className="md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 ${isActive('/') }`}
          >
            Home
          </Link>
          <Link
            to="/stats"
            className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 ${isActive('/stats')}`}
          >
            Stats
          </Link>
          <Link
            to="/autobet"
            className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 ${isActive('/autobet')}`}
          >
            AutoBet
          </Link>
          <Link
            to="/referral"
            className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 ${isActive('/referral')}`}
          >
            Referral Code
          </Link>
          <Link
            to="/vip"
            className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 ${isActive('/vip')}`}
          >
            VIP
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
