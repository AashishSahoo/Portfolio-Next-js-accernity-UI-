"use client";
import React from "react";

import ProfileCard from '@/components/ProfileCard/ProfileCard'
// import GlassIcons from "@/components/GlassIcons/GlassIcons"

// import { Icon } from '@iconify/react';
import { LinkPreviewDemo } from "../components/AboutMe/LinkPreviewDemo";

// const items = [
//   {
//     icon: <Icon icon="circum:linkedin" width="32" height="32" />,
//     color: 'blue',
//     label: 'Linkedin',
//     urls: "https://linkedin.com/in/rohit-kumar-chaurasia-220742243"
//   },
//   {
//     icon: <Icon icon="hugeicons:github-01" width="32" height="32" />,
//     color: 'purple',
//     label: 'Github',
//     urls: "https://github.com/Rohit8953",
//   },
//   {
//     icon: <Icon icon="pajamas:twitter" width="32" height="32" />,
//     color: 'indigo',
//     label: 'Twitter',
//     urls: "https://x.com/Rohitch82888068"
//   },
//   {
//     icon: <Icon icon="prime:instagram" width="32" height="32" />,
//     color: 'red',
//     label: 'Instagram',
//     urls: "https://www.instagram.com/rohitchaurasia2452/"
//   },
// ];

const AboutMe = () => {
  return (
    <section className="bg-black ">
      <div className="container max-w-7xl mx-auto py-16 px-0 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 sm:p-5">

          <div className="max-w-2xl p-6 ">

            <LinkPreviewDemo />



          </div>

          <div className="mx-auto">
            <ProfileCard
              name="Ashish Sahoo"
              title="Software Developer"
              handle="ashishsahoo"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/images/profilephoto.png"
              miniAvatarUrl="/images/profilephoto.png"
              showUserInfo={true}
              enableTilt={true}
              behindGradient=""
              innerGradient=""
              onContactClick={() => console.log('Contact clicked')}
            />

          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;