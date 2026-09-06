"use client";
import { motion } from "framer-motion";
import { FiSearch, FiLayers, FiCode, FiActivity, FiZap, FiArrowRight } from "react-icons/fi";

const steps = [
  {
    num: "01",
    icon: <FiSearch />,
    title: "Discovery & Strategy",
    desc: "1. Market Research & Strategy: Analyzing target user intent, competitive landscape, and digital architecture requirements.",
    color: "#6a1b9a"
  },
  {
    num: "02",
    icon: <FiLayers />,
    title: "UI/UX Architecture",
    desc: "2. Figma UI Design: Crafting high-converting visual design systems, wireframes, and interactive web prototypes.",
    color: "#4f46e5"
  },
  {
    num: "03",
    icon: <FiCode />,
    title: "Next.js Engineering",
    desc: "3. Full-Stack Build: Developing custom Next.js App Router applications with clean code, TypeScript, and API integrations.",
    color: "#8b5cf6"
  },
  {
    num: "04",
    icon: <FiActivity />,
    title: "Technical SEO & Growth",
    desc: "4. Deployment & SEO: Executing schema markup, Core Web Vitals optimization, and automated cloud static export.",
    color: "#10b981"
  }
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="tag-chip mb-6 inline-block"
          >
            How We Work
          </motion.div>
          <h2 
            className="text-5xl md:text-7xl font-black text-[#0e0c1a] leading-tight mb-8"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            A Simple <span className="text-primary italic">4-Step</span> Process
          </h2>
          <p className="text-xl text-[#4a4869] max-w-2xl mx-auto">
            From first talk to final launch, we keep everything transparent, fast, and results-driven.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              {/* Connector line for desktop */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-[2px] bg-slate-100 z-0 -translate-x-12">
                  <div className="absolute top-1/2 -translate-y-1/2 right-0 w-2 h-2 rounded-full bg-slate-200" />
                </div>
              )}

              <div className="relative z-10">
                <div 
                  className="w-24 h-24 rounded-[2rem] flex items-center justify-center text-3xl mb-8 relative transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 shadow-xl shadow-transparent group-hover:shadow-current/5"
                  style={{ backgroundColor: `${step.color}10`, color: step.color }}
                >
                  {step.icon}
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-[#0e0c1a] text-white rounded-full flex items-center justify-center text-xs font-black border-4 border-white">
                    {step.num}
                  </div>
                </div>
                
                <h4 className="text-2xl font-black mb-4 text-[#0e0c1a]">{step.title}</h4>
                <p className="text-base text-[#4a4869] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 bg-[#0e0c1a] rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden border-4 border-primary/20"
        >
          <div className="absolute inset-0 opacity-10 pointer-events-none dot-bg" />
          <h3 className="text-3xl md:text-4xl font-black text-white mb-8 relative z-10">Ready to start your digital journey?</h3>
          <a href="#contact" className="btn-primary inline-flex relative z-10">
            Let's Build Your Dream <FiArrowRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
