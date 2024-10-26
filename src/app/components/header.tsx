import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BriefcaseIcon, BuildingOfficeIcon, CurrencyDollarIcon, StarIcon, MagnifyingGlassIcon, Bars3Icon } from '@heroicons/react/24/outline';

const Header = () => {
  const [mostrarMenu , setMostrarMenu] = useState<boolean>(false)
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
            {[
              { href: '/jobs', icon: BriefcaseIcon, label: 'Dashboard' },
              { href: '/companies', icon: BuildingOfficeIcon, label: 'Compañía' },
              { href: '/salaries', icon: CurrencyDollarIcon, label: 'Salaries' },
              { href: '/reviews', icon: StarIcon, label: 'Reviews' },
            ].map(({ href, icon: Icon, label }) => (
              <Link key={href} href={href} className="flex items-center space-x-2 text-white hover:text-yellow-300 transition duration-150 ease-in-out">
                <Icon className="h-5 w-5" aria-hidden="true" />
                <span className="font-medium">{label}</span>
              </Link>
            ))}
          </nav>
          <div className="md:hidden">
            <button className="text-white p-2" aria-label="Open menu">
              <Bars3Icon className="h-6 w-6" />
            </button>
            <div id='menu' className={`${!mostrarMenu ? "hidden" : "absolute"} mt-2 w-48 bg-white rounded-lg shadow-lg`}>
              <ul className='py-2'>
                <li><a href="#" className=' items-center block px-4 py-2 text-gray-700 hover:bg-gray-100'>Notifications</a></li>
                <li><a href="#" className=' items-center block px-4 py-2 text-gray-700 hover:bg-gray-100'>Configuration</a></li>
                <li><a href="#" className=' items-center block px-4 py-2 text-gray-700 hover:bg-gray-100'>Log Out</a></li>
              </ul>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full font-bold hover:bg-yellow-300 transition duration-150 ease-in-out shadow-md flex items-center">
              <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
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
            <div className="relative" >
            <button onClick={() => {setMostrarMenu(!mostrarMenu)}} className="text-white p-2" aria-label="Open menu">
              <Bars3Icon className="h-6 w-6" />
            </button>
          <div id='menu' className={`${!mostrarMenu ? "hidden" : "absolute"} mt-2 w-48 bg-white rounded-lg shadow-lg`}>
              <ul className='py-2'>
                <li><a href="#" className=' items-center block px-4 py-2 text-gray-700 hover:bg-gray-100'>Notifications</a></li>
                <li><a href="#" className=' items-center block px-4 py-2 text-gray-700 hover:bg-gray-100'>Configuration</a></li>
                <li><a href="#" className=' items-center block px-4 py-2 text-gray-700 hover:bg-gray-100'>Log Out</a></li>
              </ul>
            </div>
          </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;