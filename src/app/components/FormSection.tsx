"use client";

import React, { useState, useEffect } from "react";
import { User, Phone, MapPin, Calendar, Car, Lock, Shield } from "lucide-react";

export default function FormSection() {
    const [provinces, setProvinces] = useState<{ id: string; name: string }[]>([]);
    const [cities, setCities] = useState<{ id: string; name: string }[]>([]);
    const [selectedProvince, setSelectedProvince] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        province: "",
        city: "",
        carBrand: "",
        carType: "",
        carYear: "",
    });

    useEffect(() => {
        fetch("https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json")
            .then((res) => res.json())
            .then(setProvinces)
            .catch(() => console.error("Gagal memuat provinsi"));
    }, []);

    useEffect(() => {
        if (!selectedProvince) return;
        fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${selectedProvince}.json`)
            .then((res) => res.json())
            .then(setCities)
            .catch(() => console.error("Gagal memuat kota"));
    }, [selectedProvince]);

    const years = Array.from({ length: 2025 - 2006 + 1 }, (_, i) => (2006 + i).toString());

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/pengajuan", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (!res.ok) throw new Error("Gagal mengirim data");
            alert("Pengajuan berhasil dikirim!");
        } catch {
            alert("Terjadi kesalahan, coba lagi nanti.");
        }
    };

    return (
        <section className="py-12 px-4 bg-gradient-to-b from-white via-blue-50/30 to-white">
            <div className="max-w-4xl mx-auto">
                {/* CARD FORM */}
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-10">
                    <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
                        Ajukan Dana dengan <span className="text-blue-700">BPKB Mobil</span>
                    </h2>

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
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
                                placeholder="Masukkan nama lengkap"
                            />
                        </div>

                        {/* HP */}
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
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
                                placeholder="08xxxxxxxxxx"
                            />
                        </div>

                        {/* Provinsi */}
                        <div>
                            <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                                <MapPin className="w-4 h-4 text-blue-600" />
                                Provinsi *
                            </label>
                            <select
                                required
                                value={formData.province}
                                onChange={(e) => {
                                    setFormData({ ...formData, province: e.target.value, city: "" });
                                    setSelectedProvince(e.target.value);
                                }}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
                            >
                                <option value="">Pilih Provinsi</option>
                                {provinces.map((prov) => (
                                    <option key={prov.id} value={prov.id}>
                                        {prov.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Kota */}
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Kota / Kabupaten *</label>
                            <select
                                required
                                value={formData.city}
                                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
                            >
                                <option value="">Pilih Kota / Kabupaten</option>
                                {cities.map((city) => (
                                    <option key={city.id} value={city.name}>
                                        {city.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Kendaraan */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Merk Mobil *"
                                required
                                value={formData.carBrand}
                                onChange={(e) => setFormData({ ...formData, carBrand: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Tipe Mobil *"
                                required
                                value={formData.carType}
                                onChange={(e) => setFormData({ ...formData, carType: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>

                        {/* Tahun */}
                        <div>
                            <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                                <Calendar className="w-4 h-4 text-blue-600" />
                                Tahun Mobil *
                            </label>
                            <select
                                required
                                value={formData.carYear}
                                onChange={(e) => setFormData({ ...formData, carYear: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
                            >
                                <option value="">Pilih Tahun</option>
                                {years.map((y) => (
                                    <option key={y} value={y}>
                                        {y}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-[#2873B9] to-[#1D4ED8] text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300"
                        >
                            Kirim Pengajuan
                        </button>

                        {/* Secure Notice */}
                        <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100 mt-6">
                            <Lock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-gray-700">
                                <span className="font-semibold">Data Anda terjamin aman.</span> Informasi dikirim dengan enkripsi SSL
                                untuk melindungi privasi Anda.
                            </p>
                        </div>
                    </form>
                </div>

                {/* Secure Bottom Section */}
                <div className="mt-12 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-6 text-center shadow-inner">
                    <div className="flex justify-center gap-4 mb-3">
                        <Shield className="w-10 h-10 text-green-600" />
                        <Lock className="w-10 h-10 text-blue-600" />
                    </div>
                    <p className="text-gray-800 font-semibold text-lg">
                        Situs ini dilindungi oleh sistem keamanan berlapis dan enkripsi data modern.
                    </p>
                    <p className="text-gray-600 text-sm mt-1">Privasi dan keamanan Anda adalah prioritas utama kami.</p>
                </div>
            </div>
        </section>
    );
}
