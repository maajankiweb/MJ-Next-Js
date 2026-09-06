"use client";

import { motion } from "framer-motion";
import {
  FiHome,
  FiShoppingBag,
  FiHeart,
  FiBriefcase,
  FiTruck,
  FiCoffee,
  FiArrowRight,
} from "react-icons/fi";

const industries = [
  {
    icon: <FiHome />,
    title: "Real Estate",
    desc: "High-converting property websites with virtual tours & lead capture.",
    color: "#6a1b9a",
  },
  {
    icon: <FiShoppingBag />,
    title: "E-Commerce",
    desc: "Fast, scalable online stores optimized for conversions.",
    color: "#4f46e5",
  },
  {
    icon: <FiHeart />,
    title: "Healthcare",
    desc: "Appointment booking systems & patient-friendly portals.",
    color: "#ec4899",
  },
  {
    icon: <FiBriefcase />,
    title: "Professional Services",
    desc: "Premium websites for consultants, lawyers & agencies.",
    color: "#8b5cf6",
  },
  {
    icon: <FiTruck />,
    title: "Logistics",
    desc: "Smart dashboards with tracking & operations management.",
    color: "#10b981",
  },
  {
    icon: <FiCoffee />,
    title: "Hospitality",
    desc: "Hotel & restaurant websites with booking & menu systems.",
    color: "#f59e0b",
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="py-20 lg:py-32 bg-[#fafaf8]"
      aria-labelledby="industries-heading"
    >
      <div className="px-6 mx-auto max-w-7xl">
        
        {/* Header */}
        <header className="flex flex-col justify-between gap-8 mb-16 lg:flex-row lg:items-end lg:mb-20">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="inline-block px-4 py-1 mb-5 text-xs font-semibold tracking-wide uppercase rounded-full bg-primary/10 text-primary"
            >
              Industry Expertise
            </motion.span>

            <h2
              id="industries-heading"
              className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-[#0e0c1a]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Website Solutions for{" "}
              <span className="text-primary">Every Industry</span>
            </h2>
          </div>

          <p className="text-sm md:text-base text-[#4a4869] max-w-md leading-relaxed">
            We create industry-focused websites designed to solve real business
            challenges and generate leads.
          </p>
        </header>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {industries.map((industry, i) => (
            <motion.article
              key={industry.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group"
            >
              <div className="relative bg-white p-7 lg:p-9 rounded-3xl border border-gray-100 
              transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
              hover:-translate-y-3 hover:shadow-2xl hover:border-primary/30 
              flex flex-col h-full overflow-hidden">

                {/* 🔥 Glow Overlay */}
                <div className="absolute inset-0 transition duration-700 opacity-0 pointer-events-none group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
                </div>

                {/* ✨ Light Sweep */}
                <div className="absolute -inset-[1px] opacity-0 group-hover:opacity-100 transition duration-700">
                  <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.4),transparent)] 
                  translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </div>

                {/* Background Accent */}
                <div
                  className="absolute top-0 right-0 w-28 h-28 opacity-[0.04] 
                  translate-x-8 -translate-y-8 group-hover:scale-150 transition duration-700"
                  style={{
                    backgroundColor: industry.color,
                    borderRadius: "100%",
                  }}
                />

                {/* Icon */}
                <div
                  className="flex items-center justify-center w-12 h-12 mb-5 text-xl transition-all duration-500 rounded-xl group-hover:scale-110 group-hover:rotate-6 group-hover:-translate-y-1"
                  style={{
                    backgroundColor: `${industry.color}15`,
                    color: industry.color,
                  }}
                >
                  {industry.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg lg:text-xl font-semibold text-[#0e0c1a] mb-2 
                transition-all duration-300 group-hover:translate-x-1">
                  {industry.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#4a4869] leading-relaxed mb-6 flex-grow">
                  {industry.desc}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-[#0e0c1a]/40">
                    Industry Focused
                  </span>

                  <FiArrowRight className="transition-all duration-300 text-primary opacity-40 group-hover:opacity-100 group-hover:translate-x-2 group-hover:scale-110" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}