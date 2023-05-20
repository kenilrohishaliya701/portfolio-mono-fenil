"use client";

import Navbar from "@/components/Navbar";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";
import AnimatedCursor from "react-animated-cursor";
import { useRouter } from "next/router";

const inter = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Kenil Rohishaliya</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Kenil Rohishaliya is a Designer and a student at Red & White Multimedia Institute.
          -- This website is developer by Fenil Sonani
          "
        />
      </head>
      <body className={inter.className}>
        <div className="bg-black">
          {/* <AnimatedCursor
            innerSize={10}
            outerSize={90}
            innerScale={1}
            outerScale={2}
            outerAlpha={0}
            hasBlendMode={true}
            color="255, 255, 255"
            innerStyle={{
              backgroundColor: "rgb(255,255,255)",
            }}
            outerStyle={{
              border: "2px solid rgb(255,255,255)",
            }}
            clickables={[
              "a",
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              'input[type="button"]',
              "select",
              "textarea",
              "button",
              "Link",
            ]}
          /> */}
          <Navbar />
        </div>
        {children}
        <div className="bg-[#0A0A0B]">
          <Footer />
        </div>
      </body>
    </html>
  );
}
