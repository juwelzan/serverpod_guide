import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import {
  allModules,
  getAllLessons,
  getLessonBySlug,
  getNextAndPrevLesson,
} from '@/content/modules';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CourseSidebar } from '@/components/lesson/CourseSidebar';
import { TableOfContents } from '@/components/lesson/TableOfContents';
import { NavigationButtons } from '@/components/lesson/NavigationButtons';
import { CodeBlock } from '@/components/code/CodeBlock';
import { Callout } from '@/components/lesson/Callout';
import { QuizSection } from '@/components/quiz/QuizSection';
import {
  CheckCircle,
  ExternalLink,
  Clock,
  Sparkles,
  AlertTriangle,
  Lightbulb,
  FileCode,
  Tag,
  ChevronRight,
} from 'lucide-react';

interface LessonPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const lessons = getAllLessons();
  return lessons.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: LessonPageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getLessonBySlug(slug);
  if (!data) return { title: 'Lesson Not Found' };

  return {
    title: `${data.lesson.title} | Serverpod বাংলা একাডেমি`,
    description: data.lesson.subtitle,
  };
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { slug } = await params;
  const data = getLessonBySlug(slug);

  if (!data) {
    notFound();
  }

  const { lesson, module } = data;
  const { prevLesson, nextLesson } = getNextAndPrevLesson(slug);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Header />

      <div className="flex-1 max-w-7xl mx-auto w-full flex flex-col lg:flex-row">
        {/* Left Sidebar: Course Navigation */}
        <CourseSidebar modules={allModules} currentLessonSlug={slug} />

        {/* Center: Main Lesson Content */}
        <main className="flex-1 min-w-0 px-4 sm:px-8 py-8 lg:py-10 max-w-4xl mx-auto">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-1.5 text-xs text-slate-400 mb-6 flex-wrap">
            <Link href="/" className="hover:text-slate-200 transition">
              হোম
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <Link href="/learn" className="hover:text-slate-200 transition">
              কোর্স
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-slate-400 truncate max-w-[200px]">
              {module.title.replace(/^মডিউল \d+: /, '')}
            </span>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-indigo-400 font-medium truncate max-w-[200px]">
              {lesson.title}
            </span>
          </nav>

          {/* Lesson Header */}
          <header className="mb-8 pb-6 border-b border-slate-800">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                মডিউল {module.number} • পাঠ {lesson.order}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-800 text-slate-300 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {lesson.readingTimeMinutes} মিনিট পড়ার সময়
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
                {lesson.serverpodVersion}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-100 leading-snug">
              {lesson.title}
            </h1>
            <p className="mt-2 text-base text-slate-400 leading-relaxed">
              {lesson.subtitle}
            </p>
          </header>

          {/* Objectives & Prerequisites Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="p-4 rounded-xl border border-indigo-500/20 bg-indigo-950/15">
              <h3 className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                শিক্ষণীয় উদ্দেশ্য (Objectives)
              </h3>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {lesson.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-slate-400" />
                পূর্বশর্ত (Prerequisites)
              </h3>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {lesson.prerequisites.map((pre, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 flex-shrink-0 mt-1.5" />
                    <span>{pre}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Why this is important & Real world analogy */}
          <div className="my-6 space-y-4">
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60">
              <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                কেন বিষয়টি অত্যন্ত গুরুত্বপূর্ণ?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {lesson.whyImportant}
              </p>
            </div>

            {lesson.realWorldAnalogy && (
              <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-950/15">
                <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  বাস্তব জীবনের উপমা (Real-World Analogy)
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {lesson.realWorldAnalogy}
                </p>
              </div>
            )}
          </div>

          {/* Architecture diagram if present */}
          {lesson.architectureDiagram && (
            <div className="my-6 p-4 rounded-xl border border-slate-800 bg-slate-950 font-mono text-xs text-indigo-300 overflow-x-auto">
              <div className="text-[10px] text-slate-500 font-sans uppercase mb-1.5 font-bold">
                আর্কিটেকচার ডায়াগ্রাম:
              </div>
              <pre>{lesson.architectureDiagram}</pre>
            </div>
          )}

          {/* File details card if specified */}
          {lesson.fileDetails && (
            <div className="my-6 p-4 rounded-xl border border-slate-800 bg-slate-900/80">
              <div className="flex items-center gap-2 mb-2">
                <FileCode className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                  ফাইল স্পেসিফিকেশন
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                <div>
                  <span className="text-slate-500 block">ফাইল পাথ:</span>
                  <code className="font-mono text-indigo-300 break-all">
                    {lesson.fileDetails.filePath}
                  </code>
                </div>
                <div>
                  <span className="text-slate-500 block">কে এডিট করবে:</span>
                  <span className="font-semibold text-slate-200 capitalize">
                    {lesson.fileDetails.whoEdits === 'developer'
                      ? 'Developer (ম্যানুয়ালি এডিট করবেন)'
                      : 'Generator (অটো-জেনারেটেড)'}
                  </span>
                </div>
                <div className="sm:col-span-2">
                  <span className="text-slate-500 block">কাজের উদ্দেশ্য:</span>
                  <span>{lesson.fileDetails.purpose}</span>
                </div>
              </div>
            </div>
          )}

          {/* Lesson Main Sections */}
          <article className="space-y-8 my-8">
            {lesson.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-20">
                <h2 className="text-lg sm:text-xl font-bold text-slate-100 mb-3 border-b border-slate-800/60 pb-2">
                  {section.title}
                </h2>
                <div className="text-sm text-slate-300 leading-relaxed whitespace-pre-line space-y-3">
                  {section.content}
                </div>

                {section.callout && (
                  <Callout
                    type={section.callout.type}
                    title={section.callout.title}
                    message={section.callout.message}
                  />
                )}

                {section.codeSnippet && <CodeBlock snippet={section.codeSnippet} />}
              </section>
            ))}
          </article>

          {/* Common Mistakes */}
          {lesson.commonMistakes && lesson.commonMistakes.length > 0 && (
            <div className="my-8 p-5 rounded-2xl border border-amber-500/20 bg-amber-950/10">
              <h3 className="text-sm font-bold text-amber-300 uppercase tracking-wider mb-4 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                সচরাচর যে ভুলগুলো বিগিনাররা করে (Common Mistakes)
              </h3>
              <div className="space-y-4">
                {lesson.commonMistakes.map((m, idx) => (
                  <div key={idx} className="space-y-1 text-xs sm:text-sm">
                    <p className="text-rose-300 font-semibold">❌ ভুল: {m.mistake}</p>
                    <p className="text-emerald-300 font-medium">
                      ✅ সমাধান: {m.solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Practice Exercise */}
          {lesson.practiceExercise && (
            <div className="my-8 p-5 rounded-2xl border border-indigo-500/20 bg-indigo-950/20">
              <h3 className="text-sm font-bold text-indigo-300 uppercase tracking-wider mb-2">
                {lesson.practiceExercise.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 mb-2 leading-relaxed">
                {lesson.practiceExercise.task}
              </p>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400">
                <span className="font-semibold text-indigo-400">হিন্ট (Hint): </span>
                {lesson.practiceExercise.hint}
              </div>
            </div>
          )}

          {/* Knowledge Quiz Section */}
          {lesson.quiz && lesson.quiz.length > 0 && (
            <QuizSection questions={lesson.quiz} moduleId={module.id} />
          )}

          {/* Lesson Summary */}
          <div className="my-8 p-5 rounded-2xl border border-slate-800 bg-slate-900/60">
            <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              পাঠের সারসংক্ষেপ (Summary)
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {lesson.summary.map((sum, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0 mt-2" />
                  <span>{sum}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Reference Link */}
          {lesson.officialDocUrl && (
            <div className="my-6 p-4 rounded-xl border border-slate-800/80 bg-slate-900/40 flex items-center justify-between text-xs">
              <span className="text-slate-400">অফিশিয়াল ডকুমেন্টেশন সোর্স:</span>
              <a
                href={lesson.officialDocUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1 font-medium transition"
              >
                <span>Serverpod Documentation</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

          {/* Prev / Next & Mark Complete Navigation */}
          <NavigationButtons
            currentSlug={slug}
            prevLesson={prevLesson}
            nextLesson={nextLesson}
          />
        </main>

        {/* Right Sidebar: Table of Contents */}
        <TableOfContents
          sections={lesson.sections}
          readingTimeMinutes={lesson.readingTimeMinutes}
        />
      </div>

      <Footer />
    </div>
  );
}

