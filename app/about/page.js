
"use client";

import React from 'react';
import Navbar from '/components/navbar';
import { motion } from 'framer-motion';

export default function Home() {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <motion.header
        className="bg-gray-200 py-8"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-xl font-bold"
            layoutId="pageTitle"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About Me
          </motion.h1>
        </div>
      </motion.header>

      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white shadow-md rounded-md p-6"
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.p
              className="text-gray-700 mb-4"
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I&apos;m going into my fourth year studying Computer Science at McGill University, where I&apos;ve gained a solid foundation in software development and problem-solving. I have front-end and back-end experience, working with tools and technologies across various personal projects, internships, and coursework. I&apos;m constantly seeking new opportunities to expand my knowledge and stay up-to-date with the latest advancements in the field, ensuring that I can deliver cutting-edge solutions to meet the evolving needs of users and businesses.
            </motion.p>
          </motion.div>

          <motion.div
            className="bg-white shadow-md rounded-md p-6 mt-6"
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.6 }}
          >


          <motion.h2
            className="text-xl font-semibold text-gray-800 mb-4"
            layoutId="pageTitle"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Tech I&apos;ve Worked With
          </motion.h2>
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                variants={fadeInVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 0.8 }}
              >
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
              </motion.div>
              <motion.div
                variants={fadeInVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 1 }}
                >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Frameworks</h3>
                <ul className="list-disc list-inside">
                  <li className="text-gray-700">Expo</li>
                  <li className="text-gray-700">Next.js</li>
                  <li className="text-gray-700">Flask</li>
                </ul>
              </motion.div>
              <motion.div
                variants={fadeInVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Developer Tools</h3>
                <ul className="list-disc list-inside">
                  <li className="text-gray-700">GitHub</li>
                  <li className="text-gray-700">Google Firebase (Firestore)</li>
                  <li className="text-gray-700">VS Code</li>
                  <li className="text-gray-700">IntelliJ</li>
                </ul>
              </motion.div>
              <motion.div
                variants={fadeInVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 1.4 }}
               >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Libraries</h3>
                <ul className="list-disc list-inside">
                  <li className="text-gray-700">NumPy</li>
                  <li className="text-gray-700">Matplotlib</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}




