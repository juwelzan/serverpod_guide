import { CourseModule } from '@/types';

export const module11: CourseModule = {
  id: 'module-11',
  number: 11,
  title: 'মডিউল ১১: রিয়েল-টাইম কমিউনিকেশন ও স্ট্রিমিং',
  slug: 'real-time-communication',
  description:
    'HTTP রিকোয়েস্ট বনাম WebSocket রিয়েল-টাইম স্ট্রিমিং। Serverpod-এর নিজস্ব স্ট্রিমিং মেকানিজম, মেসেজ ব্রডকাস্টিং এবং পূর্ণাঙ্গ লাইভ চ্যাট অ্যাপ্লিকেশন তৈরি।',
  estimatedHours: '৩ ঘণ্টা',
  iconName: 'Radio',
  lessons: [
    {
      id: 'm11-l1',
      slug: 'serverpod-streaming-concepts',
      moduleId: 'module-11',
      moduleTitle: 'মডিউল ১১: রিয়েল-টাইম স্ট্রিমিং',
      title: 'Serverpod Streaming আর্কিটেকচার ও লাইভ ব্রডকাস্টিং',
      subtitle: 'WebSocket সেশন, sendStreamMessage এবং handleStreamMessage',
      order: 1,
      readingTimeMinutes: 11,
      objectives: [
        'ঐতিহ্যবাহী HTTP পোলিংয়ের সীমাবদ্ধতা ও স্ট্রিমিংয়ের প্রয়োজনীয়তা বোঝা',
        'Serverpod-এর বিল্ট-ইন স্ট্রিমিং এন্ডপয়েন্ট মেথডগুলো জানা',
        'সার্ভার মেসেজ সেন্ট্রাল মেসেজ বাস দিয়ে ব্রডকাস্ট করা',
      ],
      prerequisites: ['মডিউল ৫ ও ৬ সম্পন্ন করা'],
      whyImportant:
        'চ্যাট অ্যাপ, রাইড শেয়ারিং লাইভ লোকেশন ট্র্যাকিং বা নোটিফিকেশনের জন্য ক্লায়েন্টকে বারবার সার্ভার পোল করতে হয় না। সার্ভার থেকেই ক্লায়েন্টের ফোনে মুহূর্তেই ডেটা পুশ করা যায়।',
      realWorldAnalogy:
        'HTTP হলো কাউকে মিসড কল দিয়ে জানতে চাওয়া কোনো মেসেজ আছে কিনা। আর WebSocket স্ট্রিমিং হলো সার্বক্ষণিক একটি ফোন কল চালু রাখা, যেখানে যেকোনো প্রান্ত কথা বললেই অন্য প্রান্ত সাথে সাথে শুনতে পায়।',
      sections: [
        {
          id: 's1',
          title: '১. চ্যাট এন্ডপয়েন্টে স্ট্রিমিং ইমপ্লিমেন্টেশন',
          content: `Serverpod-এ স্ট্রিমিংয়ের জন্য কোনো জটিল থার্ড-পার্টি WebSocket লাইব্রেরির প্রয়োজন হয় না। সরাসরি \`Endpoint\` ক্লাসের স্ট্রিমিং মেথড ওভাররাইড করলেই হয়ে যায়:`,
          codeSnippet: {
            language: 'dart',
            filePath: 'school_api_server/lib/src/endpoints/chat_endpoint.dart',
            type: 'server',
            code: `import 'package:serverpod/serverpod.dart';
import '../generated/protocol.dart';

class ChatEndpoint extends Endpoint {
  static const String channelName = 'general-chat';

  // ক্লায়েন্ট যখন স্ট্রিমে মেসেজ পাঠায়
  @override
  Future<void> handleStreamMessage(
    StreamingSession session,
    SerializableModel message,
  ) async {
    if (message is ChatMessage) {
      session.log('চ্যাট মেসেজ এসেছে: \${message.text}');

      // ডাটাবেসে সেভ করা
      await ChatMessage.db.insertRow(session, message);

      // সব কানেক্টেড ক্লায়েন্টের কাছে মেসেজটি ব্রডকাস্ট করা
      session.messages.postMessage(channelName, message);
    }
  }

  // ক্লায়েন্ট যখন স্ট্রিমে কানেক্ট হয়
  @override
  Future<void> streamOpened(StreamingSession session) async {
    // চ্যানেল সাবস্ক্রিপশন শুরু
    session.messages.createStream(channelName).listen((message) {
      sendStreamMessage(session, message);
    });
  }
}`,
            explanation:
              '- `StreamingSession`: সাধারণ সেশনের মতোই তবে এটি দীর্ঘস্থায়ী WebSocket কানেকশন ধরে রাখে।\n- `session.messages.postMessage(channel, message)`: একটি মেসেজকে ব্রডকাস্ট করে যা সব সাবস্ক্রাইব করা ইউজারের কাছে পৌঁছে যায়।\n- `sendStreamMessage(session, message)`: নির্দিষ্ট ক্লায়েন্টের ডিভাইসে লাইভ ডেটা পুশ করে।',
          },
        },
      ],
      summary: [
        'Serverpod বিল্ট-ইনভাবে শক্তিশালী WebSocket স্ট্রিমিং সাপোর্ট করে।',
        '`session.messages` হলো একটি অভ্যন্তরীণ পাব-সাব (Pub/Sub) সিস্টেম।',
      ],
      officialDocUrl: 'https://docs.serverpod.dev/concepts/working-with-endpoints/',
      serverpodVersion: 'Serverpod 2.x+',
    },
    {
      id: 'm11-l2',
      slug: 'flutter-realtime-chat-client',
      moduleId: 'module-11',
      moduleTitle: 'মডিউল ১১: রিয়েল-টাইম স্ট্রিমিং',
      title: 'Flutter ক্লায়েন্টে লাইভ চ্যাট স্ট্রিম সাবস্ক্রিপশন',
      subtitle: 'client.chat.stream এবং লাইভ মেসেজ আদান-প্রদান',
      order: 2,
      readingTimeMinutes: 10,
      objectives: [
        'Flutter-এ সার্ভারপডের স্ট্রিমিং কানেকশন ওপেন করা',
        'স্ট্রিমে ইনকামিং মেসেজ লিসেন করে সাথে সাথে চ্যাট স্ক্রিন রি-রেন্ডার করা',
        'লাইভ মেসেজ পুশ করা',
      ],
      prerequisites: ['Lesson ১ সম্পন্ন করা'],
      whyImportant:
        'UI-তে কোনো রিফ্রেশ বাটন চাপ ছাড়াই যখন ইউজার দেখতে পাবে তার বন্ধুর পাঠানো মেসেজ স্ক্রিনে ভেসে উঠেছে, তখন ফুল-স্ট্যাক অ্যাপের আসল শক্তি প্রকাশ পাবে।',
      sections: [
        {
          id: 's1',
          title: '১. Flutter ক্লায়েন্ট স্ট্রিম কোড',
          content: `Flutter স্ক্রিনের \`initState\`-এ স্ট্রিমে কানেক্ট হোন:`,
          codeSnippet: {
            language: 'dart',
            filePath: 'school_api_flutter/lib/src/screens/chat_screen.dart',
            type: 'flutter',
            code: `import 'package:flutter/material.dart';
import 'package:school_api_client/school_api_client.dart';
import '../../main.dart';

class ChatScreen extends StatefulWidget {
  const ChatScreen({super.key});

  @override
  State<ChatScreen> createState() => _ChatScreenState();
}

class _ChatScreenState extends State<ChatScreen> {
  final List<ChatMessage> _messages = [];
  final TextEditingController _textController = TextEditingController();

  @override
  void initState() {
    super.initState();
    _initStream();
  }

  Future<void> _initStream() async {
    // স্ট্রিমিং কানেকশন খোলা
    await client.openStreamingConnection();

    // ইনকামিং মেসেজ লিসেন করা
    client.chat.stream.listen((message) {
      if (message is ChatMessage) {
        setState(() {
          _messages.add(message);
        });
      }
    });
  }

  void _sendMessage() {
    final text = _textController.text.trim();
    if (text.isEmpty) return;

    final message = ChatMessage(
      sender: 'Juwel',
      text: text,
      timestamp: DateTime.now(),
    );

    // সার্ভারে স্ট্রিমে মেসেজ পাঠানো
    client.chat.sendStreamMessage(message);
    _textController.clear();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('লাইভ চ্যাট রুম')),
      body: Column(
        children: [
          Expanded(
            child: ListView.builder(
              itemCount: _messages.length,
              itemBuilder: (ctx, i) => ListTile(
                title: Text(_messages[i].text),
                subtitle: Text(_messages[i].sender),
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Row(
              children: [
                Expanded(child: TextField(controller: _textController)),
                IconButton(onPressed: _sendMessage, icon: const Icon(Icons.send)),
              ],
            ),
          )
        ],
      ),
    );
  }
}`,
            explanation:
              '`client.openStreamingConnection()` মেথডটি ব্যাকগ্রাউন্ডে একটি সার্বক্ষণিক WebSocket সকেট স্থাপন করে এবং `client.chat.stream` দিয়ে লাইভ ডেটা গ্রহণ করে।',
          },
        },
      ],
      summary: [
        '`client.openStreamingConnection()` দিয়ে সকেট ওপেন করতে হয়।',
        '`client.<endpoint>.stream.listen()` দিয়ে ইনকামিং মেসেজ ধরা যায়।',
      ],
      serverpodVersion: 'Serverpod 2.x+',
    },
  ],
};

