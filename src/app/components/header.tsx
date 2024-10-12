import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BriefcaseIcon, BuildingOfficeIcon, CurrencyDollarIcon, StarIcon } from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-extrabold tracking-tight">
              JobBoard
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/jobs" className="flex items-center space-x-2 text-white hover:text-yellow-300 transition duration-150 ease-in-out">
              <BriefcaseIcon className="h-5 w-5" />
              <span className="font-medium">DashBoard</span>
            </Link>

            <Link href="/companies" className="flex items-center space-x-2 text-white hover:text-yellow-300 transition duration-150 ease-in-out">
              <BuildingOfficeIcon className="h-5 w-5" />
              <span className="font-medium">compañia</span>
            </Link>
            <Link href="/salaries" className="flex items-center space-x-2 text-white hover:text-yellow-300 transition duration-150 ease-in-out">
              <CurrencyDollarIcon className="h-5 w-5" />
              <span className="font-medium">Salaries</span>
            </Link>
            <Link href="/reviews" className="flex items-center space-x-2 text-white hover:text-yellow-300 transition duration-150 ease-in-out">
              <StarIcon className="h-5 w-5" />
              <span className="font-medium">Reviews</span>
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full font-bold hover:bg-yellow-300 transition duration-150 ease-in-out shadow-md">
              Search
            </button>
            <div className="flex items-center space-x-3 bg-white bg-opacity-20 rounded-full py-2 px-4">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-yellow-400 shadow-inner">
                <Image
                  src="/halo-4-pictures-f0rwaa6dm73pmw0c.webp"
                  alt="Halo profile picture"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;