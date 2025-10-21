"use client";

import React, { useState } from 'react';
import { ChevronDown, CheckCircle, HelpCircle, Clock, FileText, DollarSign, Car, CheckCircle2, AlertCircle } from 'lucide-react';

export default function FAQSection() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [activeCategory, setActiveCategory] = useState<string>('semua');

    const faqCategories = [
        { id: 'semua', label: 'Semua', icon: HelpCircle },
        { id: 'proses', label: 'Proses & Waktu', icon: Clock },
        { id: 'syarat', label: 'Syarat & Dokumen', icon: FileText },
        { id: 'biaya', label: 'Biaya & Bunga', icon: DollarSign },
        { id: 'mobil', label: 'Kendaraan', icon: Car },
        { id: 'pelunasan', label: 'Pelunasan', icon: CheckCircle2 },
    ];

    const faqs = [{
        category: 'proses', q: "Apa itu gadai BPKB mobil di SERRA.ID?",
        a: "Gadai BPKB mobil adalah layanan pembiayaan dana tunai dengan jaminan BPKB mobil Anda. Yang unik, mobil tetap dapat Anda gunakan seperti biasa untuk aktivitas sehari-hari. Kami hanya menyimpan BPKB sebagai jaminan, sementara STNK dan kendaraan tetap di tangan Anda. Ini adalah solusi ideal untuk mendapatkan dana cepat tanpa kehilangan mobilitas Anda.", highlight: true
    }, {
        category: 'proses', q: "Berapa lama proses pencairan dana?",
        a: "Proses kami sangat cepat! Setelah semua dokumen lengkap dan diverifikasi, dana dapat cair dalam waktu 1x24 jam atau bahkan di hari yang sama. Kami memahami kebutuhan mendesak Anda, sehingga tim kami bekerja efisien untuk memproses pengajuan Anda dengan cepat tanpa mengorbankan keamanan dan ketelitian.",
        highlight: true
    }, {
        category: 'mobil', q: "Apakah mobil masih bisa dipakai selama masa pinjaman?",
        a: "Ya, tentu saja! Ini adalah keunggulan utama layanan kami. Mobil tetap dapat Anda gunakan 100% seperti biasa. Yang kami tahan hanya BPKB sebagai jaminan. STNK tetap di tangan Anda, sehingga Anda bisa menggunakan mobil untuk bekerja, antar jemput anak, mudik, atau keperluan lainnya tanpa hambatan.", highlight: true
    },
    {
        category: 'biaya', q: "Berapa plafon pinjaman yang bisa saya dapatkan?",
        a: "Plafon pinjaman di SERRA.ID dapat mencapai hingga 95% dari nilai taksiran mobil Anda. Nilai pinjaman ditentukan berdasarkan merek, tahun pembuatan, kondisi fisik, dan harga pasar mobil saat ini. Contoh: Mobil senilai Rp 150 juta bisa mendapatkan pinjaman hingga Rp 142,5 juta. Tim kami akan melakukan survey untuk memberikan taksiran terbaik.", highlight: false
    },
    {
        category: 'syarat', q: "Apa saja syarat pengajuan gadai BPKB mobil?",
        a: "Syarat pengajuan sangat mudah! Anda hanya perlu: (1) BPKB asli atas nama sendiri atau satu Kartu Keluarga, (2) KTP asli dan fotokopi, (3) STNK asli dan fotokopi, (4) Fotokopi Kartu Keluarga (KK), (5) Mobil untuk survey kondisi fisik. Tanpa BI checking, tanpa slip gaji, dan proses bisa berjalan meskipun pajak mobil telat 1-2 bulan (ada ketentuan khusus).", highlight: false
    }, { category: 'mobil', q: "Mobil tahun berapa yang bisa diagunkan?", a: "Kami menerima mobil mulai dari tahun 2006 hingga 2025 untuk jenis Sedan, Jeep, SUV, dan Minibus. Untuk jenis Pick Up, Truck, atau Double Cabin minimal tahun 2015. Semakin baru tahun mobil, semakin tinggi nilai pinjaman yang bisa Anda dapatkan. Kondisi fisik mobil yang terawat juga sangat mempengaruhi nilai taksiran.", highlight: false },
    {
        category: 'biaya', q: "Berapa bunga pinjaman di SERRA.ID?",
        a: "Kami menawarkan suku bunga kompetitif mulai dari 0.8% per bulan (flat) atau sekitar 10.86% per tahun. Bunga bersifat tetap selama masa pinjaman, sehingga cicilan Anda tidak akan berubah. Tidak ada biaya tersembunyi! Semua biaya transparan termasuk biaya admin dan asuransi. Anda akan mendapatkan penjelasan detail sebelum persetujuan.", highlight: false
    }, { category: 'proses', q: "Bagaimana cara mengajukan pinjaman?", a: "Prosesnya sangat mudah! (1) Isi formulir pengajuan online di website kami atau hubungi customer service, (2) Tim kami akan menghubungi Anda untuk jadwal survey, (3) Petugas survey datang ke lokasi Anda untuk cek fisik mobil, (4) Setelah approved, lengkapi dokumen dan tandatangan kontrak, (5) Dana langsung ditransfer ke rekening Anda. Seluruh proses bisa selesai dalam 1 hari!", highlight: false },
    {
        category: 'pelunasan', q: "Apakah ada denda jika melunasi lebih cepat?",
        a: "Tidak ada denda sama sekali! Kami justru mendorong pelunasan dipercepat. Jika Anda memiliki dana lebih dan ingin melunasi sebelum jatuh tempo, Anda bebas melakukannya tanpa penalti. Bahkan, Anda bisa menghemat biaya bunga untuk bulan-bulan yang tidak terpakai. BPKB akan dikembalikan segera setelah pelunasan.", highlight: false
    }, {
        category: 'biaya', q: "Berapa tenor atau jangka waktu pinjaman?",
        a: "Tenor pinjaman sangat fleksibel, mulai dari 6 bulan hingga 60 bulan (5 tahun) untuk BPKB mobil. Anda bebas memilih tenor sesuai kemampuan bayar. Semakin lama tenor, cicilan bulanan semakin ringan. Semakin pendek tenor, total bunga yang dibayar semakin kecil. Gunakan kalkulator simulasi kami untuk menghitung cicilan yang sesuai budget Anda.", highlight: false
    }, {
        category: 'syarat', q: "Apakah BPKB harus atas nama sendiri?",
        a: "Idealnya BPKB atas nama sendiri. Namun, kami juga menerima BPKB yang masih satu Kartu Keluarga (KK) dengan Anda, misalnya atas nama orang tua, istri, suami, atau anak. Jika BPKB berbeda nama dan tidak satu KK, mohon hubungi customer service kami untuk pengecekan kelayakan lebih lanjut.", highlight: false
    },
    {
        category: 'mobil', q: "Bagaimana jika pajak mobil sudah mati/telat?",
        a: "Kami tetap bisa proses! Untuk pajak yang telat 1-3 bulan masih bisa diproses normal. Jika pajak mati lebih dari 3 bulan atau lebih dari 1 tahun, akan ada penyesuaian nilai taksiran. Namun pengajuan tetap bisa diproses. Tim kami akan membantu memberikan solusi terbaik sesuai kondisi kendaraan Anda.", highlight: false
    }, { category: 'proses', q: "Apakah ada biaya survey?", a: "Tidak ada biaya survey sama sekali! Survey dilakukan gratis oleh tim kami yang akan datang ke lokasi Anda. Biaya admin dan proses sudah termasuk dalam struktur pembiayaan yang transparan. Anda tidak perlu keluar biaya apapun saat proses survey dan pengecekan dokumen.", highlight: false },
    {
        category: 'pelunasan', q: "Bagaimana cara pelunasan atau pembayaran cicilan?",
        a: "Pembayaran cicilan sangat mudah dan fleksibel! Anda bisa bayar melalui: (1) Transfer bank (semua bank major), (2) Virtual Account, (3) Minimarket (Indomaret, Alfamart), (4) Mobile Banking, (5) Kantor cabang kami. Reminder akan dikirim sebelum tanggal jatuh tempo agar Anda tidak lupa. Auto debit juga tersedia untuk kemudahan Anda.", highlight: false
    }, { category: 'proses', q: "Apakah aman dan terpercaya?", a: "Sangat aman! SERRA.ID merupakan mitra resmi dari lembaga pembiayaan berizin dan diawasi oleh OJK (Otoritas Jasa Keuangan). BPKB Anda dijaminkan melalui sistem yang legal, aman, dan transparan. Semua proses disertai kontrak resmi bermaterai, serta data pribadi Anda dilindungi dengan enkripsi SSL 256-bit.", highlight: false },
    {
        category: 'biaya', q: "Apakah ada biaya asuransi?",
        a: "Ya, ada biaya asuransi yang sudah termasuk dalam cicilan bulanan. Asuransi ini melindungi kendaraan Anda dari risiko kehilangan atau kerusakan total (Total Loss Only/TLO). Asuransi juga melindungi Anda sebagai peminjam. Preminya sangat terjangkau sekitar 1-2% dari nilai pinjaman per tahun dan sudah termasuk dalam perhitungan cicilan.", highlight: false
    }, { category: 'mobil', q: "Apakah bisa untuk mobil yang masih kredit?", a: "Bisa! Kami menyediakan layanan take over atau over kredit. Jika mobil Anda masih dalam cicilan di leasing lain, kami bisa membantu melunasi sisa kredit Anda dan memberikan dana tambahan sesuai nilai mobil. Prosesnya mudah dan Anda bisa mendapatkan suku bunga yang lebih rendah serta plafond lebih tinggi.", highlight: false },
    {
        category: 'proses', q: "Apa yang terjadi jika telat bayar cicilan?",
        a: "Jika Anda mengalami kendala pembayaran, segera hubungi customer service kami. Akan ada denda keterlambatan sebesar 0.1% per hari dari nominal cicilan. Kami memahami kondisi darurat dan memberikan grace period serta solusi restrukturisasi jika diperlukan. Komunikasi terbuka sangat penting agar kami bisa membantu Anda.", highlight: false
    }, { category: 'syarat', q: "Apakah bisa untuk yang belum bekerja atau tidak punya slip gaji?", a: "Bisa! Kami tidak memerlukan slip gaji. Yang penting Anda memiliki penghasilan untuk membayar cicilan, baik dari usaha sendiri, freelance, atau pekerjaan informal. Profesi yang diterima: karyawan swasta/PNS (minimal 1 tahun), wiraswasta (minimal usaha berjalan 1 tahun), profesional, dan pelaku UMKM.", highlight: false },
    {
        category: 'pelunasan', q: "Berapa lama BPKB dikembalikan setelah pelunasan?",
        a: "Setelah pelunasan lunas terverifikasi, BPKB akan dikembalikan maksimal 3-7 hari kerja. Anda bisa mengambil langsung di kantor cabang kami atau kami kirim via kurir (aman dengan asuransi pengiriman). Dokumen yang dikembalikan: BPKB asli, surat lunas, dan dokumen pendukung lainnya. Semuanya dalam kondisi lengkap dan aman.", highlight: false
    }];

    const filteredFaqs = activeCategory === 'semua'
        ? faqs
        : faqs.filter(faq => faq.category === activeCategory);

    const highlightedFaqs = faqs.filter(faq => faq.highlight);

    return (
        <section id="faq" className="py-20 px-4 bg-gradient-to-b from-white via-blue-50/40 to-blue-100/10">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">— Punya Pertanyaan? —</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-gray-900 drop-shadow-sm">
                        Pertanyaan yang Sering{' '}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E78F00] via-[#3C8DD4] to-[#2873B9]">
                            Ditanyakan
                        </span>
                    </h2>
                    <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
                        Temukan jawaban lengkap tentang gadai BPKB mobil di <span className="text-blue-700 font-semibold">SERRA.ID</span>.
                        Dari proses pengajuan hingga pelunasan — semua informasi ada di sini.
                    </p>
                </div>

                {/* Highlighted / Populer */}
                <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-8 mb-14 shadow-2xl border border-blue-400/20">
                    <div className="flex items-center gap-3 mb-6">
                        <AlertCircle className="w-6 h-6 text-[#FFD37B]" />
                        <h3 className="text-2xl font-bold text-white">Pertanyaan Paling Populer</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                        {highlightedFaqs.map((faq, idx) => (
                            <div key={idx} className="bg-white/10 border border-white/20 rounded-2xl p-5 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 shadow-md">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-[#FFD37B] flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-white mb-2">{faq.q}</h4>
                                        <p className="text-blue-100 text-sm leading-relaxed line-clamp-2">{faq.a}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {faqCategories.map((category) => {
                        const Icon = category.icon;
                        return (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300
                  ${activeCategory === category.id
                                        ? 'bg-gradient-to-r from-blue-600 via-blue-700 to-[#E78F00] text-white shadow-lg scale-105'
                                        : 'bg-white text-gray-700 hover:text-blue-700 hover:border-blue-200 border border-gray-200 hover:shadow-md'
                                    }`}
                            >
                                <Icon className="w-4 h-4" />
                                {category.label}
                            </button>
                        );
                    })}
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {filteredFaqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
                        >
                            <button
                                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                className="w-full px-6 sm:px-8 py-6 flex items-center justify-between text-left hover:bg-blue-50/60 transition-colors group"
                            >
                                <div className="flex items-start gap-4 flex-1 pr-4">
                                    <div
                                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm transition-all duration-300
                      ${openFaq === idx
                                                ? 'bg-gradient-to-br from-blue-600 to-[#E78F00] text-white shadow-md'
                                                : 'bg-blue-100 text-blue-700 group-hover:bg-blue-600 group-hover:text-white'
                                            }`}
                                    >
                                        {idx + 1}
                                    </div>
                                    <span className="font-semibold text-gray-900 text-base sm:text-lg leading-relaxed">
                                        {faq.q}
                                    </span>
                                </div>
                                <ChevronDown
                                    className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>

                            {openFaq === idx && (
                                <div className="px-6 sm:px-8 pb-6 animate-fadeIn">
                                    <div className="pl-12 pr-4">
                                        <div className="bg-gradient-to-r from-blue-50 via-[#E8F1FB] to-transparent border-l-4 border-blue-600 rounded-r-xl p-5">
                                            <p className="text-gray-700 leading-relaxed text-base">{faq.a}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
