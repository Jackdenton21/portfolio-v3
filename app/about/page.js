import React from 'react';
import Navbar from '/components/navbar-home-option';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>

          <div className="bg-white shadow-md rounded-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Education</h2>
            <p className="text-gray-700 mb-4">
              I study Computer Science at McGill University. Some relevant courses I have taken include Algorithms and
              Data Structures, Software Design Patterns, Computer Systems, Functional Programming, Concurrent Systems,
              Information Management, and High Tech Venture Creation.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-md p-6 mt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technical Skills</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Languages</h3>
                <ul className="list-disc list-inside">
                  <li className="text-gray-700">Python</li>
                  <li className="text-gray-700">Java</li>
                  <li className="text-gray-700">C</li>
                  <li className="text-gray-700">OCaml</li>
                  <li className="text-gray-700">SQL (MySQL)</li>
                  <li className="text-gray-700">HTML/CSS</li>
                  <li className="text-gray-700">JavaScript</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Frameworks</h3>
                <ul className="list-disc list-inside">
                  <li className="text-gray-700">Expo</li>
                  <li className="text-gray-700">Next.js</li>
                  <li className="text-gray-700">Flask</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Developer Tools</h3>
                <ul className="list-disc list-inside">
                  <li className="text-gray-700">GitHub</li>
                  <li className="text-gray-700">Google Firebase (Firestore)</li>
                  <li className="text-gray-700">VS Code</li>
                  <li className="text-gray-700">IntelliJ</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Libraries</h3>
                <ul className="list-disc list-inside">
                  <li className="text-gray-700">NumPy</li>
                  <li className="text-gray-700">Matplotlib</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
