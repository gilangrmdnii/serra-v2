"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

function LoanExample() {
  const pinjaman = 50_000_000;
  const tenor = 12;
  const bunga = 0.0075;
  const angsuran = Math.round((pinjaman * (1 + bunga * tenor)) / tenor);

  const formatRupiah = (num: number) =>
    num.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });

  return (
    <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-100 text-sm">
      <h4 className="font-semibold text-blue-900 mb-2">
        Contoh Simulasi Fasilitas Dana Serra
      </h4>
      <div className="text-gray-800 leading-relaxed space-y-1">
        <p>
          <span className="inline-block w-40">Pinjaman</span>:
          <span className="ml-2 font-semibold">{formatRupiah(pinjaman)}</span>
        </p>
        <p>
          <span className="inline-block w-40">Tenor</span>:
          <span className="ml-2 font-semibold">{tenor} bulan (1 tahun)</span>
        </p>
        <p>
          <span className="inline-block w-40">Bunga per Bulan</span>:
          <span className="ml-2 font-semibold">{(bunga * 100).toFixed(2)}%</span>
        </p>
        <p>
          <span className="inline-block w-40">Angsuran per Bulan</span>:
          <span className="ml-2 font-semibold text-blue-600">
            {formatRupiah(angsuran)}
          </span>
        </p>
      </div>
      <p className="text-xs text-gray-500 mt-3">
        *Simulasi hanya ilustrasi, bukan keputusan final.{" "}
        <a href="#contact" className="text-blue-600 hover:underline">
          Hubungi Tim Serra
        </a>{" "}
        untuk info lebih lanjut.
      </p>
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(2);
  const faqs = [
    {
      question: "Apa itu Fasilitas Dana Serra?",
      answer: (
        <div className="space-y-3 text-gray-700 leading-relaxed">
          <p>
            <strong>Fasilitas Dana Serra</strong> adalah layanan{" "}
            <strong>pembiayaan multiguna dengan jaminan BPKB mobil</strong>{" "}
            untuk kebutuhan seperti modal usaha, renovasi rumah, biaya pengobatan, hingga pendidikan anak.
          </p>
          <p>
            Proses cepat, aman, dan diawasi oleh mitra leasing resmi.{" "}
            <span className="font-semibold text-blue-700">BPKB tetap aman</span> disimpan,
            dan mobil tetap bisa digunakan seperti biasa.
          </p>
        </div>
      ),
    },
    {
      question: "Dokumen apa saja yang perlu disiapkan?",
      answer: (
        <div className="space-y-3 text-gray-700 leading-relaxed">
          <ul className="list-disc ml-6 space-y-1">
            <li><strong>KTP Pemohon & Pasangan</strong></li>
            <li><strong>Kartu Keluarga</strong></li>
            <li><strong>STNK Mobil</strong></li>
            <li><strong>BPKB Mobil</strong></li>
          </ul>
          <p>Semua dokumen bisa diunggah online tanpa perlu datang ke kantor.</p>
        </div>
      ),
    },
    { question: "Bagaimana contoh simulasi pinjaman di Serra?", answer: <LoanExample /> },
    {
      question: "Berapa lama proses pencairan dana?",
      answer: (
        <p className="text-gray-700 leading-relaxed">
          Setelah dokumen lengkap diverifikasi, keputusan persetujuan biasanya keluar
          dalam <strong>1×24 jam kerja</strong>. Dana langsung dikirim ke rekening Anda.
        </p>
      ),
    },
    {
      question: "Apakah mobil saya harus ditinggal?",
      answer: (
        <p className="text-gray-700 leading-relaxed">
          Tidak perlu. Serra menggunakan sistem <strong>jaminan BPKB mobil</strong>,
          jadi mobil tetap bisa digunakan.
        </p>
      ),
    },
    {
      question: "Apakah Serra diawasi oleh lembaga resmi?",
      answer: (
        <p className="text-gray-700 leading-relaxed">
          Ya, Serra bekerja sama dengan mitra leasing resmi yang <strong>terdaftar dan diawasi OJK</strong>.
        </p>
      ),
    },
  ];

  return (
    <section
      className="py-16 bg-gradient-to-b from-white via-blue-50/40 to-white"
      id="faq"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Judul */}
        <div className="text-center mb-12">
          <span className="text-blue-700 font-semibold uppercase tracking-wide">
            — FAQ —
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-5 leading-tight drop-shadow-[0_3px_10px_rgba(40,115,182,0.3)]">
            Pertanyaan yang{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E78F00] to-[#2873B9]">
              Sering Diajukan
            </span>
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
            Temukan jawaban atas pertanyaan umum tentang layanan{" "}
            <span className="text-blue-700 font-semibold">SERRA.ID</span>.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-5">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center px-6 py-5 text-left text-gray-800 hover:bg-blue-50/70 transition-all"
                aria-expanded={openIndex === i}
              >
                <h3 className="font-semibold text-lg text-gray-900">{item.question}</h3>
                <ChevronDown
                  className={`w-6 h-6 transform transition-transform duration-300 ${
                    openIndex === i ? "rotate-180 text-blue-600" : "text-gray-400"
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-500 ease-in-out ${
                  openIndex === i ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 text-gray-700 text-[15px] leading-relaxed border-t border-gray-100 bg-gradient-to-b from-gray-50 to-white">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 mt-10 text-sm">
          Masih ada pertanyaan?{" "}
          <a href="#contact" className="text-blue-600 hover:underline">
            Hubungi tim kami
          </a>{" "}
          untuk konsultasi gratis.
        </p>
      </div>
    </section>
  );
}
