import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../../images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  
  // Create refs for timeout management
  const solutionsTimeoutRef = useRef(null);
  const productsTimeoutRef = useRef(null);

  const toggleMobile = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full z-50 bg-white bg-opacity-95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} className="h-6" alt="OORB Logo" />
            <span className="text-xl font-semibold text-gray-900 tracking-tight">OORB</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 relative">
            <Link to="/" className="text-gray-600 hover:text-blue-600 text-sm font-medium">Home</Link>

            {/* Solutions Dropdown - Fixed */}
            <div
              onMouseEnter={() => {
                clearTimeout(solutionsTimeoutRef.current);
                setShowSolutions(true);
              }}
              onMouseLeave={() => {
                solutionsTimeoutRef.current = setTimeout(() => {
                  setShowSolutions(false);
                }, 200);
              }}
              className="relative"
            >
              <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 text-sm font-medium">
                <span>Solutions</span>
                <ChevronDown size={16} />
              </button>
              {showSolutions && (
                <div 
                  className="fixed top-14 right-0 w-screen bg-white shadow-2xl rounded-md mt-2 border z-50 flex"
                  onMouseEnter={() => clearTimeout(solutionsTimeoutRef.current)}
                  onMouseLeave={() => {
                    solutionsTimeoutRef.current = setTimeout(() => {
                      setShowSolutions(false);
                    }, 200);
                  }}
                >
                  <div className="w-1/4 border-r p-6">
                    <h4 className="text-sm font-semibold text-gray-800 mb-4">Categories</h4>
                    <ul className="space-y-3 text-sm">
                      <li className="text-gray-700 hover:text-blue-600 cursor-pointer">School Management</li>
                      <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Employee Management</li>
                      <li className="text-gray-700 hover:text-blue-600 cursor-pointer">HR Tools</li>
                      <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Custom ERP</li>
                    </ul>
                  </div>
                  <div className="w-3/4 grid grid-cols-3 gap-6 p-6">
                    <div>
                      <h5 className="text-sm font-semibold text-gray-900 mb-1">School ERP</h5>
                      <p className="text-xs text-gray-600">Complete school management with AI-powered tools.</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-gray-900 mb-1">Employee Suite</h5>
                      <p className="text-xs text-gray-600">Manage hiring, tasks and payrolls efficiently.</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-gray-900 mb-1">Recruitment AI</h5>
                      <p className="text-xs text-gray-600">Smart candidate analysis and resume filtering.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Products Dropdown - Fixed */}
            <div
              onMouseEnter={() => {
                clearTimeout(productsTimeoutRef.current);
                setShowProducts(true);
              }}
              onMouseLeave={() => {
                productsTimeoutRef.current = setTimeout(() => {
                  setShowProducts(false);
                }, 200);
              }}
              className="relative"
            >
              <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 text-sm font-medium">
                <span>Products</span>
                <ChevronDown size={16} />
              </button>
              {showProducts && (
                <div 
                  className="fixed top-14 right-0 w-screen bg-white shadow-2xl rounded-md mt-2 border z-50 flex"
                  onMouseEnter={() => clearTimeout(productsTimeoutRef.current)}
                  onMouseLeave={() => {
                    productsTimeoutRef.current = setTimeout(() => {
                      setShowProducts(false);
                    }, 200);
                  }}
                >
                  <div className="w-1/4 border-r p-6">
                    <h4 className="text-sm font-semibold text-gray-800 mb-4">Categories</h4>
                    <ul className="space-y-3 text-sm">
                      <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Developer Tools</li>
                      <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Frontend Libraries</li>
                      <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Backend Services</li>
                    </ul>
                  </div>
                  <div className="w-3/4 grid grid-cols-3 gap-6 p-6">
                  <a href="/port-killer" className="hover:text-blue-600">
                    <div>
                      <h5 className="text-sm font-semibold text-gray-900 mb-1">Port Killer</h5>
                      <p className="text-xs text-gray-600">One-click tool to free Windows ports instantly.</p>
                    </div>
                  </a>
                    <div>
                      <h5 className="text-sm font-semibold text-gray-900 mb-1">Animation Library</h5>
                      <p className="text-xs text-gray-600">Scroll-based animation components for React.</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-gray-900 mb-1">Data Fetcher</h5>
                      <p className="text-xs text-gray-600">API and DB query testing tool for frontend devs.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/about" className="text-gray-600 hover:text-blue-600 text-sm font-medium">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600 text-sm font-medium">Contact</Link>
            <Link to="/careers" className="text-gray-600 hover:text-blue-600 text-sm font-medium">Careers</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobile}
              className="text-gray-600 hover:text-blue-600 p-2 rounded-md hover:bg-gray-100"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" onClick={toggleMobile} className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Home</Link>
              <Link to="/solutions" onClick={toggleMobile} className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Solutions</Link>
              <Link to="/products" onClick={toggleMobile} className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Products</Link>
              <Link to="/about" onClick={toggleMobile} className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">About</Link>
              <Link to="/contact" onClick={toggleMobile} className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Contact</Link>
              <Link to="/careers" onClick={toggleMobile} className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Careers</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;