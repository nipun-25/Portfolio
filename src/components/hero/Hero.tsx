"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] pt-28 md:pt-36 pb-16 flex flex-col items-center justify-center overflow-hidden scroll-mt-28"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-[#fb6514]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex flex-col items-center text-center relative z-10">
        
        {/* Hello Pill Badge with subtle hand-drawn orange rays */}
        <div className="relative inline-flex items-center justify-center mb-4 md:mb-6">
          {/* Hand-drawn rays */}
          <span className="absolute -top-3 -right-3 text-[#fb6514] text-xs md:text-sm font-black select-none pointer-events-none rotate-12">
            {"\\ /"}
          </span>
          <span className="absolute -bottom-2 -left-3 text-[#fb6514] text-xs font-black select-none pointer-events-none -rotate-12">
            {"//"}
          </span>
          <div className="px-5 py-1.5 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-sm">
            <span className="text-xs md:text-sm font-semibold tracking-wide text-neutral-800 dark:text-neutral-200">
              Hello! 👋
            </span>
          </div>
        </div>

        {/* Large Typography Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] text-neutral-950 dark:text-white max-w-4xl mx-auto">
          I&apos;m <span className="text-[#fb6514] underline decoration-[#fb6514]/30 decoration-wavy decoration-2">Nipun</span>,
          <br />
          Full Stack Developer
        </h1>

        {/* Sub-headline description based on resume */}
        <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto font-normal leading-relaxed">
          {personalInfo.bio}
        </p>

        {/* Central Composition: Portrait over Orange Arch with Side Stats */}
        <div className="relative w-full max-w-5xl mt-8 md:mt-12 flex flex-col lg:flex-row items-center justify-center">
          
          {/* Left Developer Highlight Card (Desktop) */}
          <div className="hidden lg:flex flex-col items-start text-left w-64 p-5 rounded-2xl glass-panel border border-black/5 dark:border-white/10 shadow-lg absolute left-0 top-1/3 z-20 transition-transform hover:-translate-y-1">
            <div className="text-3xl text-[#fb6514] font-serif leading-none mb-2">“</div>
            <p className="text-xs font-medium text-neutral-700 dark:text-neutral-300 leading-relaxed">
              &quot;Building full-stack software with modern frontend, backend, database, and cloud technologies.&quot;
            </p>
            <div className="mt-3 pt-3 border-t border-black/5 dark:border-white/10 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-semibold text-neutral-500 dark:text-neutral-400">
                Parul University · 2023–2027
              </span>
            </div>
          </div>

          {/* Center: Orange Arch + Portrait Cutout + Glass CTA Pill */}
          <div className="relative w-[300px] sm:w-[380px] md:w-[440px] flex flex-col items-center">
            
            {/* Orange Semicircle Arch (Visual Source of Truth from 1st.png) */}
            <div className="absolute bottom-0 w-[280px] sm:w-[350px] md:w-[400px] h-[240px] sm:h-[300px] md:h-[340px] rounded-t-full bg-gradient-to-b from-[#fb6514] via-[#f77f36] to-[#e45204] -z-10 shadow-2xl opacity-95" />
            
            {/* Cutout Portrait */}
            <div className="relative w-[280px] sm:w-[350px] md:w-[420px] h-[350px] sm:h-[430px] md:h-[500px] overflow-visible">
              <Image
                src="/profile/profile_cutout.png"
                alt="Nipun Kulshrestha - Full Stack Developer"
                fill
                priority
                sizes="(max-width: 640px) 280px, (max-width: 768px) 350px, 420px"
                className="object-contain object-bottom select-none pointer-events-none drop-shadow-2xl"
              />
            </div>

            {/* Overlaid Frosted Glass CTA Pill (from 1st.png & 10th.png) */}
            <div className="absolute -bottom-5 sm:-bottom-6 z-30 flex items-center gap-2 p-1.5 rounded-full bg-black/60 dark:bg-black/80 backdrop-blur-xl border border-white/20 shadow-2xl">
              <Link
                href="/#projects"
                className="flex items-center gap-1.5 px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-[#fb6514] text-white hover:bg-[#fd853a] transition-all duration-200 shadow-md group"
              >
                <span>Projects</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                href="/#contact"
                className="px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium text-white hover:text-white hover:bg-white/10 transition-colors"
              >
                Let&apos;s Connect
              </Link>
            </div>
          </div>

          {/* Right Verified Statistics Card (Desktop) */}
          <div className="hidden lg:flex flex-col items-start text-left w-64 p-5 rounded-2xl glass-panel border border-black/5 dark:border-white/10 shadow-lg absolute right-0 top-1/3 z-20 transition-transform hover:-translate-y-1">
            <div className="flex items-center gap-1 text-amber-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
              <span className="text-[11px] font-bold text-neutral-500 dark:text-neutral-400 ml-1">Podium</span>
            </div>
            <div className="text-3xl font-black text-neutral-900 dark:text-white">
              3rd Place
            </div>
            <div className="text-xs font-semibold text-[#fb6514] mt-0.5">
              Code Optics Programming
            </div>
            <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-1 leading-snug">
              Parul University Competitive Programming Contest
            </p>
          </div>

        </div>

        {/* Mobile & Tablet Statistics Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-3xl mt-14 sm:mt-16 pt-6 border-t border-black/5 dark:border-white/10">
          {personalInfo.stats.map((stat, i) => (
            <div
              key={i}
              className="p-3.5 rounded-xl glass-panel flex flex-col items-center text-center transition-transform hover:scale-[1.02]"
            >
              <span className="text-xl sm:text-2xl font-black text-neutral-900 dark:text-white">
                {stat.value}
              </span>
              <span className="text-xs font-bold text-[#fb6514] mt-0.5">
                {stat.label}
              </span>
              <span className="text-[10px] text-neutral-500 dark:text-neutral-400 mt-1 line-clamp-1">
                {stat.detail}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
