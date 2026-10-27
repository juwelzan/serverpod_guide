import { CourseModule } from '@/types';

export const module14: CourseModule = {
  id: 'module-14',
  number: 14,
  title: 'মডিউল ১৪: চারটি পূর্ণাঙ্গ ক্যাপস্টোন প্রজেক্ট',
  slug: 'complete-capstone-projects',
  description:
    'বাস্তব জগতের ৪টি ইন্ডাস্ট্রি স্ট্যান্ডার্ড ফুল-স্ট্যাক প্রজেক্টের আর্কিটেকচার, ডেটাবেস স্কিমা, এন্ডপয়েন্ট লিস্ট, ফোল্ডার স্ট্রাকচার এবং ফাইল-বাই-ফাইল বাস্তবায়ন গাইড।',
  estimatedHours: '৫ ঘণ্টা',
  iconName: 'Rocket',
  lessons: [
    {
      id: 'm14-l1',
      slug: 'project-a-task-manager',
      moduleId: 'module-14',
      moduleTitle: 'মডিউল ১৪: ক্যাপস্টোন প্রজেক্টস',
      title: 'Project A: Task Manager (CRUD, Database, Validation)',
      subtitle: 'বিগিনারদের জন্য আত্মবিশ্বাস বৃদ্ধির প্রথম ফুল-স্ট্যাক প্রজেক্ট',
      order: 1,
      readingTimeMinutes: 14,
      objectives: [
        'পূর্ণাঙ্গ CRUD লাইফসাইকেল আয়ত্ত করা',
        'সার্ভার সাইড ভ্যালিডেশন ও এক্সেপশন ক্লায়েন্টে হ্যান্ডেল করা',
        'PostgreSQL-এ ডেটা পারসিস্টেন্স নিশ্চিত করা',
      ],
      prerequisites: ['মডিউল ১ থেকে ৭ সম্পন্ন করা'],
      whyImportant:
        'সব ব্যাকএন্ডের ভিত্তি হলো CRUD (Create, Read, Update, Delete)। এই প্রজেক্টটি আপনাকে একজন দক্ষ ফুল-স্ট্যাক ডেভেলপার হিসেবে প্রতিষ্ঠা করবে।',
      sections: [
        {
          id: 's1',
          title: '১. প্রজেক্টের রিকোয়ারমেন্টস ও ফিচার লিস্ট',
          content: `- টাস্ক তৈরি করা (টাইটেল ও বিস্তারিত বিবরণ সহ)
- টাস্ক সম্পন্ন (Done) বা অসমাপ্ত হিসেবে মার্ক করা
- প্রায়োরিটি (High, Medium, Low) ও ডেডলাইন সেট করা
- ফিল্টারিং ও সার্চিং
- ডাটাবেস পারসিস্টেন্স`,
        },
        {
          id: 's2',
          title: '২. ডেটাবেস স্কিমা (YAML)',
          content: `\`lib/src/models/task_item.spy.yaml\`:`,
          codeSnippet: {
            language: 'yaml',
            filePath: 'server/lib/src/models/task_item.spy.yaml',
            type: 'server',
            code: `class: TaskItem
table: task_item
fields:
  title: String
  notes: String?
  isDone: bool
  priority: int
  deadline: DateTime?
  createdAt: DateTime`,
          },
        },
      ],
      summary: [
        'টাস্ক ম্যানেজার প্রজেক্ট CRUD এর প্রতিটি খুঁটিনাটি বুঝতে সাহায্য করে।',
        'এটি সব ফুল-স্ট্যাক ডেভেলপারের প্রথম মাইলফলক।',
      ],
      serverpodVersion: 'Serverpod 2.x+',
    },
    {
      id: 'm14-l2',
      slug: 'project-b-notes-app-with-auth',
      moduleId: 'module-14',
      moduleTitle: 'মডিউল ১৪: ক্যাপস্টোন প্রজেক্টস',
      title: 'Project B: Secure Notes App (User Auth & Privacy)',
      subtitle: 'ইউজার লগইন, নিজস্ব নোটস ফিল্টারিং এবং প্রটেক্টেড এন্ডপয়েন্ট',
      order: 2,
      readingTimeMinutes: 14,
      objectives: [
        '`serverpod_auth` দিয়ে সাইনআপ ও সাইনইন ফ্লো বাস্তবায়ন',
        'লগইন করা ইউজারের আইডি দিয়ে ডাটাবেসে নোটস সংরক্ষণ করা',
        'এক ইউজারের নোট যাতে অন্য ইউজার কখনো দেখতে না পায় তা শতভাগ নিশ্চিত করা',
      ],
      prerequisites: ['মডিউল ৮ সম্পন্ন করা'],
      whyImportant:
        'বাস্তব অ্যাপ্লিকেশনে ডেটা প্রাইভেসি সবচেয়ে স্পর্শকাতর বিষয়। এই প্রজেক্টে আপনি মাল্টি-ইউজার ডেটা আইসোলেশন শিখবেন।',
      sections: [
        {
          id: 's1',
          title: '১. নোট মডেল ও ইউজার রিলেশন',
          content: `\`lib/src/models/user_note.spy.yaml\`:`,
          codeSnippet: {
            language: 'yaml',
            filePath: 'server/lib/src/models/user_note.spy.yaml',
            type: 'server',
            code: `class: UserNote
table: user_note
fields:
  userId: int
  title: String
  content: String
  isPinned: bool
  updatedAt: DateTime`,
            explanation:
              '`userId: int` ফিল্ডটি দিয়ে প্রতিটি নোট নির্দিষ্ট ইউজারের অ্যাকাউন্টের সাথে ট্যাগ করা হয়।',
          },
        },
        {
          id: 's2',
          title: '২. সার্ভারে প্রাইভেসি ফিল্টারিং এন্ডপয়েন্ট',
          content: `\`lib/src/endpoints/notes_endpoint.dart\`:`,
          codeSnippet: {
            language: 'dart',
            filePath: 'server/lib/src/endpoints/notes_endpoint.dart',
            type: 'server',
            code: `import 'package:serverpod/serverpod.dart';
import '../generated/protocol.dart';

class NotesEndpoint extends Endpoint {
  @override
  bool get requireLogin => true;

  Future<List<UserNote>> getMyNotes(Session session) async {
    final currentUserId = await session.authenticatedUserId;
    if (currentUserId == null) throw FormatException('লগইন আবশ্যক');

    // ডাটাবেস থেকে কেবল এই ইউজারের নোটগুলো ফিল্টার করা
    return await UserNote.db.find(
      session,
      where: (n) => n.userId.equals(currentUserId),
      orderBy: (n) => n.updatedAt,
      orderDescending: true,
    );
  }
}`,
            explanation:
              'এখানে `n.userId.equals(currentUserId)` নিশ্চিত করে যে ডাটাবেসে এক ইউজারের ডেটা অন্যের সাথে মিক্স হবে না।',
          },
        },
      ],
      summary: [
        '`userId` দিয়ে ইউজার ডেটা আইসোলেশন করা যায়।',
        'সার্ভার সাইড ফিল্টারিং ডেটা সিকিউরিটি শতভাগ সুনিশ্চিত করে।',
      ],
      serverpodVersion: 'Serverpod 2.x+',
    },
    {
      id: 'm14-l3',
      slug: 'project-c-realtime-chat',
      moduleId: 'module-14',
      moduleTitle: 'মডিউল ১৪: ক্যাপস্টোন প্রজেক্টস',
      title: 'Project C: Real-time Multi-room Chat (Streaming)',
      subtitle: 'WebSocket স্ট্রিমিং, রুম সাবস্ক্রিপশন এবং লাইভ টাইপিং ইন্ডিকেটর',
      order: 3,
      readingTimeMinutes: 14,
      objectives: [
        'Serverpod স্ট্রিমিং চ্যানেল দিয়ে একাধিক চ্যাট রুম পরিচালনা করা',
        'লাইভ মেসেজ পুশ ও ডাটাবেস হিস্টোরি স্টোরেজ',
        'কানেকশন ড্রপ হলে ক্লায়েন্ট সাইড অটো-রিকানেক্ট হ্যান্ডেল করা',
      ],
      prerequisites: ['মডিউল ১১ সম্পন্ন করা'],
      whyImportant:
        'রিয়েল-টাইম ইন্টার‍্যাক্টিভিটি অ্যাপের ইউজার রিটেনশন ও এনগেজমেন্ট বহু গুণ বাড়িয়ে দেয়।',
      sections: [
        {
          id: 's1',
          title: '১. মাল্টি-রুম চ্যানেল আর্কিটেকচার',
          content: 'চ্যাট রুমে ব্যবহারকারীরা তাদের পছন্দের চ্যানেলে (যেমন #general, #flutter, #serverpod) জয়েন করবে এবং সেই রুমের মেসেজ রিয়েল-টাইমে স্ট্রিমে দেখতে পাবে।',
          codeSnippet: {
            language: 'dart',
            filePath: 'server/lib/src/endpoints/room_chat_endpoint.dart',
            type: 'server',
            code: `import 'package:serverpod/serverpod.dart';
import '../generated/protocol.dart';

class RoomChatEndpoint extends Endpoint {
  @override
  Future<void> handleStreamMessage(
    StreamingSession session,
    SerializableModel message,
  ) async {
    if (message is RoomMessage) {
      // মেসেজ নির্দিষ্ট রুমে পুশ করা
      session.messages.postMessage('room_\${message.roomId}', message);
    }
  }
}`,
            explanation: 'প্রতিটি রুমের জন্য পৃথক চ্যানেল আইডি ব্যবহার করা হয়েছে।',
          },
        },
      ],
      summary: [
        'মাল্টি-রুম চ্যাট স্ট্রিমিং আর্কিটেকচার শেখায়।',
        'মেসেজ ডাটাবেসে পারসিস্ট করার পাশাপাশি লাইভ পুশ করা হয়।',
      ],
      serverpodVersion: 'Serverpod 2.x+',
    },
    {
      id: 'm14-l4',
      slug: 'project-d-mini-saas-backend',
      moduleId: 'module-14',
      moduleTitle: 'মডিউল ১৪: ক্যাপস্টোন প্রজেক্টস',
      title: 'Project D: Mini SaaS Multi-Tenant Backend (Organizations & RBAC)',
      subtitle: 'অর্গানাইজেশন, ওনার/অ্যাডমিন/মেম্বার পারমিশন এবং সাবস্ক্রিপশন আর্কিটেকচার',
      order: 4,
      readingTimeMinutes: 16,
      objectives: [
        'Multi-tenant ডাটাবেস ডিজাইন (Organization -> Teams -> Members)',
        'রোল-বেসড এক্সেস কন্ট্রোল (RBAC) মিডলওয়্যার প্যাটার্ন',
        'পেইড প্ল্যান লিমিটেশন ও এন্টারপ্রাইজ স্কেলিং কনসেপ্টস',
      ],
      prerequisites: ['মডিউল ১২ ও ১৩ সম্পন্ন করা'],
      whyImportant:
        'এটি একটি পরিপূর্ণ কমার্শিয়াল সফটওয়্যার আর্কিটেকচার। এটি পারলে আপনি যেকোনো স্টার্টআপ বা ক্লায়েন্ট প্রজেক্টের ব্যাকএন্ড অনায়াসে তৈরি করতে পারবেন।',
      sections: [
        {
          id: 's1',
          title: '১. মাল্টি-টেন্যান্ট ডাটাবেস স্কিমা',
          content: 'প্রতিটি অর্গানাইজেশনের অধীনে নিজস্ব মেম্বার ও প্রজেক্ট থাকে। ইউজার তার রোল (Owner, Admin, Member) অনুযায়ী পারমিশন পায়।',
          codeSnippet: {
            language: 'yaml',
            filePath: 'server/lib/src/models/organization.spy.yaml',
            type: 'server',
            code: `class: Organization
table: organization
fields:
  name: String
  ownerId: int
  planType: String
  createdAt: DateTime`,
          },
        },
      ],
      summary: [
        'Multi-tenancy এন্টারপ্রাইজ সফটওয়্যারের প্রাণ।',
        'RBAC পারমিশন দিয়ে অ্যাডমিন ও মেম্বারের এক্সেস নিয়ন্ত্রণ করা হয়।',
      ],
      serverpodVersion: 'Serverpod 2.x+',
    },
  ],
};
