import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect, ReactNode } from 'react';

interface CollocationResult {
  id: string;
  collocation: string;
  structure: string;
  theme: string;
  cefrLevel: string;
}

interface ResultsNavigationProps {
  results: CollocationResult[];
  currentResultId: string;
  onSelectResult: (id: string) => void;
  onBackToResults: () => void;
  searchQuery?: string;
  rightContent?: ReactNode;
}

export function ResultsNavigation({
  results,
  currentResultId,
  onSelectResult,
  onBackToResults,
  searchQuery,
  rightContent,
}: ResultsNavigationProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  if (results.length === 0) return null;

  const currentIndex = results.findIndex((r) => r.id === currentResultId);
  const currentPosition = currentIndex + 1;
  const totalResults = results.length;

  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < results.length - 1;

  const handlePrevious = () => {
    if (hasPrevious) {
      onSelectResult(results[currentIndex - 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (hasNext) {
      onSelectResult(results[currentIndex + 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="mb-4 pb-2">
      <div className="flex items-center justify-between gap-3">
        {/* Left: Navigation Controls - Only show if more than 1 result */}
        {totalResults > 1 && (
          <div className="flex items-center gap-3">
            {/* Previous Button */}
            <button
              onClick={handlePrevious}
              disabled={!hasPrevious}
              className="p-1.5 rounded hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent transition-colors"
              title="Previous result"
            >
              <ChevronLeft className="w-4 h-4 text-gray-700" />
            </button>

            {/* Result Selector Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                <span className="text-sm text-gray-700">
                  <span className="font-semibold">{currentPosition}</span>
                  <span className="text-gray-400 mx-1">/</span>
                  <span className="text-gray-500">{totalResults}</span>
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 max-h-96 overflow-y-auto bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                  <div className="p-2 border-b border-gray-200 bg-gray-50">
                    <p className="text-xs text-gray-600">
                      {totalResults} {totalResults === 1 ? 'result' : 'results'}
                      {searchQuery && <span> for "{searchQuery}"</span>}
                    </p>
                  </div>
                  <div className="py-1">
                    {results.map((result, index) => (
                      <button
                        key={result.id}
                        onClick={() => {
                          onSelectResult(result.id);
                          setIsDropdownOpen(false);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className={`w-full text-left px-3 py-2 text-sm transition-colors flex items-start gap-2 ${
                          result.id === currentResultId
                            ? 'bg-[#1e3a5f] text-white'
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        <span
                          className={`font-medium mt-0.5 flex-shrink-0 ${
                            result.id === currentResultId ? 'text-blue-200' : 'text-gray-400'
                          }`}
                        >
                          {index + 1}.
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium truncate">{result.collocation}</div>
                          <div className="flex gap-1.5 mt-1 flex-wrap">
                            <span
                              className={`px-1.5 py-0.5 text-xs rounded ${
                                result.id === currentResultId
                                  ? 'bg-white/20 text-white'
                                  : 'bg-gray-100 text-gray-600'
                              }`}
                            >
                              {result.cefrLevel}
                            </span>
                            <span
                              className={`px-1.5 py-0.5 text-xs rounded ${
                                result.id === currentResultId
                                  ? 'bg-white/20 text-white'
                                  : 'bg-gray-100 text-gray-600'
                              }`}
                            >
                              {result.structure}
                            </span>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              disabled={!hasNext}
              className="p-1.5 rounded hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent transition-colors"
              title="Next result"
            >
              <ChevronRight className="w-4 h-4 text-gray-700" />
            </button>
          </div>
        )}

        {/* Right Content - Always show */}
        <div className={totalResults === 1 ? 'ml-auto' : ''}>
          {rightContent}
        </div>
      </div>
    </div>
  );
}