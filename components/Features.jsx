"use client";

import { motion } from "framer-motion";
import { 
  Monitor, Smartphone, TrendingUp, Megaphone, 
  Target, Shield, Laptop, Cloud, 
  ShoppingCart, FileText, Palette, BarChart, 
  Headset, Puzzle, Gauge, Settings 
} from "lucide-react";

const features = [
  { title: "Custom Websites", icon: <Monitor size={24} />, color: "#f97316" },
  { title: "Mobile Apps", icon: <Smartphone size={24} />, color: "#3b82f6" },
  { title: "SEO", icon: <TrendingUp size={24} />, color: "#d946ef" },
  { title: "Marketing", icon: <Megaphone size={24} />, color: "#a855f7" },
  { title: "Ad Management", icon: <Target size={24} />, color: "#06b6d4" },
  { title: "Cybersecurity", icon: <Shield size={24} />, color: "#f59e0b" },
  { title: "Coding Classes", icon: <Laptop size={24} />, color: "#14b8a6" },
  { title: "Cloud Services", icon: <Cloud size={24} />, color: "#6366f1" },
  { title: "E-Commerce", icon: <ShoppingCart size={24} />, color: "#b45309" },
  { title: "CMS", icon: <FileText size={24} />, color: "#be185d" },
  { title: "Design", icon: <Palette size={24} />, color: "#fb7185" },
  { title: "Analytics", icon: <BarChart size={24} />, color: "#22c55e" },
  { title: "Support Team", icon: <Headset size={24} />, color: "#10b981" },
  { title: "Integration", icon: <Puzzle size={24} />, color: "#e11d48" },
  { title: "Performance", icon: <Gauge size={24} />, color: "#0284c7" },
  { title: "Customization", icon: <Settings size={24} />, color: "#15803d" },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[2px] w-12 bg-[#6a1b9a]"></div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Features
            </h2>
            <div className="h-[2px] w-12 bg-[#6a1b9a]"></div>
          </div>
          <p className="max-w-2xl mx-auto text-gray-600">
            MJ Bytech provides a range of web engineering services to help your business thrive in the digital age.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (index % 4) * 0.1, duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 p-6 transition-all bg-white border border-gray-100 rounded-xl hover:shadow-lg hover:border-[#6a1b9a] group"
            >
              <div 
                className="flex items-center justify-center p-3 rounded-lg bg-opacity-10"
                style={{ color: feature.color, backgroundColor: `${feature.color}15` }}
              >
                {feature.icon}
              </div>
              <h3 className="font-semibold text-gray-800 transition-colors group-hover:text-black">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
