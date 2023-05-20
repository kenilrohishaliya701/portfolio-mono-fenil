import Link from "next/link";
import { type } from "os";
import React from "react";

const Experience = () => {
  const Experience: ExperienceType = [
    {
      titlep1: "Web",
      titlep2: "Developer",
      description:
        "I am a full stack web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.",
      date: "2022 - 2023",
    },
  ];

  type ExperienceType = Array<{
    titlep1: string;
    titlep2: string;
    description: string;
    date: string;
  }>;

  return (
    <div>
      <h1 className="text-6xl absolute lg:text-9xl md:text-9xl font-extrabold opacity-20 text-white">
        Experience
      </h1>
      <div className="mx-5 z-10 pt-12 md:pt-28 lg:pt-32">
        <div className="pb-4 lg:pl-40 md:pl-40">
          {Experience.map((item) => {
            return (
              <div key={item?.titlep1}>
                <span className="flex text-2xl">
                  <h1 className="text-white">{item?.titlep1}</h1>
                  <p className="text-white opacity-30">{item?.titlep2}</p>
                </span>
                <h2 className="text-white text-base opacity-70">
                  {item?.description}
                </h2>
                <h3 className="text-white text-lg opacity-50">{item?.date}</h3>
              </div>
            );
          })}
          <div>
            <Link href="/contact">
              <h1 className="text-white font-semibold text-2xl underline">
                Be a part of it
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
