import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Zap, User, MessageCircle, Map } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative">
              <Zap className="h-8 w-8 text-primary-400" />
              <div className="absolute inset-0 bg-primary-400 blur-lg opacity-30"></div>
            </div>
            <span className="text-2xl font-display font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              JobGPT
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/chat" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2">
              <MessageCircle className="h-4 w-4" />
              <span>AI Coach</span>
            </Link>
            <Link to="/roadmap" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2">
              <Map className="h-4 w-4" />
              <span>3D Roadmap</span>
            </Link>
            <Link to="/dashboard" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all"
            >
              Get Started
            </motion.button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-white/10"
          >
            <div className="flex flex-col space-y-4">
              <Link to="/chat" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2">
                <MessageCircle className="h-4 w-4" />
                <span>AI Coach</span>
              </Link>
              <Link to="/roadmap" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2">
                <Map className="h-4 w-4" />
                <span>3D Roadmap</span>
              </Link>
              <Link to="/dashboard" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>
              <button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-full font-semibold w-full">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;