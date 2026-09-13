"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { FileDown, Menu, X } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

interface NavLink {
  id: string;
  label: string;
  href: string;
}

// Exactly 7 navbar items: Home | About | Capabilities | Journey | Projects | Achievements | Contact
const NAV_LINKS: NavLink[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "about", label: "About", href: "/#about" },
  { id: "capabilities", label: "Capabilities", href: "/#capabilities" },
  { id: "journey", label: "Journey", href: "/#journey" },
  { id: "projects", label: "Projects", href: "/#projects" },
  { id: "achievements", label: "Achievements", href: "/#achievements" },
  { id: "contact", label: "Contact", href: "/#contact" },
];

// All homepage section IDs in order
const ALL_SECTION_IDS = [
  "home",
  "about",
  "capabilities",
  "journey",
  "skills",
  "projects",
  "engineering-highlights",
  "achievements",
  "events",
  "certifications",
  "contact",
];

// Intelligent mapping: sections without navbar items map to their parent flow
// e.g. engineering-highlights -> projects; events & certifications -> achievements
const SECTION_TO_NAV_MAP: Record<string, string> = {
  home: "home",
  about: "about",
  capabilities: "capabilities",
  journey: "journey",
  skills: "journey",
  projects: "projects",
  "engineering-highlights": "projects",
  achievements: "achievements",
  events: "achievements",
  certifications: "achievements",
  contact: "contact",
};

