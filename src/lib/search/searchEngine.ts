import { Lesson, CourseModule } from '@/types';

export interface SearchResult {
  lessonId: string;
  lessonSlug: string;
  lessonTitle: string;
  moduleTitle: string;
  moduleNumber: number;
  matchedField: 'title' | 'command' | 'filename' | 'code' | 'concept' | 'content';
  snippet: string;
  score: number;
}

export interface SearchableItem {
  lessonSlug: string;
  lessonId: string;
  lessonTitle: string;
  moduleTitle: string;
  moduleNumber: number;
  commands: string[];
  filenames: string[];
  keywords: string[];
  content: string;
}

export function buildSearchIndex(modules: CourseModule[]): SearchableItem[] {
  const items: SearchableItem[] = [];

  for (const mod of modules) {
    for (const lesson of mod.lessons) {
      const commands: string[] = [];
      const filenames: string[] = [];
      const keywords: string[] = [
        ...lesson.objectives,
        ...lesson.prerequisites,
        lesson.subtitle,
      ];

      if (lesson.fileDetails?.filePath) {
        filenames.push(lesson.fileDetails.filePath);
      }

      let contentBuffer = `${lesson.title} ${lesson.subtitle} ${lesson.whyImportant} `;
      if (lesson.realWorldAnalogy) contentBuffer += `${lesson.realWorldAnalogy} `;

      for (const section of (lesson.sections || [])) {
        contentBuffer += `${section.title} ${section.content} `;
        if (section.codeSnippet?.code) {
          contentBuffer += `${section.codeSnippet.code} `;
          if (section.codeSnippet.filePath) {
            filenames.push(section.codeSnippet.filePath);
          }
          if (
            section.codeSnippet.type === 'command' ||
            section.codeSnippet.language === 'bash' ||
            section.codeSnippet.language === 'sh'
          ) {
            commands.push(section.codeSnippet.code);
          }
        }
      }

      if (lesson.commonMistakes) {
        for (const mistake of lesson.commonMistakes) {
          contentBuffer += `${mistake.mistake} ${mistake.solution} `;
        }
      }

      items.push({
        lessonSlug: lesson.slug,
        lessonId: lesson.id,
        lessonTitle: lesson.title,
        moduleTitle: mod.title,
        moduleNumber: mod.number,
        commands,
        filenames,
        keywords,
        content: contentBuffer.toLowerCase(),
      });
    }
  }

  return items;
}

export function searchLessons(
  query: string,
  index: SearchableItem[]
): SearchResult[] {
  const cleanQuery = query.trim().toLowerCase();
  if (!cleanQuery) return [];

  const tokens = cleanQuery.split(/\s+/).filter(Boolean);
  const results: SearchResult[] = [];

  for (const item of index) {
    let score = 0;
    let matchedField: SearchResult['matchedField'] = 'content';
    let snippet = '';

    const lowerTitle = item.lessonTitle.toLowerCase();

    // Exact title match gets huge score
    if (lowerTitle.includes(cleanQuery)) {
      score += 50;
      matchedField = 'title';
      snippet = item.lessonTitle;
    }

    // Check filenames
    for (const file of item.filenames) {
      if (file.toLowerCase().includes(cleanQuery)) {
        score += 35;
        matchedField = 'filename';
        snippet = `File: ${file}`;
        break;
      }
    }

    // Check commands
    for (const cmd of item.commands) {
      if (cmd.toLowerCase().includes(cleanQuery)) {
        score += 40;
        matchedField = 'command';
        snippet = `Command: ${cmd.trim().slice(0, 100)}`;
        break;
      }
    }

    // Check keywords and objectives
    for (const kw of item.keywords) {
      if (kw.toLowerCase().includes(cleanQuery)) {
        score += 25;
        if (!snippet) {
          matchedField = 'concept';
          snippet = kw;
        }
      }
    }

    // Token occurrences in content
    let allTokensFound = true;
    for (const token of tokens) {
      const idx = item.content.indexOf(token);
      if (idx !== -1) {
        score += 5;
        if (!snippet) {
          const start = Math.max(0, idx - 40);
          const end = Math.min(item.content.length, idx + 100);
          snippet = `...${item.content.substring(start, end).trim()}...`;
        }
      } else {
        allTokensFound = false;
      }
    }

    if (allTokensFound && tokens.length > 1) {
      score += 15;
    }

    if (score > 0) {
      results.push({
        lessonId: item.lessonId,
        lessonSlug: item.lessonSlug,
        lessonTitle: item.lessonTitle,
        moduleTitle: item.moduleTitle,
        moduleNumber: item.moduleNumber,
        matchedField,
        snippet: snippet || item.lessonTitle,
        score,
      });
    }
  }

  // Sort descending by score
  return results.sort((a, b) => b.score - a.score);
}
