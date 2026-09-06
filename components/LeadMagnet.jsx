"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiCheck, FiArrowRight, FiActivity, FiSearch, FiLayout, FiLoader } from "react-icons/fi";

export default function LeadMagnet() {
  const [formData, setFormData] = useState({ website: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
       const response = await fetch("https://formspree.io/f/xykodogq", { 
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, subject: "New Website Audit Request" })
       });
       if (response.ok) {
         setSuccess(true);
         setFormData({ website: "", email: "" });
       }
    } catch (err) {
       console.log("Submission error:", err);
    } finally {
       setLoading(false);
    }
  };

  return (
    <section id="audit" className="py-12 lg:py-24 bg-[#fafaf8] relative overflow-hidden">
      <div className="px-5 mx-auto max-w-7xl lg:px-6">
        <div className="bg-white rounded-[2rem] lg:rounded-3xl p-6 lg:p-16 border border-[#6a1b9a]/10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 -mt-24 -mr-24 rounded-full pointer-events-none lg:w-64 lg:h-64 bg-primary/5 blur-3xl" />
          
          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col">
              <div className="flex flex-col items-center gap-6 mb-8 md:flex-row lg:gap-12 lg:items-start lg:mb-10">
                {/* <div className="shrink-0 w-28 md:w-40 lg:w-1/3">
                  <motion.img 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    src="/ebook.png" 
                    alt="Audit Report" 
                    className="w-full h-auto shadow-2xl rounded-xl lg:rotate-3"
                  />
                </div> */}
                <div className="text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
                    🔥 Limited Offer
                  </div>
                  <h2 className="mb-4 text-2xl font-black leading-tight md:text-3xl lg:text-4xl">
                    Get a <span className="text-primary">Free Website Audit</span> Report
                  </h2>
                  <p className="hidden text-sm text-textSecondary lg:block">Uncover why your site isn't ranking and how to fix it in 24 hours.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4 lg:gap-6 lg:mb-10">
                <div className="flex items-center gap-3 p-3 lg:p-0 bg-slate-50 lg:bg-transparent rounded-xl">
                  <div className="flex items-center justify-center w-8 h-8 lg:w-12 lg:h-12 rounded-xl bg-primary/10 text-primary shrink-0"><FiSearch size={16} /></div>
                  <div><h4 className="font-bold text-[10px] lg:text-base text-textPrimary leading-tight">SEO Analysis</h4></div>
                </div>
                <div className="flex items-center gap-3 p-3 lg:p-0 bg-slate-50 lg:bg-transparent rounded-xl">
                  <div className="flex items-center justify-center w-8 h-8 lg:w-12 lg:h-12 rounded-xl bg-primary/10 text-primary shrink-0"><FiActivity size={16} /></div>
                  <div><h4 className="font-bold text-[10px] lg:text-base text-textPrimary leading-tight">Speed Check</h4></div>
                </div>
              </div>
            </div>

            <div className="bg-[#fafaf8] p-5 lg:p-8 rounded-2xl border border-slate-100 shadow-sm">
              {success ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="py-6 text-center lg:py-10">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 text-3xl text-green-500 rounded-full lg:w-20 lg:h-20 bg-green-500/10 lg:text-4xl">🚀</div>
                  <h3 className="mb-3 text-xl font-black lg:text-2xl">Audit Request Received!</h3>
                  <p className="px-4 text-sm leading-relaxed text-textSecondary">
                    Our SEO experts are analyzing your website. We will email your comprehensive report within 24 hours. <br/><span className="font-semibold text-primary">Get ready to scale!</span>
                  </p>
                  <button onClick={() => setSuccess(false)} className="mt-8 text-sm font-bold underline transition-colors text-primary hover:text-primary/80">Submit another website</button>
                </motion.div>
              ) : (
                <>
                  <h3 className="mb-4 text-lg font-bold text-center lg:text-xl lg:mb-6">Claim Your Free Audit</h3>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <input 
                        type="url" required placeholder="Your Website URL" 
                        className="w-full px-4 py-3 text-sm transition-all border outline-none rounded-xl border-slate-200 focus:border-primary"
                        value={formData.website}
                        onChange={(e) => setFormData({...formData, website: e.target.value})}
                      />
                    </div>
                    <div>
                      <input 
                        type="email" required placeholder="Business Email Address" 
                        className="w-full px-4 py-3 text-sm transition-all border outline-none rounded-xl border-slate-200 focus:border-primary"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <button type="submit" disabled={loading} className="btn-primary w-full justify-center !py-3.5 text-xs">
                      {loading ? <FiLoader className="mr-2 animate-spin" /> : "Send My Audit Report"} <FiArrowRight className="ml-2" />
                    </button>
                    <p className="text-[10px] text-center text-textMuted mt-4 italic">No credit card required. Private & Secure.</p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
