"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const data = [
    {
        title: "Fasilitas Dana untuk Modal Usaha",
        desc: "Butuh tambahan modal usaha? Kami bantu cairkan dana cepat dengan bunga ringan mulai 0,75% per bulan. Solusi tepat untuk mengembangkan bisnismu tanpa ribet.",
        img: "/images/modal-usaha.png",
        alt: "Ilustrasi pengusaha kecil menerima modal usaha",
    },
    {
        title: "Fasilitas Dana untuk Biaya Pengobatan",
        desc: "Dapatkan dukungan finansial untuk kebutuhan medis mendesak. Proses cepat, cair langsung ke rekening, dan bunga ringan agar kamu bisa fokus pada pemulihan.",
        img: "/images/biaya-kesehatan.png",
        alt: "Ilustrasi pasien menerima bantuan dana untuk biaya pengobatan",
    },
    {
        title: "Fasilitas Dana untuk Renovasi Rumah",
        desc: "Percantik rumah impianmu dengan dana renovasi cepat dan bunga kompetitif. Wujudkan hunian nyaman untuk keluarga tercinta.",
        img: "/images/renovasi-rumah.png",
        alt: "Ilustrasi keluarga merenovasi rumah dengan dana pinjaman",
    },
];

export default function FasilitasSection() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % data.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const current = data[index];

    return (
        <section
            className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white py-20 md:py-16 px-6 md:px-16"
            aria-labelledby="fasilitas-dana-heading"
        >
            {/* Floating money effect (subtle) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ y: [0, -30, 0], rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
                    className="absolute top-12 left-10 opacity-20"
                >
                    <Image src="/images/money-1.png" alt="uang" width={80} height={80} />
                </motion.div>
                <motion.div
                    animate={{ y: [0, 25, 0], rotate: [0, -15, 15, 0] }}
                    transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
                    className="absolute bottom-16 right-16 opacity-20"
                >
                    <Image src="/images/money-2.png" alt="uang" width={100} height={100} />
                </motion.div>
            </div>

            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                {/* Text Section */}
                <AnimatePresence mode="wait">
                    <motion.article
                        key={current.title}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 text-center md:text-left px-3 md:px-0"
                    >
                        <h2
                            id="fasilitas-dana-heading"
                            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-sky-900 leading-snug md:leading-tight mb-4 md:mb-5"
                        >
                            {current.title.split(" ").slice(0, -2).join(" ")}{" "}
                            <span className="text-blue-600">
                                {current.title.split(" ").slice(-2).join(" ")}
                            </span>
                        </h2>

                        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                            {current.desc}
                        </p>

                        <a
                            href="/ajukan"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:ring-4 focus:ring-blue-300 text-sm sm:text-base"
                            aria-label={`Ajukan sekarang untuk ${current.title}`}
                        >
                            Ajukan Sekarang
                        </a>
                    </motion.article>
                </AnimatePresence>

                {/* Image Section */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current.img}
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 40 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 flex justify-center"
                    >
                        <Image
                            src={current.img}
                            alt={current.alt}
                            width={440}
                            height={440}
                            className="rounded-3xl object-cover shadow-2xl ring-1 ring-sky-100"
                            priority
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
