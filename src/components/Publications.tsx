import { usePageLanguage } from '../contexts/PageLanguageContext';

export function Publications() {
  const { pageLanguage } = usePageLanguage();

  const content = {
    en: {
      title: 'Publications',
      subtitle: 'Research outputs and academic contributions from the PLATCOL project',
      readMore: 'Click here and read more',
      publications: [
        {
          authors: 'ORENHA-OTTAIANO, ADRIANE; KUHN, T. Z.; CANDIDO JUNIOR, A.; VALENCIO, C. R.; QUADRADO, J. P.; TAGNIN, S. E. O.',
          title: 'Development of a methodology and enhancements of lexicographical resources for an online Platform of Academic Collocations Dictionaries in Portuguese and English',
          type: '(Apresentação de Trabalho/Paper Presentation)',
          details: 'Elex 2023 Book of Abstract, 2023, p. 62-63.',
          link: '#'
        },
        {
          authors: 'ORENHA-OTTAIANO, ADRIANE; KUHN, T. Z.; VALENCIO, C. R.; TENORIO, W.',
          title: 'Proposta de desenvolvimento de uma Plataforma On-line de Dicionários de Colocações Acadêmicas',
          type: '(Apresentação de Trabalho/Paper Presentation)',
          details: 'In: I Congresso de Português como Língua Estrangeira na Columbia University, 2021, Nova York - evento online. Caderno de Resumos do I Congresso de Português como Língua Estrangeira na Columbia University, 2021. p. 84-84.',
          link: '#'
        },
        {
          authors: 'ORENHA-OTTAIANO, ADRIANE; KUHN, T. Z.; VALENCIO, C. R.',
          title: 'The building of an Online Platform for Monolingual Dictionaries of Academic Collocations in Portuguese and English',
          type: '(Apresentação de Trabalho/Paper Presentation)',
          details: 'In: 56th Linguistics Colloquium, 2020, Online. 56th Linguistics Colloquium Book of Abstracts, 2020. p. 141-142.',
          link: '#'
        },
        {
          authors: 'ALVES, E. H.; CECILIO, G. A.; OTTAIANO, A. O.',
          title: 'A extração de colocações de textos acadêmicos e jornalísticos como fontes para o ensino de língua inglesa',
          type: '(Apresentação de Trabalho/Paper Presentation)',
          details: 'In: 30a Semana de Letras do IBILCE/UNESP, 2018, São José do Rio Preto. Caderno de Resumos da 30a Semana de Letras do IBILCE/UNESP, 2018. p. 24-25.',
          link: '#'
        },
        {
          authors: 'ORENHA-OTTAIANO, ADRIANE; KUHN, T. Z.; TAGNIN, S. E. O.; CANDIDO JUNIOR, A.; VALENCIO, C. R.; CECILIO, G. A.; QUADRADO, J. P.',
          title: 'O projeto de Dicionários On-line de Colocações Acadêmicas. AmericaLex 2023.',
          type: '(Apresentação de Trabalho/Paper Presentation)',
          details: '',
          link: null
        },
        {
          authors: 'CECILIO, G. A.; OTTAIANO, A. O.',
          title: 'O Ensino de colocações para a aprendizagem de LE a partir do Cambridge Academic English Corpus',
          type: '(Apresentação de Trabalho/Paper Presentation)',
          details: 'In: 30a Semana de Letras do IBILCE/UNESP, 2018, São José do Rio Preto. Caderno de Resumos da 30a Semana de Letras do IBILCE/UNESP, 2018. p. 57-57.',
          link: null
        },
        {
          authors: 'CECÍLIO, G. A.',
          title: 'Identificação e análise de colocações acadêmicas nas áreas de Linguística, Letras e Engenharias.',
          type: 'Dissertação (Mestrado em Programa de Pós-Graduação em Estudos Linguísticos)',
          details: 'Universidade Estadual Paulista Júlio de Mesquita Filho, 2021.',
          link: '#'
        }
      ]
    },
    es: {
      title: 'Publicaciones',
      subtitle: 'Resultados de investigación y contribuciones académicas del proyecto PLATCOL',
      readMore: 'Haga clic aquí y lea más',
      publications: [
        {
          authors: 'ORENHA-OTTAIANO, ADRIANE; KUHN, T. Z.; CANDIDO JUNIOR, A.; VALENCIO, C. R.; QUADRADO, J. P.; TAGNIN, S. E. O.',
          title: 'Development of a methodology and enhancements of lexicographical resources for an online Platform of Academic Collocations Dictionaries in Portuguese and English',
          type: '(Apresentação de Trabalho/Paper Presentation)',
          details: 'Elex 2023 Book of Abstract, 2023, p. 62-63.',
          link: '#'
        },
        {
          authors: 'ORENHA-OTTAIANO, ADRIANE; KUHN, T. Z.; VALENCIO, C. R.; TENORIO, W.',
          title: 'Proposta de desenvolvimento de uma Plataforma On-line de Dicionários de Colocações Acadêmicas',
          type: '(Apresentação de Trabalho/Paper Presentation)',
          details: 'In: I Congresso de Português como Língua Estrangeira na Columbia University, 2021, Nova York - evento online. Caderno de Resumos do I Congresso de Português como Língua Estrangeira na Columbia University, 2021. p. 84-84.',
          link: '#'
        },
        {
          authors: 'ORENHA-OTTAIANO, ADRIANE; KUHN, T. Z.; VALENCIO, C. R.',
          title: 'The building of an Online Platform for Monolingual Dictionaries of Academic Collocations in Portuguese and English',
          type: '(Apresentação de Trabalho/Paper Presentation)',
          details: 'In: 56th Linguistics Colloquium, 2020, Online. 56th Linguistics Colloquium Book of Abstracts, 2020. p. 141-142.',
          link: '#'
        },
        {
          authors: 'ALVES, E. H.; CECILIO, G. A.; OTTAIANO, A. O.',
          title: 'A extração de colocações de textos acadêmicos e jornalísticos como fontes para o ensino de língua inglesa',
          type: '(Apresentação de Trabalho/Paper Presentation)',
          details: 'In: 30a Semana de Letras do IBILCE/UNESP, 2018, São José do Rio Preto. Caderno de Resumos da 30a Semana de Letras do IBILCE/UNESP, 2018. p. 24-25.',
          link: '#'
        },
        {
          authors: 'ORENHA-OTTAIANO, ADRIANE; KUHN, T. Z.; TAGNIN, S. E. O.; CANDIDO JUNIOR, A.; VALENCIO, C. R.; CECILIO, G. A.; QUADRADO, J. P.',
          title: 'O projeto de Dicionários On-line de Colocações Acadêmicas. AmericaLex 2023.',
          type: '(Apresentação de Trabalho/Paper Presentation)',
          details: '',
          link: null
        },
        {
          authors: 'CECILIO, G. A.; OTTAIANO, A. O.',
          title: 'O Ensino de colocações para a aprendizagem de LE a partir do Cambridge Academic English Corpus',
          type: '(Apresentação de Trabalho/Paper Presentation)',
          details: 'In: 30a Semana de Letras do IBILCE/UNESP, 2018, São José do Rio Preto. Caderno de Resumos da 30a Semana de Letras do IBILCE/UNESP, 2018. p. 57-57.',
          link: null
        },
        {
          authors: 'CECÍLIO, G. A.',
          title: 'Identificação e análise de colocações acadêmicas nas áreas de Linguística, Letras e Engenharias.',
          type: 'Dissertação (Mestrado em Programa de Pós-Graduação em Estudos Linguísticos)',
          details: 'Universidade Estadual Paulista Júlio de Mesquita Filho, 2021.',
          link: '#'
        }
      ]
    },
    pt: {
      title: 'Publicações',
      subtitle: 'Resultados de pesquisa e contribuições acadêmicas do projeto PLATCOL',
      readMore: 'Clique aqui e leia mais',
      publications: [
        {
          authors: 'ORENHA-OTTAIANO, ADRIANE; KUHN, T. Z.; CANDIDO JUNIOR, A.; VALENCIO, C. R.; QUADRADO, J. P.; TAGNIN, S. E. O.',
          title: 'Development of a methodology and enhancements of lexicographical resources for an online Platform of Academic Collocations Dictionaries in Portuguese and English',
          type: '(Apresentação de Trabalho/Paper Presentation)',
          details: 'Elex 2023 Book of Abstract, 2023, p. 62-63.',
          link: '#'
        },
        {
          authors: 'ORENHA-OTTAIANO, ADRIANE; KUHN, T. Z.; VALENCIO, C. R.; TENORIO, W.',
          title: 'Proposta de desenvolvimento de uma Plataforma On-line de Dicionários de Colocações Acadêmicas',
          type: '(Apresentação de Trabalho/Paper Presentation)',
          details: 'In: I Congresso de Português como Língua Estrangeira na Columbia University, 2021, Nova York - evento online. Caderno de Resumos do I Congresso de Português como Língua Estrangeira na Columbia University, 2021. p. 84-84.',
          link: '#'
        },
        {
          authors: 'ORENHA-OTTAIANO, ADRIANE; KUHN, T. Z.; VALENCIO, C. R.',
          title: 'The building of an Online Platform for Monolingual Dictionaries of Academic Collocations in Portuguese and English',
          type: '(Apresentação de Trabalho/Paper Presentation)',
          details: 'In: 56th Linguistics Colloquium, 2020, Online. 56th Linguistics Colloquium Book of Abstracts, 2020. p. 141-142.',
          link: '#'
        },
        {
          authors: 'ALVES, E. H.; CECILIO, G. A.; OTTAIANO, A. O.',
          title: 'A extração de colocações de textos acadêmicos e jornalísticos como fontes para o ensino de língua inglesa',
          type: '(Apresentação de Trabalho/Paper Presentation)',
          details: 'In: 30a Semana de Letras do IBILCE/UNESP, 2018, São José do Rio Preto. Caderno de Resumos da 30a Semana de Letras do IBILCE/UNESP, 2018. p. 24-25.',
          link: '#'
        },
        {
          authors: 'ORENHA-OTTAIANO, ADRIANE; KUHN, T. Z.; TAGNIN, S. E. O.; CANDIDO JUNIOR, A.; VALENCIO, C. R.; CECILIO, G. A.; QUADRADO, J. P.',
          title: 'O projeto de Dicionários On-line de Colocações Acadêmicas. AmericaLex 2023.',
          type: '(Apresentação de Trabalho/Paper Presentation)',
          details: '',
          link: null
        },
        {
          authors: 'CECILIO, G. A.; OTTAIANO, A. O.',
          title: 'O Ensino de colocações para a aprendizagem de LE a partir do Cambridge Academic English Corpus',
          type: '(Apresentação de Trabalho/Paper Presentation)',
          details: 'In: 30a Semana de Letras do IBILCE/UNESP, 2018, São José do Rio Preto. Caderno de Resumos da 30a Semana de Letras do IBILCE/UNESP, 2018. p. 57-57.',
          link: null
        },
        {
          authors: 'CECÍLIO, G. A.',
          title: 'Identificação e análise de colocações acadêmicas nas áreas de Linguística, Letras e Engenharias.',
          type: 'Dissertação (Mestrado em Programa de Pós-Graduação em Estudos Linguísticos)',
          details: 'Universidade Estadual Paulista Júlio de Mesquita Filho, 2021.',
          link: '#'
        }
      ]
    },
    fr: {
      title: 'Publications',
      subtitle: 'Résultats de recherche et contributions académiques du projet PLATCOL',
      readMore: 'Cliquez ici et lisez plus',
      publications: [
        {
          authors: 'ORENHA-OTTAIANO, ADRIANE; KUHN, T. Z.; CANDIDO JUNIOR, A.; VALENCIO, C. R.; QUADRADO, J. P.; TAGNIN, S. E. O.',
          title: 'Development of a methodology and enhancements of lexicographical resources for an online Platform of Academic Collocations Dictionaries in Portuguese and English',
          type: '(Apresentação de Trabalho/Paper Presentation)',
          details: 'Elex 2023 Book of Abstract, 2023, p. 62-63.',
          link: '#'
        },
        {
          authors: 'ORENHA-OTTAIANO, ADRIANE; KUHN, T. Z.; VALENCIO, C. R.; TENORIO, W.',
          title: 'Proposta de desenvolvimento de uma Plataforma On-line de Dicionários de Colocações Acadêmicas',
          type: '(Apresentação de Trabalho/Paper Presentation)',
          details: 'In: I Congresso de Português como Língua Estrangeira na Columbia University, 2021, Nova York - evento online. Caderno de Resumos do I Congresso de Português como Língua Estrangeira na Columbia University, 2021. p. 84-84.',
          link: '#'
        },
        {
          authors: 'ORENHA-OTTAIANO, ADRIANE; KUHN, T. Z.; VALENCIO, C. R.',
          title: 'The building of an Online Platform for Monolingual Dictionaries of Academic Collocations in Portuguese and English',
          type: '(Apresentação de Trabalho/Paper Presentation)',
          details: 'In: 56th Linguistics Colloquium, 2020, Online. 56th Linguistics Colloquium Book of Abstracts, 2020. p. 141-142.',
          link: '#'
        },
        {
          authors: 'ALVES, E. H.; CECILIO, G. A.; OTTAIANO, A. O.',
          title: 'A extração de colocações de textos acadêmicos e jornalísticos como fontes para o ensino de língua inglesa',
          type: '(Apresentação de Trabalho/Paper Presentation)',
          details: 'In: 30a Semana de Letras do IBILCE/UNESP, 2018, São José do Rio Preto. Caderno de Resumos da 30a Semana de Letras do IBILCE/UNESP, 2018. p. 24-25.',
          link: '#'
        },
        {
          authors: 'ORENHA-OTTAIANO, ADRIANE; KUHN, T. Z.; TAGNIN, S. E. O.; CANDIDO JUNIOR, A.; VALENCIO, C. R.; CECILIO, G. A.; QUADRADO, J. P.',
          title: 'O projeto de Dicionários On-line de Colocações Acadêmicas. AmericaLex 2023.',
          type: '(Apresentação de Trabalho/Paper Presentation)',
          details: '',
          link: null
        },
        {
          authors: 'CECILIO, G. A.; OTTAIANO, A. O.',
          title: 'O Ensino de colocações para a aprendizagem de LE a partir do Cambridge Academic English Corpus',
          type: '(Apresentação de Trabalho/Paper Presentation)',
          details: 'In: 30a Semana de Letras do IBILCE/UNESP, 2018, São José do Rio Preto. Caderno de Resumos da 30a Semana de Letras do IBILCE/UNESP, 2018. p. 57-57.',
          link: null
        },
        {
          authors: 'CECÍLIO, G. A.',
          title: 'Identificação e análise de colocações acadêmicas nas áreas de Linguística, Letras e Engenharias.',
          type: 'Dissertação (Mestrado em Programa de Pós-Graduação em Estudos Linguísticos)',
          details: 'Universidade Estadual Paulista Júlio de Mesquita Filho, 2021.',
          link: '#'
        }
      ]
    },
    zh: {
      title: '出版物',
      subtitle: 'PLATCOL项目的研究成果和学术贡献',
      readMore: '点击此处阅读更多',
      publications: [
        {
          authors: 'ORENHA-OTTAIANO, ADRIANE; KUHN, T. Z.; CANDIDO JUNIOR, A.; VALENCIO, C. R.; QUADRADO, J. P.; TAGNIN, S. E. O.',
          title: 'Development of a methodology and enhancements of lexicographical resources for an online Platform of Academic Collocations Dictionaries in Portuguese and English',
          type: '(Apresentação de Trabalho/Paper Presentation)',
          details: 'Elex 2023 Book of Abstract, 2023, p. 62-63.',
          link: '#'
        },
        {
          authors: 'ORENHA-OTTAIANO, ADRIANE; KUHN, T. Z.; VALENCIO, C. R.; TENORIO, W.',
          title: 'Proposta de desenvolvimento de uma Plataforma On-line de Dicionários de Colocações Acadêmicas',
          type: '(Apresentação de Trabalho/Paper Presentation)',
          details: 'In: I Congresso de Português como Língua Estrangeira na Columbia University, 2021, Nova York - evento online. Caderno de Resumos do I Congresso de Português como Língua Estrangeira na Columbia University, 2021. p. 84-84.',
          link: '#'
        },
        {
          authors: 'ORENHA-OTTAIANO, ADRIANE; KUHN, T. Z.; VALENCIO, C. R.',
          title: 'The building of an Online Platform for Monolingual Dictionaries of Academic Collocations in Portuguese and English',
          type: '(Apresentação de Trabalho/Paper Presentation)',
          details: 'In: 56th Linguistics Colloquium, 2020, Online. 56th Linguistics Colloquium Book of Abstracts, 2020. p. 141-142.',
          link: '#'
        },
        {
          authors: 'ALVES, E. H.; CECILIO, G. A.; OTTAIANO, A. O.',
          title: 'A extração de colocações de textos acadêmicos e jornalísticos como fontes para o ensino de língua inglesa',
          type: '(Apresentação de Trabalho/Paper Presentation)',
          details: 'In: 30a Semana de Letras do IBILCE/UNESP, 2018, São José do Rio Preto. Caderno de Resumos da 30a Semana de Letras do IBILCE/UNESP, 2018. p. 24-25.',
          link: '#'
        },
        {
          authors: 'ORENHA-OTTAIANO, ADRIANE; KUHN, T. Z.; TAGNIN, S. E. O.; CANDIDO JUNIOR, A.; VALENCIO, C. R.; CECILIO, G. A.; QUADRADO, J. P.',
          title: 'O projeto de Dicionários On-line de Colocações Acadêmicas. AmericaLex 2023.',
          type: '(Apresentação de Trabalho/Paper Presentation)',
          details: '',
          link: null
        },
        {
          authors: 'CECILIO, G. A.; OTTAIANO, A. O.',
          title: 'O Ensino de colocações para a aprendizagem de LE a partir do Cambridge Academic English Corpus',
          type: '(Apresentação de Trabalho/Paper Presentation)',
          details: 'In: 30a Semana de Letras do IBILCE/UNESP, 2018, São José do Rio Preto. Caderno de Resumos da 30a Semana de Letras do IBILCE/UNESP, 2018. p. 57-57.',
          link: null
        },
        {
          authors: 'CECÍLIO, G. A.',
          title: 'Identificação e análise de colocações acadêmicas nas áreas de Linguística, Letras e Engenharias.',
          type: 'Dissertação (Mestrado em Programa de Pós-Graduação em Estudos Linguísticos)',
          details: 'Universidade Estadual Paulista Júlio de Mesquita Filho, 2021.',
          link: '#'
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

      {/* Publications List */}
      <div className="space-y-8 sm:space-y-10">
        {text.publications.map((pub, index) => (
          <section 
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:border-blue-300 transition-colors"
          >
            {/* Authors */}
            <p className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
              {pub.authors}
            </p>
            
            {/* Title */}
            <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 leading-relaxed">
              {pub.title}
            </h2>
            
            {/* Type */}
            <p className="text-sm text-gray-600 italic mb-2">
              {pub.type}
            </p>
            
            {/* Details */}
            {pub.details && (
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                {pub.details}
              </p>
            )}
            
            {/* Read More Link */}
            {pub.link && (
              <a 
                href={pub.link}
                className="inline-block text-sm font-semibold text-blue-900 hover:text-blue-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {text.readMore} →
              </a>
            )}
          </section>
        ))}
      </div>
    </article>
  );
}