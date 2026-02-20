import { usePageLanguage } from '../contexts/PageLanguageContext';
import { Users, Globe, Award, DollarSign } from 'lucide-react';
import fapespLogo from 'figma:asset/afa61a521e17db9e156f521c7aa918522fe6495e.png';
import capesLogo from 'figma:asset/67f3be79ecb7eaf6849a2650761cd6942c2d40fd.png';
import unespLogo from 'figma:asset/e50e0c9d9216c20603ac80406a650f9fd25d8af7.png';
import cnpqLogo from 'figma:asset/7186db4fc845fcae3a1f7c9e52198e29b45c90a1.png';
import alcalaLogo from 'figma:asset/d8eb55f4203c7dcebf65936bc44795d3b88e08f5.png';
import granadaLogo from 'figma:asset/31ec4a5be90f213370730c61b6b74f280e0b0768.png';
import laLagunaLogo from 'figma:asset/1859e595297a450b33f21863d68734c6a55458e3.png';
import corunaLogo from 'figma:asset/0ffd3e95c5f8dd2f64094e516ed50428fb13e88f.png';
import uspLogo from 'figma:asset/3a80d531e9384ccaa50cf3edf6bf67c691114e7b.png';
import bolognaLogo from 'figma:asset/7966fd7d44fe0fc177c74c89330d909ff292e7a9.png';
import montrealLogo from 'figma:asset/3720f1bf5031f77ace6ae0a02906ffbf675b3d80.png';
import lancasterLogo from 'figma:asset/179006f490845f5c143c4497a5cf71fde2fae1cf.png';
import leipzigLogo from 'figma:asset/613d8885cff49a9aacbf8d5b3a451984bdc8d171.png';
import lisboaLogo from 'figma:asset/c8f76db0256718f73ec54e7714317cb21a8c98a9.png';
import santiagoLogo from 'figma:asset/2fbffe47bae546b864dc4c9beef230540b58dcad.png';
import platcolLogo from 'figma:asset/2d39659df76b8bada6604de61913009a3aa5a5c1.png';

