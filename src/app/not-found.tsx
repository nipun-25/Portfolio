import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-transparent">
      <div className="w-16 h-16 rounded-3xl bg-[#fb6514]/10 text-[#fb6514] flex items-center justify-center text-2xl font-black mb-4">
        404
      </div>
      <h1 className="text-3xl sm:text-4xl font-black text-neutral-900 dark:text-white">
        Page Not Found
      </h1>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-sm mt-2 mb-8">
        The requested resource could not be found. Return to Nipun&apos;s home portfolio or browse case studies.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-[#fb6514] text-white hover:bg-[#fd853a] transition-all shadow-md"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Home</span>
      </Link>
    </div>
  );
}
