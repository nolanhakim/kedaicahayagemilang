"use client";
import React, { useState, useEffect, useRef } from "react";
import { Heart, Users, Award, Clock } from "lucide-react";

// ── Animated Counter ───────────────────────────────────────────────────────────
const AnimatedCounter = ({
  target,
  suffix,
  duration,
  isDecimal,
  run,
}: {
  target: number;
  suffix: string;
  duration: number;
  isDecimal?: boolean;
  run: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!run) return;
    let start: number;
    let raf: number;
    const animate = (now: number) => {
      if (!start) start = now;
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 4);
      setCount(ease * target);
      if (p < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [run, target, duration]);

  return (
    <span>
      {isDecimal ? count.toFixed(1) : Math.floor(count).toLocaleString("id-ID")}
      {suffix}
    </span>
  );
};

// ── useInView helper ───────────────────────────────────────────────────────────
function useInView(threshold = 0.2) {
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

// ── Component ──────────────────────────────────────────────────────────────────
export const About = () => {
  const header = useInView(0.2);
  const gallery = useInView(0.2);
  const content = useInView(0.2);
  const features = useInView(0.15);
  const stats = useInView(0.3);
  const quote = useInView(0.2);

  const featuresList = [
    { icon: Heart, title: "Resep Turun Temurun", desc: "Cita rasa otentik yang diwariskan dengan penuh cinta" },
    { icon: Users, title: "Suasana Hangat", desc: "Konsep minimalis industrial yang nyaman untuk keluarga" },
    { icon: Award, title: "Bahan Berkualitas", desc: "Hanya menggunakan bahan pilihan terbaik" },
    { icon: Clock, title: "Pelayanan Cepat", desc: "Cocok untuk makan siang cepat atau santai" },
  ];

  const statsList = [
    { number: 1000, suffix: "+", label: "Pelanggan Puas", duration: 2000 },
    { number: 15, suffix: "+", label: "Varian Menu", duration: 1500 },
    { number: 100, suffix: "%", label: "Halal", duration: 2000 },
    { number: 4.6, suffix: "★", label: "Rating Bintang", duration: 1500, isDecimal: true },
  ];

  // Transition helpers
  const fadeUp = (inView: boolean, delay = "0ms") =>
    `transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`;
  const fadeLeft = (inView: boolean) =>
    `transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`;
  const fadeRight = (inView: boolean) =>
    `transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`;

  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-[#FDFAF7] relative overflow-hidden font-sans"
    >
      {/* Subtle bg texture lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-24 w-px h-full bg-stone-200 hidden md:block" />
        <div className="absolute top-0 right-24 w-px h-full bg-stone-200 hidden md:block" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* ── Section Header ── */}
        <div ref={header.ref} className={`mb-16 md:mb-20 ${fadeUp(header.inView)}`}>
          <div className="inline-flex items-center gap-2.5 mb-5">
            <div className="w-8 h-px bg-orange-500" />
            <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-stone-400">
              Cerita Kami
            </span>
          </div>
          <h2 className="font-serif font-black text-stone-900 leading-none tracking-tight text-4xl md:text-5xl lg:text-6xl mb-4">
            Tentang <em className="not-italic text-orange-500">Cahaya Gemilang</em>
          </h2>
          <p className="text-stone-500 font-light text-base md:text-lg max-w-lg leading-relaxed">
            Perjalanan kami dimulai dengan satu misi: menghadirkan kelezatan
            nasi ayam yang tak terlupakan.
          </p>
        </div>

        {/* ── Gallery + Copy ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start mb-20 md:mb-24">

          {/* Gallery */}
          <div ref={gallery.ref} className={fadeLeft(gallery.inView)}>
            <div className="grid grid-cols-2 gap-3">
              {/* Main image */}
              <div className="col-span-2 overflow-hidden">
                <img
                  src="img/bg3.jpg"
                  alt="Kedai Cahaya Gemilang"
                  className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden">
                <img
                  src="img/bg4.jpg"
                  alt="Interior"
                  className="w-full h-40 md:h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="overflow-hidden relative">
                <img
                  src="img/bg5.jpg"
                  alt="Food"
                  className="w-full h-40 md:h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
                {/* Year badge */}
                <div className="absolute bottom-3 right-3 bg-orange-600 text-white px-3 py-2 text-center">
                  <p className="text-[10px] font-medium tracking-widest uppercase leading-none mb-0.5">Sejak</p>
                  <p className="font-serif font-bold text-xl leading-none">2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div ref={content.ref} className={`space-y-6 ${fadeRight(content.inView)}`}>
            <div>
              <h3 className="font-serif font-bold text-2xl md:text-3xl text-stone-900 mb-5 flex items-center gap-3">
                <span className="w-0.5 h-8 bg-orange-500 flex-shrink-0" />
                Kedai Cahaya Gemilang
              </h3>
              <div className="space-y-4 text-stone-500 font-light leading-relaxed text-[0.9375rem]">
                <p>
                  Berdiri sejak{" "}
                  <span className="font-medium text-stone-700">25 Januari 2025</span>,
                  Kedai Cahaya Gemilang hadir sebagai tempat makan sederhana
                  namun penuh kehangatan yang mengutamakan cita rasa otentik
                  dalam setiap piring nasi ayamnya.
                </p>
                <p>
                  Terletak di sebuah bangunan terbuka dengan konsep{" "}
                  <span className="font-medium text-stone-700">minimalis industrial</span>,
                  kedai ini menawarkan suasana santai dan bersih yang cocok
                  untuk makan siang cepat ataupun bersantai bersama keluarga.
                </p>
                <p>
                  Mengusung tagline{" "}
                  <span className="font-medium text-stone-700">"Spesialis Nasi Ayam"</span>,
                  kami fokus menyajikan hidangan nasi ayam yang lezat dengan
                  paduan sambal khas dan lauk yang menggugah selera.
                </p>
              </div>
            </div>

            {/* Horizontal rule */}
            <div className="w-full h-px bg-stone-200" />

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href="#menu"
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white text-sm font-medium tracking-wide pl-6 pr-10 py-3 transition-all duration-200 hover:translate-x-1"
                style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 0 100%)" }}
              >
                Lihat Menu
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#location"
                className="inline-flex items-center gap-2 text-orange-600 border border-orange-500 hover:bg-orange-50 text-sm font-medium tracking-wide px-6 py-3 transition-all duration-200"
              >
                Kunjungi Kami
              </a>
            </div>
          </div>
        </div>

        {/* ── Feature Cards ── */}
        <div ref={features.ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200 border border-stone-200 mb-20 md:mb-24">
          {featuresList.map((f, i) => (
            <div
              key={i}
              className={`bg-[#FDFAF7] p-6 md:p-8 group hover:bg-orange-600 transition-all duration-300 ${features.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              style={{ transitionDelay: features.inView ? `${i * 80}ms` : "0ms" }}
            >
              <div className="w-10 h-10 border border-orange-500 group-hover:border-white flex items-center justify-center mb-5 transition-colors duration-300">
                <f.icon size={18} className="text-orange-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="font-medium text-stone-900 group-hover:text-white text-sm tracking-wide mb-2 transition-colors duration-300">
                {f.title}
              </h4>
              <p className="text-stone-400 group-hover:text-white/75 text-xs leading-relaxed transition-colors duration-300">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ── Stats Strip ── */}
        <div
          ref={stats.ref}
          className={`grid grid-cols-2 md:grid-cols-4 border border-stone-900 bg-stone-900 gap-px transition-all duration-700 mb-20 md:mb-24 ${stats.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          {statsList.map((s, i) => (
            <div key={i} className="bg-stone-900 px-6 py-8 md:py-10 text-center border-r border-stone-700 last:border-r-0">
              <div className="font-serif font-bold text-3xl md:text-4xl text-white mb-1">
                <AnimatedCounter
                  target={s.number}
                  suffix={s.suffix}
                  duration={s.duration}
                  isDecimal={s.isDecimal}
                  run={stats.inView}
                />
              </div>
              <div className="text-[11px] tracking-[0.14em] uppercase text-stone-400 font-normal">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* ── Quote ── */}
        <div ref={quote.ref} className={`max-w-3xl mx-auto text-center ${fadeUp(quote.inView)}`}>
          <div className="inline-flex items-center gap-2.5 mb-8">
            <div className="w-8 h-px bg-stone-300" />
            <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-stone-400">Kata Kami</span>
            <div className="w-8 h-px bg-stone-300" />
          </div>

          <p className="font-serif font-bold text-2xl md:text-3xl lg:text-4xl text-stone-900 leading-snug tracking-tight mb-8">
            "Setiap piring yang kami sajikan adalah hasil dari dedikasi untuk
            menghadirkan{" "}
            <em className="not-italic text-orange-500">kehangatan dan kelezatan</em>{" "}
            yang membuat Anda merasa seperti di rumah."
          </p>

          <div className="flex items-center justify-center gap-3">
            <div className="w-6 h-px bg-orange-500" />
            <span className="text-sm font-medium tracking-widest uppercase text-stone-500">
              Tim Cahaya Gemilang
            </span>
            <div className="w-6 h-px bg-orange-500" />
          </div>
        </div>

      </div>
    </section>
  );
};