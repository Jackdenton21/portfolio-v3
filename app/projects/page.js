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
      text: "SHOW THIS TEXT",
    },
    {
      src: "/images/iphone12.png",
      alt: "Image 2",
      text: "WHY NOT SHOW",
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
  };

  return (
    <div className="min-h-screen text-slate-700">
      <Navbar />
      <header className="py-8 mb-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-xl font-bold">
            <em>Projects</em>
          </h1>
        </div>
      </header>

      <div className="flex">
        <div className="flex w-1/2">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-xl font-bold">Golf Social Media App</h1>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-1/2">
          <Carousel
            selectedItem={selectedIndex}
            onChange={handleSlideChange}
            {...carouselSettings}
          >
            {images.map((image, index) => (
              <div key={index}>
                <img src={image.src} alt={image.alt}/>
              </div>
            ))}
          </Carousel>
        </div>
        <div className="w-1/2">
          <div className="flex">
            <div className="h-1/2">
              <div className="container mx-auto px-4 text-center">
                <ul className="list-disc pl-4 text-l font-medium">
                  <li>
                    Developed a Golf social media app that supports image
                    sharing, inter-user messaging, and public or private game
                    creation. The cross-platform application is designed to
                    further connect you with people you already know or find new
                    people to play with.
                  </li>
                  <li>
                    Integrated Google Maps API to enable location-based features
                    such as finding nearby golf courses and games.
                  </li>
                  <li>
                    Utilized Jest to write and maintain unit tests, achieving
                    90% code coverage and significantly improving the overall
                    code quality and maintainability of the application.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-[-1rem]">
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
    </div>
  );
};

export default HomePage;
