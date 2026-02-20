import { useState } from 'react';
import { Search, ChevronDown, ChevronUp, Menu } from 'lucide-react';
import logoImage from 'figma:asset/41cab91203e471dcdec6be6d1be14dbcb44a92aa.png';
import { usePageLanguage } from '../contexts/PageLanguageContext';
import { getTranslation } from '../utils/translations';

type Language = 'en' | 'es' | 'pt' | 'fr' | 'zh';
type SearchMode = 'semantic' | 'lemma' | 'literal';

interface AdvancedFilters {
  baseWord: string;
  collocateWord: string;
  structure: string;
  domain: string;
}

interface HomePageProps {
  onSearch: (query: string, language: Language, mode: SearchMode) => void;
  onMenuToggle?: () => void;
}

// Mock collocation data for autocomplete
const collocationsByLanguage: Record<Language, string[]> = {
  en: [
    'make a decision',
    'make progress',
    'make an effort',
    'take action',
    'take responsibility',
    'take into account',
    'strong argument',
    'strong possibility',
    'strong evidence',
    'heavy rain',
    'heavy traffic',
    'heavy workload',
    'pay attention',
    'pay a visit',
    'deep understanding',
    'deep concern',
    'break the ice',
    'break the news',
    'catch a cold',
    'catch attention',
  ],
  es: [
    'tomar una decisión',
    'tomar medidas',
    'hacer un esfuerzo',
    'prestar atención',
    'dar una oportunidad',
    'dar las gracias',
    'hacer caso',
    'hacer frente',
    'llevar a cabo',
    'llevar la contraria',
    'poner en marcha',
    'poner de manifiesto',
    'tener en cuenta',
    'tener lugar',
    'echar de menos',
    'echar un vistazo',
  ],
  pt: [
    'tomar uma decisão',
    'tomar medidas',
    'fazer um esforço',
    'prestar atenção',
    'dar uma oportunidade',
    'dar as boas-vindas',
    'fazer questão',
    'fazer face',
    'levar a cabo',
    'levar em conta',
    'pôr em prática',
    'pôr de parte',
    'ter em conta',
    'ter lugar',
  ],
  fr: [
    'prendre une décision',
    'prendre des mesures',
    'faire un effort',
    'faire attention',
    'donner une chance',
    'donner raison',
    'mettre en œuvre',
    'mettre en place',
    'tenir compte',
    'tenir parole',
    'rendre compte',
    'rendre service',
    'avoir lieu',
    'avoir raison',
  ],
  zh: [
    '做决定',
    '做出努力',
    '采取措施',
    '采取行动',
    '注意',
    '付出代价',
    '取得进展',
    '取得成功',
    '达成协议',
    '达到目的',
    '提出问题',
    '提高水平',
    '解决问题',
    '实现目标',
  ],
};

