import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HelpCircle, ArrowLeft, BookOpen } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-md p-8 rounded-3xl border border-slate-800 bg-slate-900/60 shadow-2xl space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mx-auto">
            <HelpCircle className="w-8 h-8" />
          </div>

          <h1 className="text-4xl font-extrabold text-white font-mono">৪০৪</h1>
          <h2 className="text-lg font-bold text-slate-200">পৃষ্ঠাটি খুঁজে পাওয়া যায়নি</h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            আপনি যে পাঠ বা পাতাটি খুঁজছেন তা স্থানান্তরিত হয়েছে অথবা লিংকটি ভুল হতে পারে।
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition flex items-center justify-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>হোমে ফিরুন</span>
            </Link>

            <Link
              href="/learn"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition flex items-center justify-center gap-1.5"
            >
              <BookOpen className="w-4 h-4" />
              <span>সবগুলো পাঠ দেখুন</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

