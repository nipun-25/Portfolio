import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { projectsData } from "@/data/portfolioData";

export const metadata = {
  title: "Projects & Case Studies | Nipun Kulshrestha",
  description:
    "Explore full-stack software development case studies including Civic Issue Tracker, TravelLoop, and Sentinel by Nipun Kulshrestha.",
};

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-transparent">
      <Navbar />

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Back Navigation */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold text-neutral-600 dark:text-neutral-400 hover:text-[#fb6514] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Page Header */}
          <div className="mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#fb6514]/10 text-[#fb6514] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Engineering Portfolio</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-neutral-900 dark:text-white">
              Projects & <span className="text-[#fb6514]">Case Studies</span>
            </h1>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl mt-3">
              In-depth architectural overviews, problems, technical solutions, and deployed outcomes for verified full-stack applications.
            </p>
          </div>

          {/* Projects List */}
          <div className="space-y-12">
            {projectsData.map((project, idx) => (
              <div
                key={project.slug}
                className="p-6 sm:p-8 md:p-10 rounded-3xl glass-panel border border-black/5 dark:border-white/10 hover:border-[#fb6514]/30 transition-all duration-300 flex flex-col lg:flex-row items-stretch gap-8 shadow-lg"
              >
                {/* Left Content */}
                <div className="lg:w-1/2 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold text-[#fb6514]">
                        0{idx + 1}
                      </span>
                      {project.featured && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#fb6514] text-white">
                          Featured
                        </span>
                      )}
                      <span className="text-xs text-neutral-500 dark:text-neutral-400">
                        {project.tagline}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 dark:text-white leading-snug">
                      {project.title}
                    </h2>

                    {/* Tech Stack on separate line under title */}
                    <p className="text-xs sm:text-sm font-semibold text-[#fb6514] mt-2 mb-4">
                      {project.technologies.join(" · ")}
                    </p>

                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Key points */}
                    <ul className="space-y-1.5 mb-6">
                      {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                        <li key={fIdx} className="text-xs text-neutral-600 dark:text-neutral-400 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#fb6514] mt-1.5 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-black/5 dark:border-white/10 mt-auto">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold bg-[#fb6514] text-white hover:bg-[#fd853a] transition-all shadow-md group"
                    >
                      <span>Read Full Case Study</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Image */}
                <div className="lg:w-1/2 relative min-h-[260px] sm:min-h-[300px] rounded-2xl overflow-hidden bg-neutral-950 border border-black/10 dark:border-white/10 group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
