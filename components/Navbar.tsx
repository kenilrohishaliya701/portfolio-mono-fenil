import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const noneActiveClass =
    "px-8 py-4 mx-3 bg-white text-black rounded-md font-bold transition-all duration-200 ease-in-out hover:bg-black hover:text-white cursor-pointer";

  return (
    <div>
      <div className="mx-auto container py-8">
        <nav className="flex bg-transparent items-center justify-between">
          <div className="logo">
            <h1 className="text-4xl uppercase font-bold text-white  ">
              Kenil Rohishaliya
            </h1>
          </div>
          <div className="content bg-transparent">
            <div className="hidden md:flex lg:flex gap-4">
              <Link href={"/"} className="text-white hover:text-brand">
                Home
              </Link>
              <Link className="text-white hover:text-brand" href={"/about"}>
                About
              </Link>
              <Link className="text-white hover:text-brand" href={"/contact"}>
                Contact
              </Link>
            </div>
          </div>
          <div className="block md:hidden lg:hidden">
            <button
              className="p-2 rounded-xl"
              onClick={() => {
                document
                  ?.querySelector(".mobile-menu")
                  ?.classList.toggle("hidden");
              }}
            >
              <Image
                src="/menu.svg"
                className="w-8 h-8 text-white"
                alt="hamburger"
                width={32}
                height={32}
              />
            </button>
          </div>
        </nav>
        <div className="mobile-menu hidden">
          <div className="flex flex-col mt-5 py-4 rounded-b-2xl z-50 overflow-auto gap-4 md:hidden lg:hidden">
            <Link className={noneActiveClass} href={"/"}>
              Home
            </Link>
            <Link className={noneActiveClass} href={"/about"}>
              About
            </Link>
            <Link className={noneActiveClass} href={"/contact"}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
