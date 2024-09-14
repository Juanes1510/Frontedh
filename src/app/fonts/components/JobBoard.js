'use client';

import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import JobList from './JobList';

const JobBoard = () => {
  const jobs = [
    { 
      logo: "/api/placeholder/48/48", 
      title: "Lead Product Design", 
      description: "You will be responsible for the visual design for multi-device. Understand basic design...", 
      applicants: ["/api/placeholder/24/24", "/api/placeholder/24/24", "/api/placeholder/24/24"] 
    },
    { 
      logo: "/api/placeholder/48/48", 
      title: "UI / UX Designer - Remote", 
      description: "You will be responsible for the visual design for multi-device. Understand basic design...", 
      applicants: ["/api/placeholder/24/24", "/api/placeholder/24/24"] 
    },
    
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        <Header />
        <SearchBar />
        <main>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Showing 125 Jobs</h2>
            <select className="p-2 rounded-md border">
              <option>Sort by Newest Post</option>
            </select>
          </div>
          <JobList jobs={jobs} />
        </main>
      </div>
    </div>
  );
};

export default JobBoard;