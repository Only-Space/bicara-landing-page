"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Flame, 
  Heart, 
  Gem, 
  Check, 
  Lock, 
  Play, 
  Trophy, 
  Star,
  BookOpen
} from "lucide-react";

// --- Mock Data ---
type NodeStatus = "completed" | "active" | "locked";
type NodeType = "lesson" | "checkpoint" | "chest";

interface LessonNode {
  id: number;
  title: string;
  type: NodeType;
  status: NodeStatus;
  position: "left" | "center" | "right";
}

const UNITS = [
  {
    id: 1,
    title: "Unit 1: Pengenalan SIBI & BISINDO",
    description: "Pelajari dasar-dasar bahasa isyarat Indonesia.",
    lessons: [
      { id: 1, title: "Halo & Perkenalan", type: "lesson", status: "completed", position: "center" },
      { id: 2, title: "Abjad A-E", type: "lesson", status: "completed", position: "left" },
      { id: 3, title: "Abjad F-J", type: "lesson", status: "completed", position: "left" },
      { id: 4, title: "Abjad K-O", type: "lesson", status: "completed", position: "center" },
      { id: 5, title: "Kuis Dasar 1", type: "chest", status: "completed", position: "right" },
      { id: 6, title: "Angka 1-10", type: "lesson", status: "active", position: "right" },
      { id: 7, title: "Kata Salam", type: "lesson", status: "locked", position: "center" },
      { id: 8, title: "Keluarga (Intro)", type: "lesson", status: "locked", position: "left" },
      { id: 9, title: "Review Unit 1", type: "checkpoint", status: "locked", position: "center" },
    ] as LessonNode[]
  }
];

// --- Components ---

const StickyHeader = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/5 h-16 flex items-center justify-center px-4">
    <div className="flex items-center gap-4 md:gap-8 max-w-md w-full justify-between">
      <div className="flex items-center gap-2 group cursor-pointer">
        <Flame className="text-orange-500 fill-orange-500 animate-pulse" size={24} />
        <span className="text-orange-400 font-bold">5</span>
      </div>
      <div className="flex items-center gap-2 group cursor-pointer">
        <Gem className="text-cyan-400 fill-cyan-400/20" size={24} />
        <span className="text-cyan-400 font-bold">1200</span>
      </div>
      <div className="flex items-center gap-2 group cursor-pointer">
        <Heart className="text-red-500 fill-red-500" size={24} />
        <span className="text-red-400 font-bold">5/5</span>
      </div>
    </div>
  </header>
);

