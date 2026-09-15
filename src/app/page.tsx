"use client";

import Link from "next/link";
import { motion } from "motion/react";

const meetings = [
  { slug: "2026-09-15", label: "9/15(화) 회의록", month: "2026.09", slides: 12 },
];

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-10 sm:px-12">
      <header className="mx-auto flex max-w-6xl items-end justify-between border-b border-white/10 pb-6">
        <div>
          <p className="text-sm tracking-[0.2em] text-[#F2C14E]">EXECUTIVE MEETING</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">2026 임원진 회의</h1>
        </div>
        <p className="text-sm text-white/50 tabular-nums">{meetings.length}개 회의록</p>
      </header>

      <section className="mx-auto mt-10 max-w-6xl">
        <h2 className="mb-6 text-sm font-semibold text-white/50 tabular-nums">2026.09</h2>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-6">
          {meetings.map((m, i) => (
            <motion.div
              key={m.slug}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.4, ease: "easeOut" }}
            >
              <Link
                href={`/meetings/${m.slug}`}
                className="group flex flex-col items-center gap-3 rounded-xl p-3 outline-none focus-visible:ring-2 focus-visible:ring-[#F2C14E]"
              >
                <motion.div
                  whileHover={{ y: -6, scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 400, damping: 22 }}
                  className="relative h-28 w-36"
                >
                  <div className="absolute left-0 top-0 h-6 w-16 rounded-t-lg bg-[#D9A937]" />
                  <div className="absolute inset-x-0 bottom-0 top-4 rounded-lg rounded-tl-none bg-gradient-to-b from-[#F2C14E] to-[#D9A937] shadow-[0_12px_30px_rgba(0,0,0,0.45)]" />
                  <div className="absolute inset-x-3 bottom-3 top-8 rounded-md bg-[#F4F1EA]/90 transition-transform duration-300 group-hover:-translate-y-2" />
                  <div className="absolute inset-x-0 bottom-0 top-10 flex items-end rounded-lg bg-gradient-to-b from-[#F5CB5C] to-[#E0B040] p-3">
                    <span className="text-lg font-bold text-[#0B1020] tabular-nums">09.15</span>
                  </div>
                </motion.div>
                <span className="text-center text-sm font-medium text-white/90">{m.label}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
