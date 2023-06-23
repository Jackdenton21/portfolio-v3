"use client";
import React, { useEffect, useRef, useState } from 'react';
import './animation.scss';
import Navbar from '/components/navbar-home';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <header className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="animation-container">
          <div className="text-center mt-20">
            <h1 className="text-4xl font-extrabold text-slate-700">Jack Denton</h1>
            <p className="mt-2 text-xl text-slate-600">Full-stack Software Engineer</p>
          </div>
        </div>
      </header>
    </div>
  );
}