// ============================================
// FILE: components/Header.tsx
// ============================================
"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Beranda' },
    { href: '#about', label: 'Tentang Kami' },
    { href: '#menu', label: 'Menu' },
    { href: '#delivery', label: 'Pesan Online' },
    { href: '#location', label: 'Lokasi' },
    { href: '#contact', label: 'Kontak' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${isSticky ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <a href="https://www.kedai-cahayagemilang.my.id/" className="text-2xl font-bold text-orange-600">
            Kedai <span className="text-gray-800">Cahaya Gemilang</span>
          </a>
          
          <ul className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <li key={item.href}>
                <a href={item.href} className="text-gray-700 hover:text-orange-600 transition">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <ul className="space-y-3">
              {navItems.map(item => (
                <li key={item.href}>
                  <a 
                    href={item.href} 
                    className="block text-gray-700 hover:text-orange-600 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};