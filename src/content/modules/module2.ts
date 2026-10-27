import { CourseModule } from '@/types';

export const module2: CourseModule = {
  id: 'module-2',
  number: 2,
  title: 'মডিউল ২: ডেভেলপমেন্ট এনভায়রনমেন্ট ও টুলস সেটআপ',
  slug: 'development-environment-setup',
  description:
    'Flutter এবং Dart এনভায়রনমেন্ট যাচাই, Serverpod CLI ইনস্টলেশন, PATH কনফিগারেশন, VS Code এক্সটেনশন এবং ইনস্টলেশন ট্রাবলশুটিং।',
  estimatedHours: '২.৫ ঘণ্টা',
  iconName: 'Wrench',
  lessons: [
    {
      id: 'm2-l1',
      slug: 'flutter-dart-environment-check',
      moduleId: 'module-2',
      moduleTitle: 'মডিউল ২: এনভায়রনমেন্ট সেটআপ',
      title: 'Flutter এবং Dart এনভায়রনমেন্ট যাচাই ও প্রয়োজনীয়তা',
      subtitle: 'flutter doctor, Dart SDK পাথ এবং প্রয়োজনীয় রিকোয়ারমেন্টস পরখ করা',
      order: 1,
      readingTimeMinutes: 7,
      objectives: [
        'Flutter ও Dart SDK সংস্করণ নির্ভুলভাবে যাচাই করা',
        'Serverpod-এর অফিশিয়াল Dart SDK রিকোয়ারমেন্টস বোঝা',
        'সিস্টেম পাথে Dart সঠিকভাবে কনফিগার করা আছে কিনা তা নিশ্চিত করা',
      ],
      prerequisites: ['পিসিতে Flutter ও Dart ইনস্টল থাকা'],
      whyImportant:
        'Serverpod আধুনিক Dart ফিচার (যেমন Patterns, Sealed classes, Records) এবং শক্তিশালী কোড জেনারেশন ব্যবহার করে। তাই উপযুক্ত Dart/Flutter ভার্সন না থাকলে CLI ও জেনারেটরে কম্প্যাটিবিলিটি এরর দেখা দেবে।',
      sections: [
        {
          id: 's1',
          title: '১. Flutter ও Dart সংস্করণ পরীক্ষা',
          content:
            'প্রথমে আপনার টার্মিনালে নিচের কমান্ড দুটি চালিয়ে বর্তমান সংস্করণ দেখে নিন:',
          codeSnippet: {
            language: 'bash',
            type: 'command',
            code: `flutter --version
dart --version
flutter doctor`,
            explanation:
              'এই কমান্ডগুলো আপনার সিস্টেমে কোন Flutter ও Dart SDK সক্রিয় রয়েছে তা প্রিন্ট করবে এবং flutter doctor কোনো অনুপস্থিত টুল থাকলে তা চিহ্নিত করবে।',
          },
          callout: {
            type: 'important',
            title: 'অফিশিয়াল রিকোয়ারমেন্টস নোট',
            message:
              'Serverpod 2.x ও তৎপরবর্তী সংস্করণের জন্য Dart 3.0+ এবং Flutter 3.19+ বা নতুন সংস্করণ সুপারিশকৃত। Serverpod 4-এ আধুনিক ফিচারের জন্য সাম্প্রতিক স্টেবল Flutter চ্যানেল ব্যবহার করা সবচেয়ে নিরাপদ।',
          },
        },
      ],
      commonMistakes: [
        {
          mistake: 'সিস্টেমে আলাদা কোনো পুরোনো Dart SDK ইনস্টল থাকায় Flutter-এর Dart ওভাররাইড হওয়া।',
          solution:
            'টার্মিনালে `which dart` চালিয়ে নিশ্চিত করুন যে এটি Flutter SDK-এর ভেতরের Dart-কে পয়েন্ট করছে (যেমন `/path/to/flutter/bin/dart`)।',
        },
      ],
      quiz: [
        {
          id: 'q2-1',
          question: 'Dart SDK-এর সংস্করণ যাচাই করার সঠিক কমান্ড কোনটি?',
          type: 'command',
          options: ['dart --version', 'flutter check-dart', 'dart show-sdk', 'serverpod dart-check'],
          correctAnswerIndex: 0,
          explanation: '`dart --version` কমান্ডটি বর্তমান সক্রিয় Dart SDK সংস্করণ প্রদর্শন করে।',
        },
      ],
      summary: [
        'Flutter ও Dart-এর সাম্প্রতিক স্টেবল সংস্করণ ব্যবহার নিশ্চিত করুন।',
        '`flutter doctor` দিয়ে সব টুলস গ্রিন টিক আছে কিনা দেখে নিন।',
      ],
      officialDocUrl: 'https://docs.serverpod.dev/installation',
      serverpodVersion: 'Serverpod 2.x - 4.x',
    },
    {
      id: 'm2-l2',
      slug: 'installing-serverpod-cli',
      moduleId: 'module-2',
      moduleTitle: 'মডিউল ২: এনভায়রনমেন্ট সেটআপ',
      title: 'Serverpod CLI ইনস্টলেশন ও PATH কনফিগারেশন',
      subtitle: 'dart pub global activate এবং PATH ফিক্সিংয়ের পূর্ণ নির্দেশিকা',
      order: 2,
      readingTimeMinutes: 10,
      objectives: [
        'Serverpod CLI গ্লোবালি ইনস্টল করা',
        'টার্মিনালে `serverpod: command not found` এরর সমাধান করা',
        'macOS, Linux ও Windows-এ PATH সঠিকভাবে সেট করা',
      ],
      prerequisites: ['Dart SDK প্রস্তুত থাকা'],
      whyImportant:
        'Serverpod CLI হলো পুরো ফ্রেমওয়ার্কের ইঞ্জিন। এটি নতুন প্রজেক্ট তৈরি করে, ডাটাবেস মাইগ্রেশন পরিচালনা করে এবং সার্ভার ও ক্লায়েন্টের মধ্যে কোড জেনারেশন চালায়।',
      sections: [
        {
          id: 's1',
          title: '১. Serverpod CLI ইনস্টলেশন কমান্ড',
          content: 'টার্মিনাল খুলে নিচের কমান্ডটি এক্সিকিউট করুন:',
          codeSnippet: {
            language: 'bash',
            type: 'command',
            code: `dart pub global activate serverpod_cli`,
            explanation:
              'এই কমান্ডটি Dart Pub থেকে অফিশিয়াল `serverpod_cli` প্যাকেজ ডাউনলোড করে আপনার গ্লোবাল Dart ক্যাশে ইনস্টল করবে।',
          },
        },
        {
          id: 's2',
          title: '২. PATH কনফিগারেশন (Command Not Found হলে)',
          content: `যদি \`serverpod version\` কমান্ড দেওয়ার পর \`command not found\` আসে, তার মানে Dart গ্লোবাল বিন ফোল্ডারটি আপনার সিস্টেম পাথে যোগ করা নেই।

**macOS / Linux (\`~/.zshrc\` অথবা \`~/.bashrc\`-তে যোগ করুন):**
\`\`\`bash
export PATH="$PATH":"$HOME/.pub-cache/bin"
\`\`\`
তারপর রান করুন: \`source ~/.zshrc\`

**Windows (PowerShell / System Environment Variables):**
\`%LOCALAPPDATA%\\Pub\\Cache\\bin\` ডিরেক্টরিটি ইউজার PATH ভ্যারিয়েবলে যোগ করুন।`,
          codeSnippet: {
            language: 'bash',
            type: 'command',
            code: `serverpod version`,
            explanation:
              'ইনস্টলেশন সফল হলে এটি ইনস্টল করা Serverpod CLI-এর সংস্করণ নম্বর প্রদর্শন করবে।',
          },
        },
      ],
      commonMistakes: [
        {
          mistake: '`dart pub global activate` চালানোর পর টার্মিনাল রিস্টার্ট না করে কমান্ড খোঁজা।',
          solution: 'টার্মিনাল উইন্ডো বন্ধ করে পুনরায় চালু করুন অথবা `source ~/.zshrc` দিন।',
        },
      ],
      quiz: [
        {
          id: 'q2-2',
          question: 'Serverpod CLI গ্লোবালি ইনস্টল করার সঠিক কমান্ড কোনটি?',
          type: 'command',
          options: [
            'npm install -g serverpod',
            'dart pub global activate serverpod_cli',
            'flutter pub add serverpod_cli',
            'brew install serverpod',
          ],
          correctAnswerIndex: 1,
          explanation: '`dart pub global activate serverpod_cli` কমান্ডের মাধ্যমে অফিশিয়াল CLI ইনস্টল হয়।',
        },
      ],
      summary: [
        '`dart pub global activate serverpod_cli` কমান্ড দিয়ে CLI ইনস্টল করতে হয়।',
        'পাথে `~/.pub-cache/bin` থাকা আবশ্যক।',
        '`serverpod version` দিয়ে সফল ইনস্টলেশন নিশ্চিত করুন।',
      ],
      officialDocUrl: 'https://docs.serverpod.dev/installation',
      serverpodVersion: 'Serverpod 2.x - 4.x',
    },
    {
      id: 'm2-l3',
      slug: 'vs-code-ide-configuration',
      moduleId: 'module-2',
      moduleTitle: 'মডিউল ২: এনভায়রনমেন্ট সেটআপ',
      title: 'Serverpod VS Code এক্সটেনশন ও IDE কনফিগারেশন',
      subtitle: 'YAML মডেল ভ্যালিডেশন, অটো-কমপ্লিশন এবং সিমলেস ডেভেলপমেন্ট অভিজ্ঞতা',
      order: 3,
      readingTimeMinutes: 6,
      objectives: [
        'অফিশিয়াল Serverpod VS Code এক্সটেনশন ইনস্টল করা',
        'YAML মডেলে রিয়েল-টাইম সিনট্যাক্স হাইলাইটিং ও অটো-কমপ্লিশন চালু করা',
        'ডেভেলপমেন্ট প্রোডাক্টিভিটি কয়েক গুণ বৃদ্ধি করা',
      ],
      prerequisites: ['VS Code ইনস্টল থাকা'],
      whyImportant:
        'Serverpod এ ডাটাবেস টেবিল ও মডেলগুলো YAML ফাইলের মাধ্যমে ডিফাইন করা হয়। অফিশিয়াল এক্সটেনশন থাকলে কোনো ফিল্ড টাইপে ভুল হলে বা ফরেন কি রিলেশনে অসঙ্গতি থাকলে টাইপ করার সাথে সাথেই লাল দাগ দিয়ে জানিয়ে দেয়।',
      sections: [
        {
          id: 's1',
          title: '১. এক্সটেনশন ইনস্টলেশন ধাপসমূহ',
          content: `1. VS Code ওপেন করে কীবোর্ডে \`Ctrl+Shift+X\` (বা Mac-এ \`Cmd+Shift+X\`) চাপুন।
2. সার্চ বারে লিখুন: **Serverpod**
3. Serverpod টিম কর্তৃক প্রকাশিত এক্সটেনশনটির **Install** বাটনে ক্লিক করুন।
4. সাথে নিশ্চিত করুন **Dart** এবং **Flutter** এক্সটেনশন দুটিও ইনস্টল করা আছে।`,
          callout: {
            type: 'tip',
            title: 'প্রো টিপ: সেভ করলেই অটো-জেনারেট',
            message:
              'Serverpod এক্সটেনশন সক্রিয় থাকলে যখনই আপনি কোনো YAML মডেল সেভ করবেন বা এন্ডপয়েন্ট ফাইলে পরিবর্তন করবেন, ব্যাকগ্রাউন্ডে স্বয়ংক্রিয়ভাবে কোড জেনারেটর রান হবে!',
          },
        },
      ],
      summary: [
        'VS Code-এ অফিশিয়াল Serverpod এক্সটেনশন ইনস্টল করলে মডেল ভ্যালিডেশন সহজ হয়।',
        'এটি অটো-কমপ্লিশন ও এরর ডিটেকশন উন্নত করে।',
      ],
      officialDocUrl: 'https://docs.serverpod.dev/installation',
      serverpodVersion: 'Serverpod 2.x - 4.x',
    },
  ],
};

