import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden bg-neutral-950">
      {/* 3D Cover - Matrix-like terminal background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xm1zyUmdIZRP4-d1/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Dark gradient to improve contrast over the 3D scene. Ensure it doesn't block interaction. */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
      </div>

      {/* Headline and Actions */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-xs font-medium text-emerald-300 backdrop-blur">
            <Shield className="h-4 w-4" />
            Terminal Online
          </div>
          <h1 className="mt-5 font-mono text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
            Live code stream, neon ops
          </h1>
          <p className="mt-4 max-w-2xl font-mono text-sm text-emerald-200/80 md:text-base">
            Matrix-green binary motion meets a focused hacker console. Smooth typing vibes, cyberpunk glow, and tools ready for execution.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#ebook"
              className="rounded-lg border border-emerald-400/50 bg-emerald-400/10 px-5 py-3 font-mono text-sm text-emerald-200 shadow-[0_0_30px_rgba(16,185,129,0.15)] transition hover:bg-emerald-400/15 hover:shadow-[0_0_40px_rgba(16,185,129,0.25)]"
            >
              Read the manual
            </a>
            <a
              href="#tools"
              className="rounded-lg border border-cyan-400/50 bg-cyan-400/10 px-5 py-3 font-mono text-sm text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.15)] transition hover:bg-cyan-400/15 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]"
            >
              Launch tools
            </a>
          </div>
        </motion.div>
      </div>

      {/* Subtle scanline overlay for terminal vibes */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[length:100%_3px]" />
    </section>
  );
}
