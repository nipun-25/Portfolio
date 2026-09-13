"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RotateCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[APPLICATION_ERROR]", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-transparent">
      <div className="w-16 h-16 rounded-3xl bg-rose-500/10 text-rose-500 flex items-center justify-center mb-4">
        <AlertCircle className="w-8 h-8" />
      </div>
      <h1 className="text-2xl sm:text-3xl font-black text-neutral-900 dark:text-white">
        Something went wrong
      </h1>
      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-sm mt-2 mb-6">
        An unexpected error occurred. You can attempt to re-render the page or navigate back home.
      </p>
      <div className="flex items-center gap-3">
        <button
          onClick={() => reset()}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-[#fb6514] text-white hover:bg-[#fd853a] transition-all shadow-md"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Try Again</span>
        </button>
        <Link
          href="/"
          className="inline-flex items-center px-5 py-2.5 rounded-full text-xs font-bold bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
