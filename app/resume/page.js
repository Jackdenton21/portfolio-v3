"use client";
import React from "react";
import Navbar from "/components/navbar";
import "../background.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
      <embed
        src="/Resume.pdf"
        type="application/pdf"
        width="75%"
        style={{ height: "80vh" }}

      />
      </div>
    </div>
  );
}
