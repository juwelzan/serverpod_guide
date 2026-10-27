'use client';

import React, { useEffect, useState } from 'react';
import { LessonSection } from '@/types';
import { ListFilter, Clock, Check } from 'lucide-react';

interface TableOfContentsProps {
  sections: LessonSection[];
  readingTimeMinutes: number;
}

export function TableOfContents({ sections, readingTimeMinutes }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id || '');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveId(s.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <aside className="hidden xl:block w-64 flex-shrink-0 sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto p-4 space-y-4 text-xs">
      {/* Reading Time */}
      <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
        <Clock className="w-4 h-4 text-indigo-400" />
        <span>পড়ার আনুমানিক সময়: {readingTimeMinutes} মিনিট</span>
      </div>

      {/* Sections List */}
      <div>
        <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-slate-400 mb-2">
          <ListFilter className="w-3.5 h-3.5 text-indigo-400" />
          <span>এই পাঠে যা রয়েছে</span>
        </div>
        <nav className="space-y-1 border-l border-slate-800 pl-3">
          {sections.map((sec) => {
            const isActive = activeId === sec.id;
            return (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className={`block py-1.5 transition truncate ${
                  isActive
                    ? 'text-indigo-400 font-semibold translate-x-1'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {sec.title}
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

