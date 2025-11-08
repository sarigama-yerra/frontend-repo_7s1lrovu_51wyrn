import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Terminal, ClipboardList, KeyRound } from 'lucide-react';

const tools = [
  {
    icon: Terminal,
    title: 'Recon Console',
    desc: 'Automated reconnaissance scripts with smart diffing and clean exports.'
  },
  {
    icon: Shield,
    title: 'Surface Mapper',
    desc: 'Visualize attack surface by domains, tech, and exposure in seconds.'
  },
  {
    icon: ClipboardList,
    title: 'Report Builder',
    desc: 'Standardized findings, CVSS helpers, and beautifully formatted PDFs.'
  },
  {
    icon: KeyRound,
    title: 'Credential Scanner',
    desc: 'Lightweight secret detection for repos and CI logs.'
  }
];

export default function Tools() {
  return (
    <section id="tools" className="relative bg-gradient-to-b from-white to-neutral-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            Tools that feel invisible
          </h2>
          <p className="mt-3 text-neutral-600">
            Minimal UI, maximum flow. Thoughtful defaults, smooth motion, and no clutter.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
            >
              <div className="flex items-center gap-3">
                <t.icon className="h-5 w-5 text-neutral-700 transition group-hover:scale-110" />
                <h3 className="text-lg font-semibold text-neutral-900">{t.title}</h3>
              </div>
              <p className="mt-3 text-sm text-neutral-600">{t.desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-red-100/50 blur-2xl transition-opacity group-hover:opacity-80" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
