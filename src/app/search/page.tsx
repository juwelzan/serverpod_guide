'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { allModules } from '@/content/modules';
import { buildSearchIndex, searchLessons, SearchResult } from '@/lib/search/searchEngine';
import { Search, BookOpen, Terminal, FileCode, Tag, ArrowRight } from 'lucide-react';

function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [searchIndex, setSearchIndex] = useState<ReturnType<typeof buildSearchIndex>>([]);

  useEffect(() => {
    setSearchIndex(buildSearchIndex(allModules));
  }, []);

  useEffect(() => {
    if (query.trim().length > 0 && searchIndex.length > 0) {
      const hits = searchLessons(query, searchIndex);
      setResults(hits);
    } else {
      setResults([]);
    }
  }, [query, searchIndex]);

  const getMatchIcon = (field: SearchResult['matchedField']) => {
    switch (field) {
      case 'command':
        return <Terminal className="w-4 h-4 text-emerald-400" />;
      case 'filename':
        return <FileCode className="w-4 h-4 text-cyan-400" />;
      case 'concept':
        return <Tag className="w-4 h-4 text-purple-400" />;
      default:
        return <BookOpen className="w-4 h-4 text-indigo-400" />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
      {/* Search Bar */}
      <div className="relative mb-8">
        <Search className="w-5 h-5 text-indigo-400 absolute left-4 top-4" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="সার্চ করুন (e.g. serverpod create, session, PostgreSQL, BLoC)..."
          className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 shadow-xl"
          autoFocus
        />
      </div>

      {/* Results Count & Query Info */}
      <div className="flex items-center justify-between text-xs text-slate-400 mb-6">
        <span>
          {query.trim()
            ? `"${query}" এর জন্য ${results.length}টি ফলাফল পাওয়া গেছে`
            : 'অনুসন্ধানের জন্য কোনো কীওয়ার্ড লিখুন'}
        </span>
      </div>

      {/* Results List */}
      <div className="space-y-4">
        {results.map((res) => (
          <Link
            key={res.lessonId}
            href={`/learn/${res.lessonSlug}`}
            className="block p-5 rounded-2xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/80 hover:border-indigo-500/40 transition group shadow-md"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3 min-w-0">
                <div className="p-2 rounded-xl bg-slate-800 border border-slate-700/60 mt-0.5 flex-shrink-0">
                  {getMatchIcon(res.matchedField)}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-semibold text-indigo-400">
                      মডিউল {res.moduleNumber}
                    </span>
                    <span className="text-slate-600 text-xs">•</span>
                    <span className="text-xs text-slate-400 capitalize">
                      {res.matchedField} match
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-100 group-hover:text-indigo-300 transition">
                    {res.lessonTitle}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 font-mono line-clamp-2">
                    {res.snippet}
                  </p>
                </div>
              </div>

              <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition flex-shrink-0 mt-2" />
            </div>
          </Link>
        ))}

        {query.trim().length > 1 && results.length === 0 && (
          <div className="p-12 text-center text-slate-500 text-sm">
            কোনো ফলাফল পাওয়া যায়নি। ভিন্ন কোনো শব্দ দিয়ে অনুসন্ধান করুন।
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Header />
      <Suspense fallback={<div className="p-10 text-center text-slate-400">লোড হচ্ছে...</div>}>
        <SearchContent />
      </Suspense>
      <Footer />
    </div>
  );
}

