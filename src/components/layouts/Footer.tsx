import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy bg-opacity-90 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="text-2xl font-orbitron font-bold glow-text">
              OORB
            </Link>
            <p className="mt-4 text-sm text-gray-300">
              Powering Ideas into Digital Realities
            </p>
          </div>

          <div>
            <h3 className="text-lg font-orbitron mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/solutions" className="text-sm hover:text-purple">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm hover:text-purple">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-purple">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm hover:text-purple">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-orbitron mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-sm">
                <Mail size={16} className="mr-2" />
                info@oorb.com
              </li>
              <li className="flex items-center text-sm">
                <Phone size={16} className="mr-2" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center text-sm">
                <MapPin size={16} className="mr-2" />
                123 Tech Street, Digital City
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-orbitron mb-4">Stay in the orbit</h3>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-full bg-white bg-opacity-10 border border-purple border-opacity-20 focus:outline-none focus:border-purple"
              />
              <button className="mt-2 w-full cosmic-button">
                Subscribe
              </button>
            </form>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-purple">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-purple">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-purple">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white border-opacity-10 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} OORB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;