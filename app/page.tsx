"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import HeroSec from "@/components/HeroSec";
import WhoIAm from "@/components/WhoIAm";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Recent from "@/components/Recent";
import Touch from "@/components/Touch";
import Social from "@/components/Social";
import Head from "next/head";

export default function Home() {
  return (
    <>
   
      <div className="hero-bg bg-black">
        <div className="py-20">
          <HeroSec />
        </div>
      </div>
      <div className="bg-[#0A0A0B]">
        <div className="py-20">
          <WhoIAm />
        </div>
        <div className="py-20">
          <Skills />
        </div>
        <div className="container py-20 mx-auto px-4">
          <Experience />
        </div>
        <div className="container py-20 mx-auto">
          <Projects />
        </div>
        <div className="container py-20 mx-auto">
          <Recent />
        </div>
        <div className="py-20">
          <Social />
        </div>
      </div>
    </>
  );
}
