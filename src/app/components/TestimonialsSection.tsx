"use client";

import React from 'react';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    { 
      name: "Budi Santoso", 
      role: "Pengusaha UMKM", 
      rating: 5, 
      text: "Proses sangat cepat! Dana cair dalam sehari dan pelayanannya sangat memuaskan. Recommended!" 
    },
    { 
      name: "Siti Aminah", 
      role: "Ibu Rumah Tangga", 
      rating: 5, 
      text: "Sangat membantu untuk kebutuhan mendesak. Prosesnya mudah dan bunga lebih rendah dari tempat lain." 
    },
    { 
      name: "Andi Wijaya", 
      role: "Freelancer", 
      rating: 5, 
      text: "Pelayanan ramah dan profesional. Mobil tetap bisa dipakai selama masa pinjaman. Mantap!" 
    }
  ];

  return (
    <section id="testimonials" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold">— Testimoni —</span>
          <h2 className="text-4xl font-bold mt-3 mb-4">
            Apa Kata <span className="text-blue-600">Nasabah</span> Kami?
          </h2>
          <p className="text-gray-600">
            Ribuan nasabah telah mempercayai SERRA.ID untuk solusi keuangan mereka
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">&quot;{testimonial.text}&quot;</p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}