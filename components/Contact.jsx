"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiMail, FiPhone, FiClock, FiSend, FiLoader } from "react-icons/fi";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("https://formspree.io/f/xlgzwzrk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, subject: `New Inquiry from ${form.name}` })
      });
      if (response.ok) {
        setSent(true);
        setForm({ name: "", email: "", phone: "", service: "", message: "" });
        setTimeout(() => setSent(false), 8000);
      }
    } catch (err) {
      console.log("Email error:", err);
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full bg-[#0e0c1a]/5 border border-[#0e0c1a]/10 rounded-xl lg:rounded-2xl px-5 py-3 lg:px-6 lg:py-4 text-[#0e0c1a] outline-none focus:border-[#6a1b9a] focus:bg-white transition-all duration-300 placeholder:text-[#4a4869]/40 text-sm lg:text-base";

  return (
    <section id="contact" className="py-16 lg:py-28 bg-[#fafaf8] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full dot-bg opacity-[0.03]" />
      
      <div className="relative z-10 px-6 mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
              Contact Us
            </div>
            <h2 className="mb-6 text-3xl font-black leading-tight md:text-5xl lg:text-6xl lg:mb-8">
              Work with the <span className="gradient-saffron">Premier Web Engineering Agency</span>
            </h2>
            <p className="max-w-xl mx-auto mb-10 text-sm leading-relaxed md:text-lg text-textSecondary lg:mb-12 lg:mx-0">
              Looking for a top-tier Next.js development agency or full-stack web engineering team? Contact MJ Bytech to scale your digital presence today.
            </p>

            <div className="grid grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-1 lg:space-y-8">
              {[
                { icon: <FiMapPin />, label: "Visit Us", val: "Bettiah, Bihar, India" },
                { icon: <FiMail />, label: "Email Us", val: "contact@mjbytech.com" },
                { icon: <FiPhone />, label: "Call Us", val: "+91 90065 43913" },
                { icon: <FiClock />, label: "Hours", val: "Mon–Sun, 9:00 AM – 7:00 PM" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 text-lg lg:w-12 lg:h-12 rounded-xl bg-primary/10 text-primary shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[9px] lg:text-[10px] font-black uppercase tracking-widest text-[#4a4869] opacity-50 mb-1">{item.label}</div>
                    <div className="text-sm lg:text-lg font-black text-[#0e0c1a] leading-tight">{item.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="bg-white border border-slate-100 p-6 lg:p-12 rounded-[1.5rem] lg:rounded-[2.5rem] relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary/5 blur-3xl" />
              
              {sent ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="py-12 text-center lg:py-20">
                  <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 text-4xl text-green-500 rounded-full bg-green-500/10 lg:w-24 lg:h-24 lg:text-5xl">🎉</div>
                  <h3 className="mb-4 text-2xl font-black lg:text-3xl">Message Sent Successfully!</h3>
                  <p className="max-w-md mx-auto text-base leading-relaxed text-[#4a4869]">
                    Thank you for reaching out to <span className="font-bold text-primary">MJ Bytech</span>! Our team is reviewing your project details and will get back to you within 24 hours to discuss how we can scale your growth.
                  </p>
                  <button onClick={() => setSent(false)} className="mt-8 text-sm font-bold underline transition-colors text-primary hover:text-primary/80">Send another message</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                  <div className="grid gap-4 md:grid-cols-2 lg:gap-6">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-[#4a4869]">Full Name</label>
                      <input className={inputClass} placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-[#4a4869]">Phone Number</label>
                      <input className={inputClass} placeholder="Mobile Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#4a4869]">Email Address</label>
                    <input type="email" className={inputClass} placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#4a4869]">Service Interested In</label>
                    <select className={`${inputClass} appearance-none cursor-pointer`} value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} required>
                      <option value="">Select a service...</option>
                      <option value="web">Web Development</option>
                      <option value="web">WordPress Development</option>
                      <option value="performance">Performance Marketing</option>
                      <option value="seo">SEO & Marketing</option>
                      <option value="ads">Google Ads</option>
                      <option value="ads">Social Media Marketing</option>
                      <option value="design">UI/UX Design</option>
                      <option value="content">Content Writing</option>
                      <option value="video">Video Editting</option>
                      <option value="product">Product Listing</option>
                      <option value="ecommerce">E-Commerce Solution</option>
                      <option value="branding">Brand Identity</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#4a4869]">Project Brief</label>
                    <textarea className={`${inputClass} min-h-[100px] lg:min-h-[120px] resize-none`} placeholder="Tell us about your project goals..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
                  </div>
                  <button type="submit" disabled={loading} className="btn-primary w-full !py-4 lg:!py-5 rounded-xl lg:rounded-2xl group flex items-center justify-center gap-3 disabled:opacity-50 text-sm">
                    {loading ? <FiLoader className="animate-spin" /> : "Send Inquiry"} <FiSend className="text-lg" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
