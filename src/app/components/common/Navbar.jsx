'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoImg from '../../../../public/logo.png'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'How it Works', href: '#how-it-works' },
  ];

  return (
    // Semantic <nav> tag for SEO and Accessibility
    <nav className="bg-[#0d0e12] border-b border-gray-800 top-0 sticky z-50" aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto lg:px-4">
        <div className="flex justify-between items-center h-20 px-10">

          {/* Logo Section */}
          <div className="shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded-md p-1">
              {/* Replace SVG with your actual React Labs Logo */}
              <Image
                src={logoImg}
                alt="React Labs Logo"
                priority
                className="h-10 w-auto"
              />
              <span className="bg-linear-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent font-bold text-2xl tracking-wide">Native<span className='text-white'> Crush</span></span>
              <span className="bg-gray-800 text-xs text-gray-400 px-2 py-0.5 rounded-full border border-gray-700 ml-1">
                v3.0
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/get-started"
              className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-all duration-200 shadow-[0_0_15px_rgba(147,51,234,0.3)] hover:shadow-[0_0_20px_rgba(147,51,234,0.5)] outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0e12] focus-visible:ring-purple-500"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md p-2"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0d0e12] border-b border-gray-800">
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="pt-4 flex flex-col gap-3 px-3">
              <Link
                href="/signin"
                className="w-full text-center border border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800 px-4 py-2 rounded-md font-medium"
              >
                Sign in
              </Link>
              <Link
                href="/get-started"
                className="w-full text-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md font-medium shadow-lg"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;