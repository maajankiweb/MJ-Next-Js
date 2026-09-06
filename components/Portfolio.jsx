"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import {
  FiArrowUpRight,
  FiSearch,
  FiMonitor,
  FiShoppingBag,
  FiStar,
} from "react-icons/fi";

/* ─────────────────────────────────────────────
   SEO NOTE: If you use Next.js App Router, add
   structured data in your page.jsx:
   <script type="application/ld+json">
     { "@context":"https://schema.org",
       "@type":"ItemList", ... }
   </script>
   ───────────────────────────────────────────── */

const CARD_W = 420; // px – each card width
const CARD_GAP = 28; // px – gap between cards
const TOTAL_CARDS = 6;
// How far the strip must travel (all 6 cards - 1 viewport)
// Expressed as vw offset – tuned for ~1440px screen
// We let useTransform handle the mapping dynamically via refs.

const projects = [
  {
    id: 1,
    title: "Bihar Global School",
    slug: "bihar-global-school",
    cat: "Web Dev",
    desc: "A premium educational portal with student management and real-time notices.",
    image: "/p1.png",
    tags: ["WordPress", "Elementor"],
    icon: <FiMonitor size={20} />,
    accent: "#f97316",
    year: "2024",
  },
  {
    id: 2,
    title: "Eco-Friendly Decor",
    slug: "eco-friendly-decor",
    cat: "E-Commerce",
    desc: "Modern Shopify store for sustainable home decor products across India.",
    image: "/p2.png",
    tags: ["Shopify", "UI/UX"],
    icon: <FiShoppingBag size={20} />,
    accent: "#6366f1",
    year: "2024",
  },
  {
    id: 3,
    title: "Real Estate Growth",
    slug: "real-estate-growth",
    cat: "SEO",
    desc: "Comprehensive SEO campaign that boosted organic leads by 300% in 4 months.",
    image: "/p3.png",
    tags: ["Technical SEO", "Backlinks"],
    icon: <FiSearch size={20} />,
    accent: "#eab308",
    year: "2023",
  },
  {
    id: 4,
    title: "Luxe Furnishings",
    slug: "luxe-furnishings",
    cat: "Branding",
    desc: "Complete brand identity and premium landing page for a luxury furniture brand.",
    image: "/p4.png",
    tags: ["Logo Design", "Next.js"],
    icon: <FiStar size={20} />,
    accent: "#f97316",
    year: "2024",
  },
  {
    id: 5,
    title: "PetPals E-Shop",
    slug: "petpals-e-shop",
    cat: "E-Commerce",
    desc: "High-performance WooCommerce store with subscription and membership features.",
    image: "/p5.png",
    tags: ["WooCommerce", "Payment Gateway"],
    icon: <FiShoppingBag size={20} />,
    accent: "#6366f1",
    year: "2023",
  },
  {
    id: 6,
    title: "TechSolutions Portal",
    slug: "techsolutions-portal",
    cat: "Web Dev",
    desc: "Corporate website for a B2B tech firm with CRM lead automation.",
    image: "/p6.png",
    tags: ["React", "Motion"],
    icon: <FiMonitor size={20} />,
    accent: "#eab308",
    year: "2024",
  },
];

