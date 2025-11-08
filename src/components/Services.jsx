import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Bug, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: Compass,
    title: 'Advisory',
    desc: 'Discovery workshops, security posture reviews, and pragmatic roadmaps.'
  },
  {
    icon: Bug,
    title: 'Pentesting',
    desc: 'Web, mobile, and cloud assessments with clear, actionable reporting.'
  },
  {
    icon: ShieldCheck,
    title: 'Program Design',
    desc: 'Build or refine your security program with modern, lightweight processes.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            Services for teams that ship fast
          </h2>
          <p className="mt-3 text-neutral-600">
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
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
            >
              <div className="flex items-center gap-3">
                <s.icon className="h-5 w-5 text-neutral-700" />
                <h3 className="text-lg font-semibold text-neutral-900">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm text-neutral-600">{s.desc}</p>
              <a href="#contact" className="mt-4 inline-block text-sm font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-800">
                Learn more
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
