"use client";
import { motion } from "framer-motion";
import { FiMessageCircle, FiClock, FiDollarSign, FiSearch } from "react-icons/fi";

const objections = [
  {
    icon: <FiDollarSign />,
    q: "What is the cost of website development for small businesses?",
    a: "Our website development services start from ₹10,000. Instead of treating it as an expense, consider it a long-term digital asset that generates leads, builds trust, and works for your business 24/7."
  },
  {
    icon: <FiSearch />,
    q: "Will my website rank on Google with your SEO services?",
    a: "Yes. We build SEO-optimized websites with proper structure, fast loading speed, and technical SEO best practices. This helps your business website rank higher on Google and attract organic traffic."
  },
  {
    icon: <FiClock />,
    q: "How long does it take to develop a professional website?",
    a: "A standard business website is delivered within 7–10 days. More advanced website development projects with custom features may take longer depending on requirements."
  },
  {
    icon: <FiMessageCircle />,
    q: "Do I need technical knowledge to manage my website?",
    a: "No. We build user-friendly websites with simple dashboards so you can manage content easily. We also provide training and ongoing support whenever you need help."
  },
  {
    icon: <FiSearch />,
    q: "Do you provide complete digital marketing and SEO services?",
    a: "Yes. Along with website development, we offer SEO services, Google Ads, and social media marketing to help your business grow online and generate consistent leads."
  },
  {
    icon: <FiDollarSign />,
    q: "Can I get a custom website based on my business requirements?",
    a: "Absolutely. Every website we build is tailored to your business goals, target audience, and industry. We do not use generic templates — everything is built for performance and scalability."
  }
];

export default function ObjectionHandling() {
  return (
    <section
      className="py-24 bg-[#fafaf8]"
      aria-labelledby="faq-heading"
    >
      <div className="px-6 mx-auto max-w-7xl">

        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 mb-6 tag-chip">
            💬 Website Development FAQ
          </div>

          <h2
            id="faq-heading"
            className="mb-6 text-4xl font-black md:text-5xl"
          >
            Website Development & SEO <span className="text-primary">Questions Answered</span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-textSecondary">
            Get clear answers about website development, SEO services, pricing, and digital marketing before starting your project.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {objections.map((obj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[2rem] border border-slate-100 flex gap-6"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-secondary/5 text-secondary shrink-0">
                {obj.icon}
              </div>

              <div>
                <h3 className="mb-2 text-lg font-black text-textPrimary">
                  {obj.q}
                </h3>

                <p className="leading-relaxed text-textSecondary">
                  {obj.a}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://wa.me/919006543913"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-black transition-colors text-secondary hover:text-primary"
            aria-label="Chat on WhatsApp for website development services"
          >
            Have more questions about website development or SEO? Chat with us <FiMessageCircle />
          </a>
        </div>

      </div>
    </section>
  );
}