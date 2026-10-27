import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { projectShowcases } from '@/content/projects';
import {
  Code2,
  FolderTree,
  Database,
  ArrowRight,
  CheckCircle2,
  Layers,
  Sparkles,
} from 'lucide-react';

export default function ProjectsPage() {
  const getLevelBadge = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'Intermediate':
        return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20';
      case 'Advanced':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      default:
        return 'bg-rose-500/10 text-rose-400 border-rose-500/20';
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>হাতে-কলমে বাস্তব প্রজেক্টস</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            ৪টি সম্পূর্ণ <span className="text-indigo-400">ক্যাপস্টোন প্রজেক্ট</span>
          </h1>
          <p className="mt-3 text-sm text-slate-400 leading-relaxed">
            শুধু থিওরি নয়! প্রতিটি প্রজেক্টের পূর্ণাঙ্গ ডেটাবেস স্কিমা, ফাইল স্ট্রাকচার এবং এন্ডপয়েন্ট আর্কিটেকচার নিয়ে বাস্তব ফুল-স্ট্যাক অ্যাপ্লিকেশন তৈরি করুন।
          </p>
        </div>

        {/* Projects Cards List */}
        <div className="space-y-12">
          {projectShowcases.map((project) => (
            <div
              key={project.id}
              className="p-6 sm:p-8 rounded-3xl border border-slate-800 bg-slate-900/60 shadow-xl space-y-6"
            >
              {/* Top Banner */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`px-3 py-0.5 rounded-full text-xs font-semibold border ${getLevelBadge(
                        project.level
                      )}`}
                    >
                      {project.level} Level
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      {project.techStack.join(' • ')}
                    </span>
                  </div>
                  <h2 className="text-2xl font-extrabold text-slate-100">{project.title}</h2>
                  <p className="text-xs sm:text-sm text-indigo-400 mt-1 font-medium">
                    {project.tagline}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  {project.lessons.map((les, lIdx) => (
                    <Link
                      key={lIdx}
                      href={`/learn/${les.slug}`}
                      className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition flex items-center gap-1.5 shadow-md shadow-indigo-600/20"
                    >
                      <span>বাস্তবায়ন পাঠ দেখুন</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Description & Features */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    প্রজেক্টের বিবরণ ও লক্ষ্য
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-6 mb-3">
                    মূল ফিচারসমূহ (Key Features)
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {project.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  {/* Architecture Box */}
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider block mb-1">
                      আর্কিটেকচার ফ্লো
                    </span>
                    <p className="text-xs font-mono text-slate-300">
                      {project.architectureOverview}
                    </p>
                  </div>

                  {/* Schema Snippet */}
                  {project.dbSchemaSnippet && (
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                      <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                        ডাটাবেস মডেল (YAML)
                      </span>
                      <pre className="text-xs font-mono text-slate-300 overflow-x-auto">
                        <code>{project.dbSchemaSnippet}</code>
                      </pre>
                    </div>
                  )}

                  {/* Folder Structure */}
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                      ফোল্ডার আর্কিটেকচার
                    </span>
                    <pre className="text-xs font-mono text-slate-400 overflow-x-auto">
                      <code>{project.folderStructure}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

