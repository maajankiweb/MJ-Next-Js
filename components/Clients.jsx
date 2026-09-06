"use client";

import { motion } from "framer-motion";
import LogoLoop from "./LogoLoop";
import {
  FiGlobe,
  FiShoppingBag,
  FiSearch,
  FiLayout,
  FiInstagram,
  FiLinkedin,
  FiSmartphone,
  FiZap,
  FiShield,
  FiTarget,
  FiTrendingUp,
  FiCpu,
} from "react-icons/fi";

const clientLogos = [
  { node: <FiGlobe />, title: "Web Design" },
  { node: <FiShoppingBag />, title: "Shopify" },
  { node: <FiSearch />, title: "SEO" },
  { node: <FiLayout />, title: "UI/UX" },
  { node: <FiInstagram />, title: "Social Media" },
  { node: <FiLinkedin />, title: "B2B Marketing" },
  { node: <FiSmartphone />, title: "Mobile Apps" },
  { node: <FiZap />, title: "Performance" },
  { node: <FiShield />, title: "Security" },
  { node: <FiTarget />, title: "Advertising" },
  { node: <FiTrendingUp />, title: "Growth" },
  { node: <FiCpu />, title: "Technology" },
];

export default function Clients() {
  return (
    <section
      className="py-16 lg:py-24 bg-[#fafaf8] border-y border-[#0e0c1a]/5 overflow-hidden"
      aria-labelledby="tools-heading"
    >
      <div className="px-6 mx-auto mb-10 max-w-7xl lg:mb-14">

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="block mb-3 text-xs font-semibold tracking-widest uppercase text-primary/70">
            Our Tech Stack
          </span>

          <h2
            id="tools-heading"
            className="text-2xl md:text-4xl font-extrabold text-[#0e0c1a] tracking-tight"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Platforms & Tools We Work With
          </h2>

          <p className="text-sm md:text-base text-[#4a4869] max-w-xl mx-auto mt-3 leading-relaxed">
            We use industry-leading technologies and platforms to build fast,
            scalable, and high-performing digital products.
          </p>
        </motion.header>
      </div>

      {/* Logo Marquee */}
      <div className="relative">
        
        {/* Gradient Fade Left */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#fafaf8] to-transparent z-10" />

        {/* Gradient Fade Right */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#fafaf8] to-transparent z-10" />

        <LogoLoop
          logos={clientLogos}
          speed={30}
          direction="left"
          logoHeight={34}
          gap={70}
          scaleOnHover={true}
        />
      </div>

      {/* Reverse Loop */}
      <div className="relative mt-8">
        
        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#fafaf8] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#fafaf8] to-transparent z-10" />

        <LogoLoop
          logos={[...clientLogos].reverse()}
          speed={25}
          direction="right"
          logoHeight={30}
          gap={90}
          scaleOnHover={true}
        />
      </div>
    </section>
  );
}