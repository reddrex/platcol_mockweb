import { ChevronLeft, ChevronRight } from 'lucide-react';
import { usePageLanguage } from '../contexts/PageLanguageContext';
import { getTranslation } from '../utils/translations';

type Language = 'en' | 'es' | 'pt' | 'fr' | 'zh';
type SearchMode = 'semantic' | 'lemma' | 'literal';

interface SearchResultsProps {
  query: string;
  language: Language;
  mode: SearchMode;
  onSelectResult: (collocationId: string) => void;
}

export function SearchResults({ query, language, mode, onSelectResult }: SearchResultsProps) {
  const { pageLanguage } = usePageLanguage();
  
  // Mock results data - will come from database
  // This data is in the SEARCH LANGUAGE and should NOT change with page language
  const results = [
    {
      id: '1',
      collocation: 'make progress',
      structure: 'verb + noun',
      domain: 'Education & Development',
      level: 'B1',
      definition: 'To move forward or advance in the development, completion, or improvement of something',
    },
    {
      id: '2',
      collocation: 'make a decision',
      structure: 'verb + noun',
      domain: 'General',
      level: 'A2',
      definition: 'To choose or determine something after consideration',
    },
    {
      id: '3',
      collocation: 'take advantage',
      structure: 'verb + noun',
      domain: 'Business & Strategy',
      level: 'B2',
      definition: 'To use an opportunity or situation for benefit',
    },
    {
      id: '4',
      collocation: 'pay attention',
      structure: 'verb + noun',
      domain: 'Education & Development',
      level: 'A2',
      definition: 'To focus or concentrate on something or someone',
    },
    {
      id: '5',
      collocation: 'reach a conclusion',
      structure: 'verb + noun',
      domain: 'Academic & Research',
      level: 'B2',
      definition: 'To arrive at a final judgment or decision after reasoning',
    },
    {
      id: '6',
      collocation: 'gain experience',
      structure: 'verb + noun',
      domain: 'Professional Development',
      level: 'B1',
      definition: 'To acquire knowledge or skill through practice or exposure',
    },
    {
      id: '7',
      collocation: 'express concern',
      structure: 'verb + noun',
      domain: 'Communication',
      level: 'B2',
      definition: 'To communicate worry or unease about a situation',
    },
    {
      id: '8',
      collocation: 'conduct research',
      structure: 'verb + noun',
      domain: 'Academic & Research',
      level: 'C1',
      definition: 'To carry out systematic investigation or study',
    },
  ];

  // Get language name based on PAGE language (UI translation)
  const getLanguageName = (langCode: Language) => {
    const langMap: { [key in Language]: keyof typeof import('../utils/translations').translations } = {
      'en': 'english',
      'es': 'spanish',
      'pt': 'portuguese',
      'fr': 'french',
      'zh': 'mandarinChinese',
    };
    return getTranslation(langMap[langCode], pageLanguage);
  };

  // Get mode name based on PAGE language (UI translation)
  const getModeName = (searchMode: SearchMode) => {
    const modeMap: { [key in SearchMode]: keyof typeof import('../utils/translations').translations } = {
      'semantic': 'semanticSearch',
      'lemma': 'lemmaSearch',
      'literal': 'literalSearch',
    };
    return getTranslation(modeMap[searchMode], pageLanguage);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Search Info */}
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold text-gray-900">{getTranslation('searchResults', pageLanguage)}</h2>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600">
          <p>
            <span className="font-medium">{getTranslation('query', pageLanguage)}:</span> "{query}"
          </p>
          <p>
            <span className="font-medium">{getTranslation('language', pageLanguage)}:</span> {getLanguageName(language)}
          </p>
          <p>
            <span className="font-medium">{getTranslation('mode', pageLanguage)}:</span> {getModeName(mode)}
          </p>
        </div>
        <p className="text-sm text-gray-500">
          {getTranslation('foundCollocations', pageLanguage)} {results.length} {getTranslation('collocations', pageLanguage)}
        </p>
      </div>

      {/* Results List */}
      <div className="space-y-4">
        {results.map((result) => (
          <button
            key={result.id}
            onClick={() => onSelectResult(result.id)}
            className="w-full bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-900 hover:shadow-md transition-all text-left group"
          >
            <div className="space-y-3">
              {/* Collocation Title & Tags */}
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl text-gray-900 group-hover:text-blue-900 transition-colors">
                  {result.collocation}
                </h3>
                <div className="flex gap-2 flex-shrink-0">
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                    {result.structure}
                  </span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded font-medium">
                    {result.level}
                  </span>
                </div>
              </div>

              {/* Domain */}
              <div className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm rounded-md">
                {result.domain}
              </div>

              {/* Definition */}
              <p className="text-gray-600 leading-relaxed">
                {result.definition}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 pt-4">
        <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
          <ChevronLeft className="size-5" />
        </button>
        <div className="flex gap-1">
          <button className="px-3 py-1 bg-blue-900 text-white rounded-lg">1</button>
          <button className="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">2</button>
          <button className="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">3</button>
        </div>
        <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  );
}