import { GlossaryItem } from '@/types';

export const glossaryItems: GlossaryItem[] = [
  {
    term: 'Endpoint',
    slug: 'endpoint',
    englishDefinition: 'A controller class on the server that exposes callable RPC methods to the client.',
    bengaliExplanation:
      'সার্ভারপডের একটি বিশেষ কন্ট্রোলার ক্লাস যা ক্লায়েন্টের কল করার জন্য পাবলিক মেথড উন্মুক্ত করে। ক্লায়েন্ট এই মেথডগুলোকে সরাসরি ফাংশন কলের মতো ব্যবহার করতে পারে।',
    analogy: 'ব্যাংকের সার্ভিস কাউন্টার, যেখানে গ্রাহক নির্দিষ্ট কাজের জন্য যোগাযোগ করে।',
    exampleSnippet: `class TaskEndpoint extends Endpoint {
  Future<Task> createTask(Session session, Task task) async {
    return await Task.db.insertRow(session, task);
  }
}`,
    category: 'core',
    relatedLessons: [
      { title: 'প্রথম এন্ডপয়েন্ট তৈরি', slug: 'creating-first-endpoint' },
      { title: 'Flutter ক্লায়েন্ট থেকে কল করা', slug: 'calling-endpoint-from-flutter' },
    ],
  },
  {
    term: 'Session',
    slug: 'session',
    englishDefinition: 'An object representing the context and lifecycle of an incoming client request.',
    bengaliExplanation:
      'যেকোনো এন্ডপয়েন্ট মেথডে প্রথম আর্গুমেন্ট হিসেবে আসা অবজেক্ট, যার ভেতর ডাটাবেস ট্রানজ্যাকশন, লগিং, ক্যাশ এবং লগইন করা ইউজারের পরিচয় সংরক্ষিত থাকে।',
    analogy: 'হাসপাতালে প্রবেশের সময় রোগীর নামে খোলা ফাইল, যা পুরো চিকিৎসা চলাকালীন সাথে থাকে।',
    exampleSnippet: `final userId = await session.authenticatedUserId;
session.log('অপারেশন সম্পন্ন হয়েছে');`,
    category: 'core',
    relatedLessons: [
      { title: 'Endpoint ক্লাস ও Session', slug: 'creating-first-endpoint' },
      { title: 'প্রটেক্টেড এন্ডপয়েন্ট ও ইউজার আইডি', slug: 'protected-endpoints-and-scopes' },
    ],
  },
  {
    term: 'Database Migration',
    slug: 'database-migration',
    englishDefinition: 'Version-controlled incremental schema updates for the PostgreSQL database.',
    bengaliExplanation:
      'ডাটাবেসের পুরনো স্কিমা না হারিয়ে নিরাপদে নতুন টেবিল বা কলাম যোগ এবং পরিবর্তনের জন্য তৈরি করা ধারাবাহিক SQL স্ক্রিপ্ট।',
    analogy: 'বিল্ডিংয়ের মূল কাঠামো অক্ষুণ্ণ রেখে নতুন রুম যোগ করার ধাপে ধাপে নির্মাণ পরিকল্পনা।',
    exampleSnippet: `serverpod create-migration
dart run bin/main.dart --apply-migrations`,
    category: 'database',
    relatedLessons: [
      { title: 'ডাটাবেস মাইগ্রেশন', slug: 'database-migrations' },
    ],
  },
  {
    term: 'Serverpod Insights',
    slug: 'serverpod-insights',
    englishDefinition: 'Built-in diagnostic dashboard running on port 8081 for real-time monitoring.',
    bengaliExplanation:
      'Serverpod-এর সাথে আসা চমৎকার ভিজুয়াল কনসোল, যা সার্ভারের মেমোরি ব্যবহার, স্লো ডাটাবেস কুয়েরি এবং লাইভ এরর লগ গ্রাফ আকারে প্রদর্শন করে।',
    analogy: 'গাড়ির ড্যাশবোর্ডের স্পিডোমিটার ও ইঞ্জিন টেম্পারেচার ইন্ডিকেটর।',
    category: 'devops',
    relatedLessons: [
      { title: 'সার্ভার লগস বিশ্লেষণ', slug: 'running-the-server-first-time' },
    ],
  },
  {
    term: 'Remote Procedure Call (RPC)',
    slug: 'rpc',
    englishDefinition: 'Calling a function on a remote computer without explicitly coding network details.',
    bengaliExplanation:
      'এমন একটি কমিউনিকেশন প্রোটোকল যার মাধ্যমে দূরের কোনো কম্পিউটারের ফাংশনকে নিজের লোকাল অ্যাপের ফাংশনের মতো কল করা যায় এবং টাইপ-সেফ ফলাফল পাওয়া যায়।',
    analogy: 'ওয়াকি-টকিতে কথা বলে অপর প্রান্তের সহকর্মীকে দিয়ে কাজ করিয়ে নেওয়া।',
    exampleSnippet: `final user = await client.user.getUserProfile(id: 10);`,
    category: 'networking',
    relatedLessons: [
      { title: 'REST বনাম Serverpod RPC', slug: 'rest-vs-serverpod-rpc' },
    ],
  },
  {
    term: 'Future Call',
    slug: 'future-call',
    englishDefinition: 'A persistent background task scheduled to execute at a specific future time.',
    bengaliExplanation:
      'নির্দিষ্ট সময় পর ব্যাকগ্রাউন্ডে স্বয়ংক্রিয়ভাবে চালানোর জন্য শিডিউল করা টাস্ক। সার্ভার রিস্টার্ট হলেও এটি ডাটাবেসে সেভ থাকায় মিস হয় না।',
    analogy: 'স্মার্টফোনে নির্দিষ্ট দিনের জন্য সেট করে রাখা অ্যালার্ম।',
    exampleSnippet: `await session.serverpod.futureCallWithDelay(
  'sendFollowupEmail',
  userData,
  const Duration(days: 3),
);`,
    category: 'core',
    relatedLessons: [
      { title: 'ক্যাশিং ও ফিউচার কলস', slug: 'caching-and-background-tasks' },
    ],
  },
];

