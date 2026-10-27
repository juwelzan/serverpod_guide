import { CourseModule } from '@/types';

export const module12: CourseModule = {
  id: 'module-12',
  number: 12,
  title: 'মডিউল ১২: অ্যাডভান্সড ফিচার ও স্কেলিং',
  slug: 'advanced-serverpod-features',
  description:
    'ফাইল আপলোড ও অবজেক্ট স্টোরেজ (S3/GCS), মেমোরি ক্যাশিং ও Redis ক্লাস্টার, ব্যাকগ্রাউন্ড শিডিউল্ড ফিউচার কলস এবং Serverpod Insights দিয়ে হেলথ ট্র্যাকিং।',
  estimatedHours: '৩.৫ ঘণ্টা',
  iconName: 'Cpu',
  lessons: [
    {
      id: 'm12-l1',
      slug: 'file-uploads-cloud-storage',
      moduleId: 'module-12',
      moduleTitle: 'মডিউল ১২: অ্যাডভান্সড ফিচার',
      title: 'ফাইল আপলোড ও অবজেক্ট স্টোরেজ ইন্টিগ্রেশন',
      subtitle: 'ইউজার প্রোফাইল পিকচার এবং ডকুমেন্ট সরাসরি ক্লাউড স্টোরেজে আপলোড',
      order: 1,
      readingTimeMinutes: 10,
      objectives: [
        'Serverpod ক্লাউড স্টোরেজ আর্কিটেকচার বোঝা',
        'পাবলিক ও প্রাইভেট ফাইল আপলোড ইউআরএল জেনারেট করা',
        'সরাসরি ক্লাউড বা লোকাল স্টোরেজে বাইনারি ফাইল সংরক্ষণ করা',
      ],
      prerequisites: ['মডিউল ৫ ও ৬ সম্পন্ন করা'],
      whyImportant:
        'সার্ভারের মেমোরিতে সরাসরি বড় ফাইল লোড করলে র‍্যাম শেষ হয়ে সার্ভার ক্র্যাশ করতে পারে। Serverpod একটি সরাসরি আপলোড ডিরেক্ট-লিঙ্ক মেকানিজম প্রদান করে।',
      sections: [
        {
          id: 's1',
          title: '১. আপলোড ডেস্ক্রিপশন ও আপলোড প্রসেস',
          content: `সার্ভারে আপলোড হ্যান্ডলার এন্ডপয়েন্ট:`,
          codeSnippet: {
            language: 'dart',
            filePath: 'school_api_server/lib/src/endpoints/upload_endpoint.dart',
            type: 'server',
            code: `import 'package:serverpod/serverpod.dart';

class UploadEndpoint extends Endpoint {
  // ক্লায়েন্টের আপলোড করার জন্য একটি নিরাপদ সাইনড ইউআরএল তৈরি
  Future<String?> getUploadDescription(Session session, String path) async {
    return await session.storage.createDirectFileUploadDescription(
      storageId: 'public',
      path: path,
    );
  }

  // আপলোড সফল হয়েছে কিনা ভেরিফাই করা
  Future<bool> verifyUpload(Session session, String path) async {
    return await session.storage.verifyDirectFileUpload(
      storageId: 'public',
      path: path,
    );
  }
}`,
            explanation:
              'ক্লায়েন্ট প্রথমে সার্ভার থেকে একটি ভেরিফাইড সাইনড আপলোড পাথ নেবে, সরাসরি স্টোরেজে ফাইল পাঠাবে এবং সার্ভারকে জানাবে যে আপলোড সম্পন্ন হয়েছে।',
          },
        },
      ],
      summary: [
        '`session.storage` দিয়ে সরাসরি ও নিরাপদে ফাইল আপলোড করা যায়।',
        'এটি সার্ভারের র‍্যামকে সুরক্ষিত রাখে।',
      ],
      officialDocUrl: 'https://docs.serverpod.dev/',
      serverpodVersion: 'Serverpod 2.x+',
    },
    {
      id: 'm12-l2',
      slug: 'caching-and-background-tasks',
      moduleId: 'module-12',
      moduleTitle: 'মডিউল ১২: অ্যাডভান্সড ফিচার',
      title: 'ক্যাশিং (Redis/Memory) এবং Future Calls (শিডিউল্ড টাস্ক)',
      subtitle: 'পারফরম্যান্স অপটিমাইজেশন ও ব্যাকগ্রাউন্ড ইমেইল/নোটিফিকেশন পাঠানো',
      order: 2,
      readingTimeMinutes: 11,
      objectives: [
        '`session.caches` দিয়ে বারবার ডাটাবেস কুয়েরি হওয়া প্রতিরোধ করা',
        'ভবিষ্যতে নির্দিষ্ট সময়ে টাস্ক এক্সিকিউট করতে Future Call ব্যবহার করা',
        'Redis দিয়ে মাল্টি-সার্ভার ক্লাস্টারিং ও ক্যাশ শেয়ার করা',
      ],
      prerequisites: ['Lesson ১ সম্পন্ন করা'],
      whyImportant:
        'সব রিকোয়েস্টে ডাটাবেস হিট করলে সার্ভার স্লো হয়ে যায়। ঘন ঘন পরিবর্তিত না হওয়া ডেটা ক্যাশে রাখলে রেসপন্স টাইম ৫০০ মিলিসেকেন্ড থেকে কমে ২ মিলিসেকেন্ডে চলে আসে!',
      sections: [
        {
          id: 's1',
          title: '১. ক্যাশ ব্যবহার করার নিয়ম',
          content: `সার্ভারে ইন-মেমোরি বা ডিস্ট্রিবিউটেড ক্যাশ রিড ও রাইট:`,
          codeSnippet: {
            language: 'dart',
            filePath: 'school_api_server/lib/src/endpoints/stats_endpoint.dart',
            type: 'server',
            code: `import 'package:serverpod/serverpod.dart';
import '../generated/protocol.dart';

class StatsEndpoint extends Endpoint {
  Future<SystemStats> getStats(Session session) async {
    const cacheKey = 'daily_system_stats';

    // ১. প্রথমে ক্যাশে খোঁজা
    var stats = await session.caches.local.get<SystemStats>(cacheKey);
    if (stats != null) {
      session.log('ক্যাশ হিট! দ্রুত ডেটা রিটার্ন করা হচ্ছে।');
      return stats;
    }

    // ২. ক্যাশে না থাকলে ডাটাবেসে হেভি কুয়েরি চালানো
    stats = await calculateHeavyStatsFromDatabase(session);

    // ৩. ক্যাশে ১০ মিনিটের জন্য সেভ করে রাখা
    await session.caches.local.put(
      cacheKey,
      stats,
      lifetime: const Duration(minutes: 10),
    );

    return stats;
  }
}`,
            explanation:
              '`session.caches.local` সিঙ্গেল সার্ভারে দ্রুততম মেমোরি ক্যাশ নিশ্চিত করে। মাল্টি-সার্ভারে স্কেলিংয়ের জন্য `session.caches.distributed` (Redis) ব্যবহার করা যায়।',
          },
        },
      ],
      summary: [
        'ক্যাশিং রেসপন্স টাইম নাটকীয়ভাবে হ্রাস করে।',
        '`session.caches.local` দিয়ে সহজে ক্যাশ পরিচালনা করা যায়।',
      ],
      serverpodVersion: 'Serverpod 2.x+',
    },
  ],
};