/* ── Individual Project Card ─────────────────── */
function ProjectCard({ project, index }) {
  return (
    <article
      aria-label={`Project: ${project.title}`}
      className="relative flex-shrink-0 group"
      style={{ width: CARD_W }}
    >
      {/* card shell */}
      <div className="relative flex flex-col h-full overflow-hidden transition-all duration-500 bg-white border shadow-md rounded-3xl border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/60">

        {/* ── image ── */}
        <div className="relative overflow-hidden h-60">
          <Image
            src={project.image}
            alt={`${project.title} – ${project.cat} project by our agency`}
            fill
            sizes="(max-width: 768px) 100vw, 420px"
            priority={index < 3}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />

          {/* index number – top-left */}
          <span
            aria-hidden="true"
            className="absolute top-4 left-4 text-[10px] font-black tracking-[0.25em] text-[#0e0c1a]/30 uppercase select-none"
          >
            {String(index + 1).padStart(2, "0")} / {String(TOTAL_CARDS).padStart(2, "0")}
          </span>

          {/* hover CTA */}
          <div className="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 group-hover:opacity-100 duration-400">
            <div className="flex items-center justify-center w-12 h-12 text-white transition-transform duration-500 translate-y-3 border rounded-full border-white/30 bg-white/10 backdrop-blur-sm group-hover:translate-y-0">
              <FiArrowUpRight size={18} />
            </div>
          </div>
        </div>

        {/* ── body ── */}
        <div className="flex flex-col flex-grow gap-3 pt-5 p-7">
          {/* category pill */}
          <div className="flex flex-wrap items-center gap-2">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.18em]"
              style={{
                backgroundColor: `${project.accent}18`,
                color: project.accent,
              }}
            >
              <span className="w-1 h-1 rounded-full" style={{ backgroundColor: project.accent }} />
              {project.cat}
            </span>
            {project.tags.map((t) => (
              <span
                key={t}
                className="text-[9px] font-semibold text-[#0e0c1a]/30 uppercase tracking-widest"
              >
                #{t.replace(" ", "")}
              </span>
            ))}
          </div>

          {/* title – SEO: h3 inside a section that has h2 */}
          <h3 className="text-lg font-black text-[#0e0c1a] leading-snug group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          <p className="text-sm text-[#0e0c1a]/50 leading-relaxed line-clamp-2">
            {project.desc}
          </p>

          {/* footer */}
          <div className="flex items-center justify-between pt-4 mt-auto border-t border-slate-100">
            <span className="text-[10px] text-[#0e0c1a]/25 font-bold tracking-widest">{project.year}</span>
            <span
              className="text-[10px] font-black uppercase tracking-widest flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ color: project.accent }}
            >
              View Case <FiArrowUpRight size={11} />
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ── Section ─────────────────────────────────── */
export default function Portfolio() {
  // Outer tall container – gives "scroll room" to drive the animation
  const wrapperRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  // Translate the strip from 0 → -(totalWidth - viewportWidth)
  // We use a percentage string trick: move by the number of extra cards * CARD_W
  // (5 extra cards + gaps ≈ 5 * (420+28) = 2240px)
  // useTransform maps 0→1 scroll to 0 → -2240px in x
  const stripPx = (TOTAL_CARDS - 1) * (CARD_W + CARD_GAP);

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -stripPx]
  );



  return (
    /* 
      The wrapper is 600vh tall → gives us 5× viewport of scroll room.
      Adjust multiplier if you want slower / faster swipe. 
    */
    <section
      id="portfolio"
      ref={wrapperRef}
      style={{ height: `${TOTAL_CARDS * 100}vh` }}
      className="relative"
    >
      {/* ── Sticky viewport ── */}
      <div className="sticky top-0 h-screen overflow-hidden bg-[#fafaf8] flex flex-col justify-center">

        {/* subtle grid texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#0e0c1a 1px,transparent 1px),linear-gradient(90deg,#0e0c1a 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* radial glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.08]"
          style={{
            background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)",
          }}
        />

        {/* ── Header ── */}
        <header className="flex flex-col justify-between gap-4 px-10 mb-10 lg:px-20 sm:flex-row sm:items-end">
          <div>
            {/* SEO: eyebrow as visually-styled span, real heading is h2 */}
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#0e0c1a]/30 mb-3">
              Portfolio
            </p>
            <h2 className="text-4xl lg:text-6xl font-black text-[#0e0c1a] leading-[0.95] tracking-tight">
              Our{" "}
              <span className="italic font-light text-[#0e0c1a]/30">Latest</span>
              <br />
              Success Stories
            </h2>
          </div>

          <div className="flex flex-col items-start gap-2 sm:items-end">
            <p className="text-sm text-[#0e0c1a]/40 max-w-xs text-right leading-relaxed hidden sm:block">
              Scroll to explore our work across web development, e-commerce, SEO,
              and branding.
            </p>
            <a
              href="#contact"
              aria-label="View all projects from our agency"
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#0e0c1a]/40 hover:text-[#0e0c1a] transition-colors duration-300 group/link"
            >
              View All
              <FiArrowUpRight
                size={14}
                className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200"
              />
            </a>
          </div>
        </header>

        {/* ── Horizontal strip ── */}
        <div className="overflow-visible">
          <motion.div
            role="list"
            aria-label="Portfolio projects"
            style={{ x }}
            className="flex items-stretch pl-10 lg:pl-20"
            /* 
              performance: GPU-composited transform only.
              No layout recalculation during scroll.
            */
          >
            {projects.map((project, i) => (
              <div
                key={project.slug}
                role="listitem"
                style={{ marginRight: i < projects.length - 1 ? CARD_GAP : 0 }}
              >
                <ProjectCard project={project} index={i} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Scroll hint (fades out after a bit of scroll) ── */}
        <motion.div
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.12], [1, 0]),
          }}
          aria-hidden="true"
          className="absolute flex flex-col items-center gap-2 -translate-x-1/2 bottom-8 left-1/2"
        >
          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#0e0c1a]/25">
            Scroll to explore
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-[#0e0c1a]/20 to-transparent animate-pulse" />
        </motion.div>

        {/* ── Progress dots ── */}
        <motion.div
          aria-hidden="true"
          className="absolute flex flex-col gap-2 -translate-y-1/2 right-8 top-1/2"
        >
          {projects.map((_, i) => {
            const isActive = useTransform(
              scrollYProgress,
              [i / TOTAL_CARDS, (i + 1) / TOTAL_CARDS],
              [1, 0]
            );
            return (
              <motion.div
                key={i}
                className="w-1 rounded-full bg-[#0e0c1a] transition-all duration-300"
                style={{
                  height: useTransform(
                    scrollYProgress,
                    [
                      Math.max(0, (i - 0.5) / TOTAL_CARDS),
                      i / TOTAL_CARDS,
                      (i + 0.5) / TOTAL_CARDS,
                    ],
                    [4, 16, 4]
                  ),
                  opacity: useTransform(
                    scrollYProgress,
                    [
                      Math.max(0, (i - 0.5) / TOTAL_CARDS),
                      i / TOTAL_CARDS,
                      (i + 0.5) / TOTAL_CARDS,
                    ],
                    [0.2, 0.8, 0.2]
                  ),
                }}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}