import React from 'react';

const Header = () => (
  <header className="mb-8">
    <nav className="flex justify-between items-center mb-6">
      <div className="flex space-x-4">
        <button className="font-medium">Dashboard</button>
        <button className="font-medium text-blue-500">Job Search</button>
        <button className="font-medium">Schedule</button>
        <button className="font-medium">History</button>
        <button className="font-medium">Events</button>
      </div>
      <div className="flex items-center space-x-2">
        <img src="/api/placeholder/32/32" alt="User" className="w-8 h-8 rounded-full" />
        <span>Austin Robertson</span>
      </div>
    </nav>
  </header>
);

export default Header;