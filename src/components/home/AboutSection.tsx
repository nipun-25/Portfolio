"use client";

import Link from "next/link";
import { ArrowUpRight, Code2, Database, GraduationCap, Layout, Sparkles, Terminal } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export function AboutSection() {
  const highlights = [
    {
      icon: Layout,
      title: "Modern Frontend Engineering",
      desc: "Creating fluid, responsive user interfaces with Next.js, React.js, TypeScript, and Tailwind CSS.",
    },
    {
      icon: Terminal,
      title: "Robust Backend & REST APIs",
      desc: "Building structured server logic, JWT session authentication, and API endpoints using Node.js and Express.",
    },
    {
      icon: Database,
      title: "Data Architecture & Persistence",
      desc: "Designing performant relational and document schemas using PostgreSQL, Supabase, and MongoDB.",
    },
    {
      icon: Code2,
      title: "Algorithmic Problem Solving",
      desc: "3rd Place in Code Optics competitive programming and active problem solving on LeetCode.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#fb6514]/10 text-[#fb6514] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Me</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-neutral-900 dark:text-white">
              Engineering with <span className="text-[#fb6514]">Purpose</span> & Precision
            </h2>
          </div>
          <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 max-w-md">
            Computer Science and Engineering student at Parul University dedicated to translating real-world operational challenges into scalable, full-stack software systems.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Story Card (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl glass-panel border border-black/5 dark:border-white/10 flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-4">
                Hi, I&apos;m Nipun Kulshrestha.
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
                {personalInfo.bio}
              </p>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                {personalInfo.extendedBio}
              </p>
              <div className="p-4 rounded-2xl bg-neutral-100 dark:bg-neutral-900/60 border border-black/5 dark:border-white/5 flex items-start gap-3">
                <GraduationCap className="w-6 h-6 text-[#fb6514] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-neutral-900 dark:text-white">
                    Parul University · Vadodara, Gujarat
                  </h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                    Bachelor of Technology in Computer Science & Engineering (2023 – 2027) · <strong className="text-neutral-700 dark:text-neutral-200">CGPA: 7.83 / 10</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-black/5 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-neutral-500">Key Projects:</span>
                <div className="flex flex-wrap gap-1.5">
                  {["Civic Issue Tracker", "TravelLoop", "Sentinel"].map((p) => (
                    <span
                      key={p}
                      className="px-2.5 py-1 rounded-md text-xs font-semibold bg-neutral-200/60 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href="/#contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#fb6514] hover:underline"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Pillars Cards (5 Cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl glass-card border border-black/5 dark:border-white/10 flex items-start gap-4 transition-all hover:translate-x-1"
                >
                  <div className="p-2.5 rounded-xl bg-[#fb6514]/10 text-[#fb6514] flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
