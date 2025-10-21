"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Car, User, Phone, MapPin, FileText, X } from "lucide-react";

export default function FormModal({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        provinceId: "",
        cityId: "",
        carBrand: "",
        carType: "",
        carYear: "",
    });

    const [provinces, setProvinces] = useState<{ id: string; name: string }[]>([]);
    const [cities, setCities] = useState<{ id: string; name: string }[]>([]);
    const [loadingCities, setLoadingCities] = useState(false);

    // Ambil daftar provinsi (API Emsifa)
    useEffect(() => {
        const fetchProvinces = async () => {
            try {
                const res = await fetch(
                    "https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json"
                );
                if (!res.ok) throw new Error("Gagal ambil provinsi");
                const data = await res.json();
                setProvinces(data.map((p: any) => ({ id: p.id, name: p.name })));
            } catch (err) {
                console.error(err);
            }
        };
        fetchProvinces();
    }, []);

    // Ambil kota berdasarkan provinsi
    useEffect(() => {
        if (!formData.provinceId) {
            setCities([]);
            return;
        }
        const fetchCities = async () => {
            setLoadingCities(true);
            try {
                const res = await fetch(
                    `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${formData.provinceId}.json`
                );
                if (!res.ok) throw new Error("Gagal ambil kota");
                const data = await res.json();
                setCities(data.map((c: any) => ({ id: c.id, name: c.name })));
            } catch (err) {
                console.error(err);
            } finally {
                setLoadingCities(false);
            }
        };
        fetchCities();
    }, [formData.provinceId]);

    // Buat opsi tahun mobil (2006–sekarang)
    const currentYear = new Date().getFullYear();
    const yearOptions = Array.from({ length: currentYear - 2006 + 1 }, (_, i) =>
        (2006 + i).toString()
    ).reverse();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/pengajuan", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (!res.ok) throw new Error("Gagal kirim data");
            alert("✅ Pengajuan berhasil dikirim!");
            setFormData({
                name: "",
                phone: "",
                provinceId: "",
                cityId: "",
                carBrand: "",
                carType: "",
                carYear: "",
            });
            onClose();
        } catch (err) {
            console.error(err);
            alert("❌ Terjadi kesalahan saat mengirim data");
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
                                <h3 className="text-2xl font-bold text-gray-800">
                                    Form Pengajuan Pinjaman
                                </h3>
                                <p className="text-gray-600 text-sm">Lengkapi data di bawah ini</p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Nama */}
                            <div>
                                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                                    <User className="w-4 h-4 text-blue-600" />
                                    Nama Lengkap *
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                                    placeholder="Masukkan nama lengkap"
                                />
                            </div>

                            {/* Nomor HP */}
                            <div>
                                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                                    <Phone className="w-4 h-4 text-blue-600" />
                                    No. HP / WhatsApp *
                                </label>
                                <input
                                    type="tel"
                                    required
                                    value={formData.phone}
                                    onChange={(e) =>
                                        setFormData({ ...formData, phone: e.target.value })
                                    }
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                                    placeholder="08xxxxxxxxxx"
                                />
                            </div>

                            {/* Provinsi & Kota */}
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                                        <MapPin className="w-4 h-4 text-blue-600" />
                                        Provinsi *
                                    </label>
                                    <select
                                        required
                                        value={formData.provinceId}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                provinceId: e.target.value,
                                                cityId: "",
                                            })
                                        }
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                                    >
                                        <option value="">Pilih Provinsi</option>
                                        {provinces.map((prov) => (
                                            <option key={prov.id} value={prov.id}>
                                                {prov.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                                        <MapPin className="w-4 h-4 text-blue-600" />
                                        Kota / Kabupaten *
                                    </label>
                                    <select
                                        required
                                        disabled={!formData.provinceId || loadingCities}
                                        value={formData.cityId}
                                        onChange={(e) =>
                                            setFormData({ ...formData, cityId: e.target.value })
                                        }
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                                    >
                                        <option value="">
                                            {loadingCities
                                                ? "Memuat data..."
                                                : "Pilih Kota / Kabupaten"}
                                        </option>
                                        {cities.map((ct) => (
                                            <option key={ct.id} value={ct.id}>
                                                {ct.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Data Kendaraan */}
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
                                    onChange={(e) =>
                                        setFormData({ ...formData, carBrand: e.target.value })
                                    }
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                                <input
                                    type="text"
                                    placeholder="Tipe Mobil *"
                                    required
                                    value={formData.carType}
                                    onChange={(e) =>
                                        setFormData({ ...formData, carType: e.target.value })
                                    }
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                            </div>

                            {/* Tahun Mobil */}
                            <select
                                required
                                value={formData.carYear}
                                onChange={(e) =>
                                    setFormData({ ...formData, carYear: e.target.value })
                                }
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                            >
                                <option value="">Pilih Tahun Mobil *</option>
                                {yearOptions.map((yr) => (
                                    <option key={yr} value={yr}>
                                        {yr}
                                    </option>
                                ))}
                            </select>

                            {/* Tombol Submit */}
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                            >
                                Kirim Pengajuan
                            </button>

                            {/* Catatan Keamanan */}
                            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 11c.824 0 1.5.676 1.5 1.5S12.824 14 12 14s-1.5-.676-1.5-1.5S11.176 11 12 11z"
                                    />
                                </svg>
                                <p className="text-sm text-gray-700">
                                    <span className="font-semibold">
                                        Keamanan dan kerahasiaan data Anda prioritas kami.
                                    </span>{" "}
                                    Kami bermitra dengan lembaga pembiayaan resmi berizin OJK.
                                </p>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}





