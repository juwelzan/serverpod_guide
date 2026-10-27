import { CourseModule } from '@/types';

export const module8: CourseModule = {
  id: 'module-8',
  number: 8,
  title: 'মডিউল ৮: অথেন্টিকেশন, ইউজার সেশন ও এক্সেস কন্ট্রোল',
  slug: 'authentication-and-authorization',
  description:
    'Serverpod-এর অফিশিয়াল Authentication মডিউল। ইমেইল/পাসওয়ার্ড সাইনআপ, নিরাপদ পাসওয়ার্ড হ্যাশিং, সেশন টোকেন লাইফসাইকেল, প্রটেক্টেড এন্ডপয়েন্ট ও রোল-বেসড সিকিউরিটি।',
  estimatedHours: '৩.৫ ঘণ্টা',
  iconName: 'ShieldCheck',
  lessons: [
    {
      id: 'm8-l1',
      slug: 'serverpod-auth-architecture',
      moduleId: 'module-8',
      moduleTitle: 'মডিউল ৮: অথেন্টিকেশন ও সিকিউরিটি',
      title: 'Serverpod অথেন্টিকেশন আর্কিটেকচার ও মডিউল সেটআপ',
      subtitle: 'serverpod_auth_server এবং serverpod_auth_client এর ইন্টিগ্রেশন',
      order: 1,
      readingTimeMinutes: 11,
      objectives: [
        'Serverpod-এর বিল্ট-ইন অথেন্টিকেশন আর্কিটেকচার বোঝা',
        'কীভাবে সার্ভারপড সেশন কি এবং ইউজার আইডি পরিচালনা করে তা জানা',
        '`serverpod_auth` মডিউল ডিপেন্ডেন্সি কনফিগার করা',
      ],
      prerequisites: ['মডিউল ৬ সম্পন্ন করা'],
      whyImportant:
        'নিরাপদ অথেন্টিকেশন ছাড়া যেকোনো আধুনিক অ্যাপ্লিকেশন অচল। Serverpod ডেভেলপারদের জন্য রেডিমেড প্রোডাকশন-গ্রেড সিকিউর সেশন হ্যান্ডলিং অফার করে।',
      sections: [
        {
          id: 's1',
          title: '১. সার্ভারপড অথ মডিউলের কার্যপদ্ধতি',
          content: `Serverpod একটি ডেডিকেটেড \`serverpod_auth\` প্যাকেজ সরবরাহ করে যাতে রয়েছে:
- সুরক্ষিত পাসওয়ার্ড হ্যাশিং (Argon2 / BCrypt স্ট্যান্ডার্ড)
- সার্ভার সাইড সেশন টোকেন স্টোরেজ
- Google, Apple ও ইমেইল/পাসওয়ার্ড প্রোভাইডার
- ইউজার স্কোপ ও পারমিশন সিস্টেম`,
        },
        {
          id: 's2',
          title: '২. সার্ভার কনফিগারেশন',
          content: `\`serverpod_auth_server\` ডিপেন্ডেন্সি সার্ভারের \`pubspec.yaml\`-এ যোগ করার পর \`generator.yaml\`-এ মডিউলটি যুক্ত করতে হয়:`,
          codeSnippet: {
            language: 'yaml',
            filePath: 'school_api_server/config/generator.yaml',
            type: 'config',
            code: `modules:
  serverpod_auth:
    nickname: auth`,
            explanation:
              'এটি Serverpod-কে নির্দেশ দেয় যে অথেন্টিকেশন টেবিল এবং এন্ডপয়েন্টগুলো প্রজেক্টের সাথে মার্জ করতে হবে।',
          },
        },
      ],
      summary: [
        '`serverpod_auth` একটি রেডিমেড সুরক্ষিত মডিউল।',
        'এটি সেশন ও পাসওয়ার্ড হ্যাশিং অত্যন্ত পেশাদারভাবে নিয়ন্ত্রণ করে।',
      ],
      officialDocUrl: 'https://docs.serverpod.dev/',
      serverpodVersion: 'Serverpod 2.x+',
    },
    {
      id: 'm8-l2',
      slug: 'protected-endpoints-and-scopes',
      moduleId: 'module-8',
      moduleTitle: 'মডিউল ৮: অথেন্টিকেশন ও সিকিউরিটি',
      title: 'প্রটেক্টেড এন্ডপয়েন্ট তৈরি ও সার্ভার সাইড পারমিশন ভেরিফিকেশন',
      subtitle: 'session.authenticatedUserId, requireLogin এবং Scope চেকিং',
      order: 2,
      readingTimeMinutes: 12,
      objectives: [
        'এন্ডপয়েন্টে লগইন চেক বাধ্যতামূলক করা',
        'লগইন করা ইউজারের নিজস্ব ডেটা ফিল্টার করা',
        'রোল-বেসড এক্সেস কন্ট্রোল (Admin, Member) প্রয়োগ করা',
      ],
      prerequisites: ['Lesson ১ সম্পন্ন করা'],
      whyImportant:
        'শুধুমাত্র Flutter UI-তে লগইন বাটন হাইড করা কোনো নিরাপত্তা নয়! যে কেউ সরাসরি API কল করতে পারে। তাই সার্ভার সাইডেই প্রতিটি প্রটেক্টেড এন্ডপয়েন্টে ইউজার আইডেন্টিটি ভেরিফাই করতে হবে।',
      sections: [
        {
          id: 's1',
          title: '১. প্রটেক্টেড এন্ডপয়েন্ট কোড',
          content: `কোনো এন্ডপয়েন্টকে শুধুমাত্র লগইন করা ইউজারের জন্য সীমাবদ্ধ করতে \`requireLogin\` মেথড ওভাররাইড বা \`session.authenticatedUserId\` ব্যবহার করুন:`,
          codeSnippet: {
            language: 'dart',
            filePath: 'school_api_server/lib/src/endpoints/profile_endpoint.dart',
            type: 'server',
            code: `import 'package:serverpod/serverpod.dart';
import '../generated/protocol.dart';

class ProfileEndpoint extends Endpoint {
  // এই এন্ডপয়েন্টের সমস্ত মেথড কল করতে লগইন থাকা বাধ্যতামূলক
  @override
  bool get requireLogin => true;

  Future<UserProfileData> getMyProfile(Session session) async {
    // বর্তমান রিকোয়েস্ট পাঠানো ইউজারের আইডি স্বয়ংক্রিয়ভাবে পাওয়া যায়
    final userId = await session.authenticatedUserId;
    if (userId == null) {
      throw FormatException('অননুমোদিত অ্যাক্সেস! দয়া করে লগইন করুন।');
    }

    session.log('লগইন করা ইউজার আইডি: $userId');
    // ইউজারের নিজস্ব তথ্য ডাটাবেস থেকে ফেচ করা...
    return UserProfileData(userId: userId, status: 'Active Member');
  }
}`,
            explanation:
              '- `bool get requireLogin => true`: Serverpod-এর একটি শক্তিশালী প্রপার্টি। কোনো আন-অথেন্টিকেটেড ক্লায়েন্ট এই এন্ডপয়েন্টে রিকোয়েস্ট পাঠালে স্বয়ংক্রিয়ভাবে সার্ভার তাকে ব্লক করে 401 Unauthorized দেবে।\n- `session.authenticatedUserId`: সার্ভার সেশন থেকে নিরাপদে যাচাই করা ইউজার আইডি সরবরাহ করে।',
          },
        },
      ],
      commonMistakes: [
        {
          mistake: 'ক্লায়েন্ট থেকে প্যারামিটার হিসেবে `userId` গ্রহণ করা এবং সেটির ওপর ভিত্তি করে ডেটা দেওয়া।',
          solution:
            'মারাত্মক নিরাপত্তা ভুল! যে কেউ অন্যের `userId` পাঠাতে পারে। সবসময় `session.authenticatedUserId` থেকে বিশ্বস্ত আইডি নিন।',
        },
      ],
      quiz: [
        {
          id: 'q8-2',
          question: 'প্রটেক্টেড এন্ডপয়েন্টে বর্তমান ইউজারের আইডি জানার সবচেয়ে নিরাপদ উপায় কোনটি?',
          type: 'code-output',
          options: [
            'ক্লায়েন্ট থেকে আসা int userId প্যারামিটার পড়া',
            'await session.authenticatedUserId ব্যবহার করা',
            'ক্লায়েন্টের লোকালস্টোরেজ থেকে আইডি চাওয়া',
            'সব ইউজারের তালিকা থেকে ফিল্টার করা',
          ],
          correctAnswerIndex: 1,
          explanation:
            '`session.authenticatedUserId` সার্ভারের নিজস্ব সিকিউর সেশন ভ্যালিডেশন থেকে আসে যা ক্লায়েন্ট টেম্পার করতে পারে না।',
        },
      ],
      summary: [
        '`requireLogin => true` দিয়ে এন্ডপয়েন্ট সুরক্ষিত করা যায়।',
        'কখনোই ক্লায়েন্টের পাঠানো ইউজার আইডির ওপর অন্ধবিশ্বাস করবেন না।',
        '`session.authenticatedUserId` হলো সিঙ্গেল সোর্স অব ট্রুথ।',
      ],
      officialDocUrl: 'https://docs.serverpod.dev/',
      serverpodVersion: 'Serverpod 2.x+',
    },
  ],
};

