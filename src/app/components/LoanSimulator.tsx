"use client";

import React from "react";

export default function LoanExample() {
  const pinjaman = 50_000_000;
  const tenor = 12;
  const bunga = 0.0075; // 0.75%
  const angsuran = Math.round(pinjaman * (1 + bunga * tenor) / tenor);

  const formatRupiah = (num: number) =>
    num.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });

  return (
    <section className="py-10 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        {/* Simulasi */}
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Bagaimana contoh simulasi Fasilitas Dana Nova?
        </h3>

        <div className="text-gray-800 leading-relaxed mb-4 space-y-1">
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

        <p className="text-sm text-gray-500">
          *Skema angsuran hanya bersifat simulasi dan bukan persetujuan pinjaman
          dana.{" "}
          <a
            href="#contact"
            className="text-blue-600 hover:underline font-medium"
          >
            Hubungi tim Nova
          </a>{" "}
          untuk informasi lebih lanjut.
        </p>

        {/* Tabel bunga */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Berapa bunga pinjaman di Fasilitas Dana Nova?
          </h3>

          <table className="w-full border-collapse text-sm text-gray-800">
            <thead>
              <tr className="bg-blue-900 text-white">
                <th className="py-2 px-4 text-left rounded-tl-lg">Tenor (Bulan)</th>
                <th className="py-2 px-4 text-left rounded-tr-lg">Bunga per Bulan</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border border-gray-200">
                <td className="py-2 px-4">12 hingga 48</td>
                <td className="py-2 px-4">mulai dari 0.75%</td>
              </tr>
            </tbody>
          </table>

          <p className="text-sm text-gray-500 mt-2">
            *Informasi di atas dapat berubah sewaktu-waktu.{" "}
            <a
              href="#contact"
              className="text-blue-600 hover:underline font-medium"
            >
              Hubungi Agen Nova
            </a>{" "}
            untuk informasi selengkapnya.
          </p>
        </div>
      </div>
    </section>
  );
}
