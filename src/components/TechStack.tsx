import { HoverEffect } from "@/components/ui/card-hover-effect";

export function TechStack() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Frontend",
    description:
      "React, Next.js, TypeScript, Material UI , JavaScript",
    link: "#frontend",
  },
  {
    title: "Backend",
    description:
      "Node.js, Express.js, MongoDB, REST APIs ",
    link: "#backend",
  },
  {
    title: "DevOps",
    description:
      "Git, GitHub, CI/CD",
    link: "#devops",
  },
  {
    title: "Tools",
    description:
      "VS Code, Chrome DevTools",
    link: "#tools",
  },
  {
    title: "Frameworks",
    description:
      "Iconify , Next.js , Express.js",
    link: "#frameworks",
  },
  {
    title: "Libraries",
    description:
      "Redux, Axios , Material UI",
    link: "#libraries",
  },
];
