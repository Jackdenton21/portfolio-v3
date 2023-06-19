"use client";
import React from 'react';
import Navbar from '/components/navbar';
import { motion } from 'framer-motion';
import Image from 'next/image';
export default function Home() {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const sections = [
    {
        title: 'Languages',
        images: [
          '/images/tech/python.png',
          '/images/tech/java.png',
          '/images/tech/ocaml.png',
          '/images/tech/c.png',
          '/images/tech/html.png',
          '/images/tech/js.png',
          '/images/tech/css.png',
        ],
      },
      {
        title: 'Developer Tools',
        images: [
          '/images/tech/github.png',
          '/images/tech/jira.png',
          '/images/tech/kubernetes.png',
          '/images/tech/docker.png',
        ],
      },
      {
        title: 'Database Related',
        images: [
          '/images/tech/kafka.png',
          '/images/tech/mysql.png',
          '/images/tech/cassandra.png',
          '/images/tech/firestore.png',
          '/images/tech/bigquery.png',
        ],
      },
      {
        title: 'Frameworks',
        images: [
          '/images/tech/springboot.png',
          '/images/tech/nextjs.png',
          '/images/tech/expo.png',
          '/images/tech/pngwing.com.png',
          '/images/tech/flask.png',
        ],
      },
    ];
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
      <div>
        {sections.map((section, index) => (
          <section key={index} className="mt-8">
            <h2 className="text-center mb-10 font-bold">{section.title}</h2>
            <div
              className={`image-grid ${section.title === 'Frameworks' ? 'frameworks-grid' : ''}`}
            >
               {section.images.map((image, index) => (
                 <div key={index} className="image-wrapper">
                   <div className="image-container">
                     <Image src={image} alt="Image" layout="fill" objectFit="contain" />
                   </div>
                 </div>
               ))}
            </div>
          </section>
        ))}
      </div>
      <style jsx>{`
  .image-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 1rem;
    padding: 0 10rem; /* Add default padding to the sides */
  }

  .frameworks-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Adjust the minimum width of each column */
    grid-gap: 5rem; /* Increase the gap between images */
    padding: 0 13rem; /* Add default padding to the sides */
  }

  .image-wrapper {
    position: relative;
    height: 75px; /* Set the desired height */
    margin-bottom: 20px; /* Add padding to the bottom of each image */
  }

  .framework-wrapper {
    position: relative;
    height: 30px; /* Set the desired height */
    margin-bottom: 20px; /* Add padding to the bottom of each image */
  }

  /* Responsive Padding */
  @media (max-width: 640px) {
    .image-grid,
    .frameworks-grid {
      padding: 0 4rem; /* Adjust the padding for small screens */

    }
  }

  @media (min-width: 641px) and (max-width: 1024px) {
    .image-grid,
    .frameworks-grid {
      padding: 0 2rem; /* Adjust the padding for medium screens */
    }
  }

  @media (min-width: 1025px) {
    .image-grid,
    .frameworks-grid {
      padding: 0 10rem; /* Adjust the padding for large screens */
    }
  }

  .image-container {
    width: 100%;
    height: 100%;
  }
`}</style>

     </div>

  );
}