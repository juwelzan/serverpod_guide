import { CourseModule } from '@/types';

export const module6: CourseModule = {
  id: 'module-6',
  number: 6,
  title: 'মডিউল ৬: ডাটাবেস, PostgreSQL ও YAML ডেটা মডেলিং',
  slug: 'database-and-postgresql',
  description:
    'PostgreSQL ডাটাবেসের সাথে Serverpod ORM-এর গভীর বোঝাপড়া। YAML মডেল সিনট্যাক্স, ফিল্ড টাইপ, প্রাইমারি কী, ফরেন কী রিলেশন, মাইগ্রেশন তৈরি ও ডেটাবেস ম্যানিপুলেশন।',
  estimatedHours: '৪ ঘণ্টা',
  iconName: 'Database',
  lessons: [
    {
      id: 'm6-l1',
      slug: 'yaml-models-and-tables',
      moduleId: 'module-6',
      moduleTitle: 'মডিউল ৬: ডাটাবেস ও PostgreSQL',
      title: 'YAML মডেল ও ডাটাবেস টেবিল ডেফিনিশন',
      subtitle: 'class, table, fields এবং Null Safety রুলস',
      order: 1,
      readingTimeMinutes: 12,
      objectives: [
        'Serverpod-এর YAML মডেল সিনট্যাক্স নিখুঁতভাবে শেখা',
        '`class` বনাম `table` কি-ওয়ার্ডের পার্থক্য অনুধাবন করা',
        'ফিল্ডের বিভিন্ন ডাটা টাইপ (String, int, double, bool, DateTime, List) ও Nullable ঘোষণা করা',
      ],
      prerequisites: ['মডিউল ৫ সম্পন্ন করা'],
      whyImportant:
        'Serverpod-এ আপনাকে কোনো কাঁচা SQL \`CREATE TABLE\` কোয়েরি লিখতে হয় না। আপনি সাধারণ YAML ফাইলে মডেল লিখবেন, আর Serverpod স্বয়ংক্রিয়ভাবে PostgreSQL টেবিল এবং Dart ক্লাস জেনারেট করে দেবে।',
      realWorldAnalogy:
        'YAML মডেল হলো একটি আর্কিটেকচারাল ব্লু-প্রিন্ট বা বাড়ির নকশা। রাজমিস্ত্রি (Serverpod জেনারেটর) এই নকশা দেখে ডাটাবেসে নিখুঁত ভবন (PostgreSQL টেবিল) গড়ে তোলে।',
      sections: [
        {
          id: 's1',
          title: '১. প্রথম YAML মডেল তৈরি',
          content: `সার্ভার প্যাকেজের \`lib/src/models/\` ফোল্ডারে একটি ফাইল তৈরি করুন: \`task.spy.yaml\``,
          codeSnippet: {
            language: 'yaml',
            filePath: 'school_api_server/lib/src/models/task.spy.yaml',
            type: 'server',
            code: `class: Task
table: task
fields:
  title: String
  description: String?
  isCompleted: bool
  dueDate: DateTime?
  priority: int`,
            explanation:
              '- `class: Task`: Dart ক্লাসের নাম। এটি সার্ভার এবং ক্লায়েন্ট উভয় প্যাকেজে জেনারেট হবে।\n- `table: task`: নির্দেশ করে যে এটি PostgreSQL-এ একটি আসল ডাটাবেস টেবিল হবে। যদি `table:` না দেওয়া হয়, তবে এটি কেবল ডেটা আদান-প্রদানের জন্য একটি সাধারণ Dart DTO ক্লাস হবে।\n- `description: String?`: প্রশ্নবোধক চিহ্ন নির্দেশ করে যে ফিল্ডটি Nullable (ডাটাবেসে NULL অনুমোদন করে)।',
          },
        },
        {
          id: 's2',
          title: '২. সার্ভারপডে টেবিল আইডি (Primary Key)',
          content: `লক্ষ করুন, আমরা কিন্তু কোনো \`id: int\` ফিল্ড ঘোষণা করিনি! 
Serverpod ডিফল্টভাবে প্রতিটি ডাটাবেস টেবিলের জন্য স্বয়ংক্রিয়ভাবে একটি Auto-incrementing \`id: int?\` প্রাইমারি কী ফিল্ড যোগ করে দেয়।`,
        },
      ],
      commonMistakes: [
        {
          mistake: 'YAML ফাইলে ম্যানুয়ালি `id: int` ঘোষণা করা।',
          solution:
            'কখনোই মডেলে সরাসরি `id` ফিল্ড ঘোষণা করবেন না; Serverpod স্বয়ংক্রিয়ভাবে টেবিলের জন্য প্রাইমারি কী পরিচালনা করে।',
        },
      ],
      quiz: [
        {
          id: 'q6-1',
          question: 'একটি YAML মডেলকে PostgreSQL ডাটাবেসের টেবিলে রূপান্তর করতে কোন কি-ওয়ার্ডটি উল্লেখ করা আবশ্যক?',
          type: 'multiple-choice',
          options: ['database: true', 'table: <table_name>', 'isTable: yes', 'schema: postgres'],
          correctAnswerIndex: 1,
          explanation:
            '`table: <table_name>` ঘোষণা করলেই কেবল Serverpod বুঝতে পারে যে এটির জন্য ডাটাবেস টেবিল তৈরি করতে হবে।',
        },
      ],
      summary: [
        '`lib/src/models/` ফোল্ডারে `.spy.yaml` ফাইল হিসেবে মডেল লেখা হয়।',
        '`table:` কি-ওয়ার্ড ডাটাবেস টেবিল নির্দেশ করে।',
        '`id` প্রাইমারি কী স্বয়ংক্রিয়ভাবে সংযুক্ত থাকে।',
      ],
      officialDocUrl: 'https://docs.serverpod.dev/get-started/working-with-the-database',
      serverpodVersion: 'Serverpod 2.x+',
    },
    {
      id: 'm6-l2',
      slug: 'database-migrations',
      moduleId: 'module-6',
      moduleTitle: 'মডিউল ৬: ডাটাবেস ও PostgreSQL',
      title: 'ডাটাবেস মাইগ্রেশন: নিরাপদে স্কিমা আপডেট করা',
      subtitle: 'serverpod create-migration এবং dart run bin/main.dart --apply-migrations',
      order: 2,
      readingTimeMinutes: 11,
      objectives: [
        'ডাটাবেস মাইগ্রেশন কী এবং কেন এটি প্রয়োজন তা জানা',
        'নতুন টেবিল বা ফিল্ড যোগ করার পর মাইগ্রেশন তৈরি করা',
        'মাইগ্রেশন ডাটাবেসে নিরাপদে অ্যাপ্লাই করা',
      ],
      prerequisites: ['Lesson ১ সম্পন্ন করা'],
      whyImportant:
        'প্রোডাকশন ডাটাবেসে লাখ লাখ ইউজার ও ডেটা থাকে। সেখানে হুট করে টেবিল ড্রপ করা যায় না। মাইগ্রেশন সিস্টেম ধাপে ধাপে ভার্সন কন্ট্রোল করে স্কিমা আপডেট করে যাতে কোনো ডেটা লস না হয়।',
      sections: [
        {
          id: 's1',
          title: '১. মাইগ্রেশন তৈরির কমান্ড',
          content: `YAML মডেলে কোনো টেবিল যোগ বা ফিল্ড পরিবর্তনের পর টার্মিনালে সার্ভার ফোল্ডারে রান করুন:`,
          codeSnippet: {
            language: 'bash',
            type: 'command',
            code: `serverpod create-migration`,
            explanation:
              'Serverpod আপনার আগের মাইগ্রেশনের সাথে বর্তমান মডেলের পার্থক্য তুলনা করে `migrations/` ফোল্ডারে নতুন SQL স্ক্রিপ্ট তৈরি করে দেবে।',
          },
        },
        {
          id: 's2',
          title: '২. মাইগ্রেশন ডাটাবেসে অ্যাপ্লাই করা',
          content: `মাইগ্রেশন তৈরি হওয়ার পর ডাটাবেসে টেবিলগুলো তৈরি করতে কমান্ড দিন:`,
          codeSnippet: {
            language: 'bash',
            type: 'command',
            code: `dart run bin/main.dart --apply-migrations`,
            explanation:
              'এই কমান্ডটি ডাটাবেসে কানেক্ট হয়ে নতুন তৈরি হওয়া SQL কোয়েরিগুলো এক্সিকিউট করে টেবিল তৈরি করে দেবে।',
          },
        },
      ],
      commonMistakes: [
        {
          mistake: '`serverpod create-migration` চালানোর পর `--apply-migrations` না চালিয়ে সার্ভার রান করা।',
          solution:
            'ডাটাবেস ও সার্ভারের স্কিমা অসঙ্গতি থাকলে সার্ভার চালু হবে না। সবসময় মাইগ্রেশন অ্যাপ্লাই করুন।',
        },
      ],
      quiz: [
        {
          id: 'q6-2',
          question: 'ডাটাবেসে নতুন মাইগ্রেশন অ্যাপ্লাই করার সঠিক কমান্ড কোনটি?',
          type: 'command',
          options: [
            'serverpod migrate db',
            'dart run bin/main.dart --apply-migrations',
            'docker apply sql',
            'flutter run --migrate',
          ],
          correctAnswerIndex: 1,
          explanation: '`dart run bin/main.dart --apply-migrations` কমান্ড দিয়ে মাইগ্রেশন কার্যকর হয়।',
        },
      ],
      summary: [
        'মডেল পরিবর্তনের পর `serverpod create-migration` দিতে হয়।',
        'ডাটাবেসে টেবিল তৈরি করতে `--apply-migrations` দিয়ে রান করতে হয়।',
      ],
      officialDocUrl: 'https://docs.serverpod.dev/concepts/data-and-the-database/database/migrations',
      serverpodVersion: 'Serverpod 2.x+',
    },
    {
      id: 'm6-l3',
      slug: 'orm-crud-operations',
      moduleId: 'module-6',
      moduleTitle: 'মডিউল ৬: ডাটাবেস ও PostgreSQL',
      title: 'Serverpod ORM দিয়ে Insert, Find, Update ও Delete',
      subtitle: 'টাইপ-সেফ কোয়েরি, ফিল্টারিং, সর্টিং এবং পেজিনেশন',
      order: 3,
      readingTimeMinutes: 12,
      objectives: [
        '`Task.db.insertRow` দিয়ে নতুন রেকর্ড সেভ করা',
        '`Task.db.find` এবং `Task.db.findById` দিয়ে ডাটা ফেচ করা',
        'where ক্লজ দিয়ে ফিল্টারিং ও orderBy দিয়ে সর্ট করা',
        '`Task.db.updateRow` এবং `Task.db.deleteRow` পরিচালনা করা',
      ],
      prerequisites: ['Lesson ১ ও ২ সম্পন্ন করা'],
      whyImportant:
        'Serverpod-এর ORM সরাসরি Dart কোডে কাজ করে। ভুল কলাম নামের জন্য SQL সিনট্যাক্স এরর হওয়ার কোনো সুযোগ নেই, কারণ সম্পূর্ণ কুয়েরি বিল্ডারটি টাইপ-সেফ।',
      sections: [
        {
          id: 's1',
          title: '১. সম্পূর্ণ CRUD এন্ডপয়েন্ট কোড',
          content: `\`lib/src/endpoints/task_endpoint.dart\` ফাইলে পুরো অপারেশন লক্ষ্য করুন:`,
          codeSnippet: {
            language: 'dart',
            filePath: 'school_api_server/lib/src/endpoints/task_endpoint.dart',
            type: 'server',
            code: `import 'package:serverpod/serverpod.dart';
import '../generated/protocol.dart';

class TaskEndpoint extends Endpoint {
  // ১. Create (নতুন টাস্ক তৈরি)
  Future<Task> createTask(Session session, Task task) async {
    return await Task.db.insertRow(session, task);
  }

  // ২. Read / Find (ফিল্টারিং ও পেজিনেশন সহ)
  Future<List<Task>> getAllTasks(
    Session session, {
    bool? onlyIncomplete,
    int limit = 20,
    int offset = 0,
  }) async {
    return await Task.db.find(
      session,
      where: (t) => onlyIncomplete == true ? t.isCompleted.equals(false) : Constant.bool(true),
      orderBy: (t) => t.dueDate,
      orderDescending: false,
      limit: limit,
      offset: offset,
    );
  }

  // ৩. Update (টাস্ক স্ট্যাটাস পরিবর্তন)
  Future<Task> updateTask(Session session, Task task) async {
    return await Task.db.updateRow(session, task);
  }

  // ৪. Delete (টাস্ক মুছে ফেলা)
  Future<bool> deleteTask(Session session, int taskId) async {
    final task = await Task.db.findById(session, taskId);
    if (task == null) return false;
    await Task.db.deleteRow(session, task);
    return true;
  }
}`,
            explanation:
              '- `Task.db.insertRow(session, task)`: ডাটাবেসে রো ইনসার্ট করে এবং স্বয়ংক্রিয়ভাবে উৎপন্ন হওয়া `id` সহ অবজেক্টটি ফেরত পাঠায়।\n- `where: (t) => t.isCompleted.equals(false)`: সম্পূর্ণ টাইপ-সেফ ল্যাম্বডা এক্সপ্রেশন যা SQL `WHERE is_completed = false`-এ রূপান্তরিত হয়।\n- `limit` এবং `offset`: মোবাইল অ্যাপে ইনফিনিট স্ক্রলিং ও পেজিনেশনের জন্য ব্যবহৃত হয়।',
          },
        },
      ],
      commonMistakes: [
        {
          mistake: '`insertRow` মেথডে `session` পাস না করা।',
          solution: 'ডাটাবেস কানেকশন সেশন দ্বারা পরিচালিত হয়, তাই প্রথম আর্গুমেন্ট সবসময় `session`।',
        },
      ],
      quiz: [
        {
          id: 'q6-3',
          question: 'Serverpod ORM-এ ডাটাবেসে একটি নতুন রো ইনসার্ট করার মেথড কোনটি?',
          type: 'code-output',
          options: [
            'Task.db.insertRow(session, task)',
            'database.query("INSERT INTO task...")',
            'session.save(task)',
            'Task.create(task)',
          ],
          correctAnswerIndex: 0,
          explanation: '`Task.db.insertRow(session, task)` দিয়ে নিরাপদে রেকর্ড ইনসার্ট করা হয়।',
        },
      ],
      summary: [
        'Serverpod ORM দিয়ে Dart ল্যাঙ্গুয়েজেই SQL ছাড়াই CRUD অপারেশন করা যায়।',
        '`where`, `orderBy`, `limit`, `offset` ফিল্টারিং ও পেজিনেশনকে অত্যন্ত সহজ করে।',
      ],
      officialDocUrl: 'https://docs.serverpod.dev/get-started/working-with-the-database',
      serverpodVersion: 'Serverpod 2.x+',
    },
  ],
};

