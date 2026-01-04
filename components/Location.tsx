"use client";
import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Clock, Wifi, Instagram, Navigation, Car, Bike, ChevronRight, Sparkles } from 'lucide-react';

export const Location = () => {
  const [activeTab, setActiveTab] = useState<'info' | 'hours'>('info');
  const [isInView, setIsInView] = useState({
    header: false,
    leftSide: false,
    map: false,
    banner: false
  });

  const headerRef = useRef<HTMLDivElement>(null);
  const leftSideRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

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
    const leftSideObserver = createObserver('leftSide');
    const mapObserver = createObserver('map');
    const bannerObserver = createObserver('banner');

    if (headerRef.current) headerObserver.observe(headerRef.current);
    if (leftSideRef.current) leftSideObserver.observe(leftSideRef.current);
    if (mapRef.current) mapObserver.observe(mapRef.current);
    if (bannerRef.current) bannerObserver.observe(bannerRef.current);

    return () => {
      headerObserver.disconnect();
      leftSideObserver.disconnect();
      mapObserver.disconnect();
      bannerObserver.disconnect();
    };
  }, []);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat",
      content: "Jl. J.A. Suprapto II No.58, Rampal Celaket, Kec. Klojen, Kota Malang, Jawa Timur 65112",
      link: "https://maps.app.goo.gl/dW5Dg1zdFdTZHyCW9",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Phone,
      title: "Telepon",
      content: "0895327436647",
      link: "tel:0895327436647",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Instagram,
      title: "Instagram",
      content: "@kedaicahayagemilang",
      link: "https://www.instagram.com/kedai.cahayagemilang?igsh=c3o2cGtyY2hnODV1",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const operatingHours = [
    { day: "Senin - Minggu", hours: "10.00 - 21.30 WIB", status: "open" },
  ];

  const facilities = [
    { icon: Wifi, text: "Free WiFi" },
    { icon: Bike, text: "Akses Mudah" }
  ];

  const directions = [
    {
      icon: Car,
      title: "Dengan Kendaraan",
      desc: "15 menit dari pusat kota Malang"
    }
  ];

  return (
    <section id="location" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-orange-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-orange-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-red-400 rounded-full blur-3xl" />
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
            Temukan Kami
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Lokasi{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              Kedai
            </span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Kunjungi kedai kami dan rasakan langsung kehangatan pelayanan kami
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Left Side - Info */}
          <div 
            ref={leftSideRef}
            className={`space-y-4 sm:space-y-6 transition-all duration-1000 delay-200 ${
              isInView.leftSide ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            {/* Tabs */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-1.5 sm:p-2 shadow-md inline-flex w-full sm:w-auto">
              <button
                onClick={() => setActiveTab('info')}
                className={`flex-1 sm:flex-initial px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 ${
                  activeTab === 'info'
                    ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Informasi
              </button>
              <button
                onClick={() => setActiveTab('hours')}
                className={`flex-1 sm:flex-initial px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 ${
                  activeTab === 'hours'
                    ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Jam Buka
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === 'info' ? (
              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((info, idx) => (
                  <a
                    key={idx}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100 hover:border-orange-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${info.color} rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon className="text-white" size={24} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs sm:text-sm font-semibold text-gray-500 mb-1">{info.title}</h4>
                        <p className="text-sm sm:text-base text-gray-900 font-medium group-hover:text-orange-600 transition-colors break-words">
                          {info.content}
                        </p>
                      </div>
                      <ChevronRight className="text-gray-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all flex-shrink-0" size={20} />
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md border border-orange-100">
                <div className="space-y-3 sm:space-y-4">
                  {operatingHours.map((schedule, idx) => (
                    <div key={idx} className="flex items-center justify-between py-2 sm:py-3 border-b border-gray-100 last:border-b-0">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <Clock className="text-orange-500 flex-shrink-0" size={18} />
                        <span className="text-sm sm:text-base font-medium text-gray-900">{schedule.day}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs sm:text-base font-semibold ${
                          schedule.status === 'open' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {schedule.hours}
                        </span>
                        {schedule.status === 'open' && (
                          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Facilities */}
            <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg">
              <h3 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4">Fasilitas Tersedia</h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {facilities.map((facility, idx) => (
                  <div key={idx} className="bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 text-center hover:bg-white/30 transition-all duration-300">
                    <facility.icon className="text-white mx-auto mb-2" size={24} />
                    <p className="text-white text-xs sm:text-sm font-medium">{facility.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Directions */}
            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              {directions.map((direction, idx) => (
                <div key={idx} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md border border-orange-100 hover:shadow-lg transition-all duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                    <direction.icon className="text-orange-600" size={20} />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">{direction.title}</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">{direction.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a 
              href="https://maps.app.goo.gl/dW5Dg1zdFdTZHyCW9" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 sm:gap-3 w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Navigation size={20} className="group-hover:rotate-45 transition-transform duration-300" />
              Dapatkan Petunjuk Arah
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right Side - Map */}
          <div 
            ref={mapRef}
            className={`space-y-3 sm:space-y-4 order-first lg:order-last transition-all duration-1000 delay-400 ${
              isInView.map ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl h-64 sm:h-96 lg:h-[600px] border-2 sm:border-4 border-white relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.3015412825744!2d112.61740167401022!3d-7.967756492057121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6298baf844ccb%3A0x16d57bf14e899f8f!2sKedai%20Cahaya%20Gemilang!5e0!3m2!1sid!2sid!4v1748222219543!5m2!1sid!2sid"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-md border border-orange-100 text-center">
                <p className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 mb-1">
                  15 min
                </p>
                <p className="text-xs sm:text-sm text-gray-600">Dari Pusat Kota</p>
              </div>
              <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-md border border-orange-100 text-center">
                <p className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 mb-1">
                  4.6★
                </p>
                <p className="text-xs sm:text-sm text-gray-600">Rating Google</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div 
          ref={bannerRef}
          className={`bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl border-2 border-orange-100 text-center transition-all duration-1000 ${
            isInView.banner ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <MapPin className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-4 sm:mb-6 text-orange-500" />
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Belum Pernah Berkunjung?
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Kami tunggu kedatangan Anda di kedai kami. Nikmati suasana hangat dan cita rasa istimewa yang tak terlupakan!
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-4">
            <a 
              href="#menu" 
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Lihat Menu
              <ChevronRight size={18} className="sm:w-5 sm:h-5" />
            </a>
            <a 
              href="tel:0895327436647" 
              className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 border-2 border-orange-500 px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-bold hover:bg-orange-50 transition-all duration-300"
            >
              <Phone size={18} className="sm:w-5 sm:h-5" />
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};