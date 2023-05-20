"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const myactiveClass = "text-brand";
  const myinactiveClass = "text-white";

  const router = "/";

  return (
    <div className="mx-auto py-20 container">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10
      "
      >
        <div className="any hidden lg:block">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d119045.30401413186!2d72.7899402037683!3d21.185573533294843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1684337908358!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            width={"60%"}
            height={"100%"}
            className="mx-auto rounded-2xl hover:scale-105 transition-all duration-200 ease-in-out"
          />
        </div>
        <div className="w-full">
          <div className="grid grid-cols-2 gap-20 w-[100vw] lg:w-full md:w-[70vw]">
            <div className="find-me flex flex-col gap-10">
              <h1 className="text-4xl font-bold text-white">Find Me</h1>
              <h3>
                Email :
                <a href="mailto:kenilrohishaliya@gmail.com">kenilrohishaliya@gmail.com</a>
              </h3>
              <h3>
                Phone : <Link href="tel:+917016907703">+91 7016907703</Link>
              </h3>
              <h3>
                Address :{" "}
                <Link href="https://google.com/maps">
                  Surat, Gujarat, India
                </Link>
              </h3>
            </div>
            <div className="pages flex-col flex gap-10">
              <h1 className="text-4xl font-bold text-white">Pages</h1>
              <Link href="/">
                <h1 className="text-white hover:text-brand">Home</h1>
              </Link>
              <Link href="/about">
                <h1 className="text-white hover:text-brand">About</h1>
              </Link>
              <Link href="/contact">
                <h1 className="text-white hover:text-brand">Contact</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
