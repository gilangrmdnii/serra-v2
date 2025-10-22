"use client";

import { motion } from "framer-motion";
import {
    FileText,
    IdCard,
    Car,
    Users,
} from "lucide-react";

export default function InfoDokumenSection() {
    const dokumen = [
        {
            icon: <IdCard className="w-6 h-6 text-sky-700" />,
            title: "KTP Pemohon & Pasangan",
            desc: "(jika sudah menikah)",
        },
        {
            icon: <Users className="w-6 h-6 text-sky-700" />,
            title: "Kartu Keluarga",
        },
        {
            icon: <Car className="w-6 h-6 text-sky-700" />,
            title: "STNK Mobil",
        },
        {
            icon: <FileText className="w-6 h-6 text-sky-700" />,
            title: "BPKB Mobil",
        },
    ];

    return (
        <section className="relative py-12 bg-gradient-to-br from-sky-50 via-white to-blue-50 overflow-hidden">
            <div className="container mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-sky-900 mb-6 sm:mb-10 leading-snug text-center px-3"
                >
                    Cukup Siapkan{" "}
                    <span className="text-blue-600">4 Dokumen</span>{" "}
                    <span className="block sm:inline">untuk Proses Awal</span>
                </motion.h2>

                {/* List Dokumen */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-3xl mx-auto"
                >
                    {dokumen.map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="flex flex-col items-center text-center bg-white/90 border border-blue-100 px-5 py-6 rounded-2xl shadow-sm hover:shadow-md hover:bg-blue-50/50 transition-all"
                        >
                            <div className="bg-blue-100 w-9 h-9 flex items-center justify-center rounded-full font-semibold text-blue-700 mb-3 shadow-inner">
                                {i + 1}
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                {item.icon}
                                <h4 className="font-medium text-sky-900 text-sm md:text-base leading-snug">
                                    {item.title}
                                </h4>
                                {item.desc && (
                                    <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Garis pemisah */}
                <div className="relative mt-16">
                    <div className="h-[2px] w-2/3 bg-gradient-to-r from-sky-200 via-blue-300 to-blue-400 mx-auto rounded-full shadow" />
                </div>
            </div>

            {/* Decorative blur */}
            <div className="absolute -top-20 left-0 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-sky-300/30 rounded-full blur-3xl -z-10" />
        </section>
    );
}
