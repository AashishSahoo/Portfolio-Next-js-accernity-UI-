import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/Spotlight";
import AboutMe from "./AboutMe";

export function SpotlightContainer() {
  return (
    <div className="relative flex h-[60rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center">
      <div

      />


      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="#a948ff"
      />
      <AboutMe />
    </div>
  );
}
