"use client";

import { Sparkles } from "lucide-react";

export function TickerBanner() {
  const items = [
    "Full-Stack Web Development",
    "Next.js App Router",
    "React.js & TypeScript",
    "Node.js & Express.js",
    "PostgreSQL & Supabase",
    "RESTful APIs & Auth",
    "Docker Containerization",
    "Tailwind CSS & Framer Motion",
    "Relational Database Design",
    "Vercel Deployment",
  ];

  return (
    <div className="relative w-full overflow-hidden py-4 -rotate-1 bg-[#fb6514] text-white my-8 shadow-xl select-none z-20">
      <div className="flex w-max animate-marquee space-x-6 items-center font-bold tracking-wider text-xs sm:text-sm uppercase">
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center space-x-6 flex-shrink-0">
            <span>{item}</span>
            <Sparkles className="w-3.5 h-3.5 fill-white/80 text-white/80" />
          </div>
        ))}
      </div>
    </div>
  );
}
