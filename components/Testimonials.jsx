"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'CEO, RK Enterprises',
    quote: 'MJ Bytech has completely transformed our online presence. Our website is now much more professional and we are getting significantly more inquiries than before.',
  },
  {
    name: 'Sneha Sharma',
    role: 'Founder, Beauty Hub',
    quote: 'An incredibly professional team. They understood our requirements perfectly and delivered the project on time. The best choice for digital marketing services.',
  },
  {
    name: 'Amit Patel',
    role: 'Director, Patel Logistics',
    quote: 'Best SEO services in India. Our website now ranks on the first page of Google for our primary keywords. We have seen a massive growth in our business.',
  },
  {
    name: 'Priya Verma',
    role: 'Owner, Fashion Diva',
    quote: 'Their design sense is modern and elegant. Our e-commerce store now looks very premium and the user experience is fantastic. Highly recommended!',
  },
  {
    name: 'Vikram Singh',
    role: 'Manager, Singh Properties',
    quote: 'From Bettiah to all over India, their reach is impressive. The team helped us scale our business online and established a strong digital identity.',
  },
  {
    name: 'Anjali Gupta',
    role: 'Founder, Gupta Arts',
    quote: 'From website development to branding, everything was perfect. Client satisfaction is clearly their priority, and it shows in the quality of their work.',
  },
  {
    name: 'Suresh Reddy',
    role: 'CEO, Tech Solutions',
    quote: 'Creative graphics and a perfectly responsive design. MJ Bytech has completely redefined our digital presence with their expert solutions.',
  },
  {
    name: 'Neha Malhotra',
    role: 'Marketing Head, Malhotra Group',
    quote: 'They are unmatched when it comes to Google Ads and Social Media management. We received an excellent ROI. Thanks to Ashish and the entire team!',
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="w-[350px] md:w-[450px] shrink-0 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm mx-4 flex flex-col gap-4">
    <div>
      <h3 className="font-bold text-gray-900 text-lg">{testimonial.name}</h3>
      <p className="text-[#6a1b9a] text-xs font-bold uppercase tracking-wider">{testimonial.role}</p>
    </div>
    <p className="text-gray-700 text-base leading-relaxed italic">
      "{testimonial.quote}"
    </p>
  </div>
);

export default function Testimonials() {
  const row1 = [...testimonials, ...testimonials];
  const row2 = [...testimonials].reverse();
  const row2Final = [...row2, ...row2];

  return (
    <section id="testimonials" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container px-4 mx-auto max-w-7xl mb-16 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-[#6a1b9a] uppercase bg-[#6a1b9a]/10 rounded-full">
          Our Clients
        </div>
        <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
          What Our <span className="text-[#6a1b9a]">Clients Say</span>
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          We take pride in delivering exceptional results for our clients. Here is what they have to say about working with us.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {/* Row 1: Left */}
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: [0, -2800] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
            className="flex flex-nowrap"
          >
            {row1.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </motion.div>
        </div>

        {/* Row 2: Right */}
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: [-2800, 0] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 45,
                ease: "linear",
              },
            }}
            className="flex flex-nowrap"
          >
            {row2Final.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
