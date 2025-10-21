"use client";

import React from "react";
import {
  Clock,
  Shield,
  DollarSign,
  FileText,
  Users,
  TrendingUp,
} from "lucide-react";

export default function BenefitsSection() {
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
      className="py-20 px-4 bg-gradient-to-b from-[#F9FAFB] via-white to-[#EAF3FA]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#E78F00] font-semibold tracking-wide uppercase">
            — Keuntungan —
          </span>
          <h2 className="text-4xl font-bold mt-3 mb-4 text-[#0A2647]">
            Keuntungan yang{" "}
            <span className="text-[#2873B6]">Tak Terbatas</span>
            <br />
            Untuk Setiap Transaksi
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Nikmati berbagai kemudahan dan keuntungan eksklusif saat menggunakan
            layanan gadai BPKB mobil di{" "}
            <span className="font-semibold text-[#2873B6]">SERRA.ID</span>
          </p>
        </div>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-[#E3EDF7] shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                  idx % 2 === 0
                    ? "bg-gradient-to-br from-[#2873B6] to-[#3C8DD4]"
                    : "bg-gradient-to-br from-[#E78F00] to-[#F3A93F]"
                }`}
              >
                <benefit.icon className="w-7 h-7 text-white" />
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold mb-2 text-[#0A2647]">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
