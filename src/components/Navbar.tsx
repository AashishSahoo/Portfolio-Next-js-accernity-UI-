

'use client';

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";

import { Icon } from '@iconify/react';

export default function Navbar() {
  const links = [
    {
      title: "Home",
      icon: (
        <Icon icon="iconamoon:home-bold" width="24" height="24" />
      ),
      href: "#home",
    },
    {
      title: "About Me",
      icon: (
        <Icon icon="streamline-logos:about-me-logo-block" width="24" height="24" />

      ),
      href: "#about",
    },
    {
      title: "Projects",
      icon: (
        <Icon icon="carbon:ibm-cloud-projects" width="24" height="24" />
      ),
      href: "#project",
    },
    {
      title: "Education",
      icon: (
        <Icon icon="tdesign:education-filled" width="24" height="24" />),
      href: "#education",
    },
    {
      title: "Tech Stack",
      icon: (
        <Icon icon="ri:stack-fill" width="24" height="24" />
      ),
      href: "#techstack",
    },
    {
      title: "Certificates",
      icon: (
        <Icon icon="grommet-icons:certificate" width="24" height="24" />),
      href: "#certification",
    },
    {
      title: "Contact",
      icon: (
        <Icon icon="fluent-mdl2:edit-contact" width="24" height="24" />),
      href: "#contact",
    },
    {
      title: "GitHub",
      icon: (
        <Icon icon="line-md:github-twotone" width="24" height="24" />),
      href: "https://github.com/AashishSahoo",
    },
    {
      title: "LinkedIN",
      icon: (
        <Icon icon="bi:linkedin" width="24" height="24" />),
      href: "https://www.linkedin.com/in/ashishsahoo899/",
    },
  ];

  return (
    <div className="flex items-center justify-center h-[8rem] w-full" >
      <FloatingDock
        mobileClassName="fixed bottom-6 right-6"
        items={links}
      />
    </div>
  );
}
