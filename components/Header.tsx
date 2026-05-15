"use client";
import React, { useState, useEffect, useRef } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const navItems = [
    { href: "https://www.kedai-cahayagemilang.my.id/", label: "Beranda" },
    { href: "#about", label: "Tentang Kami" },
    { href: "#menu", label: "Menu" },
    { href: "#delivery", label: "Pesan Online" },
    { href: "#location", label: "Lokasi" },
  ];

  return (
    <>
      {/* ── Header Bar ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isSticky
            ? "bg-stone-50/95 backdrop-blur-md border-b border-stone-200"
            : "bg-transparent border-b border-white/10"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">

          {/* Logo */}
          <a
            href="https://www.kedai-cahayagemilang.my.id/"
            className="flex flex-col leading-none gap-0.5"
          >
            <span
              className={`font-serif font-bold text-[1.05rem] tracking-tight transition-colors duration-300 ${isSticky ? "text-stone-900" : "text-white"
                }`}
            >
              Kedai Cahaya Gemilang
            </span>
            <span
              className={`text-[9px] font-sans font-normal tracking-[0.18em] uppercase transition-colors duration-300 ${isSticky ? "text-stone-400" : "text-white/40"
                }`}
            >
              Spesialis Nasi Ayam
            </span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center list-none m-0 p-0">
            {navItems.map((item) => (
              <li key={item.href} className="relative group">
                <a
                  href={item.href}
                  className={`block text-[0.8125rem] font-normal tracking-wide px-4 py-1.5 transition-colors duration-200 ${isSticky
                      ? "text-stone-500 hover:text-orange-600"
                      : "text-white/70 hover:text-white"
                    }`}
                >
                  {item.label}
                </a>
                {/* Underline */}
                <span className="absolute bottom-0 left-4 right-4 h-px bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </li>
            ))}
          </ul>

          {/* Right: CTA + Hamburger */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <a
              href="#contact"
              className={`hidden md:inline-flex items-center gap-1.5 text-[0.8rem] font-medium tracking-wide px-4 py-2 border transition-all duration-200 ${isSticky
                  ? "text-orange-600 border-orange-500 hover:bg-orange-500 hover:text-white"
                  : "text-white border-white/40 hover:bg-orange-500 hover:border-orange-500 hover:text-white"
                }`}
            >
              Kontak
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>

            {/* Hamburger button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={isMenuOpen}
              className={`md:hidden flex flex-col justify-center items-end gap-[5px] w-9 h-9 bg-transparent border-none cursor-pointer p-0 ${isSticky ? "text-stone-800" : "text-white"
                }`}
            >
              <span className={`block h-[1.5px] bg-current transition-all duration-300 ${isMenuOpen ? "w-[22px] translate-y-[6.5px] rotate-45" : "w-[22px]"}`} />
              <span className={`block h-[1.5px] bg-current transition-all duration-300 ${isMenuOpen ? "w-0 opacity-0" : "w-4"}`} />
              <span className={`block h-[1.5px] bg-current transition-all duration-300 ${isMenuOpen ? "w-[22px] -translate-y-[6.5px] -rotate-45" : "w-[22px]"}`} />
            </button>
          </div>
        </div>
      </header>

      {/* ── Backdrop ── */}
      <div
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
        className={`md:hidden fixed inset-0 z-40 bg-stone-900/50 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      />

      {/* ── Drawer ── */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigasi"
        className={`md:hidden fixed top-0 right-0 z-50 h-svh w-[min(320px,88vw)] bg-stone-50 flex flex-col pt-20 px-8 pb-8 transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Orange accent */}
        <div className="w-6 h-[1.5px] bg-orange-500 mb-8" />

        {/* Links */}
        <nav className="flex flex-col">
          {[...navItems, { href: "#contact", label: "Kontak" }].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="font-serif font-bold text-2xl text-stone-900 py-3 border-b border-stone-100 hover:text-orange-600 hover:pl-1.5 transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Footer label */}
        <p className="mt-auto text-[11px] tracking-[0.12em] uppercase text-stone-400">
          Kedai Cahaya Gemilang
        </p>
      </div>
    </>
  );
};