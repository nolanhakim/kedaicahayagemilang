"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Smartphone, ShoppingBag, Clock, Star, ChevronRight, Sparkles, Bike } from 'lucide-react';

export const Delivery = () => {
  const [hoveredPartner, setHoveredPartner] = useState<number | null>(null);
  const [isInView, setIsInView] = useState({
    header: false,
    features: false,
    partners: false,
    cta: false
  });

  const headerRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const partnersRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px'
    };

    const createObserver = (key: keyof typeof isInView) => {
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(prev => ({ ...prev, [key]: true }));
          }
        },
        observerOptions
      );
    };

    const headerObserver = createObserver('header');
    const featuresObserver = createObserver('features');
    const partnersObserver = createObserver('partners');
    const ctaObserver = createObserver('cta');

    if (headerRef.current) headerObserver.observe(headerRef.current);
    if (featuresRef.current) featuresObserver.observe(featuresRef.current);
    if (partnersRef.current) partnersObserver.observe(partnersRef.current);
    if (ctaRef.current) ctaObserver.observe(ctaRef.current);

    return () => {
      headerObserver.disconnect();
      featuresObserver.disconnect();
      partnersObserver.disconnect();
      ctaObserver.disconnect();
    };
  }, []);

const partners = [
    { 
      name: 'GoFood', 
      logo: 'https://seduhteh.wordpress.com/wp-content/uploads/2019/11/logo-gofood-baru.png',
      color: 'from-green-500 to-emerald-600',
      link: 'https://gofood.link/a/NynYkWG',
      rating: '4.8'
    },
    { 
      name: 'Shopee Food', 
      logo: 'https://images.seeklogo.com/logo-png/39/1/shopee-food-indonesia-logo-png_seeklogo-397473.png',
      color: 'from-orange-500 to-red-500',
      link: 'https://spf.shopee.co.id/3VdgnGLQpO',
      rating: '4.7'
    },
    { 
      name: 'GrabFood', 
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI6Gh2-BBb6JWXlSvNTVEHbb-lDO-ue24BJA&s',
      color: 'from-green-600 to-teal-600',
      link: 'https://r.grab.com/g/6-20260102_155121_5C1F4A45257C4ABAA1B8C0D8121CFB97_MEXMPS-6-C623HGL1JNNTE6',
      rating: '4.9'
    }
  ];
  const features = [
    {
      icon: Clock,
      title: "Pengiriman Cepat",
      desc: "Rata-rata 30 menit sampai"
    },
    {
      icon: ShoppingBag,
      title: "Promo Menarik",
      desc: "Dapatkan diskon hingga 50%"
    },
    {
      icon: Star,
      title: "Rating Tinggi",
      desc: "Dipercaya ribuan pelanggan"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Pilih Platform",
      desc: "Pilih aplikasi delivery favorit Anda"
    },
    {
      number: "02",
      title: "Pesan Menu",
      desc: "Pilih menu yang Anda inginkan"
    },
    {
      number: "03",
      title: "Tunggu & Nikmati",
      desc: "Pesanan Anda akan segera tiba"
    }
  ];

  return (
    <section id="delivery" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-orange-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 sm:w-96 sm:h-96 bg-green-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-orange-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-10 sm:mb-12 md:mb-16 transition-all duration-1000 ${
            isInView.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            <Bike size={14} className="sm:w-4 sm:h-4 animate-bounce" />
            Pesan Antar Tersedia
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Pesan{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-orange-500">
              Online
            </span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Nikmati kelezatan nasi ayam kami tanpa perlu keluar rumah. Pesan sekarang melalui platform favorit Anda!
          </p>
        </div>

        {/* Features */}
        <div 
          ref={featuresRef}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12 md:mb-16"
        >
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className={`bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-500 border border-orange-100 text-center group hover:-translate-y-2 ${
                isInView.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: isInView.features ? `${idx * 100}ms` : '0ms'
              }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="text-white" size={24} />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-xs sm:text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Partners Grid */}
        <div 
          ref={partnersRef}
          className="mb-10 sm:mb-12 md:mb-16"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {partners.map((partner, idx) => (
              <a
                key={idx}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredPartner(idx)}
                onMouseLeave={() => setHoveredPartner(null)}
                className={`group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-700 border-2 border-transparent hover:border-orange-300 overflow-hidden transform hover:-translate-y-3 ${
                  isInView.partners ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{
                  transitionDelay: isInView.partners ? `${idx * 150}ms` : '0ms'
                }}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${partner.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Logo Container */}
                  <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 group-hover:bg-white transition-colors duration-300 flex items-center justify-center h-24 sm:h-28 md:h-32">
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className={`h-16 sm:h-20 w-auto object-contain transition-transform duration-500 ${
                        hoveredPartner === idx ? 'scale-110' : 'scale-100'
                      }`}
                    />
                  </div>

                  {/* Partner Name */}
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 text-center group-hover:text-orange-600 transition-colors">
                    {partner.name}
                  </h4>

                  {/* Rating */}
                  <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
                    <Star className="text-yellow-400 fill-yellow-400" size={18} />
                    <span className="text-base sm:text-lg font-semibold text-gray-700">{partner.rating}</span>
                    <span className="text-xs sm:text-sm text-gray-500">Rating</span>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold flex items-center justify-center gap-2 group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                    Pesan Sekarang
                    <ChevronRight size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Corner Decoration */}
                <div className="absolute top-4 right-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
              </a>
            ))}
          </div>
        </div>


        {/* Download CTA */}
        <div 
          ref={ctaRef}
          className={`bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl border-2 border-orange-100 text-center transition-all duration-1000 ${
            isInView.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Smartphone className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-4 sm:mb-6 text-orange-500" />
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Belum Punya Aplikasinya?
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Download aplikasi delivery sekarang dan dapatkan promo khusus untuk pengguna baru!
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-4">
            <a 
              href="#" 
              className="inline-flex items-center justify-center gap-3 bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              <span className="hidden xs:inline">App Store</span>
              <span className="xs:hidden">iOS</span>
            </a>
            <a 
              href="#" 
              className="inline-flex items-center justify-center gap-3 bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <span className="hidden xs:inline">Google Play</span>
              <span className="xs:hidden">Android</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};