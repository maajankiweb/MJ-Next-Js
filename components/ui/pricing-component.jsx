"use client";
import React, { useState } from "react";
import { Check, X } from "lucide-react";

const PricingComponent = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Business Starter",
      basePrice: 14999,
      badge: null,
      description:
        "Ideal for local businesses and startups — simple, fast, and professional online presence.",
      deliveryTime: "Delivery: 7–10 business days",
      includes: [
        "5-Page Responsive Website (Home, About, Services, Gallery, Contact)",
        "WordPress CMS — Easily manage your own content",
        "Basic On-Page SEO (Meta tags, Sitemap, Google Search Console setup)",
        "WhatsApp Chat Button Integration",
        "Contact Form with Email Notification",
        "Mobile + Tablet Optimized Design",
        "1 Round of Free Revisions",
        "30 Days Post-Launch Support (bug fixes only)",
      ],
      notIncludes: [
        "E-Commerce / Online Store",
        "Custom UI Design (Figma)",
        "Content Writing / Copywriting",
        "Domain & Hosting (recommended separately)",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Growth Pro",
      basePrice: 39999,
      badge: "Most Popular",
      description:
        "Perfect for growing businesses — professional design, lead generation, and scalable growth.",
      deliveryTime: "Delivery: 15–20 business days",
      includes: [
        "10-Page Premium Website (Custom Figma UI Design included)",
        "Advanced On-Page SEO + Speed Optimization (90+ PageSpeed Score)",
        "E-Commerce Store (Up to 50 Products + Payment Gateway Integration)",
        "Lead Generation Form + Basic CRM Integration",
        "Google Analytics 4 + Meta Pixel Setup",
        "Social Media Links + Instagram Feed Integration",
        "WhatsApp + Call-to-Action Buttons",
        "2 Rounds of Free Revisions",
        "3 Months Post-Launch Support (bug fixes + minor updates)",
        "Basic Training Video — How to manage your website",
      ],
      notIncludes: [
        "Content Writing / Product Photography",
        "Ongoing SEO / Monthly Marketing",
        "Domain & Hosting (recommended separately)",
      ],
      cta: "Go Pro",
      highlighted: true,
    },
    {
      name: "Enterprise",
      basePrice: null,
      badge: null,
      description:
        "For large businesses and brands — fully custom solution with dedicated support.",
      deliveryTime: "Timeline: Discussed after discovery call",
      includes: [
        "Unlimited Pages — Custom Next.js / React Build",
        "Full Custom UI/UX Design (Figma to Code)",
        "Complete E-Commerce Store (Unlimited Products, Multi-Gateway)",
        "Full Digital Marketing Suite (SEO + Google Ads + Meta Ads)",
        "CRM Integration (Zoho / HubSpot / Custom)",
        "Dedicated Project Manager",
        "Bi-Weekly Strategy & Progress Calls",
        "Unlimited Revisions during development",
        "6 Months Priority Support (24–48 hr response)",
        "Monthly Performance & Analytics Reports",
      ],
      notIncludes: [],
      cta: "Book a Free Call",
      highlighted: false,
    },
  ];

  // Correct Pricing Logic
  const getPrice = (basePrice) => {
    if (!basePrice) return "Custom";

    if (!isAnnual) {
      return `₹${basePrice.toLocaleString("en-IN")}`;
    }

    const annual = Math.round(basePrice * 12 * 0.85);
    return `₹${annual.toLocaleString("en-IN")}`;
  };

  const getSavings = (basePrice) => {
    if (!basePrice) return 0;
    return Math.round(basePrice * 12 * 0.15);
  };

  return (
    <div className="bg-[#fafaf8] py-16 lg:py-24">
      <div className="px-6 mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-12 text-center lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
            💰 Transparent Pricing
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0e0c1a] mb-6 tracking-tight leading-tight">
            Simple Pricing for{" "}
            <span className="text-primary">Massive Growth</span>
          </h2>

          <p className="text-sm md:text-base text-[#4a4869] mb-4 leading-relaxed opacity-80">
            Choose yearly plan — <strong>Save 15%</strong> + Unlimited email
            support included
          </p>

          <p className="text-xs text-[#000111] opacity-60 mb-8">
            <strong>Domain & Hosting are not included.</strong> Recommended:
            Hostinger India
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center bg-[#0e0c1a]/5 rounded-full p-1.5 border border-[#0e0c1a]/5">
            <button
              className={`px-5 lg:px-8 py-2 lg:py-2.5 rounded-full text-[9px] lg:text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                !isAnnual
                  ? "bg-[#0e0c1a] text-white shadow-xl"
                  : "text-[#4a4869]"
              }`}
              onClick={() => setIsAnnual(false)}
            >
              One-Time / Project
            </button>

            <button
              className={`relative px-5 lg:px-8 py-2 lg:py-2.5 rounded-full text-[9px] lg:text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                isAnnual
                  ? "bg-[#0e0c1a] text-white shadow-xl"
                  : "text-[#4a4869]"
              }`}
              onClick={() => setIsAnnual(true)}
            >
              Annual Retainer
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-[8px] font-black px-1.5 py-0.5 rounded-full">
                -15%
              </span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid items-start grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {plans.map((plan) => {
            const price = getPrice(plan.basePrice);
            const savings = getSavings(plan.basePrice);

            return (
              <div
                key={plan.name}
                className={`relative rounded-[1.5rem] lg:rounded-[2.5rem] border p-6 lg:p-8 transition-all duration-500 hover:shadow-xl lg:hover:-translate-y-2 ${
                  plan.highlighted
                    ? "border-primary/20 bg-white shadow-xl lg:ring-1 lg:ring-primary/10"
                    : "border-[#0e0c1a]/5 bg-white shadow-sm"
                }`}
              >
                {plan.badge && (
                  <div className="absolute z-10 -translate-x-1/2 -top-3 lg:-top-4 left-1/2">
                    <div className="bg-primary text-white px-4 lg:px-6 py-1.5 lg:py-2 rounded-full font-black text-[9px] lg:text-[10px] uppercase tracking-widest shadow-lg">
                      {plan.badge}
                    </div>
                  </div>
                )}

                {/* Price */}
                <div className="mb-5 lg:mb-6">
                  <h3 className="text-xl lg:text-2xl font-black text-[#0e0c1a] mb-3">
                    {plan.name}
                  </h3>

                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-3xl lg:text-5xl font-black text-[#0e0c1a]">
                      {price}
                    </span>

                    {plan.basePrice && (
                      <span className="text-[10px] lg:text-xs font-bold text-[#4a4869] uppercase tracking-widest">
                        {isAnnual ? "/ year" : "/ project"}
                      </span>
                    )}
                  </div>

                  {isAnnual && plan.basePrice && (
                    <p className="text-[10px] text-green-600 font-bold mb-2">
                      Save ₹{savings.toLocaleString("en-IN")} yearly
                    </p>
                  )}

                  <p className="text-[10px] font-semibold text-primary mb-3">
                    {plan.deliveryTime}
                  </p>

                  <p className="text-xs lg:text-sm text-[#4a4869] opacity-70">
                    {plan.description}
                  </p>
                </div>

                <div className="border-t border-[#0e0c1a]/5 mb-5" />

                {/* Included */}
                <p className="text-[10px] font-black uppercase tracking-widest text-[#0e0c1a] mb-3 opacity-50">
                  Included Features
                </p>

                <div className="mb-5 space-y-2.5">
                  {plan.includes.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-4 h-4 mt-0.5 rounded-full bg-primary/10">
                        <Check size={10} className="text-primary" />
                      </div>
                      <span className="text-xs lg:text-sm text-[#4a4869]">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Not Included */}
                {plan.notIncludes.length > 0 && (
                  <>
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#0e0c1a] mb-3 opacity-40">
                      Not Included
                    </p>

                    <div className="mb-6 space-y-2">
                      {plan.notIncludes.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="flex items-center justify-center w-4 h-4 mt-0.5 rounded-full bg-[#0e0c1a]/5">
                            <X size={10} className="opacity-50" />
                          </div>
                          <span className="text-xs line-through opacity-50">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                <a
                  href="#contact"
                  className={`w-full py-3.5 rounded-xl text-xs font-black uppercase text-center block ${
                    plan.highlighted
                      ? "btn-primary"
                      : "border border-[#0e0c1a]/10 hover:bg-[#0e0c1a] hover:text-white"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-xs text-[#000000] opacity-100">
          All prices are in INR. GST extra. EMI options available on request. No
          hidden charges.
        </p>
      </div>
    </div>
  );
};

export default PricingComponent;
