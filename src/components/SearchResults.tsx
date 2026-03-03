import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { usePageLanguage } from '../contexts/PageLanguageContext';
import { getTranslation } from '../utils/translations';
import { useSearch, PAGE_SIZE } from '../hooks/useSearch';
import type { Language, SearchMode, SearchFilters } from '../types/collocation';

export function SearchResults() {
  const { pageLanguage } = usePageLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const query = searchParams.get('q') ?? '';
  const language = (searchParams.get('lang') ?? 'en') as Language;
  const mode = (searchParams.get('mode') ?? 'lemma') as SearchMode;
  const page = Math.max(1, parseInt(searchParams.get('page') ?? '1', 10));

  const filters: SearchFilters = {
    baseWord: searchParams.get('base') ?? undefined,
    collocateWord: searchParams.get('collocate') ?? undefined,
    structure: searchParams.get('structure') ?? undefined,
    domain: searchParams.get('domain') ?? undefined,
  };

  const { results, totalCount, totalPages, loading, error } = useSearch(query, language, mode, filters, page);

  const goToPage = (p: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', String(p));
    setSearchParams(params);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getLanguageName = (langCode: Language) => {
    const langMap: Record<Language, keyof typeof import('../utils/translations').translations> = {
      en: 'english',
      es: 'spanish',
      pt: 'portuguese',
      fr: 'french',
      zh: 'mandarinChinese',
    };
    return getTranslation(langMap[langCode], pageLanguage);
  };

  const getModeName = (searchMode: SearchMode) => {
    const modeMap: Record<SearchMode, keyof typeof import('../utils/translations').translations> = {
      semantic: 'semanticSearch',
      lemma: 'lemmaSearch',
      literal: 'literalSearch',
    };
    return getTranslation(modeMap[searchMode], pageLanguage);
  };

  // Loading state
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-4 text-gray-500">
        <Loader2 className="w-8 h-8 animate-spin" />
        <p>{getTranslation('searching', pageLanguage)}</p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-4 text-center px-4">
        <p className="text-gray-700 font-medium">{getTranslation('errorLoading', pageLanguage)}</p>
        <p className="text-gray-500 text-sm">{error}</p>
      </div>
    );
  }

  // Empty state
  if (!loading && results.length === 0 && query) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-4 text-center px-4">
        <p className="text-gray-700 font-medium text-lg">
          {getTranslation('noResultsFor', pageLanguage)} &ldquo;{query}&rdquo;
        </p>
        <p className="text-gray-500 text-sm">
          {getTranslation('tryDifferentSearch', pageLanguage)}
        </p>
      </div>
    );
  }

  const firstResult = (page - 1) * PAGE_SIZE + 1;
  const lastResult = Math.min(page * PAGE_SIZE, totalCount);

  return (
    <div className="space-y-6 px-4 sm:px-6">
      {/* Results header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-gray-200">
        <p className="text-gray-600 text-sm sm:text-base text-center sm:text-left">
          {totalCount} {getTranslation('resultsFor', pageLanguage)} &ldquo;{query}&rdquo; &middot;{' '}
          {getLanguageName(language)} &middot; {getModeName(mode)}
        </p>
        {totalCount > PAGE_SIZE && (
          <p className="text-gray-400 text-xs text-center sm:text-right">
            {firstResult}–{lastResult} / {totalCount}
          </p>
        )}
      </div>

      {/* Results list */}
      <div className="space-y-4">
        {results.map((result) => (
          <div
            key={result.id}
            onClick={() => navigate(`/entry/${result.id}`)}
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
                  <span className="px-2.5 sm:px-3 py-1 bg-green-100 text-green-800 text-xs sm:text-sm rounded-md font-medium whitespace-nowrap">
                    {result.domain}
                  </span>
                  <span className="px-2.5 sm:px-3 py-1 bg-blue-100 text-blue-700 text-xs sm:text-sm rounded-md font-medium whitespace-nowrap">
                    {result.cefr_level}
                  </span>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {result.definition}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 sm:gap-4 pt-8">
          <button
            onClick={() => goToPage(page - 1)}
            disabled={page <= 1}
            className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <div className="flex gap-1 sm:gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => goToPage(p)}
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg text-sm sm:text-base transition-colors ${
                  p === page
                    ? 'bg-gray-900 text-white'
                    : 'border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {p}
              </button>
            ))}
          </div>

          <button
            onClick={() => goToPage(page + 1)}
            disabled={page >= totalPages}
            className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next page"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
