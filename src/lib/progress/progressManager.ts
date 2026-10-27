import { UserProgress } from '@/types';

const STORAGE_KEY = 'serverpod_bangla_academy_progress_v1';

const defaultProgress: UserProgress = {
  completedLessons: [],
  currentLessonSlug: 'what-is-backend',
  bookmarks: [],
  quizScores: {},
  lastVisitedAt: new Date().toISOString(),
};

export function getLocalProgress(): UserProgress {
  if (typeof window === 'undefined') {
    return defaultProgress;
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress;
    const parsed = JSON.parse(raw);
    return {
      ...defaultProgress,
      ...parsed,
    };
  } catch (e) {
    console.warn('Could not read user progress from localStorage', e);
    return defaultProgress;
  }
}

export function saveLocalProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.warn('Could not save user progress to localStorage', e);
  }
}

export function toggleLessonCompletion(slug: string): UserProgress {
  const current = getLocalProgress();
  const exists = current.completedLessons.includes(slug);
  const updatedCompleted = exists
    ? current.completedLessons.filter((s) => s !== slug)
    : [...current.completedLessons, slug];

  const updated: UserProgress = {
    ...current,
    completedLessons: updatedCompleted,
    currentLessonSlug: slug,
    lastVisitedAt: new Date().toISOString(),
  };

  saveLocalProgress(updated);
  return updated;
}

export function toggleBookmark(slug: string): UserProgress {
  const current = getLocalProgress();
  const exists = current.bookmarks.includes(slug);
  const updatedBookmarks = exists
    ? current.bookmarks.filter((s) => s !== slug)
    : [...current.bookmarks, slug];

  const updated: UserProgress = {
    ...current,
    bookmarks: updatedBookmarks,
  };

  saveLocalProgress(updated);
  return updated;
}

export function recordQuizScore(
  moduleId: string,
  score: number,
  total: number
): UserProgress {
  const current = getLocalProgress();
  const passed = score / total >= 0.7; // 70% passing grade
  const updated: UserProgress = {
    ...current,
    quizScores: {
      ...current.quizScores,
      [moduleId]: { score, total, passed },
    },
    lastVisitedAt: new Date().toISOString(),
  };

  saveLocalProgress(updated);
  return updated;
}

export function resetProgress(): UserProgress {
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.warn('Error clearing localStorage', e);
    }
  }
  return defaultProgress;
}

