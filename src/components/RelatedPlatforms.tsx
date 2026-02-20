import { usePageLanguage } from '../contexts/PageLanguageContext';
import { Link2, BookOpen, Users, Globe, GraduationCap, ArrowRight } from 'lucide-react';
import dicaLogo from 'figma:asset/ca1738d2999400be10055b5c8aa7155b256841d4.png';
import englishPlatformBanner from 'figma:asset/d8abdd70fe36175edc21360b6bd5667ec26ac702.png';

export function RelatedPlatforms() {
  const { pageLanguage } = usePageLanguage();

  const content = {
    en: {
      title: 'Related Platforms',
      subtitle: 'Discover other lexicographic resources for academic writing',
      platforms: [
        {
          name: 'DICA',
          fullName: 'Dictionaries of Academic Collocation',
          tagline: 'Make your academic texts stand out',
          description: 'DICA develops collocational competence in academic writing, helping university students, professors, and researchers improve their academic texts.',
          features: [
            { icon: BookOpen, text: 'Specialized lexicographic tool' },
            { icon: GraduationCap, text: 'For students & researchers' },
            { icon: Globe, text: 'International academic standards' }
          ],
          link: '#',
          linkText: 'Visit DICA',
          image: dicaLogo,
          imageAlt: 'DICA logo'
        },
        {
          name: 'English Collocations Platform',
          fullName: 'Online English Collocations Platform',
          tagline: 'Expand your collocational lexicon',
          description: 'Interactive tool designed to enhance English collocational skills for Brazilian Portuguese speakers through corpus-based teaching.',
          features: [
            { icon: Users, text: 'For Brazilian learners' },
            { icon: BookOpen, text: 'Corpus-based research' },
            { icon: Globe, text: 'Natural-sounding fluency' }
          ],
          link: '#',
          linkText: 'Visit Platform',
          image: englishPlatformBanner,
          imageAlt: 'English Collocations Platform'
        }
      ]
    },
    es: {
      title: 'Plataformas Relacionadas',
      subtitle: 'Descubra otros recursos lexicográficos para la escritura académica',
      platforms: [
        {
          name: 'DICA',
          fullName: 'Diccionarios de Colocaciones Académicas',
          tagline: 'Haga que sus textos académicos se destaquen',
          description: 'DICA desarrolla la competencia colocacional en la escritura académica, ayudando a estudiantes universitarios, profesores e investigadores a mejorar sus textos académicos.',
          features: [
            { icon: BookOpen, text: 'Herramienta lexicográfica especializada' },
            { icon: GraduationCap, text: 'Para estudiantes e investigadores' },
            { icon: Globe, text: 'Estándares académicos internacionales' }
          ],
          link: '#',
          linkText: 'Visitar DICA',
          image: dicaLogo,
          imageAlt: 'Logotipo de DICA'
        },
        {
          name: 'Plataforma de Colocaciones en Inglés',
          fullName: 'Plataforma Online de Colocaciones en Inglés',
          tagline: 'Expanda su léxico colocacional',
          description: 'Herramienta interactiva diseñada para mejorar las habilidades colocacionales en inglés para hablantes de portugués brasileño a través de la enseñanza basada en corpus.',
          features: [
            { icon: Users, text: 'Para estudiantes brasileños' },
            { icon: BookOpen, text: 'Investigación basada en corpus' },
            { icon: Globe, text: 'Fluidez natural' }
          ],
          link: '#',
          linkText: 'Visitar Plataforma',
          image: englishPlatformBanner,
          imageAlt: 'Plataforma de Colocaciones en Inglés'
        }
      ]
    },
    pt: {
      title: 'Plataformas Relacionadas',
      subtitle: 'Descubra outros recursos lexicográficos para escrita acadêmica',
      platforms: [
        {
          name: 'DICA',
          fullName: 'Dicionários de Colocações Acadêmicas',
          tagline: 'Faça seus textos acadêmicos se destacarem',
          description: 'O DICA desenvolve a competência colocacional na escrita acadêmica, ajudando estudantes universitários, professores e pesquisadores a melhorar seus textos acadêmicos.',
          features: [
            { icon: BookOpen, text: 'Ferramenta lexicográfica especializada' },
            { icon: GraduationCap, text: 'Para estudantes e pesquisadores' },
            { icon: Globe, text: 'Padrões acadêmicos internacionais' }
          ],
          link: '#',
          linkText: 'Visitar DICA',
          image: dicaLogo,
          imageAlt: 'Logo DICA'
        },
        {
          name: 'Plataforma de Colocações em Inglês',
          fullName: 'Plataforma Online de Colocações em Inglês',
          tagline: 'Expanda seu léxico colocacional',
          description: 'Ferramenta interativa projetada para aprimorar habilidades colocacionais em inglês para falantes de português brasileiro através do ensino baseado em corpus.',
          features: [
            { icon: Users, text: 'Para estudantes brasileiros' },
            { icon: BookOpen, text: 'Pesquisa baseada em corpus' },
            { icon: Globe, text: 'Fluência natural' }
          ],
          link: '#',
          linkText: 'Visitar Plataforma',
          image: englishPlatformBanner,
          imageAlt: 'Plataforma de Colocações em Inglês'
        }
      ]
    },
    fr: {
      title: 'Plateformes Associées',
      subtitle: 'Découvrez d\'autres ressources lexicographiques pour l\'écriture académique',
      platforms: [
        {
          name: 'DICA',
          fullName: 'Dictionnaires de Collocations Académiques',
          tagline: 'Faites ressortir vos textes académiques',
          description: 'DICA développe la compétence collocative dans l\'écriture académique, aidant les étudiants universitaires, les professeurs et les chercheurs à améliorer leurs textes académiques.',
          features: [
            { icon: BookOpen, text: 'Outil lexicographique spécialisé' },
            { icon: GraduationCap, text: 'Pour étudiants et chercheurs' },
            { icon: Globe, text: 'Standards académiques internationaux' }
          ],
          link: '#',
          linkText: 'Visiter DICA',
          image: dicaLogo,
          imageAlt: 'Logo DICA'
        },
        {
          name: 'Plateforme de Collocations Anglaises',
          fullName: 'Plateforme en Ligne de Collocations Anglaises',
          tagline: 'Élargissez votre lexique collocationnel',
          description: 'Outil interactif conçu pour améliorer les compétences collocatives en anglais pour les locuteurs portugais brésiliens grâce à l\'enseignement basé sur corpus.',
          features: [
            { icon: Users, text: 'Pour apprenants brésiliens' },
            { icon: BookOpen, text: 'Recherche basée sur corpus' },
            { icon: Globe, text: 'Fluidité naturelle' }
          ],
          link: '#',
          linkText: 'Visiter Plateforme',
          image: englishPlatformBanner,
          imageAlt: 'Plateforme de Collocations Anglaises'
        }
      ]
    },
    zh: {
      title: '相关平台',
      subtitle: '探索其他学术写作的词典资源',
      platforms: [
        {
          name: 'DICA',
          fullName: '学术搭配词典',
          tagline: '让您的学术文本脱颖而出',
          description: 'DICA培养学术写作中的搭配能力，帮助大学生、教授和研究人员改进他们的学术文本。',
          features: [
            { icon: BookOpen, text: '专业词典工具' },
            { icon: GraduationCap, text: '面向学生和研究人员' },
            { icon: Globe, text: '国际学术标准' }
          ],
          link: '#',
          linkText: '访问DICA',
          image: dicaLogo,
          imageAlt: 'DICA标志'
        },
        {
          name: '英语搭配平台',
          fullName: '在线英语搭配平台',
          tagline: '扩展您的搭配词汇',
          description: '专为巴西葡萄牙语使用者设计的互动工具，通过基于语料库的教学提高英语搭配能力。',
          features: [
            { icon: Users, text: '面向巴西学习者' },
            { icon: BookOpen, text: '基于语料库研究' },
            { icon: Globe, text: '自然流利表达' }
          ],
          link: '#',
          linkText: '访问平台',
          image: englishPlatformBanner,
          imageAlt: '英语搭配平台'
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

      {/* Platforms List */}
      <div className="space-y-12 sm:space-y-16">
        {text.platforms.map((platform, index) => (
          <section 
            key={index}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-blue-300 transition-colors"
          >
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {/* Image */}
              <div className="bg-gray-50 flex items-center justify-center p-8 sm:p-12">
                <img 
                  src={platform.image} 
                  alt={platform.imageAlt}
                  className={`${index === 0 ? 'max-w-[200px]' : 'w-full'} h-auto object-contain`}
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 flex flex-col justify-center">
                {/* Platform Name */}
                <div className="flex items-start gap-3 mb-3">
                  <Link2 className="w-6 h-6 text-blue-900 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">{platform.name}</h2>
                    <p className="text-sm text-gray-600 mt-1">{platform.fullName}</p>
                  </div>
                </div>

                {/* Tagline */}
                <p className="text-base sm:text-lg text-blue-900 font-medium mb-4">
                  {platform.tagline}
                </p>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
                  {platform.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {platform.features.map((feature, featureIndex) => {
                    const Icon = feature.icon;
                    return (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-blue-900 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature.text}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Link */}
                <a 
                  href={platform.link}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-900 hover:text-blue-700 transition-colors group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {platform.linkText}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
