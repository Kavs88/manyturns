'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { turns } from '@/lib/journey';

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-8% 0px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

export function JourneyHome() {
  return (
    <main>
      <section className="px-6 md:px-10 pt-16 md:pt-24 pb-10">
        <div className="max-w-[1080px] mx-auto">
          <motion.p
            className="text-[12px] tracking-[0.28em] uppercase mb-6"
            style={{ color: '#8DCFFF' }}
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Different paths. One journey.
          </motion.p>
          <motion.h1
            className="font-semibold tracking-[-0.03em] leading-[0.98]"
            style={{ fontSize: 'clamp(3.25rem, 8vw, 6.5rem)' }}
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
          >
            Many Turns
          </motion.h1>
          <motion.p
            className="mt-6 max-w-xl text-lg leading-relaxed"
            style={{ color: 'rgba(242,242,239,0.72)' }}
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
          >
            Journeys people have already been through — and the solution that holds when the path turns.
          </motion.p>
        </div>
      </section>

      <section className="relative overflow-hidden" style={{ height: '42vh', minHeight: 240 }}>
        <Image
          src="/brand/hero-journey.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: '70% center' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, #0B1018 0%, rgba(11,16,24,0.05) 22%, rgba(11,16,24,0.05) 78%, #F2F2EF 100%)',
          }}
        />
      </section>

      <section className="px-6 md:px-10 py-20 md:py-28" style={{ background: '#F2F2EF', color: '#0B1018' }}>
        <motion.div className="max-w-[1080px] mx-auto grid md:grid-cols-12 gap-8" {...fade}>
          <p
            className="md:col-span-3 text-[12px] tracking-[0.2em] uppercase"
            style={{ color: '#174D83' }}
          >
            The solution
          </p>
          <p
            className="md:col-span-9 text-2xl md:text-[2rem] leading-[1.35]"
            style={{ fontFamily: 'var(--font-ui), system-ui, sans-serif', fontWeight: 500 }}
          >
            Every path here is a journey someone has already taken. The work is to find the real turn — then make the complex simple. Not the simple complex.
          </p>
        </motion.div>
      </section>

      <section id="turns" className="px-6 md:px-10 py-8 md:py-16">
        <div className="max-w-[720px] mx-auto">
          {turns.map((c, i) => (
            <motion.article
              key={c.id}
              id={`turn-${c.id}`}
              className="grid grid-cols-[3.5rem_1fr] gap-x-5 md:gap-x-8 scroll-mt-8"
              {...fade}
            >
              <div className="flex flex-col items-center">
                <span
                  className="text-[13px] font-semibold pt-1"
                  style={{ color: c.cue?.accent ?? '#8DCFFF' }}
                >
                  {c.id}
                </span>
                {i < turns.length - 1 ? (
                  <span
                    className="mt-4 w-px flex-1"
                    style={{ background: 'rgba(141,207,255,0.35)', minHeight: 48 }}
                    aria-hidden
                  />
                ) : null}
              </div>
              <div className={i < turns.length - 1 ? 'pb-16 md:pb-20' : 'pb-8'}>
                <p className="text-[12px] tracking-[0.18em] uppercase mb-3" style={{ color: '#8DCFFF' }}>
                  {c.place}
                </p>
                <h2 className="text-3xl md:text-4xl tracking-[-0.03em] font-semibold mb-4">{c.title}</h2>
                <p className="text-[16px] leading-relaxed" style={{ color: 'rgba(242,242,239,0.78)' }}>
                  {c.body}
                </p>
                {c.href && c.cue ? (
                  <div className="mt-6">
                    <p
                      className="text-[11px] tracking-[0.2em] uppercase font-semibold mb-2"
                      style={{ color: c.cue.accent }}
                    >
                      {c.cue.name}
                    </p>
                    <Link
                      href={c.href}
                      className="inline-flex px-4 py-2.5 text-[13px] font-medium"
                      style={{ color: c.cue.onAccent, background: c.cue.accent }}
                    >
                      {c.link} →
                    </Link>
                  </div>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 py-24 md:py-32" style={{ background: '#F2F2EF', color: '#0B1018' }}>
        <motion.div className="max-w-[1080px] mx-auto" {...fade}>
          <p className="text-[12px] tracking-[0.2em] uppercase mb-5" style={{ color: '#174D83' }}>
            The only rule of the road
          </p>
          <h2
            className="text-4xl md:text-6xl leading-[1.08] tracking-[-0.02em] max-w-3xl"
            style={{ fontFamily: 'var(--font-ui), system-ui, sans-serif', fontWeight: 500 }}
          >
            Make the complex simple.
            <br />
            Not the simple complex.
          </h2>
          <p className="mt-6 text-[16px]" style={{ color: 'rgba(11,16,24,0.62)' }}>
            Sam Kavanagh — founder and operator, Europe and Southeast Asia.
          </p>
          <a
            href="mailto:sam@kavsulting.com"
            className="inline-flex mt-8 px-5 py-3 text-[14px] font-medium"
            style={{ background: '#174D83', color: '#F2F2EF' }}
          >
            Begin a conversation
          </a>
        </motion.div>
      </section>
    </main>
  );
}
