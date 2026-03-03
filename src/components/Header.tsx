import { Search, ChevronDown, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import logoImage from 'figma:asset/296550738ed3656c15b8bcf027e1c7d116a7278e.png';
import { usePageLanguage } from '../contexts/PageLanguageContext';
import { getTranslation } from '../utils/translations';

type SearchMode = 'semantic' | 'lemma' | 'literal';
export type Language = 'en' | 'es' | 'pt' | 'fr' | 'zh';

interface HeaderProps {
  onMenuToggle: () => void;
}

export function Header({ onMenuToggle }: Readonly<HeaderProps>) {
  const { pageLanguage } = usePageLanguage();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [inputValue, setInputValue] = useState(searchParams.get('q') ?? '');
  const [searchMode, setSearchMode] = useState<SearchMode>(
    (searchParams.get('mode') as SearchMode) ?? 'lemma'
  );
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(() => {
    const fromUrl = searchParams.get('lang') as Language;
    if (fromUrl) return fromUrl;
    const saved = localStorage.getItem('searchLanguage') as Language;
    return saved && ['en', 'es', 'pt', 'fr', 'zh'].includes(saved) ? saved : 'en';
  });
  const [showModeDropdown, setShowModeDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  // Sync input value when URL changes (e.g. navigating back)
  useEffect(() => {
    const q = searchParams.get('q');
    if (q !== null) setInputValue(q);
    const lang = searchParams.get('lang') as Language;
    if (lang) setSelectedLanguage(lang);
    const mode = searchParams.get('mode') as SearchMode;
    if (mode) setSearchMode(mode);
  }, [searchParams]);

  const handleLanguageChange = (lang: Language) => {
    setSelectedLanguage(lang);
    localStorage.setItem('searchLanguage', lang);
    setShowLanguageDropdown(false);
    // If on search page, update URL immediately
    if (inputValue.trim()) {
      const params = new URLSearchParams(searchParams);
      params.set('lang', lang);
      params.set('page', '1');
      navigate(`/search?${params.toString()}`);
    }
  };

  const handleSearch = () => {
    if (!inputValue.trim()) return;
    const params = new URLSearchParams({
      q: inputValue.trim(),
      lang: selectedLanguage,
      mode: searchMode,
      page: '1',
    });
    // Preserve advanced filters if present
    ['base', 'collocate', 'structure', 'domain'].forEach((key) => {
      const val = searchParams.get(key);
      if (val) params.set(key, val);
    });
    navigate(`/search?${params.toString()}`);
  };

  const searchModes = [
    {
      id: 'lemma' as SearchMode,
      label: getTranslation('lemmaBasedSearch', pageLanguage),
      description: getTranslation('searchByWordDescription', pageLanguage),
    },
    {
      id: 'semantic' as SearchMode,
      label: getTranslation('semanticSearchShort', pageLanguage),
      description: getTranslation('searchWithinDefinitionsDescription', pageLanguage),
    },
    {
      id: 'literal' as SearchMode,
      label: getTranslation('exampleBasedSearch', pageLanguage),
      description: getTranslation('searchWithinExamplesDescription', pageLanguage),
    },
  ];

  const languages = [
    { id: 'en' as Language, label: getTranslation('english', pageLanguage), flag: '🇬🇧' },
    { id: 'es' as Language, label: getTranslation('spanish', pageLanguage), flag: '🇪🇸' },
    { id: 'pt' as Language, label: getTranslation('portuguese', pageLanguage), flag: '🇵🇹' },
    { id: 'fr' as Language, label: getTranslation('french', pageLanguage), flag: '🇫🇷' },
    { id: 'zh' as Language, label: getTranslation('mandarinChinese', pageLanguage), flag: '🇨🇳' },
  ];

  const currentMode = searchModes.find(m => m.id === searchMode);
  const currentLanguage = languages.find(l => l.id === selectedLanguage);

  const modeAbbreviations: Record<SearchMode, string> = {
    lemma: 'L',
    semantic: 'S',
    literal: 'Ex',
  };

  return (
    <header className="border-b border-blue-800 bg-blue-950 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-2 sm:gap-4 lg:gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Link
              to="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              aria-label="Go to home page"
            >
              <img src={logoImage} alt="PLATCOL" className="h-12 sm:h-16 lg:h-20 w-auto" />
            </Link>
          </div>

          {/* Centered Search Bar */}
          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-3xl">
              <div className="relative flex flex-wrap sm:flex-nowrap gap-2">
                {/* Language Selector */}
                <div className="relative">
                  <button
                    onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                    className="h-full px-3 sm:px-4 py-2 sm:py-3 border border-blue-800/30 rounded-lg bg-white/95 hover:bg-white shadow-sm flex items-center gap-1 sm:gap-2 text-sm font-medium text-gray-700 transition-all min-h-[40px] sm:min-h-[44px]"
                  >
                    <span className="text-base sm:text-lg">{currentLanguage?.flag}</span>
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>

                  {showLanguageDropdown && (
                    <>
                      <div className="fixed inset-0 z-10" onClick={() => setShowLanguageDropdown(false)} />
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                        {languages.map((lang) => (
                          <button
                            key={lang.id}
                            onClick={() => handleLanguageChange(lang.id)}
                            className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg flex items-center gap-3 ${
                              selectedLanguage === lang.id ? 'bg-gray-50' : ''
                            }`}
                          >
                            <span className="text-xl">{lang.flag}</span>
                            <span className="font-medium text-gray-900 text-sm">{lang.label}</span>
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Search Mode Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setShowModeDropdown(!showModeDropdown)}
                    className="h-full px-2 sm:px-3 py-2 sm:py-3 border border-blue-800/30 rounded-lg bg-white/95 hover:bg-white shadow-sm flex items-center gap-1 text-sm font-medium text-gray-700 transition-all min-h-[40px] sm:min-h-[44px]"
                    title={currentMode?.label}
                  >
                    {modeAbbreviations[searchMode]}
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {showModeDropdown && (
                    <>
                      <div className="fixed inset-0 z-10" onClick={() => setShowModeDropdown(false)} />
                      <div className="absolute top-full left-0 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                        {searchModes.map((mode) => (
                          <button
                            key={mode.id}
                            onClick={() => {
                              setSearchMode(mode.id);
                              setShowModeDropdown(false);
                            }}
                            className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                              searchMode === mode.id ? 'bg-gray-50' : ''
                            }`}
                          >
                            <div className="font-medium text-gray-900 text-sm">{mode.label}</div>
                            <div className="text-xs text-gray-500 mt-0.5">{mode.description}</div>
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Search Input */}
                <div className="relative flex-1 w-full sm:w-auto">
                  <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    placeholder={
                      searchMode === 'lemma'
                        ? getTranslation('searchByWord', pageLanguage)
                        : searchMode === 'semantic'
                        ? getTranslation('searchWithinDefinitions', pageLanguage)
                        : getTranslation('searchWithinExamples', pageLanguage)
                    }
                    className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 border border-blue-800/30 rounded-lg bg-white/95 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent focus:bg-white transition-all min-h-[40px] sm:min-h-[44px] text-sm sm:text-base"
                  />
                </div>

                {/* Search Button */}
                <button
                  onClick={handleSearch}
                  className="px-4 sm:px-5 py-2 sm:py-3 bg-white/95 text-blue-950 rounded-lg hover:bg-white shadow-sm transition-all flex items-center gap-2 min-h-[40px] sm:min-h-[44px] font-medium"
                  aria-label="Search"
                >
                  <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Menu Toggle */}
          <button
            onClick={onMenuToggle}
            className="h-full px-3 sm:px-4 py-2 sm:py-3 border border-blue-800/30 rounded-lg bg-white/95 hover:bg-white shadow-sm flex items-center gap-2 text-sm font-medium text-gray-700 transition-all min-h-[40px] sm:min-h-[44px] flex-shrink-0"
          >
            <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
