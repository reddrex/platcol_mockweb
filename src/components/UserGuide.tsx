import { usePageLanguage } from '../contexts/PageLanguageContext';
import { 
  Search, 
  BookOpen, 
  Lightbulb, 
  FileText, 
  Filter, 
  Languages, 
  Target,
  Brain,
  Quote,
  Tag,
  List,
  MessageSquare,
  BarChart,
  Globe,
  CheckCircle
} from 'lucide-react';

export function UserGuide() {
  const { pageLanguage } = usePageLanguage();

  const content = {
    en: {
      title: 'User Guide',
      subtitle: 'Learn how to make the most of PLATCOL',
      sections: [
        {
          title: 'Getting Started',
          icon: Languages,
          steps: [
            {
              icon: Languages,
              title: 'Select Your Source Language',
              description: 'Choose your working language from Spanish, English, Portuguese, French, or Mandarin Chinese before starting your search.'
            },
            {
              icon: Search,
              title: 'Use the Search Bar',
              description: 'Enter a word or phrase in the search bar. The search bar is available on the home page and remains accessible throughout your session.'
            }
          ]
        },
        {
          title: 'Search Modes',
          icon: Search,
          description: 'PLATCOL offers three powerful search modes to help you find the collocations you need:',
          modes: [
            {
              icon: List,
              title: 'Lemma-Based Search',
              position: 'Left',
              description: 'Search for collocations using the base form of a word. Ideal for finding all variations of a collocation.'
            },
            {
              icon: Brain,
              title: 'Semantic Search',
              position: 'Middle',
              description: 'Find collocations based on meaning and context. Perfect for discovering related expressions and synonymous collocations.'
            },
            {
              icon: Quote,
              title: 'Example Search',
              position: 'Right',
              description: 'Search within example sentences to see collocations in authentic contexts and real usage.'
            }
          ]
        },
        {
          title: 'Advanced Filtering',
          icon: Filter,
          description: 'Refine your search results with powerful filtering options:',
          filters: [
            {
              icon: Target,
              title: 'Base Word',
              description: 'Filter by the main word in the collocation'
            },
            {
              icon: Tag,
              title: 'Collocate Word',
              description: 'Filter by the accompanying word'
            },
            {
              icon: List,
              title: 'Morphosyntactic Structure',
              description: 'Filter by grammatical patterns (e.g., verb + noun, adjective + noun)'
            },
            {
              icon: BookOpen,
              title: 'Topic & Domain',
              description: 'Filter by subject area or specialized field'
            }
          ]
        },
        {
          title: 'Dictionary Entry Tabs',
          icon: FileText,
          description: 'Each collocation entry provides comprehensive information across five tabs:',
          tabs: [
            {
              icon: FileText,
              title: 'Overview',
              description: 'Definition, translations, and basic collocation information'
            },
            {
              icon: Quote,
              title: 'Examples',
              description: 'Authentic example sentences showing the collocation in context'
            },
            {
              icon: BarChart,
              title: 'Frequency',
              description: 'Usage statistics and frequency data from language corpora'
            },
            {
              icon: MessageSquare,
              title: 'Variations',
              description: 'Alternative forms and related collocations'
            },
            {
              icon: Globe,
              title: 'Translations',
              description: 'Equivalent collocations in all five platform languages'
            }
          ]
        },
        {
          title: 'Tips for Language Learners',
          icon: Lightbulb,
          tips: [
            {
              icon: CheckCircle,
              text: 'Start with lemma-based search to build your foundational vocabulary'
            },
            {
              icon: CheckCircle,
              text: 'Use semantic search to discover natural alternatives and enrich your expression'
            },
            {
              icon: CheckCircle,
              text: 'Study examples to understand proper usage and context'
            },
            {
              icon: CheckCircle,
              text: 'Compare translations across languages to deepen your understanding'
            },
            {
              icon: CheckCircle,
              text: 'Note frequency data to prioritize learning the most common collocations'
            },
            {
              icon: CheckCircle,
              text: 'Explore morphosyntactic patterns to improve grammatical accuracy'
            }
          ]
        }
      ]
    },
    es: {
      title: 'Guía del Usuario',
      subtitle: 'Aprenda a aprovechar al máximo PLATCOL',
      sections: [
        {
          title: 'Primeros Pasos',
          icon: Languages,
          steps: [
            {
              icon: Languages,
              title: 'Seleccione Su Idioma de Origen',
              description: 'Elija su idioma de trabajo entre español, inglés, portugués, francés o chino mandarín antes de comenzar su búsqueda.'
            },
            {
              icon: Search,
              title: 'Use la Barra de Búsqueda',
              description: 'Ingrese una palabra o frase en la barra de búsqueda. La barra está disponible en la página de inicio y permanece accesible durante toda su sesión.'
            }
          ]
        },
        {
          title: 'Modos de Búsqueda',
          icon: Search,
          description: 'PLATCOL ofrece tres potentes modos de búsqueda para ayudarle a encontrar las colocaciones que necesita:',
          modes: [
            {
              icon: List,
              title: 'Búsqueda por Lema',
              position: 'Izquierda',
              description: 'Busque colocaciones usando la forma base de una palabra. Ideal para encontrar todas las variaciones de una colocación.'
            },
            {
              icon: Brain,
              title: 'Búsqueda Semántica',
              position: 'Centro',
              description: 'Encuentre colocaciones basadas en significado y contexto. Perfecto para descubrir expresiones relacionadas y colocaciones sinónimas.'
            },
            {
              icon: Quote,
              title: 'Búsqueda por Ejemplos',
              position: 'Derecha',
              description: 'Busque dentro de oraciones de ejemplo para ver colocaciones en contextos auténticos y uso real.'
            }
          ]
        },
        {
          title: 'Filtrado Avanzado',
          icon: Filter,
          description: 'Refine sus resultados de búsqueda con potentes opciones de filtrado:',
          filters: [
            {
              icon: Target,
              title: 'Palabra Base',
              description: 'Filtre por la palabra principal de la colocación'
            },
            {
              icon: Tag,
              title: 'Palabra Colocada',
              description: 'Filtre por la palabra acompañante'
            },
            {
              icon: List,
              title: 'Estructura Morfosintáctica',
              description: 'Filtre por patrones gramaticales (ej.: verbo + sustantivo, adjetivo + sustantivo)'
            },
            {
              icon: BookOpen,
              title: 'Tema y Dominio',
              description: 'Filtre por área temática o campo especializado'
            }
          ]
        },
        {
          title: 'Pestañas de Entrada del Diccionario',
          icon: FileText,
          description: 'Cada entrada de colocación proporciona información completa en cinco pestañas:',
          tabs: [
            {
              icon: FileText,
              title: 'Resumen',
              description: 'Definición, traducciones e información básica de la colocación'
            },
            {
              icon: Quote,
              title: 'Ejemplos',
              description: 'Oraciones de ejemplo auténticas que muestran la colocación en contexto'
            },
            {
              icon: BarChart,
              title: 'Frecuencia',
              description: 'Estadísticas de uso y datos de frecuencia de corpus lingüísticos'
            },
            {
              icon: MessageSquare,
              title: 'Variaciones',
              description: 'Formas alternativas y colocaciones relacionadas'
            },
            {
              icon: Globe,
              title: 'Traducciones',
              description: 'Colocaciones equivalentes en los cinco idiomas de la plataforma'
            }
          ]
        },
        {
          title: 'Consejos para Estudiantes de Idiomas',
          icon: Lightbulb,
          tips: [
            {
              icon: CheckCircle,
              text: 'Comience con la búsqueda por lema para construir su vocabulario fundamental'
            },
            {
              icon: CheckCircle,
              text: 'Use la búsqueda semántica para descubrir alternativas naturales y enriquecer su expresión'
            },
            {
              icon: CheckCircle,
              text: 'Estudie ejemplos para comprender el uso y contexto adecuados'
            },
            {
              icon: CheckCircle,
              text: 'Compare traducciones entre idiomas para profundizar su comprensión'
            },
            {
              icon: CheckCircle,
              text: 'Note los datos de frecuencia para priorizar el aprendizaje de las colocaciones más comunes'
            },
            {
              icon: CheckCircle,
              text: 'Explore patrones morfosintácticos para mejorar la precisión gramatical'
            }
          ]
        }
      ]
    },
    pt: {
      title: 'Guia do Usuário',
      subtitle: 'Aprenda a aproveitar ao máximo o PLATCOL',
      sections: [
        {
          title: 'Primeiros Passos',
          icon: Languages,
          steps: [
            {
              icon: Languages,
              title: 'Selecione Seu Idioma de Origem',
              description: 'Escolha seu idioma de trabalho entre espanhol, inglês, português, francês ou chinês mandarim antes de começar sua pesquisa.'
            },
            {
              icon: Search,
              title: 'Use a Barra de Pesquisa',
              description: 'Digite uma palavra ou frase na barra de pesquisa. A barra está disponível na página inicial e permanece acessível durante toda a sua sessão.'
            }
          ]
        },
        {
          title: 'Modos de Pesquisa',
          icon: Search,
          description: 'O PLATCOL oferece três modos poderosos de pesquisa para ajudá-lo a encontrar as colocações que você precisa:',
          modes: [
            {
              icon: List,
              title: 'Pesquisa por Lema',
              position: 'Esquerda',
              description: 'Pesquise colocações usando a forma base de uma palavra. Ideal para encontrar todas as variações de uma colocação.'
            },
            {
              icon: Brain,
              title: 'Pesquisa Semântica',
              position: 'Centro',
              description: 'Encontre colocações baseadas em significado e contexto. Perfeito para descobrir expressões relacionadas e colocações sinônimas.'
            },
            {
              icon: Quote,
              title: 'Pesquisa por Exemplos',
              position: 'Direita',
              description: 'Pesquise dentro de frases de exemplo para ver colocações em contextos autênticos e uso real.'
            }
          ]
        },
        {
          title: 'Filtragem Avançada',
          icon: Filter,
          description: 'Refine seus resultados de pesquisa com opções poderosas de filtragem:',
          filters: [
            {
              icon: Target,
              title: 'Palavra Base',
              description: 'Filtre pela palavra principal da colocação'
            },
            {
              icon: Tag,
              title: 'Palavra Colocada',
              description: 'Filtre pela palavra acompanhante'
            },
            {
              icon: List,
              title: 'Estrutura Morfossintática',
              description: 'Filtre por padrões gramaticais (ex.: verbo + substantivo, adjetivo + substantivo)'
            },
            {
              icon: BookOpen,
              title: 'Tema e Domínio',
              description: 'Filtre por área temática ou campo especializado'
            }
          ]
        },
        {
          title: 'Abas de Entrada do Dicionário',
          icon: FileText,
          description: 'Cada entrada de colocação fornece informações abrangentes em cinco abas:',
          tabs: [
            {
              icon: FileText,
              title: 'Resumo',
              description: 'Definição, traduções e informações básicas da colocação'
            },
            {
              icon: Quote,
              title: 'Exemplos',
              description: 'Frases de exemplo autênticas mostrando a colocação em contexto'
            },
            {
              icon: BarChart,
              title: 'Frequência',
              description: 'Estatísticas de uso e dados de frequência de corpora linguísticos'
            },
            {
              icon: MessageSquare,
              title: 'Variações',
              description: 'Formas alternativas e colocações relacionadas'
            },
            {
              icon: Globe,
              title: 'Traduções',
              description: 'Colocações equivalentes nos cinco idiomas da plataforma'
            }
          ]
        },
        {
          title: 'Dicas para Estudantes de Idiomas',
          icon: Lightbulb,
          tips: [
            {
              icon: CheckCircle,
              text: 'Comece com a pesquisa por lema para construir seu vocabulário fundamental'
            },
            {
              icon: CheckCircle,
              text: 'Use a pesquisa semântica para descobrir alternativas naturais e enriquecer sua expressão'
            },
            {
              icon: CheckCircle,
              text: 'Estude exemplos para entender o uso e contexto adequados'
            },
            {
              icon: CheckCircle,
              text: 'Compare traduções entre idiomas para aprofundar sua compreensão'
            },
            {
              icon: CheckCircle,
              text: 'Note os dados de frequência para priorizar o aprendizado das colocações mais comuns'
            },
            {
              icon: CheckCircle,
              text: 'Explore padrões morfossintáticos para melhorar a precisão gramatical'
            }
          ]
        }
      ]
    },
    fr: {
      title: 'Guide de l\'Utilisateur',
      subtitle: 'Apprenez à tirer le meilleur parti de PLATCOL',
      sections: [
        {
          title: 'Premiers Pas',
          icon: Languages,
          steps: [
            {
              icon: Languages,
              title: 'Sélectionnez Votre Langue Source',
              description: 'Choisissez votre langue de travail parmi l\'espagnol, l\'anglais, le portugais, le français ou le chinois mandarin avant de commencer votre recherche.'
            },
            {
              icon: Search,
              title: 'Utilisez la Barre de Recherche',
              description: 'Saisissez un mot ou une phrase dans la barre de recherche. La barre est disponible sur la page d\'accueil et reste accessible tout au long de votre session.'
            }
          ]
        },
        {
          title: 'Modes de Recherche',
          icon: Search,
          description: 'PLATCOL offre trois modes de recherche puissants pour vous aider à trouver les collocations dont vous avez besoin :',
          modes: [
            {
              icon: List,
              title: 'Recherche par Lemme',
              position: 'Gauche',
              description: 'Recherchez des collocations en utilisant la forme de base d\'un mot. Idéal pour trouver toutes les variations d\'une collocation.'
            },
            {
              icon: Brain,
              title: 'Recherche Sémantique',
              position: 'Centre',
              description: 'Trouvez des collocations basées sur le sens et le contexte. Parfait pour découvrir des expressions liées et des collocations synonymes.'
            },
            {
              icon: Quote,
              title: 'Recherche par Exemples',
              position: 'Droite',
              description: 'Recherchez dans les phrases d\'exemple pour voir les collocations dans des contextes authentiques et leur usage réel.'
            }
          ]
        },
        {
          title: 'Filtrage Avancé',
          icon: Filter,
          description: 'Affinez vos résultats de recherche avec des options de filtrage puissantes :',
          filters: [
            {
              icon: Target,
              title: 'Mot de Base',
              description: 'Filtrez par le mot principal de la collocation'
            },
            {
              icon: Tag,
              title: 'Mot Collocatif',
              description: 'Filtrez par le mot accompagnateur'
            },
            {
              icon: List,
              title: 'Structure Morphosyntaxique',
              description: 'Filtrez par modèles grammaticaux (ex. : verbe + nom, adjectif + nom)'
            },
            {
              icon: BookOpen,
              title: 'Thème et Domaine',
              description: 'Filtrez par domaine thématique ou domaine spécialisé'
            }
          ]
        },
        {
          title: 'Onglets d\'Entrée du Dictionnaire',
          icon: FileText,
          description: 'Chaque entrée de collocation fournit des informations complètes sur cinq onglets :',
          tabs: [
            {
              icon: FileText,
              title: 'Aperçu',
              description: 'Définition, traductions et informations de base sur la collocation'
            },
            {
              icon: Quote,
              title: 'Exemples',
              description: 'Phrases d\'exemple authentiques montrant la collocation en contexte'
            },
            {
              icon: BarChart,
              title: 'Fréquence',
              description: 'Statistiques d\'usage et données de fréquence issues de corpus linguistiques'
            },
            {
              icon: MessageSquare,
              title: 'Variations',
              description: 'Formes alternatives et collocations connexes'
            },
            {
              icon: Globe,
              title: 'Traductions',
              description: 'Collocations équivalentes dans les cinq langues de la plateforme'
            }
          ]
        },
        {
          title: 'Conseils pour les Apprenants de Langues',
          icon: Lightbulb,
          tips: [
            {
              icon: CheckCircle,
              text: 'Commencez avec la recherche par lemme pour construire votre vocabulaire fondamental'
            },
            {
              icon: CheckCircle,
              text: 'Utilisez la recherche sémantique pour découvrir des alternatives naturelles et enrichir votre expression'
            },
            {
              icon: CheckCircle,
              text: 'Étudiez les exemples pour comprendre l\'usage et le contexte appropriés'
            },
            {
              icon: CheckCircle,
              text: 'Comparez les traductions entre les langues pour approfondir votre compréhension'
            },
            {
              icon: CheckCircle,
              text: 'Notez les données de fréquence pour prioriser l\'apprentissage des collocations les plus courantes'
            },
            {
              icon: CheckCircle,
              text: 'Explorez les modèles morphosyntaxiques pour améliorer la précision grammaticale'
            }
          ]
        }
      ]
    },
    zh: {
      title: '用户指南',
      subtitle: '学习如何充分利用PLATCOL',
      sections: [
        {
          title: '入门',
          icon: Languages,
          steps: [
            {
              icon: Languages,
              title: '选择您的源语言',
              description: '在开始搜索之前，从西班牙语、英语、葡萄牙语、法语或普通话中选择您的工作语言。'
            },
            {
              icon: Search,
              title: '使用搜索栏',
              description: '在搜索栏中输入单词或短语。搜索栏在主页上可用，并在整个会话期间保持可访问。'
            }
          ]
        },
        {
          title: '搜索模式',
          icon: Search,
          description: 'PLATCOL提供三种强大的搜索模式，帮助您找到所需的搭配：',
          modes: [
            {
              icon: List,
              title: '词元搜索',
              position: '左侧',
              description: '使用单词的基本形式搜索搭配。适合查找搭配的所有变体。'
            },
            {
              icon: Brain,
              title: '语义搜索',
              position: '中间',
              description: '根据含义和上下文查找搭配。非常适合发现相关表达和同义搭配。'
            },
            {
              icon: Quote,
              title: '例句搜索',
              position: '右侧',
              description: '在例句中搜索，在真实的上下文和实际用法中查看搭配。'
            }
          ]
        },
        {
          title: '高级过滤',
          icon: Filter,
          description: '使用强大的过滤选项优化您的搜索结果：',
          filters: [
            {
              icon: Target,
              title: '基础词',
              description: '按搭配中的主要单词过滤'
            },
            {
              icon: Tag,
              title: '搭配词',
              description: '按伴随单词过滤'
            },
            {
              icon: List,
              title: '形态句法结构',
              description: '按语法模式过滤（例如：动词+名词、形容词+名词）'
            },
            {
              icon: BookOpen,
              title: '主题和领域',
              description: '按主题区域或专业领域过滤'
            }
          ]
        },
        {
          title: '词典条目选项卡',
          icon: FileText,
          description: '每个搭配条目在五个选项卡中提供全面信息：',
          tabs: [
            {
              icon: FileText,
              title: '概览',
              description: '定义、翻译和基本搭配信息'
            },
            {
              icon: Quote,
              title: '例句',
              description: '展示搭配在上下文中的真实例句'
            },
            {
              icon: BarChart,
              title: '频率',
              description: '来自语言语料库的使用统计和频率数据'
            },
            {
              icon: MessageSquare,
              title: '变体',
              description: '替代形式和相关搭配'
            },
            {
              icon: Globe,
              title: '翻译',
              description: '平台所有五种语言的等效搭配'
            }
          ]
        },
        {
          title: '语言学习者提示',
          icon: Lightbulb,
          tips: [
            {
              icon: CheckCircle,
              text: '从词元搜索开始，建立您的基础词汇'
            },
            {
              icon: CheckCircle,
              text: '使用语义搜索发现自然替代方案并丰富您的表达'
            },
            {
              icon: CheckCircle,
              text: '学习例句以理解正确的用法和上下文'
            },
            {
              icon: CheckCircle,
              text: '比较不同语言的翻译以加深理解'
            },
            {
              icon: CheckCircle,
              text: '注意频率数据，优先学习最常见的搭配'
            },
            {
              icon: CheckCircle,
              text: '探索形态句法模式以提高语法准确性'
            }
          ]
        }
      ]
    }
  };

  const text = content[pageLanguage];

  return (
    <article className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Header */}
      <header className="text-center mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-3 sm:mb-4">{text.title}</h1>
        <p className="text-lg sm:text-xl text-gray-600">{text.subtitle}</p>
      </header>

      {/* Content Sections */}
      <div className="space-y-12 sm:space-y-16">
        {text.sections.map((section, sectionIndex) => {
          const SectionIcon = section.icon;
          
          return (
            <section key={sectionIndex} className="scroll-mt-8">
              {/* Section Header */}
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <SectionIcon className="w-7 h-7 sm:w-8 sm:h-8 text-blue-900 flex-shrink-0" />
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">{section.title}</h2>
              </div>

              {/* Section Description */}
              {section.description && (
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                  {section.description}
                </p>
              )}

              {/* Getting Started Steps */}
              {section.steps && (
                <div className="grid sm:grid-cols-2 gap-6">
                  {section.steps.map((step, stepIndex) => {
                    const StepIcon = step.icon;
                    return (
                      <div 
                        key={stepIndex}
                        className="bg-blue-50 border border-blue-100 rounded-lg p-6"
                      >
                        <div className="flex items-start gap-3 mb-3">
                          <StepIcon className="w-5 h-5 text-blue-900 flex-shrink-0 mt-0.5" />
                          <h3 className="font-semibold text-gray-900">{step.title}</h3>
                        </div>
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Search Modes */}
              {section.modes && (
                <div className="grid md:grid-cols-3 gap-6">
                  {section.modes.map((mode, modeIndex) => {
                    const ModeIcon = mode.icon;
                    return (
                      <div 
                        key={modeIndex}
                        className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <ModeIcon className="w-6 h-6 text-blue-900" />
                          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            {mode.position}
                          </span>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">{mode.title}</h3>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {mode.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Filters */}
              {section.filters && (
                <div className="grid sm:grid-cols-2 gap-4">
                  {section.filters.map((filter, filterIndex) => {
                    const FilterIcon = filter.icon;
                    return (
                      <div 
                        key={filterIndex}
                        className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-lg p-4"
                      >
                        <FilterIcon className="w-5 h-5 text-blue-900 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{filter.title}</h3>
                          <p className="text-sm text-gray-700">{filter.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Dictionary Entry Tabs */}
              {section.tabs && (
                <div className="space-y-3">
                  {section.tabs.map((tab, tabIndex) => {
                    const TabIcon = tab.icon;
                    return (
                      <div 
                        key={tabIndex}
                        className="flex items-start gap-4 bg-white border border-gray-200 rounded-lg p-5 hover:border-blue-300 transition-colors"
                      >
                        <div className="bg-blue-50 rounded-lg p-3">
                          <TabIcon className="w-5 h-5 text-blue-900" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{tab.title}</h3>
                          <p className="text-sm text-gray-700">{tab.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Tips */}
              {section.tips && (
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 sm:p-8">
                  <div className="space-y-4">
                    {section.tips.map((tip, tipIndex) => {
                      const TipIcon = tip.icon;
                      return (
                        <div key={tipIndex} className="flex items-start gap-3">
                          <TipIcon className="w-5 h-5 text-blue-900 flex-shrink-0 mt-0.5" />
                          <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                            {tip.text}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </section>
          );
        })}
      </div>
    </article>
  );
}
