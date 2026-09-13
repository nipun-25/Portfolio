"use client";

import { Award, ExternalLink, FileText } from "lucide-react";
import { certificationsData } from "@/data/portfolioData";

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 md:py-28 relative scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#fb6514]/10 text-[#fb6514] mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Professional Credentials</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-900 dark:text-white">
              Certifications & <span className="text-[#fb6514]">Badges</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 max-w-md">
            Industry training programs and developer credentials in cloud infrastructure, distributed ledgers, and design thinking.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-3xl glass-panel border border-black/5 dark:border-white/10 hover:border-[#fb6514]/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#fb6514]/10 text-[#fb6514] flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
                    {cert.badgeText}
                  </span>
                </div>

                <span className="text-[11px] font-bold text-[#fb6514] uppercase tracking-wider">
                  {cert.issuer}
                </span>
                
                <h3 className="text-base sm:text-lg font-black text-neutral-900 dark:text-white mt-1 group-hover:text-[#fb6514] transition-colors leading-snug">
                  {cert.title}
                </h3>

                <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2.5 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {cert.pdfUrl && (
                <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/10">
                  <a
                    href={cert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#fb6514] hover:underline"
                  >
                    <span>View Certificate PDF</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
