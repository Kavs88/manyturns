'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ManyTurnsLogo } from '../brand/ManyTurnsLogo';
import {
  ArrowUpRight,
  ChevronDown,
  X,
  Shield,
  Globe,
  Monitor,
  Mic,
} from 'lucide-react';

const assets = [
  {
    title: 'Kavsulting',
    category: 'Commercial Advisory',
    description:
      'SME operational diagnosis, restructuring & bespoke internal tools.',
    href: 'https://kavsulting.com',
    external: true,
    icon: Shield,
    color: 'text-cobalt-700',
  },
  {
    title: 'Asia Insights',
    category: 'Ecosystem & Community',
    description:
      'Relocation infrastructure and life-after-arrival in Southeast Asia.',
    href: 'https://asia-insights.com',
    external: true,
    icon: Globe,
    color: 'text-terracotta-500',
  },
  {
    title: 'Trivia Deck & PubPal',
    category: 'Entertainment Software',
    description:
      'Host-controlled live quiz operating system and tabletop web games.',
    href: 'https://triviadeck.com',
    external: true,
    icon: Monitor,
    color: 'text-terracotta-600',
  },
  {
    title: 'The Stage',
    category: 'Live Craft & MCing',
    description:
      'Professional wedding hosting, standup comedy, and live room direction.',
    href: '/stage',
    external: false,
    icon: Mic,
    color: 'text-stone-700',
  },
] as const;

/**
 * OBSOLETE — quarantined from the public journey (MT-C seq 3 / 2026-11-06).
 * PubPal co-equal, Stage door, loops mark, parked triviadeck.com.
 * Not imported by live routes; /stage redirects home. Keep file for archive only.
 */
export const GlobalNavDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mt-house-drawer"
        className="fixed top-5 right-5 z-50 flex items-center gap-2.5 px-3.5 py-1.5 bg-sand-100/90 backdrop-blur-md border border-stone-300 rounded-full shadow-sm hover:border-stone-400 transition-all text-xs font-mono tracking-wider uppercase text-stone-800"
      >
        <ManyTurnsLogo size={20} />
        <span>Many Turns House</span>
        <ChevronDown
          size={14}
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsOpen(false)}
          role="presentation"
        >
          <div
            id="mt-house-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Many Turns House portfolio"
            className="w-full max-w-md h-full bg-sand-50 p-8 shadow-2xl flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-stone-200">
                <div className="flex items-center gap-3">
                  <ManyTurnsLogo size={32} />
                  <div>
                    <h2 className="font-serif font-bold text-lg text-stone-900 leading-tight">
                      MANY TURNS
                    </h2>
                    <p className="text-[10px] font-mono tracking-widest text-stone-500 uppercase">
                      Operator & Software Studio
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-full text-stone-400 hover:text-stone-700"
                  aria-label="Close portfolio drawer"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="mt-8 space-y-4">
                <p className="text-xs font-mono uppercase text-stone-400 tracking-wider">
                  The Operating Portfolio
                </p>
                {assets.map((asset) => {
                  const Icon = asset.icon;
                  const className =
                    'group block p-4 rounded-xl bg-white border border-stone-200 hover:border-stone-400 hover:shadow-md transition-all';
                  const body = (
                    <>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2.5">
                          <Icon size={16} className={asset.color} />
                          <h3 className="font-semibold text-sm text-stone-900 group-hover:text-cobalt-700 transition-colors">
                            {asset.title}
                          </h3>
                        </div>
                        <ArrowUpRight
                          size={14}
                          className="text-stone-400 group-hover:text-stone-800 transition-colors"
                        />
                      </div>
                      <p className="text-xs font-mono text-stone-500 mt-1">
                        {asset.category}
                      </p>
                      <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                        {asset.description}
                      </p>
                    </>
                  );

                  if (asset.external) {
                    return (
                      <a
                        key={asset.title}
                        href={asset.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={className}
                        onClick={() => setIsOpen(false)}
                      >
                        {body}
                      </a>
                    );
                  }

                  return (
                    <Link
                      key={asset.title}
                      href={asset.href}
                      className={className}
                      onClick={() => setIsOpen(false)}
                    >
                      {body}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-stone-200 text-xs font-mono text-stone-500">
              <p>Registered in Estonia: Manyturns OÜ</p>
              <p className="mt-1">Europe ↔ Southeast Asia Corridor</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
