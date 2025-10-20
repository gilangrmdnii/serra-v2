"use client";

import React from 'react';

export default function TrustedBySection() {
    const partners = ["OJK", "BRI", "Mandiri", "BCA", "BNI"];

    return (
        <section className="py-8 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <h3 className="text-gray-600 mb-4">
                    Dipercaya Oleh Lebih Dari <span className="text-blue-600 font-bold">+10,000</span> Nasabah
                </h3>
            </div>
        </section>
    );
}