import Image from "next/image";
import React from "react";

const WhoIAm = () => {
  return (
    <div className=" px-4">
      <div className="text-white container  mx-auto">
        <div className="grid gap-10 py-8 items-center grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
          <div className="flex text-4xl gap-4 font-bold uppercase">
            <h1 className="text-white">Who I</h1>
            <h1 className="text-brand">Am</h1>
          </div>
          <span className="font-semibold">
            <p className="text-2xl">Kenil Rohishaliya</p>
            <p className="text-xl">Dwsi</p>
          </span>
        </div>
        <div className="grid gap-10 py-8 items-center grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
          <div className="images-f">
            <Image
              src="/img.jpg"
              alt="Fenil Sonani"
              width={500}
              height={500}
              quality={100}
              className="rounded-2xl"
            />
          </div>
          <div className="">
            <p>
              Hi, my name is Kenil Roshaliya, I am a designer working in visual
              communication, with a focus on interaction design & art direction.
              I love to create engaging, creative, and interactive app. My aim
              is to visualize your ideas through my development skills, by
              adding motion, I bring them life and make an impressive product. I
              Love Design, Code and Story. Design is not a job, design is a
              mindset. Specially structured and logical thinking.
            </p>
            <h1 className="mt-10 font-semibold underline">
                Read More
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoIAm;
