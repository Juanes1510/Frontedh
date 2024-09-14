import React from 'react';
import JobCard from './JobCard';

const JobList = ({ jobs }) => (
  <div className="grid grid-cols-3 gap-6">
    {jobs.map((job, index) => (
      <JobCard key={index} {...job} />
    ))}
  </div>
);

export default JobList;