"use client";
import React from "react";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex items-center justify-center
        bg-cover bg-center
      "
      style={{
        backgroundImage: "url('/img/bg.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center text-white py-20 sm:py-0">


        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 drop-shadow-2xl leading-tight animate-fade-in-up px-4">
          Spesialis{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
            Nasi Ayam
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200 px-4">
          Nikmati kelezatan nasi ayam dengan resep turun temurun dan cita rasa istimewa
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 sm:mb-16 animate-fade-in-up animation-delay-400 px-4">
          <a
            href="#menu"
            className="
              w-full sm:w-auto
              inline-flex items-center justify-center gap-2
              bg-gradient-to-r from-orange-500 to-yellow-500
              text-white
              px-8 sm:px-10 py-3 sm:py-4
              rounded-full
              text-sm sm:text-base
              font-semibold
              shadow-xl
              hover:scale-105 hover:shadow-2xl
              transition-all duration-300
              transform
            "
          >
            Lihat Menu
            <ChevronDown size={20} className="animate-bounce" />
          </a>
          <a
            href="#about"
            className="
              w-full sm:w-auto
              inline-flex items-center justify-center gap-2
              bg-white/10 backdrop-blur-md
              border-2 border-white/30
              text-white
              px-8 sm:px-10 py-3 sm:py-4
              rounded-full
              text-sm sm:text-base
              font-semibold
              hover:bg-white/20
              transition-all duration-300
            "
          >
            Tentang Kami
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 xs:gap-3 sm:gap-6 md:gap-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-600 px-4">
          <div className="bg-white/10 backdrop-blur-md rounded-lg xs:rounded-xl sm:rounded-2xl p-2 xs:p-3 sm:p-6 border border-white/20">
            <div className="text-lg xs:text-xl sm:text-3xl md:text-4xl font-bold text-orange-400 mb-0.5 xs:mb-1 sm:mb-2">15+</div>
            <div className="text-[10px] xs:text-xs sm:text-sm text-white/80">Menu Varian</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg xs:rounded-xl sm:rounded-2xl p-2 xs:p-3 sm:p-6 border border-white/20">
            <div className="text-lg xs:text-xl sm:text-3xl md:text-4xl font-bold text-orange-400 mb-0.5 xs:mb-1 sm:mb-2">4.6★</div>
            <div className="text-[10px] xs:text-xs sm:text-sm text-white/80">Rating</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg xs:rounded-xl sm:rounded-2xl p-2 xs:p-3 sm:p-6 border border-white/20">
            <div className="text-lg xs:text-xl sm:text-3xl md:text-4xl font-bold text-orange-400 mb-0.5 xs:mb-1 sm:mb-2">100%</div>
            <div className="text-[10px] xs:text-xs sm:text-sm text-white/80">Halal</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white/60" size={32} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 sm:w-48 sm:h-48 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 sm:w-64 sm:h-64 bg-yellow-500/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
    </section>
  );
};

// Add these CSS animations to your global styles
const styles = `
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out;
}

.animation-delay-200 {
  animation-delay: 0.2s;
  opacity: 0;
  animation-fill-mode: forwards;
}

.animation-delay-400 {
  animation-delay: 0.4s;
  opacity: 0;
  animation-fill-mode: forwards;
}

.animation-delay-600 {
  animation-delay: 0.6s;
  opacity: 0;
  animation-fill-mode: forwards;
}

.animation-delay-1000 {
  animation-delay: 1s;
}
`;

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}