import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
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

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';
  const showHeader = !isHome;

  return (
    <PageLanguageProvider>
      <div className="min-h-screen bg-white flex flex-col">
        {showHeader && (
          <Header onMenuToggle={() => setSidebarOpen(true)} />
        )}

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onMenuToggle={() => setSidebarOpen(true)} />} />
            <Route path="/search" element={
              <div className="container mx-auto px-4 py-12">
                <SearchResults />
              </div>
            } />
            <Route path="/entry/:id" element={
              <div className="container mx-auto px-4 py-12">
                <DictionaryEntry />
              </div>
            } />
            <Route path="/about" element={<AboutProject />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/related-platforms" element={<RelatedPlatforms />} />
            <Route path="/user-guide" element={<UserGuide />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/cookies" element={<CookiePolicy />} />
          </Routes>
        </main>

        <Footer />

        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
      </div>
    </PageLanguageProvider>
  );
}
