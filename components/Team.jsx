"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const team = [
  {
    name: "Ashish Kumar",
    role: "Founder & CEO",
    image: "/ashish.png",
    bio: "The visionary behind MJ Bytech, specializing in Next.js, MERN Stack, AI Web Systems, Technical SEO, and Web Engineering ecosystems. He blends cutting-edge technology with robust growth strategies to drive digital innovation and transform online platforms. His leadership ensures that every project delivers stunning aesthetics, measurable performance, and exceptional ROI.",
    socials: {
      linkedin: "https://www.linkedin.com/in/ashishkumarji/",
      instagram: "https://www.instagram.com/kumarashishweb/"
    }
  },
  {
    name: "Meera Singh",
    role: "Head of SEO & Content",
    image: "/meera.png",
    bio: "A master of search engine algorithms, Meera has successfully ranked over 500+ keywords on Google Page 1 for diverse Indian industries. She crafts data-driven content strategies that captivate audiences and drive high-quality organic traffic. Her profound understanding of user intent and technical SEO perfectly bridges the gap between brands and their customers.",
    socials: {
      linkedin: "#",
      instagram: "#"
    }
  },
  {
    name: "Arjun Verma",
    role: "Creative Director",
    image: "/arjun.png",
    bio: "A passionate UI/UX enthusiast, Arjun focuses on creating visually striking and highly functional digital experiences that maximize conversion rates. He blends modern aesthetic trends with intuitive design principles to ensure every user journey is seamless and engaging. His creative direction helps brands establish a powerful, memorable identity in a competitive digital landscape.",
    socials: {
      linkedin: "#",
      instagram: "#"
    }
  }
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-white relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="tag-chip mb-4 inline-block"
          >
            The Experts
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black mb-6"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Meet the <span className="text-primary">Makers</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 + 0.2, duration: 0.6, ease: "easeOut" }}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative overflow-hidden rounded-full aspect-square w-56 sm:w-64 mb-4 ring-4 ring-primary/10 group-hover:ring-primary/40 group-hover:shadow-[0_20px_40px_rgba(106,27,154,0.3)] transition-all duration-500 ease-out transform group-hover:-translate-y-2">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {((member.socials?.linkedin && member.socials.linkedin !== "#") || (member.socials?.instagram && member.socials.instagram !== "#")) && (
                <div className="flex gap-4 justify-center mb-6">
                  {member.socials?.linkedin && member.socials.linkedin !== "#" && (
                    <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#f4f3ef] text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                      <FaLinkedin size={18} />
                    </a>
                  )}
                  {member.socials?.instagram && member.socials.instagram !== "#" && (
                    <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#f4f3ef] text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                      <FaInstagram size={18} />
                    </a>
                  )}
                </div>
              )}

              <h3 className="text-2xl font-black text-[#0e0c1a] mb-1">{member.name}</h3>
              <div className="text-[10px] font-black uppercase tracking-widest text-primary mb-4">{member.role}</div>
              <p className="text-sm text-[#4a4869] leading-relaxed opacity-80">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
