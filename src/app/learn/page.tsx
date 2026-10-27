'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { allModules } from '@/content/modules';
import { getLocalProgress, resetProgress } from '@/lib/progress/progressManager';
import {
  BookOpen,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  Bookmark,
  Trophy,
  RotateCcw,
} from 'lucide-react';

export default function LearnDashboardPage() {
  const [completedSlugs, setCompletedSlugs] = useState<string[]>([]);
  const [currentLessonSlug, setCurrentLessonSlug] = useState('what-is-backend');
  const [bookmarkCount, setBookmarkCount] = useState(0);
  const [quizScoreCount, setQuizScoreCount] = useState(0);

  useEffect(() => {
    const p = getLocalProgress();
    setCompletedSlugs(p.completedLessons);
    setCurrentLessonSlug(p.currentLessonSlug || 'what-is-backend');
    setBookmarkCount(p.bookmarks.length);
    setQuizScoreCount(Object.keys(p.quizScores).length);
  }, []);

  const totalLessons = allModules.reduce((acc, m) => acc + m.lessons.length, 0);
  const totalCompleted = completedSlugs.length;
  const progressPercent = totalLessons > 0 ? Math.round((totalCompleted / totalLessons) * 100) : 0;

  const handleReset = () => {
    if (confirm('আপনি কি সত্যিই আপনার সমস্ত অগ্রগতি ও বুকমার্ক রিসেট করতে চান?')) {
      resetProgress();
      setCompletedSlugs([]);
      setCurrentLessonSlug('what-is-backend');
      setBookmarkCount(0);
      setQuizScoreCount(0);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Dashboard Hero */}
        <div className="mb-10 p-6 sm:p-8 rounded-3xl border border-indigo-500/20 bg-gradient-to-r from-indigo-950/40 via-slate-900 to-slate-950 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>সম্পূর্ণ বাংলা কোর্স কারিকুলাম</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              কোর্স ড্যাশবোর্ড
            </h1>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              ১৪টি স্বয়ংসম্পূর্ণ মডিউল ও বাস্তবসম্মত প্রোজেক্টসের সমন্বয়ে Flutter ডেভেলপারদের জন্য পূর্ণাঙ্গ Serverpod ব্যাকএন্ড লার্নিং পথচলা।
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <Link
              href={`/learn/${currentLessonSlug}`}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition shadow-lg shadow-indigo-600/25 flex items-center justify-center gap-2"
            >
              <span>শেখা চালিয়ে যান</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={handleReset}
              className="w-full sm:w-auto px-4 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-rose-400 text-xs font-medium border border-slate-800 transition flex items-center justify-center gap-1.5"
              title="লার্নিং প্রোগ্রেস রিসেট"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>রিসেট</span>
            </button>
          </div>
        </div>

        {/* Progress Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          <div className="p-4 rounded-2xl border border-slate-800 bg-slate-900/50">
            <span className="text-xs text-slate-400 block mb-1">মোট অগ্রগতি</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-indigo-400 font-mono">
                {progressPercent}%
              </span>
              <span className="text-xs text-slate-500">সম্পন্ন</span>
            </div>
            <div className="mt-2 w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
              <div
                className="h-full bg-indigo-500 transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <div className="p-4 rounded-2xl border border-slate-800 bg-slate-900/50">
            <span className="text-xs text-slate-400 block mb-1">সম্পন্ন হওয়া পাঠ</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">
                {totalCompleted}
              </span>
              <span className="text-xs text-slate-500 font-mono">/ {totalLessons}</span>
            </div>
            <span className="text-[11px] text-slate-500 mt-1 block">অনলাইন ক্লাসরুম</span>
          </div>

          <div className="p-4 rounded-2xl border border-slate-800 bg-slate-900/50">
            <span className="text-xs text-slate-400 block mb-1">সংরক্ষিত বুকমার্ক</span>
            <div className="flex items-center gap-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono">
                {bookmarkCount}
              </span>
              <Bookmark className="w-4 h-4 text-amber-400/80 fill-amber-400/20" />
            </div>
            <span className="text-[11px] text-slate-500 mt-1 block">কুইক রিভিশন লিস্ট</span>
          </div>

          <div className="p-4 rounded-2xl border border-slate-800 bg-slate-900/50">
            <span className="text-xs text-slate-400 block mb-1">কুইজ সম্পন্ন</span>
            <div className="flex items-center gap-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-purple-400 font-mono">
                {quizScoreCount}
              </span>
              <Trophy className="w-4 h-4 text-purple-400/80" />
            </div>
            <span className="text-[11px] text-slate-500 mt-1 block">জ্ঞান যাচাই সার্টিফিকেট</span>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-100">মডিউল তালিকা</h2>
            <span className="text-xs text-slate-400">১৪টি সম্পূর্ণ মডিউল</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allModules.map((mod) => {
              const completedInMod = mod.lessons.filter((l) =>
                completedSlugs.includes(l.slug)
              ).length;
              const modPercent =
                mod.lessons.length > 0
                  ? Math.round((completedInMod / mod.lessons.length) * 100)
                  : 0;

              return (
                <div
                  key={mod.id}
                  className="p-6 rounded-2xl border border-slate-800 hover:border-indigo-500/40 bg-slate-900/40 hover:bg-slate-900/70 transition flex flex-col justify-between group shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                        মডিউল {mod.number}
                      </span>
                      <span className="text-xs text-slate-500 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {mod.estimatedHours}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-100 group-hover:text-indigo-300 transition">
                      {mod.title.replace(/^মডিউল \d+: /, '')}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-2">
                      {mod.description}
                    </p>

                    {/* Lesson Mini List */}
                    <div className="mt-4 pt-4 border-t border-slate-800/60 space-y-2">
                      {mod.lessons.map((lesson) => {
                        const isDone = completedSlugs.includes(lesson.slug);
                        return (
                          <Link
                            key={lesson.id}
                            href={`/learn/${lesson.slug}`}
                            className="flex items-center justify-between text-xs text-slate-300 hover:text-indigo-300 py-1 transition group/link"
                          >
                            <span className="flex items-center gap-2 truncate pr-2">
                              {isDone ? (
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                              ) : (
                                <BookOpen className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
                              )}
                              <span className="truncate">{lesson.title}</span>
                            </span>
                            <span className="text-[11px] text-slate-500 font-mono flex-shrink-0">
                              {lesson.readingTimeMinutes}m
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* Module Footer Progress */}
                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-medium">
                      অগ্রগতি: {completedInMod}/{mod.lessons.length} সম্পন্ন
                    </span>
                    <Link
                      href={`/learn/${mod.lessons[0]?.slug || 'what-is-backend'}`}
                      className="text-indigo-400 group-hover:text-indigo-300 font-semibold flex items-center gap-1 transition"
                    >
                      <span>মডিউল শুরু করুন</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

