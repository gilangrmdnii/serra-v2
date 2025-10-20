"use client";

import React, { useState } from 'react';
import { Car, TrendingUp, Calendar, Percent } from 'lucide-react';

export default function LoanSimulator() {
  const [vehicleValue, setVehicleValue] = useState(150000000);
  const [loanTerm, setLoanTerm] = useState(12);

  // Format angka ke Rupiah tanpa desimal
  const formatRupiah = (num: number) => {
    return num.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  const calculateLoanDetails = () => {
    const ltvRatio = 0.95; // 95% dari nilai kendaraan
    const maxLoan = Math.round(vehicleValue * ltvRatio);
    const interestRate = 0.008; // 0.8% per bulan

    // Rumus anuitas
    const monthlyPayment = Math.round(
      (maxLoan * interestRate * Math.pow(1 + interestRate, loanTerm)) /
        (Math.pow(1 + interestRate, loanTerm) - 1)
    );

    const totalPayment = Math.round(monthlyPayment * loanTerm);
    const totalInterest = Math.round(totalPayment - maxLoan);

    return { maxLoan, monthlyPayment, totalInterest, totalPayment };
  };

  const loanDetails = calculateLoanDetails();

  return (
    <section id="simulator" className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
            — Simulasi Pinjaman —
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            Hitung <span className="text-blue-600">Pinjaman</span> Anda
          </h2>
          <p className="text-gray-600 text-lg">
            Gunakan kalkulator di bawah untuk menghitung estimasi pinjaman dengan jaminan BPKB Mobil
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          {/* Header Card */}
          <div className="flex items-center gap-4 mb-10 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl">
            <div className="bg-blue-500 p-3 rounded-xl">
              <Car className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">Gadai BPKB Mobil</h3>
              <p className="text-gray-600">Pencairan hingga 95% dari nilai kendaraan</p>
            </div>
          </div>

          {/* Nilai Kendaraan */}
          <div className="mb-10">
            <label className="flex items-center gap-2 text-gray-700 font-bold text-lg mb-4">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              Estimasi Nilai Kendaraan
            </label>
            <input
              type="range"
              min="50000000"
              max="500000000"
              step="10000000"
              value={vehicleValue}
              onChange={(e) => setVehicleValue(Number(e.target.value))}
              className="w-full h-3 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${
                  ((vehicleValue - 50000000) / 450000000) * 100
                }%, #e5e7eb ${((vehicleValue - 50000000) / 450000000) * 100}%, #e5e7eb 100%)`,
              }}
            />
            <div className="flex justify-between mt-3">
              <span className="text-gray-500 text-sm font-medium">Rp 50.000.000</span>
              <div className="text-center">
                <div className="text-blue-600 font-bold text-3xl">
                  {formatRupiah(vehicleValue)}
                </div>
                <div className="text-gray-500 text-xs mt-1">Nilai Kendaraan</div>
              </div>
              <span className="text-gray-500 text-sm font-medium">Rp 500.000.000</span>
            </div>
          </div>

          {/* Tenor */}
          <div className="mb-10">
            <label className="flex items-center gap-2 text-gray-700 font-bold text-lg mb-4">
              <Calendar className="w-5 h-5 text-blue-600" />
              Tenor Pinjaman
            </label>
            <input
              type="range"
              min="12"
              max="48"
              step="6"
              value={loanTerm}
              onChange={(e) => setLoanTerm(Number(e.target.value))}
              className="w-full h-3 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #10b981 0%, #10b981 ${
                  ((loanTerm - 12) / 36) * 100
                }%, #e5e7eb ${((loanTerm - 12) / 36) * 100}%, #e5e7eb 100%)`,
              }}
            />
            <div className="flex justify-between mt-3">
              <span className="text-gray-500 text-sm font-medium">12 Bulan</span>
              <div className="text-center">
                <div className="text-green-600 font-bold text-3xl">{loanTerm} Bulan</div>
                <div className="text-gray-500 text-xs mt-1">Jangka Waktu</div>
              </div>
              <span className="text-gray-500 text-sm font-medium">48 Bulan</span>
            </div>
          </div>

          {/* Info Bunga */}
          <div className="mb-8 p-4 bg-amber-50 border-l-4 border-amber-400 rounded-lg flex items-start gap-3">
            <Percent className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <div>
              <div className="font-semibold text-amber-900">Bunga Kompetitif</div>
              <div className="text-sm text-amber-700">
                Bunga efektif 0.8% per bulan dengan perhitungan anuitas
              </div>
            </div>
          </div>

          {/* Hasil Simulasi */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-8 md:p-10 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-center">Estimasi Pinjaman Anda</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-blue-100 text-sm mb-2 font-medium">💰 Pinjaman yang Didapat</div>
                <div className="text-4xl md:text-5xl font-bold mb-1">
                  {formatRupiah(loanDetails.maxLoan)}
                </div>
                <div className="text-blue-200 text-sm">
                  95% dari {formatRupiah(vehicleValue)}
                </div>
              </div>

              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-blue-100 text-sm mb-2 font-medium">📅 Cicilan per Bulan</div>
                <div className="text-4xl md:text-5xl font-bold mb-1">
                  {formatRupiah(loanDetails.monthlyPayment)}
                </div>
                <div className="text-blue-200 text-sm">Selama {loanTerm} bulan</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="text-center py-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="text-blue-100 text-sm mb-1 font-medium">Total Bunga</div>
                <div className="text-2xl font-bold">
                  {formatRupiah(loanDetails.totalInterest)}
                </div>
              </div>
              <div className="text-center py-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="text-blue-100 text-sm mb-1 font-medium">Total Bayar</div>
                <div className="text-2xl font-bold">
                  {formatRupiah(loanDetails.totalPayment)}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/30">
              <p className="text-blue-100 text-sm text-center leading-relaxed">
                * Perhitungan ini merupakan simulasi. Nilai aktual dapat berbeda sesuai hasil survey
                dan persetujuan dari mitra pembiayaan kami yang terdaftar di OJK.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => document.getElementById("form")?.scrollIntoView({ behavior: "smooth" })}
            className="w-full mt-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Ajukan Pinjaman Sekarang</span>
            <span className="text-2xl">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
