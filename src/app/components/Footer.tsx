"use client";

import React from "react";

export default function Footer() {
  const footerSections = [
    {
      title: "Layanan",
      links: [
        "Gadai BPKB Mobil",
        "Simulasi Pinjaman",
        "Syarat Pengajuan",
        "Cara Kerja",
      ],
    },
    {
      title: "Perusahaan",
      links: ["Tentang Kami", "Karir", "Blog", "Partner"],
    },
    {
      title: "Legal",
      links: [
        "Privacy Policy",
        "Terms of Service",
        "Syarat & Ketentuan",
        "Kebijakan Cookie",
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#0A2540] via-[#112F56] to-[#1B3A60] text-gray-200 pt-14 pb-8 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Top Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-5">
              <img
                src="/images/logo-serra.png"
                alt="SERRA.ID Logo"
                className="w-24 md:w-28 h-auto object-contain drop-shadow-[0_3px_8px_rgba(0,0,0,0.3)]"
              />
            </div>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
              Solusi gadai BPKB mobil terpercaya dengan proses cepat, bunga
              rendah, dan pelayanan terbaik untuk Anda.
            </p>
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-[#FDBA74] via-[#F97316] to-[#f7b201] text-white font-semibold px-5 py-2 rounded-full text-sm md:text-base hover:opacity-90 transition-all shadow-md"
            >
              Hubungi Kami
            </a>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-5 border-b border-blue-700/40 pb-2">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-[#3C8DD4] hover:translate-x-1 transition-all duration-200 block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700/60 pt-6 mt-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left">
            <p className="text-gray-400 text-xs md:text-sm max-w-xl">
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-white">SERRA.ID</span>. Semua
              hak dilindungi. Bekerja sama dengan lembaga pembiayaan resmi yang
              diawasi OJK.
            </p>
            <div className="flex items-center space-x-4 text-xs md:text-sm text-gray-400">
              <span className="hover:text-[#3C8DD4] cursor-pointer transition-colors">
                Indonesia
              </span>
              <span>•</span>
              <span className="hover:text-[#3C8DD4] cursor-pointer transition-colors">
                English
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
