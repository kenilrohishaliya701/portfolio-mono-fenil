import Image from "next/image";
import { type } from "os";
import React from "react";

const Projects = () => {
  const ProjectsArray: Project[] = [
    {
      categorey: "portfolio,website",
      desc: "This is my portfolio website, I made this website to show my skills and projects to the world.",
      img: "https://dummyimage.com/600x400/fff",
      link: "portfolio.com",
      date: "2021-08-01",
    },
    {
      categorey: "portfolio,website",
      desc: "This is my portfolio website, I made this website to show my skills and projects to the world.",
      img: "https://dummyimage.com/600x400/fff",
      link: "portfolio.com",
      date: "2021-08-01",
    },
    {
      categorey: "portfolio,website",
      desc: "This is my portfolio website, I made this website to show my skills and projects to the world.",
      img: "https://dummyimage.com/600x400/fff",
      link: "portfolio.com",
      date: "2021-08-01",
    },
  ];

  type Project = {
    categorey: string;
    desc: string;
    img: string;
    link: string;
    date: string;
  };

  return (
    <div className="">
      <div className="px-4">
        <h1 className="text-6xl text-white font-bold opacity-30">Projects</h1>
        <div className="flex justify-between gap-2 mt-10">
          <div className="some">
            <h1 className="text-lg md:text-2xl lg:text-3xl text-white font-bold">
              My Works
            </h1>
          </div>
          <div className="desc">
            <h3 className="text-white">
              Here are my best works from my portfolio, you can see them below.
            </h3>
          </div>
        </div>
      </div>
      {/* hide on mobile */}
      <div className="hidden md:block lg:block justify-between mt-10">
        {ProjectsArray.map((project, index) => {
          return (
            <div key={index} className="">
              <div className="flex justify-between gap-10 mt-10">
                <div>
                  <hr className="my-10" />
                  <div className="flex flex-col gap-5">
                    <h1 className="font-bold text-3xl font-serif">
                      {index + 1}/{ProjectsArray.length}
                    </h1>
                    <h1 className="text-xl font-semibold">
                      {project.categorey}
                    </h1>
                  </div>
                </div>
                <div className="flex gap-10">
                  <div className="">
                    <hr className="my-10 w-full" />
                    <h1 className="font-bold text-5xl">{project.link}</h1>
                  </div>
                  <div className="">
                    <hr className="my-10 w-full" />
                    <div className="flex flex-col gap-5">
                      <h1 className="font-bold">{project.date}</h1>
                      <p className="text-sm">{project.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
              <img
                src={project.img}
                className="rounded-2xl w-full mt-10"
                width={600}
                height={400}
                alt="project image"
              />
            </div>
          );
        })}
      </div>
      <div className="block md:hidden lg:hidden">
        {ProjectsArray.map((project, index) => {
          return (
            <div key={index} className="">
              <div className="my-10 mx-5">
                <hr />
                <h1 className="font-bold text-3xl mt-5 font-serif">
                  {index + 1}/{ProjectsArray.length}
                </h1>
                <h1 className="text-xl font-semibold">{project.categorey}</h1>
                <h1 className="font-bold my-10 text-5xl">{project.link}</h1>
                <h1 className="font-bold my-5">{project.date}</h1>
                <p className="text-base my-5">{project.desc}</p>
                <img
                  src={project.img}
                  className="rounded-2xl w-full mt-10"
                  width={600}
                  height={400}
                  alt="project image"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
