import { CourseModule } from '@/types';

export const module7: CourseModule = {
  id: 'module-7',
  number: 7,
  title: 'মডিউল ৭: পূর্ণাঙ্গ CRUD প্রজেক্ট — Task Manager',
  slug: 'build-complete-crud-project',
  description:
    'হাতে-কলমে সম্পূর্ণ Task Manager অ্যাপ্লিকেশন তৈরি। সার্ভার সাইড এন্ডপয়েন্ট থেকে Flutter UI, রিফ্রেশ, টাস্ক তৈরি, ডিলিট এবং অ্যাপ রিস্টার্টেও ডাটাবেস পারসিস্টেন্স ভেরিফিকেশন।',
  estimatedHours: '৩.৫ ঘণ্টা',
  iconName: 'CheckSquare',
  lessons: [
    {
      id: 'm7-l1',
      slug: 'task-manager-server-setup',
      moduleId: 'module-7',
      moduleTitle: 'মডিউল ৭: Task Manager CRUD',
      title: 'Task Manager: সার্ভার আর্কিটেকচার ও এন্ডপয়েন্ট বাস্তবায়ন',
      subtitle: 'মডেল, মাইগ্রেশন এবং ইনপুট ভ্যালিডেশন সহ সার্ভার কোড',
      order: 1,
      readingTimeMinutes: 12,
      objectives: [
        'টাস্ক মডেল তৈরি ও ভ্যালিডেশন লজিক প্রয়োগ করা',
        'সার্ভার সাইডে ফাঁকা টাইটেল বা অবৈধ ইনপুট প্রতিরোধ করা',
        'সঠিক স্ট্যাটাস কোড ও এক্সেপশন ফেরত পাঠানো',
      ],
      prerequisites: ['মডিউল ৬ সম্পন্ন করা'],
      whyImportant:
        'ক্লায়েন্ট সাইড ভ্যালিডেশন বাইপাস করা সম্ভব হলেও সার্ভার সাইড ভ্যালিডেশন ডাটাবেসের অখণ্ডতা রক্ষা করে। এটি প্রোডাকশন কোডের মানদণ্ড।',
      sections: [
        {
          id: 's1',
          title: '১. ইনপুট ভ্যালিডেশন সহ এন্ডপয়েন্ট',
          content: `ফাঁকা বা ক্ষতিকর ইনপুট ঠেকাতে সার্ভারে যাচাই করুন:`,
          codeSnippet: {
            language: 'dart',
            filePath: 'school_api_server/lib/src/endpoints/task_endpoint.dart',
            type: 'server',
            code: `import 'package:serverpod/serverpod.dart';
import '../generated/protocol.dart';

class TaskEndpoint extends Endpoint {
  Future<Task> createTask(Session session, String title, String? description) async {
    final cleanTitle = title.trim();
    if (cleanTitle.isEmpty) {
      throw FormatException('টাস্কের শিরোনাম খালি রাখা যাবে না!');
    }

    final newTask = Task(
      title: cleanTitle,
      description: description?.trim(),
      isCompleted: false,
      priority: 1,
    );

    return await Task.db.insertRow(session, newTask);
  }

  Future<List<Task>> getTasks(Session session) async {
    return await Task.db.find(
      session,
      orderBy: (t) => t.id,
      orderDescending: true,
    );
  }

  Future<Task> toggleTaskStatus(Session session, int taskId) async {
    final task = await Task.db.findById(session, taskId);
    if (task == null) {
      throw FormatException('টাস্ক পাওয়া যায়নি!');
    }

    task.isCompleted = !task.isCompleted;
    return await Task.db.updateRow(session, task);
  }

  Future<bool> deleteTask(Session session, int taskId) async {
    final task = await Task.db.findById(session, taskId);
    if (task == null) return false;
    await Task.db.deleteRow(session, task);
    return true;
  }
}`,
            explanation:
              'এখানে `FormatException` থ্রো করলে Serverpod স্বয়ংক্রিয়ভাবে ক্লায়েন্ট সাইডে একটি স্ট্যান্ডার্ড হ্যান্ডেলযোগ্য এক্সেপশন পাঠিয়ে দেয়।',
          },
        },
      ],
      commonMistakes: [
        {
          mistake: 'ভ্যালিডেশন ছাড়া ক্লায়েন্টের পাঠানো অবজেক্ট সরাসরি ডাটাবেসে সেভ করা।',
          solution: 'সার্ভারে স্ট্রিং ট্রিম ও লেন্থ চেক করে তারপর সেভ করুন।',
        },
      ],
      quiz: [
        {
          id: 'q7-1',
          question: 'সার্ভার সাইড ইনপুট ভ্যালিডেশন কেন বাধ্যতামূলক?',
          type: 'multiple-choice',
          options: [
            'Flutter ক্লায়েন্টের আকার ছোট করতে',
            'ক্লায়েন্ট বাইপাস করে অবৈধ বা ক্ষতিকর ডেটা ডাটাবেসে প্রবেশ রোধ করতে',
            'ডাটাবেস মাইগ্রেশন দ্রুত করতে',
            'শুধুমাত্র UI কালার পরিবর্তনের জন্য',
          ],
          correctAnswerIndex: 1,
          explanation:
            'হ্যাকার বা ম্যানিপুলেটেড রিকোয়েস্ট ক্লায়েন্ট ভ্যালিডেশন পাশ কাটিয়ে সার্ভারে আঘাত করতে পারে। তাই সার্ভার সাইড ভ্যালিডেশনই সর্বোচ্চ নিরাপত্তা দেয়।',
        },
      ],
      summary: [
        'সার্ভার সাইড ভ্যালিডেশন ডেটা ইন্টিগ্রিটির জন্য আবশ্যক।',
        'এক্সেপশন থ্রো করলে ক্লায়েন্ট সঠিক এরর মেসেজ পায়।',
      ],
      officialDocUrl: 'https://docs.serverpod.dev/',
      serverpodVersion: 'Serverpod 2.x+',
    },
    {
      id: 'm7-l2',
      slug: 'task-manager-flutter-ui-bloc',
      moduleId: 'module-7',
      moduleTitle: 'মডিউল ৭: Task Manager CRUD',
      title: 'Flutter UI, রিফ্রেশ, টগল ও পারসিস্টেন্স টেস্টিং',
      subtitle: 'রিস্পন্সিভ টাস্ক লিস্ট, ডায়ালগে নতুন টাস্ক ইনপুট এবং অ্যাপ রিস্টার্ট টেস্ট',
      order: 2,
      readingTimeMinutes: 14,
      objectives: [
        'Flutter-এ লোডিং, ডেটা ও এরর স্টেট নিখুঁতভাবে হ্যান্ডেল করা',
        'চেকবক্স টগল ক্লিকে সার্ভারের ডাটাবেস আপডেট করা',
        'অ্যাপ সম্পূর্ণ ক্লোজ করে পুনরায় ওপেন করলেও ডাটাবেসের ডেটা পাওয়ার নিশ্চয়তা পরীক্ষা করা',
      ],
      prerequisites: ['Lesson ১ সম্পন্ন করা'],
      whyImportant:
        'এটি আপনার শেখার সবচেয়ে আনন্দদায়ক মুহূর্ত — যেখানে আপনি দেখতে পাবেন আপনার নিজের তৈরি সার্ভারে ডাটাবেস থেকে ডেটা রিয়েল টাইমে মোবাইল ফোনে দেখা যাচ্ছে!',
      sections: [
        {
          id: 's1',
          title: '১. Flutter স্ক্রিন ইমপ্লিমেন্টেশন কোড',
          content: `\`school_api_flutter/lib/src/screens/task_list_screen.dart\` ফাইলে পুরো ইউজার ইন্টারফেস:`,
          codeSnippet: {
            language: 'dart',
            filePath: 'school_api_flutter/lib/src/screens/task_list_screen.dart',
            type: 'flutter',
            code: `import 'package:flutter/material.dart';
import 'package:school_api_client/school_api_client.dart';
import '../../main.dart'; // যেখানে client ইনিশিয়ালাইজ করা আছে

class TaskListScreen extends StatefulWidget {
  const TaskListScreen({super.key});

  @override
  State<TaskListScreen> createState() => _TaskListScreenState();
}

class _TaskListScreenState extends State<TaskListScreen> {
  List<Task> _tasks = [];
  bool _isLoading = true;
  String? _errorMessage;

  @override
  void initState() {
    super.initState();
    _fetchTasks();
  }

  Future<void> _fetchTasks() async {
    setState(() {
      _isLoading = true;
      _errorMessage = null;
    });

    try {
      final tasks = await client.task.getTasks();
      setState(() {
        _tasks = tasks;
        _isLoading = false;
      });
    } catch (e) {
      setState(() {
        _errorMessage = 'টাস্ক লোড হতে সমস্যা হয়েছে: $e';
        _isLoading = false;
      });
    }
  }

  Future<void> _createTask(String title, String? desc) async {
    try {
      final created = await client.task.createTask(title, desc);
      setState(() {
        _tasks.insert(0, created);
      });
    } catch (e) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('ব্যর্থ: $e')),
      );
    }
  }

  Future<void> _toggleTask(Task task) async {
    if (task.id == null) return;
    try {
      final updated = await client.task.toggleTaskStatus(task.id!);
      setState(() {
        final index = _tasks.indexWhere((t) => t.id == task.id);
        if (index != -1) _tasks[index] = updated;
      });
    } catch (e) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('আপডেট ব্যর্থ: $e')),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Serverpod Task Manager'),
        actions: [
          IconButton(onPressed: _fetchTasks, icon: const Icon(Icons.refresh)),
        ],
      ),
      body: _isLoading
          ? const Center(child: CircularProgressIndicator())
          : _errorMessage != null
              ? Center(child: Text(_errorMessage!))
              : _tasks.isEmpty
                  ? const Center(child: Text('কোনো টাস্ক নেই। নতুন টাস্ক যোগ করুন!'))
                  : ListView.builder(
                      itemCount: _tasks.length,
                      itemBuilder: (context, index) {
                        final task = _tasks[index];
                        return ListTile(
                          leading: Checkbox(
                            value: task.isCompleted,
                            onChanged: (_) => _toggleTask(task),
                          ),
                          title: Text(
                            task.title,
                            style: TextStyle(
                              decoration: task.isCompleted
                                  ? TextDecoration.lineThrough
                                  : null,
                            ),
                          ),
                          subtitle: task.description != null ? Text(task.description!) : null,
                        );
                      },
                    ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => _showAddTaskDialog(context),
        child: const Icon(Icons.add),
      ),
    );
  }

  void _showAddTaskDialog(BuildContext context) {
    final titleController = TextEditingController();
    showDialog(
      context: context,
      builder: (ctx) => AlertDialog(
        title: const Text('নতুন টাস্ক তৈরি'),
        content: TextField(
          controller: titleController,
          decoration: const InputDecoration(labelText: 'টাস্কের শিরোনাম'),
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('বাতিল')),
          ElevatedButton(
            onPressed: () {
              if (titleController.text.trim().isNotEmpty) {
                _createTask(titleController.text, null);
                Navigator.pop(ctx);
              }
            },
            child: const Text('সংরক্ষণ'),
          ),
        ],
      ),
    );
  }
}`,
            explanation:
              'সম্পূর্ণ স্টেট হ্যান্ডলিং সহ একটি প্রোডাকশন-রেডি Flutter স্ক্রিন। টাস্ক যোগ করার পর ডাটাবেসে সেভ হয়ে সঙ্গে সঙ্গে UI আপডেট হয়।',
          },
        },
        {
          id: 's2',
          title: '২. পারসিস্টেন্স ভেরিফিকেশন টেস্ট',
          content: `১. অ্যাপে ২টি নতুন টাস্ক যোগ করুন।
২. আপনার Flutter অ্যাপের সিমুলেটর/এমুলেটর সম্পূর্ণ বন্ধ (Kill/Stop) করে দিন।
৩. পুনরায় অ্যাপটি চালু করুন।
৪. দেখতে পাবেন আপনার তৈরি করা টাস্কগুলো হুবহু ডাটাবেস থেকে লোড হয়েছে! এর মানে আপনার ব্যাকএন্ড ডাটাবেস সফলভাবে কাজ করছে।`,
        },
      ],
      summary: [
        'Flutter-এ `client.task` ব্যবহার করে সরাসরি সার্ভার এন্ডপয়েন্ট কল করা হয়।',
        'UI স্টেট হ্যান্ডলিং ও এরর ফিডব্যাক জরুরি।',
        'ডাটাবেসে ডেটা স্থায়ীভাবে সংরক্ষিত হওয়ায় অ্যাপ রিস্টার্টেও কোনো ডেটা হারায় না।',
      ],
      serverpodVersion: 'Serverpod 2.x+',
    },
  ],
};

