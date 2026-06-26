'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { navLinks } from '../lib/data';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/70 bg-slate-950/90 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#hero" className="text-xl font-semibold tracking-[0.18em] text-white">
          MF
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          aria-label="Toggle menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-cyan-400 hover:text-white md:hidden"
          onClick={() => setOpen(!open)}
        >
          <span className="text-lg">{open ? '✕' : '☰'}</span>
        </button>
      </div>

      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-slate-800 bg-slate-950/95 md:hidden"
        >
          <div className="flex flex-col gap-4 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-base text-slate-200 transition hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      ) : null}
    </header>
  );
}
