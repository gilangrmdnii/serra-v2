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
    <section id="simulator" className="py-14 sm:py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-blue-600 font-semibold text-xs sm:text-sm tracking-wider uppercase">
            — Simulasi Pinjaman —
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-3 sm:mt-4 sm:mb-4">
            Hitung <span className="text-blue-600">Pinjaman</span> Anda
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Gunakan kalkulator di bawah untuk menghitung estimasi pinjaman dengan jaminan BPKB Mobil
          </p>
        </div>

        {/* Card utama */}
        <div className="bg-white rounded-3xl shadow-xl sm:shadow-2xl p-6 sm:p-10 md:p-12">
          {/* Header Card */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-8 sm:mb-10 p-5 sm:p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl">
            <div className="bg-blue-500 p-3 rounded-xl self-center sm:self-auto">
              <Car className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
            </div>
            <div className="text-center sm:text-left w-full">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800">Gadai BPKB Mobil</h3>
              <p className="text-gray-600 text-sm sm:text-base">Pencairan hingga 95% dari nilai kendaraan</p>
            </div>
          </div>

          {/* Range Inputs (nilai kendaraan & tenor) */}
          <div className="space-y-10 sm:space-y-12">
            {/* Nilai Kendaraan */}
            <div>
              <label className="flex items-center gap-2 text-gray-700 font-bold text-base sm:text-lg mb-4">
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
                  background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${((vehicleValue - 50000000) / 450000000) * 100
                    }%, #e5e7eb ${((vehicleValue - 50000000) / 450000000) * 100}%, #e5e7eb 100%)`,
                }}
              />
              <div className="flex justify-between items-center mt-3 text-xs sm:text-sm">
                <span className="text-gray-500">Rp 50 jt</span>
                <div className="text-center">
                  <div className="text-blue-600 font-bold text-2xl sm:text-3xl">
                    {formatRupiah(vehicleValue)}
                  </div>
                  <div className="text-gray-500 text-xs mt-1">Nilai Kendaraan</div>
                </div>
                <span className="text-gray-500">Rp 500 jt</span>
              </div>
            </div>

            {/* Tenor */}
            <div>
              <label className="flex items-center gap-2 text-gray-700 font-bold text-base sm:text-lg mb-4">
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
                  background: `linear-gradient(to right, #10b981 0%, #10b981 ${((loanTerm - 12) / 36) * 100
                    }%, #e5e7eb ${((loanTerm - 12) / 36) * 100}%, #e5e7eb 100%)`,
                }}
              />
              <div className="flex justify-between items-center mt-3 text-xs sm:text-sm">
                <span className="text-gray-500">12 Bulan</span>
                <div className="text-center">
                  <div className="text-green-600 font-bold text-2xl sm:text-3xl">{loanTerm} Bulan</div>
                  <div className="text-gray-500 text-xs mt-1">Jangka Waktu</div>
                </div>
                <span className="text-gray-500">48 Bulan</span>
              </div>
            </div>
          </div>

          {/* Info Bunga */}
          <div className="mt-8 mb-8 sm:mb-10 p-4 bg-amber-50 border-l-4 border-amber-400 rounded-lg flex items-start gap-3">
            <Percent className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <div>
              <div className="font-semibold text-amber-900 text-sm sm:text-base">Bunga Kompetitif</div>
              <div className="text-xs sm:text-sm text-amber-700">
                Bunga efektif 0.8% per bulan dengan perhitungan anuitas
              </div>
            </div>
          </div>

          {/* Hasil Simulasi */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-6 sm:p-8 md:p-10 text-white shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center">Estimasi Pinjaman Anda</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-white/20 text-center">
                <div className="text-blue-100 text-xs sm:text-sm mb-2 font-medium">💰 Pinjaman Didapat</div>
                <div className="text-3xl sm:text-4xl font-bold mb-1">{formatRupiah(loanDetails.maxLoan)}</div>
                <div className="text-blue-200 text-xs sm:text-sm">95% dari {formatRupiah(vehicleValue)}</div>
              </div>

              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-white/20 text-center">
                <div className="text-blue-100 text-xs sm:text-sm mb-2 font-medium">📅 Cicilan per Bulan</div>
                <div className="text-3xl sm:text-4xl font-bold mb-1">{formatRupiah(loanDetails.monthlyPayment)}</div>
                <div className="text-blue-200 text-xs sm:text-sm">Selama {loanTerm} bulan</div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
              <div className="text-center py-4 sm:py-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="text-blue-100 text-xs sm:text-sm mb-1 font-medium">Total Bunga</div>
                <div className="text-xl sm:text-2xl font-bold">{formatRupiah(loanDetails.totalInterest)}</div>
              </div>
              <div className="text-center py-4 sm:py-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="text-blue-100 text-xs sm:text-sm mb-1 font-medium">Total Bayar</div>
                <div className="text-xl sm:text-2xl font-bold">{formatRupiah(loanDetails.totalPayment)}</div>
              </div>
            </div>

            <p className="pt-4 border-t border-white/30 text-blue-100 text-xs sm:text-sm text-center leading-relaxed">
              * Simulasi ini hanya perkiraan. Nilai aktual bergantung pada hasil survei dan mitra pembiayaan resmi berizin OJK.
            </p>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => document.getElementById("form")?.scrollIntoView({ behavior: "smooth" })}
            className="w-full mt-6 sm:mt-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 sm:py-5 rounded-2xl font-semibold sm:font-bold text-base sm:text-lg hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300"
          >
            Ajukan Pinjaman Sekarang →
          </button>
        </div>
      </div>
    </section>

  );
}
