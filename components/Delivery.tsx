"use client";
import React, { useState, useEffect, useRef } from "react";
import { Clock, ShoppingBag, Star, Bike, Smartphone } from "lucide-react";

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

export const Delivery = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  const header = useInView(0.2);
  const features = useInView(0.15);
  const partners = useInView(0.15);
  const cta = useInView(0.2);

  const partnerList = [
    {
      name: "GoFood",
      logo: "https://seduhteh.wordpress.com/wp-content/uploads/2019/11/logo-gofood-baru.png",
      link: "https://gofood.link/a/NynYkWG",
      rating: "4.8",
    },
    {
      name: "Shopee Food",
      logo: "https://images.seeklogo.com/logo-png/39/1/shopee-food-indonesia-logo-png_seeklogo-397473.png",
      link: "https://spf.shopee.co.id/3VdgnGLQpO",
      rating: "4.7",
    },
    {
      name: "GrabFood",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI6Gh2-BBb6JWXlSvNTVEHbb-lDO-ue24BJA&s",
      link: "https://r.grab.com/g/6-20260102_155121_5C1F4A45257C4ABAA1B8C0D8121CFB97_MEXMPS-6-C623HGL1JNNTE6",
      rating: "4.9",
    },
  ];

  const featureList = [
    { icon: Clock, title: "Pengiriman Cepat", desc: "Rata-rata 30 menit sampai" },
    { icon: ShoppingBag, title: "Promo Menarik", desc: "Dapatkan diskon hingga 50%" },
    { icon: Star, title: "Rating Tinggi", desc: "Dipercaya ribuan pelanggan" },
  ];

  const steps = [
    { number: "01", title: "Pilih Platform", desc: "Buka aplikasi delivery favorit Anda" },
    { number: "02", title: "Pesan Menu", desc: "Pilih menu yang Anda inginkan" },
    { number: "03", title: "Tunggu & Nikmati", desc: "Pesanan Anda akan segera tiba" },
  ];

  const fadeUp = (inView: boolean, delay = "0ms") =>
    `transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`;

  return (
    <section
      id="delivery"
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
              <Bike size={12} />
              Pesan Antar Tersedia
            </span>
          </div>
          <h2 className="font-serif font-black text-stone-900 leading-none tracking-tight text-4xl md:text-5xl lg:text-6xl mb-4">
            Pesan <em className="not-italic text-orange-500">Online</em>
          </h2>
          <p className="text-stone-500 font-light text-base max-w-md leading-relaxed">
            Nikmati kelezatan nasi ayam kami tanpa perlu keluar rumah. Pesan sekarang
            melalui platform favorit Anda.
          </p>
        </div>

        {/* ── Feature strip ── */}
        <div
          ref={features.ref}
          className="grid grid-cols-3 gap-px bg-stone-200 border border-stone-200 mb-16 md:mb-20"
        >
          {featureList.map((f, i) => (
            <div
              key={i}
              className={`bg-[#FDFAF7] px-6 py-8 group hover:bg-orange-600 transition-all duration-300 ${features.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              style={{ transitionDelay: features.inView ? `${i * 80}ms` : "0ms" }}
            >
              <div className="w-10 h-10 border border-orange-500 group-hover:border-white flex items-center justify-center mb-5 transition-colors duration-300">
                <f.icon size={18} className="text-orange-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="font-medium text-stone-900 group-hover:text-white text-sm tracking-wide mb-1.5 transition-colors duration-300">
                {f.title}
              </h4>
              <p className="text-stone-400 group-hover:text-white/75 text-xs leading-relaxed transition-colors duration-300">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ── How to order steps ── */}
        <div className={`mb-16 md:mb-20 ${fadeUp(partners.inView)}`}>
          <div className="inline-flex items-center gap-2.5 mb-8">
            <div className="w-8 h-px bg-stone-300" />
            <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-stone-400">
              Cara Memesan
            </span>
          </div>
          <div className="grid grid-cols-3 gap-8 md:gap-12">
            {steps.map((s, i) => (
              <div key={i} className="flex flex-col gap-3">
                <span className="font-serif font-bold text-4xl md:text-5xl text-stone-100 leading-none select-none">
                  {s.number}
                </span>
                <div className="w-6 h-px bg-orange-500" />
                <h4 className="font-medium text-stone-900 text-sm md:text-base">{s.title}</h4>
                <p className="text-stone-400 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Partner Cards ── */}
        <div
          ref={partners.ref}
          className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-stone-200 border border-stone-200 mb-16 md:mb-20"
        >
          {partnerList.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`group bg-[#FDFAF7] flex flex-col items-center p-8 md:p-10 transition-all duration-500 hover:bg-stone-900 ${partners.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              style={{ transitionDelay: partners.inView ? `${i * 100}ms` : "0ms" }}
            >
              {/* Logo */}
              <div className="h-20 flex items-center justify-center mb-6">
                <img
                  src={p.logo}
                  alt={p.name}
                  className={`max-h-16 w-auto object-contain transition-all duration-300 ${hovered === i ? "brightness-0 invert" : ""
                    }`}
                />
              </div>

              {/* Divider */}
              <div className="w-6 h-px bg-orange-500 group-hover:bg-orange-400 mb-5 transition-colors" />

              <h4 className="font-medium text-stone-900 group-hover:text-white text-sm tracking-wide mb-2 transition-colors duration-300">
                {p.name}
              </h4>

              {/* Rating */}
              <div className="flex items-center gap-1.5 mb-6">
                <Star size={12} className="text-orange-500 fill-orange-500" />
                <span className="text-sm font-bold text-stone-700 group-hover:text-white transition-colors duration-300">
                  {p.rating}
                </span>
                <span className="text-xs text-stone-400 group-hover:text-white/50 transition-colors duration-300">
                  rating
                </span>
              </div>

              {/* CTA */}
              <span
                className="inline-flex items-center gap-2 text-orange-600 group-hover:text-white text-xs font-medium tracking-widest uppercase border-b border-orange-500/30 group-hover:border-white/30 pb-0.5 transition-all duration-300"
              >
                Pesan Sekarang
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </span>
            </a>
          ))}
        </div>

        {/* ── App CTA ── */}
        <div
          ref={cta.ref}
          className={`border border-stone-200 bg-white ${fadeUp(cta.inView)}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left copy */}
            <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-stone-200">
              <div className="w-10 h-10 border border-orange-500 flex items-center justify-center mb-6">
                <Smartphone size={18} className="text-orange-500" />
              </div>
              <h3 className="font-serif font-bold text-2xl md:text-3xl text-stone-900 leading-snug mb-3">
                Belum Punya <em className="not-italic text-orange-500">Aplikasinya?</em>
              </h3>
              <p className="text-stone-400 font-light text-sm leading-relaxed max-w-xs">
                Download sekarang dan dapatkan promo khusus untuk pengguna baru.
              </p>
            </div>

            {/* Right buttons */}
            <div className="p-8 md:p-12 flex flex-col justify-center gap-4">
              <a
                href="#"
                className="flex items-center gap-4 border border-stone-200 hover:border-stone-900 bg-white hover:bg-stone-900 px-6 py-4 transition-all duration-200 group"
              >
                <svg className="w-7 h-7 text-stone-700 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <div>
                  <p className="text-[10px] text-stone-400 group-hover:text-white/60 tracking-widest uppercase transition-colors">Download di</p>
                  <p className="text-sm font-medium text-stone-900 group-hover:text-white transition-colors">App Store</p>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-4 border border-stone-200 hover:border-stone-900 bg-white hover:bg-stone-900 px-6 py-4 transition-all duration-200 group"
              >
                <svg className="w-7 h-7 text-stone-700 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div>
                  <p className="text-[10px] text-stone-400 group-hover:text-white/60 tracking-widest uppercase transition-colors">Download di</p>
                  <p className="text-sm font-medium text-stone-900 group-hover:text-white transition-colors">Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};