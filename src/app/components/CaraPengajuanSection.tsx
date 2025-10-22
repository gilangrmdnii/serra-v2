"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    number: 1,
    title: (
      <>
        Kirim pengajuan <a href="#form" className="text-blue-600 font-medium hover:underline">di sini</a>
      </>
    ),
    desc: "Isi formulir singkat hanya dalam 30 detik.",
  },
  {
    number: 2,
    title: "Konfirmasi dengan Tim Serra",
    desc: "Tim Serra akan segera menghubungi Anda — maksimal dalam 1×24 jam.",
  },
  {
    number: 3,
    title: "Pengajuan diproses",
    desc: "Proses analisis selesai dalam 1 hari kerja setelah dokumen lengkap.",
  },
  {
    number: 4,
    title: "Pencairan dana",
    desc: "Dana pinjaman akan segera cair ke rekening Anda.",
  },
];

export default function CaraPengajuanSection() {
  return (
    <section className="relative bg-gradient-to-b from-sky-100 to-white py-18 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center gap-12">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 px-3 md:px-0"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-900 mb-6 md:mb-10 leading-snug text-center md:text-left">
            Cara Mudah Pengajuan{" "}
            <span className="text-blue-600">Pinjaman</span>
          </h2>

          <div className="space-y-3 sm:space-y-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex items-start gap-3 sm:gap-4 bg-white/80 backdrop-blur-md border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-3 sm:p-4 md:p-5"
              >
                <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm sm:text-base">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base md:text-lg leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-1.5 sm:mt-2">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-[260px] md:w-[280px] lg:w-[300px]">
            <Image
              src="/images/roomchat.png"
              alt="Simulasi Pengajuan Serra"
              width={340}
              height={640}
              className="rounded-[2rem] shadow-xl object-cover"
            />
            <div className="absolute bottom-22 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-md px-4 py-3 text-sm w-[85%] text-gray-700">
              <p>Terima kasih sudah melengkapi dokumen persyaratan 😊</p>
              <p className="text-blue-600 font-medium">
                Pengajuan Anda sedang diproses 🚀
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
