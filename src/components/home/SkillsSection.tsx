"use client";

import * as React from "react";
import { CheckCircle2, Layers } from "lucide-react";
import { skillsData } from "@/data/portfolioData";

interface SkillPillProps {
  name: string;
}

// Shared, reusable skill pill component guaranteeing consistent styling & hover behavior
export function SkillPill({ name }: SkillPillProps) {
  return (
    <span
      tabIndex={0}
      className="group/pill inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold cursor-default select-none bg-neutral-100 dark:bg-white/10 text-neutral-800 dark:text-neutral-200 border border-black/5 dark:border-white/10 hover:bg-[#fb6514] hover:text-white hover:border-[#fb6514] hover:shadow-md hover:shadow-[#fb6514]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fb6514] focus-visible:bg-[#fb6514] focus-visible:text-white transition-all duration-200 ease-out"
    >
      <CheckCircle2 className="w-3 h-3 text-[#fb6514] group-hover/pill:text-white group-focus-visible/pill:text-white transition-colors duration-200 shrink-0" />
      <span>{name}</span>
    </span>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-28 relative scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#fb6514]/10 text-[#fb6514] mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Technical Arsenal</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-900 dark:text-white">
              Skills & <span className="text-[#fb6514]">Core Technologies</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 max-w-md">
            Organized across languages, frontend frameworks, backend engines, databases, development tooling, and computer science foundations.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl glass-panel border border-black/5 dark:border-white/10 hover:border-[#fb6514]/30 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white group-hover:text-[#fb6514] transition-colors">
                    {category.title}
                  </h3>
                  <span className="text-[11px] font-semibold text-neutral-400">
                    {category.skills.length} Skills
                  </span>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Chips — All rendering with shared SkillPill component */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <SkillPill key={skill.name} name={skill.name} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
