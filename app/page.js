import React from "react";
import Image from "next/image";
import Navbar from "/components/navbar-home";
import "./animation.scss";


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

          <div className="flex justify-center mt-6 mx-5">
            <a href="https://www.linkedin.com/in/jack-denton011235813">
              <Image src='/images/linkedin.png' alt="LinkedIn" width={30} height={30} className="mx-5" />
            </a>
            <a href="https://github.com/jackdenton21">
              <Image src='/images/github.png' alt="GitHub" width={30} height={30} className="mx-5"  />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
