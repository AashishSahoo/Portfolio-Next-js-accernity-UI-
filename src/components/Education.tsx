import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Calendar, GraduationCap, School } from "lucide-react";


export function Education() {
  const data = [
    {
      title: "MCA",
      content: (
        <div className="space-y-3">
          {/* Year + Course Row */}
          <div className="flex flex-wrap items-center gap-4 text-base text-neutral-300">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-cyan-400" />
              <span className="text-white font-semibold text-lg">2022 - 2024</span>
            </div>
            <span className="text-lg text-neutral-400">| Master in Computer Application</span>
          </div>

          {/* University */}
          <div className="flex items-center gap-2 text-base text-neutral-300">
            <GraduationCap className="h-5 w-5 text-cyan-400" />
            <span>Savitribai Phule Pune University</span>
          </div>

          {/* Marks */}
          <div className="flex items-center gap-2 text-base font-semibold text-neon-green">
            <School className="h-5 w-5 text-neon-green" />
            CGPA: 8.18 / 10
          </div>
        </div>
      ),
    },
    {
      title: "Bsc Computer Science",
      content: (
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-4 text-base text-neutral-300">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-cyan-400" />
              <span className="text-white font-semibold text-lg">2019 - 2022</span>
            </div>
            <span className="text-lg text-neutral-400">| Bachelor of Science in Computer Science</span>
          </div>
          <div className="flex items-center gap-2 text-base text-neutral-300">
            <GraduationCap className="h-5 w-5 text-cyan-400" />
            <span>Savitribai Phule Pune University</span>
          </div>
          <div className="flex items-center gap-2 text-base font-semibold text-neon-green">
            <School className="h-5 w-5 text-neon-green" />
            CGPA: 7.82 / 10
          </div>
        </div>
      ),
    },
    {
      title: "HSC",
      content: (
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-4 text-base text-neutral-300">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-cyan-400" />
              <span className="text-white font-semibold text-lg">2019</span>
            </div>
            <span className="text-lg text-neutral-400">| 12th - Science</span>
          </div>
          <div className="flex items-center gap-2 text-base text-neutral-300">
            <GraduationCap className="h-5 w-5 text-cyan-400" />
            <span>Maharashtra State Board</span>
          </div>
          <div className="flex items-center gap-2 text-base font-semibold text-neon-pink">
            <School className="h-5 w-5 text-neon-pink" />
            70.4%
          </div>
        </div>
      ),
    },
    {
      title: "SSC",
      content: (
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-4 text-base text-neutral-300">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-cyan-400" />
              <span className="text-white font-semibold text-lg">2017</span>
            </div>
            <span className="text-lg text-neutral-400">| 10th - General</span>
          </div>
          <div className="flex items-center gap-2 text-base text-neutral-300">
            <GraduationCap className="h-5 w-5 text-cyan-400" />
            <span>Maharashtra State Board</span>
          </div>
          <div className="flex items-center gap-2 text-base font-semibold text-neon-pink">
            <School className="h-5 w-5 text-neon-pink" />
            83.2%
          </div>
        </div>
      ),
    },


  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
