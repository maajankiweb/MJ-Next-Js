"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiUsers, FiCpu, FiTrendingUp, FiSettings } from "react-icons/fi";

const reasons = [
  {
    icon: <FiTrendingUp />,
    title: "Result-Focused",
    desc: "We don't just build websites; we build lead generation systems that focus on ROI.",
    color: "#6a1b9a"
  },
  {
    icon: <FiCpu />,
    title: "Affordable Pricing",
    desc: "Premium quality services at prices that make sense for Indian businesses.",
    color: "#4f46e5"
  },
  {
    icon: <FiUsers />,
    title: "Indian Market Expertise",
    desc: "Deep understanding of the Indian digital audience and buying behavior.",
    color: "#6a1b9a"
  },
  {
    icon: <FiSettings />,
    title: "Direct Support",
    desc: "No tickets, no wait. Get direct support on WhatsApp and call whenever you need.",
    color: "#4f46e5"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-16 overflow-hidden bg-white lg:py-24">
      <div className="relative z-10 px-6 mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
              Unique Value
            </div>
            <h2 className="mb-5 text-3xl font-black leading-tight md:text-4xl lg:text-5xl lg:mb-6" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
              Why Brands <span className="text-primary">Trust MJ Bytech</span>
            </h2>
            <p className="max-w-xl mb-10 text-base lg:text-lg text-textSecondary lg:mb-12">
              We bridge the gap between complex technology and real-world business results. Our approach is tailored to the unique dynamics of the Indian digital landscape.
            </p>

            <div className="grid grid-cols-1 gap-6 mb-8 sm:grid-cols-2 lg:gap-8 lg:mb-0">
              {reasons.map((reason, i) => (
                <div key={i} className="group">
                  <div 
                    className="flex items-center justify-center w-10 h-10 mb-3 text-lg transition-transform duration-500 shadow-sm lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl lg:text-xl lg:mb-4 group-hover:scale-110 group-hover:rotate-3"
                    style={{ backgroundColor: `${reason.color}15`, color: reason.color }}
                  >
                    {reason.icon}
                  </div>
                  <h4 className="mb-1 text-base font-black tracking-tight lg:text-lg lg:mb-2">{reason.title}</h4>
                  <p className="text-sm leading-relaxed text-textSecondary opacity-80">{reason.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative rounded-[2rem] lg:rounded-[40px] overflow-hidden shadow-2xl max-w-md mx-auto lg:max-w-none aspect-[4/5] lg:aspect-[3/4]">
               <Image 
                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=1000&fit=crop" 
                 alt="Digital Marketing Team Collaboration" 
                 fill
                 sizes="(max-width: 1024px) 100vw, 50vw"
                 className="object-cover transition-all duration-700 grayscale hover:grayscale-0"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#6a1b9a]/40 to-transparent pointer-events-none" />
            </div>
            
            {/* Floating stats card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 lg:-bottom-10 left-1/2 lg:-left-10 -translate-x-1/2 lg:translate-x-0 bg-white p-6 lg:p-8 rounded-2xl lg:rounded-3xl shadow-2xl border border-[#0e0c1a]/5 w-[80%] max-w-[240px] text-center lg:text-left"
            >
              <div className="mb-1 text-3xl font-black lg:text-4xl text-primary lg:mb-2">98%</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-textSecondary mb-2">Retention Rate</div>
              <p className="text-[9px] opacity-60 leading-tight">We grow when you grow. Most of our clients work with us for 3+ years.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
