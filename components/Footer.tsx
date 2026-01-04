// ============================================
// FILE: components/Footer.tsx
// ============================================
"use client";
import React from 'react';
import { MapPin, Phone, Instagram, Clock, Utensils } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* About section */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center space-x-2 mb-3 sm:mb-4">
              <Utensils className="text-amber-500" size={20} />
              <h3 className="text-xl sm:text-2xl font-bold">Kedai Cahaya Gemilang</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Berdiri sejak 25 Januari 2025, kami hadir sebagai tempat makan sederhana namun penuh kehangatan yang mengutamakan cita rasa otentik.
            </p>
            <div className="flex space-x-3 sm:space-x-4 pt-2">
              <a 
                href="https://wa.me/62895327436647" 
                className="group bg-gray-800 hover:bg-amber-500 p-2.5 sm:p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="WhatsApp"
              >
                <Phone size={18} className="sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
              </a>
              <a 
                href="https://www.instagram.com/kedai.cahayagemilang?igsh=c3o2cGtyY2hnODV1" 
                className="group bg-gray-800 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 p-2.5 sm:p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={18} className="sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
              </a>
            </div>
          </div>

          {/* Hours section */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center space-x-2 mb-3 sm:mb-4">
              <Clock className="text-amber-500" size={20} />
              <h3 className="text-xl sm:text-2xl font-bold">Jam Buka</h3>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-gray-700/50 hover:border-amber-500/50 transition-colors">
                <div className="flex justify-between items-center text-sm sm:text-base">
                  <span className="text-gray-300">Senin - Minggu</span>
                  <span className="text-amber-500 font-semibold">10.00 - 21.30</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact section */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center space-x-2 mb-3 sm:mb-4">
              <MapPin className="text-amber-500" size={20} />
              <h3 className="text-xl sm:text-2xl font-bold">Kontak</h3>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-gray-700/50 hover:border-amber-500/50 transition-colors group">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <MapPin size={18} className="sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 sm:mt-1 text-amber-500 group-hover:scale-110 transition-transform" />
                  <span className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Jl. J.A. Suprapto II No.58, Rampal Celaket, Kec. Klojen, Kota Malang
                  </span>
                </div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-gray-700/50 hover:border-amber-500/50 transition-colors group">
                <a href="https://wa.me/62895327436647" className="flex items-center space-x-2 sm:space-x-3">
                  <Phone size={18} className="sm:w-5 sm:h-5 text-amber-500 group-hover:scale-110 transition-transform" />
                  <span className="text-sm sm:text-base text-gray-300 group-hover:text-amber-500 transition-colors">
                    0895327436647
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700/50 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0">
            <p className="text-xs sm:text-sm text-gray-400 text-center md:text-left">
              &copy; 2026 Kedai Cahaya Gemilang, Spesialis Nasi Ayam.
            </p>
            <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-400">
              <span>Dibuat dengan</span>
              <span className="text-red-500 animate-pulse">❤</span>
              <span>di Malang</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};