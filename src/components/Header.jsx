import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/project' },
    { label: 'About Us', path: '/about' },
    { label: 'Careers', path: '/career' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="w-full text-white shadow-md">
      {/* Main nav bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="rounded border-2 border-[#FD5521] bg-gray-700 px-4 py-2 text-center">
              <h4 className="text-2xl font-bold leading-none">MCR</h4>
              <p className="text-xs uppercase tracking-wide">construction</p>
            </div>
          </div>

          {/* Desktop Navigation + Call button */}
          <div className="hidden items-center space-x-1 md:flex">
            <nav className="flex overflow-hidden rounded border-2 border-[#FD5521]">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="flex h-12 w-28 items-center justify-center bg-gray-700 px-3 text-sm font-medium hover:bg-gray-600 md:w-32 lg:w-36"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <a
              href="tel:+234xxxxxxxxxx" // ← replace with real number
              className="ml-2 flex h-12 w-36 items-center justify-center bg-[#FD5521] text-base font-semibold hover:bg-orange-600 rounded transition-colors"
            >
              Call Now!
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <svg className="h-8 w-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (simple show/hide) */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-800 border-t border-gray-700`}>
        <div className="px-4 py-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="block py-3 px-5 text-lg font-medium rounded-md hover:bg-gray-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <a
            href="tel:+234xxxxxxxxxx"
            className="block mt-4 py-4 px-5 text-lg font-semibold bg-[#FD5521] hover:bg-orange-600 rounded-md text-center transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Call Now!
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;