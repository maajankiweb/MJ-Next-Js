"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiZap, FiPhoneCall } from "react-icons/fi";

export default function CTASection() {
  return (
    <section id="cta" className="relative py-20 overflow-hidden bg-white lg:py-20">
      
      {/* Background */}
      <div className="absolute top-0 w-full h-full -translate-x-1/2 pointer-events-none left-1/2 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#6a1b9a,#4f46e5)] opacity-30 blur-[100px]" />
      </div>

      <div className="relative z-10 px-6 mx-auto max-w-7xl">
        <div className="bg-[#6a1b9a] rounded-[3rem] lg:rounded-[4rem] p-8 md:p-16 lg:p-24 relative overflow-hidden shadow-[0_20px_80px_-15px_rgba(106,27,154,0.3)]">
          
          {/* Texture */}
          <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay">
            <div className="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(45deg,white,white_1px,transparent_1px,transparent_40px)]" />
          </div>

          <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center relative z-10">
            
            {/* LEFT */}
            <div>

              {/* Tag */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider text-white mb-6 border border-white/20"
              >
                <FiZap /> Website Development & Digital Growth
              </motion.div>

              {/* H1 (SEO Important) */}
              <h2 
                className="mb-6 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl md:text-3xl lg:text-5xl"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                Ready to Grow Your <br />
                <span className="text-[#0e0c1a] italic">
                  Business with a High-Converting Website?
                </span>
              </h2>

              {/* Paragraph */}
              <p className="max-w-2xl mb-10 text-base font-medium leading-relaxed sm:text-lg md:text-xl text-white/90">
                Get a fast, SEO-optimized website designed to generate leads, improve Google rankings, and grow your business online 24/7.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">

                {/* Primary CTA */}
                <a 
                  href="#contact"
                  className="bg-[#0e0c1a] text-white px-8 py-4 rounded-2xl font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  Book Free Strategy Call <FiPhoneCall />
                </a>

                {/* Secondary CTA */}
                <a 
                  href="#portfolio"
                  className="flex items-center gap-2 px-8 py-4 text-xs font-bold tracking-wider text-white uppercase transition-all duration-300 border bg-white/10 backdrop-blur-md border-white/20 rounded-2xl sm:text-sm hover:bg-white/20"
                >
                  View Our Work <FiArrowRight />
                </a>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex-col items-center hidden gap-4 lg:flex">
              <div className="flex items-center justify-center w-24 h-24 text-4xl text-white border-4 rounded-full lg:w-28 lg:h-28 bg-white/10 border-white/20 backdrop-blur-xl animate-bounce">
                🚀
              </div>
              <div className="text-center">
                <div className="text-xl font-black text-white lg:text-2xl">High ROI</div>
                <div className="text-white/60 text-[10px] font-bold uppercase tracking-widest">
                  Lead Generation Focused
                </div>
              </div>
            </div>

          </div>

          {/* Glow */}
          <div className="absolute w-32 h-32 rounded-full pointer-events-none -bottom-10 -right-10 bg-white/10 blur-3xl" />
        </div>
      </div>
    </section>
  );
}