"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Car, User, Phone, Calendar, DollarSign, MapPin, FileText, Shield, Lock, X
} from "lucide-react";

export default function FormModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        city: "",
        carBrand: "",
        carType: "",
        carYear: "",
        loanAmount: "",
        tenor: "24",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/pengajuan", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error("Gagal mengirim data");
            alert("Pengajuan berhasil dikirim!");
        } catch (err) {
            console.error(err);
            alert("Terjadi kesalahan, coba lagi nanti.");
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="relative w-full max-w-3xl bg-white text-gray-800 rounded-3xl shadow-2xl p-8 md:p-10 overflow-y-auto max-h-[90vh]"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        transition={{ type: "spring", damping: 20, stiffness: 300 }}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-200">
                            <div className="bg-blue-100 p-3 rounded-xl">
                                <FileText className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800">Form Pengajuan Pinjaman</h3>
                                <p className="text-gray-600 text-sm">Lengkapi data di bawah ini</p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
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
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
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
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
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
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
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
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
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
                                <input
                                    type="text"
                                    placeholder="Merk Mobil *"
                                    required
                                    value={formData.carBrand}
                                    onChange={(e) => setFormData({ ...formData, carBrand: e.target.value })}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                                <input
                                    type="text"
                                    placeholder="Tipe Mobil *"
                                    required
                                    value={formData.carType}
                                    onChange={(e) => setFormData({ ...formData, carType: e.target.value })}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Tahun Mobil *"
                                    required
                                    value={formData.carYear}
                                    onChange={(e) => setFormData({ ...formData, carYear: e.target.value })}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                                <input
                                    type="text"
                                    placeholder="Jumlah Pinjaman *"
                                    required
                                    value={formData.loanAmount}
                                    onChange={(e) => setFormData({ ...formData, loanAmount: e.target.value })}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                            </div>

                            <div>
                                <select
                                    required
                                    value={formData.tenor}
                                    onChange={(e) => setFormData({ ...formData, tenor: e.target.value })}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                                >
                                    <option value="12">12 Bulan</option>
                                    <option value="24">24 Bulan</option>
                                    <option value="36">36 Bulan</option>
                                    <option value="48">48 Bulan</option>
                                </select>
                            </div>

                            <textarea
                                rows={4}
                                placeholder="Pesan / Catatan (Opsional)"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                            />

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <Phone className="w-5 h-5" />
                                Kirim via WhatsApp
                            </button>

                            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                                <Lock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                <p className="text-sm text-gray-700">
                                    <span className="font-semibold">Keamanan dan kerahasiaan data Anda prioritas kami.</span> Kami bermitra dengan lembaga pembiayaan resmi berizin OJK.
                                </p>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
