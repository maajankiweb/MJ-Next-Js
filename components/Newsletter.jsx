"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiMail, FiSend, FiShield, FiZap, FiUsers, FiLoader } from "react-icons/fi";

const benefits = [
  { icon: <FiZap />, text: "Actionable Growth Hacks" },
  { icon: <FiUsers />, text: "2,000+ Entrepreneur Community" },
  { icon: <FiShield />, text: "100% Privacy Guaranteed" }
];

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // BACKGROUND EMAIL ONLY
    try {
      await fetch("https://formspree.io/f/mjglejnl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, subject: "Newsletter Subscription" })
      });
      setSent(true);
      setEmail("");
    } catch (err) {
      console.log("Newsletter error:", err);
    } finally {
      setLoading(false);
      setTimeout(() => setSent(false), 5000);
    }
  };

  return (
    <section id="newsletter" className="py-31 bg-[#fafaf8] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 px-6 mx-auto max-w-7xl">
        <div className="bg-[#0e0c1a] rounded-[3rem] p-8 md:p-20 relative overflow-hidden shadow-2xl border-4 border-primary/10 group">
          {/* Decorative mesh background */}
          <div className="absolute inset-0 pointer-events-none opacity-10 dot-bg" />
          
          <div className="relative z-10 grid items-center gap-16 lg:grid-cols-2">
            {/* Left: Content */}
            <div className="text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-black uppercase tracking-[0.2em] mb-8"
              >
                <FiMail className="animate-bounce" /> The Growth Letter
              </motion.div>
              
              <h2 
                className="text-4xl md:text-6xl font-black text-white mb-6 leading-[1.1]"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                Master the Art of <br />
                <span className="italic text-primary">Digital Scaling</span>
              </h2>
              
              <p className="max-w-lg mb-10 text-lg leading-relaxed text-white/60">
                Stop chasing trends. Join 2,000+ Indian entrepreneurs receiving proven growth strategies every Monday morning.
              </p>

              <div className="space-y-4">
                {benefits.map((b, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-white/80"
                  >
                    <div className="flex items-center justify-center w-6 h-6 text-xs rounded-full bg-primary/20 text-primary">
                      {b.icon}
                    </div>
                    <span className="text-sm font-bold tracking-tight">{b.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/10 relative"
            >
              <div className="absolute w-24 h-24 rounded-full -top-12 -right-12 bg-primary/20 blur-3xl" />
              
              <h3 className="mb-8 text-2xl font-black text-white">
                {sent ? "Welcome to the Club! 🎉" : "Ready to grow?"}
              </h3>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="relative group">
                  <input 
                    type="email" 
                    placeholder="name@company.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#fafaf8]/5 border-2 border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-white/20 outline-none focus:border-primary focus:bg-white/10 transition-all duration-300 font-medium"
                    required
                  />
                  <FiMail className="absolute transition-colors -translate-y-1/2 right-6 top-1/2 text-white/20 group-focus-within:text-primary" />
                </div>
                
                <button 
                  type="submit" 
                  disabled={loading}
                  className="btn-primary w-full justify-center group-hover:scale-[1.02] transition-transform py-5 disabled:opacity-50"
                >
                  {loading ? <FiLoader className="animate-spin" /> : (sent ? "Subscribed!" : "Join the 2,000+ Club")} <FiSend />
                </button>
                
                <p className="text-center text-[10px] text-white/30 uppercase tracking-[0.2em] font-black">
                  Zero Spam • One-Click Unsubscribe
                </p>
              </form>

              {/* Floating element */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute flex items-center hidden gap-3 p-4 bg-white shadow-2xl -bottom-6 -left-6 rounded-2xl md:flex"
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="relative w-8 h-8 overflow-hidden border-2 border-white rounded-full bg-slate-200">
                       <Image src={`/arjun.png`} alt="Digital Marketing Client" fill sizes="32px" className="object-cover" />
                    </div>
                  ))}
                </div>
                <div className="text-[10px] font-black text-[#0e0c1a]">
                  RECENTLY JOINED
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
