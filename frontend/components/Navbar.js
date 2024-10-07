import React, { useContext } from 'react';
import Link from 'next/link';
import { FaUserCircle } from 'react-icons/fa';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
  const { user, logout } = useContext(AppContext);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-bold text-gray-800">UK House Aggregator</a>
        </Link>
        <div className="flex items-center">
          {user ? (
            <>
              <Link href="/favorites">
                <a className="text-gray-800 hover:text-blue-600 mx-4">Favorites</a>
              </Link>
              <Link href="/dashboard">
                <a className="text-gray-800 hover:text-blue-600 mx-4 flex items-center">
                  <FaUserCircle className="mr-1" /> {user.name}
                </a>
              </Link>
              <button
                onClick={logout}
                className="text-gray-800 hover:text-blue-600 mx-4"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login">
                <a className="text-gray-800 hover:text-blue-600 mx-4">Login</a>
              </Link>
              <Link href="/register">
                <a className="text-gray-800 hover:text-blue-600 mx-4">Register</a>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

