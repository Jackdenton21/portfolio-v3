"use client";
import React, { useEffect, useRef, useState } from 'react';
import '../animation.scss';
import Navbar from '/components/navbar';

export default function Home() {
  const mouseTimeout = useRef(null);
  const [animationEnabled, setAnimationEnabled] = useState(true);

  const disableAnimation = () => {
    setAnimationEnabled(false);
  };

  const enableAnimation = () => {
    setAnimationEnabled(true);
  };

  const handleMouseMove = (event) => {

    clearTimeout(mouseTimeout.current);
    mouseTimeout.current = setTimeout(disableAnimation, 100); // Disable animation after 2 seconds of mouse inactivity
    enableAnimation();
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const bodyElement = document.body;

    if (animationEnabled) {
      bodyElement.classList.remove('animation-paused');
      bodyElement.classList.add('animation-unpaused');

    } else {
      bodyElement.classList.add('animation-paused');
      bodyElement.classList.remove('animation-unpaused');

    }
  }, [animationEnabled]);

  return (
    <div>
      <Navbar />
    </div>
  );
}