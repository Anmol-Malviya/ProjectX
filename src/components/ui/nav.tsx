'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isActive = (path: string) => pathname === path;

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80; // navbar height
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  // Handle navigation click
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string, sectionId?: string) => {
    if (pathname === '/' && sectionId) {
      e.preventDefault();
      scrollToSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
        : 'bg-white shadow-md border-b border-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo and brand */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center group touch-target">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <img
                  src="https://i.pinimg.com/736x/aa/1f/4b/aa1f4bf6d29b91b26703b3e9a98ad15a.jpg"
                  alt="Video Editor Logo"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg object-cover shadow-md group-hover:shadow-lg transition-all duration-300"
                />
                <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent group-hover:from-red-600 group-hover:to-purple-600 transition-all duration-300">
                  VideoEditor
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className={`relative px-3 lg:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group touch-target ${
                isActive('/')
                  ? 'text-red-600 bg-red-50'
                  : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
              }`}
            >
              Home
              {isActive('/') && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-red-600 rounded-full"></div>
              )}
            </Link>
            <Link
              href="/about"
              onClick={(e) => handleNavClick(e, '/about', 'about')}
              className={`relative px-3 lg:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group touch-target ${
                isActive('/about')
                  ? 'text-red-600 bg-red-50'
                  : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
              }`}
            >
              About
              {isActive('/about') && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-red-600 rounded-full"></div>
              )}
            </Link>
            <Link
              href="/portfolio"
              onClick={(e) => handleNavClick(e, '/portfolio', 'portfolio')}
              className={`relative px-3 lg:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group touch-target ${
                isActive('/portfolio')
                  ? 'text-red-600 bg-red-50'
                  : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
              }`}
            >
              Project
              {isActive('/portfolio') && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-red-600 rounded-full"></div>
              )}
            </Link>
            <Link
              href="/services"
              className={`relative px-3 lg:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group touch-target ${
                isActive('/services')
                  ? 'text-red-600 bg-red-50'
                  : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
              }`}
            >
              Services
              {isActive('/services') && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-red-600 rounded-full"></div>
              )}
            </Link>
            <Link
              href="/contact"
              className={`relative px-3 lg:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group touch-target ${
                isActive('/contact')
                  ? 'text-red-600 bg-red-50'
                  : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
              }`}
            >
              Contact
              {isActive('/contact') && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-red-600 rounded-full"></div>
              )}
            </Link>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="ml-2 lg:ml-4 bg-gradient-to-r from-red-600 to-purple-600 text-white px-4 lg:px-6 py-2 rounded-lg text-sm font-medium hover:from-red-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg touch-target"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="relative p-3 rounded-lg text-gray-700 hover:text-red-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200 touch-target"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
                }`}></span>
                <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 pt-2 pb-4 space-y-1 bg-white border-t border-gray-100">
            <Link
              href="/"
              className={`block px-4 py-4 rounded-lg text-base font-medium transition-all duration-200 touch-target ${
                isActive('/')
                  ? 'text-red-600 bg-red-50 border-l-4 border-red-600'
                  : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={(e) => handleNavClick(e, '/about', 'about')}
              className={`block px-4 py-4 rounded-lg text-base font-medium transition-all duration-200 touch-target ${
                isActive('/about')
                  ? 'text-red-600 bg-red-50 border-l-4 border-red-600'
                  : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
              }`}
            >
              About
            </Link>
            <Link
              href="/portfolio"
              onClick={(e) => handleNavClick(e, '/portfolio', 'portfolio')}
              className={`block px-4 py-4 rounded-lg text-base font-medium transition-all duration-200 touch-target ${
                isActive('/portfolio')
                  ? 'text-red-600 bg-red-50 border-l-4 border-red-600'
                  : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
              }`}
            >
              Portfolio
            </Link>
            <Link
              href="/services"
              className={`block px-4 py-4 rounded-lg text-base font-medium transition-all duration-200 touch-target ${
                isActive('/services')
                  ? 'text-red-600 bg-red-50 border-l-4 border-red-600'
                  : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className={`block px-4 py-4 rounded-lg text-base font-medium transition-all duration-200 touch-target ${
                isActive('/contact')
                  ? 'text-red-600 bg-red-50 border-l-4 border-red-600'
                  : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="block mt-4 bg-gradient-to-r from-red-600 to-purple-600 text-white px-4 py-4 rounded-lg text-base font-medium hover:from-red-700 hover:to-purple-700 transition-all duration-200 text-center shadow-md touch-target"
              onClick={() => setIsMenuOpen(false)}
            >
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}