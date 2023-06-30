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
   

    
        <div className="max-w-[300px]">
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


       
  );
};

export default HomePage;
