"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { projectsData } from "@/data/portfolioData";

export function CapabilitiesSection() {
  // Exactly 3 showcase projects in order: Civic Issue Tracker, TravelLoop, Sentinel
  const showcaseProjects = [
    projectsData.find((p) => p.slug === "civic-issue-tracker") || {
      slug: "civic-issue-tracker",
      title: "Civic Issue Tracker",
      tagline: "Featured Project · Computer Vision · Full Stack",
      description:
        "Full-stack civic issue reporting and monitoring platform designed to streamline urban maintenance, infrastructure management, and municipal response workflows.",
      technologies: ["Next.js", "React.js", "Tailwind CSS", "TypeScript", "Node.js", "Supabase", "Leaflet"],
      image: "/projects/civic-issue-tracker/Screenshot 2026-09-13 140114.png",
      liveUrl: "https://civicissuetracker.vercel.app/",
      githubUrl: "https://github.com/Modi-Krish/Civic-Issue-Tracker-",
    },
    projectsData.find((p) => p.slug === "travelloop") || {
      slug: "travelloop",
      title: "TravelLoop",
      tagline: "Full Stack · PostgreSQL · Supabase",
      description:
        "A premium full-stack travel planning platform with seamless itinerary management, dynamic budget tracking, secure itinerary sharing, and collaborative planning tools.",
      technologies: ["TypeScript", "Next.js", "React.js", "Supabase", "PostgreSQL", "Tailwind CSS", "Vercel"],
      image: "/projects/traveloop/Screenshot 2026-09-13 135511.png",
      liveUrl: "https://traveloop-black.vercel.app/",
      githubUrl: "https://github.com/nipun-25/Traveloop",
    },
    projectsData.find((p) => p.slug === "sentinel") || {
      slug: "sentinel",
      title: "Sentinel",
      tagline: "Full Stack · Real-Time Systems · Docker",
      description:
        "Full-stack safety and monitoring platform engineered for gig workers and delivery personnel, featuring real-time risk assessment and incident awareness.",
      technologies: ["Next.js", "React.js", "Tailwind CSS", "Radix UI", "Supabase", "PostgreSQL", "Docker"],
      image: "/projects/sentinel/Sentinel_Thumbnail.png",
      githubUrl: "https://github.com/KRUMER2023/Guidewire_Devtrials_Team_Megatron_Insurance_Startup_Simulation",
    },
  ];

  const [activeProject, setActiveProject] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);

  // Single managed autoplay timer (approximately 2 seconds per project)
  const startAutoplay = React.useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setActiveProject((prev) => (prev + 1) % showcaseProjects.length);
      }, 2000);
    }
  }, [isPaused, showcaseProjects.length]);

  React.useEffect(() => {
    startAutoplay();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [startAutoplay]);

  // Immediate click response with timer reset
  const handleSelectProject = (index: number) => {
    setActiveProject(index);
    startAutoplay();
  };

  // Pause on hover
  const handleMouseEnter = () => {
    setIsPaused(true);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  // Keyboard navigation for indicators (ArrowLeft, ArrowRight)
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      handleSelectProject((activeProject + 1) % showcaseProjects.length);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      handleSelectProject((activeProject - 1 + showcaseProjects.length) % showcaseProjects.length);
    }
  };

  const currProject = showcaseProjects[activeProject];

  return (
    <section
      id="capabilities"
      className="py-20 md:py-28 relative overflow-hidden bg-neutral-900 text-white rounded-[2.5rem] my-12 mx-3 sm:mx-6 md:mx-10 border border-white/10 shadow-2xl scroll-mt-28"
    >
      {/* Background Texture from Reference 2nd.png & 6th.png */}
      <div className="absolute inset-0 opacity-25 mix-blend-overlay pointer-events-none -z-10">
        <Image
          src="/backgrounds/dark-ribbed-glow.jpg"
          alt="Abstract ribbed background texture"
          fill
          className="object-cover"
        />
      </div>

      {/* Floating 3D Abstract Accents (extracted from 11th.png) */}
      <div className="absolute -top-16 -right-16 w-64 h-64 opacity-20 pointer-events-none -z-10 animate-pulse">
        <Image
          src="/backgrounds/abstract-3d-shapes.png"
          alt="3D abstract decorative shape"
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header (recreating 2nd.png layout) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
          <div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Capabilities & <span className="text-[#fb6514]">What I Build</span>
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2 font-medium tracking-wide uppercase">
              Full-Stack Architecture · High-Performance Endpoints · Responsive Interfaces
            </p>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-md leading-relaxed">
            Engineering robust digital platforms from relational database schemas and automated vision triage to real-time maps and reactive interfaces.
          </p>
        </div>

        {/* Interactive Showcase Carousel (Displays ONE project at a time with hover pause) */}
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          aria-roledescription="carousel"
          aria-label="Project showcase carousel"
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fb6514] rounded-3xl"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currProject.slug}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="p-6 sm:p-8 md:p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12 shadow-2xl"
            >
              {/* Left Details Column */}
              <div className="lg:w-1/2 flex flex-col justify-between w-full">
                <div>
                  {/* Badge & Step indicator */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#fb6514] text-white">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{currProject.tagline || "SHOWCASE PROJECT"}</span>
                    </div>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-white/10 text-neutral-300">
                      0{activeProject + 1} / 0{showcaseProjects.length}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                    {currProject.title}
                  </h3>

                  {/* Tech Stack on separate line directly under title */}
                  <p className="text-xs sm:text-sm md:text-base font-semibold text-[#fb6514] mt-2 mb-4 tracking-wide">
                    {currProject.technologies.join(" · ")}
                  </p>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
                    {currProject.description}
                  </p>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/10">
                  <Link
                    href={`/projects/${currProject.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-[#fb6514] text-white hover:bg-[#fd853a] transition-all shadow-md group"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>

                  {currProject.liveUrl && (
                    <a
                      href={currProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}

                  {currProject.githubUrl && (
                    <a
                      href={currProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors"
                      aria-label={`${currProject.title} GitHub repository`}
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Right Image Mockup Column */}
              <div className="lg:w-1/2 w-full relative min-h-[260px] sm:min-h-[340px] lg:min-h-[380px] rounded-2xl overflow-hidden border border-white/10 bg-black/50 shadow-inner group">
                <Image
                  src={currProject.image}
                  alt={currProject.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Circular Arrow Button Overlay */}
                <Link
                  href={`/projects/${currProject.slug}`}
                  aria-label={`Open case study for ${currProject.title}`}
                  className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-neutral-900/90 text-white border border-white/20 flex items-center justify-center hover:bg-[#fb6514] hover:border-[#fb6514] transition-all duration-200 shadow-xl group-hover:scale-110"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Accessible Carousel Navigation Indicators (Orange Active Line, Grey Dots) */}
          <div
            className="flex items-center justify-center gap-3 mt-8 md:mt-10"
            role="tablist"
            aria-label="Project showcase controls"
          >
            {showcaseProjects.map((p, idx) => {
              const isActive = activeProject === idx;
              return (
                <button
                  key={p.slug}
                  type="button"
                  role="tab"
                  id={`carousel-indicator-${idx}`}
                  aria-selected={isActive}
                  aria-controls={`project-panel-${idx}`}
                  aria-label={`Show ${p.title}`}
                  onClick={() => handleSelectProject(idx)}
                  className="relative p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fb6514] rounded-full cursor-pointer transition-transform active:scale-90"
                >
                  <span className="sr-only">Show {p.title}</span>
                  <div
                    className={`h-2.5 rounded-full transition-all duration-300 ease-out ${
                      isActive
                        ? "w-8 sm:w-10 bg-[#fb6514] shadow-md shadow-[#fb6514]/40"
                        : "w-2.5 bg-white/25 hover:bg-white/50"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
