import Image from "next/image";
import Link from "next/link";
import React from "react";

const Social = () => {
  return (
    <div>
      <div className="container mx-auto">
        <h1 className="text-ellipsis overflow-hidden font-bold text-center text-4xl md:text-6xl lg:text-8xl">
          Interested to work with me?
        </h1>
        <div className="flex justify-center items-center flex-col">
          <button className="hover:bg-white hover:text-black border-white border-2 transition-all duration-200 ease-in-out font-bold py-4 px-10 rounded-full mt-10">
            lets talk
          </button>
          <div className="my-20 gap-5 flex">
            <Link target="_blank" href="https://www.instagram.com/">
              <button className="rounded-full bg-white p-3">
                <Image
                  width={32}
                  height={32}
                  src="/instagram.svg"
                  className="w-5 h-5"
                  alt="instagram"
                />
              </button>
            </Link>
            <Link target="_blank" href="https://www.linkedin.com/">
              <button className="rounded-full bg-white p-3">
                <Image
                  width={32}
                  height={32}
                  src="/linkedin.svg"
                  className="w-5 h-5"
                  alt="instagram"
                />
              </button>
            </Link>
            <Link target="_blank" href="https://www.twitter.com/">
              <button className="rounded-full bg-white p-3">
                <Image
                  src="/twitter.svg"
                  className="w-5 h-5"
                  alt="instagram"
                  width={32}
                  height={32}
                />
              </button>
            </Link>
            <Link target="_blank" href="https://www.github.com/">
              <button className="rounded-full bg-white p-3">
                <Image
                  src="/github.svg"
                  className="w-5 h-5"
                  alt="instagram"
                  width={32}
                  height={32}
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
