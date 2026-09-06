"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    let ringX = 0, ringY = 0;
    let mouseX = 0, mouseY = 0;
    let raf;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);
    
    // Add custom interaction for hoverable elements
    const handleHover = () => {
      if (ringRef.current) ringRef.current.classList.add('active');
    };
    const handleUnhover = () => {
      if (ringRef.current) ringRef.current.classList.remove('active');
    };

    const links = document.querySelectorAll('a, button, select, input, textarea');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleHover);
      link.addEventListener('mouseleave', handleUnhover);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleHover);
        link.removeEventListener('mouseleave', handleUnhover);
      });
    };
  }, []);

  return (
    <>
      <div 
        ref={dotRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full z-[100] pointer-events-none -translate-x-1/2 -translate-y-1/2" 
      />
      <div 
        ref={ringRef} 
        className="fixed top-0 left-0 w-10 h-10 border border-primary/30 rounded-full z-[100] pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out" 
      />
      <style jsx global>{`
        .active {
          width: 60px !important;
          height: 60px !important;
          background: rgba(106, 27, 154, 0.05) !important;
          border-color: rgba(106, 27, 154, 0.5) !important;
        }
        @media (max-width: 1024px) {
          .fixed.top-0.pointer-events-none { display: none !important; }
        }
      `}</style>
    </>
  );
}

