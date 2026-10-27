'use client';

import React, { useState } from 'react';
import { Check, Copy, FileCode, Terminal, Settings, Sparkles } from 'lucide-react';
import { CodeSnippet } from '@/types';

interface CodeBlockProps {
  snippet: CodeSnippet;
}

export function CodeBlock({ snippet }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(snippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.warn('Copy failed', e);
    }
  };

  const lines = snippet.code.trim().split('\n');
  const isLong = lines.length > 25;

  const getTypeBadge = () => {
    switch (snippet.type) {
      case 'generated':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Sparkles className="w-3 h-3" /> Auto-Generated (Do Not Edit)
          </span>
        );
      case 'server':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <FileCode className="w-3 h-3" /> Server Code (Editable)
          </span>
        );
      case 'flutter':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <FileCode className="w-3 h-3" /> Flutter App (Editable)
          </span>
        );
      case 'command':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Terminal className="w-3 h-3" /> Terminal Command
          </span>
        );
      case 'config':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
            <Settings className="w-3 h-3" /> Configuration
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="my-6 rounded-xl border border-slate-800 bg-slate-900/90 shadow-2xl overflow-hidden backdrop-blur">
      {/* Code Header Bar */}
      <div className="flex flex-wrap items-center justify-between px-4 py-2.5 bg-slate-950/80 border-b border-slate-800/80 gap-2">
        <div className="flex items-center gap-2 overflow-hidden text-xs">
          <div className="flex items-center gap-1.5 mr-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>

          {snippet.filePath && (
            <span className="font-mono text-slate-300 font-medium truncate max-w-xs sm:max-w-md">
              {snippet.filePath}
            </span>
          )}

          {getTypeBadge()}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono uppercase text-slate-400 font-semibold px-2 py-0.5 rounded bg-slate-800">
            {snippet.language}
          </span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 transition active:scale-95 border border-slate-700"
            title="কোড কপি করুন"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-sans">কপি হয়েছে!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span className="font-sans">কপি</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code Body */}
      <div className={`relative ${!isExpanded && isLong ? 'max-h-72 overflow-hidden' : ''}`}>
        <div className="overflow-x-auto p-4 font-mono text-sm leading-relaxed text-slate-200">
          <pre className="table w-full">
            <code>
              {lines.map((line, idx) => {
                const lineNum = idx + 1;
                const isHighlighted = snippet.highlightLines?.includes(lineNum);
                return (
                  <div
                    key={idx}
                    className={`table-row transition-colors ${
                      isHighlighted ? 'bg-indigo-500/15 text-indigo-200 font-semibold' : ''
                    } hover:bg-slate-800/40`}
                  >
                    <span className="table-cell select-none pr-4 text-right text-xs text-slate-600 font-mono w-8">
                      {lineNum}
                    </span>
                    <span className="table-cell whitespace-pre">{line || ' '}</span>
                  </div>
                );
              })}
            </code>
          </pre>
        </div>

        {!isExpanded && isLong && (
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900 to-transparent flex items-end justify-center pb-3">
            <button
              onClick={() => setIsExpanded(true)}
              className="px-4 py-1.5 text-xs font-medium rounded-full bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg transition"
            >
              সম্পূর্ণ কোড দেখুন ({lines.length} লাইন)
            </button>
          </div>
        )}
      </div>

      {/* Explanation panel if provided */}
      {snippet.explanation && (
        <div className="px-4 py-2.5 bg-slate-950/60 border-t border-slate-800 text-xs text-slate-300 flex items-start gap-2">
          <span className="font-semibold text-indigo-400 whitespace-nowrap">ব্যাখ্যা:</span>
          <span className="leading-normal">{snippet.explanation}</span>
        </div>
      )}
    </div>
  );
}

