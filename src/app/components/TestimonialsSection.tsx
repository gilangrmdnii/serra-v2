"use client";

import React from "react";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Budi Santoso",
      role: "Pengusaha UMKM",
      rating: 5,
      text: "Proses sangat cepat! Dana cair dalam sehari dan pelayanannya sangat memuaskan. Recommended!",
    },
    {
      name: "Siti Aminah",
      role: "Ibu Rumah Tangga",
      rating: 5,
      text: "Sangat membantu untuk kebutuhan mendesak. Prosesnya mudah dan bunga lebih rendah dari tempat lain.",
    },
    {
      name: "Andi Wijaya",
      role: "Freelancer",
      rating: 5,
      text: "Pelayanan ramah dan profesional. Mobil tetap bisa dipakai selama masa pinjaman. Mantap!",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 px-4 bg-gradient-to-b from-white via-blue-50/40 to-blue-100/30"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-700 font-semibold uppercase tracking-wide">
            — Testimoni —
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-5 leading-tight drop-shadow-[0_3px_10px_rgba(40,115,182,0.3)]">
            Apa Kata{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E78F00] to-[#2873B9]">
              Nasabah
            </span>{" "}
            Kami?
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
            Ribuan nasabah telah mempercayai{" "}
            <span className="text-blue-700 font-semibold">SERRA.ID</span> untuk
            solusi keuangan mereka.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white/95 backdrop-blur-sm border border-blue-100/60 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex items-center mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-[#E78F00] fill-current drop-shadow-[0_1px_3px_rgba(231,143,0,0.5)]"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                “{testimonial.text}”
              </p>

              {/* User Info */}
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-[#E78F00] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
