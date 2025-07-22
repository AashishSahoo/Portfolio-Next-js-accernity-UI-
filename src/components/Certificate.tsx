"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { cn } from "@/lib/utils";

export function Certificate() {
  return (
    <div className="relative flex h-[40rem] w-full items-center justify-center overflow-hidden rounded-md antialiased">
      {/* Grid Background Layer */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* Radial mask overlay */}
      <div className="pointer-events-none absolute inset-0  flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

      {/* Moving Cards Content */}
      <div className="relative ">
        <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Gained foundational knowledge of the ServiceNow platform, focusing on how it integrates with IT service management and operations.",
    name: "ServiceNow",
    title: "Micro-Certification - Welcome to ServiceNow!",
    link: "https://drive.google.com/file/d/1b6dn8iMAeyQtXcczhGY19Q5yaKGFmXSE/view",
  },
  {
    quote: "Completed a certification course provided by HackerRank.",
    name: "HackerRank",
    title: "SQL(Basic)-Certification on HackerRank",
    link: "https://drive.google.com/file/d/1zWiFAfa-zDrllO6uOHhJRgAdw1g16kbP/view",
  },
  {
    quote: "Successfully completed 7 months of frontend development internship.",
    name: "Blue bricks",
    title: "Internship Certificate",
    link: "https://drive.google.com/file/d/1fMbVjeQG-oh_3xKzSi8zw2_U_mpB98oN/view",
  },
  {
    quote: "Check out my latest resume for a detailed overview of my skills, experiences, and projects.",
    name: "Portfolio",
    title: "Resume",
    link: "https://drive.google.com/file/d/1tpIy4wrLUDCDwxS3wt2Xx-O_LC4-Lxsu/view",
  },
];

