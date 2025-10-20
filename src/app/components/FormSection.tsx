"use client";

import React, { useState } from 'react';
import { Car, User, Phone, Calendar, DollarSign, MapPin, FileText, Shield, Lock } from 'lucide-react';

export default function FormSection() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        city: '',
        carBrand: '',
        carType: '',
        carYear: '',
        loanAmount: '',
        tenor: '24',
        message: ''
    });

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const waMessage = `*Pengajuan Gadai BPKB Mobil*

            Nama: ${formData.name}
            No. HP: ${formData.phone}
            Email: ${formData.email}
            Kota: ${formData.city}

            *Data Kendaraan:*
            Merk: ${formData.carBrand}
            Tipe: ${formData.carType}
            Tahun: ${formData.carYear}

            Jumlah Pinjaman: ${formData.loanAmount}
            Tenor: ${formData.tenor} Bulan

            Pesan: ${formData.message || '-'}`;

        const encodedMessage = encodeURIComponent(waMessage.trim());
        const whatsappNumber = '6281234567890';

        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    };

    const requirements = [
        "KTP Pemohon & Pasangan (jika sudah menikah)",
        "Kartu Keluarga",
        "STNK Mobil",
        "BPKB Mobil"
    ];

    const steps = [
        {
            number: "1",
            title: "Isi Formulir Pengajuan",
            description: "Lengkapi data dasar secara online, hanya butuh beberapa menit."
        },
        {
            number: "2",
            title: "Verifikasi Dokumen",
            description: "Tim kami akan mengonfirmasi dan memverifikasi berkas Anda."
        },
        {
            number: "3",
            title: "Pencairan Dana",
            description: "Dana cair ke rekening Anda dengan cepat setelah disetujui."
        }
    ];

    return (
        <section id="form" className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16">
                    <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
                        — Form Pengajuan —
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                        Dapatkan dana cepat dengan<br />
                        jaminan <span className="text-blue-600">BPKB</span> kendaraan Anda
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Proses mudah, transparan, dan pencairan hanya dalam hitungan jam.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    <div className="order-2 lg:order-1">
                        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100">
                            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-200">
                                <div className="bg-blue-100 p-3 rounded-xl">
                                    <FileText className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800">Form Pengajuan Pinjaman</h3>
                                    <p className="text-gray-600 text-sm">Lengkapi data di bawah ini</p>
                                </div>
                            </div>

                            <div className="space-y-6">

                                <div>
                                    <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                                        <User className="w-4 h-4 text-blue-600" />
                                        Nama Lengkap *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                        placeholder="Masukkan nama lengkap"
                                    />
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                                            <Phone className="w-4 h-4 text-blue-600" />
                                            No. HP / WhatsApp *
                                        </label>
                                        <input
                                            type="tel"
                                            required
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                            placeholder="08xxxxxxxxxx"
                                        />
                                    </div>

                                    <div>
                                        <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                                            <FileText className="w-4 h-4 text-blue-600" />
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                            placeholder="email@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                                        <MapPin className="w-4 h-4 text-blue-600" />
                                        Kota / Kabupaten *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.city}
                                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                        placeholder="Jakarta, Bandung, Surabaya, dll"
                                    />
                                </div>

                                <div className="pt-4 border-t border-gray-200">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Car className="w-5 h-5 text-blue-600" />
                                        <h4 className="font-bold text-gray-800">Data Kendaraan</h4>
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2">
                                            Merk Mobil *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.carBrand}
                                            onChange={(e) => setFormData({ ...formData, carBrand: e.target.value })}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                            placeholder="Toyota, Honda, dll"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2">
                                            Tipe Mobil *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.carType}
                                            onChange={(e) => setFormData({ ...formData, carType: e.target.value })}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                            placeholder="Avanza, CRV, dll"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                                        <Calendar className="w-4 h-4 text-blue-600" />
                                        Tahun Mobil *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.carYear}
                                        onChange={(e) => setFormData({ ...formData, carYear: e.target.value })}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                        placeholder="2020"
                                    />
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                                            <DollarSign className="w-4 h-4 text-blue-600" />
                                            Jumlah Pinjaman *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.loanAmount}
                                            onChange={(e) => setFormData({ ...formData, loanAmount: e.target.value })}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                            placeholder="Rp 50.000.000"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2">
                                            Tenor *
                                        </label>
                                        <select
                                            required
                                            value={formData.tenor}
                                            onChange={(e) => setFormData({ ...formData, tenor: e.target.value })}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
                                        >
                                            <option value="12">12 Bulan</option>
                                            <option value="24">24 Bulan</option>
                                            <option value="36">36 Bulan</option>
                                            <option value="48">48 Bulan</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2">
                                        Pesan / Catatan (Opsional)
                                    </label>
                                    <textarea
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        rows={4}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
                                        placeholder="Ceritakan kebutuhan Anda..."
                                    />
                                </div>

                                <button
                                    onClick={handleSubmit}
                                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    <Phone className="w-5 h-5" />
                                    Kirim via WhatsApp
                                </button>

                                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                                    <Lock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <p className="text-sm text-gray-700">
                                        <span className="font-semibold">Keamanan dan Kerahasiaan data Anda prioritas kami.</span> Dengan mengajukan, Anda menyetujui syarat dan ketentuan yang berlaku.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 space-y-8">

                        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                            <h3 className="text-2xl font-bold mb-6 text-gray-800">
                                Cukup Siapkan <span className="text-blue-600">4 Dokumen</span> untuk Proses Awal
                            </h3>
                            <div className="space-y-4">
                                {requirements.map((req, index) => (
                                    <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                                        <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                                            {index + 1}
                                        </div>
                                        <p className="text-gray-700 font-medium pt-1">{req}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg p-8 text-white">
                            <h3 className="text-2xl font-bold mb-6">
                                Alur Pengajuan yang Mudah & Cepat
                            </h3>
                            <div className="space-y-6">
                                {steps.map((step, index) => (
                                    <div key={index} className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center font-bold text-xl border-2 border-white/30">
                                            {step.number}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">{step.title}</h4>
                                            <p className="text-blue-100 text-sm leading-relaxed">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                            <div className="flex items-center justify-center gap-4 mb-4">
                                <Shield className="w-12 h-12 text-green-600" />
                                <Lock className="w-12 h-12 text-blue-600" />
                            </div>
                            <p className="text-center text-gray-700 font-semibold">
                                Data Anda Dilindungi dengan Enkripsi SSL
                            </p>
                            <p className="text-center text-gray-600 text-sm mt-2">
                                Terdaftar & diawasi OJK
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}