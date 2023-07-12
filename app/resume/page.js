import React from "react";
import Navbar from "/components/navbar";
import "../background.css";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="flex items-center justify-center mt-20">
        <div className="my-100">
          <a
            href="../Resume.pdf"
            className="text-slate-700 font-bold py-2 px-4"
          >
            Click To View Resume
          </a>
        </div>
      </div>
    </div>
  );
}
