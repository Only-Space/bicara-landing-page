"use client";

import Link from "next/link";
import { Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#0f172a] border-t border-white/5 py-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <Link href="/" className="text-2xl font-bold text-white mb-2 block">
                        Bicara
                    </Link>
                    <p className="text-slate-500 text-sm">
                        &copy; {new Date().getFullYear()} Bicara App. All rights reserved.
                    </p>
                </div>

                <div className="flex gap-6">
                    <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors"><Twitter size={20} /></Link>
                    <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors"><Instagram size={20} /></Link>
                    <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors"><Linkedin size={20} /></Link>
                </div>
            </div>
        </footer>
    );
}
