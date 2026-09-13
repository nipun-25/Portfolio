import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Code2,
  ExternalLink,
  Layers,
  Sparkles,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { projectsData } from "@/data/portfolioData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Case Study | Nipun Kulshrestha`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const projectIndex = projectsData.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projectsData[projectIndex];
  const prevProject = projectIndex > 0 ? projectsData[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : null;

  return (
    <div className="relative min-h-screen flex flex-col bg-transparent">
      <Navbar />

      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          
          {/* Back to Projects */}
          <div className="mb-8">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-xs font-bold text-neutral-600 dark:text-neutral-400 hover:text-[#fb6514] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </Link>
          </div>

          {/* Case Study Hero */}
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-xs font-bold text-[#fb6514] uppercase tracking-wider">
                {project.tagline}
              </span>
              {project.featured && (
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-[#fb6514] text-white">
                  Featured Case Study
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-neutral-900 dark:text-white leading-tight">
              {project.title}
            </h1>
            
            <p className="text-base sm:text-xl font-medium text-neutral-600 dark:text-neutral-300 mt-3 leading-relaxed">
              {project.subtitle}
            </p>

            {/* Tech Stack on separate line under title */}
            <div className="flex flex-wrap gap-2 mt-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-black/5 dark:border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap items-center gap-3 mt-8">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-[#fb6514] text-white hover:bg-[#fd853a] transition-all shadow-md shadow-[#fb6514]/20"
                >
                  <span>Launch Live Platform</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-neutral-900 text-white dark:bg-neutral-800 hover:bg-[#fb6514] dark:hover:bg-[#fb6514] transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>
          </header>

          {/* Main Hero Showcase Image */}
          <div className="relative h-[300px] sm:h-[450px] md:h-[550px] w-full rounded-3xl overflow-hidden bg-neutral-950 border border-black/10 dark:border-white/10 mb-16 shadow-2xl">
            <Image
              src={project.image}
              alt={`${project.title} Showcase`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Case Study Content Sections */}
          <div className="space-y-14">
            
            {/* Project Overview */}
            <section className="p-8 rounded-3xl glass-panel border border-black/5 dark:border-white/10">
              <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#fb6514]" />
                <span>Executive Overview</span>
              </h2>
              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {project.overview}
              </p>
            </section>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl glass-panel border border-black/5 dark:border-white/10">
                <h3 className="text-lg sm:text-xl font-bold text-rose-500 mb-3">
                  The Problem
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-8 rounded-3xl glass-panel border border-black/5 dark:border-white/10">
                <h3 className="text-lg sm:text-xl font-bold text-emerald-500 mb-3">
                  The Solution
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Features */}
            <section className="p-8 rounded-3xl glass-panel border border-black/5 dark:border-white/10">
              <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#fb6514]" />
                <span>Key Platform Features</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-neutral-100 dark:bg-neutral-900/80 border border-black/5 dark:border-white/5 flex items-start gap-3"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#fb6514]/10 text-[#fb6514] font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Architecture & Engineering Decisions */}
            <section className="p-8 rounded-3xl glass-panel border border-black/5 dark:border-white/10">
              <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#fb6514]" />
                <span>Architecture & Engineering Decisions</span>
              </h2>
              <ul className="space-y-3">
                {project.architecture.map((arch, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed"
                  >
                    <Code2 className="w-4 h-4 text-[#fb6514] mt-1 flex-shrink-0" />
                    <span>{arch}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Challenges & Outcome */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl glass-panel border border-black/5 dark:border-white/10">
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-4">
                  Engineering Challenges
                </h3>
                <ul className="space-y-2.5">
                  {project.challenges.map((ch, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 flex items-start gap-2 leading-relaxed">
                      <span className="text-[#fb6514] font-bold">•</span>
                      <span>{ch}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 rounded-3xl glass-panel border border-black/5 dark:border-white/10">
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-4">
                  Outcome & Status
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
                  {project.outcome}
                </p>
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>Production-tested repository with live continuous deployment.</span>
                </div>
              </div>
            </div>

            {/* Actual Project Screenshots Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <section className="pt-8">
                <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                  Interface & Architecture Gallery
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {project.gallery.map((imgSrc, idx) => (
                    <div
                      key={idx}
                      className="relative h-64 sm:h-72 rounded-2xl overflow-hidden bg-neutral-950 border border-black/10 dark:border-white/10 shadow-lg group"
                    >
                      <Image
                        src={imgSrc}
                        alt={`${project.title} Screenshot ${idx + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Navigation: Previous & Next Project */}
            <div className="pt-12 border-t border-black/10 dark:border-white/10 flex items-center justify-between gap-4">
              {prevProject ? (
                <Link
                  href={`/projects/${prevProject.slug}`}
                  className="flex items-center gap-2 text-xs sm:text-sm font-bold text-neutral-700 dark:text-neutral-300 hover:text-[#fb6514] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>{prevProject.title}</span>
                </Link>
              ) : (
                <div />
              )}

              {nextProject && (
                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="flex items-center gap-2 text-xs sm:text-sm font-bold text-neutral-700 dark:text-neutral-300 hover:text-[#fb6514] transition-colors"
                >
                  <span>{nextProject.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
