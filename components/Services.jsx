"use client";

import { motion } from "framer-motion";
import { 
  Globe, Smartphone, Search, TrendingUp, 
  Code, ShoppingCart, Edit3, Cloud, 
  Palette, Megaphone, Shield, BarChart 
} from "lucide-react";

const services = [
  {
    title: "Website Development",
    desc: "Create stunning, responsive websites that capture your brand's essence and engage your audience effectively.",
    icon: <Globe size={24} />
  },
  {
    title: "Application Development",
    desc: "Develop robust, user-friendly applications for mobile and desktop platforms, tailored to your business needs.",
    icon: <Smartphone size={24} />
  },
  {
    title: "SEO (Search Engine Optimization)",
    desc: "Improve your website's visibility on search engines with our expert SEO services, driving more traffic and potential customers to your site.",
    icon: <Search size={24} />
  },
  {
    title: "Ad Management",
    desc: "Maximize your ad spend with targeted ad management strategies that boost your ROI and help you reach the right audience.",
    icon: <TrendingUp size={24} />
  },
  {
    title: "Coding Classes",
    desc: "Learn the latest in programming with our comprehensive classes on C/C++, Java, and cloud computing, designed for beginners and professionals alike.",
    icon: <Code size={24} />
  },
  {
    title: "E-Commerce Solutions",
    desc: "Build and manage your online store with our end-to-end e-commerce solutions, from product listing to secure payment processing.",
    icon: <ShoppingCart size={24} />
  },
  {
    title: "Content Management Systems (CMS)",
    desc: "Implement powerful CMS platforms like WordPress, Joomla, and Drupal to manage your website content effortlessly.",
    icon: <Edit3 size={24} />
  },
  {
    title: "Cloud Computing Solutions",
    desc: "Leverage the power of cloud computing with our expert services, including cloud migration, management, and optimization.",
    icon: <Cloud size={24} />
  },
  {
    title: "Graphic Design",
    desc: "Create visually appealing graphics and branding materials that resonate with your audience and strengthen your brand identity.",
    icon: <Palette size={24} />
  },
  {
    title: "Digital Marketing Services",
    desc: "Enhance your online presence with our comprehensive digital marketing strategies, including social media marketing, email campaigns, and more.",
    icon: <Megaphone size={24} />
  },
  {
    title: "Cybersecurity",
    desc: "Protect your digital assets with our robust cybersecurity solutions, ensuring your business remains secure against cyber threats.",
    icon: <Shield size={24} />
  },
  {
    title: "Data Analytics",
    desc: "Turn data into actionable insights with our data analytics services. Understand your customers better, optimize operations, and drive growth through data-driven decisions.",
    icon: <BarChart size={24} />
  }
];

export default function Services() {
  const brandColor = "#6a1b9a";

  return (
    <section id="services" className="py-20 bg-[#fafaf8]">
      <div className="container px-4 mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[2px] w-12 bg-[#6a1b9a]"></div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Our Digital Marketing & Web Design Services
            </h2>
            <div className="h-[2px] w-12 bg-[#6a1b9a]"></div>
          </div>
          <p className="max-w-2xl mx-auto text-gray-600">
            From modern Next.js web applications to enterprise-level full-stack custom software development, MJ Bytech offers comprehensive web engineering services to scale your business globally.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="relative overflow-hidden p-8 bg-white rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-2xl hover:bg-[#6a1b9a] group"
            >
              {/* Decorative Circle in background */}
              <div 
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-[0.03] transition-transform group-hover:scale-110 group-hover:bg-white/20"
                style={{ backgroundColor: brandColor }}
              />

              {/* Icon Circle */}
              <div 
                className="flex items-center justify-center w-12 h-12 mb-6 text-white rounded-full shadow-lg transition-colors bg-[#6a1b9a] group-hover:bg-white group-hover:text-[#6a1b9a]"
              >
                {svc.icon}
              </div>

              {/* Title */}
              <h3 className="mb-4 text-xl font-bold text-gray-900 group-hover:text-white transition-colors">
                {svc.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-gray-600 group-hover:text-white/90 transition-colors">
                <span className="font-semibold text-gray-900 group-hover:text-white">Description: </span>
                {svc.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}