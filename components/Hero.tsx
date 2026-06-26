'use client';

import { motion } from 'framer-motion';
import { heroData } from '../lib/data';

const roles = heroData.roles;

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(96,165,250,0.12),_transparent_20%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(14,165,233,0.08),transparent_40%)]" />
      <div className="relative container mx-auto flex min-h-screen flex-col justify-center px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.36em] text-cyan-300/80">
            Hello, I am
          </p>
          <h1 className="text-5xl font-semibold leading-tight text-white sm:text-6xl">
            {heroData.name}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-3 text-lg text-slate-300 sm:text-xl">
            <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-slate-900/80 px-4 py-2 text-cyan-300 shadow-glow">
              {roles[0]}
            </span>
            <span className="text-slate-500">/</span>
            <span className="text-slate-400">{roles[1]}</span>
            <span className="text-slate-500">/</span>
            <span className="text-slate-400">{roles[2]}</span>
          </div>
          <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {heroData.tagline}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              {heroData.ctaWork}
            </a>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-white"
            >
              {heroData.ctaCV}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
