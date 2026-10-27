'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X, BookOpen, Terminal, FileCode, Tag, ArrowRight } from 'lucide-react';
import { allModules } from '@/content/modules';
import { buildSearchIndex, searchLessons, SearchResult } from '@/lib/search/searchEngine';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [searchIndex, setSearchIndex] = useState<ReturnType<typeof buildSearchIndex>>([]);

  useEffect(() => {
    // Lazy build the search index on client mount
    setSearchIndex(buildSearchIndex(allModules));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        isOpen ? onClose() : null;
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (query.trim().length > 1 && searchIndex.length > 0) {
      const hits = searchLessons(query, searchIndex);
      setResults(hits.slice(0, 8)); // Top 8 results
    } else {
      setResults([]);
    }
  }, [query, searchIndex]);

  if (!isOpen) return null;

  const handleSelect = (slug: string) => {
    onClose();
    router.push(`/learn/${slug}`);
  };

  const getMatchIcon = (field: SearchResult['matchedField']) => {
    switch (field) {
      case 'command':
        return <Terminal className="w-3.5 h-3.5 text-emerald-400" />;
      case 'filename':
        return <FileCode className="w-3.5 h-3.5 text-cyan-400" />;
      case 'concept':
        return <Tag className="w-3.5 h-3.5 text-purple-400" />;
      default:
        return <BookOpen className="w-3.5 h-3.5 text-indigo-400" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/80 backdrop-blur-md">
      <div
        className="w-full max-w-2xl rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl overflow-hidden flex flex-col max-h-[80vh] animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Box */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 gap-3">
          <Search className="w-5 h-5 text-indigo-400 flex-shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="লেসন, কমান্ড, ফাইলনেম বা কনসেপ্ট খুঁজুন... (e.g. serverpod create, session, postgres)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-slate-100 placeholder-slate-500 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-800 rounded border border-slate-700">
            ESC
          </kbd>
        </div>

        {/* Results list */}
        <div className="overflow-y-auto p-2 divide-y divide-slate-800/40">
          {query.trim().length > 1 && results.length === 0 && (
            <div className="p-8 text-center text-sm text-slate-400">
              <p>"{query}" দিয়ে কোনো ফলাফল পাওয়া যায়নি।</p>
              <p className="text-xs text-slate-500 mt-1">
                ভিন্ন কোনো ইংরেজি শব্দ বা বাংলা পরিভাষা দিয়ে চেষ্টা করুন।
              </p>
            </div>
          )}

          {results.map((res) => (
            <div
              key={res.lessonId}
              onClick={() => handleSelect(res.lessonSlug)}
              className="p-3 rounded-xl hover:bg-slate-800/60 cursor-pointer transition flex items-center justify-between group"
            >
              <div className="flex items-start gap-3 min-w-0 pr-4">
                <div className="mt-1 p-1.5 rounded-lg bg-slate-800 border border-slate-700/60 flex-shrink-0">
                  {getMatchIcon(res.matchedField)}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-medium text-indigo-400 font-sans truncate">
                      মডিউল {res.moduleNumber}
                    </span>
                    <span className="text-slate-600 text-xs">•</span>
                    <span className="text-xs text-slate-400 truncate">
                      {res.matchedField} match
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-slate-200 group-hover:text-indigo-300 transition truncate">
                    {res.lessonTitle}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-1 mt-0.5 font-mono">
                    {res.snippet}
                  </p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition flex-shrink-0" />
            </div>
          ))}

          {query.trim().length <= 1 && (
            <div className="p-6 text-xs text-slate-400 space-y-3">
              <p className="font-semibold text-slate-300">জনপ্রিয় সার্চ সাজেশন:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  'serverpod create',
                  'PostgreSQL',
                  'Endpoint',
                  'Session',
                  'BLoC',
                  'Streaming',
                  'Docker',
                  'Port 8080',
                  'YAML model',
                ].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700/60 transition"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

