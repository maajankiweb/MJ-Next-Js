"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiGlobe, FiUsers, FiAward, FiHeart } from "react-icons/fi";

function CountUp({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true });
  const frameRef = useRef(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const animate = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress < 1) frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

const stats = [
  { 
    value: 10, 
    suffix: "+", 
    label: "Projects Delivered", 
    color: "#6a1b9a", 
    icon: <FiGlobe />,
    desc: "Successful digital transformations."
  },
  { 
    value: 5, 
    suffix: "+", 
    label: "Happy Clients", 
    color: "#4f46e5", 
    icon: <FiUsers />,
    desc: "Long-term business partnerships."
  },
  { 
    value: 2, 
    suffix: "+", 
    label: "Years Experience", 
    color: "#8b5cf6", 
    icon: <FiAward />,
    desc: "Excellence in digital craftsmanship."
  },
  { 
    value: 90, 
    suffix: "%", 
    label: "Satisfaction Rate", 
    color: "#10b981", 
    icon: <FiHeart />,
    desc: "Client-first approach always."
  },
];

export default function StatsSection() {
  return (
    <section id="stats" className="relative py-16 overflow-hidden bg-white lg:py-32">
      <div className="relative z-10 px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative h-full group"
            >
              <div className="bg-[#fafaf8] p-5 lg:p-10 rounded-[1.5rem] lg:rounded-[3rem] border border-[#0e0c1a]/5 hover:border-primary/20 transition-all duration-700 hover:shadow-2xl h-full flex flex-col items-center text-center overflow-hidden relative">
                {/* Background Accent */}
                <div 
                   className="absolute top-0 right-0 w-16 h-16 lg:w-32 lg:h-32 opacity-[0.03] translate-x-5 -translate-y-5 lg:translate-x-10 lg:-translate-y-10 group-hover:scale-150 transition-transform duration-1000 rounded-full pointer-events-none"
                   style={{ backgroundColor: stat.color }}
                />

                <div 
                   className="flex items-center justify-center w-10 h-10 mb-4 text-lg transition-all duration-500 shadow-sm lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl lg:text-3xl lg:mb-8 group-hover:scale-110 group-hover:rotate-6"
                   style={{ backgroundColor: `${stat.color}10`, color: stat.color }}
                >
                   {stat.icon}
                </div>

                <div className="mb-2 lg:mb-4">
                   <div 
                     className="mb-1 text-2xl font-black md:text-5xl lg:text-6xl lg:mb-2"
                     style={{ 
                        fontFamily: "'Cabinet Grotesk', sans-serif",
                        color: "#0e0c1a"
                     }}
                   >
                     <CountUp end={stat.value} suffix={stat.suffix} />
                   </div>
                   <div className="text-[9px] lg:text-sm font-black uppercase tracking-wider lg:tracking-[0.2em] text-[#0e0c1a] leading-tight px-1">
                      {stat.label}
                   </div>
                </div>

                <p className="hidden md:block text-[9px] lg:text-[10px] text-[#4a4869] opacity-60 leading-relaxed font-bold uppercase mt-auto">
                   {stat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
