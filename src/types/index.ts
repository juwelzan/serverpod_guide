export interface QuizQuestion {
  id: string;
  question: string;
  type: 'multiple-choice' | 'true-false' | 'code-output' | 'find-error' | 'command';
  codeSnippet?: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface CodeSnippet {
  code: string;
  language: string;
  filePath?: string;
  type?: 'server' | 'client' | 'flutter' | 'config' | 'generated' | 'command';
  highlightLines?: number[];
  explanation?: string;
}

export interface LessonMistake {
  mistake: string;
  solution: string;
}

export interface LessonSection {
  id: string;
  title: string;
  content: string; // Markdown or detailed Bengali text
  codeSnippet?: CodeSnippet;
  callout?: {
    type: 'tip' | 'warning' | 'info' | 'important';
    title: string;
    message: string;
  };
}

export interface Lesson {
  id: string;
  slug: string;
  moduleId: string;
  moduleTitle: string;
  title: string;
  subtitle: string;
  order: number;
  readingTimeMinutes: number;
  objectives: string[];
  prerequisites: string[];
  whyImportant: string;
  realWorldAnalogy?: string;
  sections: LessonSection[];
  architectureDiagram?: string;
  fileDetails?: {
    filePath: string;
    purpose: string;
    whoEdits: 'developer' | 'generated' | 'both';
    relatedFiles: string[];
  };
  commonMistakes?: LessonMistake[];
  practiceExercise?: {
    title: string;
    task: string;
    hint: string;
    solutionCode?: string;
  };
  quiz?: QuizQuestion[];
  summary: string[];
  officialDocUrl?: string;
  serverpodVersion: string;
}

export interface CourseModule {
  id: string;
  number: number;
  title: string;
  slug: string;
  description: string;
  estimatedHours: string;
  iconName: string;
  lessons: Lesson[];
  quizzes?: QuizQuestion[];
}

export interface UserProgress {
  completedLessons: string[]; // lesson slugs
  currentLessonSlug: string;
  bookmarks: string[];
  quizScores: Record<string, { score: number; total: number; passed: boolean }>;
  lastVisitedAt: string;
}

export interface GlossaryItem {
  term: string;
  slug: string;
  englishDefinition: string;
  bengaliExplanation: string;
  analogy: string;
  exampleSnippet?: string;
  category: 'core' | 'database' | 'networking' | 'auth' | 'flutter' | 'devops';
  relatedLessons: { title: string; slug: string }[];
}

export interface ProjectShowcase {
  id: string;
  title: string;
  tagline: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Production';
  description: string;
  techStack: string[];
  features: string[];
  architectureOverview: string;
  folderStructure: string;
  dbSchemaSnippet?: string;
  endpointListSnippet?: string;
  githubSampleUrl?: string;
  lessons: { title: string; slug: string }[];
}

