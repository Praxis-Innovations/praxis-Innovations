'use client';

import { useState, useEffect, useRef } from 'react';
import Layout from '../src/components/layout/Layout';
import Link from 'next/link';
import Image from 'next/image';

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function Portfolio() {
  const hero = useInView();
  const evenx = useInView();
  const liarsdice = useInView();
  const alignfive = useInView();

  return (
    <Layout
      title="Our Portfolio - Praxis Innovations"
      description="Explore our work, including EvenX, Liar's Dice, and AlignFive, and see how we help clients achieve their technology goals."
      keywords="portfolio, projects, software development, web applications, mobile applications, multiplayer games, expense splitting, dice game, sequence game"
      canonicalUrl="https://praxisinnovations.ca/portfolio"
    >
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary-500/20 rounded-full blur-[100px]" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent-500/20 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/5 rounded-full blur-[80px]" />
        </div>
        <div
          ref={hero.ref}
          className={`container-custom container-padding relative z-10 text-center transition-all duration-1000 ${hero.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="inline-flex items-center px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium text-primary-300 mb-6">
            <span className="w-2 h-2 bg-accent-400 rounded-full mr-2 animate-pulse" />
            Our Portfolio
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            Products we&apos;ve{' '}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">shipped</span>
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            From expense splitting to classic board games — every product we build
            is designed to be simple, polished, and delightful.
          </p>
          <div className="flex justify-center gap-3 mt-8">
            {['EvenX', "Liar's Dice", 'AlignFive'].map((name, i) => (
              <a
                key={name}
                href={`#product-${i}`}
                className="px-4 py-2 text-sm font-medium rounded-full border border-white/10 text-neutral-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* EvenX */}
      <section id="product-0" className="relative py-24 overflow-hidden bg-gradient-to-br from-violet-50 via-white to-fuchsia-50">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-200/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-fuchsia-200/20 rounded-full blur-[100px]" />
        <div
          ref={evenx.ref}
          className={`container-custom container-padding relative z-10 transition-all duration-1000 ${evenx.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex justify-center lg:order-2">
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-br from-violet-400/20 to-fuchsia-400/20 rounded-[2rem] blur-xl" />
                <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-[2rem] bg-white shadow-2xl flex items-center justify-center border border-violet-100">
                  <Image
                    src="/evenx-logo.png"
                    alt="EvenX Logo"
                    width={180}
                    height={180}
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 px-4 py-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full text-white text-xs font-semibold shadow-lg">
                  iOS & Android
                </div>
              </div>
            </div>
            <div className="lg:order-1">
              <span className="inline-block px-3 py-1.5 bg-violet-100 text-violet-700 rounded-full text-sm font-semibold mb-4">
                Mobile Application
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 leading-tight">
                EvenX
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                An intuitive expense splitting app that makes sharing costs with friends,
                roommates, and groups effortless. EvenX simplifies group finances so you can
                focus on what matters.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['Expense Splitting', 'Group Finance', 'Real-Time Sync', 'Cross-Platform'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-neutral-100 text-neutral-600 rounded-lg text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="https://evenx.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                Visit EvenX
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Liar's Dice */}
      <section id="product-1" className="relative py-24 overflow-hidden bg-neutral-900">
        <div className="absolute inset-0">
          <Image
            src="/liarsdice/og-image.jpg"
            alt=""
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/80 to-neutral-900/60" />
        </div>
        <div
          ref={liarsdice.ref}
          className={`container-custom container-padding relative z-10 transition-all duration-1000 ${liarsdice.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-8 bg-red-500/15 rounded-full blur-2xl" />
                <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-[2rem] bg-white/10 backdrop-blur-sm shadow-2xl flex items-center justify-center border border-white/10">
                  <Image
                    src="/liarsdice/liarsdice-logo.png"
                    alt="Liar's Dice Logo"
                    width={160}
                    height={160}
                    className="object-contain rounded-2xl"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 px-4 py-2 bg-gradient-to-r from-red-500 to-amber-500 rounded-full text-white text-xs font-semibold shadow-lg">
                  Free to Play
                </div>
              </div>
            </div>
            <div>
              <span className="inline-block px-3 py-1.5 bg-red-500/20 text-red-300 rounded-full text-sm font-semibold mb-4 border border-red-500/20">
                Online Strategy Game
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Liar&apos;s Dice
              </h2>
              <p className="text-lg text-neutral-300 leading-relaxed mb-8">
                A free browser-based Liar&apos;s Dice game where you bluff, bid, and challenge
                AI opponents. Features multiple rule variants including Dudo and Perudo,
                comprehensive strategy guides, and no sign-up required.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['Bluffing Game', 'AI Opponents', 'No Sign-Up', 'Strategy Guides'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-white/10 text-neutral-300 rounded-lg text-sm border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="https://liars-dice.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Visit Liar&apos;s Dice
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AlignFive */}
      <section id="product-2" className="relative py-24 overflow-hidden bg-gradient-to-br from-neutral-800 via-neutral-900 to-emerald-900/30">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-amber-500/10 rounded-full blur-[100px]" />
        <div
          ref={alignfive.ref}
          className={`container-custom container-padding relative z-10 transition-all duration-1000 ${alignfive.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex justify-center lg:order-2">
              <div className="relative h-80 w-full max-w-sm">
                {/* Phone mockup */}
                <div className="absolute left-1/2 top-1/2 h-[95%] w-[45%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-2xl ring-1 ring-white/5">
                  <Image
                    src="/alignfive/game-board.webp"
                    alt="AlignFive game board"
                    width={768}
                    height={1662}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 rounded-xl bg-white/95 backdrop-blur-sm p-3 shadow-2xl sm:p-4 z-10">
                  <Image
                    src="/alignfive/alignfive-logo.png"
                    alt="AlignFive logo"
                    width={260}
                    height={170}
                    className="h-auto w-24 sm:w-32 object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="lg:order-1">
              <span className="inline-block px-3 py-1.5 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-semibold mb-4 border border-emerald-500/20">
                Real-Time Multiplayer Game
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                AlignFive
              </h2>
              <p className="text-lg text-neutral-300 leading-relaxed mb-8">
                A cross-platform Sequence experience with real-time multiplayer, private rooms,
                bot matches, leaderboards, coin rewards, tournaments, and classic rules validated
                by an authoritative game server.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['Multiplayer', 'Private Rooms', 'Leaderboards', 'Cross-Platform'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-white/10 text-neutral-300 rounded-lg text-sm border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="https://alignfive.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Visit AlignFive
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
        </div>
        <div className="container-custom container-padding text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help you bring your ideas to life
            with innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-neutral-100 font-medium text-sm px-5 py-2.5 sm:text-base sm:px-8 sm:py-3 rounded-lg transition-all duration-300">
              Get in Touch
            </Link>
            <Link href="/services" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium text-sm px-5 py-2.5 sm:text-base sm:px-8 sm:py-3 rounded-lg transition-all duration-300">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
