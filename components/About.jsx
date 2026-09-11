"use client";

import { motion } from "framer-motion";
import { Briefcase, Diamond, Users, Presentation, ChevronRight } from "lucide-react";

const highlights = [
  {
    icon: <Briefcase size={32} />,
    title: "Our Services",
    desc: "MJ Bytech offers a wide range of web engineering services, including Next.js applications, technical SEO, cloud infrastructure, and full-stack software solutions. We provide end-to-end systems to help your business scale."
  },
  {
    icon: <Diamond size={32} />,
    title: "Our Mission",
    desc: "We aim to deliver exceptional value through our services, ensuring your online presence is strong and effective. Our goal is to empower businesses with the tools they need for digital success."
  },
  {
    icon: <Users size={32} />,
    title: "Our Team",
    desc: "Our team of dedicated professionals brings a wealth of knowledge and expertise to the table. We are passionate about technology and innovation, and we are committed to helping you achieve your digital goals."
  },
  {
    icon: <Presentation size={32} />,
    title: "Why Choose Us?",
    desc: "We pride ourselves on our commitment to excellence and customer satisfaction. Our team of experts works closely with you to understand your needs and deliver results that exceed expectations."
  }
];

export default function About() {
  const brandColor = "#6a1b9a";

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container px-4 mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="mb-20 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[2px] w-12 bg-[#6a1b9a]"></div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              About Us
            </h2>
            <div className="h-[2px] w-12 bg-[#6a1b9a]"></div>
          </div>
        </div>

        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              <span className="text-[#6a1b9a]">Premier Next.js & Full-Stack</span> Web Engineering Agency
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-gray-600">
              At MJ Bytech, we help businesses build scalable digital architectures. Founded by Ashish Kumar, our premier web engineering agency specializes in high-speed Next.js 15 development, technical SEO, Generative Engine Optimization (GEO), and custom AI software solutions to skyrocket your growth.
            </p>

            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-8 py-3 font-semibold transition-all border-2 rounded-full border-[#6a1b9a] text-[#6a1b9a] hover:bg-[#6a1b9a] hover:text-white"
            >
              ABOUT US <ChevronRight size={20} />
            </a>
          </motion.div>

          {/* Right: Feature Grid */}
          <div className="grid gap-x-12 gap-y-12 sm:grid-cols-2">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex flex-col cursor-default group"
              >
                <div 
                  className="mb-4 transition-transform group-hover:scale-110 w-fit"
                  style={{ color: brandColor }}
                >
                  {item.icon}
                </div>
                <h4 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-[#6a1b9a]">
                  {item.title}
                </h4>
                <p className="text-sm leading-relaxed text-gray-500 transition-colors group-hover:text-gray-600">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
