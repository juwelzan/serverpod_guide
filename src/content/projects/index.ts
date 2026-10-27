import { ProjectShowcase } from '@/types';

export const projectShowcases: ProjectShowcase[] = [
  {
    id: 'task-manager',
    title: 'Project A: Task Manager (Full CRUD)',
    tagline: 'টাইপ-সেফ ডাটাবেস অপারেশন, ফিল্টারিং ও সার্ভারপড ওআরএম-এর ভিত্তি',
    level: 'Beginner',
    description:
      'একটি সম্পূর্ণ টাস্ক ম্যানেজমেন্ট ব্যাকএন্ড ও Flutter মোবাইল ইন্টারফেস। এতে টাস্ক তৈরি, কমপ্লিট মার্ক করা, ডিলিট এবং রিয়েল-টাইম ডাটাবেস পারসিস্টেন্স অন্তর্ভুক্ত।',
    techStack: ['Serverpod 2.x+', 'PostgreSQL', 'Flutter 3.x', 'Serverpod ORM'],
    features: [
      'নতুন টাস্ক তৈরি ও ইনপুট ভ্যালিডেশন',
      'টাস্ক তালিকা সর্টিং ও ফিল্টারিং',
      'চেকবক্স টগল ক্লিকে সার্ভার ডাটাবেস আপডেট',
      'টাস্ক ডিলিট ও কনফার্মেশন স্টেট',
      'অ্যাপ রিস্টার্টেও ডাটাবেস পারসিস্টেন্স ভেরিফিকেশন',
    ],
    architectureOverview:
      'Flutter UI -> Generated Client -> TaskEndpoint -> Task.db (ORM) -> PostgreSQL',
    folderStructure: `school_api/
├── school_api_server/
│   ├── lib/src/endpoints/task_endpoint.dart
│   └── lib/src/models/task.spy.yaml
├── school_api_client/
│   └── lib/src/protocol/client.dart (Auto-generated)
└── school_api_flutter/
    └── lib/src/screens/task_list_screen.dart`,
    dbSchemaSnippet: `class: Task
table: task
fields:
  title: String
  description: String?
  isCompleted: bool
  priority: int`,
    endpointListSnippet: `Future<Task> createTask(Session session, String title, String? desc);
Future<List<Task>> getTasks(Session session);
Future<Task> toggleTaskStatus(Session session, int taskId);
Future<bool> deleteTask(Session session, int taskId);`,
    lessons: [
      { title: 'Task Manager সার্ভার আর্কিটেকচার', slug: 'task-manager-server-setup' },
      { title: 'Flutter UI ও পারসিস্টেন্স টেস্ট', slug: 'task-manager-flutter-ui-bloc' },
    ],
  },
  {
    id: 'notes-app',
    title: 'Project B: Secure Multi-User Notes App',
    tagline: 'ইউজার অথেন্টিকেশন, সেশন সিকিউরিটি ও প্রাইভেট ডেটা আইসোলেশন',
    level: 'Intermediate',
    description:
      'পাসওয়ার্ড হ্যাশিং, JWT সেশন টোকেন এবং সম্পূর্ণ সুরক্ষিত ইউজার-স্পেসিফিক নোটস ম্যানেজমেন্ট। একজন ইউজারের ডেটা অন্য ইউজারের চোখ থেকে সম্পূর্ণ নিরাপদ।',
    techStack: ['Serverpod Auth', 'PostgreSQL', 'Flutter', 'Argon2 Hashing'],
    features: [
      'ইমেইল/পাসওয়ার্ড দিয়ে ইউজার রেজিস্ট্রেশন ও লগইন',
      'সার্ভার সাইড সেশন ভ্যালিডেশন ও প্রটেক্টেড এন্ডপয়েন্ট',
      'ইউজার আইডি অনুসারে নিজস্ব নোটস ফিল্টারিং',
      'নোট পিন করা এবং সার্চিং',
      'অটো-লগআউট ও এক্সপায়ার্ড সেশন হ্যান্ডলিং',
    ],
    architectureOverview:
      'Flutter Auth Screen -> serverpod_auth_client -> Profile/Notes Endpoint -> session.authenticatedUserId check -> PostgreSQL',
    folderStructure: `notes_project/
├── server/
│   ├── lib/src/endpoints/notes_endpoint.dart
│   └── lib/src/models/user_note.spy.yaml
└── flutter_app/
    └── lib/src/screens/notes_home_screen.dart`,
    dbSchemaSnippet: `class: UserNote
table: user_note
fields:
  userId: int
  title: String
  content: String
  isPinned: bool
  updatedAt: DateTime`,
    endpointListSnippet: `Future<List<UserNote>> getMyNotes(Session session);
Future<UserNote> createNote(Session session, String title, String content);
Future<bool> deleteNote(Session session, int noteId);`,
    lessons: [
      { title: 'Project B: Secure Notes App', slug: 'project-b-notes-app-with-auth' },
    ],
  },
  {
    id: 'realtime-chat',
    title: 'Project C: Real-time Multi-Room Chat',
    tagline: 'WebSocket স্ট্রিমিং, লাইভ ব্রডকাস্টিং ও চ্যানেল সাবস্ক্রিপশন',
    level: 'Advanced',
    description:
      'কোনো রিফ্রেশ ছাড়া লাইভ মেসেজ আদান-প্রদান। Serverpod এর নিজস্ব স্ট্রিমিং সেশন ও চ্যানেল পাব-সাব দিয়ে মাল্টি-রুম চ্যাট সিস্টেম।',
    techStack: ['Serverpod Streaming', 'WebSockets', 'PostgreSQL', 'Flutter Streams'],
    features: [
      'সার্বক্ষণিক ডুপ্লেক্স WebSocket কানেকশন',
      'চ্যানেল-ভিত্তিক মেসেজ পাবলিশ ও সাবস্ক্রাইব',
      'মেসেজ ডাটাবেসে সেভ করার পাশাপাশি লাইভ পুশ',
      'কানেকশন ড্রপ হলে অটো-রিকানেক্ট হ্যান্ডলিং',
    ],
    architectureOverview:
      'Flutter StreamBuilder -> client.openStreamingConnection() -> ChatEndpoint (StreamingSession) -> session.messages (Pub/Sub)',
    folderStructure: `chat_project/
├── server/
│   ├── lib/src/endpoints/chat_endpoint.dart
│   └── lib/src/models/chat_message.spy.yaml
└── flutter_app/
    └── lib/src/screens/chat_screen.dart`,
    dbSchemaSnippet: `class: ChatMessage
table: chat_message
fields:
  sender: String
  text: String
  roomId: String
  timestamp: DateTime`,
    endpointListSnippet: `Future<void> handleStreamMessage(StreamingSession session, SerializableModel message);
Future<void> streamOpened(StreamingSession session);`,
    lessons: [
      { title: 'Serverpod স্ট্রিমিং আর্কিটেকচার', slug: 'serverpod-streaming-concepts' },
      { title: 'Project C: Real-time Chat', slug: 'project-c-realtime-chat' },
    ],
  },
  {
    id: 'mini-saas',
    title: 'Project D: Mini SaaS Multi-Tenant Platform',
    tagline: 'অর্গানাইজেশন, RBAC পারমিশন ও এন্টারপ্রাইজ স্কেলেবিলিটি',
    level: 'Production',
    description:
      'একটি পরিপূর্ণ B2B SaaS ব্যাকএন্ড যেখানে একাধিক অর্গানাইজেশন, বিভিন্ন টিমের সদস্য, তাদের ভূমিকা (Owner, Admin, Member) এবং বিলিং প্ল্যান ম্যানেজ করা হয়।',
    techStack: ['Serverpod', 'Redis Caching', 'PostgreSQL Relations', 'Docker Compose'],
    features: [
      'Multi-tenant ডাটা আইসোলেশন ও অর্গানাইজেশন টেবিল রিলেশন',
      'রোল-বেসড এক্সেস কন্ট্রোল (RBAC)',
      'মেম্বার ইনভাইটেশন ও রোল অ্যাসাইনমেন্ট',
      'সিস্টেম অ্যানালিটিক্স ও মেমোরি ক্যাশিং',
      'প্রোডাকশন ডকার ডিপ্লয়মেন্ট স্ক্রিপ্ট',
    ],
    architectureOverview:
      'Organization Context -> RBAC Middleware -> Tenant Filtered Query -> Redis Cache -> PostgreSQL Master',
    folderStructure: `saas_project/
├── server/
│   ├── lib/src/endpoints/organization_endpoint.dart
│   ├── lib/src/models/organization.spy.yaml
│   └── lib/src/models/member_role.spy.yaml
└── docker-compose.prod.yaml`,
    lessons: [
      { title: 'Project D: Mini SaaS Backend', slug: 'project-d-mini-saas-backend' },
      { title: 'লিনাক্স VPS-এ প্রোডাকশন সেলফ-হোস্টিং', slug: 'docker-and-vps-preparation' },
    ],
  },
];

