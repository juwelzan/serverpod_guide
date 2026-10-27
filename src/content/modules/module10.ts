import { CourseModule } from '@/types';

export const module10: CourseModule = {
  id: 'module-10',
  number: 10,
  title: 'মডিউল ১০: এরর হ্যান্ডলিং, ভ্যালিডেশন ও টেস্টিং',
  slug: 'error-handling-and-testing',
  description:
    'সার্ভার সাইড ভ্যালিডেশন, কাস্টম এক্সেপশন, সার্ভারপড এন্ডপয়েন্ট ইউনিট টেস্টিং, ইন্টিগ্রেশন টেস্টিং এবং কমন নেটওয়ার্ক/মাইগ্রেশন এরর সমাধান গাইড।',
  estimatedHours: '৩ ঘণ্টা',
  iconName: 'AlertCircle',
  lessons: [
    {
      id: 'm10-l1',
      slug: 'testing-serverpod-endpoints',
      moduleId: 'module-10',
      moduleTitle: 'মডিউল ১০: টেস্টিং ও এরর হ্যান্ডলিং',
      title: 'Serverpod এন্ডপয়েন্টের ইউনিট ও ইন্টিগ্রেশন টেস্ট',
      subtitle: 'test/ ফোল্ডার এবং serverpod_test প্যাকেজের মাধ্যমে অটোমেটেড টেস্টিং',
      order: 1,
      readingTimeMinutes: 10,
      objectives: [
        'সার্ভারপডের অফিশিয়াল টেস্ট ইউটিলিটি ব্যবহার করা',
        'এন্ডপয়েন্টে ডেটা পাস করে এক্সপেক্টেড আউটপুট ভেরিফাই করা',
        'ডাটাবেস রোলব্যাক এবং ক্লিন টেস্ট এনভায়রনমেন্ট নিশ্চিত করা',
      ],
      prerequisites: ['মডিউল ৬ ও ৭ সম্পন্ন করা'],
      whyImportant:
        'প্রোডাকশনে কোড পুশ করার আগে স্বয়ংক্রিয় টেস্ট রান করা এন্টারপ্রাইজ স্ট্যান্ডার্ড। টেস্ট থাকলে ভবিষ্যতের কোনো কোড পরিবর্তনের কারণে আগের ফিচার ভেঙে যাওয়ার ভয় থাকে না।',
      sections: [
        {
          id: 's1',
          title: '১. এন্ডপয়েন্ট টেস্ট কোড',
          content: `সার্ভার প্যাকেজের \`test/endpoints/greeting_test.dart\` ফাইল তৈরি করুন:`,
          codeSnippet: {
            language: 'dart',
            filePath: 'school_api_server/test/endpoints/greeting_test.dart',
            type: 'server',
            code: `import 'package:test/test.dart';
import 'package:serverpod_test/serverpod_test.dart';
import '../generated/test_tools.dart';

void main() {
  withServerpod('Given GreetingEndpoint', (sessionBuilder, endpoints) {
    test('when calling hello with "Juwel" then return formatted greeting', () async {
      final session = sessionBuilder.build();
      final response = await endpoints.greeting.hello(session, 'Juwel');
      
      expect(response, contains('হ্যালো, Juwel'));
    });

    test('when calling hello with empty string then return default greeting', () async {
      final session = sessionBuilder.build();
      final response = await endpoints.greeting.hello(session, '');

      expect(response, equals('হ্যালো, অচেনা বন্ধু!'));
    });
  });
}`,
            explanation:
              '`withServerpod` টেস্ট হেল্পারটি স্বয়ংক্রিয়ভাবে একটি আইসোলেটেড সার্ভারপড ইনস্ট্যান্স চালু করে এবং টেস্ট শেষে ডাটাবেস স্টেট রোলব্যাক বা ক্লিনআপ করে দেয়।',
          },
        },
      ],
      summary: [
        '`serverpod_test` দিয়ে এন্ডপয়েন্ট টেস্ট করা অত্যন্ত সহজ।',
        'টেস্ট সেশন লাইফসাইকেল স্বয়ংক্রিয়ভাবে ক্লিন থাকে।',
      ],
      officialDocUrl: 'https://docs.serverpod.dev/',
      serverpodVersion: 'Serverpod 2.x+',
    },
    {
      id: 'm10-l2',
      slug: 'troubleshooting-common-errors',
      moduleId: 'module-10',
      moduleTitle: 'মডিউল ১০: টেস্টিং ও এরর হ্যান্ডলিং',
      title: 'টপ ৫টি সার্ভারপড এরর ও তাৎক্ষণিক সমাধান গাইড',
      subtitle: 'Connection Refused, Port Conflict, Migration mismatch ও জেনারেশন এরর ফিক্সিং',
      order: 2,
      readingTimeMinutes: 11,
      objectives: [
        'টার্মিনাল এরর মেসেজ পড়ে মূল কারণ মুহূর্তেই শনাক্ত করা',
        'পোর্ট কনফ্লিক্ট হলে প্রসেস কিল করার সঠিক কমান্ড জানা',
        'ডাটাবেস মাইগ্রেশন মিসম্যাচ ঠিক করা',
      ],
      prerequisites: ['মৌলিক টার্মিনাল দক্ষতা'],
      whyImportant:
        'ডেভেলপমেন্টের সময় বিভিন্ন কারণে সার্ভার আটকে যেতে পারে। সমাধানের সঠিক টেকনিক জানা থাকলে ঘণ্টার পর ঘণ্টা অযথা হতাশা এড়ানো সম্ভব।',
      sections: [
        {
          id: 's1',
          title: '১. পোর্ট অলরেডি ইন ইউজ (Port 8080 already in use)',
          content: `আগের সার্ভার প্রসেস ব্যাকগ্রাউন্ডে চলতে থাকলে এই এরর হয়।

**সমাধান (macOS / Linux):**
\`\`\`bash
# ৮০৮০ পোর্টের প্রসেস আইডি (PID) খুঁজে বের করে কিল করুন
lsof -ti:8080 | xargs kill -9
lsof -ti:8081 | xargs kill -9
\`\`\`

**সমাধান (Windows PowerShell):**
\`\`\`powershell
Get-Process -Id (Get-NetTCPConnection -LocalPort 8080).OwningProcess | Stop-Process
\`\`\``,
        },
        {
          id: 's2',
          title: '২. মাইগ্রেশন মিসম্যাচ এরর (Migration version mismatch)',
          content: `যদি মডেল পরিবর্তন করার পর মাইগ্রেশন তৈরি না করেই সার্ভার চালান, তবে সার্ভার বুট আটকে যাবে।

**সমাধান:**
\`\`\`bash
serverpod create-migration
dart run bin/main.dart --apply-migrations
\`\`\``,
        },
      ],
      summary: [
        'পোর্ট ব্যস্ত থাকলে `lsof -ti:8080 | xargs kill -9` দিয়ে ক্লিন করুন।',
        'মডেল পরিবর্তনের পর অবশ্যই মাইগ্রেশন তৈরি ও অ্যাপ্লাই করবেন।',
      ],
      serverpodVersion: 'All versions',
    },
  ],
};

