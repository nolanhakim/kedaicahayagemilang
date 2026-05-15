"use client";
import React, { useState, useEffect, useRef } from "react";
import { MapPin, Phone, Clock, Wifi, Instagram, Navigation, Car, Bike } from "lucide-react";

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

export const Location = () => {
  const [activeTab, setActiveTab] = useState<"info" | "hours">("info");

  const header = useInView(0.2);
  const left = useInView(0.15);
  const map = useInView(0.15);
  const banner = useInView(0.2);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat",
      content: "Jl. J.A. Suprapto II No.58, Rampal Celaket, Kec. Klojen, Kota Malang, Jawa Timur 65112",
      link: "https://maps.app.goo.gl/dW5Dg1zdFdTZHyCW9",
    },
    {
      icon: Phone,
      title: "Telepon",
      content: "0895 3274 36647",
      link: "tel:0895327436647",
    },
    {
      icon: Instagram,
      title: "Instagram",
      content: "@kedaicahayagemilang",
      link: "https://www.instagram.com/kedai.cahayagemilang?igsh=c3o2cGtyY2hnODV1",
    },
  ];

  const facilities = [
    { icon: Wifi, text: "Free WiFi" },
    { icon: Bike, text: "Akses Mudah" },
    { icon: Car, text: "Parkir Tersedia" },
    { icon: Clock, text: "Buka Tiap Hari" },
  ];

  const fadeUp = (inView: boolean) =>
    `transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`;
  const fadeLeft = (inView: boolean) =>
    `transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`;
  const fadeRight = (inView: boolean) =>
    `transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`;

  return (
    <section
      id="location"
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
            <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-stone-400">
              Temukan Kami
            </span>
          </div>
          <h2 className="font-serif font-black text-stone-900 leading-none tracking-tight text-4xl md:text-5xl lg:text-6xl mb-4">
            Lokasi <em className="not-italic text-orange-500">Kedai</em>
          </h2>
          <p className="text-stone-500 font-light text-base max-w-md leading-relaxed">
            Kunjungi kedai kami dan rasakan langsung kehangatan pelayanan serta cita rasa istimewa.
          </p>
        </div>

        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20">

          {/* Left — Info Panel */}
          <div ref={left.ref} className={`flex flex-col gap-6 ${fadeLeft(left.inView)}`}>

            {/* Tabs */}
            <div className="flex border-b border-stone-200">
              {(["info", "hours"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 text-sm font-medium tracking-wide border-b-2 -mb-px transition-all duration-200 ${activeTab === tab
                      ? "border-orange-500 text-orange-600"
                      : "border-transparent text-stone-400 hover:text-stone-700"
                    }`}
                >
                  {tab === "info" ? "Informasi" : "Jam Buka"}
                </button>
              ))}
            </div>

            {/* Tab: Info */}
            {activeTab === "info" && (
              <div className="flex flex-col gap-px bg-stone-200 border border-stone-200">
                {contactInfo.map((info, i) => (
                  <a
                    key={i}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 bg-[#FDFAF7] hover:bg-stone-900 px-6 py-5 transition-all duration-200"
                  >
                    <div className="w-9 h-9 border border-orange-500 group-hover:border-white flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-200">
                      <info.icon size={15} className="text-orange-500 group-hover:text-white transition-colors duration-200" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-medium tracking-[0.14em] uppercase text-stone-400 group-hover:text-white/50 mb-1 transition-colors duration-200">
                        {info.title}
                      </p>
                      <p className="text-sm text-stone-800 group-hover:text-white leading-snug break-words transition-colors duration-200">
                        {info.content}
                      </p>
                    </div>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-stone-300 group-hover:text-white/40 flex-shrink-0 mt-1 transition-colors duration-200">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                ))}
              </div>
            )}

            {/* Tab: Hours */}
            {activeTab === "hours" && (
              <div className="border border-stone-200 bg-white">
                <div className="flex items-center justify-between px-6 py-5 border-b border-stone-100">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 border border-orange-500 flex items-center justify-center">
                      <Clock size={15} className="text-orange-500" />
                    </div>
                    <div>
                      <p className="text-[10px] font-medium tracking-[0.14em] uppercase text-stone-400 mb-0.5">Jam Operasional</p>
                      <p className="text-sm font-medium text-stone-900">Senin – Minggu</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-serif font-bold text-lg text-stone-900">10.00 – 21.30</p>
                    <p className="text-[10px] tracking-widest uppercase text-stone-400">WIB</p>
                  </div>
                </div>
                <div className="px-6 py-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-green-600 font-medium tracking-wide">Buka setiap hari</span>
                </div>
              </div>
            )}

            {/* Facilities */}
            <div>
              <p className="text-[11px] font-medium tracking-[0.16em] uppercase text-stone-400 mb-4">Fasilitas</p>
              <div className="grid grid-cols-2 gap-px bg-stone-200 border border-stone-200">
                {facilities.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 bg-[#FDFAF7] px-5 py-4">
                    <f.icon size={14} className="text-orange-500 flex-shrink-0" />
                    <span className="text-xs font-medium text-stone-700">{f.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direction CTA */}
            <a
              href="https://maps.app.goo.gl/dW5Dg1zdFdTZHyCW9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-orange-600 hover:bg-orange-500 text-white text-sm font-medium tracking-wide pl-6 pr-10 py-3.5 self-start transition-all duration-200 hover:translate-x-1"
              style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 0 100%)" }}
            >
              <Navigation size={15} />
              Dapatkan Petunjuk Arah
            </a>
          </div>

          {/* Right — Map */}
          <div ref={map.ref} className={`flex flex-col gap-4 order-first lg:order-last ${fadeRight(map.inView)}`}>
            {/* Map embed */}
            <div className="overflow-hidden border border-stone-200 flex-1 min-h-[320px] lg:min-h-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.3015412825744!2d112.61740167401022!3d-7.967756492057121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6298baf844ccb%3A0x16d57bf14e899f8f!2sKedai%20Cahaya%20Gemilang!5e0!3m2!1sid!2sid!4v1748222219543!5m2!1sid!2sid"
                className="w-full h-72 lg:h-[480px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-px bg-stone-200 border border-stone-200">
              <div className="bg-[#FDFAF7] px-6 py-5 text-center">
                <p className="font-serif font-bold text-2xl text-stone-900 mb-0.5">15 mnt</p>
                <p className="text-[10px] tracking-[0.12em] uppercase text-stone-400">Dari Pusat Kota</p>
              </div>
              <div className="bg-[#FDFAF7] px-6 py-5 text-center">
                <p className="font-serif font-bold text-2xl text-stone-900 mb-0.5">4.6<span className="text-orange-500">★</span></p>
                <p className="text-[10px] tracking-[0.12em] uppercase text-stone-400">Rating Google</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Banner ── */}
        <div ref={banner.ref} className={`border border-stone-200 bg-white ${fadeUp(banner.inView)}`}>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Copy */}
            <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-stone-200">
              <div className="w-10 h-10 border border-orange-500 flex items-center justify-center mb-6">
                <MapPin size={18} className="text-orange-500" />
              </div>
              <h3 className="font-serif font-bold text-2xl md:text-3xl text-stone-900 leading-snug mb-3">
                Belum Pernah <em className="not-italic text-orange-500">Berkunjung?</em>
              </h3>
              <p className="text-stone-400 font-light text-sm leading-relaxed max-w-xs">
                Kami tunggu kedatangan Anda. Nikmati suasana hangat dan cita rasa istimewa yang tak terlupakan.
              </p>
            </div>

            {/* CTAs */}
            <div className="p-8 md:p-12 flex flex-col justify-center gap-4">
              <a
                href="#menu"
                className="flex items-center gap-4 border border-stone-200 hover:border-orange-500 bg-white hover:bg-orange-600 px-6 py-4 transition-all duration-200 group"
              >
                <div className="w-8 h-8 border border-orange-500 group-hover:border-white flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-orange-500 group-hover:text-white transition-colors duration-200">
                    <path d="M3 6h18M3 12h18M3 18h18" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-stone-400 group-hover:text-white/60 tracking-widest uppercase transition-colors">Jelajahi</p>
                  <p className="text-sm font-medium text-stone-900 group-hover:text-white transition-colors">Lihat Menu</p>
                </div>
              </a>
              <a
                href="tel:0895327436647"
                className="flex items-center gap-4 border border-stone-200 hover:border-stone-900 bg-white hover:bg-stone-900 px-6 py-4 transition-all duration-200 group"
              >
                <div className="w-8 h-8 border border-stone-300 group-hover:border-white flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                  <Phone size={13} className="text-stone-500 group-hover:text-white transition-colors duration-200" />
                </div>
                <div>
                  <p className="text-[10px] text-stone-400 group-hover:text-white/60 tracking-widest uppercase transition-colors">Hubungi</p>
                  <p className="text-sm font-medium text-stone-900 group-hover:text-white transition-colors">0895 3274 36647</p>
                </div>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};