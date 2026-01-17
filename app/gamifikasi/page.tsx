"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Trophy, 
  Medal, 
  Heart, 
  ShoppingCart, 
  Lock, 
  Zap, 
  Crown,
  Star
} from "lucide-react";

// --- Mock Data ---

const LEADERBOARD_DATA = [
  { id: 2, name: "Budi Santoso", xp: 2400, rank: 2, avatarColor: "bg-blue-500" },
  { id: 1, name: "Siti Rahma", xp: 3500, rank: 1, avatarColor: "bg-cyan-400" },
  { id: 3, name: "Andi Wijaya", xp: 2100, rank: 3, avatarColor: "bg-indigo-500" },
];

const ACHIEVEMENTS = [
  { id: 1, title: "Mulai Belajar", desc: "Selesaikan pelajaran pertama", icon: <Star />, unlocked: true },
  { id: 2, title: "Si Kilat", desc: "Selesaikan pelajaran < 2 menit", icon: <Zap />, unlocked: true },
  { id: 3, title: "Juara Kelas", desc: "Raih posisi #1 di Leaderboard", icon: <Crown />, unlocked: false },
  { id: 4, title: "7 Hari Nonstop", desc: "Pertahankan streak 7 hari", icon: <Trophy />, unlocked: false },
];

const SHOP_ITEMS = [
  { id: 1, title: "Isi Ulang Penuh", desc: "5 Nyawa", price: "300 Gems", icon: <Heart className="text-red-500 fill-red-500" /> },
  { id: 2, title: "Paket Hemat", desc: "2 Nyawa", price: "150 Gems", icon: <Heart className="text-red-400" /> },
  { id: 3, title: "Unlimited (1 Jam)", desc: "Belajar bebas tanpa batas", price: "500 Gems", icon: <Zap className="text-yellow-400 fill-yellow-400" /> },
];

export default function GamificationPage() {
  return (
    <main className="min-h-screen bg-slate-900 pb-20 pt-32 px-4 md:px-8">
      
      {/* Page Title */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto mb-12 text-center"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Gamifikasi & Progress</h1>
        <p className="text-slate-400">Pantau pencapaianmu dan bersaing dengan teman!</p>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Section 1: Leaderboard */}
        <section>
            <div className="flex items-center gap-3 mb-8">
                <Crown className="text-yellow-400" />
                <h2 className="text-2xl font-bold text-white">Top 3 Learners</h2>
            </div>
            
            <div className="flex justify-center items-end gap-4 md:gap-6 h-[300px]">
                {LEADERBOARD_DATA.map((user) => {
                    const isFirst = user.rank === 1;
                    return (
                        <motion.div 
                            key={user.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + (user.rank * 0.1) }}
                            className={`
                                relative flex flex-col items-center bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm
                                ${isFirst ? "w-1/3 h-full bg-gradient-to-b from-cyan-900/40 to-slate-900 border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.2)] z-10" : "w-1/4 h-3/4 bg-slate-800/50"}
                            `}
                        >
                             <div className={`
                                w-16 h-16 md:w-20 md:h-20 rounded-full mb-4 flex items-center justify-center text-xl font-bold text-white shadow-lg
                                ${user.avatarColor}
                                ${isFirst ? "ring-4 ring-cyan-400 ring-offset-4 ring-offset-slate-900" : ""}
                             `}>
                                {user.name.charAt(0)}
                             </div>
                             
                             {isFirst && <Crown className="absolute -top-6 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]" size={40} />}
                             
                             <div className="text-center mt-auto">
                                <h3 className={`font-bold ${isFirst ? "text-lg text-white" : "text-slate-300"}`}>{user.name}</h3>
                                <p className="text-cyan-400 font-mono text-sm">{user.xp} XP</p>
                             </div>
                             
                             <div className={`
                                absolute -bottom-5 w-8 h-8 rounded-full flex items-center justify-center font-bold text-slate-900
                                ${isFirst ? "bg-yellow-400 w-10 h-10 text-lg" : "bg-slate-500"}
                             `}>
                                {user.rank}
                             </div>
                        </motion.div>
                    )
                })}
            </div>
        </section>

        {/* Section 2: Achievements */}
        <section>
            <div className="flex items-center gap-3 mb-8">
                <Medal className="text-cyan-400" />
                <h2 className="text-2xl font-bold text-white">Achievements</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {ACHIEVEMENTS.map((badge, idx) => (
                    <motion.div 
                        key={badge.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className={`
                            p-6 rounded-2xl border flex flex-col items-center text-center gap-4 transition-all
                            ${badge.unlocked 
                                ? "bg-slate-800/80 border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.1)] group hover:border-cyan-400 hover:-translate-y-1" 
                                : "bg-slate-900 border-white/5 opacity-50 grayscale"}
                        `}
                    >
                        <div className={`
                            w-16 h-16 rounded-full flex items-center justify-center mb-2
                            ${badge.unlocked ? "bg-cyan-500/10 text-cyan-400" : "bg-slate-800 text-slate-600"}
                        `}>
                            {badge.unlocked ? badge.icon : <Lock />}
                        </div>
                        <div>
                            <h3 className="text-white font-bold mb-1">{badge.title}</h3>
                            <p className="text-xs text-slate-400">{badge.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* Section 3: Shop */}
        <section>
            <div className="flex items-center gap-3 mb-8">
                <ShoppingCart className="text-emerald-400" />
                <h2 className="text-2xl font-bold text-white">Toko & Top-up</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {SHOP_ITEMS.map((item, idx) => (
                    <motion.div 
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-slate-800/50 backdrop-blur-md border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:border-cyan-500/30 transition-colors"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                             {item.icon}
                        </div>
                        
                        <div className="mb-6">
                            <div className="w-12 h-12 rounded-xl bg-slate-700/50 flex items-center justify-center text-2xl mb-4">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-slate-400 text-sm">{item.desc}</p>
                        </div>
                        
                        <button className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                             <span>{item.price}</span>
                        </button>
                    </motion.div>
                 ))}
            </div>
        </section>

      </div>
    </main>
  );
}