export function AboutProject() {
  const { pageLanguage } = usePageLanguage();

  const content = {
    en: {
      title: 'About PLATCOL',
      subtitle: 'A Multilingual Platform for Collocation Learning',
      
      // What is PLATCOL
      whatTitle: 'What is PLATCOL?',
      whatText: 'PLATCOL is a corpus-based online platform featuring collocation dictionaries in five languages: Portuguese, English, Spanish, French, and Mandarin Chinese. It helps language learners, translators, and researchers understand and use collocations effectively.',
      
      // Mission
      missionTitle: 'Our Mission',
      missionText: 'To promote effective learning and translation of collocations across languages.',
      
      // Team
      teamTitle: 'Research Team',
      teamLead: 'Project Coordinator',
      teamLeadName: 'Dr. Adriane Orenha-Ottaiano',
      teamLeadAffiliation: 'São Paulo State University (UNESP), Brazil',
      teamMember: 'Project Member',
      teamFormerMember: 'Former Project Member',
      
      // Funding
      fundingTitle: 'Funding',
      fundingOrg: 'São Paulo Research Foundation (FAPESP)',
      fundingProcess: 'Process No. 2020/01783-2',
      
      // Acknowledgements
      acknowledgeTitle: 'Acknowledgements'
    },
    es: {
      title: 'Acerca de PLATCOL',
      subtitle: 'Una Plataforma Multilingüe para el Aprendizaje de Colocaciones',
      
      whatTitle: '¿Qué es PLATCOL?',
      whatText: 'PLATCOL es una plataforma en línea basada en corpus que presenta diccionarios de colocaciones en cinco idiomas: portugués, inglés, español, francés y chino mandarín. Ayuda a estudiantes de idiomas, traductores e investigadores a comprender y usar colocaciones de manera efectiva.',
      
      missionTitle: 'Nuestra Misión',
      missionText: 'Promover el aprendizaje y la traducción efectiva de colocaciones entre idiomas.',
      
      teamTitle: 'Equipo de Investigación',
      teamLead: 'Coordinadora del Proyecto',
      teamLeadName: 'Dra. Adriane Orenha-Ottaiano',
      teamLeadAffiliation: 'Universidad Estadual Paulista (UNESP), Brasil',
      teamMember: 'Miembro del Proyecto',
      teamFormerMember: 'Miembro Anterior del Proyecto',
      
      fundingTitle: 'Financiamiento',
      fundingOrg: 'Fundación de Apoyo a la Investigación del Estado de São Paulo (FAPESP)',
      fundingProcess: 'Proceso No. 2020/01783-2',
      
      acknowledgeTitle: 'Agradecimientos'
    },
    pt: {
      title: 'Sobre PLATCOL',
      subtitle: 'Uma Plataforma Multilíngue para Aprendizagem de Colocações',
      
      whatTitle: 'O que é PLATCOL?',
      whatText: 'PLATCOL é uma plataforma online baseada em corpus com dicionários de colocações em cinco idiomas: português, inglês, espanhol, francês e chinês mandarim. Ajuda estudantes de idiomas, tradutores e pesquisadores a entender e usar colocações de forma eficaz.',
      
      missionTitle: 'Nossa Missão',
      missionText: 'Promover o aprendizado e a tradução eficaz de colocações entre idiomas.',
      
      teamTitle: 'Equipe de Pesquisa',
      teamLead: 'Coordenadora do Projeto',
      teamLeadName: 'Dra. Adriane Orenha-Ottaiano',
      teamLeadAffiliation: 'Universidade Estadual Paulista (UNESP), Brasil',
      teamMember: 'Membro do Projeto',
      teamFormerMember: 'Membro Anterior do Projeto',
      
      fundingTitle: 'Financiamento',
      fundingOrg: 'Fundação de Amparo à Pesquisa do Estado de São Paulo (FAPESP)',
      fundingProcess: 'Processo No. 2020/01783-2',
      
      acknowledgeTitle: 'Agradecimentos'
    },
    fr: {
      title: 'À Propos de PLATCOL',
      subtitle: 'Une Plateforme Multilingue pour l\'Apprentissage des Collocations',
      
      whatTitle: 'Qu\'est-ce que PLATCOL ?',
      whatText: 'PLATCOL est une plateforme en ligne basée sur corpus présentant des dictionnaires de collocations dans cinq langues : portugais, anglais, espagnol, français et chinois mandarin. Elle aide les apprenants de langues, les traducteurs et les chercheurs à comprendre et utiliser les collocations efficacement.',
      
      missionTitle: 'Notre Mission',
      missionText: 'Promouvoir l\'apprentissage et la traduction efficaces des collocations entre les langues.',
      
      teamTitle: 'Équipe de Recherche',
      teamLead: 'Coordinateure du Projet',
      teamLeadName: 'Dre Adriane Orenha-Ottaiano',
      teamLeadAffiliation: 'Université d\'État de São Paulo (UNESP), Brésil',
      teamMember: 'Membre du Projet',
      teamFormerMember: 'Ancien Membre du Projet',
      
      fundingTitle: 'Financement',
      fundingOrg: 'Fondation de Soutien à la Recherche de l\'État de São Paulo (FAPESP)',
      fundingProcess: 'Processus No. 2020/01783-2',
      
      acknowledgeTitle: 'Remerciements'
    },
    zh: {
      title: '关于PLATCOL',
      subtitle: '多语言搭配学习平台',
      
      whatTitle: 'PLATCOL是什么？',
      whatText: 'PLATCOL是一个基于语料库的在线平台，提供五种语言的搭配词典：葡萄牙语、英语、西班牙语、法语和汉语普通话。它帮助语言学习者、翻译人员和研究人员有效地理解和使用搭配。',
      
      missionTitle: '我们的使命',
      missionText: '促进跨语言搭配的有效学习和翻译。',
      
      teamTitle: '研究团队',
      teamLead: '项目协调员',
      teamLeadName: 'Adriane Orenha-Ottaiano博士',
      teamLeadAffiliation: '圣保罗州立大学（UNESP），巴西',
      teamMember: '项目成员',
      teamFormerMember: '前项目成员',
      
      fundingTitle: '资助方',
      fundingOrg: '圣保罗研究基金会（FAPESP）',
      fundingProcess: '项目编号 2020/01783-2',
      
      acknowledgeTitle: '致谢'
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

      <div className="space-y-12 sm:space-y-16">
        {/* What is PLATCOL - with image placeholder */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-8 h-8 text-blue-900" />
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">{text.whatTitle}</h2>
            </div>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              {text.whatText}
            </p>
          </div>
          <div className="flex items-center justify-center bg-white rounded-lg p-8">
            <img 
              src={platcolLogo} 
              alt="PLATCOL - Multilingual Platform for Collocation Learning" 
              className="w-full h-auto max-w-md"
            />
          </div>
        </section>

        {/* Mission */}
        <section className="bg-blue-50 border border-blue-200 rounded-lg p-6 sm:p-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-8 h-8 text-blue-900" />
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">{text.missionTitle}</h2>
          </div>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            {text.missionText}
          </p>
        </section>

        {/* Team & Funding */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-8 h-8 text-blue-900" />
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">{text.teamTitle}</h2>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Project Coordinator */}
              <div className="bg-blue-50 border border-blue-900 rounded p-4">
                <p className="text-xs font-semibold text-blue-900 uppercase tracking-wider mb-2">{text.teamLead}</p>
                <p className="text-sm font-semibold text-gray-900 mb-1">{text.teamLeadName}</p>
                <p className="text-xs text-gray-600">{text.teamLeadAffiliation}</p>
              </div>
              
              {/* Other Researchers */}
              <div className="bg-gray-50 border border-gray-200 rounded p-4">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">{text.teamMember}</p>
                <p className="text-sm font-semibold text-gray-900 mb-1">Researcher Name</p>
                <p className="text-xs text-gray-600">Institution</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded p-4">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">{text.teamMember}</p>
                <p className="text-sm font-semibold text-gray-900 mb-1">Researcher Name</p>
                <p className="text-xs text-gray-600">Institution</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded p-4">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">{text.teamFormerMember}</p>
                <p className="text-sm font-semibold text-gray-900 mb-1">Researcher Name</p>
                <p className="text-xs text-gray-600">Institution</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded p-4">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">{text.teamFormerMember}</p>
                <p className="text-sm font-semibold text-gray-900 mb-1">Researcher Name</p>
                <p className="text-xs text-gray-600">Institution</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <DollarSign className="w-8 h-8 text-blue-900" />
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">{text.fundingTitle}</h2>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 text-center">
            <p className="text-lg font-semibold text-gray-900 mb-1">{text.fundingOrg}</p>
            <p className="text-sm text-gray-600 mb-8">{text.fundingProcess}</p>
            
            {/* FAPESP Logo */}
            <div className="flex items-center justify-center">
              <img 
                src={fapespLogo} 
                alt="FAPESP - Fundação de Amparo à Pesquisa do Estado de São Paulo" 
                className="h-20 sm:h-24 w-auto"
              />
            </div>
          </div>
        </section>

        {/* Acknowledgements - Partner Organizations */}
        <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 sm:p-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-8 text-center">{text.acknowledgeTitle}</h2>
          
          {/* Logo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 items-center justify-items-center">
            {/* CAPES */}
            <div className="flex items-center justify-center p-2">
              <img 
                src={capesLogo} 
                alt="CAPES - Coordenação de Aperfeiçoamento de Pessoal de Nível Superior" 
                className="h-20 sm:h-24 w-auto"
              />
            </div>
            
            {/* UNESP */}
            <div className="flex items-center justify-center p-2">
              <img 
                src={unespLogo} 
                alt="UNESP - Universidade Estadual Paulista" 
                className="h-20 sm:h-24 w-auto"
              />
            </div>
            
            {/* CNPq */}
            <div className="flex items-center justify-center p-2">
              <img 
                src={cnpqLogo} 
                alt="CNPq - Conselho Nacional de Desenvolvimento Científico e Tecnológico" 
                className="h-20 sm:h-24 w-auto"
              />
            </div>
            
            {/* Universidad de Alcalá */}
            <div className="flex items-center justify-center p-2">
              <img 
                src={alcalaLogo} 
                alt="Universidad de Alcalá" 
                className="h-20 sm:h-24 w-auto"
              />
            </div>
            
            {/* Universidad de Granada */}
            <div className="flex items-center justify-center p-2">
              <img 
                src={granadaLogo} 
                alt="Universidad de Granada" 
                className="h-20 sm:h-24 w-auto"
              />
            </div>
            
            {/* Universidad de La Laguna */}
            <div className="flex items-center justify-center p-2">
              <img 
                src={laLagunaLogo} 
                alt="Universidad de La Laguna" 
                className="h-20 sm:h-24 w-auto"
              />
            </div>
            
            {/* Universidade da Coruña */}
            <div className="flex items-center justify-center p-2">
              <img 
                src={corunaLogo} 
                alt="Universidade da Coruña" 
                className="h-20 sm:h-24 w-auto"
              />
            </div>
            
            {/* USP */}
            <div className="flex items-center justify-center p-2">
              <img 
                src={uspLogo} 
                alt="USP - Universidade de São Paulo" 
                className="h-20 sm:h-24 w-auto"
              />
            </div>
            
            {/* Università di Bologna */}
            <div className="flex items-center justify-center p-2">
              <img 
                src={bolognaLogo} 
                alt="Università di Bologna" 
                className="h-20 sm:h-24 w-auto"
              />
            </div>
            
            {/* Université de Montréal */}
            <div className="flex items-center justify-center p-2">
              <img 
                src={montrealLogo} 
                alt="Université de Montréal" 
                className="h-20 sm:h-24 w-auto"
              />
            </div>
            
            {/* Lancaster University */}
            <div className="flex items-center justify-center p-2">
              <img 
                src={lancasterLogo} 
                alt="Lancaster University" 
                className="h-20 sm:h-24 w-auto"
              />
            </div>
            
            {/* Universität Leipzig */}
            <div className="flex items-center justify-center p-2">
              <img 
                src={leipzigLogo} 
                alt="Universität Leipzig" 
                className="h-20 sm:h-24 w-auto"
              />
            </div>
            
            {/* Universidade de Lisboa */}
            <div className="flex items-center justify-center p-2">
              <img 
                src={lisboaLogo} 
                alt="Universidade de Lisboa" 
                className="h-20 sm:h-24 w-auto"
              />
            </div>
            
            {/* Universidad de Santiago de Chile */}
            <div className="flex items-center justify-center p-2">
              <img 
                src={santiagoLogo} 
                alt="Universidad de Santiago de Chile" 
                className="h-20 sm:h-24 w-auto"
              />
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}