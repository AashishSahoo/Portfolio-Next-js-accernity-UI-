'use client';

import React from 'react';
import ColourfulText from "@/components/ui/colourful-text";

import { BackgroundLines } from "@/components/ui/background-lines";



export default function HeroSection() {
  return (
    <div className="h-auto md:h-[50rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative  font-bold tracking-tight">
          Hi, I&apos;m Ashish Sahoo, <br /><ColourfulText text="Software Developer" />  & <ColourfulText text="Tech Enthusiast" />
        </h2>
        {/* <h2 className="text-center text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative font-bold tracking-tight">
          <span className="#F8F8F8">Hi, I'm Ashish Sahoo,</span> <br />
          <ColourfulText text="Software Developer" /> & <ColourfulText text="Tech Enthusiast" />
        </h2> */}

        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          Turning ideas into interactive experiences,
          and fueling digital journeys with code, passion, and precision.

        </p>
        <div className="p-4 relative  w-full text-center">
          <div className="mt-4">
            <a
              href="https://drive.google.com/file/d/1j8C7c7zlpTpOHqVVnwRELDK0mQ26RhbH/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="p-[3px] relative cursor-pointer group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-8 py-2 bg-black rounded-[6px] relative transition duration-200 text-white group-hover:bg-transparent">
                  View Resume
                </div>
              </button>
            </a>
          </div>

        </div>

      </BackgroundLines>


    </div >
  );
}