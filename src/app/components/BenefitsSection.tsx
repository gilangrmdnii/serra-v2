"use client";

import React, { useState } from "react";
import {
  Clock,
  Shield,
  DollarSign,
  FileText,
  Users,
  TrendingUp,
} from "lucide-react";
import FormModal from "./FormModal";

export default function BenefitsSection() {
  const [showForm, setShowForm] = useState(false);
  const benefits = [
    {
      icon: Clock,
      title: "Proses Cepat",
      desc: "Pencairan dana dalam 24 jam setelah verifikasi dokumen lengkap",
    },
    {
      icon: Shield,
      title: "Aman & Terpercaya",
      desc: "Bermitra dengan lembaga pembiayaan resmi berizin OJK dan bank ternama",
    },
    {
      icon: DollarSign,
      title: "Bunga Rendah",
      desc: "Suku bunga kompetitif mulai dari 1.2% per bulan flat",
    },
    {
      icon: FileText,
      title: "Syarat Mudah",
      desc: "Hanya dengan BPKB mobil dan KTP, tanpa BI checking",
    },
    {
      icon: Users,
      title: "Pelayanan 24/7",
      desc: "Customer service siap membantu Anda kapan saja",
    },
    {
      icon: TrendingUp,
      title: "Plafon Tinggi",
      desc: "Pinjaman hingga 80% dari nilai taksiran mobil Anda",
    },
  ];

  return (
    <section
      id="benefits"
      className="py-12 px-4 bg-gradient-to-b from-[#F9FAFB] via-white to-[#EAF3FA]"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14 px-3">
          <span className="text-[#E78F00] font-semibold tracking-wide uppercase text-sm md:text-base">
            — Keuntungan —
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-2 md:mt-3 mb-3 md:mb-4 text-[#0A2647] leading-snug">
            Keuntungan yang{" "}
            <span className="text-[#2873B6]">Tak Terbatas</span>
            <span className="hidden sm:inline"> Untuk Setiap Transaksi</span>
          </h2>

          <h2 className="text-2xl font-extrabold text-[#0A2647] sm:hidden mb-2">
            Untuk Setiap Transaksi
          </h2>

          <p className="text-gray-600 text-sm sm:text-base max-w-md sm:max-w-2xl mx-auto leading-relaxed">
            Nikmati berbagai kemudahan dan keuntungan eksklusif saat menggunakan
            layanan gadai BPKB mobil di{" "}
            <span className="font-semibold text-[#2873B6]">SERRA.ID</span>.
          </p>
        </div>

        {/* Cards - Responsive Scroll */}
        <div className="md:grid md:grid-cols-3 md:gap-8 hidden md:block">
          {benefits.map((benefit, idx) => (
            <Card key={idx} idx={idx} benefit={benefit} />
          ))}
        </div>

        {/* Mobile horizontal scroll */}
        <div className="flex md:hidden gap-4 overflow-x-auto snap-x snap-mandatory pb-4 px-1 no-scrollbar">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="min-w-[80%] sm:min-w-[60%] snap-center">
              <Card idx={idx} benefit={benefit} />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 md:mt-12">
          <button
            onClick={() => setShowForm(true)}
            className="group relative inline-flex items-center justify-center overflow-hidden 
               px-7 sm:px-9 py-3 sm:py-4 rounded-xl text-white font-bold text-base sm:text-lg 
               bg-gradient-to-r from-[#E78F00] via-[#F3A93F] to-[#2873B6]
               hover:from-[#2873B6] hover:via-[#3C8DD4] hover:to-[#E78F00]
               shadow-md hover:shadow-lg transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              Ajukan Sekarang
              <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </span>
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/10 blur-lg transition-opacity duration-300"></span>
          </button>
        </div>
      </div>

      <FormModal isOpen={showForm} onClose={() => setShowForm(false)} />
    </section>
  );
}

/* === Sub Component Card === */
function Card({ idx, benefit }: any) {
  return (
    <div
      className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl border border-[#E3EDF7] shadow-sm hover:shadow-md transition-all duration-300 h-full"
    >
      <div
        className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-4 ${idx % 2 === 0
          ? "bg-gradient-to-br from-[#2873B6] to-[#3C8DD4]"
          : "bg-gradient-to-br from-[#E78F00] to-[#F3A93F]"
          }`}
      >
        <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
      </div>
      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 text-[#0A2647]">
        {benefit.title}
      </h3>
      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
        {benefit.desc}
      </p>
    </div>
  );
}
