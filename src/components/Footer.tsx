import Link from "next/link";
import React from "react";

const Footer = () => {

  const data3 = [
    {
      urls: "https://www.linkedin.com/in/ashishsahoo899/",
      // icons: linkedin,
      name: "Linkedin"
    }, {
      urls: "https://github.com/AashishSahoo",
      // icons: github,
      name: "Github"
    },
  ]

  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 text-gray-400 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <h2 className="text-white text-xl font-bold mb-4 border-b border-gray-800 pb-2">About Me</h2>
          <p className="text-start leading-relaxed hover:text-gray-300 transition-colors duration-300">
            Turning ideas into interactive experiences,
            and fueling digital journeys with code, passion, and precision.

          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-white text-xl font-bold mb-4 border-b border-gray-800 pb-2">
            Quick Links
          </h2>
          <ul className="space-y-3">
            <li>
              <Link
                href="#home"
                className="hover:text-white transition-colors duration-300 flex items-center gap-2 hover:translate-x-2 transform"
              >
                <span>→</span>Home
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="hover:text-white transition-colors duration-300 flex items-center gap-2 hover:translate-x-2 transform"
              >
                <span>→</span>About
              </Link>
            </li>

            <li>
              <Link
                href="#project"
                className="hover:text-white transition-colors duration-300 flex items-center gap-2 hover:translate-x-2 transform"
              >
                <span>→</span>Projects
              </Link>
            </li>
            <li>
              <Link
                href="#education"
                className="hover:text-white transition-colors duration-300 flex items-center gap-2 hover:translate-x-2 transform"
              >
                <span>→</span>Education
              </Link>
            </li>
            <li>
              <Link
                href="#techstack"
                className="hover:text-white transition-colors duration-300 flex items-center gap-2 hover:translate-x-2 transform"
              >
                <span>→</span>Tech Stack
              </Link>
            </li>

            <li>
              <Link
                href="#certification"
                className="hover:text-white transition-colors duration-300 flex items-center gap-2 hover:translate-x-2 transform"
              >
                <span>→</span>Certificates
              </Link>
            </li>

            <li>
              <Link
                href="#contact"
                className="hover:text-white transition-colors duration-300 flex items-center gap-2 hover:translate-x-2 transform"
              >
                <span>→</span>Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-white text-xl font-bold mb-4 border-b border-gray-800 pb-2">Follow Me</h2>
          <div className="flex flex-col space-y-3">
            {data3.map((data, index) => {
              return (
                <Link
                  key={index}
                  href={data.urls}
                  className="hover:text-white transition-colors duration-300 flex items-center gap-2 hover:translate-x-2 transform"
                >
                  <span>→</span>{data.name}
                </Link>
              );
            })}
          </div>

        </div>
        <div className="space-y-4">
          <h2 className="text-white text-xl font-bold mb-4 border-b border-gray-800 pb-2">Contact Me</h2>
          <div className="space-y-3">
            <p className="flex items-center gap-2 hover:text-gray-300 transition-colors duration-300">
              <span>📍</span>Pune, Maharashtra, India
            </p>
            <p className="flex items-center gap-2 hover:text-gray-300 transition-colors duration-300">
              <span>✉️</span>ashishsahoo0013@gmail.com
            </p>
            <p className="flex items-center gap-2 hover:text-gray-300 transition-colors duration-300">
              <span>📞</span>+918999081573
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-800">
        <p className="text-center text-sm text-gray-500 hover:text-gray-400 transition-colors duration-300">
          © 2025 Designed by Ashish Sahoo. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;