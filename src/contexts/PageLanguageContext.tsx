import React, { createContext, useContext, useState, ReactNode } from 'react';

export type PageLanguage = 'en' | 'es' | 'pt' | 'fr' | 'zh';

interface PageLanguageContextType {
  pageLanguage: PageLanguage;
  setPageLanguage: (lang: PageLanguage) => void;
}

const PageLanguageContext = createContext<PageLanguageContextType | undefined>(undefined);

export function PageLanguageProvider({ children }: { children: ReactNode }) {
  const [pageLanguage, setPageLanguage] = useState<PageLanguage>('en');

  return (
    <PageLanguageContext.Provider value={{ pageLanguage, setPageLanguage }}>
      {children}
    </PageLanguageContext.Provider>
  );
}

export function usePageLanguage() {
  const context = useContext(PageLanguageContext);
  if (context === undefined) {
    throw new Error('usePageLanguage must be used within a PageLanguageProvider');
  }
  return context;
}
