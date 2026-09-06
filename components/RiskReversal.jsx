"use client";
import { motion } from "framer-motion";
import { FiShield, FiRefreshCw, FiHeadphones, FiCheckCircle } from "react-icons/fi";

const guarantees = [
  {
    icon: <FiRefreshCw />,
    title: "Infinite Iterations",
    desc: "We polish your design until you say it's perfect. No questions asked."
  },
  {
    icon: <FiHeadphones />,
    title: "Founders Direct",
    desc: "No middlemen. Direct access to our core team on WhatsApp."
  },
  {
    icon: <FiShield />,
    title: "Quality Promise",
    desc: "We deliver industry-leading standards or we make it right."
  }
];

export default function RiskReversal() {
  return (
    <section id="guarantee" className="py-32 bg-[#fafaf8] relative overflow-hidden">
      <div className="relative z-10 px-6 mx-auto max-w-7xl">
        <div className="bg-[#0e0c1a] rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden border-4 border-primary/10 shadow-2xl">
          {/* Background decor */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none -ml-48 -mb-48" />

          <div className="relative z-10 grid items-center gap-20 lg:grid-cols-2">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="tag-chip !bg-white/10 !text-white !border-white/10 mb-8 inline-block"
              >
                Safe & Secure
              </motion.div>
              <h2 
                className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] text-white"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                Zero Risk. <br />
                <span className="italic text-primary">100% Growth.</span>
              </h2>
              <p className="mb-12 text-xl leading-relaxed text-white">
                We believe in our craft. That's why we take all the risk away from you, so you can focus on scaling your business.
              </p>
              
              <div className="flex flex-wrap gap-6 opacity-80">
                 <div className="flex items-center gap-2 text-sm font-black tracking-widest uppercase text-primary">
                    <FiCheckCircle /> No Hidden Fees
                 </div>
                 <div className="flex items-center gap-2 text-sm font-black tracking-widest uppercase text-primary">
                    <FiCheckCircle /> Cancel Anytime
                 </div>
              </div>
            </div>

            <div className="grid gap-6">
              {guarantees.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 flex items-start gap-6 group hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center justify-center text-2xl text-white transition-transform shadow-lg w-14 h-14 rounded-2xl bg-primary shrink-0 shadow-primary/20 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-black mb-2 text-[#ff4d4d]">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-white/80">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
