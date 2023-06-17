// pages/work-experience.js
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '/components/navbar-home-option';

const WorkExperiencePage = () => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="min-h-screen bg-gray-100">
        <Navbar></Navbar>
      <motion.header
        className="bg-gray-200 py-8"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-3xl font-bold"
            layoutId="pageTitle"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Work Experience
          </motion.h1>
        </div>
      </motion.header>
      <motion.main
        className="container mx-auto px-4 py-8"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
 <section className="bg-white rounded-lg shadow-lg p-6 mb-8 flex">
  <div className="w-1/4">
    <img
      src="/images/twalmart.png" // Replace with the actual image URL or source
      alt="Company A Logo"
      className="w-full h-auto object-cover"
    />
    <motion.h2
      className="text-xl font-bold mb-2 text-center"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      Walmart Global Tech
    </motion.h2>
    <p className="text-center">Software Engineer Intern</p>
    <p className="text-center">May 2023 - Present</p>
  </div>
  <div className="flex-1 ml-4">
  <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginTop: '1rem' }}>
  <motion.li
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.6 }}
  >
    Currently building a module for the Supply Chain Tracker API that will store data on the unit level for all prescription pharmacy items as required by the Supply Chain Safety Act that comes into place Nov. 2023.
  </motion.li>
  <motion.li
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.7 }}
    style={{ marginTop: '1rem' }}  >

    Working with large scale systems — 189Mn Rx units processed and shipped annually.
  </motion.li>
  <motion.li
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.8 }}
    style={{ marginTop: '1rem' }}
  >
    Technologies involved include Spring Boot, Kafka, CassandraDB (NoSQL), and Google BigQuery.
  </motion.li>
</ul>
  </div>
</section>
<section className="bg-white rounded-lg shadow-lg p-6 mb-8 flex">
  <div className="w-1/4 text-center">
    <img
      src="/images/tfg.png" // Replace with the actual image URL or source
      alt="Company A Logo"
      className="w-20 h-20 object-cover inline-block"
    />
    <motion.h2
      className="text-xl font-bold mb-2 text-center"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      Tech For Good
    </motion.h2>
    <p className="text-center">Software Engineer Intern</p>
    <p className="text-center">June 2022 - August 2022</p>
  </div>
  <div className="flex-1 ml-4">
  <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginTop: '1rem' }}>
  <motion.li
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.6 }}
  >
Designed and implemented a full-stack web application using Next.js, AWS, and Flask to display real-time data for Tech For Good’s deployed networks.  </motion.li>
  <motion.li
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.7 }}
    style={{ marginTop: '1rem' }}  >

Integrated the MapBox GL JS API to create a visually compelling representation of the data.  </motion.li>
  <motion.li
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.8 }}
    style={{ marginTop: '1rem' }}
  >
Utilized GitHub for effective version control and project management, ensuring timely completion of tasks and seamless collaboration with team members.  </motion.li>
</ul>
  </div>
</section>
<section className="bg-white rounded-lg shadow-lg p-6 mb-8 flex">
  <div className="w-1/4 text-center">
    <img
      src="/images/d5.png" // Replace with the actual image URL or source
      alt="Company A Logo"
      className="w-60 h-40 inline-block"
      style={{ marginTop: '-2rem' }}
    />
    <motion.h2
      className="text-xl font-bold mb-2 text-center"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      Droga5
    </motion.h2>
    <p className="text-center">Advertising Intern</p>
    <p className="text-center">July 2019 - August 2019</p>
  </div>
  <div className="flex-1 ml-4">
  <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginTop: '1rem' }}>
  <motion.li
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.6 }}
  >
Collaborated with multinational brands on a variety of marketing campaigns and initiatives.  </motion.li>
  <motion.li
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.7 }}
    style={{ marginTop: '1rem' }}  >

Shadowed producers creating new ads.  </motion.li>
 
</ul>
  </div>
</section>
        {/* Add more sections for additional work experiences */}
        </motion.main>
    </div>
  );
};

export default WorkExperiencePage;