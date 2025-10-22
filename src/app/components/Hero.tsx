"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import FormModal from "./FormModal";

export default function HeroSection() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="relative overflow-hidden pt-28 pb-24 md:pb-32 text-white">
      {/* --- Latar Belakang --- */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2563EB] via-[#1E3A8A] to-[#0F172A]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.3),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(231,143,0,0.15),transparent_70%)]" />

      {/* Cahaya lembut */}
      <motion.div
        className="absolute -top-40 left-[25%] w-[400px] h-[400px] bg-[#3B82F6]/40 blur-[120px] rounded-full mix-blend-screen"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* --- Wave bawah --- */}
      <motion.svg
        className="absolute bottom-0 left-0 w-full h-56 md:h-64"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          fill="url(#waveGradient)"
          fillOpacity="1"
          d="M0,160L48,149.3C96,139,192,117,288,122.7C384,128,480,160,576,176C672,192,768,192,864,181.3C960,171,1056,149,1152,138.7C1248,128,1344,128,1392,128L1440,128L1440,320L0,320Z"
        />
        <defs>
          <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1E3A8A" />
          </linearGradient>
        </defs>
      </motion.svg>

      {/* --- Konten --- */}
      <div className="relative z-[2] max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Gambar */}
          <motion.div
            className="order-1 md:order-2 flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <div className="relative w-[90%] sm:w-[80%] max-w-[720px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.4)_0%,transparent_70%)] blur-[120px] scale-150" />
              <motion.img
                src="/images/serra-hero.png"
                alt="Ilustrasi pinjaman BPKB"
                className="relative z-10 w-full h-auto drop-shadow-[0_25px_60px_rgba(37,99,235,0.6)] md:scale-110"
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

          {/* --- Teks --- */}
          <motion.div
            className="order-2 md:order-1 text-center md:text-left space-y-8 text-slate-50"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.15] tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.35)]">
              Pinjaman{" "}
              <span
                className="bg-clip-text text-transparent bg-gradient-to-r 
                from-[#60A5FA] via-[#2563EB] to-[#FBBF24]
                drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)] animate-[pulse_6s_ease-in-out_infinite]"
              >
                BPKB Mobil
              </span>{" "}
              <br className="hidden sm:block" />
              <span className="text-[#E2E8F0]">Cepat, Aman, & Terpercaya</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-slate-100/90 max-w-xl mx-auto md:mx-0 leading-relaxed font-medium">
              Nikmati proses <span className="font-semibold text-[#FACC15]">1 hari kerja</span> dengan bunga rendah mulai{" "}
              <span className="font-semibold text-[#FCD34D]">0.8%</span> dan pencairan hingga{" "}
              <span className="font-semibold text-[#E0F2FE]">95%</span> dari nilai kendaraan Anda.
            </p>

            {/* Tagline highlight */}
            <motion.div
              className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold tracking-wide text-[#E0F2FE] border border-white/20 shadow-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
            >
              <span className="text-[#FCD34D]">Tanpa BI Checking</span> • Proses Cepat • Aman 100%
            </motion.div>

            {/* Tombol CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <motion.button
                onClick={() => setShowForm(true)}
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#1E40AF] text-white px-9 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-blue-600/40 hover:scale-105 transition-all duration-300"
                whileTap={{ scale: 0.97 }}
              >
                Ajukan Sekarang
                <ArrowRight size={18} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      <FormModal isOpen={showForm} onClose={() => setShowForm(false)} />
    </section>
  );
}
