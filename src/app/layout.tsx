import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-urbanist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nipun Kulshrestha | Full Stack Developer",
  description:
    "Computer Science and Engineering student at Parul University building reliable, scalable, and user-focused full-stack web applications with Next.js, React, Node.js, Supabase, and PostgreSQL.",
  keywords: [
    "Nipun Kulshrestha",
    "Full Stack Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Tailwind CSS",
    "PostgreSQL",
    "Civic Issue Tracker",
    "TravelLoop",
    "Sentinel"
  ],
  authors: [{ name: "Nipun Kulshrestha", url: "https://github.com/nipun-25" }],
  creator: "Nipun Kulshrestha",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Nipun Kulshrestha | Full Stack Developer",
    description:
      "Explore full-stack software projects, architecture case studies, skills, and achievements of Nipun Kulshrestha.",
    siteName: "Nipun Kulshrestha Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nipun Kulshrestha | Full Stack Developer",
    description:
      "Full-stack web applications, RESTful APIs, modern databases, and clean architecture.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark scroll-smooth">
      <body className={`${urbanist.variable} font-sans antialiased min-h-screen selection:bg-[#fb6514] selection:text-white`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
