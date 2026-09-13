"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, Code2 } from "lucide-react";
import { engineeringHighlightsData } from "@/data/portfolioData";

export function EngineeringHighlightsSection() {
  return (
    <section id="engineering-highlights" className="py-20 md:py-28 relative scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#fb6514]/10 text-[#fb6514] mb-3">
              <Code2 className="w-3.5 h-3.5" />
              <span>Project Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-900 dark:text-white leading-tight">
              Engineering <span className="text-[#fb6514]">Highlights</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 max-w-md leading-relaxed">
            A closer look at the architecture, technologies, and engineering decisions behind my projects.
          </p>
        </div>

        {/* 3 Highlights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {engineeringHighlightsData.map((item) => (
            <div
              key={item.slug}
              className="p-6 sm:p-7 rounded-3xl glass-panel border border-black/5 dark:border-white/10 hover:border-[#fb6514]/30 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-2xl"
            >
              <div>
                {/* Project Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#fb6514]/10 text-[#fb6514]">
                    {item.badge}
                  </span>
                  <span className="text-[11px] font-semibold text-neutral-400">
                    {item.projectName}
                  </span>
                </div>

                {/* Highlight Title */}
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white group-hover:text-[#fb6514] transition-colors leading-snug mb-3">
                  <Link href={item.href} className="focus:outline-none focus-visible:underline">
                    {item.title}
                  </Link>
                </h3>

                {/* Concise Factual Technical Description */}
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action Bar */}
              <div className="pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between mt-auto">
                <Link
                  href={item.href}
                  className="text-xs font-bold text-[#fb6514] hover:text-[#fd853a] hover:underline inline-flex items-center gap-1"
                >
                  <span>View Case Study ↗</span>
                </Link>
                
                {/* Circular Animated Arrow Link */}
                <Link
                  href={item.href}
                  aria-label={`View ${item.projectName} case study`}
                  className="w-9 h-9 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 flex items-center justify-center group-hover:bg-[#fb6514] group-hover:text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fb6514]"
                >
                  <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
