import React from 'react';
import Link from 'next/link';
import { Server, Heart, ExternalLink, GitBranch, Terminal } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full border-t border-slate-800/80 bg-slate-950 text-slate-400 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-900">
          {/* Brand info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <Server className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg text-slate-100">
                Serverpod <span className="text-indigo-400 font-sans">বাংলা একাডেমি</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Flutter ডেভেলপারদের জন্য সম্পূর্ণ বাংলায় আধুনিক Serverpod ব্যাকএন্ড ডেভেলপমেন্ট
              লার্নিং প্ল্যাটফর্ম। ডাটাবেস, রিয়েল-টাইম স্ট্রিমিং ও সেলফ-হোস্টিং শিখুন একদম শূন্য থেকে।
            </p>
            <div className="flex items-center gap-3 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                ১০০% টাইপ-সেফ ডার্ট ব্যাকএন্ড
              </span>
            </div>
          </div>

          {/* Learn & Explore */}
          <div>
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-3">
              কোর্স ও কারিকুলাম
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/learn" className="hover:text-indigo-300 transition">
                  সবগুলো মডিউল
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="hover:text-indigo-300 transition">
                  লার্নিং রোডম্যাপ
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-indigo-300 transition">
                  বাস্তব প্রজেক্টস
                </Link>
              </li>
              <li>
                <Link href="/playground" className="hover:text-indigo-300 transition">
                  ইন্টারেক্টিভ প্লে-গ্রাউন্ড
                </Link>
              </li>
              <li>
                <Link href="/glossary" className="hover:text-indigo-300 transition">
                  প্রযুক্তিগত শব্দকোষ
                </Link>
              </li>
            </ul>
          </div>

          {/* Official & Community */}
          <div>
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-3">
              অফিশিয়াল রিসোর্স
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://docs.serverpod.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-indigo-300 transition"
                >
                  <span>Serverpod Official Docs</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/serverpod/serverpod"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-indigo-300 transition"
                >
                  <GitBranch className="w-3 h-3 text-slate-500" />
                  <span>Serverpod GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://dart.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-indigo-300 transition"
                >
                  <span>Dart Language</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <Link href="/resources" className="hover:text-indigo-300 transition">
                  বই ও টিউটোরিয়ালস
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-indigo-300 transition">
                  আমাদের লক্ষ্য
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© 2026 Serverpod Bangla Academy. সর্বস্বত্ব সংরক্ষিত।</p>
          <p className="flex items-center gap-1">
            বাংলাদেশের সকল Flutter ডেভেলপারদের জন্য ভালোবেসে তৈরি <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
