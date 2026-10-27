'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Server,
  BookOpen,
  Map,
  Code2,
  Bookmark,
  Search,
  Menu,
  X,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { SearchModal } from './SearchModal';
import { getLocalProgress } from '@/lib/progress/progressManager';
import { getTotalLessonsCount } from '@/content/modules';

export function Header() {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [progressPercent, setProgressPercent] = useState(0);

  useEffect(() => {
    const update = () => {
      const p = getLocalProgress();
      const total = getTotalLessonsCount();
      if (total > 0) {
        const percent = Math.round((p.completedLessons.length / total) * 100);
        setProgressPercent(percent);
      }
    };
    update();
    window.addEventListener('storage', update);
    return () => window.removeEventListener('storage', update);
  }, [pathname]);

  const navLinks = [
    { label: 'কোর্স কারিকুলাম', href: '/learn', icon: BookOpen },
    { label: 'রোডম্যাপ', href: '/roadmap', icon: Map },
    { label: 'প্রজেক্টস', href: '/projects', icon: Code2 },
    { label: 'প্লে-গ্রাউন্ড', href: '/playground', icon: Sparkles },
    { label: 'শব্দকোষ', href: '/glossary', icon: Bookmark },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl transition">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-0.5 shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Server className="w-5 h-5 text-indigo-400 group-hover:text-cyan-300 transition" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base sm:text-lg text-slate-100 tracking-tight group-hover:text-indigo-300 transition">
                  Serverpod <span className="text-indigo-400 font-sans">বাংলা একাডেমি</span>
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
                  v2.x - 4.x
                </span>
              </div>
              <p className="hidden md:block text-[11px] text-slate-400 font-normal">
                Flutter থেকে Full-Stack Developer
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const isActive = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                    isActive
                      ? 'text-indigo-400 bg-indigo-500/10 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center gap-2.5">
            {/* Search Trigger */}
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 text-xs text-slate-400 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition"
              title="সার্চ করুন (Cmd+K)"
            >
              <Search className="w-3.5 h-3.5 text-slate-400" />
              <span className="hidden sm:inline font-sans">সার্চ...</span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-slate-950 text-slate-400 rounded border border-slate-700">
                ⌘K
              </kbd>
            </button>

            {/* Progress Badge */}
            <Link
              href="/learn"
              className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 hover:border-slate-700 transition"
              title="আপনার মোট অগ্রগতি"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold text-slate-300">
                {progressPercent}% সম্পন্ন
              </span>
            </Link>

            {/* Official docs link */}
            <a
              href="https://docs.serverpod.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-900 transition border border-transparent hover:border-slate-800"
            >
              <span>Docs</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-slate-800 transition"
              aria-label="মোবাইল মেনু"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-4 pt-2 pb-5 border-b border-slate-800 bg-slate-950/95 space-y-1 animate-in slide-in-from-top-2 duration-150">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const isActive = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition ${
                    isActive
                      ? 'text-indigo-400 bg-indigo-500/10 font-semibold'
                      : 'text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  <Icon className="w-4 h-4 text-slate-400" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
            <div className="pt-3 mt-2 border-t border-slate-900 flex items-center justify-between px-3 text-xs text-slate-400">
              <span>লার্নিং অগ্রগতি: {progressPercent}%</span>
              <a
                href="https://docs.serverpod.dev"
                target="_blank"
                rel="noreferrer"
                className="text-indigo-400 hover:underline flex items-center gap-1"
              >
                Official Docs <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

