"use client";

import * as React from "react";
import Image from "next/image";
import { Calendar, Eye, Users } from "lucide-react";
import { eventActivitiesData } from "@/data/portfolioData";
import { CertificateModal, CertificateModalData } from "@/components/ui/CertificateModal";

export function EventsActivitiesSection() {
  const [selectedCert, setSelectedCert] = React.useState<CertificateModalData | null>(null);

  return (
    <section id="events" className="py-20 md:py-28 relative scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#fb6514]/10 text-[#fb6514] mb-3">
              <Users className="w-3.5 h-3.5" />
              <span>Event Leadership & Technical Engagement</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-900 dark:text-white">
              Events & <span className="text-[#fb6514]">Activities</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 max-w-md">
            Chronological record of university event coordination, organizing committee responsibilities, and technical workshops (2023–2026).
          </p>
        </div>

        {/* 3-Column Grid for Chronological Events (Oldest to Newest) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventActivitiesData.map((item, index) => {
            // Distinct badge styling depending on role
            const badgeClasses =
              item.type === "ORGANIZING COMMITTEE"
                ? "bg-[#fb6514]/15 text-[#fb6514] border border-[#fb6514]/30"
                : item.type === "TEAM LEAD" || item.type === "LEAD OF THE TEAM"
                ? "bg-[#fb6514]/15 text-[#fb6514] border border-[#fb6514]/30 font-bold"
                : item.type === "COORDINATOR"
                ? "bg-amber-500/15 text-amber-500 dark:text-amber-400 border border-amber-500/30"
                : item.type === "WORKSHOP ATTENDED"
                ? "bg-blue-500/15 text-blue-500 dark:text-blue-400 border border-blue-500/30"
                : "bg-neutral-500/15 text-neutral-600 dark:text-neutral-300 border border-neutral-500/20";

            return (
              <div
                key={item.id}
                className="p-6 rounded-3xl glass-panel border border-black/5 dark:border-white/10 hover:border-[#fb6514]/30 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl"
              >
                <div>
                  {/* Certificate Image Thumbnail (Clickable to open Lightbox) */}
                  <div
                    onClick={() =>
                      setSelectedCert({
                        title: item.category ? `${item.category} — ${item.title}` : item.title,
                        image: item.certificateImage,
                        alt: item.certificateAlt,
                        year: item.year,
                        organization: item.organization,
                        type: item.type,
                      })
                    }
                    className="relative h-44 w-full rounded-2xl overflow-hidden bg-neutral-900 border border-black/10 dark:border-white/10 mb-5 cursor-pointer group/thumb"
                  >
                    <Image
                      src={item.certificateImage}
                      alt={item.certificateAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center group-hover/thumb:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    {/* Year badge */}
                    <span className="absolute bottom-3 left-3 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded bg-[#fb6514] text-white">
                      {item.year}
                    </span>

                    {/* Chronological order index */}
                    <span className="absolute top-3 right-3 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-black/60 text-neutral-300 border border-white/15">
                      0{index + 1}
                    </span>

                    <div className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-[11px] font-semibold opacity-0 group-hover/thumb:opacity-100 transition-opacity border border-white/20">
                      <Eye className="w-3.5 h-3.5 text-[#fb6514]" />
                      <span>Open Certificate</span>
                    </div>
                  </div>

                  {/* Organization & Year */}
                  <div className="flex items-center gap-1.5 text-neutral-500 dark:text-neutral-400 mb-2 text-xs" title={item.organization}>
                    <Calendar className="w-3.5 h-3.5 text-[#fb6514] shrink-0" />
                    <span className="font-semibold text-neutral-700 dark:text-neutral-300 truncate">
                      {item.organization}
                    </span>
                  </div>

                  {/* Category (if present) */}
                  {item.category && (
                    <span className="block text-[10.5px] font-extrabold uppercase tracking-wider text-[#fb6514] mb-1">
                      {item.category}
                    </span>
                  )}

                  {/* Event Title */}
                  <h3 className="text-lg sm:text-xl font-black text-neutral-900 dark:text-white group-hover:text-[#fb6514] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {/* Description matching exact factual role */}
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-2.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Action Row: Type Badge + "View Certificate" Accessible Button */}
                <div className="mt-5 pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between gap-2">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full truncate max-w-[170px] ${badgeClasses}`}>
                    {item.type}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      setSelectedCert({
                        title: item.category ? `${item.category} — ${item.title}` : item.title,
                        image: item.certificateImage,
                        alt: item.certificateAlt,
                        year: item.year,
                        organization: item.organization,
                        type: item.type,
                      })
                    }
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#fb6514] hover:text-[#fd853a] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fb6514] rounded-md px-1 py-0.5 shrink-0 cursor-pointer"
                    aria-label={`View certificate for ${item.title}`}
                  >
                    <span>View Certificate</span>
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Reusable Accessible Lightbox Modal */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}
