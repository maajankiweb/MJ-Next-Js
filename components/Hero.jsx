"use client";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import SplitText from "./SplitText";

const trustBadges = ["Google Partner", "WordPress Expert", "Meta Ads Certified"];

export default function Hero() {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const rotateX = useTransform(springY, [-300, 300], [10, -10]);
  const rotateY = useTransform(springX, [-300, 300], [-10, 10]);

  const handleMouseMove = (e) => {
    if (window.innerWidth < 1024) return; // Disable 3D tilt on mobile for performance
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <section
      id="home"
      itemScope
      itemType="https://schema.org/ProfessionalService"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#fafaf8] pt-32 pb-20 lg:pt-36 lg:pb-0 mt-8 lg:mt-0"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[60%] h-[60%] bg-[#6a1b9a] opacity-[0.03] lg:opacity-[0.05] blur-[80px] lg:blur-[120px] rounded-full" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[60%] h-[60%] bg-[#4f46e5] opacity-[0.03] lg:opacity-[0.05] blur-[80px] lg:blur-[120px] rounded-full" />
        <div className="dot-bg absolute inset-0 opacity-[0.05]" />
      </div>

      <div className="relative z-10 w-full px-6 mx-auto mt-10 max-w-7xl lg:mt-0">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="order-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 tag-chip mb-6 mx-auto lg:mx-0 text-[10px] lg:text-xs"
            >
              <span className="relative flex w-2 h-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6a1b9a] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6a1b9a]"></span>
              </span>
              India's Trusted Digital Partner
            </motion.div>

            <h1 
              itemProp="name"
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.05] lg:leading-[0.95] tracking-tight text-[#0e0c1a]"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              India's <span className="text-primary">Premier Web Engineering</span> & AI Innovation Agency
            </h1>

            <p itemProp="description" className="text-base md:text-lg lg:text-xl text-[#4a4869] mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium opacity-80">
              MJ Bytech provides top-notch Next.js engineering, scalable MERN web applications, and AI integration worldwide. You're getting a high-converting digital growth system built for performance.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col items-center justify-center gap-4 mb-12 sm:flex-row lg:justify-start"
            >
              <a href="#services" className="justify-center w-full text-center btn-primary sm:w-auto">
                Explore Services <FiArrowRight />
              </a>
              <a href="#audit" className="justify-center w-full text-center btn-outline sm:w-auto">
                Get Free Audit
              </a>
            </motion.div>

            {/* Micro Trust Proof */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-[#0e0c1a]/10 lg:justify-start">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#4a4869]">
                <FiCheckCircle className="text-[#27c93f] text-sm" /> 95+ PageSpeed Score
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#4a4869]">
                <FiCheckCircle className="text-[#27c93f] text-sm" /> Next.js 15 & React 19
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#4a4869]">
                <FiCheckCircle className="text-[#27c93f] text-sm" /> AI & GEO Engineered
              </div>
            </div>
          </motion.div>

          {/* 3D Visual Column */}
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="relative order-2 px-4 lg:px-0 mt-8 lg:mt-0"
          >
            {/* Hero Image Container */}
            <div className="relative w-full aspect-square max-w-[400px] lg:max-w-[500px] mx-auto mt-4 lg:mt-0 flex justify-center items-end">
              {/* Circular Background */}
              <div className="absolute inset-4 lg:inset-8 rounded-full bg-gradient-to-b from-[#e5e0ff]/50 to-[#fdfcff] shadow-[0_20px_40px_rgba(106,27,154,0.15)] border-4 border-white flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(106,27,154,0.15)_0%,transparent_60%)]" />
              </div>
              
              {/* Image */}
              <div className="absolute inset-0 z-10 pointer-events-none">
                <Image 
                  src="/ashish-nobg.png" 
                  alt="Ashish Kumar - Founder & Chief Web Architect at MJ Bytech" 
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.2)] scale-[1.1] lg:scale-[1.15] translate-y-2 lg:translate-y-4 origin-bottom pointer-events-auto"
                />
              </div>

              {/* Floating Element 1 - Adjusted for mobile */}
              <motion.div
                style={{ translateZ: 50 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute top-8 -right-2 lg:top-16 lg:-right-6 trust-badge flex items-center gap-2 lg:gap-3 !px-3 lg:!px-5 !py-2 lg:!py-3 scale-75 lg:scale-100 z-20"
              >
                <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-lg bg-[#27c93f]/10 flex items-center justify-center text-[#27c93f] text-xs lg:text-base">
                  📈
                </div>
                <div>
                  <div className="text-[8px] lg:text-[10px] text-[#4a4869] font-bold">REVENUE</div>
                  <div className="text-xs lg:text-sm font-black text-[#0e0c1a]">+320%</div>
                </div>
              </motion.div>

              {/* Floating Element 2 - Adjusted for mobile */}
              <motion.div
                style={{ translateZ: 80 }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-16 -left-2 lg:bottom-24 lg:-left-6 trust-badge flex items-center gap-2 lg:gap-3 !px-3 lg:!px-5 !py-2 lg:!py-3 scale-75 lg:scale-100 z-20"
              >
                <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-lg bg-[#4f46e5]/10 flex items-center justify-center text-[#4f46e5] text-xs lg:text-base">
                  👥
                </div>
                <div>
                  <div className="text-[8px] lg:text-[10px] text-[#4a4869] font-bold">CONVERSIONS</div>
                  <div className="text-xs lg:text-sm font-black text-[#0e0c1a]">4.2k+</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - Hidden on mobile to save space */}
      <motion.div
        className="absolute flex-col items-center hidden gap-2 -translate-x-1/2 bottom-8 left-1/2 lg:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-[10px] font-black tracking-widest uppercase text-[#4f46e5]/40">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-0.5 h-10 rounded-full bg-gradient-to-b from-[#6a1b9a] to-transparent"
        />
      </motion.div>
    </section>
  );
}

