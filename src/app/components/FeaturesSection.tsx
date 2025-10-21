"use client";

import React from "react";

export default function FeaturesSection() {
  const features = [
    { title: "Start-ups", desc: "Solusi pendanaan cepat untuk mengembangkan bisnis startup Anda" },
    { title: "Freelancers", desc: "Dapatkan modal kerja tanpa ribet untuk proyek freelance Anda" },
    { title: "UMKM", desc: "Pinjaman modal usaha dengan proses yang simpel dan cepat" },
    { title: "Kebutuhan Pribadi", desc: "Dana tunai untuk berbagai kebutuhan mendesak Anda" },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#F9FAFB] via-white to-[#EFF6FB]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#E78F00] font-semibold tracking-wide uppercase">
            — Solusi Keuangan Terbaik —
          </span>
          <h2 className="text-4xl font-bold mt-3 mb-4 text-[#0A2647]">
            Dapatkan Dana dengan{" "}
            <span className="text-[#2873B6]">Mudah</span>
            <br />
            Untuk Berbagai Kebutuhan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            SERRA.ID memberikan solusi pinjaman dana tunai yang fleksibel dan cepat untuk memenuhi berbagai kebutuhan finansial Anda
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                idx === 1
                  ? "bg-gradient-to-br from-[#2873B6] to-[#3C8DD4] text-white"
                  : "bg-white border border-[#E6EEF7]"
              }`}
            >
              {/* Icon Circle */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  idx === 1
                    ? "bg-white/20"
                    : "bg-[#E8F2FB] border border-[#C7E0F5]"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full ${
                    idx === 1 ? "bg-[#E78F00]" : "bg-[#2873B6]"
                  }`}
                ></div>
              </div>

              {/* Title */}
              <h3
                className={`text-xl font-bold mb-2 ${
                  idx === 1 ? "text-white" : "text-[#0A2647]"
                }`}
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p
                className={
                  idx === 1 ? "text-[#D8E7F9]" : "text-gray-600"
                }
              >
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
