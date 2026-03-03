import { useState } from 'react';
import { Share2, Check, ArrowLeft, Loader2 } from 'lucide-react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useCollocation } from '../hooks/useCollocation';
import type { CollocationDetail, Example, TranslationLink, RelatedCollocation, UsageNote } from '../types/collocation';

type Tab = 'definition' | 'examples' | 'translations' | 'related' | 'usage-notes';

const languageFlags: Record<string, string> = {
  en: '🇬🇧',
  es: '🇪🇸',
  pt: '🇵🇹',
  fr: '🇫🇷',
  zh: '🇨🇳',
};

const languageNames: Record<string, string> = {
  en: 'English',
  es: 'Spanish',
  pt: 'Portuguese',
  fr: 'French',
  zh: 'Mandarin Chinese',
};

export function DictionaryEntry() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { collocation, loading, error } = useCollocation(id);
  const [activeTab, setActiveTab] = useState<Tab>('definition');
  const [shareSuccess, setShareSuccess] = useState(false);

  const tabs = [
    { id: 'definition' as Tab, label: 'Definition' },
    { id: 'examples' as Tab, label: 'Usage Examples' },
    { id: 'translations' as Tab, label: 'Translations' },
    { id: 'related' as Tab, label: 'Related Collocations' },
    { id: 'usage-notes' as Tab, label: 'Usage Notes' },
  ];

  const handleShare = async () => {
    const url = window.location.href;
    const title = collocation ? `${collocation.collocation} - PLATCOL` : 'PLATCOL';
    const text = 'Check out this collocation entry on PLATCOL';

    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
        return;
      } catch (err) {
        if ((err as Error).name !== 'AbortError') console.error('Share failed:', err);
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setShareSuccess(true);
      setTimeout(() => setShareSuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-4 text-gray-500">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  if (error || !collocation) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-4 text-center px-4">
        <p className="text-gray-700 font-medium">Entry not found.</p>
        <button
          onClick={() => navigate(-1)}
          className="text-blue-700 hover:underline text-sm flex items-center gap-1"
        >
          <ArrowLeft className="w-4 h-4" /> Go back
        </button>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto space-y-6 px-4 sm:px-6">
      {/* Back button + Share */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to results
        </button>
        <button
          onClick={handleShare}
          className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-500 hover:text-gray-900 border border-gray-200 rounded-lg hover:border-gray-300 transition-all"
          aria-label="Share this entry"
        >
          {shareSuccess ? <Check className="w-4 h-4 text-green-600" /> : <Share2 className="w-4 h-4" />}
          {shareSuccess ? 'Copied!' : 'Share'}
        </button>
      </div>

      {/* Main Entry Header */}
      <header className="space-y-4 pb-6 border-b border-gray-200">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 text-center">
          {collocation.collocation}
        </h1>
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
          <span className="px-2.5 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded-md">
            {collocation.structure}
          </span>
          <span className="px-2.5 sm:px-3 py-1 bg-green-100 text-green-800 text-xs sm:text-sm rounded-md font-medium">
            {collocation.domain}
          </span>
          <span className="px-2.5 sm:px-3 py-1 bg-blue-100 text-blue-700 text-xs sm:text-sm rounded-md font-medium">
            {collocation.cefr_level}
          </span>
        </div>
      </header>

      {/* Tabs Navigation */}
      <nav className="border-b border-gray-200 -mx-4 sm:mx-0">
        <div className="flex gap-4 sm:gap-6 md:gap-8 justify-start sm:justify-center overflow-x-auto px-4 sm:px-0 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 text-xs sm:text-sm font-medium transition-colors relative whitespace-nowrap flex-shrink-0 ${
                activeTab === tab.id
                  ? 'text-gray-900'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900" />
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* Tab Content */}
      <div className="pt-4">
        <div className="min-h-[400px] sm:min-h-[500px]">
          {activeTab === 'definition' && <DefinitionTab definition={collocation.definition} />}
          {activeTab === 'examples' && <ExamplesTab examples={collocation.examples} collocation={collocation.collocation} />}
          {activeTab === 'translations' && <TranslationsTab translations={collocation.translations} />}
          {activeTab === 'related' && <RelatedTab related={collocation.related} />}
          {activeTab === 'usage-notes' && <UsageNotesTab notes={collocation.usage_notes} />}
        </div>
      </div>
    </article>
  );
}

function DefinitionTab({ definition }: Readonly<{ definition: string }>) {
  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <p className="text-lg text-gray-700 leading-relaxed text-center">{definition}</p>
    </div>
  );
}

function ExamplesTab({ examples, collocation }: Readonly<{ examples: Example[]; collocation: string }>) {
  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {examples.map((example, index) => (
        <div key={index} className="pb-6 border-b border-gray-100 last:border-0">
          <p className="text-gray-800 leading-relaxed text-justify">
            <span className="text-gray-400 font-medium">{index + 1}. </span>
            {example.sentence.split(new RegExp(`(${collocation})`, 'i')).map((part, i) =>
              part.toLowerCase() === collocation.toLowerCase()
                ? <strong key={i} className="font-semibold text-gray-900">{part}</strong>
                : part
            )}
          </p>
        </div>
      ))}
    </div>
  );
}

function TranslationsTab({ translations }: Readonly<{ translations: TranslationLink[] }>) {
  if (translations.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        No translations available yet.
      </div>
    );
  }

  return (
    <div className="space-y-4 max-w-2xl mx-auto">
      {translations.map((item) => (
        <Link
          key={item.id}
          to={`/entry/${item.id}`}
          className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all group"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">{languageFlags[item.language] ?? '🌐'}</span>
            <div>
              <div className="text-xs text-gray-500 mb-0.5">{languageNames[item.language] ?? item.language}</div>
              <div className="text-gray-900 font-medium group-hover:text-blue-900 transition-colors">
                {item.collocation}
              </div>
            </div>
          </div>
          <ArrowLeft className="w-4 h-4 text-gray-400 rotate-180 group-hover:text-blue-600 transition-colors" />
        </Link>
      ))}
    </div>
  );
}

function RelatedTab({ related }: Readonly<{ related: RelatedCollocation[] }>) {
  if (related.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        No related collocations available yet.
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {related.map((item) => (
        <Link
          key={item.id}
          to={`/entry/${item.id}`}
          className="block space-y-2 pb-6 border-b border-gray-100 last:border-0 text-center hover:bg-gray-50 rounded-lg p-3 transition-colors"
        >
          <div className="flex items-center justify-center gap-3">
            <div className="text-gray-900 font-medium text-lg hover:text-blue-900 transition-colors">
              {item.collocation}
            </div>
            {item.structure && (
              <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">
                {item.structure}
              </span>
            )}
          </div>
          {item.definition && (
            <p className="text-gray-600 leading-relaxed text-sm">{item.definition}</p>
          )}
        </Link>
      ))}
    </div>
  );
}

function UsageNotesTab({ notes }: Readonly<{ notes: UsageNote[] }>) {
  if (notes.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        No usage notes available yet.
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      {notes.map((note, index) => (
        <div key={index} className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-900">{note.title}</h3>
          <p className="text-gray-700 leading-relaxed">{note.content}</p>
        </div>
      ))}
    </div>
  );
}
