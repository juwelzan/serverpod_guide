import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import {
  Map,
  CheckCircle2,
  Terminal,
  Database,
  ShieldCheck,
  Radio,
  Server,
  Layers,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

export default function RoadmapPage() {
  const phases = [
    {
      phase: 'ধাপ ১',
      title: 'ব্যাকএন্ড ও নেটওয়ার্কিং ভিত্তি',
      duration: '১-২ সপ্তাহ',
      icon: Terminal,
      color: 'text-indigo-400',
      borderColor: 'border-indigo-500/30',
      bg: 'bg-indigo-950/20',
      description:
        'Flutter অ্যাপের বাইরে সার্ভার ও ডাটাবেসের জগৎ কীভাবে কাজ করে তা বোঝা। লোকালহোস্ট, আইপি ও পোর্টের স্পষ্ট ধারণা।',
      milestones: [
        { title: 'ব্যাকএন্ড কী এবং কেন Flutter ডেভেলপারের এটি জানা জরুরি?', slug: 'what-is-backend' },
        { title: 'REST API বনাম Serverpod RPC এর তুলনা', slug: 'rest-vs-serverpod-rpc' },
        { title: 'রিকোয়েস্ট-রেসপন্স লাইফসাইকেল ও নেটওয়ার্কিং', slug: 'request-response-networking' },
      ],
    },
    {
      phase: 'ধাপ ২',
      title: 'এনভায়রনমেন্ট ও প্রথম প্রজেক্ট বুট',
      duration: '১ সপ্তাহ',
      icon: Layers,
      color: 'text-cyan-400',
      borderColor: 'border-cyan-500/30',
      bg: 'bg-cyan-950/20',
      description:
        'Dart SDK পাথ ঠিক করা, Serverpod CLI ইনস্টল, ৩টি সাব-প্যাকেজের কাঠামো ও প্রথম সার্ভার লাইভ করা।',
      milestones: [
        { title: 'Flutter ও Dart এনভায়রনমেন্ট যাচাই', slug: 'flutter-dart-environment-check' },
        { title: 'Serverpod CLI ইনস্টলেশন ও পাথ কনফিগারেশন', slug: 'installing-serverpod-cli' },
        { title: 'জেনারেটেড ৩টি প্রধান প্যাকেজের পরিচিতি', slug: 'the-three-generated-packages' },
        { title: 'প্রথমবার সার্ভার বুট ও সার্ভার লগস পড়া', slug: 'running-the-server-first-time' },
      ],
    },
    {
      phase: 'ধাপ ৩',
      title: 'এন্ডপয়েন্ট ও টাইপ-সেফ কোড জেনারেশন',
      duration: '১ সপ্তাহ',
      icon: Sparkles,
      color: 'text-amber-400',
      borderColor: 'border-amber-500/30',
      bg: 'bg-amber-950/20',
      description:
        'Endpoint ক্লাস তৈরি, Session অবজেক্টের কাজ এবং Flutter UI থেকে সরাসরি মেথড কল করা।',
      milestones: [
        { title: 'একটি এন্ডপয়েন্ট তৈরি ও Session অবজেক্ট', slug: 'creating-first-endpoint' },
        { title: 'Flutter ক্লায়েন্ট থেকে সার্ভার এন্ডপয়েন্ট কল করা', slug: 'calling-endpoint-from-flutter' },
      ],
    },
    {
      phase: 'ধাপ ৪',
      title: 'PostgreSQL ডাটাবেস ও ORM মাস্টারক্লাস',
      duration: '২ সপ্তাহ',
      icon: Database,
      color: 'text-emerald-400',
      borderColor: 'border-emerald-500/30',
      bg: 'bg-emerald-950/20',
      description:
        'YAML দিয়ে ডাটাবেস টেবিল মডেলিং, স্কিমা মাইগ্রেশন এবং Dart ORM দিয়ে টাইপ-সেফ CRUD অপারেশন।',
      milestones: [
        { title: 'YAML মডেল ও ডাটাবেস টেবিল ডেফিনিশন', slug: 'yaml-models-and-tables' },
        { title: 'ডাটাবেস মাইগ্রেশন: নিরাপদে স্কিমা আপডেট', slug: 'database-migrations' },
        { title: 'Serverpod ORM দিয়ে Insert, Find, Update, Delete', slug: 'orm-crud-operations' },
        { title: 'Task Manager CRUD বাস্তব প্রজেক্ট তৈরি', slug: 'task-manager-server-setup' },
      ],
    },
    {
      phase: 'ধাপ ৫',
      title: 'অথেন্টিকেশন ও ইউজার সিকিউরিটি',
      duration: '১-২ সপ্তাহ',
      icon: ShieldCheck,
      color: 'text-rose-400',
      borderColor: 'border-rose-500/30',
      bg: 'bg-rose-950/20',
      description:
        'ইমেইল/পাসওয়ার্ড সাইনআপ, সেশন টোকেন লাইফসাইকেল এবং সার্ভার সাইড প্রটেক্টেড এন্ডপয়েন্ট।',
      milestones: [
        { title: 'Serverpod অথেন্টিকেশন আর্কিটেকচার', slug: 'serverpod-auth-architecture' },
        { title: 'প্রটেক্টেড এন্ডপয়েন্ট ও ইউজার আইডি চেক', slug: 'protected-endpoints-and-scopes' },
        { title: 'Project B: Secure Notes App', slug: 'project-b-notes-app-with-auth' },
      ],
    },
    {
      phase: 'ধাপ ৬',
      title: 'রিয়েল-টাইম স্ট্রিমিং ও লাইভ কমিউনিকেশন',
      duration: '১ সপ্তাহ',
      icon: Radio,
      color: 'text-purple-400',
      borderColor: 'border-purple-500/30',
      bg: 'bg-purple-950/20',
      description:
        'Serverpod-এর বিল্ট-ইন WebSocket স্ট্রিমিং সেশন এবং লাইভ চ্যাট মেসেজিং সিস্টেম।',
      milestones: [
        { title: 'Serverpod স্ট্রিমিং আর্কিটেকচার', slug: 'serverpod-streaming-concepts' },
        { title: 'Flutter ক্লায়েন্টে লাইভ চ্যাট স্ট্রিম সাবস্ক্রিপশন', slug: 'flutter-realtime-chat-client' },
        { title: 'Project C: Real-time Multi-Room Chat', slug: 'project-c-realtime-chat' },
      ],
    },
    {
      phase: 'ধাপ ৭',
      title: 'VPS প্রোডাকশন ডিপ্লয়মেন্ট ও সেলফ-হোস্টিং',
      duration: '১-২ সপ্তাহ',
      icon: Server,
      color: 'text-indigo-400',
      borderColor: 'border-indigo-500/30',
      bg: 'bg-indigo-950/20',
      description:
        'ডকার কন্টেইনারাইজেশন, উবুন্টু VPS সার্ভার, Nginx রিভার্স প্রক্সি এবং Let\'s Encrypt SSL।',
      milestones: [
        { title: 'লিনাক্স VPS প্রিপারেশন ও Docker কন্টেইনারাইজেশন', slug: 'docker-and-vps-preparation' },
        { title: 'Nginx রিভার্স প্রক্সি ও Let\'s Encrypt SSL', slug: 'nginx-reverse-proxy-ssl' },
        { title: 'Project D: Mini SaaS Multi-Tenant Backend', slug: 'project-d-mini-saas-backend' },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Header />

      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-3">
            <Map className="w-3.5 h-3.5" />
            <span>ক্যারিয়ার পাথওয়ে</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Serverpod লার্নিং <span className="text-indigo-400">রোডম্যাপ</span>
          </h1>
          <p className="mt-3 text-sm text-slate-400 leading-relaxed">
            শূন্য থেকে প্রফেশনাল ফুল-স্ট্যাক ব্যাকএন্ড ইঞ্জিনিয়ার হওয়ার সুসংগঠিত গাইডলাইন। ধাপে ধাপে প্রতিটি মাইলফলক স্পর্শ করুন।
          </p>
        </div>

        {/* Roadmap Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {phases.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="relative group">
                {/* Timeline Node Icon */}
                <div
                  className={`absolute -left-[35px] sm:-left-[51px] top-1.5 w-8 h-8 rounded-full border-2 ${p.borderColor} bg-slate-950 flex items-center justify-center ${p.color} shadow-lg`}
                >
                  <Icon className="w-4 h-4" />
                </div>

                <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-slate-700 transition">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                      {p.phase} • {p.duration}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-100 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mb-5 leading-relaxed">
                    {p.description}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-slate-800/80">
                    <span className="text-xs font-semibold text-slate-300 block mb-1">
                      মূল শিক্ষণীয় পাঠসমূহ:
                    </span>
                    {p.milestones.map((m, mIdx) => (
                      <Link
                        key={mIdx}
                        href={`/learn/${m.slug}`}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-indigo-500/40 hover:bg-slate-800/40 text-xs text-slate-300 transition group/link"
                      >
                        <span className="flex items-center gap-2 truncate pr-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                          <span className="truncate">{m.title}</span>
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover/link:text-indigo-400 group-hover/link:translate-x-1 transition flex-shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Box */}
        <div className="mt-16 text-center p-8 rounded-3xl border border-indigo-500/30 bg-gradient-to-r from-indigo-950/30 via-slate-900 to-indigo-950/30 shadow-2xl">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            আপনার ব্যাকএন্ড যাত্রা শুরু করতে প্রস্তুত?
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto mb-6">
            মডিউল ১ থেকে শুরু করুন এবং প্রতিটি কোড প্র্যাকটিস করুন। কোনো কনসেপ্ট বাদ দেবেন না।
          </p>
          <Link
            href="/learn/what-is-backend"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition shadow-lg shadow-indigo-600/30"
          >
            <span>প্রথম পাঠ শুরু করুন</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

