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
    <div className="space-y-6 px-4 sm:px-6">
      {/* Results header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-gray-200">
        <p className="text-gray-600 text-sm sm:text-base text-center sm:text-left">
          {getTranslation('searchResults', pageLanguage).replace('{count}', results.length.toString()).replace('{query}', query)}
        </p>
      </div>

      {/* Results list */}
      <div className="space-y-4">
        {results.map((result) => (
          <div
            key={result.id}
            onClick={() => onSelectResult(result.id)}
            className="p-4 sm:p-6 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all cursor-pointer"
          >
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <h3 className="text-xl sm:text-2xl font-medium text-gray-900">
                  {result.collocation}
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded-md whitespace-nowrap">
                    {result.structure}
                  </span>
                  <span className="px-2.5 sm:px-3 py-1 bg-blue-100 text-blue-700 text-xs sm:text-sm rounded-md font-medium whitespace-nowrap">
                    {result.level}
                  </span>
                </div>
              </div>
              
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {result.definition}
              </p>
              
              <div className="pt-2">
                <span className="text-xs sm:text-sm text-gray-500">
                  {result.domain}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 sm:gap-4 pt-8">
        <button className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        
        <div className="flex gap-1 sm:gap-2">
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg text-sm sm:text-base transition-colors ${
                page === 1
                  ? 'bg-gray-900 text-white'
                  : 'border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
        
        <button className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );
}