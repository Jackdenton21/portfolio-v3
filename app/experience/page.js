// pages/work-experience.js
"use client";
import "../background.css";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "/components/navbar";

const WorkExperiencePage = () => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="min-h-screen text-slate-700">
      <Navbar />
      <motion.header
        className=" py-8"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-xl"
            layoutId="pageTitle"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <em>Work Experience</em>
          </motion.h1>
        </div>
      </motion.header>
      <motion.main
        className="container mx-auto px-4"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <section className="border-slate-700 rounded-lg px-2 py-6 mb-8 flex-row sm:flex items-center font-medium">
          <div className="sm:w-1/4 max-w-full items-center">
            <img
              src="/images/twalmart.png"
              alt="Company A Logo"
              className="w-full h-auto object-contain hidden sm:inline-block"
            />
            <motion.h2
              className="text-xl mb-2 text-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Walmart Global Tech
            </motion.h2>
            <p className="text-center mb-2">Software Engineer Intern</p>
            <p className="text-center">May 2023 - August 2023</p>
          </div>
          <div className="flex-1 ml-4">
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "1.5rem",
                marginTop: "1rem",
              }}
            >
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Worked with the Pharmacy team on various compliance initiatives
                in response to the Drug Supply Chain Security Act set to take
                effect in November 2023.{" "}
              </motion.li>

              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                style={{ marginTop: "1rem" }}
              >
                Built a SpringBoot application to process and save over 189 million data points to Cassandra and Elasticsearch, allowing visibility for research or audit.{" "}
              </motion.li>

              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                style={{ marginTop: "1rem" }}
              >
                Utilized Kafka for data streaming as well as Offset Explorer to
                manage Kafka clusters and KafkaSender to send mock messages for
                testing and validation.{" "}
              </motion.li>

              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                style={{ marginTop: "1rem" }}
              >
                Made enhancements to the Inventory UI (React) to include compliance-related data. Integrated new fields into existing features such as filtering, sorting, and exporting results.{" "}
              </motion.li>
            </ul>
          </div>
        </section>

        <hr class="border border-arrow border-slate-700  w-4/5 mx-auto my-8"></hr>

        <section className="border-slate-700 rounded-lg px-2 py-6 mb-8 flex-row sm:flex ">
          <div className="sm:w-1/4 text-center max-w-full items-center">
            <img
              src="/images/tfg.png"
              alt="Company A Logo"
              className="w-20 h-20 object-contain inline-block hidden sm:inline-block"
            />
            <motion.h2
              className="text-xl mb-2 text-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Tech For Good
            </motion.h2>
            <p className="text-center mb-2">Software Engineer Intern</p>
            <p className="text-center">June 2022 - August 2022</p>
          </div>
          <div className="flex-1 ml-4">
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "1.5rem",
                marginTop: "1rem",
              }}
            >
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Designed and implemented a web application using Next.js, AWS,
                and Flask to display real-time statistics for Tech For Good’s
                deployed networks.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                style={{ marginTop: "1rem" }}
              >
                Integrated the MapBox GL JS API to create an interactive
                representation of where the networks are deployed.
              </motion.li>
            </ul>
          </div>
        </section>

        <hr class="border border-slate-700 w-4/5 mx-auto my-8"></hr>

        <section className="border-slate-700 rounded-lg px-2 py-6 mb-8 flex-row sm:flex ">
          <div className="sm:w-1/4 text-center max-w-full items-center">
            <img
              src="/images/d5.png"
              alt="Company A Logo"
              className="w-60 h-40 inline-block object-contain hidden sm:inline-block"
              style={{ marginTop: "-2rem" }}
            />
            <motion.h2
              className="text-xl mb-2 text-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ marginTop: "-1rem" }}
            >
              Droga5
            </motion.h2>
            <p className="text-center mb-2">Advertising Intern</p>
            <p className="text-center">July 2019 - August 2019</p>
          </div>
          <div className="flex-1 ml-4">
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "1.5rem",
                marginTop: "1rem",
              }}
            >
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Collaborated with multinational brands on a variety of marketing
                campaigns and initiatives.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                style={{ marginTop: "1rem" }}
              >
                Shadowed producers creating new ads.
              </motion.li>
            </ul>
          </div>
        </section>
        {/* Add more sections for additional work experiences */}
      </motion.main>
    </div>
  );
};

export default WorkExperiencePage;
