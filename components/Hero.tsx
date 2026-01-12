"use client";

import { motion } from "framer-motion";
import { Hand, Volume2, Mic, Battery, Wifi, Signal } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
                <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]" />
                <div className="absolute top-40 right-1/4 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-medium mb-6">
                        ✨ Revolusi Aksesibilitas Indonesia
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-6">
                        Suara untuk Semua: <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                            Terjemahkan & Pelajari
                        </span>{" "}
                        Bahasa Isyarat.
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Aplikasi all-in-one untuk menerjemahkan bahasa isyarat ke teks/suara secara real-time,
                        dan platform belajar SIBI & BISINDO yang interaktif.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="px-8 py-4 rounded-full bg-white text-[#0f172a] font-bold text-lg hover:bg-slate-200 transition-colors w-full sm:w-auto">
                            Mulai Belajar
                        </button>
                        <button className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-shadow w-full sm:w-auto">
                            Download App
                        </button>
                    </div>
                </motion.div>

                {/* Interactive Phone Mockup */}
                <div className="mt-20 flex justify-center perspective-[2000px]">
                    <motion.div
                        initial={{ opacity: 0, rotateX: 20, y: 100 }}
                        animate={{
                            opacity: 1,
                            rotateX: 0,
                            y: [0, -20, 0]
                        }}
                        transition={{
                            opacity: { duration: 1, delay: 0.2 },
                            rotateX: { duration: 1, delay: 0.2 },
                            y: {
                                repeat: Infinity,
                                duration: 6,
                                ease: "easeInOut",
                                delay: 1.2
                            }
                        }}
                        className="relative w-[320px] sm:w-[350px] h-[700px] bg-[#0f172a] rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden ring-1 ring-white/10"
                    >
                        {/* Notch & Status Bar */}
                        <div className="absolute top-0 left-0 w-full h-8 bg-slate-900 z-50 px-6 flex items-center justify-between">
                            <span className="text-[10px] text-slate-400 font-medium">9:41</span>
                            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-32 h-6 bg-slate-800 rounded-b-2xl" />
                            <div className="flex items-center gap-1.5 text-slate-400">
                                <Signal size={10} />
                                <Wifi size={10} />
                                <Battery size={10} />
                            </div>
                        </div>

                        {/* Screen Header */}
                        <div className="pt-12 pb-4 px-6 bg-slate-900/50 backdrop-blur-sm border-b border-white/5 flex items-center justify-between">
                            <span className="font-bold text-white">Bicara App</span>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600" />
                        </div>

                        {/* Chat Interface */}
                        <div className="p-4 space-y-4 flex flex-col h-[520px]">
                            {/* Step 1: User Input (Simulated) */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.5, duration: 0.5 }}
                                className="self-start max-w-[85%]"
                            >
                                <div className="bg-slate-800 rounded-2xl rounded-tl-sm p-3 border border-white/5 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-cyan-400">
                                        <Hand size={16} />
                                    </div>
                                    <span className="text-slate-300 text-sm">Mendeteksi Gerakan...</span>
                                </div>
                            </motion.div>

                            {/* Step 2: System Response */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 3.5, duration: 0.5 }}
                                className="self-end max-w-[85%]"
                            >
                                <div className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl rounded-tr-sm p-4 shadow-lg shadow-cyan-500/10">
                                    <p className="text-white font-medium">Halo, selamat pagi! 👋</p>
                                </div>
                            </motion.div>

                            {/* Step 3: Audio Output Animation */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 4.5, duration: 0.3 }}
                                className="self-end flex items-center gap-2"
                            >
                                <div className="flex gap-1 h-4 items-end">
                                    <motion.div animate={{ height: [8, 16, 8] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-1 bg-cyan-400 rounded-full" />
                                    <motion.div animate={{ height: [12, 6, 12] }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-1 bg-cyan-400 rounded-full" />
                                    <motion.div animate={{ height: [6, 14, 6] }} transition={{ repeat: Infinity, duration: 0.9 }} className="w-1 bg-cyan-400 rounded-full" />
                                    <motion.div animate={{ height: [10, 5, 10] }} transition={{ repeat: Infinity, duration: 0.7 }} className="w-1 bg-cyan-400 rounded-full" />
                                </div>
                                <span className="text-xs text-cyan-400 font-medium">Speaking...</span>
                            </motion.div>
                        </div>

                        {/* Floating Action Button */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full flex justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.4)] border-4 border-[#0f172a] relative z-10"
                            >
                                <Mic className="text-white" size={28} />
                            </motion.button>
                            {/* Curved Bar Background */}
                            <div className="absolute bottom-0 w-full h-20 bg-slate-900/80 backdrop-blur-md pt-4" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
