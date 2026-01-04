"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Heart, Users, Award, Clock, ChevronRight, Sparkles } from 'lucide-react';

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isInView, setIsInView] = useState({
    header: false,
    gallery: false,
    content: false,
    features: false,
    quote: false
  });
  
  const statsRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px'
    };

    const statsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

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
    const galleryObserver = createObserver('gallery');
    const contentObserver = createObserver('content');
    const featuresObserver = createObserver('features');
    const quoteObserver = createObserver('quote');

    if (statsRef.current) statsObserver.observe(statsRef.current);
    if (headerRef.current) headerObserver.observe(headerRef.current);
    if (galleryRef.current) galleryObserver.observe(galleryRef.current);
    if (contentRef.current) contentObserver.observe(contentRef.current);
    if (featuresRef.current) featuresObserver.observe(featuresRef.current);
    if (quoteRef.current) quoteObserver.observe(quoteRef.current);

    return () => {
      statsObserver.disconnect();
      headerObserver.disconnect();
      galleryObserver.disconnect();
      contentObserver.disconnect();
      featuresObserver.disconnect();
      quoteObserver.disconnect();
    };
  }, []);

  const features = [
    {
      icon: Heart,
      title: "Resep Turun Temurun",
      desc: "Cita rasa otentik yang diwariskan dengan penuh cinta"
    },
    {
      icon: Users,
      title: "Suasana Hangat",
      desc: "Konsep minimalis industrial yang nyaman untuk keluarga"
    },
    {
      icon: Award,
      title: "Bahan Berkualitas",
      desc: "Hanya menggunakan bahan pilihan terbaik"
    },
    {
      icon: Clock,
      title: "Pelayanan Cepat",
      desc: "Cocok untuk makan siang cepat atau santai"
    }
  ];

  const stats = [
    { number: 1000, suffix: "+", label: "Pelanggan Puas", duration: 2000 },
    { number: 15, suffix: "+", label: "Varian Menu", duration: 1500 },
    { number: 100, suffix: "%", label: "Halal", duration: 2000 },
    { number: 4.6, suffix: "", label: "Rating Bintang", duration: 1500, isDecimal: true }
  ];

  const AnimatedCounter = ({ target, suffix, duration, isDecimal }: { 
    target: number; 
    suffix: string; 
    duration: number;
    isDecimal?: boolean;
  }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = easeOutQuart * target;

        setCount(currentCount);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }, [isVisible, target, duration]);

    return (
      <span>
        {isDecimal ? count.toFixed(1) : Math.floor(count).toLocaleString('id-ID')}
        {suffix}
      </span>
    );
  };

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-orange-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-orange-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-yellow-400 rounded-full blur-3xl" />
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
            Cerita Kami
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Tentang{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
              Cahaya Gemilang
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Perjalanan kami dimulai dengan satu misi: menghadirkan kelezatan nasi ayam yang tak terlupakan
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center mb-10 sm:mb-12 md:mb-16">
          {/* Image Gallery */}
          <div 
            ref={galleryRef}
            className={`relative transition-all duration-1000 delay-200 ${
              isInView.gallery ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="col-span-2 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <img 
                  src="img/bg3.jpg" 
                  alt="Kedai Cahaya Gemilang" 
                  className="w-full h-56 sm:h-64 md:h-80 object-cover"
                />
              </div>
              <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
                <img 
                  src="img/bg4.jpg" 
                  alt="Interior" 
                  className="w-full h-36 sm:h-40 md:h-48 object-cover"
                />
              </div>
              <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
                <img 
                  src="img/bg5.jpg" 
                  alt="Food" 
                  className="w-full h-36 sm:h-40 md:h-48 object-cover"
                />
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-gradient-to-br from-orange-500 to-yellow-500 text-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-300">
              <p className="text-xs sm:text-sm font-semibold">Berdiri Sejak</p>
              <p className="text-2xl sm:text-3xl font-bold">2025</p>
            </div>
          </div>

          {/* Content */}
          <div 
            ref={contentRef}
            className={`space-y-4 sm:space-y-6 transition-all duration-1000 delay-400 ${
              isInView.content ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg border border-orange-100">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                <span className="w-1.5 sm:w-2 h-8 sm:h-10 bg-gradient-to-b from-orange-500 to-yellow-500 rounded-full" />
                <span className="leading-tight">Kedai Cahaya Gemilang</span>
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                Berdiri sejak <span className="font-semibold text-orange-600">25 Januari 2025</span>, Kedai Cahaya Gemilang hadir sebagai tempat makan sederhana namun penuh kehangatan yang mengutamakan cita rasa otentik dalam setiap piring nasi ayamnya.
              </p>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                Terletak di sebuah bangunan terbuka dengan konsep <span className="font-semibold text-orange-600">minimalis industrial</span>, kedai ini menawarkan suasana santai dan bersih yang cocok untuk makan siang cepat ataupun bersantai bersama teman dan keluarga.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Mengusung tagline <span className="font-semibold text-orange-600">"Spesialis Nasi Ayam"</span>, kedai ini fokus menyajikan hidangan nasi ayam yang lezat, dengan paduan sambal khas dan lauk yang menggugah selera.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <a 
                href="#menu" 
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Lihat Menu Kami
                <ChevronRight size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#location" 
                className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold border-2 border-orange-500 hover:bg-orange-50 transition-all duration-300"
              >
                Kunjungi Kami
              </a>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div 
          ref={featuresRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12 md:mb-16"
        >
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className={`group bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-2xl transition-all duration-500 border border-orange-100 hover:border-orange-300 hover:-translate-y-2 ${
                isInView.features 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: isInView.features ? `${idx * 100}ms` : '0ms' 
              }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="text-white" size={24} />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                {feature.title}
              </h4>
              <p className="text-gray-600 text-xs sm:text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div 
          ref={statsRef} 
          className={`bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1 sm:mb-2">
                  <AnimatedCounter 
                    target={stat.number} 
                    suffix={stat.suffix}
                    duration={stat.duration}
                    isDecimal={stat.isDecimal}
                  />
                </div>
                <div className="text-white/90 text-xs sm:text-sm md:text-base font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-10 sm:mt-12 md:mt-16 text-center">
          <div 
            ref={quoteRef}
            className={`max-w-3xl mx-auto bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-lg border-2 border-orange-100 transition-all duration-1000 ${
              isInView.quote ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-4xl sm:text-5xl md:text-6xl text-orange-500 mb-3 sm:mb-4">"</div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 italic mb-4 sm:mb-6 leading-relaxed px-2">
              Setiap piring yang kami sajikan adalah hasil dari dedikasi untuk menghadirkan kehangatan dan kelezatan yang membuat Anda merasa seperti di rumah sendiri
            </p>
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <div className="w-8 sm:w-10 md:w-12 h-0.5 sm:h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full" />
              <p className="text-orange-600 text-sm sm:text-base font-semibold">Tim Cahaya Gemilang</p>
              <div className="w-8 sm:w-10 md:w-12 h-0.5 sm:h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};