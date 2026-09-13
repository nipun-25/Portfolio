"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { personalInfo, socialLinks } from "@/data/portfolioData";

export function Footer() {
  const pathname = usePathname();

  // Smooth scroll to Contact section and synchronize URL and navbar
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        if (window.location.hash !== "#contact") {
          try {
            window.history.pushState(null, "", "#contact");
          } catch {
            // fallback
          }
        }
        window.dispatchEvent(
          new CustomEvent("portfolio:navigate", { detail: "contact" })
        );
      }
    }
  };

  const handleFooterNav = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (pathname === "/") {
      e.preventDefault();
      if (targetId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        if (window.location.hash !== "") {
          try {
            window.history.pushState(null, "", window.location.pathname + window.location.search);
          } catch {}
        }
        window.dispatchEvent(
          new CustomEvent("portfolio:navigate", { detail: "home" })
        );
      } else {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          if (window.location.hash !== `#${targetId}`) {
            try {
              window.history.pushState(null, "", `#${targetId}`);
            } catch {}
          }
          window.dispatchEvent(
            new CustomEvent("portfolio:navigate", { detail: targetId })
          );
        }
      }
    }
  };

  return (
    <footer className="mt-20 relative bg-neutral-950 text-white overflow-hidden border-t border-white/10">
      
      {/* Top CTA Banner (Recreating 10th.png "Lets Connect there") */}
      <div className="border-b border-white/10 py-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
              Let&apos;s Connect <span className="text-[#fb6514]">there</span>
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Building practical, reliable, and user-centric full-stack software.
            </p>
          </div>
          <Link
            href="/#contact"
            onClick={handleScrollToContact}
            className="flex items-center gap-2 px-7 py-3 rounded-full text-xs sm:text-sm font-bold bg-[#fb6514] text-white hover:bg-[#fd853a] transition-all duration-200 shadow-xl shadow-[#fb6514]/20 group"
          >
            <span>Hire Me</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand & Bio (5 Cols) */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#fb6514] text-white flex items-center justify-center font-black text-xs shadow-md">
                NK
              </div>
              <span className="font-extrabold text-base tracking-tight text-white">
                NIPUN KULSHRESTHA
              </span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm mb-6">
              Computer Science & Engineering student at Parul University. Focused on full-stack development, distributed backend architectures, and modern web applications.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/10 text-neutral-300 hover:bg-[#fb6514] hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/10 text-neutral-300 hover:bg-[#fb6514] hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-full bg-white/10 text-neutral-300 hover:bg-[#fb6514] hover:text-white transition-colors"
                aria-label="Email Nipun"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (4 Cols) */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300 mb-3">
                Navigation
              </h4>
              <ul className="space-y-2 text-xs text-neutral-400">
                <li><Link href="/" onClick={(e) => handleFooterNav(e, "home")} className="hover:text-[#fb6514] transition-colors">Home</Link></li>
                <li><Link href="/#about" onClick={(e) => handleFooterNav(e, "about")} className="hover:text-[#fb6514] transition-colors">About</Link></li>
                <li><Link href="/#capabilities" onClick={(e) => handleFooterNav(e, "capabilities")} className="hover:text-[#fb6514] transition-colors">Capabilities</Link></li>
                <li><Link href="/#journey" onClick={(e) => handleFooterNav(e, "journey")} className="hover:text-[#fb6514] transition-colors">Journey</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300 mb-3">
                Portfolio
              </h4>
              <ul className="space-y-2 text-xs text-neutral-400">
                <li><Link href="/projects" className="hover:text-[#fb6514] transition-colors">All Projects</Link></li>
                <li><Link href="/projects/civic-issue-tracker" className="hover:text-[#fb6514] transition-colors">Civic Issue Tracker</Link></li>
                <li><Link href="/projects/travelloop" className="hover:text-[#fb6514] transition-colors">TravelLoop</Link></li>
                <li><Link href="/projects/sentinel" className="hover:text-[#fb6514] transition-colors">Sentinel</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact Direct Info (3 Cols) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300 mb-3">
              Direct Contact
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed mb-2">
              {personalInfo.email}
            </p>
            <p className="text-xs text-neutral-400 leading-relaxed mb-4">
              {personalInfo.phone}
            </p>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#fb6514] hover:underline"
            >
              <span>Download Resume PDF</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <p>© {new Date().getFullYear()} Nipun Kulshrestha. All Rights Reserved.</p>
          <p>Built with Next.js, TypeScript, Tailwind CSS, & Framer Motion.</p>
        </div>

      </div>
    </footer>
  );
}
