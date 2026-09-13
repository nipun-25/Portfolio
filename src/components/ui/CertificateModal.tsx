"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";

export interface CertificateModalData {
  title: string;
  image: string;
  alt: string;
  year?: string;
  organization?: string;
  type?: string;
}

interface CertificateModalProps {
  certificate: CertificateModalData | null;
  onClose: () => void;
}

export function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  // Close on Escape key & disable body scroll
  React.useEffect(() => {
    if (!certificate) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [certificate, onClose]);

  return (
    <AnimatePresence>
      {certificate && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={certificate.title}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-neutral-900/95 border border-white/15 shadow-2xl overflow-hidden"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between gap-3 px-5 py-3.5 border-b border-white/10 bg-white/5">
              <div className="min-w-0 pr-2">
                <div className="flex items-center gap-2 mb-0.5">
                  {certificate.type && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#fb6514] text-white">
                      {certificate.type}
                    </span>
                  )}
                  {certificate.year && (
                    <span className="text-xs text-neutral-400 font-mono">
                      {certificate.year}
                    </span>
                  )}
                </div>
                <h3 className="text-base sm:text-lg font-black text-white truncate">
                  {certificate.title}
                </h3>
                {certificate.organization && (
                  <p className="text-xs text-neutral-400 truncate">
                    {certificate.organization}
                  </p>
                )}
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-full bg-white/10 text-neutral-300 hover:text-white hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fb6514] shrink-0"
                aria-label="Close certificate modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Certificate Image View (aspect ratio preserved, high resolution) */}
            <div className="relative flex-1 overflow-auto p-3 sm:p-5 flex items-center justify-center bg-black/60 min-h-[300px] max-h-[72vh]">
              <div className="relative w-full h-[65vh] max-h-[65vh]">
                <Image
                  src={certificate.image}
                  alt={certificate.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1200px"
                  quality={95}
                  priority
                  className="object-contain rounded-lg"
                />
              </div>
            </div>

            {/* Modal Footer with External Link */}
            <div className="flex items-center justify-between px-5 py-3 border-t border-white/10 bg-white/5 text-xs text-neutral-400">
              <span>Press Escape or click outside to close</span>
              <a
                href={certificate.image}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-[#fb6514] hover:underline"
              >
                <span>View Full-Resolution Image</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
