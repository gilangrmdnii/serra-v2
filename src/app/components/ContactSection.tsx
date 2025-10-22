"use client";

import React from "react";
import { Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  const contacts = [
    {
      icon: Phone,
      title: "Telepon",
      desc: "Hubungi kami untuk konsultasi cepat dan ramah.",
      link: "tel:+6282271151501",
      linkText: "+62 822-7115-1501",
    },
    {
      icon: MapPin,
      title: "Kantor",
      desc: "Datang langsung ke kantor kami untuk layanan langsung.",
      link: "#",
      linkText: "Jakarta Selatan, Indonesia",
    },
  ];

  return (
    <section
      id="contact"
      className="py-12 md:py-20 px-4 bg-gradient-to-b from-white via-blue-50/40 to-blue-100/30"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16 px-2">
          <span className="text-blue-700 font-semibold tracking-wide uppercase text-sm md:text-base">
            — Hubungi Kami —
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mt-2 sm:mt-4 mb-3 sm:mb-5 leading-snug sm:leading-tight drop-shadow-[0_3px_8px_rgba(40,115,182,0.25)]">
            Siap Membantu Anda{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E78F00] to-[#2873B9]">
              24/7
            </span>
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-md sm:max-w-2xl mx-auto leading-relaxed">
            Tim kami siap menjawab setiap pertanyaan dan membantu Anda kapan saja
            dibutuhkan.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {contacts.map((contact, idx) => (
            <div
              key={idx}
              className="bg-white p-8 md:p-10 rounded-3xl border border-blue-100/70 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-600 via-blue-500 to-[#E78F00] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                <contact.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                {contact.title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base mb-4">
                {contact.desc}
              </p>
              <a
                href={contact.link}
                className="inline-block text-blue-700 font-semibold hover:text-[#E78F00] transition-colors duration-300"
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