export function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = React.useState<string>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);

  const isManualScrollRef = React.useRef(false);
  const currentActiveSectionRef = React.useRef<string>("home");
  const scrollTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const lastScrollYRef = React.useRef(0);
  const hideTimerRef = React.useRef<NodeJS.Timeout | null>(null);
  const isHoveredRef = React.useRef(false);

  // Close mobile menu on escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  // Start the ~2-second hide timer after user scrolls up or stops
  const startHideTimer = React.useCallback(() => {
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
    }
    hideTimerRef.current = setTimeout(() => {
      // Do NOT hide if at top (< 60px), if mobile menu is open, or if cursor is hovering
      if (window.scrollY >= 60 && !mobileMenuOpen && !isHoveredRef.current) {
        setIsVisible(false);
      }
    }, 2000);
  }, [mobileMenuOpen]);

  const clearHideTimer = React.useCallback(() => {
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
  }, []);

  // Global Scroll Detection, Auto Hide/Show, and Section Spy
  React.useEffect(() => {
    if (pathname !== "/") return;

    // Helper: update active section and sync URL hash without jumping or flooding history
    const updateActiveSection = (mappedNavItem: string) => {
      if (currentActiveSectionRef.current === mappedNavItem) return;

      currentActiveSectionRef.current = mappedNavItem;
      setActiveSection(mappedNavItem);

      const targetHash = mappedNavItem === "home" ? "" : `#${mappedNavItem}`;
      const currentHash = window.location.hash;

      if (currentHash !== targetHash) {
        const newUrl = targetHash || (window.location.pathname + window.location.search);
        try {
          window.history.replaceState(null, "", newUrl);
        } catch {
          // Safe fallback if history API is restricted in specific contexts
        }
      }
    };

    // Check URL hash on initial load / refresh
    if (typeof window !== "undefined" && window.location.hash) {
      const rawHash = window.location.hash.replace("#", "");
      if (rawHash === "home") {
        try {
          window.history.replaceState(null, "", window.location.pathname + window.location.search);
        } catch {}
        currentActiveSectionRef.current = "home";
        requestAnimationFrame(() => setActiveSection("home"));
      } else {
        const mappedNav = SECTION_TO_NAV_MAP[rawHash] || rawHash;
        if (mappedNav) {
          currentActiveSectionRef.current = mappedNav;
          requestAnimationFrame(() => setActiveSection(mappedNav));
          // Lock scroll-spy during initial scroll settlement so we don't immediately overwrite with home
          isManualScrollRef.current = true;
          setTimeout(() => {
            const el = document.getElementById(rawHash) || document.getElementById(mappedNav);
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }, 100);
          setTimeout(() => {
            isManualScrollRef.current = false;
          }, 900);
        }
      }
    }

    const checkActiveSection = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // 1. Extreme boundary: at the very top (< 80px) -> Home
      if (scrollY < 80) {
        updateActiveSection("home");
        return;
      }

      // 2. Extreme boundary: near the very bottom of the document -> Contact
      if (scrollY + windowHeight >= docHeight - 80) {
        updateActiveSection("contact");
        return;
      }

      // 3. Focal scan line (accounts for floating navbar height ~120px + buffer)
      const focalLineY = 180;
      let detectedRawSection = "home";

      for (const id of ALL_SECTION_IDS) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= focalLineY) {
            detectedRawSection = id;
          }
        }
      }

      // Map raw section to corresponding navbar item (e.g. engineering-highlights -> projects)
      const mappedNavItem = SECTION_TO_NAV_MAP[detectedRawSection] || "home";
      updateActiveSection(mappedNavItem);
    };

    // Handle browser Back / Forward navigation (popstate)
    const handleHistoryChange = () => {
      if (pathname !== "/") return;
      const rawHash = window.location.hash.replace("#", "");
      const targetSection = rawHash ? (SECTION_TO_NAV_MAP[rawHash] || rawHash) : "home";

      currentActiveSectionRef.current = targetSection;
      setActiveSection(targetSection);
      isManualScrollRef.current = true;
      setIsVisible(true);
      clearHideTimer();

      if (targetSection === "home" || !rawHash) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const el = document.getElementById(rawHash) || document.getElementById(targetSection);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        isManualScrollRef.current = false;
        lastScrollYRef.current = window.scrollY;
        if (window.scrollY >= 60) {
          startHideTimer();
        }
      }, 850);
    };

    window.addEventListener("popstate", handleHistoryChange);

    // Handle cross-component navigation shortcuts (e.g. "Hire Me" button)
    const handlePortfolioNavigate = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      const rawTarget = customEvent.detail;
      if (!rawTarget || pathname !== "/") return;

      const targetSection = rawTarget ? (SECTION_TO_NAV_MAP[rawTarget] || rawTarget) : "home";
      currentActiveSectionRef.current = targetSection;
      setActiveSection(targetSection);
      isManualScrollRef.current = true;
      setIsVisible(true);
      clearHideTimer();

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        isManualScrollRef.current = false;
        lastScrollYRef.current = window.scrollY;
        if (window.scrollY >= 60) {
          startHideTimer();
        }
      }, 850);
    };

    window.addEventListener("portfolio:navigate", handlePortfolioNavigate);

    // IntersectionObserver to observe section boundary changes smoothly
    const observer = new IntersectionObserver(
      () => {
        if (!isManualScrollRef.current) {
          checkActiveSection();
        }
      },
      {
        root: null,
        rootMargin: "-120px 0px -40% 0px",
        threshold: [0, 0.2, 0.5, 0.8],
      }
    );

    ALL_SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Scroll Direction & Visibility Handler
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const prevScrollY = lastScrollYRef.current;
      const delta = currentScrollY - prevScrollY;

      // Synchronize active section and URL if not in manual smooth scroll
      if (!isManualScrollRef.current) {
        checkActiveSection();
      }

      // EXCEPTION 1: If mobile menu is open, navbar MUST remain visible
      if (mobileMenuOpen) {
        setIsVisible(true);
        clearHideTimer();
        lastScrollYRef.current = currentScrollY;
        return;
      }

      // EXCEPTION 2: At top of page (< 60px), navbar is always visible and does NOT hide
      if (currentScrollY < 60) {
        setIsVisible(true);
        clearHideTimer();
        lastScrollYRef.current = currentScrollY;
        return;
      }

      // If manual smooth scroll from click is active, keep navbar visible
      if (isManualScrollRef.current) {
        setIsVisible(true);
        lastScrollYRef.current = currentScrollY;
        return;
      }

      // Ignore micro scroll movements (< 6px) to prevent flickering
      if (Math.abs(delta) < 6) {
        return;
      }

      // STATE 1: User scrolls DOWN -> HIDDEN
      if (delta > 0) {
        clearHideTimer();
        setIsVisible(false);
      }
      // STATE 2: User scrolls UP -> VISIBLE
      else if (delta < 0) {
        setIsVisible(true);
        // STATE 3: Stop scrolling after scrolling up -> wait ~2s then hide
        startHideTimer();
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", checkActiveSection, { passive: true });

    // Initial check (only if not already locked by initial hash jump)
    if (!isManualScrollRef.current) {
      checkActiveSection();
    }
    lastScrollYRef.current = window.scrollY;

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkActiveSection);
      window.removeEventListener("popstate", handleHistoryChange);
      window.removeEventListener("portfolio:navigate", handlePortfolioNavigate);
      clearHideTimer();
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [pathname, mobileMenuOpen, clearHideTimer, startHideTimer]);

  // Keep visible while hovering over the navbar so it doesn't vanish while user is interacting
  const handleMouseEnter = () => {
    isHoveredRef.current = true;
    clearHideTimer();
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    // If not at the top and currently visible, start the 2s countdown to auto-hide
    if (window.scrollY >= 60 && isVisible && !mobileMenuOpen) {
      startHideTimer();
    }
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    if (pathname === "/") {
      e.preventDefault();
      // Lock scroll spy temporarily during animated scroll
      isManualScrollRef.current = true;
      currentActiveSectionRef.current = targetId;
      setActiveSection(targetId);
      setIsVisible(true);
      clearHideTimer();

      const targetHash = targetId === "home" ? "" : `#${targetId}`;
      const newUrl = targetHash ? targetHash : (window.location.pathname + window.location.search);
      
      if (window.location.hash !== targetHash) {
        try {
          window.history.pushState(null, "", newUrl);
        } catch {
          // fallback
        }
      }

      if (targetId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        isManualScrollRef.current = false;
        lastScrollYRef.current = window.scrollY;
        // If not at top, give user ~2 seconds to view where they arrived, then hide
        if (window.scrollY >= 60) {
          startHideTimer();
        }
      }, 850);
    }
  };

  return (
    <>
      <header
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`fixed top-4 md:top-6 inset-x-0 z-50 flex justify-center px-3 sm:px-4 pointer-events-none transition-all duration-300 ease-in-out ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-24 md:-translate-y-28 opacity-0"
        }`}
      >
        <nav
          aria-label="Main Navigation"
          className={`pointer-events-auto flex items-center justify-between gap-2 sm:gap-3 md:gap-5 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-full glass-panel border border-black/10 dark:border-white/15 shadow-xl max-w-5xl w-full transition-opacity duration-300 ${
            isVisible ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          {/* Brand / Logo */}
          <Link
            href="/"
            onClick={(e) => handleNavClick(e, "home")}
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fb6514] rounded-full shrink-0"
            aria-label="Nipun Kulshrestha Home"
          >
            {/* Minimal NK Monogram in signature orange circle */}
            <div className="w-8 h-8 md:w-8.5 md:h-8.5 rounded-full bg-[#fb6514] text-white flex items-center justify-center font-black tracking-wider text-xs md:text-xs shadow-md group-hover:scale-105 transition-transform">
              NK
            </div>
            <span className="font-extrabold tracking-tight text-xs sm:text-sm md:text-base text-neutral-900 dark:text-white group-hover:text-[#fb6514] transition-colors">
              NIPUN<span className="text-[#fb6514]">.</span>
            </span>
          </Link>

          {/* Desktop / Tablet Nav Links with Dynamic Sliding Orange Pill */}
          <div className="hidden md:flex items-center gap-0.5 lg:gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === "/" && activeSection === link.id;
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`relative px-2.5 lg:px-3 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-colors duration-200 z-10 select-none ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10"
                  }`}
                >
                  {/* Sliding Orange Active Pill Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-[#fb6514] rounded-full -z-10 shadow-md shadow-[#fb6514]/30"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                        mass: 0.8,
                      }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Actions: Resume + ThemeToggle + Mobile Hamburger */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-semibold bg-neutral-900 text-white dark:bg-white/10 dark:text-white hover:bg-[#fb6514] dark:hover:bg-[#fb6514] transition-all shadow-sm"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            <ThemeToggle />

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                setIsVisible(true);
                clearHideTimer();
              }}
              className="md:hidden p-2 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-black/5 dark:hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fb6514]"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Drawer with Active Item Highlighting */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="fixed inset-0 z-40 md:hidden flex flex-col justify-between p-6 bg-white/95 dark:bg-black/95 backdrop-blur-2xl animate-in fade-in duration-200"
        >
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#fb6514] text-white flex items-center justify-center font-black text-xs">
                NK
              </div>
              <span className="font-extrabold text-base text-neutral-900 dark:text-white">
                NIPUN
              </span>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-2 py-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === "/" && activeSection === link.id;
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    handleNavClick(e, link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-between px-5 py-3 rounded-2xl text-lg sm:text-xl font-bold transition-all ${
                    isActive
                      ? "bg-[#fb6514] text-white shadow-lg shadow-[#fb6514]/30"
                      : "text-neutral-800 dark:text-neutral-200 hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="w-2.5 h-2.5 rounded-full bg-white shadow-sm" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex flex-col gap-3 pb-4">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full font-bold text-sm bg-[#fb6514] text-white shadow-lg"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume PDF</span>
            </a>
            <p className="text-center text-xs text-neutral-500">
              {personalInfo.email}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
