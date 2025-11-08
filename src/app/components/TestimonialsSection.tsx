"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

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
      className="py-12 px-6 bg-gradient-to-b from-white via-blue-50/40 to-blue-100/30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16 px-3">
          <span className="text-blue-700 font-semibold uppercase tracking-wide text-sm sm:text-base">
            — Testimoni —
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mt-2 sm:mt-4 mb-3 sm:mb-5 leading-snug sm:leading-tight drop-shadow-[0_3px_8px_rgba(40,115,182,0.25)]">
            Apa Kata{" "}
            <span className="bg-clip-text text-[#1E3A8A] font-semibold">
              Nasabah
            </span>{" "}
            Kami?
          </h2>

          <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-md sm:max-w-2xl mx-auto leading-relaxed">
            Ribuan nasabah telah mempercayai{" "}
            <span className="text-blue-700 font-semibold">SERRA.ID</span> sebagai
            solusi keuangan yang aman, cepat, dan transparan.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white/95 backdrop-blur-sm border border-blue-100/60 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-[#E78F00] fill-current drop-shadow-[0_1px_3px_rgba(231,143,0,0.5)]"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                “{testimonial.text}”
              </p>
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
            </motion.div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div
          ref={scrollRef}
          className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-5 px-4 pb-4 scrollbar-hide scroll-smooth"
        >
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="w-[88%] flex-shrink-0 bg-white/95 border border-blue-100/60 p-6 rounded-3xl shadow-lg snap-center mx-auto"
            >
              <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-[#E78F00] fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-5 leading-relaxed italic text-sm">
                “{testimonial.text}”
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-[#E78F00] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-base">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicators */}
        <div className="flex md:hidden justify-center mt-6 space-x-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className="w-2.5 h-2.5 rounded-full bg-blue-300 opacity-70"
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
