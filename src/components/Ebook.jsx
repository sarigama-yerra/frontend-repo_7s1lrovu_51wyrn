import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Download } from 'lucide-react';

const container = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export default function Ebook() {
  return (
    <section id="ebook" className="relative bg-neutral-950 py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(16,185,129,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid items-center gap-10 md:grid-cols-[1.1fr_1fr]"
        >
          <div className="relative rounded-2xl border border-emerald-400/20 bg-white/0 p-8 shadow-[0_0_40px_rgba(16,185,129,0.08)] backdrop-blur-sm">
            <div className="inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-mono text-emerald-200">
              <BookOpen className="h-4 w-4" />
              Hacker's Field Manual
            </div>
            <h2 className="mt-6 font-mono text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Pragmatic playbooks for real-world ops
            </h2>
            <p className="mt-4 max-w-prose font-mono text-sm text-emerald-200/80 md:text-base">
              From recon to reporting: checklists, workflows, and templates that keep you fast and disciplined under pressure.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#download-ebook"
                className="inline-flex items-center gap-2 rounded-lg border border-emerald-400/40 bg-emerald-400/10 px-5 py-3 font-mono text-sm text-emerald-200 transition hover:bg-emerald-400/15"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </a>
              <span className="font-mono text-xs text-emerald-200/70">120+ pages • No fluff • Free updates</span>
            </div>
          </div>

          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-neutral-900 to-neutral-950 shadow-[0_0_50px_rgba(34,211,238,0.08)]">
              <div className="absolute inset-0 grid place-items-center">
                <div className="h-40 w-32 rotate-6 rounded-lg border border-emerald-400/20 bg-neutral-900 shadow-[0_0_30px_rgba(16,185,129,0.15)]" />
                <div className="pointer-events-none absolute -left-8 -top-8 h-24 w-24 rounded-full bg-emerald-400/20 blur-2xl" />
                <div className="pointer-events-none absolute -right-8 -bottom-8 h-24 w-24 rounded-full bg-cyan-400/20 blur-2xl" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="font-mono text-xs text-emerald-100/80">
                  Includes ready-to-use checklists, workflow templates, and a curated toolkit to accelerate your practice.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
