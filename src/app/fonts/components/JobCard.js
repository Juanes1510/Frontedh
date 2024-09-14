import React from 'react';
import Image from 'next/image';

const JobCard = ({ logo, title, description, applicants }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <Image src={logo} alt={title} width={48} height={48} className="mb-2" />
    <h3 className="font-bold text-lg mb-2">{title}</h3>
    <p className="text-sm text-gray-600 mb-4">{description}</p>
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        {applicants.map((applicant, index) => (
          <Image key={index} src={applicant} alt="Applicant" width={24} height={24} className="rounded-full -ml-2 first:ml-0" />
        ))}
        <span className="ml-2 text-sm text-gray-500">{applicants.length} people applied</span>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm">Apply Now</button>
    </div>
  </div>
);

export default JobCard;