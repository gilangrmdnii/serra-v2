"use client";

import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import FormModal from "./FormModal";

export default function ProductsSection() {
    const [showForm, setShowForm] = useState(false);

    const products = [
        { tenor: "12 Bulan", actualTenor: "10 Bulan", interest: "0.8%", recommended: false },
        { tenor: "24 Bulan", actualTenor: "22 Bulan", interest: "0.8%", recommended: false },
        { tenor: "36 Bulan", actualTenor: "34 Bulan", interest: "0.9%", recommended: false },
        { tenor: "48 Bulan", actualTenor: "46 Bulan", interest: "1.0%", recommended: true },
    ];

    const features = [
        "Cair tanpa potongan",
        "Proses approval 1 hari",
        "Pencairan hingga 95%",
        "Biaya transparan",
    ];

    return (
        <section
            id="products"
            className="py-12 px-4 bg-gradient-to-b from-white via-blue-50/40 to-white"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10 md:mb-14 px-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 
            leading-tight tracking-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.08)]">
                        Simulasi{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E78F00] via-[#3C8DD4] to-[#2873B9]">
                            Gadai BPKB
                        </span>
                    </h2>

                    <p className="text-gray-600 text-base sm:text-lg max-w-xl md:max-w-2xl mx-auto 
            leading-relaxed font-medium">
                        Pilih tenor dan bunga sesuai kebutuhan Anda —{" "}
                        <span className="text-blue-700 font-semibold">proses cepat</span>,{" "}
                        <span className="text-[#E78F00] font-semibold">bunga ringan</span>, dan{" "}
                        <span className="text-blue-700 font-semibold">biaya transparan</span>.
                    </p>
                </div>

                {/* === Cards Grid === */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((p, i) => (
                        <ProductCard
                            key={i}
                            data={p}
                            features={features}
                            onOpenForm={() => setShowForm(true)}
                        />
                    ))}
                </div>

                {/* === Mobile Slider === */}
                <div className="md:hidden overflow-x-auto flex gap-5 snap-x snap-mandatory px-1 pb-4 scrollbar-hide">
                    {products.map((p, i) => (
                        <div
                            key={i}
                            className="snap-center shrink-0 w-[80%] sm:w-[70%]"
                        >
                            <ProductCard
                                data={p}
                                features={features}
                                onOpenForm={() => setShowForm(true)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Form */}
            <FormModal isOpen={showForm} onClose={() => setShowForm(false)} />
        </section>
    );
}

function ProductCard({
    data,
    features,
    onOpenForm,
}: {
    data: {
        tenor: string;
        actualTenor: string;
        interest: string;
        recommended?: boolean;
    };
    features: string[];
    onOpenForm: () => void;
}) {
    return (
        <div
            className={`relative rounded-2xl transition-all duration-300 border shadow-md hover:shadow-xl overflow-hidden
      ${data.recommended
                    ? "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-400"
                    : "bg-white border-gray-200"
                }`}
        >
            {data.recommended && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-1 text-xs font-bold rounded-bl-xl">
                    POPULER
                </div>
            )}

            <div className="p-6">
                <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-gray-900">{data.tenor}</div>
                    <div className="text-sm text-gray-500">Tenor Efektif {data.actualTenor}</div>
                </div>

                <div className="text-center mb-6">
                    <div className="inline-block bg-white rounded-full shadow-sm px-4 py-2 border border-blue-100">
                        <span className="text-blue-600 font-semibold">
                            Bunga {data.interest}
                        </span>
                        <span className="text-gray-600 text-sm"> /bulan</span>
                    </div>
                </div>

                <ul className="space-y-3 mb-6">
                    {features.map((f, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                            {f}
                        </li>
                    ))}
                </ul>

                <button
                    onClick={onOpenForm}
                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${data.recommended
                            ? "bg-gradient-to-r from-[#3C8DD4] to-[#2873B9] text-white hover:shadow-lg hover:scale-105"
                            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                        }`}
                >
                    Ajukan Sekarang
                </button>
            </div>
        </div>
    );
}
