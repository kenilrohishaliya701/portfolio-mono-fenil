import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div className="flex items-center justify-center">
      <Image
        src="/gp.svg"
        alt="Web Developer"
        width={800}
        height={800}
        className="bg-transparent"
      />
    </div>
  );
};

export default Skills;
