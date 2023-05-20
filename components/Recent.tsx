import Image from "next/image";
import React from "react";

const Recent = () => {
  return (
    <div>
      <h1 className="text-6xl text-white font-bold opacity-30">Recently...</h1>
      <div className="grid mx-4 mt-10 grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <Image
            width={600}
            height={600}
            src="https://dummyimage.com/600x600/fff"
            className="rounded-lg hover:scale-105 transition-all ease-in-out duration-200 cursor-pointer"
            alt="website"
          />
        </div>
        <div>
          <Image
            src="https://dummyimage.com/600x600/fff"
            className="rounded-lg hover:scale-105 transition-all ease-in-out duration-200 cursor-pointer"
            alt="website"
            width={600}
            height={600}
          />
        </div>
        <div>
          <Image
            width={600}
            height={600}
            src="https://dummyimage.com/600x600/fff"
            className="rounded-lg hover:scale-105 transition-all ease-in-out duration-200 cursor-pointer"
            alt="website"
          />
        </div>
        <div>
          <Image
            width={600}
            height={600}
            src="https://dummyimage.com/600x600/fff"
            className="rounded-lg hover:scale-110 transition-all ease-in-out duration-200 cursor-pointer"
            alt="website"
          />
        </div>
      </div>
    </div>
  );
};

export default Recent;
