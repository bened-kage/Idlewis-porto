'use client';

import { motion } from 'framer-motion';
import { contactData } from '../lib/data';

export default function Contact() {
  return (
    <div className="rounded-[2rem] border border-slate-800 bg-slate-950/85 p-8 shadow-glow">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65 }}
        className="space-y-6"
      >
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Contact</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Let&apos;s Connect</h2>
          <p className="max-w-2xl text-slate-400 leading-7">
            I am available for internship opportunities, network design support, and technical collaboration. Reach out by email or phone.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-5 text-slate-200">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Email</p>
            <a className="mt-3 block text-base font-medium text-white" href={`mailto:${contactData.email}`}>
              {contactData.email}
            </a>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-5 text-slate-200">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Phone</p>
            <a className="mt-3 block text-base font-medium text-white" href={`tel:${contactData.phone}`}>
              {contactData.phone}
            </a>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-5 text-slate-200">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Location</p>
            <p className="mt-3 text-base font-medium text-white">{contactData.location}</p>
          </div>
        </div>

        <a
          href={`mailto:${contactData.email}`}
          className="inline-flex w-full items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 sm:w-auto"
        >
          Email Me
        </a>
      </motion.div>
    </div>
  );
}
