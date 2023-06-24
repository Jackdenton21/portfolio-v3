import React from "react";
import Navbar from "/components/navbar";
import "../background.css";

export default function Home() {
  return (
    <div className="min-h-screen text-slate-700">
      <Navbar />
      <header className="py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-xl font-bold">
            <em>Projects</em>
          </h1>
        </div>
      </header>

      <div className="flex justify-center align-center">
        <video controls className="center" width={800}
            height={800}>
          <source
            src="/chromeExtension.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
