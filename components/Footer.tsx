"use client";
import React from "react";
import { MapPin, Phone, Instagram, Clock, Utensils } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white relative overflow-hidden font-sans">
      {/* Vertical rules */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-24 w-px h-full bg-stone-700 hidden md:block" />
        <div className="absolute top-0 right-24 w-px h-full bg-stone-700 hidden md:block" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* ── Top grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-700 border-x border-stone-700 mt-0">

          {/* About */}
          <div className="bg-stone-900 px-8 py-12 md:py-16">
            <div className="inline-flex items-center gap-2.5 mb-6">
              <div className="w-8 h-px bg-orange-500" />
              <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-stone-400 flex items-center gap-1.5">
                <Utensils size={11} />
                Tentang Kami
              </span>
            </div>
            <h3 className="font-serif font-black text-white text-2xl md:text-3xl leading-tight mb-4">
              Kedai Cahaya<br />
              <em className="not-italic text-orange-500">Gemilang</em>
            </h3>
            <p className="text-stone-400 font-light text-sm leading-relaxed mb-8 max-w-xs">
              Berdiri sejak 25 Januari 2025, kami hadir sebagai tempat makan
              sederhana namun penuh kehangatan yang mengutamakan cita rasa otentik.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href="https://wa.me/62895327436647"
                aria-label="WhatsApp"
                className="w-10 h-10 border border-stone-600 hover:border-orange-500 flex items-center justify-center group transition-colors duration-200"
              >
                <Phone size={15} className="text-stone-400 group-hover:text-orange-500 transition-colors duration-200" />
              </a>
              <a
                href="https://www.instagram.com/kedai.cahayagemilang?igsh=c3o2cGtyY2hnODV1"
                aria-label="Instagram"
                className="w-10 h-10 border border-stone-600 hover:border-pink-500 flex items-center justify-center group transition-colors duration-200"
              >
                <Instagram size={15} className="text-stone-400 group-hover:text-pink-500 transition-colors duration-200" />
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="bg-stone-900 px-8 py-12 md:py-16">
            <div className="inline-flex items-center gap-2.5 mb-6">
              <div className="w-8 h-px bg-orange-500" />
              <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-stone-400 flex items-center gap-1.5">
                <Clock size={11} />
                Jam Buka
              </span>
            </div>
            <h4 className="font-serif font-bold text-white text-xl mb-6">
              Setiap <em className="not-italic text-orange-500">Hari</em>
            </h4>
            <div className="border border-stone-700 hover:border-stone-500 transition-colors duration-200 p-5">
              <p className="text-[11px] tracking-[0.15em] uppercase text-stone-500 mb-2">Senin – Minggu</p>
              <p className="font-serif font-bold text-2xl text-white">
                10.00 <span className="text-orange-500">–</span> 21.30
              </p>
              <p className="text-xs text-stone-500 mt-1">WIB</p>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-stone-900 px-8 py-12 md:py-16">
            <div className="inline-flex items-center gap-2.5 mb-6">
              <div className="w-8 h-px bg-orange-500" />
              <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-stone-400 flex items-center gap-1.5">
                <MapPin size={11} />
                Kontak
              </span>
            </div>
            <h4 className="font-serif font-bold text-white text-xl mb-6">
              Temukan <em className="not-italic text-orange-500">Kami</em>
            </h4>
            <div className="space-y-3">
              <div className="border border-stone-700 hover:border-stone-500 transition-colors duration-200 p-4 flex items-start gap-3 group">
                <MapPin size={15} className="text-orange-500 flex-shrink-0 mt-0.5" />
                <p className="text-stone-400 text-xs leading-relaxed group-hover:text-stone-300 transition-colors duration-200">
                  Jl. J.A. Suprapto II No.58, Rampal Celaket, Kec. Klojen, Kota Malang
                </p>
              </div>
              <a
                href="https://wa.me/62895327436647"
                className="border border-stone-700 hover:border-orange-500 transition-colors duration-200 p-4 flex items-center gap-3 group"
              >
                <Phone size={15} className="text-orange-500 flex-shrink-0" />
                <p className="text-stone-400 text-xs group-hover:text-orange-400 transition-colors duration-200">
                  0895327436647
                </p>
              </a>
            </div>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="border border-t-0 border-stone-700 px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[11px] tracking-widest uppercase text-stone-500">
            &copy; 2026 Kedai Cahaya Gemilang — Spesialis Nasi Ayam
          </p>
          <p className="text-[11px] tracking-widest uppercase text-stone-500">
            Dibuat{" "}
            <a
              href="https://www.instagram.com/catranolanhkm?igsh=NTMzZjVteWp2dWdm&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-400 transition-colors"
            >
              Nul
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};