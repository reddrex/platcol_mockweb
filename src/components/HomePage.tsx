import { useState } from 'react';
import { Search } from 'lucide-react';
import logoImage from 'figma:asset/2d39659df76b8bada6604de61913009a3aa5a5c1.png';

type Language = 'en' | 'es' | 'pt' | 'fr' | 'zh';
type SearchMode = 'semantic' | 'lemma' | 'literal';

interface HomePageProps {
  onSearch: (query: string, language: Language, mode: SearchMode) => void;
}

export function HomePage({ onSearch }: HomePageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('en');
  const [selectedMode, setSelectedMode] = useState<SearchMode>('semantic');

  const languages = [
    { code: 'en' as Language, label: 'English' },
    { code: 'es' as Language, label: 'Spanish' },
    { code: 'pt' as Language, label: 'Portuguese' },
    { code: 'fr' as Language, label: 'French' },
    { code: 'zh' as Language, label: 'Mandarin Chinese' },
  ];

  const searchModes = [
    { 
      id: 'semantic' as SearchMode, 
      label: 'Semantic Search',
      description: 'Find collocations by meaning and context'
    },
    { 
      id: 'lemma' as SearchMode, 
      label: 'Lemma-based Search',
      description: 'Search by base form of words'
    },
    { 
      id: 'literal' as SearchMode, 
      label: 'Literal/Example Search',
      description: 'Search within usage examples'
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery, selectedLanguage, selectedMode);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-3xl space-y-12">
          {/* Title */}
          <div className="text-center">
            <img 
              src={logoImage} 
              alt="PLATCOL" 
              className="h-32 w-auto mx-auto"
            />
          </div>

          {/* Language Selector */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700 text-center">
              Select Language
            </label>
            <div className="flex flex-wrap gap-2 justify-center">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setSelectedLanguage(lang.code)}
                  className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                    selectedLanguage === lang.code
                      ? 'bg-blue-900 text-white border-blue-900'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-blue-900 hover:text-blue-900'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>

          {/* Search Mode Selector */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700 text-center">
              Search Mode
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {searchModes.map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setSelectedMode(mode.id)}
                  className={`p-4 rounded-lg border text-left transition-all ${
                    selectedMode === mode.id
                      ? 'bg-blue-900 text-white border-blue-900'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-blue-900'
                  }`}
                >
                  <div className="font-medium text-sm mb-1">{mode.label}</div>
                  <div className={`text-xs ${
                    selectedMode === mode.id ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {mode.description}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSubmit} className="relative">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for collocations..."
                className="w-full px-6 py-4 pr-14 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors"
              >
                <Search className="size-5" />
              </button>
            </div>
          </form>

          {/* Info Text */}
          <div className="text-center text-sm text-gray-500 space-y-1">
            <p>Search across thousands of English collocations with translations</p>
            <p>in Spanish, Portuguese, French, and Mandarin Chinese</p>
          </div>
        </div>
      </div>
    </div>
  );
}