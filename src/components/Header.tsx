import { Search, ChevronDown, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import logoImage from 'figma:asset/296550738ed3656c15b8bcf027e1c7d116a7278e.png';

type SearchMode = 'semantic' | 'lemma' | 'example';
export type Language = 'en' | 'es' | 'pt' | 'fr' | 'zh';

interface HeaderProps {
  onMenuToggle: () => void;
  selectedLanguage: Language;
  onLanguageChange: (language: Language) => void;
  onLogoClick?: () => void;
}

export function Header({ onMenuToggle, selectedLanguage, onLanguageChange, onLogoClick }: HeaderProps) {
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
    { id: 'lemma' as SearchMode, label: 'Lemma-based', description: 'Search by word or collocation structure' },
    { id: 'semantic' as SearchMode, label: 'Semantic', description: 'Search within definitions' },
    { id: 'example' as SearchMode, label: 'Example-based', description: 'Search within usage examples' },
  ];

  const languages = [
    { id: 'en' as Language, label: 'English', flag: '🇬🇧' },
    { id: 'es' as Language, label: 'Spanish', flag: '🇪🇸' },
    { id: 'pt' as Language, label: 'Portuguese', flag: '🇵🇹' },
    { id: 'fr' as Language, label: 'French', flag: '🇫🇷' },
    { id: 'zh' as Language, label: 'Mandarin Chinese', flag: '🇨🇳' },
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
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity" onClick={onLogoClick}>
              <img src={logoImage} alt="PLATCOL" className="h-20 w-auto" />
            </a>
          </div>

          {/* Centered Search Bar Container */}
          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-3xl">
              <div className="relative flex gap-2">
                {/* Language Selector */}
                <div className="relative">
                  <button
                    onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                    className="h-full px-4 py-3 border border-blue-800/30 rounded-lg bg-white/95 hover:bg-white shadow-sm flex items-center gap-2 text-sm font-medium text-gray-700 transition-all min-h-[44px]"
                  >
                    <span className="text-lg">{currentLanguage?.flag}</span>
                    <ChevronDown className="w-5 h-5" />
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
                    className="h-full px-3 py-3 border border-blue-800/30 rounded-lg bg-white/95 hover:bg-white shadow-sm flex items-center gap-1 text-sm font-medium text-gray-700 transition-all min-h-[44px]"
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
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder={
                      searchMode === 'lemma' 
                        ? "Search by word, base, or collocate..." 
                        : searchMode === 'semantic'
                        ? "Search within definitions..."
                        : "Search within usage examples..."
                    }
                    className="w-full pl-12 pr-4 py-3 border border-blue-800/30 rounded-lg bg-white/95 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent focus:bg-white transition-all min-h-[44px]"
                  />
                </div>

                {/* Search Button */}
                <button className="px-5 py-3 bg-white/95 text-blue-950 rounded-lg hover:bg-white shadow-sm transition-all flex items-center gap-2 min-h-[44px] font-medium">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Menu Toggle */}
          <button
            onClick={onMenuToggle}
            className="h-full px-4 py-3 border border-blue-800/30 rounded-lg bg-white/95 hover:bg-white shadow-sm flex items-center gap-2 text-sm font-medium text-gray-700 transition-all min-h-[44px]"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}