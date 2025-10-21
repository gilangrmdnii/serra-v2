"use client";

import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactSection() {
  const contacts = [
    {
      icon: Phone,
      title: "Telepon",
      desc: "Hubungi kami sekarang",
      link: "tel:+6282271151501",
      linkText: "+62 822-7115-1501"
    },
    {
      icon: MapPin,
      title: "Kantor",
      desc: "Kunjungi kantor kami",
      link: "#",
      linkText: "Jakarta Selatan, Indonesia"
    }
  ];

  return (
    <section id="contact" className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold">— Hubungi Kami —</span>
          <h2 className="text-4xl font-bold mt-3 mb-4">
            Siap Membantu Anda <span className="text-blue-600">24/7</span>
          </h2>
          <p className="text-gray-600">
            Tim customer service kami siap menjawab pertanyaan Anda kapan saja
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contacts.map((contact, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <contact.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{contact.title}</h3>
              <p className="text-gray-600 mb-3">{contact.desc}</p>
              <a 
                href={contact.link} 
                className="text-blue-600 font-semibold hover:text-blue-700"
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