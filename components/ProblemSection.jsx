"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiX, FiArrowRight, FiActivity, FiTrendingDown } from "react-icons/fi";

const problems = [
  { title: "Invisible Online", desc: "Your competitors are ranking on Google while you're on Page 10." },
  { title: "Zero Conversions", desc: "Visitors arrive, but they leave without ever clicking 'Contact'." },
  { title: "Outdated Tech", desc: "Slow, non-responsive sites that frustrate 90% of mobile users." },
  { title: "No Strategy", desc: "A website without a lead funnel is just a digital brochure." }
];

export default function ProblemSection() {
  return (
    <section id="problem" className="relative py-16 overflow-hidden bg-white lg:py-32">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-64 h-64 lg:w-96 lg:h-96 bg-red-500/5 blur-[80px] lg:blur-[120px] rounded-full pointer-events-none -translate-x-1/2" />

      <div className="relative z-10 px-6 mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 bg-red-50 text-red-600 rounded-full text-[10px] lg:text-xs font-black uppercase tracking-[0.2em] mb-6 lg:mb-8">
              <FiTrendingDown className="animate-pulse" /> The Hard Truth
            </div>
            
            <h2 
              className="text-3xl md:text-3xl lg:text-5xl font-black text-[#0e0c1a] mb-6 lg:mb-8 leading-[1.1]"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              Is Your Website <br className="hidden lg:block" />
              <span className="italic text-red-600">Losing You</span> Money?
            </h2>
            
            <p className="text-base lg:text-xl text-[#4a4869] mb-8 lg:mb-12 leading-relaxed">
              Most businesses in India have a website, but 95% of them are failing to generate a single real lead. A "pretty" site is useless if it's not a sales machine.
            </p>

            <div className="grid grid-cols-1 gap-6 mb-10 sm:grid-cols-2 lg:gap-8 lg:mb-12">
              {problems.map((p, i) => (
                <div key={i} className="group">
                  <div className="flex items-center gap-3 mb-2 lg:mb-3">
                    <div className="flex items-center justify-center text-red-600 transition-all duration-300 rounded-full w-7 h-7 lg:w-8 lg:h-8 bg-red-50 group-hover:bg-red-600 group-hover:text-white">
                      <FiX strokeWidth={3} className="text-sm" />
                    </div>
                    <h4 className="text-base lg:text-lg font-black text-[#0e0c1a]">{p.title}</h4>
                  </div>
                  <p className="text-sm text-[#4a4869] leading-relaxed opacity-80">{p.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:gap-6">
               <a href="#contact" className="justify-center w-full btn-primary sm:w-auto">
                 Stop the Loss Now <FiArrowRight className="ml-2" />
               </a>
               <div className="flex items-center gap-3 px-5 py-3 border lg:px-6 lg:py-4 rounded-2xl bg-slate-50 border-slate-100">
                  <div className="flex -space-x-2">
                     <img src="/ashish.png" className="object-cover border-2 border-white rounded-full w-7 h-7 lg:w-8 lg:h-8" alt="Team" />
                     <img src="/meera.png" className="object-cover border-2 border-white rounded-full w-7 h-7 lg:w-8 lg:h-8" alt="Team" />
                     <img src="/arjun.png" className="object-cover border-2 border-white rounded-full w-7 h-7 lg:w-8 lg:h-8" alt="Team" />
                  </div>
                  <span className="text-[9px] font-black text-[#4a4869] uppercase tracking-widest leading-none">500+ AUDITS DONE</span>
               </div>
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative rounded-[2rem] lg:rounded-[3rem] overflow-hidden border-4 lg:border-8 border-white shadow-2xl shadow-red-500/10 group max-w-md mx-auto lg:max-w-none aspect-[4/5]">
               <Image 
                 src="/problem.png" 
                 alt="Frustrated Business Owner without SEO" 
                 fill
                 sizes="(max-width: 1024px) 100vw, 50vw"
                 className="object-cover transition-transform duration-1000 group-hover:scale-105" 
               />
               
               {/* Overlays */}
               <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 to-transparent" />
               
               {/* Floating Stats */}
               <motion.div 
                 animate={{ y: [0, -8, 0] }}
                 transition={{ duration: 4, repeat: Infinity }}
                 className="absolute p-3 border shadow-xl top-6 left-6 lg:top-10 lg:left-10 bg-white/90 backdrop-blur-md lg:p-6 rounded-2xl lg:rounded-3xl border-white/50"
               >
                  <div className="flex items-center gap-3 lg:gap-4">
                     <div className="flex items-center justify-center w-8 h-8 text-red-600 bg-red-100 rounded-full lg:w-12 lg:h-12">
                        <FiActivity className="text-base lg:text-xl" />
                     </div>
                     <div>
                        <div className="text-[8px] lg:text-[10px] font-black text-[#4a4869] uppercase tracking-widest mb-0.5">Conv. Rate</div>
                        <div className="text-xl font-black leading-none text-red-600 lg:text-3xl">0.02%</div>
                     </div>
                  </div>
               </motion.div>

               <motion.div 
                 animate={{ y: [0, 8, 0] }}
                 transition={{ duration: 5, repeat: Infinity }}
                 className="absolute bottom-6 right-6 lg:bottom-10 lg:right-10 bg-[#0e0c1a] p-4 lg:p-6 rounded-2xl lg:rounded-3xl shadow-xl"
               >
                  <div className="text-center">
                     <div className="text-[8px] lg:text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">Monthly Loss</div>
                     <div className="text-lg font-black leading-none text-white lg:text-2xl">₹50,000+</div>
                  </div>
               </motion.div>
            </div>
            
            {/* Background Shape */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border-2 border-red-50 rounded-full opacity-30 pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
