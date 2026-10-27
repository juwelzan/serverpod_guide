'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { glossaryItems } from '@/content/glossary';
import { Bookmark, Search, ArrowRight, Lightbulb, Code2 } from 'lucide-react';

export default function GlossaryPage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { key: 'all', label: 'সবগুলো' },
    { key: 'core', label: 'কোর ইঞ্জিন' },
    { key: 'database', label: 'ডাটাবেস ও ORM' },
    { key: 'networking', label: 'নেটওয়ার্কিং ও RPC' },
    { key: 'devops', label: 'ডেভঅপস ও টুলস' },
  ];

  const filtered = glossaryItems.filter((item) => {
    const matchesCategory =
      selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.term.toLowerCase().includes(search.toLowerCase()) ||
      item.englishDefinition.toLowerCase().includes(search.toLowerCase()) ||
      item.bengaliExplanation.includes(search);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Header />

      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-3">
            <Bookmark className="w-3.5 h-3.5" />
            <span>প্রযুক্তিগত অভিধান</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Serverpod <span className="text-indigo-400">শব্দকোষ (Glossary)</span>
          </h1>
          <p className="mt-3 text-sm text-slate-400 leading-relaxed">
            ব্যাকএন্ড এবং Serverpod-এর জটিল পরিভাষাগুলোর প্রাঞ্জল বাংলা ব্যাখ্যা ও বাস্তব উপমা।
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition whitespace-nowrap ${
                  selectedCategory === cat.key
                    ? 'bg-indigo-600 text-white font-semibold shadow-md'
                    : 'bg-slate-900 hover:bg-slate-800 text-slate-400 border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="শব্দ খুঁজুন..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Glossary Items List */}
        <div className="space-y-6">
          {filtered.length === 0 ? (
            <div className="p-12 text-center text-slate-500 text-sm">
              কোনো ফলাফল পাওয়া যায়নি। অন্য কোনো শব্দ দিয়ে খুঁজুন।
            </div>
          ) : (
            filtered.map((item) => (
              <div
                key={item.slug}
                className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-4 hover:border-slate-700 transition"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                    <span className="text-indigo-400 font-mono">{item.term}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 font-normal">
                      {item.category}
                    </span>
                  </h3>
                  <span className="text-xs text-slate-500 font-mono italic">
                    {item.englishDefinition}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.bengaliExplanation}
                </p>

                {item.analogy && (
                  <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-xs text-emerald-300 flex items-start gap-2">
                    <Lightbulb className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">সহজ উপমা: </span>
                      <span>{item.analogy}</span>
                    </div>
                  </div>
                )}

                {item.exampleSnippet && (
                  <div className="rounded-xl bg-slate-950 p-3 font-mono text-xs text-indigo-300 border border-slate-800 overflow-x-auto">
                    <pre>
                      <code>{item.exampleSnippet}</code>
                    </pre>
                  </div>
                )}

                {item.relatedLessons.length > 0 && (
                  <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
                    <span className="text-slate-500">সম্পর্কিত পাঠ:</span>
                    {item.relatedLessons.map((les, lIdx) => (
                      <Link
                        key={lIdx}
                        href={`/learn/${les.slug}`}
                        className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 hover:underline"
                      >
                        <span>{les.title}</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

