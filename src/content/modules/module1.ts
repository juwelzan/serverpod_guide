import { CourseModule } from '@/types';

export const module1: CourseModule = {
  id: 'module-1',
  number: 1,
  title: 'মডিউল ১: ব্যাকএন্ড ফান্ডামেন্টালস ও আর্কিটেকচার',
  slug: 'backend-fundamentals',
  description:
    'Flutter ডেভেলপারদের জন্য ব্যাকএন্ডের ভিত্তিপ্রস্তর। API কী, ক্লায়েন্ট-সার্ভার রিকোয়েস্ট লাইফসাইকেল, REST বনাম RPC এবং Serverpod-এর প্রয়োজনীয়তা।',
  estimatedHours: '৩ ঘণ্টা',
  iconName: 'Server',
  lessons: [
    {
      id: 'm1-l1',
      slug: 'what-is-backend',
      moduleId: 'module-1',
      moduleTitle: 'মডিউল ১: ব্যাকএন্ড ফান্ডামেন্টালস',
      title: 'ব্যাকএন্ড কী এবং কেন একজন Flutter ডেভেলপারের এটি জানা জরুরি?',
      subtitle: 'ক্লায়েন্ট সাইড থেকে সার্ভার সাইড পর্যন্ত ডেটার নিরাপদ যাত্রা বোঝা',
      order: 1,
      readingTimeMinutes: 8,
      objectives: [
        'ব্যাকএন্ডের মূল দায়িত্ব ও প্রয়োজনীয়তা বোঝা',
        'মোবাইল অ্যাপে ডেটা স্থায়ীভাবে সংরক্ষণ ও সুরক্ষার কৌশল জানা',
        'Flutter অ্যাপের সাথে ব্যাকএন্ডের সম্পর্ক পরিষ্কার করা',
      ],
      prerequisites: ['মৌলিক Dart এবং Flutter জ্ঞান (Widget, State, async/await)'],
      whyImportant:
        'শুধু Flutter অ্যাপ তৈরি করলে ফোনের মেমোরিতে ডেটা সাময়িক থাকে। অ্যাপ আনইনস্টল করলে বা অন্য ফোন থেকে লগইন করলে ডেটা হারিয়ে যায়। ব্যাকএন্ড হলো অ্যাপের মস্তিষ্ক এবং কেন্দ্রীয় ডেটা হাব।',
      realWorldAnalogy:
        'একটি রেস্তোরাঁর সাথে তুলনা করুন: আপনার Flutter অ্যাপটি হলো ওয়েটার ও মেনু কার্ড (Frontend), আর ব্যাকএন্ড হলো ভেতরের রান্নাঘর (Kitchen)। ওয়েটার অর্ডার নিয়ে কিচেনে দেয়, সেখানে শেফ খাবার তৈরি করে ওয়েটারের হাতে তুলে দেন।',
      architectureDiagram: `[ Flutter App (Client) ] ──(HTTP/WebSocket Request)──> [ Serverpod (Backend API) ] ──> [ PostgreSQL (Database) ]`,
      sections: [
        {
          id: 's1',
          title: '১. ব্যাকএন্ডের মূল তিনটি স্তম্ভ',
          content: `একটি সম্পূর্ণ ব্যাকএন্ড সিস্টেমে সাধারণত ৩টি প্রধান অংশ থাকে:
1. **Server (সার্ভার):** একটি কম্পিউটার প্রোগ্রাম যা দিনরাত ইন্টারনেট পোর্ট উন্মুক্ত রেখে ক্লায়েন্টের রিকোয়েস্টের জন্য অপেক্ষা করে এবং বিজনেস লজিক এক্সিকিউট করে।
2. **Database (ডাটাবেস):** স্থায়ী স্টোরেজ (যেমন PostgreSQL) যেখানে ইউজার প্রোফাইল, পোস্ট, লেনদেন ইত্যাদি সংরক্ষিত থাকে।
3. **API (Application Programming Interface):** অ্যাপ ও সার্ভারের মধ্যে কথা বলার সুনির্দিষ্ট নিয়মাবলি ও কন্ট্রাক্ট।`,
          callout: {
            type: 'important',
            title: 'কেন Firebase বা ক্লাউড সার্ভিসের পরেও Serverpod শিখবেন?',
            message:
              'Firebase দ্রুত প্রোটোটাইপিংয়ের জন্য ভালো হলেও এতে ভেন্ডর লক-ইন থাকে এবং জটিল কুয়েরি ও কাস্টম সার্ভার লজিক লিখতে গেলে বিল আশঙ্কাজনকভাবে বেড়ে যায়। Serverpod আপনাকে Dart ল্যাঙ্গুয়েজেই সম্পূর্ণ নিজস্ব সার্ভার ও ডাটাবেসের মালিকানা দেয়।',
          },
        },
        {
          id: 's2',
          title: '২. সার্ভারে ডেটা প্রসেসিংয়ের বাস্তব কোড ধারণা',
          content:
            'Flutter থেকে সরাসরি ডাটাবেসে কানেক্ট করা চরম ঝুঁকিপূর্ণ (Security Risk)। কারণ অ্যাপের রিভার্স ইঞ্জিনিয়ারিং করে যে কেউ ডাটাবেসের পাসওয়ার্ড পেয়ে যাবে। তাই মধ্যস্থতাকারী হিসেবে ব্যাকএন্ড এন্ডপয়েন্ট কাজ করে।',
          codeSnippet: {
            language: 'dart',
            filePath: 'lib/src/endpoints/user_endpoint.dart',
            type: 'server',
            code: `// Serverpod Endpoint Example
import 'package:serverpod/serverpod.dart';

class UserEndpoint extends Endpoint {
  // এই ফাংশনটি সার্ভারে রান হয়, ক্লায়েন্টের ফোনে নয়
  Future<bool> registerUser(Session session, String email, String password) async {
    // ১. সার্ভার সাইড ভ্যালিডেশন
    if (!email.contains('@') || password.length < 8) {
      return false;
    }

    // ২. পাসওয়ার্ড নিরাপদে হ্যাশ করে ডাটাবেসে সেভ করা
    session.log('নবায়নকৃত ইউজার রিকোয়েস্ট: $email');
    return true;
  }
}`,
            explanation:
              'এখানে UserEndpoint ক্লাসে registerUser মেথডটি সার্ভারে এক্সিকিউট হচ্ছে। Flutter অ্যাপ শুধু এই মেথড কল করবে এবং ফলাফল পাবে।',
          },
        },
      ],
      commonMistakes: [
        {
          mistake: 'Flutter অ্যাপের মধ্যে ডাটাবেসের অ্যাডমিন পাসওয়ার্ড বা সরাসরি সিক্রেট কী হার্ডকোড করা।',
          solution: 'সব ধরনের সিক্রেট ও ডাটাবেস এক্সেস কেবল ব্যাকএন্ড সার্ভারে সীমাবদ্ধ রাখবেন।',
        },
      ],
      practiceExercise: {
        title: 'অনুশীলন ১: আর্কিটেকচার ম্যাপিং',
        task: 'একটি ই-কমার্স অ্যাপের জন্য কার্ট (Cart) এবং চেকআউট (Checkout) প্রসেস ক্লায়েন্ট নাকি ব্যাকএন্ডে হওয়া উচিত তা চিন্তা করে ৩ লাইনে নোট লিখুন।',
        hint: 'টাকা কাটা এবং পণ্যের স্টক যাচাই করা সার্ভার সাইডে হওয়া বাধ্যতামূলক।',
      },
      quiz: [
        {
          id: 'q1-1',
          question: 'কেন সরাসরি Flutter অ্যাপের ভেতর থেকে PostgreSQL ডাটাবেসে ডিরেক্ট কানেকশন দেয়া উচিত নয়?',
          type: 'multiple-choice',
          options: [
            'Flutter ডাটাবেস সাপোর্ট করে না',
            'অ্যাপ APK ডিকম্পাইল করে ডাটাবেস ক্রেডেনশিয়াল ও সিক্রেট চুরি হওয়ার ঝুঁকি থাকে',
            'ডাটাবেস কেবল ব্রাউজারে চলে',
            'Dart দিয়ে কোনো কুয়েরি করা যায় না',
          ],
          correctAnswerIndex: 1,
          explanation:
            'ক্লায়েন্ট অ্যাপের কোড ব্যবহারকারীর ডিভাইসে চলে, ফলে রিভার্স ইঞ্জিনিয়ারিং করে ডাটাবেস কানেকশন স্ট্রিং চুরি হতে পারে। তাই মধ্যস্থতাকারী নিরাপদ সার্ভার প্রয়োজন।',
        },
      ],
      summary: [
        'ব্যাকএন্ড হলো অ্যাপের মস্তিষ্ক যা ডেটা সুরক্ষা ও কেন্দ্রীয় লজিক নিশ্চিত করে।',
        'Server, Database এবং API নিয়ে আধুনিক ব্যাকএন্ড গঠিত।',
        'Flutter ডেভেলপারদের জন্য Dart দিয়ে ব্যাকএন্ড লেখা হলো সবচেয়ে কার্যকর ও দ্রুততম উপায়।',
      ],
      officialDocUrl: 'https://docs.serverpod.dev/',
      serverpodVersion: 'Serverpod 2.x - 4.x',
    },
    {
      id: 'm1-l2',
      slug: 'rest-vs-serverpod-rpc',
      moduleId: 'module-1',
      moduleTitle: 'মডিউল ১: ব্যাকএন্ড ফান্ডামেন্টালস',
      title: 'REST API বনাম Serverpod RPC: কেন Serverpod অসাধারণ?',
      subtitle: 'মডার্ন টাইপ-সেফ Remote Procedure Call (RPC)-এর শক্তি এবং বয়লারপ্লেট মুক্ত ব্যাকএন্ড',
      order: 2,
      readingTimeMinutes: 10,
      objectives: [
        'REST API এর সুবিধা ও সীমাবদ্ধতা বোঝা',
        'Serverpod-এর টাইপ-সেফ RPC আর্কিটেকচার উপলব্ধি করা',
        'JSON সিরিয়ালাইজেশন ও টাইপিং ভুলের অবসান কীভাবে ঘটে তা দেখা',
      ],
      prerequisites: ['HTTP Methods (GET, POST), JSON পরিচিতি'],
      whyImportant:
        'সাধারণত Flutter-এ ব্যাকএন্ডের সাথে কাজ করতে গেলে প্রচুর manual JSON parsing, fromJson/toJson লিখতে হয়। স্পেলিং একটু ভুল হলেই রানটাইমে Null Safety ক্র্যাশ হয়। Serverpod সম্পূর্ণ স্বয়ংক্রিয়ভাবে ক্লায়েন্ট কোড তৈরি করে দেয়।',
      realWorldAnalogy:
        'REST API হলো চিঠি লিখে খামে ভরে পাঠানো (পোস্টম্যান খাম খুলে বুঝবে)। আর Serverpod হলো সরাসরি ওয়াকি-টকিতে অন্য প্রান্তের ফাংশন নিজের লোকাল ফাংশনের মতো কল করা।',
      sections: [
        {
          id: 's1',
          title: '১. ট্র্যাডিশনাল REST API-তে যে ভোগান্তি পোহাতে হয়',
          content: `একটি সাধারণ REST API ব্যবহার করতে Flutter-এ নিচের কাজগুলো ম্যানুয়ালি করতে হয়:
- প্রতিটি ডেটা মডেলের জন্য \`fromJson\` এবং \`toJson\` লেখা
- \`http.post(Uri.parse('https://api.com/users'))\` লিখে বডি স্ট্রিংফাই করা
- স্ট্যাটাস কোড (200, 400, 404, 500) ম্যানুয়ালি হ্যান্ডেল করা
- ব্যাকএন্ডে ফিল্ডের নাম পরিবর্তন করলে ক্লায়েন্টে রানটাইমে লাল স্ক্রিন (ক্র্যাশ) হওয়া`,
        },
        {
          id: 's2',
          title: '২. Serverpod-এ কীভাবে এটি ম্যাজিকের মতো কাজ করে',
          content:
            'Serverpod এ আপনি সার্ভারে সাধারণ Dart মেথড লিখবেন, আর Serverpod CLI স্বয়ংক্রিয়ভাবে Flutter এর জন্য হুবহু একই নামের টাইপ-সেফ ক্লায়েন্ট মেথড জেনারেট করে দেবে। কোনো JSON parsing লিখতে হয় না!',
          codeSnippet: {
            language: 'dart',
            filePath: 'flutter_app/lib/main.dart',
            type: 'flutter',
            code: `// Flutter অ্যাপে Serverpod কল করার কোড
// ঠিক যেন একটি লোকাল মেথড কল করছি!
try {
  // স্বয়ংক্রিয়ভাবে টাইপ সুরক্ষিত (Type-Safe)
  User user = await client.user.getUserProfile(userId: 42);
  print('ইউজারের নাম: \${user.name}');
} catch (e) {
  print('সার্ভার এরর: $e');
}`,
            explanation:
              'এখানে `client.user.getUserProfile` সরাসরি সার্ভারের মেথড কল করছে। রিটার্ন টাইপ স্বয়ংক্রিয়ভাবে `User` মডেল, কোনো `jsonDecode(response.body)` নেই!',
          },
        },
      ],
      commonMistakes: [
        {
          mistake: 'Serverpod-এ ম্যানুয়ালি HTTP JSON parser লেখার চেষ্টা করা।',
          solution: 'Serverpod-এর ক্লায়েন্ট জেনারেটরের ওপর নির্ভর করুন, জেনারেটেড মেথড সরাসরি কল করুন।',
        },
      ],
      quiz: [
        {
          id: 'q1-2',
          question: 'Serverpod ক্লায়েন্ট ব্যবহারের সবচেয়ে বড় সুবিধা কোনটি?',
          type: 'multiple-choice',
          options: [
            'ইন্টারনেট ছাড়াই ডেটা ট্রাভেল করে',
            'সম্পূর্ণ টাইপ-সেফ RPC যার ফলে ম্যানুয়াল JSON parsing লাগে না এবং কম্পাইল টাইমেই এরর ধরা পড়ে',
            'Flutter ইন্সটল করতে হয় না',
            'ডাটাবেস প্রয়োজন পড়ে না',
          ],
          correctAnswerIndex: 1,
          explanation:
            'Serverpod স্বয়ংক্রিয়ভাবে ক্লায়েন্ট SDK তৈরি করে দেয় যা শতভাগ টাইপ-সেফ এবং রানটাইম JSON টাইপিং ক্র্যাশ প্রতিরোধ করে।',
        },
      ],
      summary: [
        'REST এ ম্যানুয়াল JSON পার্সিং ও রানটাইম টাইপিং ভুলের ঝুঁকি থাকে।',
        'Serverpod RPC প্যাটার্নে কাজ করে, যা Flutter-এ শতভাগ টাইপ-সেফ মেথড কলের অনুভূতি দেয়।',
      ],
      serverpodVersion: 'Serverpod 2.x+',
    },
    {
      id: 'm1-l3',
      slug: 'request-response-networking',
      moduleId: 'module-1',
      moduleTitle: 'মডিউল ১: ব্যাকএন্ড ফান্ডামেন্টালস',
      title: 'রিকোয়েস্ট-রেসপন্স লাইফসাইকেল, পোর্ট এবং নেটওয়ার্কিং',
      subtitle: 'Localhost, 127.0.0.1, 10.0.2.2 এবং ক্লায়েন্ট-সার্ভার ডেটা আদান-প্রদান',
      order: 3,
      readingTimeMinutes: 10,
      objectives: [
        'একটি HTTP রিকোয়েস্ট কীভাবে ক্লায়েন্ট থেকে সার্ভারে পৌঁছায় তা জানা',
        'আইপি অ্যাড্রেস ও পোর্টের গুরুত্ব বোঝা',
        'Android Emulator ও iOS Simulator-এ লোকালহোস্টের বিভ্রান্তি দূর করা',
      ],
      prerequisites: ['মৌলিক কম্পিউটার নেটওয়ার্কিং ধারণা'],
      whyImportant:
        'Flutter অ্যাপে লোকাল সার্ভার কানেক্ট করতে গিয়ে ৯৫% বিগিনার "Connection Refused" এররে আটকে যান। সঠিক নেটওয়ার্কিং জ্ঞান থাকলে এই সমস্যা সেকেন্ডেই সমাধান করা সম্ভব।',
      realWorldAnalogy:
        'IP Address হলো একটি বিশাল অ্যাপার্টমেন্ট বিল্ডিংয়ের ঠিকানা, আর Port হলো ওই বিল্ডিংয়ের নির্দিষ্ট ফ্ল্যাট নম্বর। ডাটাবেস ফ্ল্যাট ৫৪৩২-এ থাকে, আর আপনার সার্ভার ফ্ল্যাট ৮০৮০ বা ৮০৮১-তে থাকে।',
      sections: [
        {
          id: 's1',
          title: '১. পোর্ট কনফিগারেশন চার্ট',
          content: `Serverpod ডিফল্টভাবে নিচের পোর্টগুলো ব্যবহার করে:
- **Port 8080:** মূল API সার্ভার (এখানে আপনার Flutter ক্লায়েন্ট কানেক্ট হবে)
- **Port 8081:** Insights ও সার্ভিস পোর্ট (হেলথ চেক, মেট্রিক্স)
- **Port 8082:** ওয়েব সার্ভার (ওয়েব ইন্টারফেস রেন্ডারিং)
- **Port 5432:** PostgreSQL ডাটাবেস পোর্ট`,
        },
        {
          id: 's2',
          title: '২. কোন ডিভাইসে কোন হোস্ট URL ব্যবহার করবেন?',
          content: `লোকাল ডেভেলপমেন্টের সময় ক্লায়েন্টের জন্য হোস্ট URL:
| ডিভাইস | সার্ভার URL | কারণ |
| :--- | :--- | :--- |
| **macOS / Windows / Linux (Desktop)** | \`http://localhost:8080/\` | একই পিসিতে চলছে |
| **iOS Simulator** | \`http://localhost:8080/\` | ম্যাকের নেটওয়ার্ক ব্রিজ শেয়ার করে |
| **Android Emulator** | \`http://10.0.2.2:8080/\` | এমুলেটরের কাছে 10.0.2.2 হলো হোস্ট পিসির লোকালহোস্ট |
| **Physical Phone (USB / Wi-Fi)** | \`http://192.168.x.x:8080/\` | ফোনের এবং পিসির একই ওয়াইফাই লোকাল আইপি প্রয়োজন |`,
          callout: {
            type: 'warning',
            title: 'Android Emulator-এ localhost দিলে Connection Refused হবে!',
            message:
              'অ্যান্ড্রয়েড এমুলেটর নিজেই একটি ভার্চুয়াল মেশিন। তাই এমুলেটরে "localhost" লিখলে সে নিজের ভেতরের পোর্ট খোঁজে, আপনার পিসির সার্ভার পায় না। সবসময় `10.0.2.2` ব্যবহার করুন।',
          },
        },
      ],
      commonMistakes: [
        {
          mistake: 'অ্যান্ড্রয়েড এমুলেটরে http://localhost:8080 দেওয়া।',
          solution: 'http://10.0.2.2:8080 ব্যবহার করুন অথবা প্ল্যাটফর্ম চেক করে ডাইনামিক হোস্ট সেট করুন।',
        },
      ],
      quiz: [
        {
          id: 'q1-3',
          question: 'Android Emulator থেকে লোকাল পিসিতে চলমান Serverpod সার্ভারে কানেক্ট করার সঠিক URL কোনটি?',
          type: 'multiple-choice',
          options: [
            'http://localhost:8080/',
            'http://10.0.2.2:8080/',
            'http://127.0.0.1:8080/',
            'http://0.0.0.0:8080/',
          ],
          correctAnswerIndex: 1,
          explanation:
            'অ্যান্ড্রয়েড এমুলেটরে স্পেশাল এলিয়াস আইপি `10.0.2.2` ডেভেলপমেন্ট মেশিনের `127.0.0.1`-কে পয়েন্ট করে।',
        },
      ],
      summary: [
        'সার্ভার নির্দিষ্ট পোর্টে লিসেন করে (Serverpod ডিফল্ট 8080)।',
        'Android এমুলেটরে 10.0.2.2 এবং রিয়েল ডিভাইসে লোকাল ওয়াইফাই আইপি ব্যবহার করতে হবে।',
      ],
      serverpodVersion: 'All versions',
    },
  ],
};

