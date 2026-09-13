export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-transparent">
      <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 rounded-full border-4 border-[#fb6514]/20 border-t-[#fb6514] animate-spin" />
        <div className="absolute w-8 h-8 rounded-full bg-[#fb6514] text-white flex items-center justify-center text-xs font-black">
          NK
        </div>
      </div>
      <p className="mt-4 text-xs font-bold uppercase tracking-wider text-neutral-500">
        Loading Portfolio...
      </p>
    </div>
  );
}
