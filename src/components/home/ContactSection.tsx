"use client";

import * as React from "react";
import {
  AlertCircle,
  CheckCircle2,
  Mail,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "@/components/ui/Icons";
import { personalInfo, socialLinks } from "@/data/portfolioData";

export function ContactSection() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    botField: "",
  });
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(
          data.error ||
            "Unable to send your message right now. Please try again or email directly at nipunkulshrestha25@gmail.com."
        );
      } else {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "", botField: "" });
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Network connection error. Please try again or email directly at nipunkulshrestha25@gmail.com."
      );
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative scroll-mt-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading (Recreating 7th.png) */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#fb6514]/10 text-[#fb6514] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 dark:text-white leading-tight">
            Have a project idea?
            <br />
            <span className="text-[#fb6514]">Let&apos;s Discuss</span>
          </h2>
          <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto mt-3">
            Open for software engineering opportunities, full-stack collaborations, and technical discussions.
          </p>
        </div>

        {/* Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Direct Contact Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-5 rounded-2xl glass-panel border border-black/5 dark:border-white/10 hover:border-[#fb6514]/40 flex items-center gap-4 transition-all hover:translate-x-1 group"
            >
              <div className="p-3 rounded-xl bg-[#fb6514]/10 text-[#fb6514] group-hover:bg-[#fb6514] group-hover:text-white transition-colors flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider">Email Address</span>
                <p className="text-sm font-bold text-neutral-900 dark:text-white truncate">
                  {personalInfo.email}
                </p>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
              className="p-5 rounded-2xl glass-panel border border-black/5 dark:border-white/10 hover:border-[#fb6514]/40 flex items-center gap-4 transition-all hover:translate-x-1 group"
            >
              <div className="p-3 rounded-xl bg-[#fb6514]/10 text-[#fb6514] group-hover:bg-[#fb6514] group-hover:text-white transition-colors flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider">Direct Phone</span>
                <p className="text-sm font-bold text-neutral-900 dark:text-white">
                  {personalInfo.phone}
                </p>
              </div>
            </a>

            {/* Social Links Row */}
            <div className="p-5 rounded-2xl glass-panel border border-black/5 dark:border-white/10">
              <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider block mb-3">
                Connect on Developer Platforms
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-[#fb6514] hover:text-white transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-[#fb6514] hover:text-white transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={socialLinks.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-[#fb6514] hover:text-white transition-colors flex items-center gap-2"
                  aria-label="LeetCode Profile"
                >
                  <LeetCodeIcon className="w-4 h-4" />
                  <span className="text-xs font-bold">LeetCode</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Contact Form (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl glass-panel border border-black/5 dark:border-white/10 shadow-xl">
            {status === "success" ? (
              <div className="py-12 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-sm">
                  Thank you for reaching out. Nipun will review your note and get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 px-6 py-2 rounded-full text-xs font-bold bg-[#fb6514] text-white hover:bg-[#fd853a] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {status === "error" && (
                  <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Smith"
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 focus:outline-none focus:border-[#fb6514] text-sm text-neutral-900 dark:text-white transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1.5">
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 focus:outline-none focus:border-[#fb6514] text-sm text-neutral-900 dark:text-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry / Full Stack Role"
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 focus:outline-none focus:border-[#fb6514] text-sm text-neutral-900 dark:text-white transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, idea, or role requirements..."
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 focus:outline-none focus:border-[#fb6514] text-sm text-neutral-900 dark:text-white transition-colors resize-none"
                  />
                </div>

                {/* Anti-spam Honeypot field (hidden from legitimate visitors) */}
                <div className="hidden" aria-hidden="true" style={{ display: "none" }}>
                  <label htmlFor="botField">Leave this field empty</label>
                  <input
                    id="botField"
                    name="botField"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.botField}
                    onChange={(e) => setFormData({ ...formData, botField: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full sm:w-auto px-8 py-3 rounded-full text-xs sm:text-sm font-bold bg-[#fb6514] text-white hover:bg-[#fd853a] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#fb6514]/20 disabled:opacity-50 cursor-pointer"
                >
                  {status === "loading" ? (
                    <>
                      <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Reference Badges below Contact Form (recreating 7th.png footer badges) */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-12 pt-8 border-t border-black/5 dark:border-white/10 text-neutral-500 dark:text-neutral-400 text-xs font-semibold">
          <div className="flex items-center gap-1.5">
            <span className="text-amber-400">★</span>
            <span>3rd Place Code Optics</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[#fb6514]">✦</span>
            <span>Top 1000 India Innovates</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-emerald-500">✓</span>
            <span>AWS Academy Graduate</span>
          </div>
        </div>

      </div>
    </section>
  );
}
