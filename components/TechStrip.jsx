"use client";

const techs = [
  "Next.js 15", "React 19", "TypeScript", "Node.js", "Tailwind CSS",
  "AI Web Integration", "Full-Stack MERN", "Technical SEO", "AEO & GEO",
  "Gemini API", "OpenAI Integration", "Headless CMS", "GraphQL", "REST APIs",
  "Figma UI/UX", "Brand Identity", "Core Web Vitals", "Static Export",
  "PageSpeed 90+", "Google Search Console", "GA4 Analytics",
];

export default function TechStrip() {
  const doubled = [...techs, ...techs];

  return (
    <section className="py-12 overflow-hidden relative bg-[#fafaf8]">
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-[#fafaf8] to-transparent" />
      <div className="absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-[#fafaf8] to-transparent" />

      <div className="relative border-y border-[#0e0c1a]/5 py-6">
        <div className="marquee-track gap-12 items-center">
          {doubled.map((tech, i) => (
            <div key={i} className="flex items-center gap-12 shrink-0">
              <span
                className="text-xs font-black uppercase tracking-[0.2em] whitespace-nowrap text-[#6a1b9a]/40"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                {tech}
              </span>
              <span className="text-[#6a1b9a] text-[8px] opacity-30">
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

