'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CourseModule } from '@/types';
import { CheckCircle2, ChevronDown, ChevronRight, BookOpen } from 'lucide-react';
import { getLocalProgress } from '@/lib/progress/progressManager';

interface CourseSidebarProps {
  modules: CourseModule[];
  currentLessonSlug?: string;
}

export function CourseSidebar({ modules, currentLessonSlug }: CourseSidebarProps) {
  const [completedSlugs, setCompletedSlugs] = useState<string[]>([]);
  const [openModules, setOpenModules] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const p = getLocalProgress();
    setCompletedSlugs(p.completedLessons);

    // Auto-open the module that contains currentLessonSlug
    if (currentLessonSlug) {
      const activeMod = modules.find((m) =>
        m.lessons.some((l) => l.slug === currentLessonSlug)
      );
      if (activeMod) {
        setOpenModules((prev) => ({ ...prev, [activeMod.id]: true }));
      }
    } else if (modules.length > 0) {
      setOpenModules({ [modules[0].id]: true });
    }
  }, [currentLessonSlug, modules]);

  const toggleModule = (modId: string) => {
    setOpenModules((prev) => ({
      ...prev,
      [modId]: !prev[modId],
    }));
  };

  return (
    <aside className="w-full lg:w-72 flex-shrink-0 border-r border-slate-800/80 bg-slate-950/60 lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] overflow-y-auto p-4 space-y-3">
      <div className="flex items-center justify-between px-2 mb-2">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
          কারিকুলাম নেভিগেশন
        </h3>
        <span className="text-[11px] font-semibold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-full">
          ১৪টি মডিউল
        </span>
      </div>

      <div className="space-y-2">
        {modules.map((mod) => {
          const isOpen = !!openModules[mod.id];
          const hasActiveLesson = mod.lessons.some((l) => l.slug === currentLessonSlug);
          const completedCount = mod.lessons.filter((l) =>
            completedSlugs.includes(l.slug)
          ).length;

          return (
            <div
              key={mod.id}
              className={`rounded-xl border transition overflow-hidden ${
                hasActiveLesson
                  ? 'border-indigo-500/40 bg-slate-900/60'
                  : 'border-slate-800/80 bg-slate-900/30'
              }`}
            >
              {/* Module Header Button */}
              <button
                onClick={() => toggleModule(mod.id)}
                className="w-full p-3 text-left flex items-center justify-between gap-2 hover:bg-slate-800/50 transition"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 text-[11px] text-indigo-400 font-semibold">
                    <span>মডিউল {mod.number}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-400 font-normal">
                      {completedCount}/{mod.lessons.length} সম্পন্ন
                    </span>
                  </div>
                  <h4 className="text-xs font-semibold text-slate-200 truncate mt-0.5">
                    {mod.title.replace(/^মডিউল \d+: /, '')}
                  </h4>
                </div>
                {isOpen ? (
                  <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-slate-400 flex-shrink-0" />
                )}
              </button>

              {/* Lessons Sub-list */}
              {isOpen && (
                <div className="px-2 pb-2 pt-1 border-t border-slate-800/50 space-y-1">
                  {mod.lessons.map((lesson) => {
                    const isCurrent = lesson.slug === currentLessonSlug;
                    const isDone = completedSlugs.includes(lesson.slug);

                    return (
                      <Link
                        key={lesson.id}
                        href={`/learn/${lesson.slug}`}
                        className={`flex items-start gap-2.5 p-2 rounded-lg text-xs transition ${
                          isCurrent
                            ? 'bg-indigo-600 text-white font-semibold shadow-md shadow-indigo-600/20'
                            : isDone
                            ? 'text-slate-300 hover:bg-slate-800/70 hover:text-white'
                            : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                        }`}
                      >
                        <div className="mt-0.5 flex-shrink-0">
                          {isDone ? (
                            <CheckCircle2
                              className={`w-3.5 h-3.5 ${
                                isCurrent ? 'text-white' : 'text-emerald-400'
                              }`}
                            />
                          ) : (
                            <BookOpen
                              className={`w-3.5 h-3.5 ${
                                isCurrent ? 'text-white' : 'text-slate-500'
                              }`}
                            />
                          )}
                        </div>
                        <span className="line-clamp-2 leading-relaxed">{lesson.title}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}

