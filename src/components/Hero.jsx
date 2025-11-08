import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/90" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-neutral-700 shadow">
            <Rocket className="h-4 w-4" />
            Hacker Toolkit
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-neutral-900 md:text-6xl">
            Clean, modern tools for curious hackers
          </h1>
          <p className="mt-4 max-w-2xl text-neutral-700 md:text-lg">
            A minimalist landing experience with a crisp 3D cover, crafted for builders who value focus, speed, and elegant utility.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#ebook" className="rounded-lg bg-neutral-900 px-5 py-3 text-white transition hover:bg-neutral-800">
              Get the ebook
            </a>
            <a href="#tools" className="rounded-lg border border-neutral-300 bg-white px-5 py-3 text-neutral-900 transition hover:bg-neutral-50">
              Explore tools
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
