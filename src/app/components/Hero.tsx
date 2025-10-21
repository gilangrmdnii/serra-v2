"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import FormModal from "./FormModal";

export default function HeroSection() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="relative overflow-hidden pt-28 pb-24 md:pb-32 text-white">
      {/* Background Utama — dominan biru */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2873B6] via-[#1E4F91] to-[#133766]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(40,115,182,0.4),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(231,143,0,0.15),transparent_70%)]" />

      {/* Glow efek lembut */}
      <motion.div
        className="absolute -top-40 left-[25%] w-[400px] h-[400px] bg-[#2873B6]/30 blur-[120px] rounded-full mix-blend-screen"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-100px] right-[10%] w-[500px] h-[500px] bg-[#E78F00]/20 blur-[160px] rounded-full mix-blend-screen"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Wave Biru */}
      <motion.svg
        className="absolute bottom-0 left-0 w-full h-56 md:h-64"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          fill="url(#waveGradient)"
          fillOpacity="0.9"
          d="M0,160L48,149.3C96,139,192,117,288,122.7C384,128,480,160,576,176C672,192,768,192,864,181.3C960,171,1056,149,1152,138.7C1248,128,1344,128,1392,128L1440,128L1440,320L0,320Z"
        />
        <defs>
          <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2873B6" />
            <stop offset="100%" stopColor="#1E4F91" />
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Konten */}
      <div className="relative z-[2] max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Gambar */}
          <motion.div
            className="order-1 md:order-2 relative flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <div className="relative w-[90%] sm:w-[80%] max-w-[720px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(40,115,182,0.3)_0%,transparent_70%)] blur-[120px] scale-150" />
              <motion.img
                src="/images/serra-hero.png"
                alt="Ilustrasi pinjaman BPKB"
                className="relative z-10 w-full h-auto drop-shadow-[0_25px_60px_rgba(40,115,182,0.5)] md:scale-110"
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

          {/* Teks */}
          <motion.div
            className="order-2 md:order-1 space-y-8 text-slate-50 text-center md:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight 
  drop-shadow-[0_4px_14px_rgba(10,35,68,0.55)] text-[#F9FAFB]"
            >
              Pinjaman{" "}
              <span
                className="bg-clip-text text-transparent 
    bg-gradient-to-r from-[#3C8DD4] via-[#2873B6] to-[#E78F00]
    animate-[pulse_6s_ease-in-out_infinite] 
    drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
              >
                BPKB Mobil
              </span>{" "}
              — Cepat Cair & Aman
            </h1>


            <p className="text-lg md:text-xl text-slate-100/90 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Proses <span className="font-semibold text-[#E78F00]">1 hari kerja</span> dengan bunga ringan
              mulai <span className="font-semibold text-[#FFB84B]">0.8%</span> dan pencairan hingga{" "}
              <span className="font-semibold text-[#E2ECF9]">95%</span> dari nilai kendaraan Anda.
            </p>

            {/* Fitur kecil */}
            <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto md:mx-0">
              {[
                { title: "Cair 1 Hari", desc: "Proses verifikasi super cepat." },
                { title: "Bunga Mulai 0.8%", desc: "Tenor fleksibel hingga 48 bulan." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3 bg-white/10 backdrop-blur-xl rounded-xl p-4 shadow-lg hover:shadow-[#2873B6]/40 hover:scale-105 transition-all border border-white/20"
                  whileHover={{ y: -3 }}
                >
                  <CheckCircle className="text-[#E78F00] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="text-sm text-slate-300">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <motion.button
                onClick={() => setShowForm(true)}
                className="inline-flex items-center justify-center gap-3 bg-[#2873B6] hover:bg-[#1E4F91] text-white px-8 py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-[#2873B6]/40 hover:scale-105 transition-all duration-300"
                whileTap={{ scale: 0.97 }}
              >
                Ajukan Sekarang
                <ArrowRight size={18} />
              </motion.button>

              <motion.a
                href="#benefits"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-[#E78F00] text-[#E78F00] hover:bg-[#E78F00]/10 hover:shadow-[#E78F00]/30 font-medium transition-all duration-300 hover:scale-105"
                whileTap={{ scale: 0.97 }}
              >
                Lihat Keuntungan
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      <FormModal isOpen={showForm} onClose={() => setShowForm(false)} />
    </section>
  );
}
