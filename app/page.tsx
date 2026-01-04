"use client";


import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Menu } from '@/components/Menu';
import { Delivery } from '@/components/Delivery';
import { Location } from '@/components/Location';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Menu />
      <Delivery />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}