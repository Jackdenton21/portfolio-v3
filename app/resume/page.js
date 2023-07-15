import React from "react";
import Navbar from "/components/navbar";
import "../background.css";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="flex items-center justify-center mt-10">
        <div className="my-100 text-xl font-bold">
          <a
            href="../Resume.pdf"
            className="text-slate-700 font-bold pt-16 px-4"
          >
            <em>Click To View Resume</em>
          </a>
        </div>
      </div>
    </div>
  );
}
