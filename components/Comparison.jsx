"use client";

import { motion } from "framer-motion";
import { FiCheck, FiX, FiArrowRight } from "react-icons/fi";

const points = [
  {
    feature: "Custom Website Development",
    mjbytech: "Fully tailored website based on your business requirements",
    others: "Pre-built templates with limited customization",
    highlight: "100% Custom Build",
  },
  {
    feature: "Business-Focused Strategy",
    mjbytech: "Website designed for leads, conversions, and growth",
    others: "Only basic design without business strategy",
    highlight: "Growth Driven",
  },
  {
    feature: "SEO-Optimized Development",
    mjbytech: "Built with technical SEO, speed, and ranking in mind",
    others: "Basic setup with no real SEO foundation",
    highlight: "Search Engine Ready",
  },
  {
    feature: "Scalability & Flexibility",
    mjbytech: "Easily scalable as your business grows",
    others: "Hard to upgrade or expand later",
    highlight: "Future Ready",
  },
  {
    feature: "Client-Centric Approach",
    mjbytech: "Built according to your exact needs and goals",
    others: "One-size-fits-all development approach",
    highlight: "Your Vision First",
  },
  {
    feature: "Direct Developer Communication",
    mjbytech: "Direct communication with developer for fast execution",
    others: "Communication through non-technical middle managers",
    highlight: "Fast Execution",
  },
];

export default function Comparison() {
  return (
    <section
      id="comparison"
      className="py-20 lg:py-32 bg-[#fafaf8] relative overflow-hidden"
      aria-labelledby="comparison-heading"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] bg-primary/5 blur-[80px] lg:blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] bg-secondary/5 blur-[80px] lg:blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 px-6 mx-auto max-w-7xl">
        <div className="mb-16 text-center lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-6 tag-chip"
          >
            Website Development & SEO Comparison
          </motion.div>

          <motion.h2
            id="comparison-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-6 text-3xl font-black leading-tight tracking-tight md:text-xl lg:text-6xl lg:mb-5"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Website Development & SEO Services That <br />
            <span className="italic text-primary">
              Drive Real Business Growth
            </span>
          </motion.h2>

          <p className="text-base md:text-lg lg:text-xl text-[#4a4869] max-w-2xl mx-auto font-medium opacity-80 leading-relaxed">
            Most agencies deliver basic websites. We build high-performance,
            SEO-optimized websites and digital marketing systems designed to
            generate leads, increase conversions, and grow your business in 2026
            and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px_400px] gap-6 lg:gap-4 items-stretch">
          {/* Feature Labels */}
          <div className="flex-col justify-center hidden pr-12 space-y-12 lg:flex">
            {points.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-2 opacity-50 group-hover:opacity-100 transition-opacity">
                  {p.highlight}
                </div>
                <h3 className="text-xl font-black text-[#0e0c1a]">
                  {p.feature}
                </h3>
              </motion.div>
            ))}
          </div>

          {/* MJ Bytech Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2"
          >
            <div className="bg-[#0e0c1a] text-white rounded-[2.5rem] lg:rounded-[3rem] p-8 md:p-10 lg:p-12 h-full border-2 lg:border-4 border-primary/20 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-primary px-6 lg:px-8 py-2 lg:py-3 rounded-bl-2xl lg:rounded-bl-3xl font-black text-[10px] uppercase tracking-widest animate-pulse">
                MJ Bytech Way
              </div>

              <div className="mb-10 lg:mb-12">
                <h3 className="mb-1 text-2xl font-black lg:text-3xl lg:mb-2 text-primary">
                  MJ Bytech
                </h3>
                <p className="text-[10px] text-white/50 font-bold uppercase tracking-widest">
                  Conversion-Focused Development
                </p>
              </div>

              <div className="space-y-8 lg:space-y-12">
                {points.map((p, i) => (
                  <div key={i}>
                    <div className="lg:hidden text-[9px] font-black uppercase text-primary/60 mb-2">
                      {p.feature}
                    </div>
                    <div className="flex items-start gap-3 lg:gap-4">
                      <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5 lg:mt-1">
                        <FiCheck className="text-primary stroke-[3] text-xs lg:text-base" />
                      </div>
                      <p className="text-base font-bold leading-tight lg:text-lg">
                        {p.mjbytech}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8 mt-12 border-t lg:mt-16 border-white/10">
                <a
                  href="#contact"
                  className="justify-center w-full py-4 transition-transform btn-primary group-hover:scale-105"
                  aria-label="Start your website development project"
                >
                  Start Your Website Project <FiArrowRight />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Others Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative order-2 lg:order-3"
          >
            <div className="bg-white rounded-[2.5rem] lg:rounded-[3rem] p-8 md:p-10 lg:p-12 h-full border border-[#0e0c1a]/5 shadow-xl">
              <div className="mb-10 lg:mb-12">
                <h3 className="text-2xl lg:text-3xl font-black mb-1 lg:mb-2 text-[#0e0c1a]">
                  Traditional Agencies
                </h3>
                <p className="text-[10px] text-[#4a4869] font-bold uppercase tracking-widest">
                  Outdated Approach
                </p>
              </div>

              <div className="space-y-8 lg:space-y-12">
                {points.map((p, i) => (
                  <div key={i}>
                    <div className="lg:hidden text-[9px] font-black uppercase text-[#4a4869]/60 mb-2">
                      {p.feature}
                    </div>
                    <div className="flex items-start gap-3 lg:gap-4 opacity-60">
                      <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-[#0e0c1a]/5 flex items-center justify-center shrink-0 mt-0.5 lg:mt-1">
                        <FiX className="text-[#0e0c1a] stroke-[3] text-xs lg:text-base" />
                      </div>
                      <p className="text-base lg:text-lg font-medium leading-tight text-[#0e0c1a]">
                        {p.others}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 lg:mt-16 pt-8 border-t border-[#0e0c1a]/5 flex items-center justify-center text-[#4a4869] text-xs lg:text-sm italic text-center">
                Outdated technologies and generic websites limit your business
                growth potential.
              </div>
            </div>
          </motion.div>
        </div>

        {/* Hidden SEO Content */}
        <div className="hidden">
          <h3>Website Development Services</h3>
          <p>
            We provide professional website development, SEO optimization,
            eCommerce development, and digital marketing services for businesses
            looking to grow online.
          </p>

          <h3>SEO and Digital Marketing Solutions</h3>
          <p>
            Our services include technical SEO, on-page optimization, lead
            generation systems, and conversion-focused web design to help
            businesses rank higher on Google.
          </p>
        </div>
      </div>
    </section>
  );
}