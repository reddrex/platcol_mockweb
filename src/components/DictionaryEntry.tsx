import { useState } from 'react';
import { Share2, Check } from 'lucide-react';

type Tab = 'definition' | 'examples' | 'translations' | 'related' | 'usage-notes';

export function DictionaryEntry() {
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
    const title = 'make progress - PLATCOL';
    const text = 'Check out this collocation entry on PLATCOL';

    // Try to use Web Share API if available (mobile devices)
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url,
        });
        return;
      } catch (error) {
        // User cancelled or share failed, fall through to clipboard
        if ((error as Error).name !== 'AbortError') {
          console.error('Share failed:', error);
        }
      }
    }

    // Fallback: copy to clipboard
    try {
      await navigator.clipboard.writeText(url);
      setShareSuccess(true);
      setTimeout(() => setShareSuccess(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return (
    <article className="max-w-3xl mx-auto space-y-6">
      {/* Main Entry Header - Static, doesn't change with tabs */}
      <header className="space-y-4 pb-6 border-b border-gray-200">
        <h1 className="text-5xl text-gray-900 text-center">make progress</h1>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-3 justify-center">
          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md">
            verb + noun
          </span>
          <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-md font-medium">
            Education & Development
          </span>
          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-md font-medium">
            B1
          </span>
        </div>
      </header>

      {/* Tabs Navigation */}
      <nav className="border-b border-gray-200">
        <div className="flex gap-8 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 text-sm font-medium transition-colors relative ${
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

      {/* Tab Content - Only this section changes */}
      <div className="pt-4">
        <div className="min-h-[500px]">
          {activeTab === 'definition' && <DefinitionTab />}
          {activeTab === 'examples' && <ExamplesTab />}
          {activeTab === 'translations' && <TranslationsTab />}
          {activeTab === 'related' && <RelatedTab />}
          {activeTab === 'usage-notes' && <UsageNotesTab />}
        </div>
      </div>
    </article>
  );
}

function DefinitionTab() {
  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <p className="text-lg text-gray-700 leading-relaxed text-center">
        To move forward or advance in the development, completion, or improvement of something; 
        to achieve gradual advancement toward a goal or objective.
      </p>
    </div>
  );
}

function ExamplesTab() {
  const examples = [
    "The research team has made significant progress in understanding the disease mechanism.",
    "We need to make more progress on this project before the deadline.",
    "She's making good progress in learning Spanish after just three months.",
    "Despite the challenges, the construction workers made steady progress throughout the winter.",
    "The patient is making excellent progress in their recovery.",
    "The negotiations have made little progress over the past week.",
    "I'm pleased to report that we've made considerable progress on the budget proposal.",
    "The students are making rapid progress with their reading comprehension skills.",
    "After months of effort, they finally made substantial progress toward their goal.",
    "The company has made remarkable progress in reducing its carbon footprint.",
  ];

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {examples.map((example, index) => (
        <div key={index} className="pb-6 border-b border-gray-100 last:border-0">
          <p className="text-gray-800 leading-relaxed text-justify">
            <span className="text-gray-400 font-medium">{index + 1}. </span>
            {example.split(/(\bmade? (?:significant|more|good|steady|excellent|little|considerable|rapid|substantial|remarkable) progress\b|\bmaking (?:good|excellent|rapid) progress\b)/gi).map((part, i) => {
              if (part.match(/\bmade? (?:significant|more|good|steady|excellent|little|considerable|rapid|substantial|remarkable) progress\b|\bmaking (?:good|excellent|rapid) progress\b/i)) {
                return <strong key={i} className="font-semibold text-gray-900">{part}</strong>;
              }
              return part;
            })}
          </p>
        </div>
      ))}
    </div>
  );
}

function TranslationsTab() {
  // Mock data structure matching database schema
  // In production: this will come from collocation.translations column
  // Format: array of {language: string, translation: string} objects
  const translations = [
    { language: 'es', translation: 'hacer progresos, avanzar' },
    { language: 'pt', translation: 'fazer progressos, progredir' },
    { language: 'fr', translation: 'faire des progrès, progresser' },
    { language: 'zh', translation: '取得进步 (qǔdé jìnbù), 进展 (jìnzhǎn)' },
  ];

  const languageNames: { [key: string]: string } = {
    'en': 'English',
    'es': 'Spanish',
    'pt': 'Portuguese',
    'fr': 'French',
    'zh': 'Mandarin Chinese',
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {translations.map((item, index) => (
        <div key={index} className="pb-6 border-b border-gray-100 last:border-0 text-center">
          <div className="font-medium text-gray-500 mb-2">
            {languageNames[item.language] || item.language}
          </div>
          <div className="text-gray-800 leading-relaxed">
            {item.translation}
          </div>
        </div>
      ))}
    </div>
  );
}

function RelatedTab() {
  const relatedCollocations = [
    {
      collocation: 'make headway',
      structure: 'verb + noun',
      definition: 'To make progress, especially when dealing with something difficult. Similar meaning but often implies overcoming obstacles.',
    },
    {
      collocation: 'make strides',
      structure: 'verb + noun',
      definition: 'To make significant progress or improvements. Emphasizes notable or rapid advancement.',
    },
    {
      collocation: 'make advances',
      structure: 'verb + noun',
      definition: 'To make progress, particularly in scientific, technical, or professional contexts.',
    },
    {
      collocation: 'move forward',
      structure: 'verb + adverb',
      definition: 'To advance or proceed with something. More general and can be used in various contexts.',
    },
    {
      collocation: 'gain ground',
      structure: 'verb + noun',
      definition: 'To make progress, especially in a competitive situation or when recovering from a setback.',
    },
    {
      collocation: 'come along',
      structure: 'verb + particle',
      definition: 'Informal expression meaning to make progress or develop. Often used in questions: "How is your project coming along?"',
    },
  ];

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {relatedCollocations.map((item, index) => (
        <div key={index} className="space-y-2 pb-6 border-b border-gray-100 last:border-0 text-center">
          <div className="flex items-center justify-center gap-3">
            <div className="text-gray-900 font-medium text-lg">{item.collocation}</div>
            <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">
              {item.structure}
            </span>
          </div>
          <p className="text-gray-600 leading-relaxed">
            {item.definition}
          </p>
        </div>
      ))}
    </div>
  );
}

function UsageNotesTab() {
  const notes = [
    {
      title: 'Common Modifiers',
      content: 'This collocation frequently appears with adjectives indicating the degree or type of progress: "significant progress," "steady progress," "rapid progress," "considerable progress," "little progress," or "slow progress."',
    },
    {
      title: 'Register & Context',
      content: 'Appropriate for both formal and informal contexts. Commonly used in academic writing, professional reports, educational settings, and everyday conversation.',
    },
    {
      title: 'Grammatical Patterns',
      content: 'Typically used in the present continuous (making progress) to describe ongoing advancement, or present perfect (have/has made progress) to describe completed advancement up to the present moment.',
    },
    {
      title: 'Common Collocates',
      content: 'Often appears with prepositions "in," "on," "with," and "toward/towards." Examples: "make progress in learning," "make progress on a project," "make progress with negotiations," "make progress toward a goal."',
    },
    {
      title: 'Learner Tip',
      content: 'This is a fixed collocation. While "do progress" might seem logical, it is incorrect. Always use "make" as the verb. Similarly, the noun form is always singular: "make progress," not "make progresses."',
    },
  ];

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      {notes.map((note, index) => (
        <div key={index} className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-900">{note.title}</h3>
          <p className="text-gray-700 leading-relaxed">
            {note.content}
          </p>
        </div>
      ))}
    </div>
  );
}