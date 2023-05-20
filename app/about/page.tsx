import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#0A0A0B]">
      <div className="grid gap-10 container mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-10">
        <div>
          <Image
            src="/img.jpg"
            alt="about"
            className="w-full rounded-xl"
            width={500}
            height={500}
          />
        </div>
        <div>
          <h1 className="text-9xl font-semibold">FS.</h1>
          <h3 className="font-serif capitalize my-10 text-4xl">
            a bit about myself
          </h3>
          <div className="my-20">
            <h1 className="text-4xl">Just About</h1>
            <h5 className="text-2xl font-thin">What i do</h5>
          </div>
          <div className="my-20">
            <p className="w-1/2">
              My experience, collabrations, and own vibes, for sure!
            </p>
          </div>
          <div className="my-20">
            <h1 className="text-4xl ">So,</h1>
            <h5 className="text-xl font-thin">
              I’m Kenil  — Web Designer with an designer background. Being
              a self-taught designer/programmer, I have intention to perfect my
              every projects and I love designing that has to do with product &
              visual design, mobile & web projects as well as branding,
              typography, and animations. With my experience, I know how to help
              clients, solve real business cases and grow their businesses by
              using design thinking. I love story (out of context).
            </h5>
          </div>
        </div>
      </div>
      <hr className="container mx-auto" />
      <div className="grid mx-auto container grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
        <div className="">
          <div>
            <h1 className="opacity-50 text-4xl">Services</h1>
            <div className="services flex flex-col text-xl">
              <ul className="opacity-100 py-5">
                <li className="py-1 text-base">Web Development</li>
                <li className="py-1 text-base">Web Design</li>
                <li className="py-1 text-base">Mobile App Development</li>
                <li className="py-1 text-base">UI/UX Design</li>
                <li className="py-1 text-base">Branding</li>
                <li className="py-1 text-base">Graphic Design</li>
              </ul>
            </div>
          </div>
          <div>
            <h1 className="opacity-50 text-4xl">Contact</h1>
            <div className="services flex flex-col text-xl">
              <ul className="opacity-100 py-5">
                <li className="py-1">
                  Email :{" "}
                  <a href="mailto:23fenil2004@gmail.com">
                    23fenil2004@gmail.com
                  </a>
                </li>
                <li className="py-1">
                  Phone : <a href="tel:+918320550560">+91 8320550560</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h1 className="opacity-50 text-4xl">Social Media</h1>
            <div className="services flex flex-col text-xl">
              <ul className="opacity-100 py-5">
                <li className="py-1">
                  <Link
                    className="flex gap-2 items-center"
                    target="_blank"
                    href="https://www.twitter.com/"
                  >
                    <button className="rounded-full bg-white p-2">
                      <Image
                        src="/instagram.svg"
                        className="w-5 h-5"
                        alt="instagram"
                        width={20}
                        height={20}
                      />
                    </button>
                    Instgram
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    className="flex gap-2 items-center"
                    target="_blank"
                    href="https://www.twitter.com/"
                  >
                    <button className="rounded-full bg-white p-2">
                      <Image
                        src="/twitter.svg"
                        className="w-5 h-5"
                        alt="instagram"
                        width={20}
                        height={20}
                      />
                    </button>
                    Twitter
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    className="flex gap-2 items-center"
                    target="_blank"
                    href="https://www.twitter.com/"
                  >
                    <button className="rounded-full bg-white p-2">
                      <Image
                        src="/linkedin.svg"
                        className="w-5 h-5"
                        alt="instagram"
                        width={20}
                        height={20}
                      />
                    </button>
                    Linkdin
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    className="flex gap-2 items-center"
                    target="_blank"
                    href="https://www.twitter.com/"
                  >
                    <button className="rounded-full bg-white p-2">
                      <Image
                        src="/github.svg"
                        className="w-5 h-5"
                        alt="instagram"
                        width={20}
                        height={20}
                        
                      />
                    </button>
                    Github
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h1 className="opacity-50 text-4xl pb-5">Education</h1>
          <div className="my-4">
            <h1 className="school-name font-semibold text-xl">
              Ashadeep Vidhyalaya
            </h1>
            <h5 className="school-year font-thin">2019-2021</h5>
            <h5 className="school-designation">Higer Secondary School</h5>
            <ul>
              <li className="py-1">- Science</li>
            </ul>
          </div>
          <div className="my-4">
            <h1 className="school-name font-semibold text-xl">
              Uka Tarsadia University
            </h1>
            <h5 className="school-year font-thin">2021 - Present</h5>
            <h5 className="school-designation">Bachlor of Scince (IT)</h5>
            <ul>
              <li className="py-1">- Computer Science</li>
            </ul>
          </div>
          <h1 className="opacity-50 text-4xl py-5 pt-10">Tools</h1>
          <div className="my-2">
            <h1 className="text-xl font-bold">Grapgic Design</h1>
            <div className="opacity-50 px-4">
              <h1 className="font-semibold text-md">- Figma</h1>
              <h1 className="font-semibold text-md">- Adobe XD</h1>
              <h1 className="font-semibold text-md">- Adobe Photoshop</h1>
              <h1 className="font-semibold text-md">- Adobe Illustrator</h1>
              <h1 className="font-semibold text-md">- Adobe After Effects</h1>
              <h1 className="font-semibold text-md">- Adobe Premiere Pro</h1>
            </div>
          </div>
          <div className="my-2">
            <h1 className="text-xl font-bold">Development</h1>
            <div className="opacity-50 px-4">
              <h1 className="font-semibold text-md">- Visual Studio Code</h1>
              <h1 className="font-semibold text-md">- Visual Studio</h1>
              <h1 className="font-semibold text-md">- Git</h1>
              <h1 className="font-semibold text-md">- Github</h1>
              <h1 className="font-semibold text-md">- Github CodeSpace</h1>
              <h1 className="font-semibold text-md">- Codepen</h1>
              <h1 className="font-semibold text-md">- CodeSandbox</h1>
              <h1 className="font-semibold text-md">- Replit</h1>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold">Deployement</h1>
            <div className="opacity-50 px-4">
              <h1 className="font-semibold text-md">- Netlify</h1>
              <h1 className="font-semibold text-md">- Vercel</h1>
              <h1 className="font-semibold text-md">- Heroku</h1>
            </div>
          </div>
        </div>
        <div>
          <h1 className="opacity-50 text-4xl pb-5">Skills</h1>
          <div className="">
            <div>
              <h1 className="font-semibold text-xl">HTML/CSS</h1>
              <div className="opacity-50 px-4">
                <h1 className="font-semibold text-md">- Bootstrap</h1>
                <h1 className="font-semibold text-md">- Tailwind</h1>
                <h1 className="font-semibold text-md">- Material UI</h1>
                <h1 className="font-semibold text-md">- Sass</h1>
              </div>
              <h1 className="text-xl">Javascript</h1>
              <div className="opacity-50 px-4">
                <h1 className="font-semibold text-md">- React</h1>
                <h1 className="font-semibold text-md">- React Native</h1>
                <h1 className="font-semibold text-md">- Redux</h1>
                <h1 className="font-semibold text-md">- Next.js</h1>
                <h1 className="font-semibold text-md">- Node.js</h1>
                <h1 className="font-semibold text-md">- Express.js</h1>
                <h1 className="font-semibold text-md">- MongoDB</h1>
                <h1 className="font-semibold text-md">- MySql</h1>
              </div>
              <h1 className="font-semibold text-xl">Python</h1>
              <div className="opacity-50 px-4">
                <h1 className="font-semibold text-md">- Django</h1>
                <h1 className="font-semibold text-md">- Flask</h1>
                <h1 className="font-semibold text-md">- Tkinter</h1>
                <h1 className="font-semibold text-md">- Pandas</h1>
                <h1 className="font-semibold text-md">- Numpy</h1>
              </div>
              <h1 className="font-semibold text-xl">Wordpress</h1>
              <div className="opacity-50 px-4">
                <h1 className="font-semibold text-md">- Elementor</h1>
                <h1 className="font-semibold text-md">- Woocommerce</h1>
              </div>
              <h1 className="font-semibold text-xl">Other</h1>
              <div className="opacity-50 px-4">
                <h1 className="font-semibold text-md">- C++</h1>
                <h1 className="font-semibold text-md">- C#</h1>
                <h1 className="font-semibold text-md">- Java</h1>
                <h1 className="font-semibold text-md">- Bash</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
