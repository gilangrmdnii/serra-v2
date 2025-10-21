"use client";

import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const footerSections = [
    {
      title: "Layanan",
      links: [
        "Gadai BPKB Mobil",
        "Simulasi Pinjaman",
        "Syarat Pengajuan",
        "Cara Kerja"
      ]
    },
    {
      title: "Perusahaan",
      links: [
        "Tentang Kami",
        "Karir",
        "Blog",
        "Partner"
      ]
    },
    {
      title: "Legal",
      links: [
        "Privacy Policy",
        "Terms of Service",
        "Syarat & Ketentuan",
        "Kebijakan Cookie"
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-22 h-18 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <img
                  src="/images/logo-serra.png"
                  alt="SERRA.ID Logo"
                  className="w-24 h-auto object-contain"
                />
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Solusi gadai BPKB mobil terpercaya dengan proses cepat, bunga rendah, dan pelayanan terbaik.
            </p>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-bold mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 sm:mb-0">
              © 2025 SERRA.ID. All rights reserved. Bekerja sama dengan lembaga pembiayaan resmi yang diawasi OJK.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Indonesia</span>
              <span>•</span>
              <span>English</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}