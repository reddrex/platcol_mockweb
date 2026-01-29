import { useState } from 'react';
import { Header, Language } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { SearchResults } from './components/SearchResults';
import { DictionaryEntry } from './components/DictionaryEntry';
import { Sidebar } from './components/Sidebar';
import { PageLanguageProvider } from './contexts/PageLanguageContext';

type SearchMode = 'semantic' | 'lemma' | 'literal';
type Page = 'home' | 'results' | 'entry';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('en');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchLanguage, setSearchLanguage] = useState<Language>('en');
  const [searchMode, setSearchMode] = useState<SearchMode>('semantic');

  const handleSearch = (query: string, language: Language, mode: SearchMode) => {
    setSearchQuery(query);
    setSearchLanguage(language);
    setSearchMode(mode);
    setCurrentPage('results');
  };

  const handleSelectResult = (collocationId: string) => {
    setCurrentPage('entry');
  };

  const handleLogoClick = () => {
    setCurrentPage('home');
  };

  return (
    <PageLanguageProvider>
      <div className="min-h-screen bg-white flex flex-col">
        {/* Header - Visible only on results and entry pages */}
        {currentPage !== 'home' && (
          <Header 
            onMenuToggle={() => setSidebarOpen(true)} 
            selectedLanguage={selectedLanguage}
            onLanguageChange={setSelectedLanguage}
            onLogoClick={handleLogoClick}
            showSearchBar={true}
          />
        )}

        {/* Main Content */}
        <main className="flex-1">
          {currentPage === 'home' && (
            <HomePage 
              onSearch={handleSearch}
              onMenuToggle={() => setSidebarOpen(true)}
            />
          )}
          
          {currentPage === 'results' && (
            <div className="container mx-auto px-4 py-12">
              <SearchResults
                query={searchQuery}
                language={searchLanguage}
                mode={searchMode}
                onSelectResult={handleSelectResult}
              />
            </div>
          )}
          
          {currentPage === 'entry' && (
            <div className="container mx-auto px-4 py-12">
              <DictionaryEntry />
            </div>
          )}
        </main>

        {/* Footer - Always visible on all pages */}
        <Footer />

        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      </div>
    </PageLanguageProvider>
  );
}