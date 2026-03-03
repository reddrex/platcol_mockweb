export type Language = 'en' | 'es' | 'pt' | 'fr' | 'zh';
export type SearchMode = 'lemma' | 'semantic' | 'literal';

export interface SearchFilters {
  baseWord?: string;
  collocateWord?: string;
  structure?: string;
  domain?: string;
}

export interface CollocationResult {
  id: string;
  language: Language;
  collocation: string;
  base_word: string;
  collocate: string;
  structure: string;
  domain: string;
  cefr_level: string;
  definition: string;
}

export interface UsageNote {
  title: string;
  content: string;
}

export interface Example {
  sentence: string;
  sort_order: number;
}

export interface TranslationLink {
  id: string;
  language: Language;
  collocation: string;
}

export interface RelatedCollocation {
  id: string;
  collocation: string;
  structure: string;
  definition: string;
}

export interface CollocationDetail extends CollocationResult {
  usage_notes: UsageNote[];
  examples: Example[];
  translations: TranslationLink[];
  related: RelatedCollocation[];
}
