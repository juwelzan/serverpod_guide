import { CourseModule } from '@/types';

export const module3: CourseModule = {
  id: 'module-3',
  number: 3,
  title: 'মডিউল ৩: প্রথম Serverpod প্রজেক্ট তৈরি ও রান করা',
  slug: 'create-first-serverpod-project',
  description:
    'Project scaffolding কী, serverpod create বনাম serverpod quickstart, ডাটাবেস অপশন নির্বাচন, জেনারেটেড ৩টি প্যাকেজ এবং প্রথমবার সার্ভার বুট করা।',
  estimatedHours: '৩ ঘণ্টা',
  iconName: 'FolderPlus',
  lessons: [
    {
      id: 'm3-l1',
      slug: 'project-scaffolding-commands',
      moduleId: 'module-3',
      moduleTitle: 'মডিউল ৩: প্রথম প্রজেক্ট তৈরি',
      title: 'Project Scaffolding এবং `serverpod create` কমান্ডের বিস্তারিত',
      subtitle: 'সার্ভারপডের নতুন প্রজেক্ট জেনারেশন আর্কিটেকচার বোঝা',
      order: 1,
      readingTimeMinutes: 9,
      objectives: [
        '`serverpod create` কমান্ড ব্যবহারের নিয়ম জানা',
        'প্রজেক্টের নাম ও প্যাকেজ নেমিং কনভেনশন মেনে চলা',
        'কমান্ড আর্গুমেন্ট ও ডাটাবেস ফ্ল্যাগগুলো বোঝা',
      ],
      prerequisites: ['Serverpod CLI ইনস্টল থাকা'],
      whyImportant:
        'Serverpod কেবল একটি সিঙ্গেল ফোল্ডার প্রজেক্ট তৈরি করে না; এটি একসাথে একটি সম্পূর্ণ ফুল-স্ট্যাক মনোরিপো (Server, Client ও Flutter App) জেনারেট করে যা নিজেদের মধ্যে ইন্টার-কানেক্টেড।',
      sections: [
        {
          id: 's1',
          title: '১. প্রজেক্ট তৈরির কমান্ড',
          content: `টার্মিনালে গিয়ে যে ডিরেক্টরিতে প্রজেক্ট তৈরি করতে চান সেখানে যান এবং কমান্ড দিন:`,
          codeSnippet: {
            language: 'bash',
            type: 'command',
            code: `serverpod create school_api`,
            explanation:
              'এই কমান্ডটি `school_api` নামে একটি মূল ফোল্ডার তৈরি করবে যার ভেতর ৩টি সাব-প্যাকেজ থাকবে।',
          },
          callout: {
            type: 'important',
            title: 'নেমিং কনভেনশন সতর্কতা',
            message:
              'Dart প্যাকেজ নেমিং নিয়মানুযায়ী নাম সবসময় lowercase_with_underscores হতে হবে। যেমন: `my_backend` বা `school_api`। স্পেস বা হাইফেন (`my-api`) ব্যবহার করবেন না।',
          },
        },
        {
          id: 's2',
          title: '২. সার্ভারপড ৪ ও নতুন সংস্করণের কুইকস্টার্ট নোটিশ',
          content:
            'Serverpod এর আধুনিক সংস্করণগুলোতে লোকাল ডেভেলপমেন্ট অত্যন্ত সহজ করতে ডকার ছাড়াও এমবেডেড পোস্টগ্রেস বা সরাসরি কুইকস্টার্ট সাপোর্ট যুক্ত হয়েছে। আপনার ইনস্টল করা CLI সংস্করণে `serverpod --help` দিয়ে সমর্থিত সাবকমান্ড যাচাই করে নেওয়া উত্তম।',
        },
      ],
      commonMistakes: [
        {
          mistake: 'প্রজেক্ট নামে বড় হাতের অক্ষর (CamelCase) ব্যবহার করা (যেমন `MyApi`)।',
          solution: 'সর্বদা snake_case ব্যবহার করুন (যেমন `my_api`)।',
        },
      ],
      quiz: [
        {
          id: 'q3-1',
          question: '`school_api` নামে একটি Serverpod প্রজেক্ট তৈরির সঠিক কমান্ড কোনটি?',
          type: 'command',
          options: [
            'flutter create --server school_api',
            'serverpod create school_api',
            'dart create serverpod school_api',
            'serverpod new app school_api',
          ],
          correctAnswerIndex: 1,
          explanation: '`serverpod create <project_name>` অফিশিয়াল প্রজেক্ট তৈরির কমান্ড।',
        },
      ],
      summary: [
        '`serverpod create <project_name>` দিয়ে প্রজেক্ট জেনারেট হয়।',
        'নামকরণে snake_case মেনে চলা বাধ্যতামূলক।',
      ],
      officialDocUrl: 'https://docs.serverpod.dev/quickstart',
      serverpodVersion: 'Serverpod 2.x+',
    },
    {
      id: 'm3-l2',
      slug: 'the-three-generated-packages',
      moduleId: 'module-3',
      moduleTitle: 'মডিউল ৩: প্রথম প্রজেক্ট তৈরি',
      title: 'জেনারেটেড ৩টি প্রধান প্যাকেজের পরিচিতি ও সম্পর্ক',
      subtitle: '_server, _client এবং _flutter প্যাকেজের মেলবন্ধন',
      order: 2,
      readingTimeMinutes: 10,
      objectives: [
        'তিনটি পৃথক প্যাকেজের ভূমিকা ও দায়িত্ব আলাদা করা',
        'ক্লায়েন্ট প্যাকেজ কীভাবে স্বয়ংক্রিয়ভাবে সার্ভার কোড থেকে উৎপন্ন হয় তা জানা',
        'কেন Flutter প্যাকেজে কখনোই সার্ভার কোড ডিরেক্ট ডিপেন্ডেন্সি হিসেবে যুক্ত করা যাবে না তা উপলব্ধি করা',
      ],
      prerequisites: ['মৌলিক প্যাকেজ আর্কিটেকচার'],
      whyImportant:
        'এই ৩টি প্যাকেজের স্পষ্ট বিভাজনই Serverpod-কে পৃথিবীর সবচেয়ে পরিচ্ছন্ন ফুল-স্ট্যাক ডার্ট আর্কিটেকচার বানিয়েছে। কোনটি ম্যানুয়াল আর কোনটি অটো-জেনারেটেড তা জানা অত্যন্ত জরুরি।',
      sections: [
        {
          id: 's1',
          title: '১. প্যাকেজ ট্রায়ো আর্কিটেকচার',
          content: `\`serverpod create school_api\` চালানোর পর মূল ফোল্ডারে নিচের ৩টি ফোল্ডার দেখতে পাবেন:

1. **\`school_api_server/\` (Backend Server):**
   - আপনার সমস্ত বিজনেস লজিক, এন্ডপয়েন্ট, ডাটাবেস টেবিল মডেল এবং সার্ভার কনফিগারেশন এখানে থাকে।
   - এটি Dart VM-এ আপনার ব্যাকএন্ড নোড হিসেবে রান করে।

2. **\`school_api_client/\` (Client Library SDK):**
   - **সতর্কতা: এই ফোল্ডারের ফাইলগুলো কখনো হাতে এডিট করবেন না!**
   - সার্ভার প্যাকেজে আপনি যে এন্ডপয়েন্ট ও মডেল লিখবেন, Serverpod CLI সেগুলোকে অ্যানালাইজ করে এই প্যাকেজে বিশুদ্ধ ক্লায়েন্ট ডার্ট ক্লাস তৈরি করে দেয়।

3. **\`school_api_flutter/\` (Flutter Application):**
   - আপনার ইউজার ইন্টারফেস (UI), উইজেট, BLoC/Riverpod স্টেট ম্যানেজমেন্ট এখানে থাকে।
   - এটি ডিপেন্ডেন্সি হিসেবে \`school_api_client\`-কে ব্যবহার করে সার্ভারের সাথে নিরাপদ যোগাযোগ করে।`,
          callout: {
            type: 'important',
            title: 'সবচেয়ে বড় গোল্ডেন রুল',
            message:
              'কখনোই `_flutter` প্যাকেজে `_server` প্যাকেজ ইমপোর্ট করবেন না! Flutter অ্যাপ শুধুমাত্র `_client` প্যাকেজের সাথে যুক্ত থাকবে। কারণ সার্ভার প্যাকেজে ডাটাবেস ড্রাইভার ও সিক্রেট কনফিগ থাকে যা মোবাইল অ্যাপে পাঠানো যাবে না।',
          },
        },
      ],
      summary: [
        '_server ফোল্ডারে ব্যাকএন্ড কোড লেখা হয়।',
        '_client প্যাকেজ স্বয়ংক্রিয়ভাবে জেনারেট হয়।',
        '_flutter অ্যাপ কেবল _client ইমপোর্ট করে কাজ করে।',
      ],
      officialDocUrl: 'https://docs.serverpod.dev/quickstart',
      serverpodVersion: 'All versions',
    },
    {
      id: 'm3-l3',
      slug: 'running-the-server-first-time',
      moduleId: 'module-3',
      moduleTitle: 'মডিউল ৩: প্রথম প্রজেক্ট তৈরি',
      title: 'প্রথমবার সার্ভার বুট করা ও সার্ভার লগস বিশ্লেষণ',
      subtitle: 'docker compose, dart run bin/main.dart এবং Insights কনসোল',
      order: 3,
      readingTimeMinutes: 10,
      objectives: [
        'লোকাল ডাটাবেস স্ট্যাক চালু করা',
        'সার্ভারপড ব্যাকএন্ড রান করার নিয়ম শেখা',
        'কনসোলে সার্ভার লগস পড়ে সফল বুট নিশ্চিত করা',
      ],
      prerequisites: ['Docker অথবা Embedded PostgreSQL প্রস্তুত থাকা'],
      whyImportant:
        'সার্ভার রান করার সাথে সাথে এটি পোর্ট লিসেন করে এবং ডাটাবেসের টেবিল মাইগ্রেশন যাচাই করে। টার্মিনাল লগ পড়ার দক্ষতা একজন দক্ষ ব্যাকএন্ড ইঞ্জিনিয়ারের প্রাথমিক গুণ।',
      sections: [
        {
          id: 's1',
          title: '১. সার্ভার রান করার ধাপসমূহ',
          content: `**ধাপ ১: ডকার চালু করা (যদি ডকার-বেসড কনফিগ থাকে)**
সার্ভার ডিরেক্টরিতে যান এবং ডাটাবেস স্টার্ট করুন:`,
          codeSnippet: {
            language: 'bash',
            type: 'command',
            code: `cd school_api_server
docker compose up --build -d`,
            explanation:
              'এই কমান্ডটি ব্যাকগ্রাউন্ডে PostgreSQL ডাটাবেস ও Redis কন্টেইনার চালু করবে।',
          },
        },
        {
          id: 's2',
          title: 'ধাপ ২: সার্ভারপড সার্ভার শুরু করা',
          content: `এখন একই ডিরেক্টরিতে সার্ভার প্রসেস রান করুন:`,
          codeSnippet: {
            language: 'bash',
            type: 'command',
            code: `dart run bin/main.dart`,
            explanation:
              'এই কমান্ডটি আপনার সার্ভারপড নোডকে কম্পাইল করে পোর্ট ৮০৮০ ও ৮০৮১-তে লাইভ করবে।',
          },
        },
        {
          id: 's3',
          title: '৩. সফল সার্ভার বুটের লগস',
          content: `টার্মিনালে নিচের মতো মেসেজ দেখতে পেলে বুঝবেন সার্ভার সম্পূর্ণ প্রস্তুত:
\`\`\`text
SERVERPOD version: 2.x.x, mode: development, target: normal
Insights listening on port 8081
Web server listening on port 8082
Server default listening on port 8080
Initialization completed in 340 ms
\`\`\``,
        },
      ],
      commonMistakes: [
        {
          mistake: 'ডাটাবেস চালু না করেই `dart run bin/main.dart` চালানো।',
          solution: 'কনসোলে "Database connection refused" দেখলে নিশ্চিত করুন ডকার বা লোকাল পোস্টগ্রেস সক্রিয় আছে।',
        },
      ],
      quiz: [
        {
          id: 'q3-3',
          question: 'সার্ভারপড সার্ভার প্যাকেজের এন্ট্রি-পয়েন্ট ফাইল কোনটি?',
          type: 'command',
          options: [
            'lib/main.dart',
            'bin/main.dart',
            'server.dart',
            'config/run.dart',
          ],
          correctAnswerIndex: 1,
          explanation: 'সার্ভারপডের এক্সিকিউটেবল Dart স্ক্রিপ্ট হলো `bin/main.dart`।',
        },
      ],
      summary: [
        'প্রথমে ডাটাবেস চালু করতে হয়।',
        '`dart run bin/main.dart` কমান্ড দিয়ে সার্ভার চালানো হয়।',
        'পোর্ট ৮০৮০ হলো ক্লায়েন্ট API পোর্ট।',
      ],
      officialDocUrl: 'https://docs.serverpod.dev/quickstart',
      serverpodVersion: 'Serverpod 2.x+',
    },
  ],
};

