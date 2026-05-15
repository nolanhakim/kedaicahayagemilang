"use client";
import React, { useEffect, useRef } from "react";

export const Hero = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bgRef.current;
    if (!el) return;
    const handleScroll = () => {
      el.style.transform = `translateY(${window.scrollY * 0.4}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-svh grid grid-rows-[1fr_auto] overflow-hidden bg-[#FDFAF7] font-sans">

      {/* ── Parallax Background ── */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-[url('/img/bg.jpg')] bg-cover bg-center will-change-transform"
        style={{ inset: "-20%" }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, rgba(26,18,8,0.78) 0%, rgba(26,18,8,0.52) 50%, rgba(232,82,26,0.25) 100%)",
        }}
      />

      {/* Decorative vertical rule */}
      <div className="absolute top-0 left-24 w-px h-full bg-white/10 z-10 hidden md:block" />

      {/* Decorative orb rings */}
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full border border-orange-500/15 z-10 hidden lg:block">
        <div className="absolute inset-[60px] rounded-full border border-orange-500/10" />
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-20 flex flex-col justify-center min-h-svh px-6 md:pl-24 md:pr-12 pt-20 pb-10 max-w-4xl">

        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-2.5 mb-8"
          style={{ animation: "fadeUp 0.7s ease both" }}
        >
          <div className="w-8 h-px bg-orange-500" />
          <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-white/65">
            Malang · Jawa Timur
          </span>
        </div>

        {/* Heading */}
        <h1
          className="font-serif font-black leading-none tracking-tight text-white mb-7"
          style={{
            fontSize: "clamp(3.2rem, 7vw, 6.5rem)",
            animation: "fadeUp 0.7s 0.1s ease both",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          Spesialis
          <br />
          <em className="not-italic text-orange-400">Nasi Ayam</em>
        </h1>

        {/* Description */}
        <p
          className="text-white/70 font-light leading-relaxed max-w-md mb-12"
          style={{
            fontSize: "clamp(0.95rem, 1.5vw, 1.15rem)",
            animation: "fadeUp 0.7s 0.2s ease both",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          Nikmati kelezatan nasi ayam dengan resep turun temurun
          dan cita rasa istimewa yang telah dipercaya bertahun‑tahun.
        </p>

        {/* CTA Row */}
        <div
          className="flex items-center flex-wrap gap-5"
          style={{
            animation: "fadeUp 0.7s 0.3s ease both",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          {/* Primary button — arrow shape via clip-path */}
          <a
            href="#menu"
            className="inline-flex items-center gap-2.5 bg-orange-600 hover:bg-orange-500 text-white text-sm font-medium tracking-wide pl-7 pr-10 py-3.5 transition-all duration-200 hover:translate-x-1"
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%)",
            }}
          >
            Lihat Menu
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          {/* Secondary button */}
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-white/75 hover:text-white text-sm tracking-wide border-b border-white/25 hover:border-white/60 pb-0.5 transition-all duration-200"
          >
            Tentang Kami
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll pip */}
      <div
        className="absolute right-12 bottom-10 z-20 hidden md:flex flex-col items-center gap-1.5 text-white/35 text-[10px] tracking-[0.14em] uppercase"
        style={{
          writingMode: "vertical-lr",
          animation: "fadeIn 1s 0.8s ease both",
          opacity: 0,
          animationFillMode: "forwards",
        }}
      >
        <span
          className="w-px bg-white/20"
          style={{
            height: "48px",
            display: "block",
            animation: "scrollLine 1.8s 1.2s ease infinite",
          }}
        />
        scroll
      </div>

      {/* ── Stats Strip ── */}
      <div
        className="relative z-20 grid grid-cols-3 md:grid-cols-3 border-t border-white/10"
        style={{
          animation: "fadeUp 0.7s 0.45s ease both",
          opacity: 0,
          animationFillMode: "forwards",
        }}
      >
        {[
          { number: "15", suffix: "+", label: "Menu Varian" },
          { number: "4.6", suffix: "★", label: "Rating" },
          { number: "100", suffix: "%", label: "Halal" },
        ].map((stat, i, arr) => (
          <div
            key={stat.label}
            className={`flex flex-col gap-1 px-6 py-7 md:px-8 ${i < arr.length - 1 ? "border-r border-white/10" : ""
              }`}
          >
            <div className="font-serif font-bold text-[2rem] leading-none text-white">
              {stat.number}
              <span className="text-orange-400">{stat.suffix}</span>
            </div>
            <div className="text-[11px] font-normal tracking-[0.12em] uppercase text-white/40">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Global keyframes */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes scrollLine {
          0%   { transform: scaleY(0); transform-origin: top;    opacity: 0; }
          50%  { transform: scaleY(1);                           opacity: 1; }
          100% { transform: scaleY(0); transform-origin: bottom; opacity: 0; }
        }
      `}</style>
    </section>
  );
};