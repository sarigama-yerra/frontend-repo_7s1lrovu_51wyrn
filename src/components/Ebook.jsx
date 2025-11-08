import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Download } from 'lucide-react';

const container = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export default function Ebook() {
  return (
    <section id="ebook" className="relative py-24 bg-white/60 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-10 md:grid-cols-[1.1fr_1fr] items-center"
        >
          <div className="relative rounded-2xl border border-neutral-200 bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
            <div className="inline-flex items-center gap-3 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm font-medium text-neutral-700">
              <BookOpen className="h-4 w-4" />
              Hacker's Field Manual
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
              A clean, practical guide to modern hacking workflows
            </h2>
            <p className="mt-4 text-neutral-600 md:text-lg">
              Learn the mindset, setup, and tooling used by professionals. From reconnaissance to reporting, distilled into a crisp, actionable ebook.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#download-ebook"
                className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-5 py-3 text-white transition hover:bg-neutral-800"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </a>
              <span className="text-sm text-neutral-500">120+ pages • No fluff • Free updates</span>
            </div>
          </div>

          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-white shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
              <div className="absolute inset-0 grid place-items-center">
                <div className="h-40 w-32 rotate-6 rounded-lg bg-neutral-100 shadow-inner" />
                <div className="absolute -left-8 -top-8 h-24 w-24 rounded-full bg-red-100/70 blur-2xl" />
                <div className="absolute -right-8 -bottom-8 h-24 w-24 rounded-full bg-neutral-200/70 blur-2xl" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-neutral-200 bg-white/80 p-4 backdrop-blur">
                <p className="text-sm text-neutral-700">
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
