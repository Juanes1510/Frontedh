import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => (
  <div className="flex items-center space-x-4 mb-8">
    <input type="text" placeholder="Yogyakarta, ID" className="p-2 rounded-md border flex-grow" />
    <input type="text" placeholder="Job Type" className="p-2 rounded-md border flex-grow" />
    <input type="text" placeholder="Salary Range" className="p-2 rounded-md border flex-grow" />
    <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center">
      <Search className="mr-2" />
      Search
    </button>
  </div>
);

export default SearchBar;