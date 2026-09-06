"use client";

export default function Footer() {
  return (
    <footer className="bg-[#0e0c1a] text-white py-12 relative overflow-hidden border-t border-white/5">
      {/* Decorative background subtle dots */}
      <div className="absolute top-0 left-0 w-full h-full dot-bg opacity-[0.03] pointer-events-none" />
      
      <div className="container relative z-10 px-6 mx-auto">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-sm tracking-wide text-gray-400 opacity-80">
            © {new Date().getFullYear()} <span className="font-bold text-white">MJ Bytech</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#6a1b9a] font-black">
            Your Digital Growth Partner
          </div>
        </div>
      </div>
    </footer>
  );
}