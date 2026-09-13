"use client";

import * as React from "react";
import Image from "next/image";
import { Award, Eye, Trophy } from "lucide-react";
import { achievementsData } from "@/data/portfolioData";
import { CertificateModal, CertificateModalData } from "@/components/ui/CertificateModal";

export function AchievementsSection() {
  const [selectedCert, setSelectedCert] = React.useState<CertificateModalData | null>(null);

  return (
    <section id="achievements" className="py-20 md:py-28 relative scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#fb6514]/10 text-[#fb6514] mb-3">
              <Trophy className="w-3.5 h-3.5" />
              <span>Podium Honors & National Challenges</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-900 dark:text-white">
              Achievements & <span className="text-[#fb6514]">Badges</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 max-w-md">
            Verified competitive programming podium finishes and national innovation challenge selections.
          </p>
        </div>

        {/* 2-Column Grid for Pure Verified Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-3xl glass-panel border border-black/5 dark:border-white/10 hover:border-[#fb6514]/30 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-2xl"
            >
              <div>
                {/* Certificate Image Thumbnail (Clickable to open Lightbox) */}
                {item.image && (
                  <div
                    onClick={() =>
                      setSelectedCert({
                        title: item.title,
                        image: item.image!,
                        alt: item.certificateAlt || `${item.title} certificate`,
                        year: item.year,
                        organization: item.organization,
                        type: item.badge,
                      })
                    }
                    className="relative h-52 sm:h-60 w-full rounded-2xl overflow-hidden bg-neutral-900 border border-black/10 dark:border-white/10 mb-6 cursor-pointer group/thumb"
                  >
                    <Image
                      src={item.image}
                      alt={item.certificateAlt || item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center group-hover/thumb:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    {/* Year badge */}
                    <span className="absolute bottom-3.5 left-3.5 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded bg-[#fb6514] text-white">
                      {item.year}
                    </span>

                    {/* Hover hint */}
                    <div className="absolute bottom-3.5 right-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-xs font-semibold opacity-0 group-hover/thumb:opacity-100 transition-opacity border border-white/20">
                      <Eye className="w-3.5 h-3.5 text-[#fb6514]" />
                      <span>View Certificate</span>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-1.5 text-[#fb6514] mb-2">
                  <Award className="w-4 h-4 fill-current shrink-0" />
                  <span className="text-[11px] font-bold uppercase tracking-wider">
                    {item.organization}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-neutral-900 dark:text-white group-hover:text-[#fb6514] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Action Bar */}
              <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between gap-3">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#fb6514]/15 text-[#fb6514] border border-[#fb6514]/30">
                  {item.badge}
                </span>

                {item.image && (
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedCert({
                        title: item.title,
                        image: item.image!,
                        alt: item.certificateAlt || `${item.title} certificate`,
                        year: item.year,
                        organization: item.organization,
                        type: item.badge,
                      })
                    }
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#fb6514] hover:text-[#fd853a] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fb6514] rounded-md px-1 py-0.5 cursor-pointer"
                    aria-label={`View certificate for ${item.title}`}
                  >
                    <span>View Certificate</span>
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          ))}
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
