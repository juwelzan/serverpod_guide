import { CourseModule } from '@/types';

export const module5: CourseModule = {
  id: 'module-5',
  number: 5,
  title: 'মডিউল ৫: প্রথম এন্ডপয়েন্ট ও Flutter ক্লায়েন্ট কানেকশন',
  slug: 'first-endpoint-and-client-connection',
  description:
    'Endpoint কী, Endpoint ক্লাস ও Session অবজেক্ট, কোড জেনারেশন কীভাবে কাজ করে, Flutter ক্লায়েন্ট ইনস্ট্যানশিয়েশন এবং এন্ডপয়েন্ট কল করার বাস্তব নিয়ম।',
  estimatedHours: '৩.৫ ঘণ্টা',
  iconName: 'Link',
  lessons: [
    {
      id: 'm5-l1',
      slug: 'creating-first-endpoint',
      moduleId: 'module-5',
      moduleTitle: 'মডিউল ৫: প্রথম এন্ডপয়েন্ট ও ক্লায়েন্ট কানেকশন',
      title: 'একটি এন্ডপয়েন্ট তৈরি: Endpoint ক্লাস ও Session অবজেক্টের গভীরে',
      subtitle: 'কীভাবে সার্ভারে GreetingEndpoint লিখে ক্লায়েন্টে এক্সপোজ করবেন',
      order: 1,
      readingTimeMinutes: 10,
      objectives: [
        'Serverpod-এর `Endpoint` বেস ক্লাসের কাজ বোঝা',
        'প্রতিটি এন্ডপয়েন্ট মেথডে কেন প্রথম প্যারামিটার হিসেবে `Session` নেওয়া বাধ্যতামূলক তা জানা',
        '`serverpod generate` কমান্ড দিয়ে ক্লায়েন্ট মেথড তৈরি করা',
      ],
      prerequisites: ['মডিউল ৪ সম্পন্ন করা'],
      whyImportant:
        'এন্ডপয়েন্ট হলো সার্ভারের প্রবেশদ্বার। Flutter অ্যাপ যখন সার্ভারের সাথে যোগাযোগ করে, তখন সে এন্ডপয়েন্টের মেথডগুলোতেই কল পাঠায়।',
      realWorldAnalogy:
        'এন্ডপয়েন্ট হলো ব্যাংকের ক্যাশ কাউন্টার। কাউন্টারে গিয়ে আপনি যেমন টোকেন (Session) দেখান এবং কাজ সম্পন্ন করেন, সার্ভারেও ক্লায়েন্টের প্রতিটি রিকোয়েস্ট সেশন দিয়ে ট্র্যাক হয়।',
      sections: [
        {
          id: 's1',
          title: '১. সার্ভারে এন্ডপয়েন্ট কোড লেখা',
          content: `সার্ভার প্রজেক্টের \`lib/src/endpoints/\` ফোল্ডারে নতুন ফাইল তৈরি করুন: \`greeting_endpoint.dart\``,
          codeSnippet: {
            language: 'dart',
            filePath: 'school_api_server/lib/src/endpoints/greeting_endpoint.dart',
            type: 'server',
            code: `import 'package:serverpod/serverpod.dart';

// Endpoint ক্লাস থেকে ইনহেরিট করা বাধ্যতামূলক
class GreetingEndpoint extends Endpoint {
  // প্রতিটি পাবলিক মেথডের প্রথম প্যারামিটার Session হতে হবে
  Future<String> hello(Session session, String name) async {
    // সেশনে লগ তৈরি করা যা Insights-এ দেখা যাবে
    session.log('গ্রিটিং রিকোয়েস্ট এসেছে: $name');

    if (name.trim().isEmpty) {
      return 'হ্যালো, অচেনা বন্ধু!';
    }
    return 'হ্যালো, $name! Serverpod-এ আপনাকে স্বাগতম।';
  }
}`,
            explanation:
              '1. `class GreetingEndpoint extends Endpoint`: এর ফলে Serverpod এটিকে একটি বৈধ API কন্ট্রোলার হিসেবে চিনে নেয়।\n2. `Session session`: ক্লায়েন্টের কানেকশন স্টেট, ডাটাবেস এক্সেস, অথেন্টিকেশন ইউজার আইডি এবং সার্ভার লগিং পরিচালনা করে।\n3. মেথড রিটার্ন টাইপ অবশ্যই `Future<T>` হতে হবে কারণ নেটওয়ার্ক কল অ্যাসিনক্রোনাস।',
          },
        },
        {
          id: 's2',
          title: '২. কোড জেনারেশন চালানো',
          content: `এন্ডপয়েন্ট সেভ করার পর টার্মিনালে সার্ভার ফোল্ডারে গিয়ে রান করুন:`,
          codeSnippet: {
            language: 'bash',
            type: 'command',
            code: `serverpod generate`,
            explanation:
              'এই জাদুকরী কমান্ডটি `GreetingEndpoint`-কে বিশ্লেষণ করে `school_api_client` প্যাকেজে হুবহু `client.greeting.hello(name)` মেথড যুক্ত করে দেবে!',
          },
        },
      ],
      commonMistakes: [
        {
          mistake: 'এন্ডপয়েন্ট মেথডের প্রথম প্যারামিটারে `Session session` বাদ দেওয়া।',
          solution:
            'সার্ভারপডের রুল: যেকোনো এক্সপোজড মেথডে প্রথম আর্গুমেন্ট `Session` থাকতেই হবে, অন্যথায় জেনারেটর সিনট্যাক্স এরর দেবে।',
        },
      ],
      quiz: [
        {
          id: 'q5-1',
          question: 'Serverpod এন্ডপয়েন্ট মেথডের প্রথম প্যারামিটার কোনটি হওয়া বাধ্যতামূলক?',
          type: 'multiple-choice',
          options: [
            'BuildContext context',
            'Session session',
            'HttpRequest request',
            'Database db',
          ],
          correctAnswerIndex: 1,
          explanation:
            '`Session session` প্রতিটি এন্ডপয়েন্ট মেথডের প্রথম প্যারামিটার হিসেবে থাকা বাধ্যতামূলক।',
        },
      ],
      summary: [
        '`lib/src/endpoints/` ফোল্ডারে `Endpoint` ক্লাস ইনহেরিট করে ফাইল তৈরি করতে হয়।',
        'প্রতিটি মেথডে `Session` পাস করতে হয়।',
        'এন্ডপয়েন্ট লিখলেই `serverpod generate` রান করা আবশ্যক।',
      ],
      officialDocUrl: 'https://docs.serverpod.dev/get-started/creating-endpoints',
      serverpodVersion: 'Serverpod 2.x+',
    },
    {
      id: 'm5-l2',
      slug: 'calling-endpoint-from-flutter',
      moduleId: 'module-5',
      moduleTitle: 'মডিউল ৫: প্রথম এন্ডপয়েন্ট ও ক্লায়েন্ট কানেকশন',
      title: 'Flutter ক্লায়েন্ট থেকে সার্ভার এন্ডপয়েন্ট কল করা',
      subtitle: 'Client ইনিশিয়ালাইজেশন, Base URL হ্যান্ডলিং এবং লাইভ রেসপন্স দেখানো',
      order: 2,
      readingTimeMinutes: 10,
      objectives: [
        'Flutter অ্যাপে `Client` অবজেক্ট ইনিশিয়ালাইজ করা',
        'জেনারেটেড ক্লায়েন্ট মেথড সরাসরি কল করে রেসপন্স রেন্ডার করা',
        'নেটওয়ার্ক এরর হ্যান্ডেল করার সঠিক উপায় শেখা',
      ],
      prerequisites: ['Lesson ১ সম্পন্ন করা'],
      whyImportant:
        'সার্ভারে এন্ডপয়েন্ট যত সুন্দরই লিখুন না কেন, মোবাইল অ্যাপের UI-তে ইউজারের ইন্টারেকশনে রিয়েল ডেটা ফুটিয়ে তোলাই মূল লক্ষ্য।',
      sections: [
        {
          id: 's1',
          title: '১. ক্লায়েন্ট অবজেক্ট ইনিশিয়ালাইজেশন',
          content: `Flutter অ্যাপের \`lib/main.dart\` ফাইলে ক্লায়েন্ট অবজেক্ট তৈরি করুন:`,
          codeSnippet: {
            language: 'dart',
            filePath: 'school_api_flutter/lib/main.dart',
            type: 'flutter',
            code: `import 'package:flutter/material.dart';
import 'package:school_api_client/school_api_client.dart';
import 'package:serverpod_flutter/serverpod_flutter.dart';

// গ্লোবাল ক্লায়েন্ট ইনস্ট্যান্স (অথবা Service Locator/Riverpod/BLoC দিয়ে ইনজেক্ট করা যায়)
late final Client client;

void main() {
  WidgetsFlutterBinding.ensureInitialized();

  // অ্যান্ড্রয়েড এমুলেটর হলে 10.0.2.2, অন্যথায় localhost
  client = Client(
    'http://localhost:8080/',
    authenticationKeyManager: FlutterAuthenticationKeyManager(),
  )..connectivityMonitor = FlutterConnectivityMonitor();

  runApp(const MyApp());
}`,
            explanation:
              '`Client` ক্লাসের প্রথম আর্গুমেন্ট হলো সার্ভার API-এর Base URL (পোর্ট ৮০৮০)। `authenticationKeyManager` ক্লায়েন্টের লগইন কি হ্যান্ডেল করে।',
          },
        },
        {
          id: 's2',
          title: '২. Flutter উইজেটে কল করা',
          content: `এখন একটি বোতাম ক্লিকে সার্ভারের \`hello\` মেথড কল করুন:`,
          codeSnippet: {
            language: 'dart',
            filePath: 'school_api_flutter/lib/src/greeting_screen.dart',
            type: 'flutter',
            code: `Future<void> sendGreeting(String name) async {
  setState(() => _isLoading = true);
  try {
    // সরাসরি টাইপ-সেফ মেথড কল! কোনো http.post বা JSON ডিকোড নেই
    final message = await client.greeting.hello(name);
    setState(() {
      _resultText = message;
      _isLoading = false;
    });
  } catch (e) {
    setState(() {
      _resultText = 'কানেকশন এরর: $e';
      _isLoading = false;
    });
  }
}`,
            explanation:
              '`client.greeting.hello(name)` কোনো সাধারণ লোকাল মেথডের মতো এক্সিকিউট হচ্ছে, কিন্তু ব্যাকগ্রাউন্ডে এটি সার্ভারের সাথে ফুল নেটওয়ার্ক কল সম্পাদন করছে।',
          },
        },
      ],
      commonMistakes: [
        {
          mistake: '`client.greeting.hello(name)` মেথডের পূর্বে `await` কি-ওয়ার্ড দিতে ভুলে যাওয়া।',
          solution:
            'নেটওয়ার্ক কল সবসময় `Future` রিটার্ন করে, তাই অবশ্যই `await` অথবা `.then()` ব্যবহার করুন।',
        },
      ],
      quiz: [
        {
          id: 'q5-2',
          question: 'Flutter কোডে `GreetingEndpoint`-এর `hello` মেথড কীভাবে কল করা হয়?',
          type: 'code-output',
          options: [
            'client.greeting.hello("Juwel")',
            'http.get("http://localhost:8080/greeting/hello")',
            'Serverpod.callEndpoint("GreetingEndpoint")',
            'client.call("hello", ["Juwel"])',
          ],
          correctAnswerIndex: 0,
          explanation:
            'Serverpod ক্লায়েন্টে এন্ডপয়েন্টের নাম camelCase হয়ে অবজেক্টে পরিণত হয় (GreetingEndpoint -> client.greeting.hello())।',
        },
      ],
      summary: [
        'Flutter অ্যাপে `Client` ইনিশিয়ালাইজ করতে হয় সার্ভার ইউআরএল দিয়ে।',
        '`client.<endpointName>.<methodName>()` কল শতভাগ টাইপ-সেফ।',
      ],
      officialDocUrl: 'https://docs.serverpod.dev/get-started/creating-endpoints',
      serverpodVersion: 'Serverpod 2.x+',
    },
  ],
};

