"use client";

import React from 'react';
import { Check, Users, Shield } from 'lucide-react';

export default function WhyChooseUsSection() {
    const features = [
        {
            title: "Aman, Legal & Terpercaya",
            desc: "Legalitas terjamin dan sesuai regulasi pemerintah"
        },
        {
            title: "Enkripsi Data SSL 256-bit",
            desc: "Data pribadi terproteksi dengan teknologi terkini"
        },
        {
            title: "Transparansi Biaya",
            desc: "Tidak ada biaya tersembunyi, semua jelas tertulis"
        }
    ];

    return (
        <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-8 sm:p-12 shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="text-white">
                            <span className="text-blue-200 font-semibold">— Kenapa SERRA.ID? —</span>
                            <h2 className="text-4xl font-bold mt-3 mb-6">
                                Jaga Uang Anda Tetap <span className="text-blue-200">Aman</span> Selamanya
                            </h2>
                            <p className="text-blue-100 mb-8 leading-relaxed">
                                Aman, resmi, dan terpercaya. Kami bermitra dengan lembaga pembiayaan berizin OJK untuk memastikan seluruh proses dan data Anda terlindungi dengan baik.
                            </p>

                            <div className="space-y-4">
                                {features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <Check className="w-4 h-4 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1">{feature.title}</h4>
                                            <p className="text-blue-100 text-sm">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                                <div className="bg-white rounded-xl p-6 shadow-lg mb-4">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-10 h-10 bg-blue-100 rounded-full"></div>
                                            <div>
                                                <div className="font-semibold">Ahmad Rizki</div>
                                                <div className="text-sm text-gray-500">Jakarta</div>
                                            </div>
                                        </div>
                                        <div className="text-green-600 font-semibold">✓ Verified</div>
                                    </div>
                                    <div className="text-2xl font-bold text-gray-900 mb-2">Rp 75.000.000</div>
                                    <div className="text-sm text-gray-600 mb-4">Approved Amount</div>
                                    <div className="bg-gray-100 rounded-lg p-3">
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="text-gray-600">Tenor</span>
                                            <span className="font-semibold">24 Bulan</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">Bunga</span>
                                            <span className="font-semibold">1.2% / bulan</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center border border-white/30">
                                        <Users className="w-6 h-6 text-white mx-auto mb-2" />
                                        <div className="text-2xl font-bold text-white">10K+</div>
                                        <div className="text-blue-100 text-sm">Nasabah</div>
                                    </div>
                                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center border border-white/30">
                                        <Shield className="w-6 h-6 text-white mx-auto mb-2" />
                                        <div className="text-2xl font-bold text-white">100%</div>
                                        <div className="text-blue-100 text-sm">Aman</div>
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