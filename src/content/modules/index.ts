import { CourseModule, Lesson } from '@/types';
import { module1 } from './module1';
import { module2 } from './module2';
import { module3 } from './module3';
import { module4 } from './module4';
import { module5 } from './module5';
import { module6 } from './module6';
import { module7 } from './module7';
import { module8 } from './module8';
import { module9 } from './module9';
import { module10 } from './module10';
import { module11 } from './module11';
import { module12 } from './module12';
import { module13 } from './module13';
import { module14 } from './module14';

export const allModules: CourseModule[] = [
  module1,
  module2,
  module3,
  module4,
  module5,
  module6,
  module7,
  module8,
  module9,
  module10,
  module11,
  module12,
  module13,
  module14,
];

export function getAllModules(): CourseModule[] {
  return allModules;
}

export function getModuleBySlug(slug: string): CourseModule | undefined {
  return allModules.find((m) => m.slug === slug);
}

export function getAllLessons(): Lesson[] {
  return allModules.flatMap((m) => m.lessons);
}

export function getTotalLessonsCount(): number {
  return getAllLessons().length;
}

export function getLessonBySlug(slug: string): {
  lesson: Lesson;
  module: CourseModule;
} | undefined {
  for (const mod of allModules) {
    const lesson = mod.lessons.find((l) => l.slug === slug);
    if (lesson) {
      return { lesson, module: mod };
    }
  }
  return undefined;
}

export function getNextAndPrevLesson(currentSlug: string): {
  prevLesson?: Lesson;
  nextLesson?: Lesson;
} {
  const lessons = getAllLessons();
  const currentIndex = lessons.findIndex((l) => l.slug === currentSlug);

  if (currentIndex === -1) return {};

  return {
    prevLesson: currentIndex > 0 ? lessons[currentIndex - 1] : undefined,
    nextLesson: currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : undefined,
  };
}

