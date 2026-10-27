import { CourseModule } from '@/types';

export const module4: CourseModule = {
  id: 'module-4',
  number: 4,
  title: 'মডিউল ৪: প্রোজেক্ট স্ট্রাকচার ও ফাইল ডিরেক্টরি পরিচিতি',
  slug: 'understand-project-structure',
  description:
    'lib/, config/, migrations/, web/, generator.yaml এবং passwords.yaml-এর পূর্ণ ব্যবচ্ছেদ। ম্যানুয়াল কোড বনাম অটো-জেনারেটেড কোডের অলঙ্ঘনীয় পার্থক্য।',
  estimatedHours: '৩ ঘণ্টা',
  iconName: 'FolderTree',
  lessons: [
    {
      id: 'm4-l1',
      slug: 'server-directory-deep-dive',
      moduleId: 'module-4',
      moduleTitle: 'মডিউল ৪: প্রোজেক্ট স্ট্রাকচার',
      title: 'Server ডিরেক্টরির গভীরে: কোন ফাইলের কী দায়িত্ব?',
      subtitle: 'config/, lib/src/endpoints, models এবং bin/main.dart-এর কার্যপদ্ধতি',
      order: 1,
      readingTimeMinutes: 11,
      objectives: [
        'সার্ভার প্যাকেজের প্রতিটি ফোল্ডার ও কনফিগ ফাইলের ভূমিকা স্পষ্ট করা',
        '`config/development.yaml` এবং `passwords.yaml` এর নিরাপত্তা কনফিগারেশন জানা',
        '`generator.yaml` দিয়ে কোড জেনারেশন কাস্টমাইজেশন বোঝা',
      ],
      prerequisites: ['মডিউল ৩ সম্পন্ন করা'],
      whyImportant:
        'কোন ফাইলে নতুন এন্ডপয়েন্ট লিখতে হবে, ডাটাবেস টেবিল স্কিমা কোথায় থাকে আর পাসওয়ার্ড সিক্রেট কোথায় সংরক্ষিত হয় তা না জানলে প্রজেক্ট পরিচালনা করা অসম্ভব।',
      sections: [
        {
          id: 's1',
          title: '১. সার্ভার প্যাকেজের ফাইল স্ট্রাকচার চার্ট',
          content: `\`school_api_server/\` ফোল্ডারের অভ্যন্তরীণ সাজসজ্জা:
\`\`\`text
school_api_server/
├── bin/
│   └── main.dart                     <-- সার্ভার বুট এন্ট্রি পয়েন্ট (ম্যানুয়াল এডিট প্রয়োজন কম)
├── config/
│   ├── development.yaml              <-- লোকাল পোর্ট, ডাটাবেস হোস্ট ও লগিং কনফিগ
│   ├── production.yaml               <-- প্রোডাকশন ডোমেন ও ডিবি সেটিংস
│   ├── passwords.yaml                <-- ডাটাবেস পাসওয়ার্ড ও JWT সিক্রেট কী
│   └── generator.yaml                <-- কোড জেনারেটরের রুলস ও টার্গেট ডিরেক্টরি
├── lib/
│   ├── server.dart                   <-- সার্ভার রান মেথড এক্সপোর্ট
│   └── src/
│       ├── endpoints/                <-- এখানে আপনি এন্ডপয়েন্ট লিখবেন (Developer writes here)
│       │   └── greeting_endpoint.dart
│       ├── models/                   <-- এখানে টেবিল ও মডেলের YAML লিখবেন (Developer writes here)
│       └── generated/                <-- স্বয়ংক্রিয়ভাবে জেনারেট হওয়া ডার্ট ক্লাস (NEVER edit manually)
├── migrations/                       <-- ডাটাবেস মাইগ্রেশন হিস্টোরি ও SQL ফাইলস
└── pubspec.yaml                      <-- সার্ভারের ডিপেন্ডেন্সি লিস্ট
\`\`\``,
        },
        {
          id: 's2',
          title: '২. কনফিগারেশন ফাইল সমূহের বিস্তারিত ব্যাখ্যা',
          content: `### \`config/development.yaml\`
এখানে সার্ভারের লোকাল পোর্ট এবং ডাটাবেস কানেকশন স্ট্রিং নির্ধারিত থাকে:
\`\`\`yaml
# Serverpod Development Configuration
apiServer:
  port: 8080
  publicHost: localhost
  publicPort: 8080
  publicScheme: http

insightsServer:
  port: 8081

webServer:
  port: 8082

database:
  host: localhost
  port: 5432
  name: school_api
  user: postgres
\`\`\`

### \`config/passwords.yaml\`
**নিরাপত্তা সতর্কতা:** এই ফাইলে ডাটাবেস ও এনক্রিপশন পাসওয়ার্ড থাকে। অফিশিয়াল সার্ভারপড আর্কিটেকচারে এটি \`.gitignore\`-এ রাখা হয় যেন কখনো পাবলিক গিটহাবে না যায়।`,
        },
      ],
      commonMistakes: [
        {
          mistake: '`lib/src/generated/` ফোল্ডারের ভেতরের ডার্ট ফাইলে হাতে কোড লিখে পরিবর্তন করা।',
          solution:
            'পরবর্তীবার `serverpod generate` রান করলেই আপনার পরিবর্তন মুছে যাবে! সবসময় `endpoints/` বা `models/*.spy.yaml` ফাইলে পরিবর্তন করবেন।',
        },
      ],
      quiz: [
        {
          id: 'q4-1',
          question: 'নিচের কোন ফোল্ডারটির কোড ডেভেলপারদের কখনো ম্যানুয়ালি এডিট করা উচিত নয়?',
          type: 'multiple-choice',
          options: [
            'lib/src/endpoints/',
            'lib/src/models/',
            'lib/src/generated/',
            'config/',
          ],
          correctAnswerIndex: 2,
          explanation:
            '`lib/src/generated/` সম্পূর্ণ স্বয়ংক্রিয়ভাবে জেনারেট হয়। এতে হাত দিলে পরবর্তী জেনারেশনে সব ওভাররাইট হয়ে যাবে।',
        },
      ],
      summary: [
        '`lib/src/endpoints/` এ আপনার বিজনেস লজিক লেখা হয়।',
        '`config/passwords.yaml` সর্বদা সুরক্ষিত রাখুন।',
        '`generated/` ফোল্ডারের দায়িত্ব কেবল কোড জেনারেটরের।',
      ],
      officialDocUrl: 'https://docs.serverpod.dev/concepts/cli/commands/create',
      serverpodVersion: 'Serverpod 2.x+',
    },
  ],
};

