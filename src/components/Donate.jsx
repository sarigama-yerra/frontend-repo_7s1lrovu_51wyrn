import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake } from 'lucide-react';

export default function Donate() {
  return (
    <section id="donate" className="relative bg-neutral-950 py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.16),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
            <HeartHandshake className="h-4 w-4 text-emerald-300" />
            <span className="font-mono text-emerald-200">Support the mission</span>
          </div>
          <h2 className="mt-6 font-mono text-3xl font-semibold tracking-tight md:text-4xl">
            Keep the tools free and the knowledge open
          </h2>
          <p className="mt-3 font-mono text-sm text-emerald-200/80">
            Your donation funds open-source tools, research, and free education for the community.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#donate-now"
              className="rounded-lg border border-emerald-400/40 bg-emerald-400/10 px-5 py-3 font-mono text-sm text-emerald-200 transition hover:bg-emerald-400/15"
            >
              Donate now
            </a>
            <a
              href="#sponsor"
              className="rounded-lg border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 font-mono text-sm text-cyan-200 transition hover:bg-cyan-400/15"
            >
              Become a sponsor
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mt-10 grid gap-4 text-left sm:grid-cols-3"
          >
            {[
              ['Open source first', 'All core tools remain free and community-driven.'],
              ['Transparent impact', 'Regular reports on how funds are used.'],
              ['Community focus', 'Workshops, docs, and templates for all levels.']
            ].map(([title, desc]) => (
              <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <h4 className="font-mono text-sm font-semibold text-white">{title}</h4>
                <p className="mt-1 font-mono text-xs text-emerald-200/80">{desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
