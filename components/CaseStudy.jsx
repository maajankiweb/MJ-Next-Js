"use client";
import { motion } from "framer-motion";
import { FiArrowRight, FiTrendingUp } from "react-icons/fi";

const caseStudies = [
  {
    title: "Local Healthcare Clinic",
    problem: "Having a static website but getting zero inquiries online.",
    solution:
      "Full redesign with high-converting appointment forms, local SEO optimization, and WhatsApp integration.",
    result:
      "25+ leads/month and #1 ranking for local medical services.",
    industry: "Healthcare",
  },
  {
    title: "Real Estate Consultant",
    problem:
      "High ad spend on social media but poor quality leads.",
    solution:
      "Built conversion-focused landing pages with automated lead nurturing systems.",
    result:
      "40% lower CPL and 3x higher lead conversion rate.",
    industry: "Real Estate",
  },
];

export default function CaseStudy() {
  return (
    <section
      className="py-20 lg:py-28 bg-[#fafaf8]"
      aria-labelledby="case-heading"
    >
      <div className="px-6 mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col items-end justify-between gap-8 mb-16 lg:flex-row">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1 mb-5 text-xs font-semibold tracking-wide uppercase rounded-full bg-primary/10 text-primary">
              Real Results
            </span>

            <h2
              id="case-heading"
              className="text-3xl font-extrabold leading-tight tracking-tight md:text-5xl"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Case Studies That Drive{" "}
              <span className="text-primary">Real Growth</span>
            </h2>

            <p className="max-w-lg mt-4 text-sm text-gray-500 md:text-base">
              See how we help businesses generate leads, improve conversions,
              and scale with data-driven digital solutions.
            </p>
          </div>

          <a
            href="#portfolio"
            className="flex items-center gap-2 btn-outline"
          >
            View All <FiArrowRight />
          </a>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {caseStudies.map((study, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div
                className="relative bg-white rounded-3xl p-8 border border-gray-100 
                transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                hover:-translate-y-3 hover:shadow-2xl hover:border-primary/30 overflow-hidden"
              >
                
                {/* Glow Overlay */}
                <div className="absolute inset-0 transition duration-700 opacity-0 pointer-events-none group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
                </div>

                {/* Top */}
                <div className="flex items-start justify-between mb-6">
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-[10px] font-semibold uppercase tracking-wide text-gray-500">
                    {study.industry}
                  </span>

                  <div className="flex items-center justify-center text-green-600 transition w-11 h-11 rounded-xl bg-green-50 group-hover:scale-110 group-hover:rotate-6">
                    <FiTrendingUp size={22} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold mb-6 text-[#0e0c1a] transition group-hover:text-primary group-hover:translate-x-1">
                  {study.title}
                </h3>

                {/* Content */}
                <div className="space-y-5">
                  
                  {/* Problem */}
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-red-500 mb-1">
                      Problem
                    </p>
                    <p className="text-sm leading-relaxed text-gray-500">
                      {study.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-indigo-500 mb-1">
                      Solution
                    </p>
                    <p className="text-sm leading-relaxed text-gray-500">
                      {study.solution}
                    </p>
                  </div>

                  {/* Result */}
                  <div className="p-4 border border-green-100 rounded-xl bg-green-50">
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-green-600 mb-1">
                      Result
                    </p>
                    <p className="text-base font-semibold text-[#0e0c1a]">
                      {study.result}
                    </p>
                  </div>
                </div>

                {/* CTA hover arrow */}
                <div className="flex justify-end mt-6">
                  <FiArrowRight className="transition-all duration-300 opacity-0 text-primary group-hover:opacity-100 group-hover:translate-x-2" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}