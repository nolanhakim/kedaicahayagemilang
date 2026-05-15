"use client";
import React, { useState, useEffect, useRef } from "react";
import { Instagram, Phone, Clock, MapPin, MessageCircle, Send } from "lucide-react";

/* ── useInView helper ── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export const Contact = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  const header = useInView(0.2);
  const quickInfo = useInView(0.15);
  const cards = useInView(0.15);

  const fadeUp = (inView: boolean) =>
    `transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`;

  const quickInfoList = [
    { icon: Clock, title: "Jam Operasional", info: "10.00 – 21.30 WIB" },
    { icon: MapPin, title: "Lokasi", info: "Jl. J.A. Suprapto II No.58, Rampal Celaket" },
    { icon: MessageCircle, title: "Fast Response", info: "< 10 menit" },
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: "WhatsApp",
      subtitle: "Chat langsung dengan kami",
      content: "0895327436647",
      link: "https://wa.me/62895327436647",
      description: "Respon cepat untuk reservasi dan pertanyaan",
      accent: "text-green-500",
      accentBorder: "border-green-500",
      accentFill: "fill-green-500",
    },
    {
      icon: Instagram,
      title: "Instagram",
      subtitle: "Follow untuk update terbaru",
      content: "@kedaicahayagemilang",
      link: "https://www.instagram.com/kedai.cahayagemilang?igsh=c3o2cGtyY2hnODV1",
      description: "Lihat menu dan promo menarik kami",
      accent: "text-pink-500",
      accentBorder: "border-pink-500",
      accentFill: "fill-pink-500",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-[#FDFAF7] relative overflow-hidden font-sans"
    >
      {/* Vertical rules */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-24 w-px h-full bg-stone-200 hidden md:block" />
        <div className="absolute top-0 right-24 w-px h-full bg-stone-200 hidden md:block" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* ── Header ── */}
        <div ref={header.ref} className={`mb-16 md:mb-20 ${fadeUp(header.inView)}`}>
          <div className="inline-flex items-center gap-2.5 mb-5">
            <div className="w-8 h-px bg-orange-500" />
            <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-stone-400 flex items-center gap-1.5">
              <MessageCircle size={12} />
              Kami Siap Melayani
            </span>
          </div>
          <h2 className="font-serif font-black text-stone-900 leading-none tracking-tight text-4xl md:text-5xl lg:text-6xl mb-4">
            Hubungi <em className="not-italic text-orange-500">Kami</em>
          </h2>
          <p className="text-stone-500 font-light text-base max-w-md leading-relaxed">
            Untuk reservasi, informasi menu, atau pertanyaan lainnya, jangan ragu
            untuk menghubungi kami.
          </p>
        </div>

        {/* ── Quick Info Strip ── */}
        <div
          ref={quickInfo.ref}
          className="grid grid-cols-3 gap-px bg-stone-200 border border-stone-200 mb-16 md:mb-20"
        >
          {quickInfoList.map((item, i) => (
            <div
              key={i}
              className={`bg-[#FDFAF7] px-6 py-8 group hover:bg-orange-600 transition-all duration-300 ${quickInfo.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              style={{ transitionDelay: quickInfo.inView ? `${i * 80}ms` : "0ms" }}
            >
              <div className="w-10 h-10 border border-orange-500 group-hover:border-white flex items-center justify-center mb-5 transition-colors duration-300">
                <item.icon size={18} className="text-orange-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="font-medium text-stone-900 group-hover:text-white text-sm tracking-wide mb-1.5 transition-colors duration-300">
                {item.title}
              </h4>
              <p className="text-stone-400 group-hover:text-white/75 text-xs leading-relaxed transition-colors duration-300">
                {item.info}
              </p>
            </div>
          ))}
        </div>

        {/* ── Contact Cards ── */}
        <div
          ref={cards.ref}
          className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-stone-200 border border-stone-200 mb-16 md:mb-20"
        >
          {contactMethods.map((method, i) => (
            <a
              key={i}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`group bg-[#FDFAF7] flex flex-col items-center p-8 md:p-12 transition-all duration-500 hover:bg-stone-900 ${cards.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              style={{ transitionDelay: cards.inView ? `${i * 100}ms` : "0ms" }}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 border ${method.accentBorder} group-hover:border-white flex items-center justify-center mb-6 transition-colors duration-300`}
              >
                <method.icon
                  size={24}
                  className={`${method.accent} group-hover:text-white transition-colors duration-300`}
                />
              </div>

              {/* Divider */}
              <div className="w-6 h-px bg-orange-500 group-hover:bg-orange-400 mb-5 transition-colors" />

              <h4 className="font-serif font-bold text-stone-900 group-hover:text-white text-xl tracking-wide mb-1 transition-colors duration-300">
                {method.title}
              </h4>
              <p className="text-stone-400 group-hover:text-white/50 text-xs mb-4 transition-colors duration-300">
                {method.subtitle}
              </p>

              {/* Contact value */}
              <div className="border border-stone-200 group-hover:border-stone-700 bg-white group-hover:bg-stone-800 px-5 py-3 mb-4 transition-all duration-300 w-full text-center">
                <p className="text-sm font-medium text-stone-900 group-hover:text-white transition-colors duration-300 break-all">
                  {method.content}
                </p>
              </div>

              <p className="text-stone-400 group-hover:text-white/50 text-xs leading-relaxed text-center mb-6 transition-colors duration-300">
                {method.description}
              </p>

              {/* CTA */}
              <span className="inline-flex items-center gap-2 text-orange-600 group-hover:text-white text-xs font-medium tracking-widest uppercase border-b border-orange-500/30 group-hover:border-white/30 pb-0.5 transition-all duration-300">
                Hubungi Sekarang
                <Send
                  size={10}
                  className={`transition-transform duration-300 ${hovered === i ? "translate-x-1 -translate-y-1" : ""}`}
                />
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};