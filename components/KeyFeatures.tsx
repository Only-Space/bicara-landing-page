"use client";

import { motion } from "framer-motion";
import { Mic, BookOpen, Trophy } from "lucide-react";
import clsx from "clsx";

const features = [
    {
        title: "Real-time Translation",
        description: "Terjemahkan bahasa isyarat SIBI/BISINDO ke teks dan suara secara instan menggunakan kamera.",
        icon: Mic,
        className: "col-span-1 md:col-span-2 lg:col-span-2 bg-gradient-to-br from-blue-900/50 to-[#0f172a] border-blue-500/20",
    },
    {
        title: "Learning Hub",
        description: "Modul belajar terstruktur dengan video berkualitas tinggi untuk SIBI & BISINDO.",
        icon: BookOpen,
        className: "col-span-1 md:col-span-1 lg:col-span-1 bg-[#1e293b]/50 border-white/10",
    },
    {
        title: "Gamification",
        description: "Raih poin, pertahankan streak, dan top-up nyawa untuk kuis interaktif.",
        icon: Trophy,
        className: "col-span-1 md:col-span-3 lg:col-span-3 bg-gradient-to-r from-cyan-900/20 to-[#0f172a] border-cyan-500/20",
    },
];

export default function KeyFeatures() {
    return (
        <section id="features" className="py-24 bg-[#0f172a]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Fitur Unggulan</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">Teknologi canggih bertemu dengan edukasi inklusif dalam satu aplikasi.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className={clsx(
                                "p-8 rounded-3xl border backdrop-blur-sm relative overflow-hidden group hover:border-cyan-500/50 transition-colors",
                                feature.className
                            )}
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                <feature.icon size={120} />
                            </div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-6 text-cyan-400">
                                    <feature.icon size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
