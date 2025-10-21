"use client";

import React from "react";
import { Check, Users, Shield } from "lucide-react";

export default function WhyChooseUsSection() {
  const features = [
    {
      title: "Aman, Legal & Terpercaya",
      desc: "Legalitas terjamin dan sesuai regulasi pemerintah",
    },
    {
      title: "Enkripsi Data SSL 256-bit",
      desc: "Data pribadi terproteksi dengan teknologi terkini",
    },
    {
      title: "Transparansi Biaya",
      desc: "Tidak ada biaya tersembunyi, semua jelas tertulis",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#2873B6] to-[#3C8DD4] rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Accent glow */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#E78F00]/30 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E78F00]/20 blur-[80px] rounded-full" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
            {/* Text side */}
            <div className="text-white">
              <span className="text-[#FFD28B] font-semibold">
                — Kenapa SERRA.ID? —
              </span>
              <h2 className="text-4xl font-bold mt-3 mb-6 leading-snug">
                Jaga Aset & Dana Anda{" "}
                <span className="text-[#FFE3B0]">Tetap Aman</span>
              </h2>
              <p className="text-blue-50/90 mb-8 leading-relaxed max-w-lg">
                Aman, legal, dan terpercaya. Kami bermitra dengan lembaga
                pembiayaan resmi berizin untuk memastikan seluruh proses dan
                data Anda terlindungi sepenuhnya.
              </p>

              <div className="space-y-4">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-7 h-7 bg-[#E78F00] rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-[#E78F00]/40">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-blue-100/80 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right card side */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-lg">
                {/* Simulasi card */}
                <div className="bg-white rounded-xl p-6 shadow-lg mb-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-[#2873B6]/20 rounded-full"></div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          Ahmad Rizki
                        </div>
                        <div className="text-sm text-gray-500">Jakarta</div>
                      </div>
                    </div>
                    <div className="text-[#2873B6] font-semibold">
                      ✓ Verified
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-[#0A2647] mb-2">
                    Rp 75.000.000
                  </div>
                  <div className="text-sm text-gray-600 mb-4">
                    Approved Amount
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Tenor</span>
                      <span className="font-semibold text-gray-800">
                        24 Bulan
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Bunga</span>
                      <span className="font-semibold text-gray-800">
                        1.2% / bulan
                      </span>
                    </div>
                  </div>
                </div>

                {/* Mini stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#2873B6]/20 backdrop-blur-sm rounded-lg p-4 text-center border border-white/30">
                    <Users className="w-6 h-6 text-white mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">10K+</div>
                    <div className="text-blue-100 text-sm">Nasabah</div>
                  </div>
                  <div className="bg-[#E78F00]/30 backdrop-blur-sm rounded-lg p-4 text-center border border-white/30">
                    <Shield className="w-6 h-6 text-white mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-blue-100 text-sm">Keamanan Data</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
