"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 pb-24 md:pb-32 text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-100 via-sky-200/60 to-blue-500/40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(186,230,253,0.35),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.25),transparent_70%)]" />

      {/* Wave motion */}
      <motion.svg
        className="absolute bottom-0 left-0 w-full h-48 md:h-56"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path
          fill="url(#waveGradient)"
          fillOpacity="0.5"
          d="M0,160L48,149.3C96,139,192,117,288,122.7C384,128,480,160,576,176C672,192,768,192,864,181.3C960,171,1056,149,1152,138.7C1248,128,1344,128,1392,128L1440,128L1440,320L0,320Z"
        />
        <defs>
          <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#1e3a8a" />
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Floating glow */}
      <motion.div
        className="absolute -top-40 left-[20%] w-[400px] h-[400px] bg-sky-200/40 blur-[120px] rounded-full mix-blend-screen"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-100px] right-[15%] w-[500px] h-[500px] bg-blue-400/30 blur-[150px] rounded-full mix-blend-screen"
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Light overlay for text readability */}
      <div className="absolute inset-y-0 left-0 w-full md:w-1/2 bg-gradient-to-r from-sky-100/60 via-sky-100/40 to-transparent z-[1]" />

      {/* Content */}
      <div className="relative z-[2] max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8 text-slate-800"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Pinjaman{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-600 via-blue-500 to-indigo-500">
                BPKB Mobil
              </span>{' '}
              — Cepat Cair & Aman
            </h1>

            <p className="text-lg md:text-xl text-slate-700 max-w-xl leading-relaxed">
              Nikmati proses{' '}
              <span className="font-semibold text-sky-700">1 hari kerja</span> dengan bunga ringan
              mulai <span className="font-semibold text-sky-700">0.8%</span> dan{' '}
              <span className="font-semibold text-sky-700">nilai pinjaman hingga 95%</span> dari
              kendaraan Anda.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 max-w-md">
              {[
                { title: 'Cair 1 Hari', desc: 'Proses verifikasi super cepat.' },
                { title: 'Bunga Mulai 0.8%', desc: 'Tenor fleksibel hingga 48 bulan.' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3 bg-white/70 backdrop-blur-xl rounded-xl p-4 shadow-md hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.04 }}
                >
                  <CheckCircle className="text-sky-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.a
                href="#cta"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 text-white px-8 py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
              >
                Ajukan Sekarang
                <ArrowRight size={18} />
              </motion.a>

              <motion.a
                href="#keuntungan"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-sky-300 text-sky-700 hover:bg-sky-100/50 font-medium transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Lihat Keuntungan
              </motion.a>
            </div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            className="relative flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <div className="relative w-[95%] max-w-[720px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.3)_0%,transparent_70%)] blur-[120px] scale-150" />
              <motion.img
                src="/images/serra-hero.png"
                alt="Ilustrasi pinjaman BPKB"
                className="relative z-10 w-full h-auto drop-shadow-[0_25px_40px_rgba(59,130,246,0.3)] scale-110"
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}