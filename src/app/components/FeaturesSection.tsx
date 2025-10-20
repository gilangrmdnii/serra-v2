"use client";

import React from 'react';

export default function FeaturesSection() {
  const features = [
    { title: "Start-ups", desc: "Solusi pendanaan cepat untuk mengembangkan bisnis startup Anda" },
    { title: "Freelancers", desc: "Dapatkan modal kerja tanpa ribet untuk proyek freelance Anda" },
    { title: "UMKM", desc: "Pinjaman modal usaha dengan proses yang simpel dan cepat" },
    { title: "Kebutuhan Pribadi", desc: "Dana tunai untuk berbagai kebutuhan mendesak Anda" }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold">— Solusi Keuangan Terbaik —</span>
          <h2 className="text-4xl font-bold mt-3 mb-4">
            Dapatkan Dana dengan <span className="text-blue-600">Mudah</span><br />
            Untuk Berbagai Kebutuhan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            SERRA.ID memberikan solusi pinjaman dana tunai yang fleksibel dan cepat untuk memenuhi berbagai kebutuhan finansial Anda
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                idx === 1 
                  ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white' 
                  : 'bg-white'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                idx === 1 ? 'bg-white/20' : 'bg-blue-100'
              }`}>
                <div className={`w-6 h-6 rounded-full ${
                  idx === 1 ? 'bg-white' : 'bg-blue-600'
                }`}></div>
              </div>
              <h3 className={`text-xl font-bold mb-2 ${
                idx === 1 ? 'text-white' : 'text-gray-900'
              }`}>
                {feature.title}
              </h3>
              <p className={idx === 1 ? 'text-blue-100' : 'text-gray-600'}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}