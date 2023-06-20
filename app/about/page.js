"use client";
import React from 'react';
import Navbar from '/components/navbar';
import { motion } from 'framer-motion';
import Image from 'next/image';
export default function Home() {

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

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
          //'/images/tech/postman.png',

        ],
      },
      {
        title: 'Data',
        images: [
          '/images/tech/kafka.png',
          '/images/tech/cassandra.png',
          '/images/tech/mysql.png',
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



      <div className="text-gray-600 text-l font-bold mb-4 py-8 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-50 2xl:px-50">
      <motion.p
        initial="hidden"
        animate="visible"
        variants={paragraphVariants}
        transition={{ duration: 0.5}}
        className='mb-5'
      >
        &emsp;&emsp;I&rsquo;m currently heading into my fourth and final year studying Computer Science at McGill University.
         I&rsquo;ve had the opportunity to work at diverse set of organizations, ranging from an
         &nbsp;<a href="https://droga5.com" className='hover:text-gray-400 border-b-2 border-gray-400 mb-1'>
      industry-leading advertising agency</a>&nbsp;
      to a &nbsp;
      <a href="https://www.techforgoodinc.org" className='hover:text-gray-400 border-b-2 border-gray-400 mb-1'>
      fast-paced startup </a> 
      , and even the &nbsp;
      <a href="https://tech.walmart.com/content/walmart-global-tech/en_us/about.html" className='hover:text-gray-400 border-b-2 border-gray-400 mb-1'>
      Fortune #1.</a>
      </motion.p>
      <motion.p
        initial="hidden"
        animate="visible"
        variants={paragraphVariants}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='mb-5' 

      >
      &emsp;&emsp;These experiences have allowed me to gain valuable skills across different domains. This versatility has enabled me to tackle various aspects of software development. Most of my front-end experience is with building react based applications. My recent back-end work has been with SpringBoot, Kafka, and Cassandra.  For more details take a look at my &nbsp;
             
      <a href="/projects" className='hover:text-gray-400 border-b-2 border-gray-400 mb-1'>
      projects</a>. Below are some of the technologies I&rsquo;ve worked with.
      </motion.p>
      
    </div>



      <div>
        {sections.map((section, index) => (
          <section key={index} className="mt-8">
            <h2 className="text-center mb-10 font-bold"><em>{section.title}</em></h2>
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
    grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));
    grid-gap: 2rem;
  }

  .frameworks-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 2rem;
  }

  .image-wrapper {
    position: relative;
    height: 75px; /* Set the desired height */
    margin-bottom: 20px; /* Add padding to the bottom of each image */
  }

  .framework-wrapper {
    position: relative;
    height: 75px; /* Set the desired height */
    margin-bottom: 20px; /* Add padding to the bottom of each framework */
  }

  /* Screen Size Conditions */
  @media (max-width: 640px) {
    .image-grid {
      padding: 0 2rem; /* Adjust the padding for small screens */
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));


    }

    .frameworks-grid {
      padding: 0 3rem; /* Adjust the padding for small screens */
      grid-column-gap: 4rem; /* Adjust the grid gap for small screens */
    }
  }

  @media (min-width: 641px) and (max-width: 1024px) {
    .image-grid {
      padding: 0 2rem; /* Adjust the padding for medium screens */
      grid-gap: 2rem; /* Adjust the grid gap for medium screens */
    }

    .frameworks-grid {
      padding: 0 6rem; /* Adjust the padding for medium screens */
      grid-column-gap: 9rem; /* Adjust the grid gap for medium screens */
    }
  }

  @media (min-width: 1025px) {
    .image-grid {
      padding: 0 8rem; /* Adjust the padding for larger screens */
    }

    .frameworks-grid {
      padding: 0 12rem; /* Adjust the padding for larger screens */
      grid-column-gap: 10rem; /* Adjust the grid gap for larger screens */
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