"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { projectsData } from "@/data/portfolioData";

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = React.useState("All");

  const categories = ["All", "Full Stack", "Web Application", "AI & Computer Vision"];

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === "All") return true;
    return project.categories.includes(activeCategory);
  });

  return (
    <section id="projects" className="py-20 md:py-28 relative scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header (recreating 5th.png) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 dark:text-white leading-tight">
              Lets have a look at
              <br />
              my <span className="text-[#fb6514]">Portfolio</span>
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-[#fb6514] text-white hover:bg-[#fd853a] transition-colors shadow-md self-start sm:self-auto"
          >
            See All Case Studies
          </Link>
        </div>

        {/* Filter Pills (from 5th.png) */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-[#fb6514] text-white shadow-md shadow-[#fb6514]/25"
                  : "bg-neutral-100 dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Project Treatment: Civic Issue Tracker */}
        {filteredProjects.find((p) => p.featured) && (
          <div className="mb-12">
            {(() => {
              const feat = filteredProjects.find((p) => p.featured)!;
              return (
                <div className="p-6 sm:p-8 md:p-10 rounded-3xl glass-panel border border-[#fb6514]/30 bg-gradient-to-br from-[#fb6514]/5 via-transparent to-transparent flex flex-col lg:flex-row items-stretch gap-8 shadow-xl">
                  {/* Left content */}
                  <div className="lg:w-1/2 flex flex-col justify-between">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#fb6514] text-white mb-3">
                        <Sparkles className="w-3 h-3" />
                        <span>FEATURED PROJECT</span>
                      </div>
                      <h3 className="text-2xl sm:text-4xl font-black text-neutral-900 dark:text-white leading-tight">
                        {feat.title}
                      </h3>
                      {/* Tech Stack on separate line directly under title */}
                      <p className="text-xs sm:text-sm font-semibold text-[#fb6514] mt-2 mb-3">
                        {feat.technologies.join(" · ")}
                      </p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
                        {feat.description}
                      </p>

                      {/* Key features bullets */}
                      <ul className="space-y-1.5 mb-6">
                        {feat.keyFeatures.slice(0, 4).map((f, i) => (
                          <li key={i} className="text-xs text-neutral-600 dark:text-neutral-400 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#fb6514] mt-1.5 flex-shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-black/5 dark:border-white/10">
                      <Link
                        href={`/projects/${feat.slug}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-[#fb6514] text-white hover:bg-[#fd853a] transition-all shadow-md group"
                      >
                        <span>View Detailed Case Study</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                      {feat.liveUrl && (
                        <a
                          href={feat.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </a>
                      )}
                      {feat.githubUrl && (
                        <a
                          href={feat.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white transition-colors"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>GitHub</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Image Mockup */}
                  <div className="lg:w-1/2 relative min-h-[260px] sm:min-h-[320px] rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-neutral-950 shadow-inner group">
                    <Image
                      src={feat.image}
                      alt={feat.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* Secondary Projects Grid (TravelLoop and Sentinel) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects
            .filter((p) => !p.featured)
            .map((project) => (
              <div
                key={project.slug}
                className="p-6 sm:p-7 rounded-3xl glass-panel border border-black/5 dark:border-white/10 hover:border-[#fb6514]/30 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-2xl"
              >
                <div>
                  {/* Image Preview Container */}
                  <div className="relative h-56 sm:h-64 w-full rounded-2xl overflow-hidden bg-neutral-950 border border-black/10 dark:border-white/10 mb-6 shadow-inner">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    
                    {/* Watermark/Category Tag */}
                    <span className="absolute bottom-3 left-3 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-white border border-white/15">
                      {project.tagline}
                    </span>

                    {/* Circular Arrow Button (inspired by 5th.png) */}
                    <Link
                      href={`/projects/${project.slug}`}
                      aria-label={`Open case study for ${project.title}`}
                      className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 dark:bg-black/80 text-neutral-900 dark:text-white flex items-center justify-center border border-white/20 shadow-lg group-hover:bg-[#fb6514] group-hover:text-white transition-all duration-200"
                    >
                      <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                    </Link>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl sm:text-2xl font-black text-neutral-900 dark:text-white group-hover:text-[#fb6514] transition-colors">
                    {project.title}
                  </h3>

                  {/* Tech Stack on separate line directly under title */}
                  <p className="text-xs font-semibold text-[#fb6514] mt-1.5 mb-3">
                    {project.technologies.join(" · ")}
                  </p>

                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-black/5 dark:border-white/10 mt-auto">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#fb6514] hover:underline"
                  >
                    <span>Explore Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-[#fb6514] transition-colors"
                        aria-label={`${project.title} GitHub repository`}
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-[#fb6514] transition-colors"
                        aria-label={`${project.title} live demo`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>

      </div>
    </section>
  );
}
