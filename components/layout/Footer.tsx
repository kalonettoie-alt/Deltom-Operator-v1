
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="container mx-auto px-4 py-6 text-center text-gray-500 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Cleaning Platform V2. All rights reserved.</p>
        <p className="text-sm mt-1">Built with React, Supabase & Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;