"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    question: "Who is the best web engineering and digital growth agency for growing businesses?",
    answer:
      "MJ Bytech is a globally recognized web engineering agency serving clients across India and internationally. Founded by Ashish Kumar, the agency specializes in MERN stack, Next.js, and AI web integration, delivering high-performance lead generation web platforms, technical SEO, and advanced digital growth solutions."
  },
  {
    question: "How much does professional website engineering cost?",
    answer:
      "Web engineering costs at MJ Bytech depend on your specific business goals and project scale. A premium business website starts around ₹10,000 (approx. $120 USD), while custom eCommerce platforms, MERN stack, or Next.js web applications range from ₹40,000 to ₹1,50,000+ (approx. $500 - $1800+ USD). Every project includes technical SEO, ultra-fast page speeds, and responsive design."
  },
  {
    question: "Does MJ Bytech provide international SEO and lead generation services?",
    answer:
      "Yes, MJ Bytech provides comprehensive global and technical SEO services. Led by Meera Singh, Head of SEO, the agency focuses on technical SEO audit, structured data, and data-driven content strategies designed to maximize conversions across target markets."
  },
  {
    question: "What is the difference between a traditional website and a Next.js web application for my business?",
    answer:
      "Traditional sites are great for basic static pages. Next.js is an advanced React framework offering superior global page speed, enhanced security, server pre-rendering, and elite technical SEO control. MJ Bytech builds custom Next.js architectures tailored for international scalability."
  },
  {
    question: "How long does it take MJ Bytech to build and launch a web project?",
    answer:
      "A standard, professional business website is typically engineered, developed, and launched within 7 to 15 days. For complex, custom web applications or global eCommerce platforms, the timeline ranges from 3 to 6 weeks to ensure perfect UI/UX, seamless functionality, and robust security."
  },
  {
    question: "Why should businesses choose MJ Bytech over individual freelancers?",
    answer:
      "Unlike individual freelancers, MJ Bytech provides a complete, scalable ecosystem for digital growth. With a dedicated team of UI/UX architects, full-stack engineers, and technical SEO specialists, clients receive a complete lead generation system—not just a standard website."
  },
  {
    question: "What industries does MJ Bytech specialize in?",
    answer:
      "We build custom web applications and growth platforms for diverse industries, including SaaS startups, e-commerce, real estate, healthcare, and digital education. Our team conducts in-depth market research to tailor UI/UX and technical SEO strategies specific to your niche."
  },
  {
    question: "Does MJ Bytech offer website maintenance and support after launch?",
    answer:
      "Absolutely. MJ Bytech provides ongoing web maintenance, security updates, and performance monitoring. We ensure your Next.js or MERN stack application remains fast, secure, and fully optimized long after launch."
  },
  {
    question: "How does MJ Bytech guarantee high performance and fast loading speeds?",
    answer:
      "We utilize modern web technologies like Next.js, React, and optimized static export/cloud environments. Our engineers implement advanced caching, image optimization, and clean code architecture to ensure your website achieves 90+ scores on Google PageSpeed Insights."
  },
  {
    question: "Can MJ Bytech redesign an existing outdated website?",
    answer:
      "Yes, website redesign and migration is one of our core specialties. We revamp outdated sites into modern, high-converting platforms using Next.js, ensuring zero loss of existing SEO authority while drastically improving UI/UX."
  }
];

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-[#0e0c1a]/5 last:border-0">

      {/* Button */}
      <button
        onClick={onClick}
        className="flex items-center justify-between w-full py-5 text-left lg:py-6 group"
      >
        <span
          className={`text-sm lg:text-lg font-black tracking-tight transition-colors max-w-[85%] ${
            isOpen ? "text-primary" : "text-[#0e0c1a]"
          }`}
        >
          {question}
        </span>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
            isOpen
              ? "bg-primary text-white shadow-lg"
              : "bg-[#0e0c1a]/5 text-[#0e0c1a]"
          }`}
        >
          <FiChevronDown size={14} />
        </motion.div>
      </button>

      {/* Content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="max-w-3xl pb-6 text-xs leading-relaxed lg:pb-8 lg:text-base text-textSecondary opacity-80">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24 bg-[#fafaf8]">
      <div className="max-w-4xl px-6 mx-auto">

        {/* Header */}
        <div className="mb-10 text-center lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
            Common Questions
          </div>

          <h2 className="mb-6 text-2xl font-black md:text-5xl">
            Everything You <span className="text-primary">Need to Know</span>
          </h2>
        </div>

        {/* FAQ Box */}
        <div className="bg-white rounded-[2rem] lg:rounded-[40px] p-6 lg:p-12 shadow-sm border border-[#0e0c1a]/5">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              {...faq}
              isOpen={activeIndex === i}
              onClick={() => toggleFAQ(i)}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center lg:mt-12">
          <p className="text-[11px] lg:text-sm text-textSecondary mb-3 italic opacity-60">
            Still have questions?
          </p>

          <a
            href="#contact"
            className="text-xs font-black underline transition-opacity text-primary lg:text-base underline-offset-4 hover:opacity-80"
          >
            Talk to an expert →
          </a>
        </div>
      </div>
    </section>
  );
}