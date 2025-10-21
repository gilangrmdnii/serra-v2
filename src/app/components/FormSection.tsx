"use client";

import React, { useState, useEffect } from "react";
import { Car, User, Phone, Calendar, MapPin, FileText, Shield, Lock } from "lucide-react";

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

    // Fetch provinsi
    useEffect(() => {
        fetch("https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json")
            .then((res) => res.json())
            .then((data) => setProvinces(data))
            .catch(() => console.error("Gagal memuat provinsi"));
    }, []);

    // Fetch kota
    useEffect(() => {
        if (!selectedProvince) return;
        fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${selectedProvince}.json`)
            .then((res) => res.json())
            .then((data) => setCities(data))
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

    const requirements = [
        "KTP Pemohon & Pasangan (jika sudah menikah)",
        "Kartu Keluarga",
        "STNK Mobil",
        "BPKB Mobil",
    ];

    const steps = [
        { number: "1", title: "Isi Formulir", description: "Lengkapi data dasar secara online dalam beberapa menit." },
        { number: "2", title: "Verifikasi Dokumen", description: "Tim kami akan mengonfirmasi dan memverifikasi berkas Anda." },
        { number: "3", title: "Pencairan Dana", description: "Dana cair ke rekening Anda setelah disetujui." },
    ];

    return (
        <section id="form" className="py-20 px-4 bg-gradient-to-b from-white via-blue-50/30 to-white">
            <div className="max-w-7xl mx-auto">
                {/* HEADER */}
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">— Form Pengajuan —</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-gray-900">
                        Dapatkan Dana Cepat dengan <br />
                        Jaminan <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E78F00] via-[#3C8DD4] to-[#2873B9]">
                            BPKB Mobil
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Proses mudah, transparan, dan pencairan dalam hitungan jam.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* === FORM === */}
                    <div className="order-2 lg:order-1">
                        <div className="bg-gray-50 rounded-3xl shadow-xl p-8 md:p-10 border border-gray-200">
                            <div className="flex items-center gap-3 mb-8 pb-5 border-b border-gray-200">
                                <div className="bg-blue-100 p-3 rounded-xl">
                                    <FileText className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800">Form Pengajuan</h3>
                                    <p className="text-gray-600 text-sm">Lengkapi data di bawah ini</p>
                                </div>
                            </div>

                            <form className="space-y-6" onSubmit={handleSubmit}>
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
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-100 focus:ring-2 focus:ring-blue-500 outline-none"
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
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-100 focus:ring-2 focus:ring-blue-500 outline-none"
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
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-100 focus:ring-2 focus:ring-blue-500 outline-none"
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
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-100 focus:ring-2 focus:ring-blue-500 outline-none"
                                    >
                                        <option value="">Pilih Kota / Kabupaten</option>
                                        {cities.map((city) => (
                                            <option key={city.id} value={city.name}>
                                                {city.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Data kendaraan */}
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
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-100 focus:ring-2 focus:ring-blue-500 outline-none"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Tipe Mobil *"
                                        required
                                        value={formData.carType}
                                        onChange={(e) => setFormData({ ...formData, carType: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-100 focus:ring-2 focus:ring-blue-500 outline-none"
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
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-100 focus:ring-2 focus:ring-blue-500 outline-none"
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
                                    className="w-full bg-gradient-to-r from-[#2873B9] to-[#1D4ED8] text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                                >
                                    Kirim Pengajuan
                                </button>

                                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                                    <Lock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <p className="text-sm text-gray-700">
                                        <span className="font-semibold">Keamanan data Anda terjamin.</span> Dengan mengajukan, Anda menyetujui syarat & ketentuan kami.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* === KANAN === */}
                    <div className="order-1 lg:order-2 space-y-8">
                        {/* Dokumen */}
                        <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-200">
                            <h3 className="text-2xl font-bold mb-6 text-gray-800">
                                Cukup Siapkan <span className="text-blue-600">4 Dokumen</span> Ini
                            </h3>
                            <div className="space-y-4">
                                {requirements.map((req, i) => (
                                    <div key={i} className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                                        <div className="w-8 h-8 bg-[#E78F00] text-white rounded-full flex items-center justify-center font-bold text-sm">
                                            {i + 1}
                                        </div>
                                        <p className="text-gray-700 font-medium">{req}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Steps */}
                        <div className="bg-gradient-to-br from-[#2873B9] to-[#1D4ED8] rounded-2xl shadow-xl p-8 text-white">
                            <h3 className="text-2xl font-bold mb-6">Alur Pengajuan Mudah & Cepat</h3>
                            <div className="space-y-6">
                                {steps.map((s) => (
                                    <div key={s.number} className="flex gap-4">
                                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-bold text-xl border border-white/30">
                                            {s.number}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lg mb-1">{s.title}</h4>
                                            <p className="text-blue-100 text-sm">{s.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Keamanan */}
                        <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-200">
                            <div className="flex items-center justify-center gap-4 mb-4">
                                <Shield className="w-12 h-12 text-green-600" />
                                <Lock className="w-12 h-12 text-blue-600" />
                            </div>
                            <p className="text-center text-gray-700 font-semibold">
                                Data Anda Dilindungi dengan Enkripsi SSL
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
