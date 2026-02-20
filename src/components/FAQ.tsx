import { useState } from 'react';
import { usePageLanguage } from '../contexts/PageLanguageContext';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  category: string;
  items: FAQItem[];
}

export function FAQ() {
  const { pageLanguage } = usePageLanguage();
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const content = {
    en: {
      title: 'Frequently Asked Questions',
      subtitle: 'Find answers to common questions about PLATCOL',
      categories: [
        {
          category: 'General',
          items: [
            {
              question: 'What is PLATCOL?',
              answer: 'PLATCOL (Platform of Collocations) is a multilingual dictionary specifically designed for language learners. It contains collocations in Spanish, English, Portuguese, French, and Mandarin Chinese, with translations between all five languages.'
            },
            {
              question: 'What is a collocation?',
              answer: 'A collocation is a natural combination of words that frequently occur together in a language. For example, "make a decision" (not "do a decision") or "strong coffee" (not "powerful coffee"). Learning collocations helps you sound more natural and fluent.'
            },
            {
              question: 'Is PLATCOL free to use?',
              answer: 'Yes, PLATCOL is completely free to use. Our mission is to support language learners and researchers worldwide with high-quality lexicographic resources.'
            },
            {
              question: 'Do I need to create an account?',
              answer: 'No account is required to search and browse collocations in PLATCOL. You can start using the platform immediately by selecting your source language and entering a search query.'
            }
          ]
        },
        {
          category: 'Using PLATCOL',
          items: [
            {
              question: 'How do I start searching?',
              answer: 'First, select your source language (Spanish, English, Portuguese, French, or Mandarin Chinese) on the home page. Then, enter a word or phrase in the search bar and choose one of the three search modes: lemma-based, semantic, or example search.'
            },
            {
              question: 'What are the different search modes?',
              answer: 'PLATCOL offers three search modes: (1) Lemma-based search finds collocations using the base form of words, (2) Semantic search discovers collocations based on meaning and context, and (3) Example search looks for collocations within authentic example sentences.'
            },
            {
              question: 'How do I filter my search results?',
              answer: 'You can refine results using advanced filters including base word selection, collocate word selection, morphosyntactic structure (grammatical patterns), and topic/domain filtering. These filters help you find exactly what you need.'
            },
            {
              question: 'What information is included in each entry?',
              answer: 'Each dictionary entry provides comprehensive information across five tabs: Overview (definition and basic info), Examples (authentic usage), Frequency (usage statistics), Variations (alternative forms), and Translations (equivalents in all five languages).'
            }
          ]
        },
        {
          category: 'Languages & Translations',
          items: [
            {
              question: 'Which languages does PLATCOL support?',
              answer: 'PLATCOL supports five languages: Spanish, English, Portuguese, French, and Mandarin Chinese. You can search in any of these languages and view translations in all the others.'
            },
            {
              question: 'Can I search in multiple languages at once?',
              answer: 'No, you need to select one source language for your search. However, once you find a collocation, you can view its translations and equivalents in all five supported languages through the Translations tab.'
            },
            {
              question: 'Are the translations direct or contextual?',
              answer: 'Our translations are contextual and based on authentic language use. We provide equivalent collocations that are natural in the target language, not word-for-word translations.'
            }
          ]
        },
        {
          category: 'Technical & Access',
          items: [
            {
              question: 'Is PLATCOL mobile-friendly?',
              answer: 'Yes, PLATCOL is fully responsive and works seamlessly on desktop computers, tablets, and mobile phones. You can access the platform from any device with a web browser.'
            },
            {
              question: 'Can I use PLATCOL offline?',
              answer: 'No, PLATCOL requires an internet connection to access the dictionary database and search functionality. We recommend bookmarking the site for easy access.'
            },
            {
              question: 'How often is PLATCOL updated?',
              answer: 'We regularly update PLATCOL with new collocations, improved translations, and additional example sentences based on the latest language corpus research.'
            }
          ]
        },
        {
          category: 'Academic & Research',
          items: [
            {
              question: 'How can I cite PLATCOL in my research?',
              answer: 'Please visit our Publications page for the recommended citation format and related academic publications. We encourage proper attribution when using PLATCOL in academic work.'
            },
            {
              question: 'Can I use PLATCOL for teaching?',
              answer: 'Absolutely! PLATCOL is an excellent resource for language teachers. You can use it to prepare lessons, create exercises, and help students improve their collocational competence.'
            },
            {
              question: 'What methodology is used to compile the dictionary?',
              answer: 'PLATCOL is built using corpus-based lexicography methods, drawing from extensive language corpora to ensure authenticity and frequency data. Our approach is grounded in contemporary linguistic research.'
            }
          ]
        }
      ]
    },
    es: {
      title: 'Preguntas Frecuentes',
      subtitle: 'Encuentre respuestas a preguntas comunes sobre PLATCOL',
      categories: [
        {
          category: 'General',
          items: [
            {
              question: '¿Qué es PLATCOL?',
              answer: 'PLATCOL (Plataforma de Colocaciones) es un diccionario multilingüe diseñado específicamente para estudiantes de idiomas. Contiene colocaciones en español, inglés, portugués, francés y chino mandarín, con traducciones entre los cinco idiomas.'
            },
            {
              question: '¿Qué es una colocación?',
              answer: 'Una colocación es una combinación natural de palabras que ocurren frecuentemente juntas en un idioma. Por ejemplo, "tomar una decisión" o "café fuerte". Aprender colocaciones te ayuda a sonar más natural y fluido.'
            },
            {
              question: '¿Es PLATCOL de uso gratuito?',
              answer: 'Sí, PLATCOL es completamente gratuito. Nuestra misión es apoyar a estudiantes de idiomas e investigadores de todo el mundo con recursos lexicográficos de alta calidad.'
            },
            {
              question: '¿Necesito crear una cuenta?',
              answer: 'No se requiere cuenta para buscar y explorar colocaciones en PLATCOL. Puede comenzar a usar la plataforma inmediatamente seleccionando su idioma de origen e ingresando una consulta de búsqueda.'
            }
          ]
        },
        {
          category: 'Usando PLATCOL',
          items: [
            {
              question: '¿Cómo empiezo a buscar?',
              answer: 'Primero, seleccione su idioma de origen (español, inglés, portugués, francés o chino mandarín) en la página de inicio. Luego, ingrese una palabra o frase en la barra de búsqueda y elija uno de los tres modos de búsqueda: por lema, semántica o por ejemplos.'
            },
            {
              question: '¿Cuáles son los diferentes modos de búsqueda?',
              answer: 'PLATCOL ofrece tres modos de búsqueda: (1) Búsqueda por lema encuentra colocaciones usando la forma base de las palabras, (2) Búsqueda semántica descubre colocaciones basadas en significado y contexto, y (3) Búsqueda por ejemplos busca colocaciones dentro de oraciones de ejemplo auténticas.'
            },
            {
              question: '¿Cómo filtro mis resultados de búsqueda?',
              answer: 'Puede refinar los resultados usando filtros avanzados incluyendo selección de palabra base, selección de palabra colocada, estructura morfosintáctica (patrones gramaticales) y filtrado por tema/dominio. Estos filtros le ayudan a encontrar exactamente lo que necesita.'
            },
            {
              question: '¿Qué información incluye cada entrada?',
              answer: 'Cada entrada del diccionario proporciona información completa en cinco pestañas: Resumen (definición e información básica), Ejemplos (uso auténtico), Frecuencia (estadísticas de uso), Variaciones (formas alternativas) y Traducciones (equivalentes en los cinco idiomas).'
            }
          ]
        },
        {
          category: 'Idiomas y Traducciones',
          items: [
            {
              question: '¿Qué idiomas admite PLATCOL?',
              answer: 'PLATCOL admite cinco idiomas: español, inglés, portugués, francés y chino mandarín. Puede buscar en cualquiera de estos idiomas y ver traducciones en todos los demás.'
            },
            {
              question: '¿Puedo buscar en múltiples idiomas a la vez?',
              answer: 'No, debe seleccionar un idioma de origen para su búsqueda. Sin embargo, una vez que encuentre una colocación, puede ver sus traducciones y equivalentes en los cinco idiomas admitidos a través de la pestaña Traducciones.'
            },
            {
              question: '¿Las traducciones son directas o contextuales?',
              answer: 'Nuestras traducciones son contextuales y se basan en el uso auténtico del idioma. Proporcionamos colocaciones equivalentes que son naturales en el idioma de destino, no traducciones palabra por palabra.'
            }
          ]
        },
        {
          category: 'Técnico y Acceso',
          items: [
            {
              question: '¿PLATCOL es compatible con dispositivos móviles?',
              answer: 'Sí, PLATCOL es completamente responsive y funciona perfectamente en computadoras de escritorio, tabletas y teléfonos móviles. Puede acceder a la plataforma desde cualquier dispositivo con un navegador web.'
            },
            {
              question: '¿Puedo usar PLATCOL sin conexión?',
              answer: 'No, PLATCOL requiere una conexión a Internet para acceder a la base de datos del diccionario y la funcionalidad de búsqueda. Recomendamos agregar el sitio a favoritos para un acceso fácil.'
            },
            {
              question: '¿Con qué frecuencia se actualiza PLATCOL?',
              answer: 'Actualizamos regularmente PLATCOL con nuevas colocaciones, traducciones mejoradas y oraciones de ejemplo adicionales basadas en las últimas investigaciones de corpus lingüísticos.'
            }
          ]
        },
        {
          category: 'Académico e Investigación',
          items: [
            {
              question: '¿Cómo puedo citar PLATCOL en mi investigación?',
              answer: 'Visite nuestra página de Publicaciones para el formato de cita recomendado y publicaciones académicas relacionadas. Alentamos la atribución adecuada al usar PLATCOL en trabajos académicos.'
            },
            {
              question: '¿Puedo usar PLATCOL para enseñar?',
              answer: '¡Absolutamente! PLATCOL es un excelente recurso para profesores de idiomas. Puede usarlo para preparar lecciones, crear ejercicios y ayudar a los estudiantes a mejorar su competencia colocacional.'
            },
            {
              question: '¿Qué metodología se usa para compilar el diccionario?',
              answer: 'PLATCOL se construye utilizando métodos de lexicografía basada en corpus, extrayendo de extensos corpus lingüísticos para garantizar autenticidad y datos de frecuencia. Nuestro enfoque se basa en la investigación lingüística contemporánea.'
            }
          ]
        }
      ]
    },
    pt: {
      title: 'Perguntas Frequentes',
      subtitle: 'Encontre respostas para perguntas comuns sobre o PLATCOL',
      categories: [
        {
          category: 'Geral',
          items: [
            {
              question: 'O que é PLATCOL?',
              answer: 'PLATCOL (Plataforma de Colocações) é um dicionário multilíngue projetado especificamente para estudantes de idiomas. Contém colocações em espanhol, inglês, português, francês e chinês mandarim, com traduções entre os cinco idiomas.'
            },
            {
              question: 'O que é uma colocação?',
              answer: 'Uma colocação é uma combinação natural de palavras que ocorrem frequentemente juntas em um idioma. Por exemplo, "tomar uma decisão" ou "café forte". Aprender colocações ajuda você a soar mais natural e fluente.'
            },
            {
              question: 'O PLATCOL é gratuito?',
              answer: 'Sim, o PLATCOL é completamente gratuito. Nossa missão é apoiar estudantes de idiomas e pesquisadores em todo o mundo com recursos lexicográficos de alta qualidade.'
            },
            {
              question: 'Preciso criar uma conta?',
              answer: 'Não é necessária conta para pesquisar e explorar colocações no PLATCOL. Você pode começar a usar a plataforma imediatamente selecionando seu idioma de origem e digitando uma consulta de pesquisa.'
            }
          ]
        },
        {
          category: 'Usando o PLATCOL',
          items: [
            {
              question: 'Como começo a pesquisar?',
              answer: 'Primeiro, selecione seu idioma de origem (espanhol, inglês, português, francês ou chinês mandarim) na página inicial. Em seguida, digite uma palavra ou frase na barra de pesquisa e escolha um dos três modos de pesquisa: por lema, semântica ou por exemplos.'
            },
            {
              question: 'Quais são os diferentes modos de pesquisa?',
              answer: 'O PLATCOL oferece três modos de pesquisa: (1) Pesquisa por lema encontra colocações usando a forma base das palavras, (2) Pesquisa semântica descobre colocações baseadas em significado e contexto, e (3) Pesquisa por exemplos busca colocações dentro de frases de exemplo autênticas.'
            },
            {
              question: 'Como filtro meus resultados de pesquisa?',
              answer: 'Você pode refinar os resultados usando filtros avançados incluindo seleção de palavra base, seleção de palavra colocada, estrutura morfossintática (padrões gramaticais) e filtragem por tema/domínio. Esses filtros ajudam você a encontrar exatamente o que precisa.'
            },
            {
              question: 'Que informações estão incluídas em cada entrada?',
              answer: 'Cada entrada do dicionário fornece informações abrangentes em cinco abas: Resumo (definição e informações básicas), Exemplos (uso autêntico), Frequência (estatísticas de uso), Variações (formas alternativas) e Traduções (equivalentes nos cinco idiomas).'
            }
          ]
        },
        {
          category: 'Idiomas e Traduções',
          items: [
            {
              question: 'Quais idiomas o PLATCOL suporta?',
              answer: 'O PLATCOL suporta cinco idiomas: espanhol, inglês, português, francês e chinês mandarim. Você pode pesquisar em qualquer um desses idiomas e ver traduções em todos os outros.'
            },
            {
              question: 'Posso pesquisar em múltiplos idiomas ao mesmo tempo?',
              answer: 'Não, você precisa selecionar um idioma de origem para sua pesquisa. No entanto, uma vez que encontre uma colocação, você pode ver suas traduções e equivalentes nos cinco idiomas suportados através da aba Traduções.'
            },
            {
              question: 'As traduções são diretas ou contextuais?',
              answer: 'Nossas traduções são contextuais e baseadas no uso autêntico do idioma. Fornecemos colocações equivalentes que são naturais no idioma de destino, não traduções palavra por palavra.'
            }
          ]
        },
        {
          category: 'Técnico e Acesso',
          items: [
            {
              question: 'O PLATCOL é compatível com dispositivos móveis?',
              answer: 'Sim, o PLATCOL é totalmente responsivo e funciona perfeitamente em computadores desktop, tablets e telefones celulares. Você pode acessar a plataforma de qualquer dispositivo com um navegador web.'
            },
            {
              question: 'Posso usar o PLATCOL offline?',
              answer: 'Não, o PLATCOL requer uma conexão com a internet para acessar o banco de dados do dicionário e a funcionalidade de pesquisa. Recomendamos adicionar o site aos favoritos para facilitar o acesso.'
            },
            {
              question: 'Com que frequência o PLATCOL é atualizado?',
              answer: 'Atualizamos regularmente o PLATCOL com novas colocações, traduções aprimoradas e frases de exemplo adicionais baseadas nas pesquisas mais recentes de corpus linguísticos.'
            }
          ]
        },
        {
          category: 'Acadêmico e Pesquisa',
          items: [
            {
              question: 'Como posso citar o PLATCOL na minha pesquisa?',
              answer: 'Visite nossa página de Publicações para o formato de citação recomendado e publicações acadêmicas relacionadas. Incentivamos a atribuição adequada ao usar o PLATCOL em trabalhos acadêmicos.'
            },
            {
              question: 'Posso usar o PLATCOL para ensinar?',
              answer: 'Absolutamente! O PLATCOL é um excelente recurso para professores de idiomas. Você pode usá-lo para preparar aulas, criar exercícios e ajudar os alunos a melhorar sua competência colocacional.'
            },
            {
              question: 'Qual metodologia é usada para compilar o dicionário?',
              answer: 'O PLATCOL é construído usando métodos de lexicografia baseada em corpus, extraindo de extensos corpora linguísticos para garantir autenticidade e dados de frequência. Nossa abordagem é fundamentada na pesquisa linguística contemporânea.'
            }
          ]
        }
      ]
    },
    fr: {
      title: 'Questions Fréquentes',
      subtitle: 'Trouvez des réponses aux questions courantes sur PLATCOL',
      categories: [
        {
          category: 'Général',
          items: [
            {
              question: 'Qu\'est-ce que PLATCOL ?',
              answer: 'PLATCOL (Plateforme de Collocations) est un dictionnaire multilingue conçu spécifiquement pour les apprenants de langues. Il contient des collocations en espagnol, anglais, portugais, français et chinois mandarin, avec des traductions entre les cinq langues.'
            },
            {
              question: 'Qu\'est-ce qu\'une collocation ?',
              answer: 'Une collocation est une combinaison naturelle de mots qui apparaissent fréquemment ensemble dans une langue. Par exemple, "prendre une décision" ou "café fort". Apprendre les collocations vous aide à paraître plus naturel et fluide.'
            },
            {
              question: 'PLATCOL est-il gratuit ?',
              answer: 'Oui, PLATCOL est entièrement gratuit. Notre mission est de soutenir les apprenants de langues et les chercheurs du monde entier avec des ressources lexicographiques de haute qualité.'
            },
            {
              question: 'Dois-je créer un compte ?',
              answer: 'Aucun compte n\'est requis pour rechercher et parcourir les collocations dans PLATCOL. Vous pouvez commencer à utiliser la plateforme immédiatement en sélectionnant votre langue source et en entrant une requête de recherche.'
            }
          ]
        },
        {
          category: 'Utilisation de PLATCOL',
          items: [
            {
              question: 'Comment commencer à rechercher ?',
              answer: 'Tout d\'abord, sélectionnez votre langue source (espagnol, anglais, portugais, français ou chinois mandarin) sur la page d\'accueil. Ensuite, saisissez un mot ou une phrase dans la barre de recherche et choisissez l\'un des trois modes de recherche : par lemme, sémantique ou par exemples.'
            },
            {
              question: 'Quels sont les différents modes de recherche ?',
              answer: 'PLATCOL offre trois modes de recherche : (1) La recherche par lemme trouve des collocations en utilisant la forme de base des mots, (2) La recherche sémantique découvre des collocations basées sur le sens et le contexte, et (3) La recherche par exemples cherche des collocations dans des phrases d\'exemple authentiques.'
            },
            {
              question: 'Comment filtrer mes résultats de recherche ?',
              answer: 'Vous pouvez affiner les résultats en utilisant des filtres avancés incluant la sélection du mot de base, la sélection du mot collocatif, la structure morphosyntaxique (modèles grammaticaux) et le filtrage par thème/domaine. Ces filtres vous aident à trouver exactement ce dont vous avez besoin.'
            },
            {
              question: 'Quelles informations sont incluses dans chaque entrée ?',
              answer: 'Chaque entrée de dictionnaire fournit des informations complètes sur cinq onglets : Aperçu (définition et informations de base), Exemples (usage authentique), Fréquence (statistiques d\'usage), Variations (formes alternatives) et Traductions (équivalents dans les cinq langues).'
            }
          ]
        },
        {
          category: 'Langues et Traductions',
          items: [
            {
              question: 'Quelles langues PLATCOL prend-il en charge ?',
              answer: 'PLATCOL prend en charge cinq langues : espagnol, anglais, portugais, français et chinois mandarin. Vous pouvez rechercher dans n\'importe laquelle de ces langues et voir les traductions dans toutes les autres.'
            },
            {
              question: 'Puis-je rechercher dans plusieurs langues à la fois ?',
              answer: 'Non, vous devez sélectionner une langue source pour votre recherche. Cependant, une fois que vous trouvez une collocation, vous pouvez voir ses traductions et équivalents dans les cinq langues prises en charge via l\'onglet Traductions.'
            },
            {
              question: 'Les traductions sont-elles directes ou contextuelles ?',
              answer: 'Nos traductions sont contextuelles et basées sur l\'usage linguistique authentique. Nous fournissons des collocations équivalentes qui sont naturelles dans la langue cible, pas des traductions mot à mot.'
            }
          ]
        },
        {
          category: 'Technique et Accès',
          items: [
            {
              question: 'PLATCOL est-il compatible avec les mobiles ?',
              answer: 'Oui, PLATCOL est entièrement responsive et fonctionne parfaitement sur les ordinateurs de bureau, les tablettes et les téléphones mobiles. Vous pouvez accéder à la plateforme depuis n\'importe quel appareil avec un navigateur web.'
            },
            {
              question: 'Puis-je utiliser PLATCOL hors ligne ?',
              answer: 'Non, PLATCOL nécessite une connexion Internet pour accéder à la base de données du dictionnaire et aux fonctionnalités de recherche. Nous recommandons d\'ajouter le site aux favoris pour un accès facile.'
            },
            {
              question: 'À quelle fréquence PLATCOL est-il mis à jour ?',
              answer: 'Nous mettons régulièrement à jour PLATCOL avec de nouvelles collocations, des traductions améliorées et des phrases d\'exemple supplémentaires basées sur les dernières recherches de corpus linguistiques.'
            }
          ]
        },
        {
          category: 'Académique et Recherche',
          items: [
            {
              question: 'Comment puis-je citer PLATCOL dans ma recherche ?',
              answer: 'Veuillez visiter notre page Publications pour le format de citation recommandé et les publications académiques associées. Nous encourageons l\'attribution appropriée lors de l\'utilisation de PLATCOL dans des travaux académiques.'
            },
            {
              question: 'Puis-je utiliser PLATCOL pour l\'enseignement ?',
              answer: 'Absolument ! PLATCOL est une excellente ressource pour les enseignants de langues. Vous pouvez l\'utiliser pour préparer des leçons, créer des exercices et aider les étudiants à améliorer leur compétence collocative.'
            },
            {
              question: 'Quelle méthodologie est utilisée pour compiler le dictionnaire ?',
              answer: 'PLATCOL est construit en utilisant des méthodes de lexicographie basée sur corpus, s\'appuyant sur d\'étendus corpus linguistiques pour garantir l\'authenticité et les données de fréquence. Notre approche est ancrée dans la recherche linguistique contemporaine.'
            }
          ]
        }
      ]
    },
    zh: {
      title: '常见问题',
      subtitle: '查找有关PLATCOL的常见问题的答案',
      categories: [
        {
          category: '一般问题',
          items: [
            {
              question: 'PLATCOL是什么？',
              answer: 'PLATCOL（搭配平台）是专为语言学习者设计的多语言词典。它包含西班牙语、英语、葡萄牙语、法语和普通话的搭配，并提供五种语言之间的翻译。'
            },
            {
              question: '什么是搭配？',
              answer: '搭配是在语言中经常一起出现的自然单词组合。例如，"做决定"或"浓咖啡"。学习搭配可以帮助您听起来更自然和流利。'
            },
            {
              question: 'PLATCOL免费吗？',
              answer: '是的，PLATCOL完全免费。我们的使命是为全球的语言学习者和研究人员提供高质量的词典资源支持。'
            },
            {
              question: '我需要创建帐户吗？',
              answer: '在PLATCOL中搜索和浏览搭配不需要帐户。您可以通过选择源语言并输入搜索查询立即开始使用该平台。'
            }
          ]
        },
        {
          category: '使用PLATCOL',
          items: [
            {
              question: '如何开始搜索？',
              answer: '首先，在主页上选择您的源语言（西班牙语、英语、葡萄牙语、法语或普通话）。然后，在搜索栏中输入单词或短语，并选择三种搜索模式之一：词元搜索、语义搜索或例句搜索。'
            },
            {
              question: '不同的搜索模式是什么？',
              answer: 'PLATCOL提供三种搜索模式：（1）词元搜索使用单词的基本形式查找搭配，（2）语义搜索根据含义和上下文发现搭配，（3）例句搜索在真实例句中查找搭配。'
            },
            {
              question: '如何过滤搜索结果？',
              answer: '您可以使用高级过滤器优化结果，包括基础词选择、搭配词选择、形态句法结构（语法模式）和主题/领域过滤。这些过滤器可帮助您准确找到所需内容。'
            },
            {
              question: '每个条目包含哪些信息？',
              answer: '每个词典条目在五个选项卡中提供全面信息：概览（定义和基本信息）、例句（真实用法）、频率（使用统计）、变体（替代形式）和翻译（五种语言的等效内容）。'
            }
          ]
        },
        {
          category: '语言和翻译',
          items: [
            {
              question: 'PLATCOL支持哪些语言？',
              answer: 'PLATCOL支持五种语言：西班牙语、英语、葡萄牙语、法语和普通话。您可以用任何这些语言搜索，并查看所有其他语言的翻译。'
            },
            {
              question: '我可以同时搜索多种语言吗？',
              answer: '不可以，您需要为搜索选择一种源语言。但是，一旦找到搭配，您可以通过翻译选项卡查看其在所有五种支持语言中的翻译和等效内容。'
            },
            {
              question: '翻译是直译还是语境翻译？',
              answer: '我们的翻译是语境化的，基于真实的语言使用。我们提供在目标语言中自然的等效搭配，而不是逐字翻译。'
            }
          ]
        },
        {
          category: '技术和访问',
          items: [
            {
              question: 'PLATCOL支持移动设备吗？',
              answer: '是的，PLATCOL完全响应式，可在台式电脑、平板电脑和手机上完美运行。您可以从任何带有网络浏览器的设备访问该平台。'
            },
            {
              question: '我可以离线使用PLATCOL吗？',
              answer: '不可以，PLATCOL需要互联网连接才能访问词典数据库和搜索功能。我们建议将网站添加到书签以便于访问。'
            },
            {
              question: 'PLATCOL更新频率如何？',
              answer: '我们定期更新PLATCOL，根据最新的语料库研究添加新的搭配、改进翻译和额外的例句。'
            }
          ]
        },
        {
          category: '学术和研究',
          items: [
            {
              question: '如何在我的研究中引用PLATCOL？',
              answer: '请访问我们的出版物页面了解推荐的引用格式和相关学术出版物。我们鼓励在学术工作中使用PLATCOL时进行适当的引用。'
            },
            {
              question: '我可以用PLATCOL来教学吗？',
              answer: '当然可以！PLATCOL是语言教师的优秀资源。您可以用它来准备课程、创建练习并帮助学生提高他们的搭配能力。'
            },
            {
              question: '编译词典使用什么方法？',
              answer: 'PLATCOL使用基于语料库的词典编纂方法构建，从广泛的语言语料库中提取数据以确保真实性和频率数据。我们的方法基于当代语言学研究。'
            }
          ]
        }
      ]
    }
  };

  const text = content[pageLanguage];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Header */}
      <header className="text-center mb-12 sm:mb-16">
        <div className="flex justify-center mb-4">
          <HelpCircle className="w-12 h-12 text-blue-900" />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-3 sm:mb-4">{text.title}</h1>
        <p className="text-lg sm:text-xl text-gray-600">{text.subtitle}</p>
      </header>

      {/* FAQ Categories */}
      <div className="space-y-8 sm:space-y-12">
        {text.categories.map((category, categoryIndex) => (
          <section key={categoryIndex}>
            {/* Category Title */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">
              {category.category}
            </h2>

            {/* FAQ Items */}
            <div className="space-y-3">
              {category.items.map((item, itemIndex) => {
                const itemId = `${categoryIndex}-${itemIndex}`;
                const isOpen = openItems.has(itemId);

                return (
                  <div
                    key={itemId}
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-blue-300 transition-colors"
                  >
                    {/* Question Button */}
                    <button
                      onClick={() => toggleItem(itemId)}
                      className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="font-semibold text-gray-900 text-sm sm:text-base">
                        {item.question}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-blue-900 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-blue-900 flex-shrink-0" />
                      )}
                    </button>

                    {/* Answer */}
                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0">
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="mt-12 sm:mt-16 bg-blue-50 border border-blue-100 rounded-lg p-6 sm:p-8 text-center">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
          {pageLanguage === 'en' && 'Still have questions?'}
          {pageLanguage === 'es' && '¿Todavía tiene preguntas?'}
          {pageLanguage === 'pt' && 'Ainda tem dúvidas?'}
          {pageLanguage === 'fr' && 'Vous avez encore des questions ?'}
          {pageLanguage === 'zh' && '还有问题吗？'}
        </h3>
        <p className="text-sm sm:text-base text-gray-700 mb-4">
          {pageLanguage === 'en' && 'Feel free to reach out to our team for additional support.'}
          {pageLanguage === 'es' && 'No dude en contactar a nuestro equipo para obtener apoyo adicional.'}
          {pageLanguage === 'pt' && 'Sinta-se à vontade para entrar em contato com nossa equipe para suporte adicional.'}
          {pageLanguage === 'fr' && 'N\'hésitez pas à contacter notre équipe pour un soutien supplémentaire.'}
          {pageLanguage === 'zh' && '随时联系我们的团队以获得额外支持。'}
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-2.5 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors text-sm font-semibold"
        >
          {pageLanguage === 'en' && 'Contact Us'}
          {pageLanguage === 'es' && 'Contáctenos'}
          {pageLanguage === 'pt' && 'Entre em Contato'}
          {pageLanguage === 'fr' && 'Contactez-nous'}
          {pageLanguage === 'zh' && '联系我们'}
        </a>
      </div>
    </article>
  );
}
