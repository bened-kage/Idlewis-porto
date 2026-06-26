'use client';

import { motion } from 'framer-motion';
import { projects } from '../lib/data';

export default function Projects() {
  return (
    <div className="space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65 }}
        className="space-y-3"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Projects</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Recent Work</h2>
        <p className="max-w-3xl text-slate-400 leading-7">
          Selected projects highlighting network infrastructure design, system development, and data analytics support for modern technical solutions.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="group rounded-3xl border border-slate-800 bg-slate-950/85 p-6 transition-shadow duration-300 hover:shadow-glow"
          >
            <div className="mb-4 text-sm uppercase tracking-[0.24em] text-cyan-300/80">
              Project
            </div>
            <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
            <p className="mt-4 text-slate-300 leading-7">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-800 bg-slate-900/90 px-3 py-1 text-sm text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
