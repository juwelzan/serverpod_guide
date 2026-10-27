import { CourseModule } from '@/types';

export const module9: CourseModule = {
  id: 'module-9',
  number: 9,
  title: 'মডিউল ৯: Flutter আর্কিটেকচার ও BLoC/Repository ইন্টিগ্রেশন',
  slug: 'flutter-app-integration',
  description:
    'প্রোডাকশন-গ্রেড Flutter আর্কিটেকচার: Presentation Layer, Domain Layer, Repository Pattern এবং BLoC স্টেট ম্যানেজমেন্টের সাথে Serverpod ক্লায়েন্ট সংযোগ।',
  estimatedHours: '৩ ঘণ্টা',
  iconName: 'Layers',
  lessons: [
    {
      id: 'm9-l1',
      slug: 'repository-pattern-with-serverpod',
      moduleId: 'module-9',
      moduleTitle: 'মডিউল ৯: Flutter আর্কিটেকচার',
      title: 'Repository Pattern: Serverpod ক্লায়েন্টকে UI থেকে আলাদা রাখা',
      subtitle: 'টেস্টেবল ও স্কেলেবল কোডবেসের মূল চাবিকাঠি',
      order: 1,
      readingTimeMinutes: 10,
      objectives: [
        'কেন সরাসরি UI উইজেটে `client` অবজেক্ট কল করা অনুচিত তা বোঝা',
        'Repository ইন্টারফেস ও ইমপ্লিমেন্টেশন তৈরি করা',
        'ভবিষ্যতে অফলাইন ক্যাশিং বা মক টেস্টিং সহজ করা',
      ],
      prerequisites: ['মডিউল ৭ ও ৮ সম্পন্ন করা'],
      whyImportant:
        'লার্জ-স্কেল অ্যাপ্লিকেশনে UI উইজেট থেকে সরাসরি API কল করলে কোড স্প্যাগেটি হয়ে যায় এবং ইউনিট টেস্ট করা দুঃসাধ্য হয়ে পড়ে। Repository লেয়ার একটি পরিষ্কার সীমানা তৈরি করে।',
      architectureDiagram: `[ Flutter Widget ] ──(BLoC Event)──> [ TaskBloc ] ──> [ TaskRepository ] ──> [ Serverpod Client ] ──(Network)──> [ Serverpod Endpoint ]`,
      sections: [
        {
          id: 's1',
          title: '১. টাস্ক রিপোজিটরি ইন্টারফেস ও কোড',
          content: `\`lib/src/repositories/task_repository.dart\` ফাইল তৈরি করুন:`,
          codeSnippet: {
            language: 'dart',
            filePath: 'school_api_flutter/lib/src/repositories/task_repository.dart',
            type: 'flutter',
            code: `import 'package:school_api_client/school_api_client.dart';

abstract class TaskRepository {
  Future<List<Task>> fetchAllTasks();
  Future<Task> addNewTask(String title, String? description);
  Future<Task> toggleStatus(int taskId);
}

class ServerpodTaskRepository implements TaskRepository {
  final Client _client;

  ServerpodTaskRepository(this._client);

  @override
  Future<List<Task>> fetchAllTasks() async {
    return await _client.task.getTasks();
  }

  @override
  Future<Task> addNewTask(String title, String? description) async {
    return await _client.task.createTask(title, description);
  }

  @override
  Future<Task> toggleStatus(int taskId) async {
    return await _client.task.toggleTaskStatus(taskId);
  }
}`,
            explanation:
              'এখন আপনার UI বা BLoC সরাসরি Serverpod Client চেনে না, তারা কেবল `TaskRepository`-কে চেনে। ফলে ইউনিট টেস্টের সময় মক রিপোজিটরি দিয়ে খুব সহজে টেস্ট করা যাবে।',
          },
        },
      ],
      summary: [
        'Repository Pattern ব্যাকএন্ড ক্লায়েন্টকে UI থেকে বিচ্ছিন্ন রাখে।',
        'এটি টেস্টিং এবং অফলাইন ক্যাশিং যোগ করা সহজ করে তোলে।',
      ],
      officialDocUrl: 'https://docs.serverpod.dev/',
      serverpodVersion: 'Serverpod 2.x+',
    },
    {
      id: 'm9-l2',
      slug: 'bloc-state-management-integration',
      moduleId: 'module-9',
      moduleTitle: 'মডিউল ৯: Flutter আর্কিটেকচার',
      title: 'BLoC স্টেট ম্যানেজমেন্ট দিয়ে Serverpod ডেটা পরিচালনা',
      subtitle: 'Events, States এবং BLoC হ্যান্ডলার ইমপ্লিমেন্টেশন',
      order: 2,
      readingTimeMinutes: 12,
      objectives: [
        'BLoC আর্কিটেকচারে Loading, Success এবং Failure স্টেট তৈরি করা',
        'Serverpod-এর ডেটা BLoC ইভেন্টের মাধ্যমে রিএক্টিভভাবে হ্যান্ডেল করা',
        'ক্লিন আর্কিটেকচার মেনে UI রেন্ডার করা',
      ],
      prerequisites: ['Lesson ১ সম্পন্ন করা'],
      whyImportant:
        'flutter_bloc হলো এন্টারপ্রাইজ Flutter অ্যাপ্লিকেশনের সবচেয়ে জনপ্রিয় স্টেট ম্যানেজমেন্ট। Serverpod-এর সাথে এর যুগলবন্দি একটি পরিপূর্ণ ফুল-স্ট্যাক আর্কিটেকচার উপহার দেয়।',
      sections: [
        {
          id: 's1',
          title: '১. TaskBloc ইমপ্লিমেন্টেশন',
          content: `\`lib/src/bloc/task_bloc.dart\` ফাইলে স্টেট ও ইভেন্ট হ্যান্ডলার:`,
          codeSnippet: {
            language: 'dart',
            filePath: 'school_api_flutter/lib/src/bloc/task_bloc.dart',
            type: 'flutter',
            code: `import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:school_api_client/school_api_client.dart';
import '../repositories/task_repository.dart';

// Events
abstract class TaskEvent {}
class LoadTasksEvent extends TaskEvent {}
class AddTaskEvent extends TaskEvent {
  final String title;
  AddTaskEvent(this.title);
}

// States
abstract class TaskState {}
class TaskLoadingState extends TaskState {}
class TaskLoadedState extends TaskState {
  final List<Task> tasks;
  TaskLoadedState(this.tasks);
}
class TaskErrorState extends TaskState {
  final String message;
  TaskErrorState(this.message);
}

// BLoC
class TaskBloc extends Bloc<TaskEvent, TaskState> {
  final TaskRepository _repository;

  TaskBloc(this._repository) : super(TaskLoadingState()) {
    on<LoadTasksEvent>((event, emit) async {
      emit(TaskLoadingState());
      try {
        final tasks = await _repository.fetchAllTasks();
        emit(TaskLoadedState(tasks));
      } catch (e) {
        emit(TaskErrorState('লোড করতে ব্যর্থ: $e'));
      }
    });

    on<AddTaskEvent>((event, emit) async {
      try {
        await _repository.addNewTask(event.title, null);
        add(LoadTasksEvent()); // স্বয়ংক্রিয়ভাবে তালিকা রিফ্রেশ
      } catch (e) {
        emit(TaskErrorState('টাস্ক তৈরিতে ব্যর্থ: $e'));
      }
    });
  }
}`,
            explanation:
              'BLoC দিয়ে স্টেট ম্যানেজ করায় অ্যাপের ইউজার ইন্টারফেস সম্পূর্ণ প্রিডিক্টেবল ও ক্লিন থাকে।',
          },
        },
      ],
      summary: [
        'BLoC আর্কিটেকচার কোডকে সুশৃঙ্খল ও প্রিডিক্টেবল রাখে।',
        'Serverpod-এর ডেটা রিপোজিটরি হয়ে BLoC স্টেটে রূপান্তরিত হয়।',
      ],
      serverpodVersion: 'Serverpod 2.x+',
    },
  ],
};

