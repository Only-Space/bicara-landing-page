"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Mic, Battery, Wifi, Signal, Play, Check, Lock, Trophy, Flame, Crown, Home, BookOpen, User } from "lucide-react";

// --- Sub-components for Screens ---

const BottomNav = ({ active = "home" }: { active?: "home" | "learn" | "profile" }) => (
    <div className="absolute bottom-0 left-0 w-full h-16 bg-slate-900 border-t border-white/5 flex items-center justify-around px-2 z-50">
        <div className={`flex flex-col items-center gap-1 ${active === "home" ? "text-cyan-400" : "text-slate-500"}`}>
            <Home size={20} />
            <span className="text-[10px] font-medium">Home</span>
        </div>
        <div className={`flex flex-col items-center gap-1 ${active === "learn" ? "text-cyan-400" : "text-slate-500"}`}>
            <BookOpen size={20} />
            <span className="text-[10px] font-medium">Belajar</span>
        </div>
        <div className={`flex flex-col items-center gap-1 ${active === "profile" ? "text-cyan-400" : "text-slate-500"}`}>
             <User size={20} />
             <span className="text-[10px] font-medium">Profil</span>
        </div>
    </div>
);

const TranslationScreen = () => (
    <div className="relative w-full h-full bg-black">
        <div className="absolute inset-0 z-0">
            <Image
                src="/hand_gesture.png"
                alt="Live Camera Feed"
                fill
                className="object-cover opacity-80"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent" />
        </div>

        <div className="absolute top-1/4 left-1/4 right-[15%] bottom-[35%] border-2 border-green-400 rounded-lg shadow-[0_0_20px_rgba(74,222,128,0.3)] z-10">
            <div className="absolute -top-8 left-0 flex items-center gap-2 bg-green-500/10 backdrop-blur-md border border-green-500/30 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-[10px] font-mono text-green-300 tracking-wider">
                    [AI DETECTING: "HELLO"]
                </span>
            </div>
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-4 border-l-4 border-green-400 rounded-tl-sm" />
            <div className="absolute -top-1 -right-1 w-4 h-4 border-t-4 border-r-4 border-green-400 rounded-tr-sm" />
            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-4 border-l-4 border-green-400 rounded-bl-sm" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-4 border-r-4 border-green-400 rounded-br-sm" />
        </div>

        {/* Translation Result - Moved up to not overlap Mic */}
        <div className="absolute bottom-32 left-4 right-4 z-20">
            <div className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-xl">
                <p className="text-xs text-slate-400 mb-1 font-medium tracking-wide uppercase">Diterjemahkan:</p>
                <p className="text-lg font-semibold text-white">
                    Halo, selamat pagi! 👋
                </p>
            </div>
        </div>

        {/* Floating Action Button (Exclusive to Translation) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center">
            {/* Ripple Effect Ring */ }
            <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                className="absolute w-full h-full rounded-full bg-cyan-500/30"
            />
             {/* Second Ripple */ }
            <motion.div
                animate={{ scale: [1, 1.8], opacity: [0.3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                className="absolute w-full h-full rounded-full bg-cyan-400/20"
            />
            
            {/* Main Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.6)] border-4 border-[#0f172a] z-10"
            >
                <Mic className="text-white drop-shadow-md" size={32} />
            </motion.button>
        </div>
    </div>
);

const LearningScreen = () => (
    <div className="w-full h-full bg-slate-900 flex flex-col relative overflow-hidden">
        <div className="p-6">
            <h3 className="text-white font-bold text-lg">Unit 1</h3>
            <p className="text-slate-400 text-xs">Dasar Bahasa Isyarat</p>
        </div>
        
        <div className="flex-1 relative flex flex-col items-center gap-8 p-6 pt-0">
            <div className="absolute top-4 bottom-20 w-1 bg-slate-800" />
            
            <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-cyan-600 border-b-4 border-cyan-800 flex items-center justify-center shadow-lg">
                    <Check className="text-slate-900" size={24} strokeWidth={4} />
                </div>
            </div>

            <div className="relative z-10 translate-x-8">
                <div className="absolute -inset-3 border-2 border-cyan-500/30 rounded-full animate-ping" />
                <div className="w-16 h-16 rounded-full bg-cyan-500 border-b-4 border-cyan-700 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                    <Play className="text-white fill-white ml-1" size={24} />
                </div>
                <div className="absolute top-0 right-0 -mr-2 -mt-2 bg-red-500 text-white text-[10px] px-1.5 rounded-full border border-slate-900">NEW</div>
            </div>

            <div className="relative z-10 -translate-x-8">
                <div className="w-16 h-16 rounded-full bg-slate-800 border-b-4 border-slate-900 flex items-center justify-center">
                    <Lock className="text-slate-600" size={20} />
                </div>
            </div>
             <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-slate-800 border-b-4 border-slate-900 flex items-center justify-center">
                    <span className="text-2xl grayscale opacity-50">🎁</span>
                </div>
            </div>
        </div>
        
        <BottomNav active="learn" />
    </div>
);

const GamificationScreen = () => (
    <div className="w-full h-full bg-slate-900 flex flex-col text-left">
        <div className="p-6 pb-2">
            <div className="flex items-center justify-between mb-6 bg-slate-800/50 p-3 rounded-xl border border-white/5">
                <div className="flex items-center gap-2">
                    <Flame className="text-orange-500 fill-orange-500" size={18} />
                    <span className="text-white font-bold text-sm">5 Hari</span>
                </div>
                <div className="text-cyan-400 font-bold text-sm">1200 XP</div>
            </div>

            <div className="text-center mb-6">
                <h3 className="text-white font-bold text-lg">Leaderboard</h3>
                <p className="text-cyan-400 text-xs">Minggu Ini</p>
            </div>

            <div className="flex items-end justify-center gap-3 h-[200px] mb-4">
                <div className="w-16 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-500 mb-2 border-2 border-slate-700" />
                    <div className="w-full h-24 bg-slate-800/80 rounded-t-lg border-t border-white/5 relative bg-slate-800/80">
                         <div className="absolute -top-3 w-full text-center text-xs font-bold text-slate-400">#2</div>
                    </div>
                </div>

                <div className="w-20 flex flex-col items-center z-10">
                    <Crown className="text-yellow-400 mb-1 drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]" size={24} />
                    <div className="w-12 h-12 rounded-full bg-cyan-400 mb-2 border-2 border-slate-700 ring-2 ring-yellow-400/50" />
                    <div className="w-full h-32 bg-gradient-to-b from-cyan-900/50 to-slate-800 rounded-t-lg border-t border-cyan-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                        <span className="text-xl font-bold text-white">1</span>
                    </div>
                </div>

                <div className="w-16 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-indigo-500 mb-2 border-2 border-slate-700" />
                    <div className="w-full h-16 bg-slate-800/80 rounded-t-lg border-t border-white/5 relative bg-slate-800/80">
                         <div className="absolute -top-3 w-full text-center text-xs font-bold text-slate-400">#3</div>
                    </div>
                </div>
            </div>
        </div>
        
        <BottomNav active="profile" />
    </div>
);

// --- Component Main ---

export default function Hero() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % 3);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const getPosition = (index: number) => {
        const diff = (index - activeIndex + 3) % 3;
        
        if (diff === 0) {
            // Center
            return {
                left: "50%",
                x: "-50%",
                scale: 1,
                opacity: 1,
                zIndex: 20,
                rotateY: 0,
                filter: "brightness(1) blur(0px)"
            };
        } else if (diff === 1) {
             // Right (Next)
            return {
                left: "80%",
                x: "-50%",
                scale: 0.85,
                opacity: 0.5,
                zIndex: 10,
                rotateY: -15, // Tilted towards center
                // filter: "brightness(0.5) blur(2px)"
            };
        } else {
            // Left (Prev)
             return {
                left: "20%",
                x: "-50%",
                scale: 0.85,
                opacity: 0.5,
                zIndex: 10,
                rotateY: 15, // Tilted towards center
                 // filter: "brightness(0.5) blur(2px)"
            };
        }
    };

    const PHONES = [
        { id: 0, content: <TranslationScreen /> },
        { id: 1, content: <LearningScreen /> },
        { id: 2, content: <GamificationScreen /> },
    ];

    return (
        <section className="relative pt-32 pb-40 lg:pt-48 lg:pb-60 overflow-hidden min-h-screen">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
                <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]" />
                <div className="absolute top-40 right-1/4 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center mb-16">
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
            </div>

            {/* 3D Carousel Container */}
            <div className="relative h-[700px] max-w-[1200px] mx-auto perspective-[2000px] overflow-visible">
                {PHONES.map((phone, i) => {
                    const pos = getPosition(i);
                    // Determine if active to show specialized UI details (like floating button)
                    const isActive = (i - activeIndex + 3) % 3 === 0;

                    return (
                        <motion.div 
                            key={phone.id}
                            initial={false}
                            animate={pos}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className={`absolute top-0 w-[320px] sm:w-[350px] h-[700px] bg-[#0f172a] rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden ring-1 ring-white/10 flex flex-col origin-bottom`}
                        >
                            {/* Notch & Status Bar */}
                            <div className="absolute top-0 left-0 w-full h-8 bg-slate-900 z-50 px-6 flex items-center justify-between pointer-events-none">
                                <span className="text-[10px] text-slate-400 font-medium">9:41</span>
                                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-32 h-6 bg-slate-800 rounded-b-2xl" />
                                <div className="flex items-center gap-1.5 text-slate-400">
                                    <Signal size={10} />
                                    <Wifi size={10} />
                                    <Battery size={10} />
                                </div>
                            </div>

                            {/* Screen Header */}
                            <div className="pt-12 pb-4 px-6 bg-slate-900/50 backdrop-blur-sm border-b border-white/5 flex items-center justify-between z-40 relative pointer-events-none">
                                <span className="font-bold text-white">Bicara App</span>
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600" />
                            </div>

                            {/* Content */}
                            <div className="flex-1 relative overflow-hidden bg-slate-950">
                                {phone.content}
                            </div>

                            {/* Home Indicator */}
                            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-[120px] h-1 bg-slate-700 rounded-full z-[60] pointer-events-none" />
                        </motion.div>
                    );
                })}
            </div>
            
            {/* Carousel Indicators */}
            <div className="absolute bottom-10 left-0 width-full flex justify-center gap-3 z-50 w-full">
                {[0, 1, 2].map((idx) => (
                    <motion.div 
                        key={idx}
                        animate={{ 
                            width: activeIndex === idx ? 32 : 8,
                            backgroundColor: activeIndex === idx ? "#22d3ee" : "#334155" 
                        }}
                        className="h-2 rounded-full cursor-pointer"
                        onClick={() => setActiveIndex(idx)}
                    />
                ))}
            </div>
        </section>
    );
}
