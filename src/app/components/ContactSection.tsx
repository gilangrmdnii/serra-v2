"use client";

import React from 'react';
import { Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  const contacts = [
    {
      icon: Phone,
      title: "Telepon",
      desc: "Hubungi kami sekarang",
      link: "tel:+6282271151501",
      linkText: "+62 822-7115-1501",
    },
    {
      icon: MapPin,
      title: "Kantor",
      desc: "Kunjungi kantor kami",
      link: "#",
      linkText: "Jakarta Selatan, Indonesia",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gradient-to-b from-white via-blue-50/40 to-blue-100/20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-700 font-semibold tracking-wide uppercase">
            — Hubungi Kami —
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-5 leading-tight drop-shadow-[0_3px_10px_rgba(40,115,182,0.3)]">
            Siap Membantu Anda{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E78F00] to-[#2873B9]">
              24/7
            </span>
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
            Tim customer service kami siap menjawab pertanyaan Anda kapan saja
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contacts.map((contact, idx) => (
            <div
              key={idx}
              className="bg-white/95 backdrop-blur-sm p-10 rounded-3xl shadow-xl hover:shadow-2xl border border-blue-100/60 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 via-blue-500 to-[#E78F00] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                <contact.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {contact.title}
              </h3>
              <p className="text-gray-700 mb-4">{contact.desc}</p>
              <a
                href={contact.link}
                className="text-blue-700 font-semibold hover:text-[#E78F00] transition-colors duration-300"
              >
                {contact.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
