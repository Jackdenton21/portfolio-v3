"use client";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from "/components/navbar";
import "../background.css";

const HomePage = () => {
  const images = [
    {
      src: "/images/iphone12.png",
      alt: "Image 1",
      text: "Screenshot 1",
    },
    {
      src: "/images/iphone12.png",
      alt: "Image 2",
      text: "Screenshot 2",
    },
    // Add more image objects as needed
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSlideChange = (index) => {
    setSelectedIndex(index);
  };

  const carouselSettings = {
    showArrows: true,
    showStatus: false,
    showIndicators: false,
    showThumbs: false,
    useKeyboardArrows: true,
    centerMode: true,
    infiniteLoop: true,
    showArrows: true,
  };

  return (
    <div className="text-slate-700 mb-10">
      <Navbar />

      <div className="flex mb-5 mt-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-xl font-bold lg:hidden">Golf Social Media App</h1>
          <h2 className="text-m sm:mb-10 lg:hidden">
            <em>Expo (Front-end), Firestore (Back-end)</em>
          </h2>
        </div>
      </div>

      <div className="flex-row sm:flex md:px-10 lg:mt-15">
        <div className="">
          <div className="flex">
            <div className="h-1/2">
              <div className="container mx-auto px-4 text-center">
                <h1 className="text-xl font-bold hidden lg:block">
                  Golf Social Media App
                </h1>
                <h2 className="text-m mb-5 sm:mb-10 hidden lg:block">
                  <em>Expo (Front-end), Firestore (Back-end)</em>
                </h2>
              </div>

              <div className="container mx-auto px-4 text-center md:pl-10">
                <ul className="list-disc pl-4 text-l font-medium space-y-4 md:pr-10">
                  <li>
                    &emsp;&emsp;&emsp;&emsp;Developed a Golf social media app
                    that supports image sharing, messaging, and public or
                    private game creation. The cross-platform application is
                    designed to further connect you with people you already know
                    or find new people to play with.
                  </li>
                  <li>
                    &emsp;&emsp;&emsp;&emsp;Integrated Google Maps API to enable
                    location-based features such as finding nearby golf courses
                    and games.
                  </li>
                  <li>
                    &emsp;&emsp;&emsp;&emsp;Utilized Jest to write and maintain
                    unit tests, achieving 85% code coverage and significantly
                    improving the overall code quality and maintainability of
                    the application.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="sm:block hidden">
            <div className="flex justify-center items-center">
              <img src="/images/arrow.png" className="w-20 h-20"></img>
            </div>
            <div className="flex justify-center h-1/2">
              <div>
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={index === selectedIndex ? "" : "hidden"}
                  >
                    <p> {image.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[400px] min-w-[275px] mx-auto md:mr-20 ">
          <Carousel
            selectedItem={selectedIndex}
            onChange={handleSlideChange}
            {...carouselSettings}
          >
            {images.map((image, index) => (
              <div key={index}>
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <hr class="border border-slate-700 w-4/5 mx-auto my-8"></hr>

      <div className="flex mb-5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-xl font-bold mb-5 sm:mb-10 lg:hidden">
            Productivity Enhancing Chrome Extension
          </h1>
        </div>
      </div>

      <div className="flex-row sm:flex md:pw-10 mb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-xl font-bold mb-5 hidden lg:block text-center">
            Productivity Enhancing Chrome Extension
          </h1>

          <div className="container mx-auto px-4 text-center md:pl-10">
            <ul className="list-disc pl-4 text-l font-medium space-y-4 md:pr-10">
              <li>
                &emsp;&emsp;&emsp;&emsp;Created a Google Chrome extension to
                help users quickly find answers to highlighted questions as well
                as definitions of highlighted words. The tool is built with the
                user experience in mind, as it displays the result in a pop-up
                bubble next to the user&rsquo;s cursor so there is no need to
                open a new tab or press any keys. The extension is powered by
                the OpenAI API, DBPedia, and DictionaryAPI.dev.
              </li>
              <li>
                &emsp;&emsp;&emsp;&emsp;Won best use of modern technology at
                McGill 2022 CodeJam();
              </li>
            </ul>
          </div>
        </div>

        <div className="sm:max-w-[400px] sm:min-w-[275px] md:mr-20 mt-20 text-center">
          <a
            href="https://www.youtube.com/watch?v=VhofORWy8VQ&t=2s"
            className="hover:text-gray-400 border-b-2 border-gray-400 mb-1"
          >
            <em>Demo video</em>
          </a>
        </div>
      </div>

      <hr class="border border-slate-700  w-4/5 mx-auto my-8"></hr>

      <div className="flex mb-5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-xl font-bold mb-5 sm:mb-10 lg:hidden">
            CPU Implementation with <em>Logism</em>
          </h1>
        </div>
      </div>

      <div className="flex-row sm:flex md:pw-10 mb-10">
        <div className="container mx-auto px-4">
          <h1 className="text-xl font-bold sm:mb-10 hidden lg:block text-center">
            CPU Implementation with <em>Logism</em>{" "}
          </h1>

          <div className="container mx-auto px-4 text-center md:pl-10 mb-10">
            <ul className="list-disc pl-4 text-l font-medium space-y-4 md:pr-10">
              <li>
                &emsp;&emsp;&emsp;&emsp;Created a functioning CPU using Logism,
                a digital circuit design and simulation tool. The CPU includes
                an Arithmetic Logic Unit, RAM, and other key components
                necessary to execute basic instructions.
              </li>
              <li>
                &emsp;&emsp;&emsp;&emsp;Instructions included reading/writing
                to/from RAM and performing addition/subtraction.
              </li>
            </ul>
          </div>
        </div>

        <div className="sm:max-w-[400px] sm:min-w-[275px] md:mr-20 mt-20 text-center hidden md:block">
          <a>
            <em>Final project for COMP273 @ McGill University</em>
          </a>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <img src="images/sscpu.png" className="w-4/5 h-auto"></img>
      </div>
    </div>
  );
};

export default HomePage;
