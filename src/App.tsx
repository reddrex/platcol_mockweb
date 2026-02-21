import { useState } from 'react';
import { Header, Language } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { SearchResults } from './components/SearchResults';
import { DictionaryEntry } from './components/DictionaryEntry';
import { Sidebar } from './components/Sidebar';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { CookiePolicy } from './components/CookiePolicy';
import { AboutProject } from './components/AboutProject';
import { Publications } from './components/Publications';
import { RelatedPlatforms } from './components/RelatedPlatforms';
import { UserGuide } from './components/UserGuide';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { PageLanguageProvider } from './contexts/PageLanguageContext';

type SearchMode = 'semantic' | 'lemma' | 'literal';
type Page = 'home' | 'results' | 'entry' | 'privacy' | 'terms' | 'cookies' | 'about' | 'publications' | 'related-platforms' | 'user-guide' | 'faq' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('en');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchLanguage, setSearchLanguage] = useState<Language>('en');
  const [searchMode, setSearchMode] = useState<SearchMode>('lemma');

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

  // Handle navigation from footer links
  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
            showSearchBar={currentPage === 'results' || currentPage === 'entry'}
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

          {currentPage === 'privacy' && <PrivacyPolicy />}
          {currentPage === 'terms' && <TermsOfService />}
          {currentPage === 'cookies' && <CookiePolicy />}
          {currentPage === 'about' && <AboutProject />}
          {currentPage === 'publications' && <Publications />}
          {currentPage === 'related-platforms' && <RelatedPlatforms />}
          {currentPage === 'user-guide' && <UserGuide />}
          {currentPage === 'faq' && <FAQ />}
          {currentPage === 'contact' && <Contact />}
        </main>

        {/* Footer - Always visible on all pages */}
        <Footer onNavigate={handleNavigate} />

        {/* Sidebar */}
        <Sidebar 
          isOpen={sidebarOpen} 
          onClose={() => setSidebarOpen(false)}
          onNavigate={handleNavigate}
        />
      </div>
    </PageLanguageProvider>
  );
}