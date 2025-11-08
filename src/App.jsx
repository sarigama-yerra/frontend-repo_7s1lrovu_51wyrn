import React from 'react';
import Hero from './components/Hero';
import Ebook from './components/Ebook';
import Tools from './components/Tools';
import Services from './components/Services';
import Donate from './components/Donate';

function App() {
  return (
    <div className="font-inter text-neutral-900">
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#" className="text-sm font-semibold tracking-tight">Hacker Studio</a>
          <nav className="hidden items-center gap-6 text-sm text-neutral-700 md:flex">
            <a href="#ebook" className="hover:text-neutral-900">Ebook</a>
            <a href="#tools" className="hover:text-neutral-900">Tools</a>
            <a href="#services" className="hover:text-neutral-900">Services</a>
            <a href="#donate" className="hover:text-neutral-900">Donate</a>
          </nav>
          <a href="#download-ebook" className="rounded-lg bg-neutral-900 px-4 py-2 text-sm text-white transition hover:bg-neutral-800">Download</a>
        </div>
      </header>

      <main>
        <Hero />
        <Ebook />
        <Tools />
        <Services />
        <Donate />
      </main>

      <footer className="border-t border-neutral-200 bg-white py-8 text-sm text-neutral-600">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 md:flex-row">
          <p>© {new Date().getFullYear()} Hacker Studio. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-neutral-900">Privacy</a>
            <a href="#terms" className="hover:text-neutral-900">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
