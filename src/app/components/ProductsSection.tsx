"use client";

import React from "react";
import { CheckCircle, Zap, TrendingUp, Shield, Award, Clock } from "lucide-react";

export default function ProductsSection() {
  const products = [
    {
      tenor: "12 Bulan",
      actualTenor: "10 Bulan",
      interest: "0.8%",
      recommended: false,
    },
    {
      tenor: "24 Bulan",
      actualTenor: "22 Bulan",
      interest: "0.8%",
      recommended: false,
    },
    {
      tenor: "36 Bulan",
      actualTenor: "34 Bulan",
      interest: "0.9%",
      recommended: false,
    },
    {
      tenor: "48 Bulan",
      actualTenor: "46 Bulan",
      interest: "1.0%",
      recommended: true,
    },
  ];

  const features = [
    "Cair tanpa potongan",
    "Proses approval 1 hari",
    "Pencairan hingga 95%",
    "Biaya transparan",
  ];

  const highlights = [
    { icon: <Clock className="w-12 h-12 text-blue-500" />, title: "Proses Cepat", subtitle: "Cair 1x24 jam tanpa ribet." },
    { icon: <TrendingUp className="w-12 h-12 text-blue-500" />, title: "Bunga Ringan", subtitle: "Cicilan fleksibel & ringan." },
    { icon: <Shield className="w-12 h-12 text-blue-500" />, title: "Aman & Legal", subtitle: "Mitra resmi & diawasi OJK." },
  ];

  return (
    <section id="products" className="py-20 px-4 bg-gradient-to-b from-white via-blue-50/40 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
            Simulasi Produk{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E78F00] via-[#3C8DD4] to-[#2873B9]">
              Gadai BPKB
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            Pilih tenor dan bunga sesuai kebutuhan Anda — proses cepat, bunga ringan, dan transparan.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {products.map((p, i) => (
            <div
              key={i}
              className={`relative rounded-2xl transition-all duration-300 border shadow-md hover:shadow-xl overflow-hidden
              ${
                p.recommended
                  ? "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-400"
                  : "bg-white border-gray-200"
              }`}
            >
              {p.recommended && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-1 text-xs font-bold rounded-bl-xl">
                  POPULER
                </div>
              )}
              <div className="p-6">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-gray-900">{p.tenor}</div>
                  <div className="text-sm text-gray-500">Tenor Efektif {p.actualTenor}</div>
                </div>
                <div className="text-center mb-6">
                  <div className="inline-block bg-white rounded-full shadow-sm px-4 py-2 border border-blue-100">
                    <span className="text-blue-600 font-semibold">Bunga {p.interest}</span>
                    <span className="text-gray-600 text-sm"> /bulan</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => document.getElementById("simulator")?.scrollIntoView({ behavior: "smooth" })}
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                    p.recommended
                      ? "bg-gradient-to-r from-[#3C8DD4] to-[#2873B9] text-white hover:shadow-lg hover:scale-105"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  Hitung Cicilan
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Benefit Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-md border border-blue-100 hover:shadow-lg transition"
            >
              {item.icon}
              <h4 className="text-lg font-bold mt-4 text-gray-900">{item.title}</h4>
              <p className="text-gray-600 mt-2">{item.subtitle}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#2873B9] to-[#1D4ED8] rounded-3xl p-10 text-white text-center shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-4 drop-shadow-md">
            Siap Cairkan Dana Hari Ini?
          </h3>
          <p className="text-blue-100 text-lg mb-8">
            Proses cepat, legal, dan terpercaya melalui mitra leasing resmi berizin OJK di seluruh Indonesia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById("simulator")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              Simulasi Pinjaman
            </button>
            <button
              onClick={() => document.getElementById("form")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-[#E78F00] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#d67e00] transition-all border border-white/30"
            >
              Ajukan Sekarang →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
