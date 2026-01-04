// ============================================
// FILE: components/Contact.tsx
// ============================================
"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Instagram, Phone, MessageCircle, Mail, Send, Sparkles, Clock, MapPin } from 'lucide-react';

export const Contact = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isInView, setIsInView] = useState({
    header: false,
    quickInfo: false,
    contactCards: false
  });

  const headerRef = useRef<HTMLDivElement>(null);
  const quickInfoRef = useRef<HTMLDivElement>(null);
  const contactCardsRef = useRef<HTMLDivElement>(null);

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
    const quickInfoObserver = createObserver('quickInfo');
    const contactCardsObserver = createObserver('contactCards');

    if (headerRef.current) headerObserver.observe(headerRef.current);
    if (quickInfoRef.current) quickInfoObserver.observe(quickInfoRef.current);
    if (contactCardsRef.current) contactCardsObserver.observe(contactCardsRef.current);

    return () => {
      headerObserver.disconnect();
      quickInfoObserver.disconnect();
      contactCardsObserver.disconnect();
    };
  }, []);

  const contactMethods = [
    {
      icon: Phone,
      title: "WhatsApp",
      subtitle: "Chat langsung dengan kami",
      content: "0895327436647",
      link: "https://wa.me/62895327436647",
      gradient: "from-green-400 via-green-500 to-emerald-600",
      bgPattern: "bg-green-50",
      description: "Respon cepat untuk reservasi dan pertanyaan"
    },
    {
      icon: Instagram,
      title: "Instagram",
      subtitle: "Follow untuk update terbaru",
      content: "@kedaicahayagemilang",
      link: "https://www.instagram.com/kedai.cahayagemilang?igsh=c3o2cGtyY2hnODV1",
      gradient: "from-purple-400 via-pink-500 to-red-500",
      bgPattern: "bg-purple-50",
      description: "Lihat menu dan promo menarik kami"
    }
  ];

  const quickInfo = [
    {
      icon: Clock,
      title: "Jam Operasional",
      info: "10.00 - 21.30 WIB"
    },
    {
      icon: MapPin,
      title: "Lokasi",
      info: "Jl. J.A. Suprapto II No.58, Rampal Celaket"
    },
    {
      icon: MessageCircle,
      title: "Fast Response",
      info: "< 10 menit"
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-orange-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-green-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-10 sm:mb-12 md:mb-16 transition-all duration-1000 ${
            isInView.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            <Sparkles size={14} className="sm:w-4 sm:h-4" />
            Kami Siap Melayani
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Hubungi{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
              Kami
            </span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Untuk reservasi, informasi menu, atau pertanyaan lainnya, jangan ragu untuk menghubungi kami
          </p>
        </div>

        {/* Quick Info Cards */}
        <div 
          ref={quickInfoRef}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12"
        >
          {quickInfo.map((item, idx) => (
            <div 
              key={idx}
              className={`bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md border border-orange-100 text-center hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${
                isInView.quickInfo ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: isInView.quickInfo ? `${idx * 100}ms` : '0ms'
              }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <item.icon className="text-white" size={20} />
              </div>
              <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">{item.title}</h3>
              <p className="text-gray-600 text-xs sm:text-sm">{item.info}</p>
            </div>
          ))}
        </div>

        {/* Main Contact Cards */}
        <div 
          ref={contactCardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12"
        >
          {contactMethods.map((method, idx) => (
            <a
              key={idx}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`group relative ${method.bgPattern} rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-700 border-2 border-transparent hover:border-orange-300 overflow-hidden transform hover:-translate-y-2 ${
                isInView.contactCards ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{
                transitionDelay: isInView.contactCards ? `${idx * 200}ms` : '0ms'
              }}
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${method.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <method.icon className="text-white" size={32} />
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {method.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                  {method.subtitle}
                </p>

                {/* Content */}
                <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 mb-3 sm:mb-4 border border-gray-200 group-hover:border-orange-300 transition-colors">
                  <p className="text-base sm:text-lg font-semibold text-gray-900 break-all">
                    {method.content}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6">
                  {method.description}
                </p>

                {/* CTA Button */}
                <div className={`flex items-center justify-center gap-2 bg-gradient-to-r ${method.gradient} text-white py-2.5 sm:py-3 px-5 sm:px-6 rounded-full text-sm sm:text-base font-semibold group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105`}>
                  <span>Hubungi Sekarang</span>
                  <Send size={16} className={`sm:w-[18px] sm:h-[18px] transition-transform duration-300 ${
                    hoveredCard === idx ? 'translate-x-1 -translate-y-1' : ''
                  }`} />
                </div>
              </div>

              {/* Corner Decoration */}
              <div className={`absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br ${method.gradient} opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`} />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};