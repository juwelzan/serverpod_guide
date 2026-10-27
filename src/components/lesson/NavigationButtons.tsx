'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Lesson } from '@/types';
import { ArrowLeft, ArrowRight, CheckCircle2, Bookmark } from 'lucide-react';
import {
  getLocalProgress,
  toggleLessonCompletion,
  toggleBookmark,
} from '@/lib/progress/progressManager';

interface NavigationButtonsProps {
  currentSlug: string;
  prevLesson?: Lesson;
  nextLesson?: Lesson;
}

export function NavigationButtons({
  currentSlug,
  prevLesson,
  nextLesson,
}: NavigationButtonsProps) {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const p = getLocalProgress();
    setIsCompleted(p.completedLessons.includes(currentSlug));
    setIsBookmarked(p.bookmarks.includes(currentSlug));
  }, [currentSlug]);

  const handleToggleComplete = () => {
    const updated = toggleLessonCompletion(currentSlug);
    setIsCompleted(updated.completedLessons.includes(currentSlug));
  };

  const handleToggleBookmark = () => {
    const updated = toggleBookmark(currentSlug);
    setIsBookmarked(updated.bookmarks.includes(currentSlug));
  };

  return (
    <div className="my-10 pt-6 border-t border-slate-800 space-y-6">
      {/* Mark Complete & Bookmark Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800">
        <button
          onClick={handleToggleComplete}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition active:scale-95 ${
            isCompleted
              ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
              : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
          }`}
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>{isCompleted ? 'পাঠটি সম্পন্ন হয়েছে ✓' : 'সম্পন্ন হিসেবে চিহ্নিত করুন'}</span>
        </button>

        <button
          onClick={handleToggleBookmark}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition ${
            isBookmarked
              ? 'text-amber-400 bg-amber-500/10 border border-amber-500/30'
              : 'text-slate-400 hover:text-slate-200 bg-slate-800/60 border border-slate-700/60'
          }`}
        >
          <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-400' : ''}`} />
          <span>{isBookmarked ? 'বুকমার্ক সংরক্ষিত' : 'বুকমার্ক করুন'}</span>
        </button>
      </div>

      {/* Prev / Next Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {prevLesson ? (
          <Link
            href={`/learn/${prevLesson.slug}`}
            className="p-4 rounded-xl border border-slate-800 hover:border-indigo-500/50 bg-slate-900/60 hover:bg-slate-900 transition group flex flex-col items-start"
          >
            <div className="flex items-center gap-1.5 text-xs text-slate-400 group-hover:text-indigo-400 transition mb-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>পূর্ববর্তী পাঠ</span>
            </div>
            <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition line-clamp-1">
              {prevLesson.title}
            </span>
          </Link>
        ) : (
          <div />
        )}

        {nextLesson ? (
          <Link
            href={`/learn/${nextLesson.slug}`}
            className="p-4 rounded-xl border border-slate-800 hover:border-indigo-500/50 bg-slate-900/60 hover:bg-slate-900 transition group flex flex-col items-end text-right sm:col-start-2"
          >
            <div className="flex items-center gap-1.5 text-xs text-slate-400 group-hover:text-indigo-400 transition mb-1">
              <span>পরবর্তী পাঠ</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
            <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition line-clamp-1">
              {nextLesson.title}
            </span>
          </Link>
        ) : null}
      </div>
    </div>
  );
}

