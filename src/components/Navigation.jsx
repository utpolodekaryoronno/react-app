import React, { useState } from 'react';
import { Link } from 'react-router-dom';


// Import the logo at the top
import logo from '../assets/images/logo.png';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Single Menu Items (No Duplication)
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 relative z-50">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          {/* <Link to="/" className="text-2xl font-bold">
            <img src="/assets/images/logo.png" alt="logo" />
          </Link> */}
         <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Company Logo" 
              className="h-10 md:h-12 w-auto" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10 text-lg">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="hover:text-yellow-400 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-2.5 rounded-lg transition-all">
              Get Quote
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white text-3xl focus:outline-none"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-900 border-t border-gray-700 h-screen z-40 overflow-y-auto">
          <div className="flex flex-col h-full pt-20 px-6">
            <nav className="flex-1 flex flex-col items-center gap-4 text-2xl">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 hover:text-yellow-400 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="pb-12">
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-4 rounded-lg text-lg"
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>
      )}

    </header>
  );
};

export default Navigation;