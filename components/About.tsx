'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { aboutData } from '../lib/data';

const stats = [
  { label: 'Location', value: aboutData.location },
  { label: 'Email', value: aboutData.email },
  { label: 'Phone', value: aboutData.phone },
];

export default function About() {
  return (
    <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75 }}
        className="relative mx-auto flex h-full max-w-sm items-center justify-center rounded-3xl border border-slate-800 bg-slate-950/95 p-6 shadow-glow"
      >
        <div className="relative overflow-hidden rounded-full border border-cyan-400/30 p-1 shadow-[0_0_40px_rgba(56,_189,_248,0.12)]">
          <Image
            src="/profile.jpeg"
            alt="Profile photo"
            width={360}
            height={360}
            className="h-72 w-72 rounded-full object-cover"
            priority
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75, delay: 0.1 }}
        className="space-y-8"
      >
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">About</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Professional Overview</h2>
          <p className="max-w-3xl text-slate-300 leading-8">{aboutData.description}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((item) => (
            <div key={item.label} className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5 shadow-sm">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">{item.label}</p>
              <p className="mt-3 max-w-full break-words text-base font-medium text-white">{item.value}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
