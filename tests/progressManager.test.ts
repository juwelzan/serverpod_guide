import { describe, it, expect, beforeEach } from 'vitest';
import {
  getLocalProgress,
  saveLocalProgress,
  toggleLessonCompletion,
  toggleBookmark,
  recordQuizScore,
  resetProgress,
} from '../src/lib/progress/progressManager';

describe('progressManager', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('returns default progress when nothing is saved', () => {
    const progress = getLocalProgress();
    expect(progress.completedLessons).toEqual([]);
    expect(progress.bookmarks).toEqual([]);
    expect(progress.quizScores).toEqual({});
  });

  it('toggles lesson completion on and off correctly', () => {
    let p = toggleLessonCompletion('what-is-backend');
    expect(p.completedLessons).toContain('what-is-backend');

    p = toggleLessonCompletion('what-is-backend');
    expect(p.completedLessons).not.toContain('what-is-backend');
  });

  it('records bookmarks accurately', () => {
    let p = toggleBookmark('dart-serverpod-overview');
    expect(p.bookmarks).toContain('dart-serverpod-overview');
    p = toggleBookmark('dart-serverpod-overview');
    expect(p.bookmarks).not.toContain('dart-serverpod-overview');
  });

  it('records quiz scores and calculates pass status', () => {
    const p = recordQuizScore('module-1', 4, 5);
    expect(p.quizScores['module-1']).toBeDefined();
    expect(p.quizScores['module-1'].passed).toBe(true);
    expect(p.quizScores['module-1'].score).toBe(4);
  });

  it('resets progress cleanly', () => {
    toggleLessonCompletion('test-slug');
    const p = resetProgress();
    expect(p.completedLessons).toEqual([]);
  });
});

