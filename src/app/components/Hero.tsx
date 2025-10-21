"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import FormModal from "./FormModal";

export default function HeroSection() {
  const [showForm, setShowForm] = useState(false);
  return (
    <section className="relative overflow-hidden pt-28 pb-24 md:pb-32 text-white">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-400 via-blue-700 to-indigo-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(186,230,253,0.6),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.25),transparent_70%)]" />

      {/* Shimmer Light Glow */}
      <motion.div
        className="absolute -top-40 left-[25%] w-[500px] h-[500px] bg-cyan-300/40 blur-[150px] rounded-full mix-blend-screen"
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-120px] right-[10%] w-[600px] h-[600px] bg-fuchsia-400/40 blur-[180px] rounded-full mix-blend-screen"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animated Wave */}
      <motion.svg
        className="absolute bottom-0 left-0 w-full h-56 md:h-64"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        initial={{ y: 0 }}
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          fill="url(#waveGradient)"
          fillOpacity="0.9"
          d="M0,160L48,149.3C96,139,192,117,288,122.7C384,128,480,160,576,176C672,192,768,192,864,181.3C960,171,1056,149,1152,138.7C1248,128,1344,128,1392,128L1440,128L1440,320L0,320Z"
        />
        <defs>
          <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Light Overlay */}
      <div className="absolute inset-y-0 left-0 w-full md:w-1/2 bg-gradient-to-r from-cyan/40 via-sky-100/30 to-transparent z-[1]" />

      {/* Content */}
      <div className="relative z-[2] max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text Section */}
          <motion.div
            className="space-y-8 text-slate-50"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-[0_3px_12px_rgba(59,130,246,0.35)]">
              Pinjaman{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 animate-[pulse_5s_ease-in-out_infinite]">
                BPKB Mobil
              </span>{" "}
              — Cepat Cair & Aman
            </h1>

            <p className="text-lg md:text-xl text-slate-100/90 max-w-xl leading-relaxed">
              Nikmati proses{" "}
              <span className="font-semibold text-cyan-300">1 hari kerja</span> dengan bunga ringan
              mulai <span className="font-semibold text-sky-300">0.8%</span> dan{" "}
              <span className="font-semibold text-blue-300">nilai pinjaman hingga 95%</span> dari
              kendaraan Anda.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 max-w-md">
              {[
                { title: "Cair 1 Hari", desc: "Proses verifikasi super cepat." },
                { title: "Bunga Mulai 0.8%", desc: "Tenor fleksibel hingga 48 bulan." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3 bg-white/15 backdrop-blur-xl rounded-xl p-4 shadow-lg hover:shadow-cyan-500/40 hover:scale-105 transition-all border border-white/20"
                  whileHover={{ y: -3 }}
                >
                  <CheckCircle className="text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="text-sm text-slate-300">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.a
                onClick={() => setShowForm(true)}
                href="#cta"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-white px-8 py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-cyan-400/50 hover:scale-105 transition-all duration-300"
                whileTap={{ scale: 0.97 }}
              >
                Ajukan Sekarang
                <ArrowRight size={18} />
              </motion.a>

              <motion.a
                href="#benefits"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-cyan-400 text-cyan-300 hover:bg-cyan-400/10 hover:shadow-cyan-300/30 font-medium transition-all duration-300 hover:scale-105"
                whileTap={{ scale: 0.97 }}
              >
                Lihat Keuntungan
              </motion.a>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            className="relative flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <div className="relative w-[95%] max-w-[720px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.7)_0%,transparent_70%)] blur-[120px] scale-150" />
              <motion.img
                src="/images/serra-hero.png"
                alt="Ilustrasi pinjaman BPKB"
                className="relative z-10 w-full h-auto drop-shadow-[0_25px_60px_rgba(56,189,248,0.5)] scale-110"
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
      <FormModal isOpen={showForm} onClose={() => setShowForm(false)} />
    </section>
  );
}
