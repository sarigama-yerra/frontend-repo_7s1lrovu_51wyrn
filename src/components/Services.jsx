import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Bug, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: Compass,
    title: 'Advisory',
    desc: 'Discovery workshops, posture reviews, and pragmatic roadmaps.'
  },
  {
    icon: Bug,
    title: 'Pentesting',
    desc: 'Web, mobile, and cloud assessments with crisp, actionable reports.'
  },
  {
    icon: ShieldCheck,
    title: 'Program Design',
    desc: 'Build or refine your program with modern, lightweight processes.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative bg-neutral-950 py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(16,185,129,0.1),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-mono text-3xl font-semibold tracking-tight md:text-4xl">
            Services for fast-moving teams
          </h2>
          <p className="mt-3 font-mono text-sm text-emerald-200/80">
            Sharp assessments and clear guidance to move confidently.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_30px_rgba(0,0,0,0.2)] backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <s.icon className="h-5 w-5 text-cyan-300" />
                <h3 className="font-mono text-lg font-semibold text-white">{s.title}</h3>
              </div>
              <p className="mt-3 font-mono text-xs text-emerald-200/80">{s.desc}</p>
              <a href="#contact" className="mt-4 inline-block font-mono text-xs font-medium text-emerald-300 underline decoration-emerald-700/40 underline-offset-4 hover:decoration-emerald-400">
                Learn more
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