const UnitHeader = ({ unit }: { unit: typeof UNITS[0] }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-[#1e293b] rounded-2xl p-6 border-b-4 border-slate-700 mb-8 mx-4 max-w-md md:mx-auto relative overflow-hidden"
  >
    <div className="relative z-10 flex justify-between items-start">
      <div>
        <h2 className="text-xl font-bold text-white mb-2">{unit.title}</h2>
        <p className="text-slate-400 text-sm">{unit.description}</p>
      </div>
      <BookOpen className="text-cyan-400" size={32} />
    </div>
    <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl" />
  </motion.div>
);

const Node = ({ lesson, index }: { lesson: LessonNode; index: number }) => {
  const isCompleted = lesson.status === "completed";
  const isActive = lesson.status === "active";
  const isLocked = lesson.status === "locked";
  
  const xOffset = lesson.position === "left" ? -60 : lesson.position === "right" ? 60 : 0;

  return (
    <div 
      className="relative flex justify-center mb-8 h-20 items-center z-10" // h-20 matches node height roughly for spacing
      style={{ transform: `translateX(${xOffset}px)` }}
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20, 
          delay: index * 0.1 
        }}
        className="relative group"
      >
        {isActive && (
           <div className="absolute -inset-4 rounded-full border-[3px] border-cyan-500/30 animate-ping pointer-events-none" />
        )}
        
        <button
          disabled={isLocked}
          className={`
            w-20 h-20 rounded-full flex items-center justify-center border-b-8 transition-all relative
            ${isActive 
              ? "bg-cyan-500 border-cyan-700 shadow-[0_0_30px_rgba(6,182,212,0.4)] translate-y-0 active:translate-y-2 active:border-b-0" 
              : isCompleted 
                ? "bg-cyan-600 border-cyan-800" 
                : "bg-slate-700 border-slate-800 grayscale cursor-not-allowed"}
          `}
        >
          {lesson.type === "chest" ? (
             <span className="text-2xl">🎁</span>
          ) : lesson.type === "checkpoint" ? (
             <Trophy className={`${isActive || isCompleted ? "text-yellow-300 fill-yellow-300" : "text-slate-500"} `} size={32} />
          ) : isCompleted ? (
            <Check className="text-slate-900 stroke-[4px]" size={32} />
          ) : isActive ? (
            <Play className="text-white fill-white ml-1" size={32} />
          ) : (
            <Lock className="text-slate-500" size={28} />
          )}

          {isCompleted && lesson.type === "lesson" && (
            <div className="absolute -bottom-2 -right-2 flex">
               <div className="bg-slate-900 rounded-full p-1 border border-slate-700">
                  <Star className="text-yellow-400 fill-yellow-400" size={12} />
               </div>
            </div>
          )}
        </button>

        <div className={`
            absolute top-full mt-3 left-1/2 -translate-x-1/2 w-32 text-center
            opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none
            bg-slate-800 text-slate-200 text-xs py-1 px-2 rounded-lg border border-slate-700 shadow-xl z-20
        `}>
            {lesson.title}
        </div>
      </motion.div>
    </div>
  );
};

// SVG Path Generator
const Path = ({ lessons }: { lessons: LessonNode[] }) => {
    // Assuming each node is 80px + 32px (mb-8) = 112px apart vertically
    // Center is X=0 relative to the svg which we will center in the container
    const nodeHeight = 112; 
    
    // Generate simple zig-zag path coordinates
    const points = lessons.map((lesson, i) => {
        const x = lesson.position === 'left' ? -60 : lesson.position === 'right' ? 60 : 0;
        const y = i * nodeHeight + 40; // +40 to center in the 80px height node
        return { x, y };
    });

    // Create SVG path string with curves
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
        const curr = points[i];
        const next = points[i + 1];
        const midY = (curr.y + next.y) / 2;
        // Cubic bezier for smooth connection: C cp1x cp1y, cp2x cp2y, endx, endy
        // Control points: vertical movement first then horizontal
        d += ` C ${curr.x} ${midY}, ${next.x} ${midY}, ${next.x} ${next.y}`;
    }

    // Determine the split point between completed/active vs locked for color change?
    // For now, simple single color path
    
    return (
        <svg className="absolute top-0 left-1/2 -ml-[100px] w-[200px] h-full overflow-visible pointer-events-none z-0">
             <path 
                d={d} 
                className="stroke-slate-800 stroke-[12px] fill-none" 
                strokeLinecap="round"
             />
             <path 
                d={d} 
                className="stroke-cyan-900/40 stroke-[12px] fill-none" 
                strokeLinecap="round"
             />
             {/* We could duplicate path for 'progress' masking if we want partial active color */}
        </svg>
    );
}

export default function LearningHub() {
  return (
    <main className="min-h-screen bg-slate-900 pb-32">
        <StickyHeader />
        
        <div className="pt-24 pb-10 max-w-2xl mx-auto px-4">
             {UNITS.map((unit) => (
                <div key={unit.id} className="relative">
                    <UnitHeader unit={unit} />
                    
                    <div className="relative flex flex-col items-center">
                        <Path lessons={unit.lessons} />
                        {unit.lessons.map((lesson, idx) => (
                             <Node key={lesson.id} lesson={lesson} index={idx} />
                        ))}
                    </div>
                </div>
             ))}
        </div>
    </main>
  );
}
