import React from 'react';
import Hero from './components/Hero';
import Ebook from './components/Ebook';
import Tools from './components/Tools';
import Services from './components/Services';
import Donate from './components/Donate';
import { TerminalSquare } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 font-inter text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#" className="flex items-center gap-2">
            <TerminalSquare className="h-5 w-5 text-emerald-300" />
            <span className="font-mono text-sm font-semibold tracking-tight text-white">Hacker Studio</span>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#ebook" className="font-mono text-xs text-emerald-200/80 hover:text-emerald-200">Ebook</a>
            <a href="#tools" className="font-mono text-xs text-emerald-200/80 hover:text-emerald-200">Tools</a>
            <a href="#services" className="font-mono text-xs text-emerald-200/80 hover:text-emerald-200">Services</a>
            <a href="#donate" className="font-mono text-xs text-emerald-200/80 hover:text-emerald-200">Donate</a>
          </nav>
          <a href="#download-ebook" className="rounded-lg border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 font-mono text-xs text-emerald-200 transition hover:bg-emerald-400/15">Download</a>
        </div>
        {/* Subtle moving scanline */}
        <div className="pointer-events-none h-[1px] w-full bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />
      </header>

      {/* Main sections */}
      <main>
        <Hero />
        <Ebook />
        <Tools />
        <Services />
        <Donate />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-neutral-950 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 md:flex-row">
          <p className="font-mono text-xs text-emerald-200/70">© {new Date().getFullYear()} Hacker Studio. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="font-mono text-xs text-emerald-200/70 hover:text-emerald-200">Privacy</a>
            <a href="#terms" className="font-mono text-xs text-emerald-200/70 hover:text-emerald-200">Terms</a>
          </div>
        </div>
      </footer>

      {/* Global scanline background */}
      <div className="pointer-events-none fixed inset-0 -z-[1] bg-[linear-gradient(to_bottom,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[length:100%_3px]" />
    </div>
  );
}

export default App;
