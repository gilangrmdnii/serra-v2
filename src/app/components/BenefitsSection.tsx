"use client";

import React from 'react';
import { Clock, Shield, DollarSign, FileText, Users, TrendingUp } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Clock,
      title: "Proses Cepat",
      desc: "Pencairan dana dalam 24 jam setelah verifikasi dokumen lengkap"
    },
    {
      icon: Shield,
      title: "Aman & Terpercaya",
      desc: "Bermitra dengan lembaga pembiayaan resmi berizin OJK dan bank ternama"
    },

    {
      icon: DollarSign,
      title: "Bunga Rendah",
      desc: "Suku bunga kompetitif mulai dari 1.2% per bulan flat"
    },
    {
      icon: FileText,
      title: "Syarat Mudah",
      desc: "Hanya dengan BPKB mobil dan KTP, tanpa BI checking"
    },
    {
      icon: Users,
      title: "Pelayanan 24/7",
      desc: "Customer service siap membantu Anda kapan saja"
    },
    {
      icon: TrendingUp,
      title: "Plafon Tinggi",
      desc: "Pinjaman hingga 80% dari nilai taksiran mobil Anda"
    }
  ];

  return (
    <section id="benefits" className="py-16 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold">— Keuntungan —</span>
          <h2 className="text-4xl font-bold mt-3 mb-4">
            Keuntungan yang <span className="text-blue-600">Tak Terbatas</span><br />
            Untuk Setiap Transaksi
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nikmati berbagai kemudahan dan keuntungan eksklusif saat menggunakan layanan gadai BPKB mobil di SERRA.ID
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}