'use client';

import { motion } from 'framer-motion';
import { skillGroups } from '../lib/data';

export default function Skills() {
  return (
    <div className="space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65 }}
        className="space-y-3"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Skills</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Core Technical Expertise</h2>
        <p className="max-w-3xl text-slate-400 leading-7">
          Expertise in network engineering, wired and wireless infrastructure, software frameworks, and database systems supported by hands-on tools and practical projects.
        </p>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-2">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="rounded-3xl border border-slate-800 bg-slate-950/85 p-6 shadow-glow"
          >
            <h3 className="text-xl font-semibold text-white">{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-700 bg-slate-900/90 px-4 py-2 text-sm text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
