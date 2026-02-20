import { Search, ChevronDown, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import logoImage from 'figma:asset/296550738ed3656c15b8bcf027e1c7d116a7278e.png';
import { usePageLanguage } from '../contexts/PageLanguageContext';
import { getTranslation } from '../utils/translations';

type SearchMode = 'semantic' | 'lemma' | 'example';
export type Language = 'en' | 'es' | 'pt' | 'fr' | 'zh';

interface HeaderProps {
  onMenuToggle: () => void;
  selectedLanguage: Language;
  onLanguageChange: (language: Language) => void;
  onLogoClick?: () => void;
  showSearchBar?: boolean;
}

export function Header({ onMenuToggle, selectedLanguage, onLanguageChange, onLogoClick, showSearchBar = true }: HeaderProps) {
  const { pageLanguage } = usePageLanguage();
  const [searchMode, setSearchMode] = useState<SearchMode>('lemma');
  const [showModeDropdown, setShowModeDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('searchLanguage') as Language;
    if (savedLanguage && ['en', 'es', 'pt', 'fr', 'zh'].includes(savedLanguage)) {
      onLanguageChange(savedLanguage);
    }
  }, []);

  // Save language to localStorage when it changes
  const handleLanguageChange = (newLanguage: Language) => {
    onLanguageChange(newLanguage);
    localStorage.setItem('searchLanguage', newLanguage);
    setShowLanguageDropdown(false);
  };

  const searchModes = [
    { 
      id: 'lemma' as SearchMode, 
      label: getTranslation('lemmaBasedSearch', pageLanguage), 
      description: getTranslation('searchByWordDescription', pageLanguage) 
    },
    { 
      id: 'semantic' as SearchMode, 
      label: getTranslation('semanticSearchShort', pageLanguage), 
      description: getTranslation('searchWithinDefinitionsDescription', pageLanguage) 
    },
    { 
      id: 'example' as SearchMode, 
      label: getTranslation('exampleBasedSearch', pageLanguage), 
      description: getTranslation('searchWithinExamplesDescription', pageLanguage) 
    },
  ];

  const languages = [
    { id: 'en' as Language, label: getTranslation('english', pageLanguage), flag: '🇬🇧' },
    { id: 'es' as Language, label: getTranslation('spanish', pageLanguage), flag: '🇪🇸' },
    { id: 'pt' as Language, label: getTranslation('portuguese', pageLanguage), flag: '🇵🇹' },
    { id: 'fr' as Language, label: getTranslation('french', pageLanguage), flag: '🇫🇷' },
    { id: 'zh' as Language, label: getTranslation('mandarinChinese', pageLanguage), flag: '🇨🇳' },
  ];

  const currentMode = searchModes.find(mode => mode.id === searchMode);
  const currentLanguage = languages.find(lang => lang.id === selectedLanguage);

  // Abbreviated mode labels for closed state
  const modeAbbreviations = {
    lemma: 'L',
    semantic: 'S',
    example: 'Ex',
  };

  return (
    <header className="border-b border-blue-800 bg-blue-950 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-2 sm:gap-4 lg:gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button 
              onClick={onLogoClick} 
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              aria-label="Go to home page"
            >
              <img src={logoImage} alt="PLATCOL" className="h-12 sm:h-16 lg:h-20 w-auto" />
            </button>
          </div>

          {/* Centered Search Bar Container */}
          <div 
            className={`flex-1 flex justify-center transition-all duration-300 ease-in-out overflow-hidden ${
              showSearchBar 
                ? 'opacity-100 max-w-full' 
                : 'opacity-0 max-w-0 pointer-events-none'
            }`}
          >
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
                      <div 
                        className="fixed inset-0 z-10" 
                        onClick={() => setShowLanguageDropdown(false)}
                      />
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

                {/* Search Mode Dropdown - Minimal when closed */}
                <div className="relative">
                  <button
                    onClick={() => setShowModeDropdown(!showModeDropdown)}
                    className="h-full px-2 sm:px-3 py-2 sm:py-3 border border-blue-800/30 rounded-lg bg-white/95 hover:bg-white shadow-sm flex items-center gap-1 text-sm font-medium text-gray-700 transition-all min-h-[40px] sm:min-h-[44px]"
                  >
                    {modeAbbreviations[searchMode]}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  
                  {showModeDropdown && (
                    <>
                      <div 
                        className="fixed inset-0 z-10" 
                        onClick={() => setShowModeDropdown(false)}
                      />
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
                <button className="px-4 sm:px-5 py-2 sm:py-3 bg-white/95 text-blue-950 rounded-lg hover:bg-white shadow-sm transition-all flex items-center gap-2 min-h-[40px] sm:min-h-[44px] font-medium">
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