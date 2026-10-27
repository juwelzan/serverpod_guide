'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { allModules } from '@/content/modules';
import { projectShowcases } from '@/content/projects';
import {
  Server,
  ArrowRight,
  Sparkles,
  Zap,
  ShieldCheck,
  Database,
  Radio,
  Terminal,
  Code2,
  CheckCircle2,
  ChevronDown,
  Layers,
  Map,
  Clock,
  Play,
} from 'lucide-react';

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: 'Serverpod শেখার জন্য কী কী পূর্বশর্ত প্রয়োজন?',
      a: 'মৌলিক Dart এবং Flutter জ্ঞান (উইজেট, স্টেট, async/await) জানা থাকলেই যথেষ্ট। ব্যাকএন্ড বা ডাটাবেসের পূর্ব অভিজ্ঞতা না থাকলেও এই কোর্সে একদম শূন্য থেকে প্রতিটি কনসেপ্ট সহজ ভাষায় শেখানো হয়েছে।',
    },
    {
      q: 'Node.js বা Python থাকতে কেন আমি Dart দিয়ে ব্যাকএন্ড শিখব?',
      a: 'Dart দিয়ে ব্যাকএন্ড লেখার সবচেয়ে বড় সুবিধা হলো কোড ও মডেল রি-ইউজেবিলিটি। একই ডার্ট ক্লাস সার্ভার এবং Flutter অ্যাপ উভয় জায়গায় ব্যবহার করা যায়। নতুন কোনো ল্যাঙ্গুয়েজ না শিখে আপনি আপনার বিদ্যমান ডার্ট দক্ষতাকে কাজে লাগিয়ে ফুল-স্ট্যাক ডেভেলপার হতে পারেন।',
    },
    {
      q: 'Serverpod কি রিয়েল-টাইম কমিউনিকেশন ও স্ট্রিমিং সাপোর্ট করে?',
      a: 'হ্যাঁ! Serverpod-এর রয়েছে নিজস্ব অন্তর্নির্মিত WebSocket স্ট্রিমিং সেশন। কোনো থার্ড-পার্টি লাইব্রেরি বা অতিরিক্ত কনফিগারেশন ছাড়াই আপনি লাইভ চ্যাট, রাইড শেয়ারিং ট্র্যাকিং বা নোটিফিকেশন সিস্টেম অনায়াসে তৈরি করতে পারেন।',
    },
    {
      q: 'এই কোর্সের কোডগুলো কি Serverpod-এর সাম্প্রতিক সংস্করণের উপযোগী?',
      a: 'হ্যাঁ, কোর্সের প্রতিটি কোড স্নিপেট এবং আর্কিটেকচার Serverpod 2.x ও 4.x-এর অফিশিয়াল ডকুমেন্টেশন এবং নির্দেশিকা মেনে প্রণয়ন করা হয়েছে। কোনো ব্যাকওয়ার্ড-ইনকম্প্যাটিবল বা অনুমানভিত্তিক কোড এতে নেই।',
    },
    {
      q: 'আমি কি নিজের লিনাক্স VPS সার্ভারে Serverpod ডিপ্লয় করতে পারব?',
      a: 'অবশ্যই! মডিউল ১৩-তে সম্পূর্ণ VPS সেলফ-হোস্টিং, Docker কন্টেইনারাইজেশন, Nginx রিভার্স প্রক্সি এবং Let\'s Encrypt SSL দিয়ে লাইভ ডিপ্লয়মেন্ট ধাপে ধাপে দেখানো হয়েছে। মাত্র $৫-$১০ ডলারে আপনি নিজস্ব সার্ভার চালাতে পারবেন।',
    },
  ];

  const advantages = [
    {
      icon: Zap,
      color: 'text-amber-400',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/20',
      title: '১০০% টাইপ-সেফ ক্লায়েন্ট SDK',
      desc: 'সার্ভারে এন্ডপয়েন্ট বা মডেল লিখলেই এক ক্লিকে Flutter ক্লায়েন্ট মেথড তৈরি হয়ে যায়। কোনো ম্যানুয়াল JSON parsing বা টাইপিং ভুলের সুযোগ নেই।',
    },
    {
      icon: Database,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/20',
      title: 'বিল্ট-ইন PostgreSQL ORM',
      desc: 'কাঁচা SQL কুয়েরি ছাড়াই সাধারণ Dart সিনট্যাক্স দিয়ে ডাটাবেস টেবিল পরিচালনা, কুয়েরি ফিল্টারিং এবং অটোমেটিক স্কিমা মাইগ্রেশন।',
    },
    {
      icon: ShieldCheck,
      color: 'text-rose-400',
      bg: 'bg-rose-500/10',
      border: 'border-rose-500/20',
      title: 'এন্টারপ্রাইজ অথেন্টিকেশন',
      desc: 'ইমেইল/পাসওয়ার্ড, Google, Apple সাইনইন, সুরক্ষিত পাসওয়ার্ড হ্যাশিং এবং নিরাপদ সার্ভার সেশন আর্কিটেকচার রেডিমেড পাওয়া যায়।',
    },
    {
      icon: Radio,
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/20',
      title: 'নেটিভ WebSocket স্ট্রিমিং',
      desc: 'কোনো অতিরিক্ত প্যাকেজ ছাড়াই সার্ভার এবং Flutter অ্যাপের মধ্যে নিরবচ্ছিন্ন দ্বি-মুখী রিয়েল-টাইম ডেটা পুশ ও চ্যানেল ব্রডকাস্টিং।',
    },
    {
      icon: Layers,
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/20',
      title: 'একক ল্যাঙ্গুয়েজের শক্তি (Pure Dart)',
      desc: 'ফ্রন্টএন্ড এবং ব্যাকএন্ডে একই ভাষা ব্যবহারের ফলে আপনার শেখার গতি কয়েক গুণ বেড়ে যায় এবং পুরো ফুল-স্ট্যাক প্রজেক্ট একা নিয়ন্ত্রণ করা যায়।',
    },
    {
      icon: Server,
      color: 'text-indigo-400',
      bg: 'bg-indigo-500/10',
      border: 'border-indigo-500/20',
      title: 'কম খরচে সেলফ-হোস্টিং',
      desc: 'মালিকানা সম্পূর্ণ আপনার হাতে। কোনো ব্যয়বহুল ক্লাউড ভেন্ডর লক-ইন নেই; যেকোনো সাধারণ VPS বা ক্লাউডে নিজের মতো স্কেল করুন।',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-900">
          {/* Subtle Background Glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            {/* Version & Focus Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 text-xs font-semibold mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Flutter ডেভেলপারদের জন্য বাংলায় প্রথম কমপ্লিট ব্যাকএন্ড গাইড</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-4xl mx-auto">
              Serverpod <span className="text-indigo-400 font-sans">বাংলা একাডেমি</span>
            </h1>

            {/* Tagline */}
            <p className="mt-4 text-lg sm:text-2xl text-slate-300 font-medium max-w-2xl mx-auto">
              Flutter থেকে Full-Stack Developer — <span className="text-indigo-400">সবকিছু বাংলায়, হাতে-কলমে।</span>
            </p>

            <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Dart ল্যাঙ্গুয়েজেই লিখুন এন্টারপ্রাইজ-গ্রেড ব্যাকএন্ড, তৈরি করুন PostgreSQL ডাটাবেস টেবিল, রিয়েল-টাইম স্ট্রিমিং এবং লিনাক্স VPS-এ স্বাবলম্বী ডিপ্লয়মেন্ট।
            </p>

            {/* Hero CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/learn/what-is-backend"
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2 group"
              >
                <span>শেখা শুরু করো</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </Link>

              <Link
                href="/roadmap"
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-800 hover:border-slate-700 transition flex items-center justify-center gap-2"
              >
                <Map className="w-4 h-4 text-indigo-400" />
                <span>Learning Roadmap দেখো</span>
              </Link>

              <Link
                href="/playground"
                className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-semibold text-sm border border-slate-800 transition flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4 text-cyan-400" />
                <span>প্লে-গ্রাউন্ড</span>
              </Link>
            </div>

            {/* Highlights Bar */}
            <div className="mt-12 pt-8 border-t border-slate-900 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
                <span className="text-xl font-bold text-white font-mono">১৪টি</span>
                <p className="text-xs text-slate-400 mt-0.5">স্বয়ংসম্পূর্ণ মডিউল</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
                <span className="text-xl font-bold text-indigo-400 font-mono">১০০%</span>
                <p className="text-xs text-slate-400 mt-0.5">টাইপ-সেফ ডার্ট কোড</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
                <span className="text-xl font-bold text-emerald-400 font-mono">৪টি</span>
                <p className="text-xs text-slate-400 mt-0.5">ক্যাপস্টোন প্রজেক্টস</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
                <span className="text-xl font-bold text-cyan-400 font-mono">০ টাকা</span>
                <p className="text-xs text-slate-400 mt-0.5">সম্পূর্ণ উন্মুক্ত ও ফ্রি</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Serverpod কী এবং Flutter ডেভেলপারদের জন্য এর সুবিধা */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Serverpod কী এবং কেন শিখব?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
              Serverpod হলো ডার্ট ল্যাঙ্গুয়েজে তৈরি পরবর্তী প্রজন্মের পূর্ণাঙ্গ ব্যাকএন্ড ফ্রেমওয়ার্ক যা বিশেষত Flutter ডেভেলপারদের জন্য নিখুঁতভাবে অপ্টিমাইজড।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv, idx) => {
              const Icon = adv.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/80 hover:border-slate-700 transition space-y-3 group"
                >
                  <div
                    className={`w-10 h-10 rounded-xl ${adv.bg} ${adv.border} border flex items-center justify-center ${adv.color}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-100 group-hover:text-indigo-300 transition">
                    {adv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {adv.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 2: Course Modules Overview */}
        <section className="py-16 sm:py-20 bg-slate-900/30 border-y border-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                  স্ট্রাকচার্ড কারিকুলাম
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
                  কোর্সের ১৪টি মূল মডিউল
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-xl">
                  ফান্ডামেন্টালস থেকে শুরু করে ডাটাবেস, অথেন্টিকেশন, স্ট্রিমিং ও প্রোডাকশন ডিপ্লয়মেন্ট পর্যন্ত প্রতিটি ধাপ পরিকল্পিতভাবে সাজানো।
                </p>
              </div>

              <Link
                href="/learn"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition"
              >
                <span>সবগুলো মডিউল বিস্তারিত দেখুন</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allModules.slice(0, 6).map((mod) => (
                <div
                  key={mod.id}
                  className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-indigo-500/40 hover:bg-slate-900 transition flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20">
                        মডিউল {mod.number}
                      </span>
                      <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {mod.estimatedHours}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-100 group-hover:text-indigo-300 transition mt-2">
                      {mod.title.replace(/^মডিউল \d+: /, '')}
                    </h3>
                    <p className="mt-2 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {mod.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">
                      {mod.lessons.length}টি বিস্তারিত পাঠ
                    </span>
                    <Link
                      href={`/learn/${mod.lessons[0]?.slug || 'what-is-backend'}`}
                      className="text-indigo-400 hover:underline font-semibold flex items-center gap-1"
                    >
                      <span>শুরু করুন</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/learn"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs sm:text-sm font-semibold border border-slate-800 transition"
              >
                <span>আরও ৮টি অ্যাডভান্সড মডিউল দেখুন</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 3: Practical Projects Showcase Preview */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
              পোর্টফোলিও বিল্ডার
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
              বাস্তবমুখী ক্যাপস্টোন প্রজেক্টস
            </h2>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
              থিওরি শেখার পাশাপাশি এই ৪টি ইন্ডাস্ট্রি মানের প্রজেক্ট তৈরি করে আপনার গিটহাব পোর্টফোলিও সমৃদ্ধ করুন।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectShowcases.map((proj) => (
              <div
                key={proj.id}
                className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-4 hover:border-slate-700 transition"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    {proj.level}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">
                    {proj.techStack[0]}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-100">{proj.title}</h3>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {proj.description}
                </p>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    {proj.features.length}টি পূর্ণাঙ্গ ফিচার
                  </span>
                  <Link
                    href={`/learn/${proj.lessons[0]?.slug || 'task-manager-server-setup'}`}
                    className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                  >
                    <span>প্রজেক্ট বাস্তবায়ন দেখুন</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Frequently Asked Questions */}
        <section className="py-16 sm:py-20 bg-slate-900/20 border-t border-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                সচরাচর জিজ্ঞাসিত প্রশ্নাবলী (FAQ)
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-400">
                Serverpod এবং এই প্ল্যাটফর্ম সম্পর্কিত সাধারণ প্রশ্নের উত্তরসমূহ।
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden transition"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-800/40 transition"
                    >
                      <span className="text-sm sm:text-base font-semibold text-slate-200">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-indigo-400' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-slate-800/60">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-8 sm:p-12 rounded-3xl border border-indigo-500/30 bg-gradient-to-r from-indigo-950/40 via-slate-900 to-indigo-950/40 shadow-2xl space-y-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              আজই শুরু করুন আপনার ফুল-স্ট্যাক ব্যাকএন্ড যাত্রা
            </h2>
            <p className="text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
              Flutter থেকে Full-Stack Developer হওয়ার সব জ্ঞান এখন এক জায়গায়, সম্পূর্ণ বাংলায়।
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/learn/what-is-backend"
                className="px-8 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition shadow-xl shadow-indigo-600/30 flex items-center gap-2"
              >
                <span>প্রথম পাঠে প্রবেশ করুন</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
