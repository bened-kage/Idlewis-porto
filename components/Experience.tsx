'use client';

import { motion } from 'framer-motion';
import { experience } from '../lib/data';

export default function Experience() {
  return (
    <div className="space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65 }}
        className="space-y-3"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Experience</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Career Path</h2>
        <p className="max-w-3xl text-slate-400 leading-7">
          A concise timeline of practical internship responsibilities and academic milestones supporting technical growth in networking and systems.
        </p>
      </motion.div>

      <div className="space-y-8">
        {experience.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="w-full relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/85 p-6 before:hidden sm:before:block before:left-5 before:top-6 before:h-2 before:w-2 sm:before:left-1/2 sm:before:top-10 sm:before:h-3 sm:before:w-3 before:rounded-full before:bg-cyan-400 before:shadow-glow"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-cyan-300/90">{item.organization}</p>
              </div>
              <p className="text-sm text-slate-400">{item.date}</p>
            </div>
            <p className="mt-4 text-slate-300 leading-7">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
