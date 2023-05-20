import React from "react";
import Image from "next/image";

const HeroSec = () => {
  return (
    <div className="bg-transparent  w-full h-screen flex flex-col justify-center items-center relative">
      <div className="flex justify-center items-center bg-transparent  h-screen text-white">
        <div className="text-center bg-transparent">
          <h1 className="text-8xl opacity-40 font-bold">Kenil Rohishaliya</h1>
          <h2 className="text-2xl drop-shadow-xl font-semibold">
            Full Stack Web Developer
          </h2>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src="/scroll.svg"
          alt="Web Developer"
          width={100}
          height={100}
          className="bg-transparenta"
        />
      </div>
      {/* set bg.png as background */}
    </div>
  );
};

export default HeroSec;
