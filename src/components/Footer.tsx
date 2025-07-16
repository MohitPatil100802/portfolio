import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              Mohit Patil
            </h3>
            <p className="text-gray-400">
              Full Stack Developer passionate about creating amazing digital experiences
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={scrollToTop}
              className="mb-4 w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
            
            <div className="text-center md:text-right text-gray-400 text-sm">
              <p className="flex items-center gap-1">
                Made with <Heart size={16} className="text-red-500" /> by Mohit Patil
              </p>
              <p className="mt-1">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>
            Built with React, TypeScript, and Tailwind CSS. Hosted on Vercel.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;