import React, { useEffect, useMemo, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

function TypingBackdrop() {
  const scripts = useMemo(
    () => [
      'nmap -sV -T4 10.0.1.24',
      'ssh-keygen -t ed25519 -C "ops@matrix"',
      'scp build/* ops@edge:/var/www',
      'curl -s https://api/internal/health',
      'git clone --depth=1 repo://hacker/studio',
      'pnpm i && pnpm build',
      'uv run main.py --profile=prod',
      'watch -n1 "df -h | grep /data"',
      'jq ".services[] | select(.status==\"up\")" services.json',
    ],
    []
  );

  const bufferRef = useRef([]);
  const lineRef = useRef(0);
  const charRef = useRef(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let mounted = true;
    function step() {
      if (!mounted) return;
      const current = scripts[lineRef.current % scripts.length];
      const next = current.slice(0, charRef.current + 1);

      // Update buffer (max 12 lines kept)
      let buf = bufferRef.current.slice();
      if (buf.length === 0 || buf[buf.length - 1].length - 2 >= current.length) {
        buf.push('> ' + next);
      } else {
        buf[buf.length - 1] = '> ' + next;
      }
      if (buf.length > 12) buf = buf.slice(-12);
      bufferRef.current = buf;
      setTick((k) => k + 1);

      charRef.current += 1;
      if (charRef.current > current.length) {
        charRef.current = 0;
        lineRef.current += 1;
        // Add a blank prompt line
        let buf2 = bufferRef.current.slice();
        buf2.push('> ');
        if (buf2.length > 12) buf2 = buf2.slice(-12);
        bufferRef.current = buf2;
        setTick((k) => k + 1);
      }
      timer = window.setTimeout(step, 35);
    }

    let timer = window.setTimeout(step, 400);
    return () => {
      mounted = false;
      if (timer) window.clearTimeout(timer);
    };
  }, [scripts]);

  return (
    <div className="pointer-events-none absolute inset-0 flex items-end justify-start">
      <div className="m-6 w-full max-w-3xl select-none opacity-35 mix-blend-screen">
        <div className="rounded-lg border border-emerald-500/10 bg-black/30 p-4 shadow-[0_0_40px_rgba(16,185,129,0.15)] backdrop-blur-sm">
          <pre className="max-h-[40vh] overflow-hidden font-mono text-[11px] leading-relaxed text-emerald-300/90">
            {bufferRef.current.map((l, i) => (
              <div key={`${i}-${tick}`} className="whitespace-pre">
                {i === bufferRef.current.length - 1 ? (
                  <>
                    {l}
                    <span className="ml-1 inline-block h-4 w-[2px] animate-pulse bg-emerald-300 align-middle" />
                  </>
                ) : (
                  l
                )}
              </div>
            ))}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden bg-neutral-950">
      {/* 3D Cover - Dark red grid Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/hinHjJppKaZFIbCr/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Dark gradient to improve contrast over the 3D scene. Ensure it doesn't block interaction. */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
      </div>

      {/* Typing terminal backdrop */}
      <TypingBackdrop />

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
            Dark-grid Spline cover with reactive glow, plus ambient terminal typing for a true ops-console feel.
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
