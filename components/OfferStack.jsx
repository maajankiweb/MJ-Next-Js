"use client";
import { motion } from "framer-motion";
import {
  FiCheck,
  FiArrowRight,
  FiTarget,
  FiActivity,
  FiZap,
} from "react-icons/fi";

const features = [
  { title: "Premium Design", desc: "Custom UI/UX tailored to your brand identity." },
  { title: "Technical SEO", desc: "Optimized with schema & Core Web Vitals." },
  { title: "Mobile Optimization", desc: "Fully responsive for mobile-first users." },
  { title: "Lead Generation", desc: "WhatsApp & CRM integration included." },
  { title: "High Speed", desc: "Ultra-fast loading with Next.js optimization." },
  { title: "Support", desc: "30 days post-launch maintenance included." },
];

export default function OfferStack() {
  return (
    <section
      id="offer"
      className="relative py-20 overflow-hidden bg-white lg:py-32"
      aria-labelledby="offer-heading"
    >
      {/* Background Blur */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] lg:w-[700px] lg:h-[700px] bg-primary/5 blur-[100px] rounded-full" />

      <div className="relative z-10 px-6 mx-auto max-w-7xl">
        
        {/* SEO Optimized Heading */}
        <header className="text-center mb-14 lg:mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-block px-4 py-1 mb-5 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary/10 text-primary"
          >
            Exclusive Offer
          </motion.span>

          <h2
            id="offer-heading"
            className="text-3xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            High-Converting{" "}
            <span className="text-primary">Website Package</span>
          </h2>

          <p className="max-w-xl mx-auto mt-4 text-sm leading-relaxed text-gray-500 md:text-base">
            We build SEO-optimized, fast-loading websites designed to generate
            leads and grow your business online.
          </p>
        </header>

        <div className="grid lg:grid-cols-[1fr_420px] gap-8 items-stretch">
          
          {/* Features */}
          <div className="grid order-2 gap-5 sm:grid-cols-2 lg:order-1">
            {features.map((feature, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-[#fafaf8] p-6 rounded-2xl border border-gray-100 hover:border-primary/20 transition duration-300"
              >
                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-xl bg-primary/10 text-primary">
                  <FiCheck className="stroke-[2.5]" />
                </div>

                <h3 className="mb-1 text-base font-semibold">
                  {feature.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-500">
                  {feature.desc}
                </p>
              </motion.article>
            ))}
          </div>

          {/* Offer Card */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative order-1 lg:order-2"
          >
            <div className="bg-[#0e0c1a] text-white rounded-3xl p-8 lg:p-12 border-2 border-primary/20 shadow-xl flex flex-col justify-between h-full">
              
              {/* Badge */}
              <div className="absolute top-0 right-0 px-6 py-2 text-xs font-bold tracking-wide uppercase bg-primary rounded-bl-2xl">
                Best Value
              </div>

              {/* Content */}
              <div>
                <p className="mb-3 text-xs tracking-widest uppercase text-primary">
                  Limited Time Offer
                </p>

                <h3 className="mb-2 text-2xl font-bold lg:text-3xl">
                  Business Launch Package
                </h3>

                <p className="mb-8 text-sm text-white/60">
                  Complete website + SEO setup for growing businesses.
                </p>

                {/* Pricing */}
                <div className="mb-8">
                  <p className="text-sm line-through text-white/40">
                    ₹25,000+
                  </p>

                  <div className="flex items-end gap-2 mt-1">
                    <span className="text-5xl font-extrabold">₹10k</span>
                    <span className="text-sm text-white/50">starting</span>
                  </div>
                </div>

                {/* Includes */}
                <ul className="mb-8 space-y-3 text-sm font-medium">
                  <li className="flex items-center gap-2">
                    <FiTarget className="text-primary" /> Strategy Planning
                  </li>
                  <li className="flex items-center gap-2">
                    <FiActivity className="text-primary" /> SEO Audit
                  </li>
                  <li className="flex items-center gap-2">
                    <FiZap className="text-primary" /> Fast 10-Day Delivery
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="flex items-center justify-center w-full gap-2 py-3 text-sm font-semibold btn-primary"
              >
                Get Started <FiArrowRight />
              </a>

              <p className="text-center text-[10px] text-white/30 mt-4 uppercase tracking-wider">
                Limited Slots Available
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}