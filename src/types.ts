export type Theme = 'light' | 'dark' | 'galaxy';

export interface Memory {
  id: number;
  image: string;
  caption: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
}

export interface QuizResult {
  title: string;
  description: string;
}
