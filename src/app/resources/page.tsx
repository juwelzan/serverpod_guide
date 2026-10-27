import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import {
  BookOpen,
  ExternalLink,
  GitBranch,
  Terminal,
  Database,
  Layers,
  Sparkles,
  Share2,
} from 'lucide-react';

export default function ResourcesPage() {
  const officialResources = [
    {
      title: 'Serverpod Official Documentation',
      description: 'সার্ভারপডের অফিশিয়াল গাইড, API রেফারেন্স এবং টিউটোরিয়ালস।',
      url: 'https://docs.serverpod.dev',
      badge: 'Official Docs',
    },
    {
      title: 'Serverpod GitHub Repository',
      description: 'ওপেন-সোর্স সোর্স কোড, ইস্যু ট্র্যাকার ও কন্ট্রিবিউশন গাইডলাইন।',
      url: 'https://github.com/serverpod/serverpod',
      badge: 'GitHub',
    },
    {
      title: 'Serverpod Discord Community',
      description: 'বিশ্বব্যাপী হাজার হাজার Flutter ও Serverpod ডেভেলপারদের সাথে আলোচনা।',
      url: 'https://discord.gg/serverpod',
      badge: 'Discord',
    },
    {
      title: 'Dart.dev Official Language Guide',
      description: 'ডার্ট ল্যাঙ্গুয়েজের কোর সিনট্যাক্স, প্যাটার্ন ম্যাচিং ও অ্যাসিঙ্ক প্রোগ্রামিং।',
      url: 'https://dart.dev',
      badge: 'Dart Language',
    },
  ];

  const cheatSheets = [
    {
      title: 'Serverpod CLI কমান্ড চিট-শিট',
      commands: [
        { cmd: 'dart pub global activate serverpod_cli', desc: 'CLI গ্লোবালি ইনস্টল করা' },
        { cmd: 'serverpod create <project_name>', desc: 'নতুন প্রজেক্ট তৈরি করা' },
        { cmd: 'serverpod generate', desc: 'মডেল ও এন্ডপয়েন্ট থেকে ক্লায়েন্ট কোড জেনারেট' },
        { cmd: 'serverpod create-migration', desc: 'নতুন স্কিমা মাইগ্রেশন তৈরি' },
        { cmd: 'dart run bin/main.dart --apply-migrations', desc: 'মাইগ্রেশন ডাটাবেসে অ্যাপ্লাই' },
        { cmd: 'dart run bin/main.dart', desc: 'সার্ভার চালু করা' },
      ],
    },
    {
      title: 'Docker ও PostgreSQL কমান্ডস',
      commands: [
        { cmd: 'docker compose up -d', desc: 'ব্যাকগ্রাউন্ডে কন্টেইনার চালু করা' },
        { cmd: 'docker compose down', desc: 'কন্টেইনার বন্ধ করা' },
        { cmd: 'docker compose logs -f', desc: 'লাইভ ডাটাবেস লগ দেখা' },
        { cmd: 'lsof -ti:8080 | xargs kill -9', desc: 'পোর্ট ৮০৮০ ফিক্স/কিল করা' },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Header />

      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>সহায়ক রিসোর্স হাব</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            অফিশিয়াল রিসোর্স ও <span className="text-indigo-400">চিট-শিট</span>
          </h1>
          <p className="mt-3 text-sm text-slate-400 leading-relaxed">
            দ্রুত রেফারেন্সের জন্য প্রয়োজনীয় লিংক, শর্টকাট এবং কমান্ড তালিকা।
          </p>
        </div>

        {/* Official Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {officialResources.map((res, idx) => (
            <a
              key={idx}
              href={res.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900 hover:border-indigo-500/40 transition flex items-start justify-between group"
            >
              <div>
                <span className="text-[11px] font-semibold text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20">
                  {res.badge}
                </span>
                <h3 className="text-base font-bold text-slate-100 mt-2 group-hover:text-indigo-300 transition">
                  {res.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1">{res.description}</p>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition flex-shrink-0 ml-3 mt-1" />
            </a>
          ))}
        </div>

        {/* Cheat Sheets */}
        <div className="space-y-8">
          <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <Terminal className="w-5 h-5 text-indigo-400" />
            <span>প্রয়োজনীয় কমান্ড চিট-শিট (Cheat-Sheet)</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cheatSheets.map((cs, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-4"
              >
                <h3 className="text-sm font-bold text-slate-200 border-b border-slate-800 pb-2">
                  {cs.title}
                </h3>
                <div className="space-y-3">
                  {cs.commands.map((item, cIdx) => (
                    <div key={cIdx} className="space-y-1">
                      <code className="text-xs font-mono text-indigo-300 bg-slate-950 px-2 py-1 rounded block overflow-x-auto border border-slate-800">
                        {item.cmd}
                      </code>
                      <span className="text-[11px] text-slate-400 block pl-1">
                        {item.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
