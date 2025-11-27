
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="bg-white dark:bg-gray-800 p-8 sm:p-12 rounded-xl shadow-lg max-w-3xl mx-auto transform hover:scale-105 transition-transform duration-300">
        <div className="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-16 w-16 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <h2 className="mt-4 text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Project Initialized!
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-600 dark:text-gray-300">
              The initial project setup is complete. This is the starting point for your cleaning business application.
            </p>
        </div>
        <div className="mt-8 bg-blue-50 dark:bg-gray-700/50 border-l-4 border-blue-500 text-blue-800 dark:text-blue-200 p-4 rounded-r-lg" role="alert">
          <p className="font-bold">Ready for Step 2</p>
          <p className="mt-1">
            Excellent! The environment is set up. Let me know what you'd like to build next. We can focus on user authentication with Supabase, define the database schema, or start building the main dashboard.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
