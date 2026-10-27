'use client';

import React, { useState } from 'react';
import { QuizQuestion } from '@/types';
import { CheckCircle2, XCircle, RotateCcw, HelpCircle, Trophy } from 'lucide-react';
import { recordQuizScore } from '@/lib/progress/progressManager';

interface QuizSectionProps {
  questions: QuizQuestion[];
  moduleId: string;
}

export function QuizSection({ questions, moduleId }: QuizSectionProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  if (!questions || questions.length === 0) return null;

  const handleSelect = (questionId: string, optionIdx: number) => {
    if (submitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIdx,
    }));
  };

  const calculateScore = () => {
    let score = 0;
    for (const q of questions) {
      if (selectedAnswers[q.id] === q.correctAnswerIndex) {
        score++;
      }
    }
    return score;
  };

  const handleSubmit = () => {
    const score = calculateScore();
    setSubmitted(true);
    recordQuizScore(moduleId, score, questions.length);
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setSubmitted(false);
  };

  const score = calculateScore();
  const isPassed = score / questions.length >= 0.7;

  return (
    <div className="my-10 p-6 rounded-2xl border border-indigo-500/20 bg-gradient-to-b from-indigo-950/20 to-slate-900/60 shadow-xl">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-100">জ্ঞান যাচাই কুইজ (Knowledge Check)</h3>
            <p className="text-xs text-slate-400">
              মডিউলের কনসেপ্টগুলো কতটা আয়ত্ত করতে পেরেছেন তা পরীক্ষা করুন ({questions.length}টি প্রশ্ন)
            </p>
          </div>
        </div>

        {submitted && (
          <div className="flex items-center gap-2">
            <span
              className={`text-xs px-3 py-1 font-semibold rounded-full border ${
                isPassed
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                  : 'bg-rose-500/10 text-rose-400 border-rose-500/30'
              }`}
            >
              স্কোর: {score} / {questions.length}
            </span>
          </div>
        )}
      </div>

      <div className="space-y-6">
        {questions.map((q, idx) => {
          const selectedOption = selectedAnswers[q.id];
          const isAnswered = selectedOption !== undefined;
          const isCorrect = selectedOption === q.correctAnswerIndex;

          return (
            <div
              key={q.id}
              className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 transition"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold flex items-center justify-center">
                  {idx + 1}
                </span>
                <p className="text-sm font-medium text-slate-200 leading-relaxed">
                  {q.question}
                </p>
              </div>

              {q.codeSnippet && (
                <div className="mb-3 p-3 rounded-lg bg-slate-950 font-mono text-xs text-slate-300 border border-slate-800 overflow-x-auto">
                  <pre>
                    <code>{q.codeSnippet}</code>
                  </pre>
                </div>
              )}

              <div className="grid gap-2 mt-2">
                {q.options.map((opt, oIdx) => {
                  const isThisSelected = selectedOption === oIdx;
                  const isThisCorrect = oIdx === q.correctAnswerIndex;

                  let optionStyle =
                    'border-slate-800 bg-slate-950/40 text-slate-300 hover:border-slate-700 hover:bg-slate-800/50';

                  if (isThisSelected && !submitted) {
                    optionStyle = 'border-indigo-500 bg-indigo-500/10 text-indigo-300';
                  }

                  if (submitted) {
                    if (isThisCorrect) {
                      optionStyle =
                        'border-emerald-500/60 bg-emerald-500/10 text-emerald-300 font-medium';
                    } else if (isThisSelected && !isThisCorrect) {
                      optionStyle = 'border-rose-500/60 bg-rose-500/10 text-rose-300';
                    }
                  }

                  return (
                    <button
                      key={oIdx}
                      disabled={submitted}
                      onClick={() => handleSelect(q.id, oIdx)}
                      className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm transition flex items-center justify-between ${optionStyle}`}
                    >
                      <span>{opt}</span>
                      {submitted && isThisCorrect && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 ml-2" />
                      )}
                      {submitted && isThisSelected && !isThisCorrect && (
                        <XCircle className="w-4 h-4 text-rose-400 flex-shrink-0 ml-2" />
                      )}
                    </button>
                  );
                })}
              </div>

              {submitted && (
                <div className="mt-3 p-3 rounded-lg bg-slate-950/70 border border-slate-800/80 text-xs text-slate-300 leading-relaxed">
                  <span className="font-semibold text-indigo-400">সঠিক উত্তরের ব্যাখ্যা: </span>
                  {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={Object.keys(selectedAnswers).length === 0}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium text-xs sm:text-sm transition shadow-lg shadow-indigo-600/20 active:scale-95"
          >
            উত্তর জমা দিন (Submit Quiz)
          </button>
        ) : (
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between">
            <div className="flex items-center gap-2">
              <Trophy
                className={`w-5 h-5 ${isPassed ? 'text-amber-400' : 'text-slate-500'}`}
              />
              <span className="text-xs sm:text-sm font-medium text-slate-200">
                {isPassed
                  ? 'চমৎকার! আপনি সফলভাবে পাস করেছেন।'
                  : 'আরও একটু চেষ্টা করুন। পুনরায় চেষ্টা করে নিজের জ্ঞান মজবুত করুন।'}
              </span>
            </div>
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              আবার দিন
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

