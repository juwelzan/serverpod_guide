import { describe, it, expect } from 'vitest';
import { allModules, getLessonBySlug, getNextAndPrevLesson } from '../src/content/modules';
import { buildSearchIndex, searchLessons } from '../src/lib/search/searchEngine';

describe('Modules and Search Engine', () => {
  it('loads all 14 modules correctly', () => {
    expect(allModules.length).toBe(14);
    expect(allModules[0].number).toBe(1);
    expect(allModules[13].number).toBe(14);
  });

  it('retrieves lesson by slug with associated module', () => {
    const result = getLessonBySlug('what-is-backend');
    expect(result).toBeDefined();
    expect(result?.lesson.title).toContain('ব্যাকএন্ড');
    expect(result?.module.number).toBe(1);
  });

  it('provides correct next and previous lesson navigation', () => {
    const { nextLesson, prevLesson } = getNextAndPrevLesson('what-is-backend');
    expect(prevLesson).toBeUndefined();
    expect(nextLesson).toBeDefined();
    expect(nextLesson?.slug).toBe('rest-vs-serverpod-rpc');
  });

  it('builds search index and finds query results', () => {
    const index = buildSearchIndex(allModules);
    expect(index.length).toBeGreaterThan(0);

    // Search for a command
    const cmdResults = searchLessons('serverpod create', index);
    expect(cmdResults.length).toBeGreaterThan(0);

    // Search for a Bengali keyword
    const bnResults = searchLessons('ডাটাবেস', index);
    expect(bnResults.length).toBeGreaterThan(0);

    // Search for a technical concept
    const conceptResults = searchLessons('Session', index);
    expect(conceptResults.length).toBeGreaterThan(0);
  });
});

