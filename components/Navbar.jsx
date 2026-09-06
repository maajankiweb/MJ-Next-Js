"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  // Use a standard header to avoid any nav-specific blockers
  return (
    <header 
      className={`fixed top-0 left-0 right-0 w-full z-[9999] flex flex-col transition-all duration-300 ${
        scrolled || menuOpen ? "bg-white shadow-xl py-3" : "bg-white lg:bg-transparent py-4 lg:py-6"
      }`}
      style={{ display: 'flex' }} // Inline style for extra safety
    >
      <div className="max-w-7xl mx-auto px-5 w-full flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 z-[10000]">
          <div className="w-9 h-9 lg:w-11 lg:h-11 rounded-xl bg-[#6a1b9a] flex items-center justify-center text-white font-black text-sm lg:text-base shadow-lg">
            MJ
          </div>
          <div className="flex flex-col">
            <span className="text-lg lg:text-2xl font-black tracking-tight text-[#0e0c1a] leading-none">
              MJ BYTECH
            </span>
            <span className="text-[8px] lg:text-[10px] font-bold tracking-[0.2em] text-[#6a1b9a] uppercase mt-0.5">
              Web Engineering
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActive(link.label)}
              className={`text-[13px] font-black uppercase tracking-widest transition-colors ${
                active === link.label ? "text-[#6a1b9a]" : "text-[#4a4869] hover:text-[#6a1b9a]"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary !py-2.5 !px-6 text-[11px] uppercase font-black tracking-widest">
            Work With Us
          </a>
        </div>

        {/* Mobile Menu Button - High Contrast Purple */}
        <button
          className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-[#6a1b9a] text-white shadow-lg active:scale-95 transition-transform z-[10000]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl font-black text-[#0e0c1a] py-2 border-b border-gray-50 last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setMenuOpen(false)}
                className="btn-primary w-full justify-center mt-4 py-4"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

