"use client";

import { motion } from "framer-motion";
import { Camera, Hand, Volume2 } from "lucide-react";

const steps = [
    {
        icon: Camera,
        title: "Buka Kamera",
        description: "Arahkan kamera smartphone Anda ke pengguna bahasa isyarat.",
    },
    {
        icon: Hand,
        title: "Mulai Berisyarat",
        description: "AI kami akan mendeteksi gerakan tangan SIBI/BISINDO secara akurat.",
    },
    {
        icon: Volume2,
        title: "Terjemahan Instan",
        description: "Aplikasi langsung mengubah gerakan menjadi teks dan suara.",
    },
];

export default function HowItWorks() {
    return (
        <section className="py-24 bg-slate-900/50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent -translate-y-1/2 hidden md:block" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Cara Kerja Bicara</h2>
                    <p className="text-slate-400">Mudah, cepat, dan presisi.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            className="group text-center"
                        >
                            <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#0f172a] border border-cyan-500/30 mb-6 shadow-[0_0_20px_rgba(6,182,212,0.1)] group-hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-shadow">
                                <step.icon className="text-cyan-400" size={32} />
                                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm border-4 border-[#0f172a]">
                                    {idx + 1}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
