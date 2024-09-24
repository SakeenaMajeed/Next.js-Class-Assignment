import React from 'react';

export default function Home() {
  const resources = [
    { title: 'Official Documentation', url: 'https://nextjs.org/docs/getting-started' },
    { title: 'Next.js Crash Course - Traversy Media', url: 'https://www.youtube.com/watch?v=mTz0GXj8NN0' },
    { title: 'Learn Next.js GitHub Repository', url: 'https://github.com/panaverse/learn-nextjs.git' },
    { title: 'Next.js Learn - Vercel', url: 'https://nextjs.org/learn/basics/create-nextjs-app' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-pink-800 flex flex-col items-center justify-center">
      {/* Hero Section */}
      <div className="text-center p-10">
        <h1 className="text-5xl font-bold mb-4 text-white py-3 px-6 rounded-full hover:text-pink-300 transition duration-300">
          Welcome to My Next.js & TailwindCSS Project
        </h1>
        <p className="text-lg text-gray-200 mb-6">
          This is a simple project that showcases my simple creativity😊
        </p>
        <button className="bg-pink-500 text-white py-3 px-6 rounded-full hover:bg-pink-600 transition duration-300">
          Get Started
        </button>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 p-10">
        {resources.map((resource, index) => (
          <div key={index} className="bg-gray-700 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
            <h2 className="text-xl font-semibold mb-2 text-white">{resource.title}</h2>
            <p className="text-gray-300 mb-4">Learn more about Next.js by following this link.</p>
            <a 
              href={resource.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-pink-400 hover:underline hover:text-pink-300 transition duration-300"
            >
              Visit Resource
            </a>
          </div>
        ))}
      </div>

      {/* Project Assigned by Sir Hamzah */}
      <div className="bg-gray-800 text-white p-4 rounded-lg mb-10 w-full max-w-lg text-center">
        <h2 className="text-xl font-semibold mb-2">Project Assigned by Sir Hamzah</h2>
        <p className="text-gray-300 mb-2 text-sm">
          Create a one page website with Next.js and Tailwind CSS.
        </p>
        <a 
          href="https://docs.google.com/document/d/1ddEUR-9BryMMM8DOtz_z9MZw1aYOfIKLhxtvCyKqxoc/edit" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-pink-400 hover:underline hover:text-pink-300 transition duration-300 text-sm"
        >
          View Homework Document
        </a>
      </div>

      {/* Footer Section */}
      <footer className="w-full py-4 bg-purple-900 text-center text-gray-300">
        <p className="text-sm">
          © {new Date().getFullYear()} Sakeena Majeed. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
