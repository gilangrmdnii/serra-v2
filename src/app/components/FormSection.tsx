"use client";

import React, { useState } from 'react';
import { Clock, Shield, FileText, Check } from 'lucide-react';

export default function FormSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    carBrand: '',
    carYear: '',
    loanAmount: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Terima kasih! Tim kami akan segera menghubungi Anda.');
  };

  const features = [
    { icon: Clock, text: "Proses 24 jam" },
    { icon: Shield, text: "Data aman" },
    { icon: FileText, text: "Syarat mudah" },
    { icon: Check, text: "Terpercaya" }
  ];

  return (
    <section id="form" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="px-6 sm:px-12 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Mulai Ajukan Pinjaman<br />dalam 4 Menit Saja
              </h2>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                Isi formulir di bawah ini dan tim kami akan segera menghubungi Anda untuk proses selanjutnya
              </p>
            </div>

            <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Nomor Telepon / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="08xxxxxxxxxx"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Merk Mobil *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.carBrand}
                      onChange={(e) => setFormData({ ...formData, carBrand: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                      placeholder="Toyota, Honda, dll"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Tahun Mobil *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.carYear}
                      onChange={(e) => setFormData({ ...formData, carYear: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                      placeholder="2020"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Jumlah Pinjaman yang Dibutuhkan *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.loanAmount}
                    onChange={(e) => setFormData({ ...formData, loanAmount: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="Rp 50.000.000"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Pesan (Opsional)
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                    placeholder="Ceritakan kebutuhan Anda..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Kirim Pengajuan
                </button>

                <p className="text-center text-gray-600 text-sm">
                  Dengan mengajukan, Anda menyetujui syarat dan ketentuan yang berlaku
                </p>
              </form>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {features.map((feature, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3"
                >
                  <feature.icon className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-white text-sm">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}