export function HomePage({ onSearch, onMenuToggle }: HomePageProps) {
  const { pageLanguage } = usePageLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('en');
  const [selectedMode, setSelectedMode] = useState<SearchMode>('lemma');
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  const [filters, setFilters] = useState<AdvancedFilters>({
    baseWord: '',
    collocateWord: '',
    structure: '',
    domain: '',
  });

  // Filter suggestions based on search query and selected language
  const suggestions = searchQuery.trim().length > 0
    ? collocationsByLanguage[selectedLanguage].filter((collocation) =>
        collocation.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 8) // Limit to 8 suggestions
    : [];

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setShowSuggestions(true);
    setSelectedSuggestionIndex(-1);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    setSelectedSuggestionIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showSuggestions || suggestions.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedSuggestionIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedSuggestionIndex((prev) => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === 'Enter' && selectedSuggestionIndex >= 0) {
      e.preventDefault();
      setSearchQuery(suggestions[selectedSuggestionIndex]);
      setShowSuggestions(false);
      setSelectedSuggestionIndex(-1);
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
      setSelectedSuggestionIndex(-1);
    }
  };

  const languages = [
    { code: 'en' as Language, label: getTranslation('english', pageLanguage) },
    { code: 'es' as Language, label: getTranslation('spanish', pageLanguage) },
    { code: 'pt' as Language, label: getTranslation('portuguese', pageLanguage) },
    { code: 'fr' as Language, label: getTranslation('french', pageLanguage) },
    { code: 'zh' as Language, label: getTranslation('mandarinChinese', pageLanguage) },
  ];

  const searchModes = [
    { 
      id: 'lemma' as SearchMode, 
      label: getTranslation('lemmaSearch', pageLanguage),
      description: getTranslation('lemmaSearchDesc', pageLanguage)
    },
    { 
      id: 'semantic' as SearchMode, 
      label: getTranslation('semanticSearch', pageLanguage),
      description: getTranslation('semanticSearchDesc', pageLanguage)
    },
    { 
      id: 'literal' as SearchMode, 
      label: getTranslation('literalSearch', pageLanguage),
      description: getTranslation('literalSearchDesc', pageLanguage)
    },
  ];

  const structures = [
    'Verb + Noun',
    'Adjective + Noun',
    'Noun + Noun',
    'Adverb + Adjective',
    'Verb + Adverb',
    'Noun + Verb',
    'Verb + Preposition',
    'Adjective + Preposition',
  ];

  const domains = [
    'Academic',
    'Business',
    'Technology',
    'Medicine',
    'Law',
    'Science',
    'Arts',
    'Sports',
    'Politics',
    'Education',
    'General',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery, selectedLanguage, selectedMode);
    }
  };

  return (
    <div className="flex flex-col relative">
      {/* Skip to main content link for keyboard users */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-900 focus:text-white focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* Floating Menu Button */}
      {onMenuToggle && (
        <button
          onClick={onMenuToggle}
          className="fixed top-4 sm:top-6 right-4 sm:right-6 z-50 p-2.5 sm:p-3 bg-blue-900 text-white rounded-lg shadow-lg hover:bg-blue-800 transition-colors focus:outline-none focus:ring-4 focus:ring-blue-400"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      )}

      {/* Hero Section */}
      <div id="main-content" className="flex items-center justify-center px-4 py-8 sm:py-12 md:py-16">
        <div className="w-full max-w-3xl space-y-8 sm:space-y-10 md:space-y-12">
          {/* Title */}
          <div className="text-center">
            <h1 className="sr-only">PLATCOL - Multilingual Collocation Dictionary</h1>
            <img 
              src={logoImage} 
              alt="PLATCOL - Platform for Collocations - Multilingual dictionary containing collocations in Spanish, English, Portuguese, French, and Mandarin Chinese" 
              className="h-40 sm:h-52 md:h-64 w-auto mx-auto"
            />
          </div>

          {/* Language Selector */}
          <div className="space-y-3">
            <label 
              id="language-label" 
              className="block text-sm sm:text-base font-semibold text-gray-900 text-center"
            >
              {getTranslation('selectLanguage', pageLanguage)}
            </label>
            <div 
              role="radiogroup" 
              aria-labelledby="language-label"
              className="flex flex-wrap gap-2 justify-center"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  role="radio"
                  aria-checked={selectedLanguage === lang.code}
                  onClick={() => setSelectedLanguage(lang.code)}
                  className={`px-3 sm:px-4 py-2 rounded-lg border text-xs sm:text-sm font-medium transition-all focus:outline-none focus:ring-4 focus:ring-blue-400 ${
                    selectedLanguage === lang.code
                      ? 'bg-blue-900 text-white border-blue-900'
                      : 'bg-white text-gray-900 border-gray-400 hover:border-blue-900 hover:text-blue-900'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>

          {/* Search Mode Selector */}
          <div className="space-y-3">
            <label 
              id="search-mode-label" 
              className="block text-sm sm:text-base font-semibold text-gray-900 text-center"
            >
              {getTranslation('searchModeLabel', pageLanguage)}
            </label>
            <div 
              role="radiogroup" 
              aria-labelledby="search-mode-label"
              className="grid grid-cols-1 md:grid-cols-3 gap-3"
            >
              {searchModes.map((mode) => (
                <button
                  key={mode.id}
                  role="radio"
                  aria-checked={selectedMode === mode.id}
                  onClick={() => setSelectedMode(mode.id)}
                  className={`p-4 rounded-lg border text-left transition-all focus:outline-none focus:ring-4 focus:ring-blue-400 ${
                    selectedMode === mode.id
                      ? 'bg-blue-900 text-white border-blue-900'
                      : 'bg-white text-gray-900 border-gray-400 hover:border-blue-900'
                  }`}
                >
                  <div className="font-semibold text-sm mb-1">{mode.label}</div>
                  <div className={`text-xs ${
                    selectedMode === mode.id ? 'text-blue-100' : 'text-gray-700'
                  }`}>
                    {mode.description}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Advanced Filters */}
          <div className="space-y-3">
            <button
              type="button"
              onClick={() => setShowAdvanced(!showAdvanced)}
              aria-expanded={showAdvanced}
              aria-controls="advanced-filters"
              className="w-full flex items-center justify-center gap-2 text-sm sm:text-base font-medium text-gray-900 hover:text-blue-900 transition-colors focus:outline-none focus:ring-4 focus:ring-blue-400 rounded px-4 py-2"
            >
              {getTranslation('advancedSearchOptions', pageLanguage)}
              {showAdvanced ? <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" /> : <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>

            {showAdvanced && (
              <div id="advanced-filters" className="bg-gray-50 border border-gray-300 rounded-lg p-4 sm:p-6 space-y-4">
                {/* Base Word and Collocate Word */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="base-word-input" className="block text-sm font-semibold text-gray-900 mb-2">
                      {getTranslation('baseWordLabel', pageLanguage)}
                    </label>
                    <input
                      id="base-word-input"
                      type="text"
                      value={filters.baseWord}
                      onChange={(e) => setFilters({ ...filters, baseWord: e.target.value })}
                      placeholder={getTranslation('baseWordPlaceholder', pageLanguage)}
                      className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-400 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-transparent bg-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="collocate-word-input" className="block text-sm font-semibold text-gray-900 mb-2">
                      {getTranslation('collocateWordLabel', pageLanguage)}
                    </label>
                    <input
                      id="collocate-word-input"
                      type="text"
                      value={filters.collocateWord}
                      onChange={(e) => setFilters({ ...filters, collocateWord: e.target.value })}
                      placeholder={getTranslation('collocateWordPlaceholder', pageLanguage)}
                      className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-400 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-transparent bg-white"
                    />
                  </div>
                </div>

                {/* Morphosyntactic Structure */}
                <div>
                  <label htmlFor="structure-select" className="block text-sm font-semibold text-gray-900 mb-2">
                    {getTranslation('morphoStructureLabel', pageLanguage)}
                  </label>
                  <select
                    id="structure-select"
                    value={filters.structure}
                    onChange={(e) => setFilters({ ...filters, structure: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-400 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-transparent bg-white appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23374151' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 0.75rem center',
                      paddingRight: '2.5rem'
                    }}
                  >
                    <option value="">{getTranslation('allStructures', pageLanguage)}</option>
                    {structures.map((structure) => (
                      <option key={structure} value={structure}>
                        {structure}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Topic/Domain */}
                <div>
                  <label htmlFor="domain-select" className="block text-sm font-semibold text-gray-900 mb-2">
                    {getTranslation('topicDomainLabel', pageLanguage)}
                  </label>
                  <select
                    id="domain-select"
                    value={filters.domain}
                    onChange={(e) => setFilters({ ...filters, domain: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-400 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-transparent bg-white appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23374151' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 0.75rem center',
                      paddingRight: '2.5rem'
                    }}
                  >
                    <option value="">{getTranslation('allDomains', pageLanguage)}</option>
                    {domains.map((domain) => (
                      <option key={domain} value={domain}>
                        {domain}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Clear Filters Button */}
                <button
                  type="button"
                  onClick={() => setFilters({ baseWord: '', collocateWord: '', structure: '', domain: '' })}
                  className="text-xs sm:text-sm text-blue-900 hover:text-blue-700 hover:underline font-semibold focus:outline-none focus:ring-4 focus:ring-blue-400 rounded px-2 py-1"
                >
                  {getTranslation('clearAllFilters', pageLanguage)}
                </button>
              </div>
            )}
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSubmit} className="relative">
            <label htmlFor="main-search-input" className="sr-only">
              Search for collocations
            </label>
            <div className="relative">
              <input
                id="main-search-input"
                type="text"
                value={searchQuery}
                onChange={handleSearchInputChange}
                onKeyDown={handleKeyDown}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                onFocus={() => searchQuery.trim().length > 0 && setShowSuggestions(true)}
                placeholder={getTranslation('searchPlaceholder', pageLanguage)}
                aria-describedby="search-description"
                aria-autocomplete="list"
                aria-controls="autocomplete-suggestions"
                aria-expanded={showSuggestions && suggestions.length > 0}
                aria-activedescendant={
                  selectedSuggestionIndex >= 0
                    ? `suggestion-${selectedSuggestionIndex}`
                    : undefined
                }
                autoComplete="off"
                className="w-full px-6 py-4 pr-14 text-lg border border-gray-400 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-transparent"
              />
              <button
                type="submit"
                aria-label="Search"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors focus:outline-none focus:ring-4 focus:ring-blue-400"
              >
                <Search className="size-5" />
              </button>
            </div>
            {showSuggestions && suggestions.length > 0 && (
              <ul
                id="autocomplete-suggestions"
                role="listbox"
                aria-label="Collocation suggestions"
                className="absolute left-0 right-0 z-10 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-64 overflow-y-auto"
              >
                {suggestions.map((suggestion, index) => (
                  <li
                    key={suggestion}
                    id={`suggestion-${index}`}
                    role="option"
                    aria-selected={index === selectedSuggestionIndex}
                    className={`px-6 py-3 cursor-pointer text-gray-900 hover:bg-blue-50 transition-colors ${
                      index === selectedSuggestionIndex ? 'bg-blue-100' : ''
                    }`}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      handleSuggestionClick(suggestion);
                    }}
                    onMouseEnter={() => setSelectedSuggestionIndex(index)}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </form>

          {/* Spacer */}
          <div className="h-12" aria-hidden="true"></div>
        </div>
      </div>
    </div>
  );
}