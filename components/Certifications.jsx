"use client";

import { motion } from "framer-motion";

const certs = [
  {
    name: "Google Ads Certified",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg",
  },
  {
    name: "Meta Blueprint",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo_%28cropped%29.svg",
  },
  {
    name: "HubSpot SEO",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg",
  },
  {
    name: "Shopify Partner",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg",
  },
  {
  name: "WordPress Expert",
  logo: "https://s.w.org/style/images/about/WordPress-logotype-standard.png",
},
];

export default function Certifications() {
  return (
    <section className="py-10 lg:py-16 bg-white border-y border-[#0e0c1a]/5">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-center gap-6 transition-opacity duration-700 md:gap-24 opacity-60 hover:opacity-100">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col items-center gap-2 transition-all scale-90 cursor-default grayscale hover:grayscale-0 lg:scale-100"
            >
              <img
                src={cert.logo}
                alt={cert.name}
                className="object-contain w-auto h-6 lg:h-10"
                loading="lazy"
              />
              <span className="text-[8px] lg:text-[10px] font-black uppercase tracking-[0.2em] text-[#0e0c1a] opacity-40">
                {cert.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}