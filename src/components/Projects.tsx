
"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";


const content = [
  {
    title: "Axiom Protect 2.0",
    description:
      "Contributed to the development of Axiom 2.0, a web-based application where I developed and optimized multiple pages to enhance user experience and overall performance. I improved reusable UI components to ensure responsiveness and usability across various devices. I efficiently integrated APIs, mapping complex data structures to the frontend interface. A major focus of the project involved working with React Leaflet, where I customized map markers, displayed dynamic radius overlays, and handled multiple geographic locations, including overlapping markers and clustered map views for enhanced visual clarity.",
    tags: ["Internship Project", "React", "Javascript", "Material UI"],

    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        <img
          src="/images/img1.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Axiom Protect 2.0"
          onClick={() => window.open("https://access.axiomprotect.com/AxiomProtect/NewRegister", "_blank")}
          style={{ cursor: "pointer" }}
        />
      </div>
    ),
  },
  {
    title: "Veri5now",
    description:
      "Created multiple UI components for a single page using Next.js, TypeScript and Material UI. Fetched data from backend APIs and efficiently stored and managed state using Redux for consistent UI rendering.Performed end-to-end testing across the entire application to ensure functionality and reliability.",
    tags: ["Internship Project", "Next JS", "Typescript", "Material UI"],

    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        <img
          src="/images/img2.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Veri5now"
          onClick={() => window.open("https://app.veri5now.com/create-account", "_blank")}
          style={{ cursor: "pointer" }}
        />      </div>
    ),
  },

  {
    title: "Self Service Portal",
    description:
      "Developed and structured interactive, high-performance pages using Next.js and TypeScript. Enhanced UI/UX by refining visual elements for a clean, modern, and intuitive user experience. Integrated RESTful APIs to fetch dynamic data and implemented optimized state management for smooth and responsive interactions.",
    tags: ["Internship Project", "Next JS", "Typescript", "Material UI"],

    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/images/img1.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Self Service Portal"

        />

      </div>
    ),
  },

  {
    title: "Meal Mate",
    description:
      "Developed a full-stack food ordering application with role-based access control for Admin, Restaurant Owners, and Users, each with distinct permissions and workflows. Built a dynamic admin dashboard featuring sales analytics, top-performing items/restaurants, and monthly revenue tracking. Implemented secure restaurant onboarding, table booking, and Razorpay test-mode payments. Integrated a DeepSeek R1 AI chatbot using prompt engineering to deliver real-time, context-aware customer support. Designed and consumed RESTful APIs with robust authentication and authorization for smooth data operations and user management.",
    tags: ["Personal Project", "MERN"],

    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        <img
          src="/images/img5.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Meal Mate"
          onClick={() => window.open("https://mm-frontend-amber-zeta.vercel.app/", "_blank")}
          style={{ cursor: "pointer" }}
        />
      </div>
    ),
  },
];
export default function Projects() {
  return (
    <>
      <div className="w-full py-4">

        <StickyScroll content={content} />
      </div>

    </>

  );
}


