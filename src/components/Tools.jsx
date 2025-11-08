import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Terminal, ClipboardList, KeyRound } from 'lucide-react';

const tools = [
  {
    icon: Terminal,
    title: 'Recon Console',
    desc: 'Automated reconnaissance with diffing, enrichment, and export.',
    accent: 'emerald'
  },
  {
    icon: Shield,
    title: 'Surface Mapper',
    desc: 'Map domains, tech, and exposure with graph views and filters.',
    accent: 'cyan'
  },
  {
    icon: ClipboardList,
    title: 'Report Builder',
    desc: 'Standardized findings with CVSS helpers and polished outputs.',
    accent: 'emerald'
  },
  {
    icon: KeyRound,
    title: 'Credential Scanner',
    desc: 'Secret detection tuned for repos and pipelines.',
    accent: 'cyan'
  }
];

export default function Tools() {
  return (
    <section id="tools" className="relative bg-neutral-950 py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(34,211,238,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-mono text-3xl font-semibold tracking-tight md:text-4xl">
            Terminal-grade utilities
          </h2>
          <p className="mt-3 font-mono text-sm text-emerald-200/80">
            Minimal UI, neon feedback, frictionless flow.
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
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_30px_rgba(0,0,0,0.2)] backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <t.icon className="h-5 w-5 text-emerald-300 transition group-hover:scale-110" />
                <h3 className="font-mono text-lg font-semibold text-white">{t.title}</h3>
              </div>
              <p className="mt-3 font-mono text-xs text-emerald-200/80">{t.desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-emerald-400/20 blur-2xl transition-opacity group-hover:opacity-80" />
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100" style={{background: 'conic-gradient(from 180deg at 50% 50%, rgba(16,185,129,0.15), rgba(34,211,238,0.15), transparent 40%)'}} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
