"use client";

import { Calendar, MapPin } from "lucide-react";
import { journeyData } from "@/data/portfolioData";

export function JourneySection() {
  return (
    <section id="journey" className="py-20 md:py-28 relative scroll-mt-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading (recreating 3rd.png) */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-900 dark:text-white">
            My <span className="text-[#fb6514]">Journey & Milestones</span>
          </h2>
          <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto mt-3">
            Academic foundation, competitive programming achievements, hackathons, and technical leadership milestones.
          </p>
        </div>

        {/* Timeline Container (Recreating 3rd.png dashed line & circular nodes) */}
        <div className="relative">
          
          {/* Central Vertical Dashed Line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 border-l-2 border-dashed border-neutral-300 dark:border-neutral-700 pointer-events-none" />

          <div className="space-y-12">
            {journeyData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const isOrangeNode = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className="relative flex flex-col md:flex-row items-start md:items-center group"
                >
                  {/* Left Column (Desktop) */}
                  <div
                    className={`w-full md:w-1/2 pl-14 md:pl-0 md:pr-10 text-left ${
                      isEven ? "md:text-right" : "md:order-2 md:text-left md:pl-10"
                    }`}
                  >
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#fb6514]/10 text-[#fb6514] mb-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-black text-neutral-900 dark:text-white group-hover:text-[#fb6514] transition-colors">
                      {item.organization}
                    </h3>
                    <div
                      className={`flex items-center gap-1 text-xs text-neutral-500 mt-1 ${
                        isEven ? "md:justify-end" : "md:justify-start"
                      }`}
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Central Timeline Circular Node (3rd.png reference design) */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-transform group-hover:scale-125 ${
                        isOrangeNode
                          ? "bg-[#fb6514] border-white dark:border-black shadow-md shadow-[#fb6514]/40"
                          : "bg-neutral-900 dark:bg-white border-white dark:border-black"
                      }`}
                    >
                      <div className="w-2 h-2 rounded-full bg-white dark:bg-black" />
                    </div>
                  </div>

                  {/* Right Column (Desktop) */}
                  <div
                    className={`w-full md:w-1/2 pl-14 md:pl-10 mt-3 md:mt-0 ${
                      isEven ? "md:order-2" : "md:text-right md:pr-10 md:pl-0"
                    }`}
                  >
                    <div className="p-5 rounded-2xl glass-panel border border-black/5 dark:border-white/10 hover:border-[#fb6514]/30 transition-all shadow-sm">
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <h4 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white">
                          {item.title}
                        </h4>
                        {item.badge && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 flex-shrink-0">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
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
