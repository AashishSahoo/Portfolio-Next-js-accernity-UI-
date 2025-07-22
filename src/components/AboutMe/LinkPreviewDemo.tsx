"use client";
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";

export function LinkPreviewDemo() {
  return (
    <div className="flex justify-center items-center h-[20rem] flex-col px-4">
      <h2 className="mb-5 -mt-5 text-4xl font-bold text-center text-black dark:text-white">
        About Me
      </h2>

      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto ">
        Greetings! I&apos;m{" "}
        <LinkPreview
          url="https://www.linkedin.com/in/ashishsahoo899/"
          className="font-bold"
        >
          Ashish Sahoo
        </LinkPreview>
        , a passionate software developer with 7+ months of hands-on experience as a{" "}
        <LinkPreview
          url="https://drive.google.com/file/d/1fMbVjeQG-oh_3xKzSi8zw2_U_mpB98oN/view?usp=sharing"
          className="font-bold"
        >
          Frontend Developer Intern
        </LinkPreview>{" "}
        at{" "}
        <LinkPreview url="https://blue-bricks.com/" className="font-bold">
          Blue Bricks.
        </LinkPreview>{" "}
        I&apos;m skilled in React, JavaScript, TypeScript, and Next.js, with a
        strong focus on building responsive UIs, integrating APIs, and delivering
        seamless user experiences.
      </p>
    </div>
  );
}
