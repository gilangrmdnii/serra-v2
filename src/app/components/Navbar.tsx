"use client";

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#benefits", label: "Keuntungan" },
    { href: "#simulator", label: "Simulasi" },
    { href: "#testimonials", label: "Testimoni" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Kontak" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-xl shadow-md z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-br from-blue-600/90 to-blue-800/90 rounded-xl backdrop-blur-sm shadow-md">
              <img
                src="/images/logo-serra.png"
                alt="SERRA.ID Logo"
                className="w-24 h-auto object-contain"
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-gray-700 font-medium transition-colors duration-200 hover:text-blue-700
                     after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px]
                     after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Ajukan Sekarang
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-xl shadow-lg border-t border-gray-100">
          <div className="px-4 py-3 space-y-3">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-gray-800 font-medium hover:text-blue-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block w-full text-center mt-3 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold shadow hover:scale-105 transition-all duration-300"
            >
              Ajukan Sekarang
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}