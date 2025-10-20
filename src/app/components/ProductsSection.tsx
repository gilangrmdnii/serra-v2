"use client";

import React from 'react';
import { Car, Clock, Shield, TrendingUp, CheckCircle, Zap, Award, FileText } from 'lucide-react';

export default function ProductsSection() {
    const products = [
        {
            tenor: "12 Bulan",
            actualTenor: "10 Bulan",
            interest: "0.8%",
            features: [
                "Cair tanpa potongan",
                "Proses approval 1 hari",
                "Pencairan hingga 95%",
                "Biaya transparan"
            ],
            recommended: false
        },
        {
            tenor: "24 Bulan",
            actualTenor: "22 Bulan",
            interest: "0.8%",
            features: [
                "Cair tanpa potongan",
                "Proses approval 1 hari",
                "Pencairan hingga 95%",
                "Biaya transparan"
            ],
            recommended: true
        },
        {
            tenor: "36 Bulan",
            actualTenor: "34 Bulan",
            interest: "0.9%",
            features: [
                "Cair tanpa potongan",
                "Proses approval 1 hari",
                "Pencairan hingga 95%",
                "Biaya transparan"
            ],
            recommended: false
        },
        {
            tenor: "48 Bulan",
            actualTenor: "46 Bulan",
            interest: "1.0%",
            features: [
                "Cair tanpa potongan",
                "Proses approval 1 hari",
                "Pencairan hingga 95%",
                "Biaya transparan"
            ],
            recommended: false
        }
    ];

    const benefits = [
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Proses Cepat & Cair Dalam 1x24 Jam",
            description: "Ajukan pinjaman BPKB kendaraan Anda dan cairkan dana hanya dalam 1x24 jam tanpa ribet, transparan, dan aman."
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Bunga Ringan & Cicilan Fleksibel",
            description: "Nikmati cicilan gadai BPKB dengan bunga kompetitif dan tenor yang dapat disesuaikan dengan kebutuhan finansial Anda."
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Aman, Legal & Terdaftar OJK",
            description: "Layanan gadai kendaraan kami diawasi OJK untuk memastikan keamanan, legalitas, dan kenyamanan setiap transaksi."
        },
        {
            icon: <Award className="w-6 h-6" />,
            title: "Jangkauan Luas Seluruh Indonesia",
            description: "Kami melayani gadai BPKB untuk seluruh wilayah Indonesia dengan proses cepat dan terpercaya."
        }
    ];

    const featuresHighlight = [
        {
            icon: <Clock className="w-12 h-12" />,
            title: "Proses Cepat",
            subtitle: "Cair dalam 1x24 jam tanpa ribet."
        },
        {
            icon: <TrendingUp className="w-12 h-12" />,
            title: "Bunga Ringan",
            subtitle: "Cicilan fleksibel dengan bunga kompetitif."
        },
        {
            icon: <Shield className="w-12 h-12" />,
            title: "Aman & Legal",
            subtitle: "Terdaftar resmi dan diawasi OJK."
        }
    ];

    return (
        <section id="products" className="py-20 px-4 bg-gradient-to-b from-white via-blue-50 to-white">
            <div className="max-w-7xl mx-auto">
                {/* Products Cards */}
                <div className="mb-12">
                    <h2 className="text-4xl font-bold text-center mb-4">
                        Simulasi Produk <span className="text-blue-600">Gadai BPKB</span>
                    </h2>
                    <p className="text-center text-gray-600 text-lg mb-12">
                        Pilih tenor dan jumlah pinjaman sesuai kebutuhan Anda. Proses mudah, cepat, dan transparan.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {products.map((product, index) => (
                            <div
                                key={index}
                                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 ${product.recommended ? 'border-blue-500 transform scale-105' : 'border-gray-100'
                                    }`}
                            >
                                {product.recommended && (
                                    <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-1 text-xs font-bold rounded-bl-xl">
                                        POPULER
                                    </div>
                                )}

                                <div className={`p-6 ${product.recommended ? 'bg-gradient-to-br from-blue-50 to-blue-100' : 'bg-gray-50'}`}>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-gray-800 mb-1">{product.tenor}</div>
                                        <div className="text-sm text-gray-600 mb-3">Tenor {product.actualTenor}</div>
                                        <div className="inline-block bg-white px-4 py-2 rounded-full shadow-sm">
                                            <span className="text-blue-600 font-bold text-lg">Bunga {product.interest}</span>
                                            <span className="text-gray-600 text-sm"> /bulan</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <ul className="space-y-3 mb-6">
                                        {product.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm">
                                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <button
                                        onClick={() => document.getElementById('simulator')?.scrollIntoView({ behavior: 'smooth' })}
                                        className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${product.recommended
                                            ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg transform hover:scale-105'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                    >
                                        Hitung Cicilan
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <p className="text-gray-500 text-sm">
                            Biaya & bunga transparan — tanpa biaya tersembunyi, perhitungan jelas, dan suku bunga kompetitif.
                        </p>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-10 text-white text-center shadow-2xl">
                    <div className="max-w-3xl mx-auto">
                        <h3 className="text-3xl md:text-4xl font-bold mb-4">
                            Siap Cairkan Dana Hari Ini?
                        </h3>
                        <p className="text-blue-100 text-lg mb-8">
                            Proses mudah, legal, dan terpercaya. Berpengalaman sejak 1982 dengan mitra terdaftar OJK di seluruh Indonesia.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => document.getElementById('simulator')?.scrollIntoView({ behavior: 'smooth' })}
                                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                            >
                                Simulasi Pinjaman
                            </button>
                            <button
                                onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })}
                                className="bg-blue-800 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-900 transition-all duration-300 border-2 border-white/20"
                            >
                                Ajukan Sekarang →
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}