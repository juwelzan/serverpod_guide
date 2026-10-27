import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Server, Heart, Code2, Users, Rocket, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Header />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mx-auto mb-4">
            <Server className="w-6 h-6" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Serverpod <span className="text-indigo-400 font-sans">বাংলা একাডেমি</span>
          </h1>
          <p className="mt-3 text-base text-slate-300">
            Flutter থেকে Full-Stack Developer — সবকিছু বাংলায়, হাতে-কলমে।
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-sm sm:text-base text-slate-300 leading-relaxed">
          <div className="p-6 rounded-3xl border border-slate-800 bg-slate-900/50 space-y-4">
            <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              <Rocket className="w-5 h-5 text-indigo-400" />
              <span>আমাদের মিশন ও রূপকল্প</span>
            </h2>
            <p>
              বিশ্বের সবচেয়ে দ্রুত বর্ধনশীল ফ্রন্টএন্ড ফ্রেমওয়ার্কগুলোর একটি হলো Flutter। তবে অধিকাংশ Flutter ডেভেলপার ব্যাকএন্ড ও ডাটাবেসের ক্ষেত্রে থার্ড-পার্টি সার্ভিস বা ভেন্ডর লক-ইনে আটকা পড়েন। নতুন কোনো ল্যাঙ্গুয়েজ (যেমন Node.js বা Go) শেখার ঝামেলা ছাড়াই শুধুমাত্র Dart দিয়েই যাতে যে কেউ নিজস্ব প্রডাকশন-রেডি ব্যাকএন্ড তৈরি করতে পারেন, সেজন্যই তৈরি হয়েছে <strong>Serverpod</strong>।
            </p>
            <p>
              আমাদের লক্ষ্য হলো বাংলাদেশের প্রতিটি ডেভেলপার যাতে মাতৃভাষায় আন্তর্জাতিক মানের আর্কিটেকচার ও এন্টারপ্রাইজ ব্যাকএন্ড ডেভেলপমেন্ট শিখতে পারেন।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40">
              <h3 className="text-base font-bold text-slate-100 mb-2 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-emerald-400" />
                <span>যাদের জন্য এই প্ল্যাটফর্ম</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                <li>• Flutter ডেভেলপার যারা ব্যাকএন্ডে স্বাবলম্বী হতে চান</li>
                <li>• ফুল-স্ট্যাক ডার্ট ইঞ্জিনিয়ারিংয়ে ক্যারিয়ার গড়তে ইচ্ছুক ব্যক্তি</li>
                <li>• স্টার্টআপ ফাউন্ডার যারা কম খরচে স্কেলেবল ব্যাকএন্ড চান</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40">
              <h3 className="text-base font-bold text-slate-100 mb-2 flex items-center gap-2">
                <Heart className="w-4 h-4 text-rose-400" />
                <span>আমাদের মূল মূল্যবোধ</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                <li>• ১০০% ফ্রি এবং ওপেন কমিউনিটি এডুকেশন</li>
                <li>• কোনো ফাঁকা প্লেসহোল্ডার বা অকেজো কোড নয়</li>
                <li>• রানটাইম ভেরিফাইড এবং প্রোডাকশন-রেডি উদাহরণ</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center pt-8 border-t border-slate-900">
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition shadow-lg shadow-indigo-600/30"
          >
            <span>কোর্স কারিকুলাম দেখুন</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

