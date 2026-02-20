import { usePageLanguage } from '../contexts/PageLanguageContext';

export function TermsOfService() {
  const { pageLanguage } = usePageLanguage();

  const content = {
    en: {
      title: 'Terms of Service',
      lastUpdated: 'Last Updated: February 20, 2026',
      intro: 'Welcome to PLATCOL. By accessing or using our multilingual collocation dictionary platform, you agree to be bound by these Terms of Service. Please read them carefully before using our services.',
      
      section1Title: '1. Acceptance of Terms',
      section1Content: [
        'By accessing and using PLATCOL, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our platform.',
        'These terms apply to all users, including visitors, registered users, and contributors.'
      ],
      
      section2Title: '2. Description of Service',
      section2Content: [
        'PLATCOL is a multilingual collocation dictionary platform designed for language learners, educators, and researchers. Our services include:',
        '• Access to a comprehensive database of collocations in English, Spanish, Portuguese, French, and Mandarin Chinese',
        '• Multiple search modes including lemma-based, semantic, and example-based searches',
        '• Advanced filtering options by morphosyntactic structure and topic/domain',
        '• Translations and cross-linguistic reference materials',
        '• Usage examples and educational content'
      ],
      
      section3Title: '3. User Responsibilities',
      section3Content: [
        'As a user of PLATCOL, you agree to:',
        '• Use the platform solely for lawful, educational, and research purposes',
        '• Not attempt to gain unauthorized access to any part of the system',
        '• Not interfere with or disrupt the service or servers',
        '• Not use automated tools (bots, scrapers) without explicit written permission',
        '• Respect intellectual property rights of content provided on the platform',
        '• Provide accurate information when required',
        '• Maintain the confidentiality of any account credentials'
      ],
      
      section4Title: '4. Intellectual Property',
      section4Content: [
        'All content provided on PLATCOL, including but not limited to collocation entries, definitions, examples, translations, and interface design, is protected by intellectual property laws.',
        'The PLATCOL platform and its original content are owned by PLATCOL and its licensors. You may not reproduce, distribute, modify, or create derivative works from our content without explicit written permission.',
        'Academic citation and fair use for educational purposes are permitted, provided proper attribution is given to PLATCOL.'
      ],
      
      section5Title: '5. Acceptable Use Policy',
      section5Content: [
        'You may not use PLATCOL to:',
        '• Violate any applicable laws or regulations',
        '• Infringe upon the rights of others',
        '• Transmit harmful, offensive, or inappropriate content',
        '• Attempt to reverse engineer, decompile, or extract the source code',
        '• Circumvent any security features or access restrictions',
        '• Engage in any activity that could harm the platform or its users',
        '• Use the service for commercial purposes without authorization'
      ],
      
      section6Title: '6. Disclaimer of Warranties',
      section6Content: [
        'PLATCOL is provided "as is" and "as available" without warranties of any kind, either express or implied.',
        'We do not guarantee that:',
        '• The service will be uninterrupted, timely, secure, or error-free',
        '• The results obtained from using the service will be accurate or reliable',
        '• Any errors or defects will be corrected',
        'While we strive for accuracy in our collocation database, we do not warrant the completeness or accuracy of the linguistic information provided.'
      ],
      
      section7Title: '7. Limitation of Liability',
      section7Content: [
        'To the maximum extent permitted by law, PLATCOL and its operators shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from:',
        '• Your use or inability to use the service',
        '• Any unauthorized access to or use of our servers',
        '• Any interruption or cessation of transmission',
        '• Any bugs, viruses, or malicious code transmitted through the service',
        '• Any errors or omissions in content',
        'Our total liability shall not exceed the amount paid by you, if any, for accessing the service.'
      ],
      
      section8Title: '8. Modifications to Service',
      section8Content: [
        'We reserve the right to:',
        '• Modify, suspend, or discontinue any aspect of PLATCOL at any time',
        '• Change these Terms of Service with notice to users',
        '• Update content, features, and functionality',
        '• Impose limits on certain features or restrict access',
        'Significant changes will be communicated through the platform or via email if you have provided contact information.'
      ],
      
      section9Title: '9. Educational Purpose',
      section9Content: [
        'PLATCOL is designed as an educational and research tool. The platform is intended to support language learning and linguistic research.',
        'Content should be used as a reference and learning aid. Users are encouraged to consult multiple sources and apply critical thinking when using linguistic information.',
        'PLATCOL does not replace formal language instruction or professional translation services.'
      ],
      
      section10Title: '10. Termination',
      section10Content: [
        'We reserve the right to terminate or suspend access to PLATCOL immediately, without prior notice, for any reason, including but not limited to:',
        '• Violation of these Terms of Service',
        '• Fraudulent, abusive, or illegal activity',
        '• Requests by law enforcement or government agencies',
        'Upon termination, your right to use the service will immediately cease.'
      ],
      
      section11Title: '11. Governing Law',
      section11Content: [
        'These Terms of Service shall be governed by and construed in accordance with applicable international and local laws.',
        'Any disputes arising from these terms or your use of PLATCOL shall be resolved through good faith negotiation. If resolution cannot be reached, disputes may be subject to arbitration or court proceedings as determined by applicable law.'
      ],
      
      section12Title: '12. Contact Information',
      section12Content: [
        'If you have any questions about these Terms of Service, please contact us at:',
        'Email: legal@platcol.com',
        'We will respond to inquiries within a reasonable timeframe.'
      ]
    },
    es: {
      title: 'Términos de Servicio',
      lastUpdated: 'Última actualización: 20 de febrero de 2026',
      intro: 'Bienvenido a PLATCOL. Al acceder o utilizar nuestra plataforma de diccionario de colocaciones multilingüe, usted acepta estar sujeto a estos Términos de Servicio. Por favor, léalos cuidadosamente antes de usar nuestros servicios.',
      
      section1Title: '1. Aceptación de los Términos',
      section1Content: [
        'Al acceder y utilizar PLATCOL, usted reconoce que ha leído, comprendido y acepta estar sujeto a estos Términos de Servicio y nuestra Política de Privacidad. Si no está de acuerdo con estos términos, por favor no utilice nuestra plataforma.',
        'Estos términos se aplican a todos los usuarios, incluidos visitantes, usuarios registrados y colaboradores.'
      ],
      
      section2Title: '2. Descripción del Servicio',
      section2Content: [
        'PLATCOL es una plataforma de diccionario de colocaciones multilingüe diseñada para estudiantes de idiomas, educadores e investigadores. Nuestros servicios incluyen:',
        '• Acceso a una base de datos completa de colocaciones en inglés, español, portugués, francés y chino mandarín',
        '• Múltiples modos de búsqueda, incluidas búsquedas basadas en lemas, semánticas y basadas en ejemplos',
        '• Opciones de filtrado avanzadas por estructura morfosintáctica y tema/dominio',
        '• Traducciones y materiales de referencia interlingüísticos',
        '• Ejemplos de uso y contenido educativo'
      ],
      
      section3Title: '3. Responsabilidades del Usuario',
      section3Content: [
        'Como usuario de PLATCOL, usted acepta:',
        '• Utilizar la plataforma únicamente con fines educativos, de investigación y legales',
        '• No intentar obtener acceso no autorizado a ninguna parte del sistema',
        '• No interferir ni interrumpir el servicio o los servidores',
        '• No utilizar herramientas automatizadas (bots, scrapers) sin permiso explícito por escrito',
        '• Respetar los derechos de propiedad intelectual del contenido proporcionado en la plataforma',
        '• Proporcionar información precisa cuando sea necesario',
        '• Mantener la confidencialidad de las credenciales de cuenta'
      ],
      
      section4Title: '4. Propiedad Intelectual',
      section4Content: [
        'Todo el contenido proporcionado en PLATCOL, incluidas, entre otras, las entradas de colocaciones, definiciones, ejemplos, traducciones y diseño de interfaz, está protegido por las leyes de propiedad intelectual.',
        'La plataforma PLATCOL y su contenido original son propiedad de PLATCOL y sus licenciantes. No puede reproducir, distribuir, modificar o crear obras derivadas de nuestro contenido sin permiso explícito por escrito.',
        'Se permite la citación académica y el uso justo con fines educativos, siempre que se dé la atribución adecuada a PLATCOL.'
      ],
      
      section5Title: '5. Política de Uso Aceptable',
      section5Content: [
        'No puede utilizar PLATCOL para:',
        '• Violar leyes o regulaciones aplicables',
        '• Infringir los derechos de otros',
        '• Transmitir contenido dañino, ofensivo o inapropiado',
        '• Intentar realizar ingeniería inversa, descompilar o extraer el código fuente',
        '• Eludir funciones de seguridad o restricciones de acceso',
        '• Participar en cualquier actividad que pueda dañar la plataforma o a sus usuarios',
        '• Utilizar el servicio con fines comerciales sin autorización'
      ],
      
      section6Title: '6. Descargo de Garantías',
      section6Content: [
        'PLATCOL se proporciona "tal cual" y "según disponibilidad" sin garantías de ningún tipo, ya sean expresas o implícitas.',
        'No garantizamos que:',
        '• El servicio será ininterrumpido, oportuno, seguro o libre de errores',
        '• Los resultados obtenidos del uso del servicio serán precisos o confiables',
        '• Se corregirán errores o defectos',
        'Si bien nos esforzamos por la precisión en nuestra base de datos de colocaciones, no garantizamos la integridad o precisión de la información lingüística proporcionada.'
      ],
      
      section7Title: '7. Limitación de Responsabilidad',
      section7Content: [
        'En la medida máxima permitida por la ley, PLATCOL y sus operadores no serán responsables de ningún daño indirecto, incidental, especial, consecuente o punitivo que surja de:',
        '• Su uso o incapacidad para usar el servicio',
        '• Cualquier acceso no autorizado o uso de nuestros servidores',
        '• Cualquier interrupción o cese de transmisión',
        '• Cualquier error, virus o código malicioso transmitido a través del servicio',
        '• Cualquier error u omisión en el contenido',
        'Nuestra responsabilidad total no excederá la cantidad que usted pagó, si corresponde, por acceder al servicio.'
      ],
      
      section8Title: '8. Modificaciones al Servicio',
      section8Content: [
        'Nos reservamos el derecho de:',
        '• Modificar, suspender o descontinuar cualquier aspecto de PLATCOL en cualquier momento',
        '• Cambiar estos Términos de Servicio con aviso a los usuarios',
        '• Actualizar contenido, características y funcionalidad',
        '• Imponer límites en ciertas características o restringir el acceso',
        'Los cambios significativos se comunicarán a través de la plataforma o por correo electrónico si ha proporcionado información de contacto.'
      ],
      
      section9Title: '9. Propósito Educativo',
      section9Content: [
        'PLATCOL está diseñado como una herramienta educativa y de investigación. La plataforma está destinada a apoyar el aprendizaje de idiomas y la investigación lingüística.',
        'El contenido debe utilizarse como referencia y ayuda de aprendizaje. Se anima a los usuarios a consultar múltiples fuentes y aplicar el pensamiento crítico al usar información lingüística.',
        'PLATCOL no reemplaza la instrucción formal de idiomas ni los servicios de traducción profesional.'
      ],
      
      section10Title: '10. Terminación',
      section10Content: [
        'Nos reservamos el derecho de terminar o suspender el acceso a PLATCOL inmediatamente, sin previo aviso, por cualquier motivo, incluidos, entre otros:',
        '• Violación de estos Términos de Servicio',
        '• Actividad fraudulenta, abusiva o ilegal',
        '• Solicitudes de agencias gubernamentales o policiales',
        'Tras la terminación, su derecho a usar el servicio cesará inmediatamente.'
      ],
      
      section11Title: '11. Ley Aplicable',
      section11Content: [
        'Estos Términos de Servicio se regirán e interpretarán de acuerdo con las leyes internacionales y locales aplicables.',
        'Cualquier disputa que surja de estos términos o su uso de PLATCOL se resolverá mediante negociación de buena fe. Si no se puede llegar a una resolución, las disputas pueden estar sujetas a arbitraje o procedimientos judiciales según lo determine la ley aplicable.'
      ],
      
      section12Title: '12. Información de Contacto',
      section12Content: [
        'Si tiene alguna pregunta sobre estos Términos de Servicio, contáctenos en:',
        'Correo electrónico: legal@platcol.com',
        'Responderemos a las consultas en un plazo razonable.'
      ]
    },
    pt: {
      title: 'Termos de Serviço',
      lastUpdated: 'Última atualização: 20 de fevereiro de 2026',
      intro: 'Bem-vindo ao PLATCOL. Ao acessar ou usar nossa plataforma de dicionário de colocações multilíngue, você concorda em estar vinculado a estes Termos de Serviço. Por favor, leia-os cuidadosamente antes de usar nossos serviços.',
      
      section1Title: '1. Aceitação dos Termos',
      section1Content: [
        'Ao acessar e usar o PLATCOL, você reconhece que leu, compreendeu e concorda em estar vinculado a estes Termos de Serviço e nossa Política de Privacidade. Se você não concorda com estes termos, por favor não use nossa plataforma.',
        'Estes termos se aplicam a todos os usuários, incluindo visitantes, usuários registrados e colaboradores.'
      ],
      
      section2Title: '2. Descrição do Serviço',
      section2Content: [
        'PLATCOL é uma plataforma de dicionário de colocações multilíngue projetada para estudantes de idiomas, educadores e pesquisadores. Nossos serviços incluem:',
        '• Acesso a um banco de dados abrangente de colocações em inglês, espanhol, português, francês e chinês mandarim',
        '• Múltiplos modos de pesquisa, incluindo pesquisas baseadas em lema, semânticas e baseadas em exemplos',
        '• Opções de filtragem avançadas por estrutura morfossintática e tópico/domínio',
        '• Traduções e materiais de referência interlinguísticos',
        '• Exemplos de uso e conteúdo educacional'
      ],
      
      section3Title: '3. Responsabilidades do Usuário',
      section3Content: [
        'Como usuário do PLATCOL, você concorda em:',
        '• Usar a plataforma apenas para fins educacionais, de pesquisa e legais',
        '• Não tentar obter acesso não autorizado a qualquer parte do sistema',
        '• Não interferir ou interromper o serviço ou servidores',
        '• Não usar ferramentas automatizadas (bots, scrapers) sem permissão explícita por escrito',
        '• Respeitar os direitos de propriedade intelectual do conteúdo fornecido na plataforma',
        '• Fornecer informações precisas quando necessário',
        '• Manter a confidencialidade das credenciais da conta'
      ],
      
      section4Title: '4. Propriedade Intelectual',
      section4Content: [
        'Todo o conteúdo fornecido no PLATCOL, incluindo, mas não limitado a entradas de colocações, definições, exemplos, traduções e design de interface, é protegido pelas leis de propriedade intelectual.',
        'A plataforma PLATCOL e seu conteúdo original são de propriedade do PLATCOL e seus licenciadores. Você não pode reproduzir, distribuir, modificar ou criar obras derivadas de nosso conteúdo sem permissão explícita por escrito.',
        'Citação acadêmica e uso justo para fins educacionais são permitidos, desde que seja dada a atribuição adequada ao PLATCOL.'
      ],
      
      section5Title: '5. Política de Uso Aceitável',
      section5Content: [
        'Você não pode usar o PLATCOL para:',
        '• Violar leis ou regulamentos aplicáveis',
        '• Infringir os direitos de outros',
        '• Transmitir conteúdo prejudicial, ofensivo ou inapropriado',
        '• Tentar fazer engenharia reversa, descompilar ou extrair o código-fonte',
        '• Contornar recursos de segurança ou restrições de acesso',
        '• Participar de qualquer atividade que possa prejudicar a plataforma ou seus usuários',
        '• Usar o serviço para fins comerciais sem autorização'
      ],
      
      section6Title: '6. Isenção de Garantias',
      section6Content: [
        'O PLATCOL é fornecido "como está" e "conforme disponível" sem garantias de qualquer tipo, expressas ou implícitas.',
        'Não garantimos que:',
        '• O serviço será ininterrupto, pontual, seguro ou livre de erros',
        '• Os resultados obtidos com o uso do serviço serão precisos ou confiáveis',
        '• Erros ou defeitos serão corrigidos',
        'Embora nos esforcemos pela precisão em nosso banco de dados de colocações, não garantimos a integridade ou precisão das informações linguísticas fornecidas.'
      ],
      
      section7Title: '7. Limitação de Responsabilidade',
      section7Content: [
        'Na extensão máxima permitida por lei, o PLATCOL e seus operadores não serão responsáveis por quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos decorrentes de:',
        '• Seu uso ou incapacidade de usar o serviço',
        '• Qualquer acesso não autorizado ou uso de nossos servidores',
        '• Qualquer interrupção ou cessação de transmissão',
        '• Quaisquer bugs, vírus ou código malicioso transmitido através do serviço',
        '• Quaisquer erros ou omissões no conteúdo',
        'Nossa responsabilidade total não excederá o valor pago por você, se houver, para acessar o serviço.'
      ],
      
      section8Title: '8. Modificações ao Serviço',
      section8Content: [
        'Reservamo-nos o direito de:',
        '• Modificar, suspender ou descontinuar qualquer aspecto do PLATCOL a qualquer momento',
        '• Alterar estes Termos de Serviço com aviso aos usuários',
        '• Atualizar conteúdo, recursos e funcionalidade',
        '• Impor limites em certos recursos ou restringir o acesso',
        'Mudanças significativas serão comunicadas através da plataforma ou por e-mail se você forneceu informações de contato.'
      ],
      
      section9Title: '9. Propósito Educacional',
      section9Content: [
        'O PLATCOL é projetado como uma ferramenta educacional e de pesquisa. A plataforma se destina a apoiar o aprendizado de idiomas e a pesquisa linguística.',
        'O conteúdo deve ser usado como referência e auxílio de aprendizado. Os usuários são encorajados a consultar múltiplas fontes e aplicar pensamento crítico ao usar informações linguísticas.',
        'O PLATCOL não substitui a instrução formal de idiomas ou serviços de tradução profissional.'
      ],
      
      section10Title: '10. Rescisão',
      section10Content: [
        'Reservamo-nos o direito de rescindir ou suspender o acesso ao PLATCOL imediatamente, sem aviso prévio, por qualquer motivo, incluindo, mas não limitado a:',
        '• Violação destes Termos de Serviço',
        '• Atividade fraudulenta, abusiva ou ilegal',
        '• Solicitações de agências governamentais ou policiais',
        'Após a rescisão, seu direito de usar o serviço cessará imediatamente.'
      ],
      
      section11Title: '11. Lei Aplicável',
      section11Content: [
        'Estes Termos de Serviço serão regidos e interpretados de acordo com as leis internacionais e locais aplicáveis.',
        'Quaisquer disputas decorrentes destes termos ou do uso do PLATCOL serão resolvidas por meio de negociação de boa-fé. Se a resolução não puder ser alcançada, as disputas podem estar sujeitas a arbitragem ou procedimentos judiciais conforme determinado pela lei aplicável.'
      ],
      
      section12Title: '12. Informações de Contato',
      section12Content: [
        'Se você tiver alguma dúvida sobre estes Termos de Serviço, entre em contato conosco em:',
        'E-mail: legal@platcol.com',
        'Responderemos às consultas em um prazo razoável.'
      ]
    },
    fr: {
      title: 'Conditions d\'Utilisation',
      lastUpdated: 'Dernière mise à jour : 20 février 2026',
      intro: 'Bienvenue sur PLATCOL. En accédant ou en utilisant notre plateforme de dictionnaire de collocations multilingue, vous acceptez d\'être lié par ces Conditions d\'Utilisation. Veuillez les lire attentivement avant d\'utiliser nos services.',
      
      section1Title: '1. Acceptation des Conditions',
      section1Content: [
        'En accédant et en utilisant PLATCOL, vous reconnaissez avoir lu, compris et accepté d\'être lié par ces Conditions d\'Utilisation et notre Politique de Confidentialité. Si vous n\'acceptez pas ces conditions, veuillez ne pas utiliser notre plateforme.',
        'Ces conditions s\'appliquent à tous les utilisateurs, y compris les visiteurs, les utilisateurs enregistrés et les contributeurs.'
      ],
      
      section2Title: '2. Description du Service',
      section2Content: [
        'PLATCOL est une plateforme de dictionnaire de collocations multilingue conçue pour les apprenants de langues, les éducateurs et les chercheurs. Nos services comprennent :',
        '• Accès à une base de données complète de collocations en anglais, espagnol, portugais, français et chinois mandarin',
        '• Plusieurs modes de recherche, y compris les recherches basées sur les lemmes, sémantiques et basées sur des exemples',
        '• Options de filtrage avancées par structure morphosyntaxique et sujet/domaine',
        '• Traductions et matériaux de référence interlinguistiques',
        '• Exemples d\'utilisation et contenu éducatif'
      ],
      
      section3Title: '3. Responsabilités de l\'Utilisateur',
      section3Content: [
        'En tant qu\'utilisateur de PLATCOL, vous acceptez de :',
        '• Utiliser la plateforme uniquement à des fins éducatives, de recherche et légales',
        '• Ne pas tenter d\'obtenir un accès non autorisé à une partie du système',
        '• Ne pas interférer avec ou perturber le service ou les serveurs',
        '• Ne pas utiliser d\'outils automatisés (bots, scrapers) sans autorisation écrite explicite',
        '• Respecter les droits de propriété intellectuelle du contenu fourni sur la plateforme',
        '• Fournir des informations exactes lorsque cela est nécessaire',
        '• Maintenir la confidentialité des identifiants de compte'
      ],
      
      section4Title: '4. Propriété Intellectuelle',
      section4Content: [
        'Tout le contenu fourni sur PLATCOL, y compris, mais sans s\'y limiter, les entrées de collocations, définitions, exemples, traductions et conception d\'interface, est protégé par les lois sur la propriété intellectuelle.',
        'La plateforme PLATCOL et son contenu original appartiennent à PLATCOL et à ses concédants de licence. Vous ne pouvez pas reproduire, distribuer, modifier ou créer des œuvres dérivées de notre contenu sans autorisation écrite explicite.',
        'La citation académique et l\'utilisation équitable à des fins éducatives sont autorisées, à condition qu\'une attribution appropriée soit donnée à PLATCOL.'
      ],
      
      section5Title: '5. Politique d\'Utilisation Acceptable',
      section5Content: [
        'Vous ne pouvez pas utiliser PLATCOL pour :',
        '• Violer des lois ou réglementations applicables',
        '• Enfreindre les droits d\'autrui',
        '• Transmettre du contenu nuisible, offensant ou inapproprié',
        '• Tenter de faire de l\'ingénierie inverse, décompiler ou extraire le code source',
        '• Contourner des fonctionnalités de sécurité ou des restrictions d\'accès',
        '• S\'engager dans toute activité pouvant nuire à la plateforme ou à ses utilisateurs',
        '• Utiliser le service à des fins commerciales sans autorisation'
      ],
      
      section6Title: '6. Clause de Non-Responsabilité',
      section6Content: [
        'PLATCOL est fourni "tel quel" et "tel que disponible" sans garanties d\'aucune sorte, expresses ou implicites.',
        'Nous ne garantissons pas que :',
        '• Le service sera ininterrompu, opportun, sécurisé ou sans erreur',
        '• Les résultats obtenus en utilisant le service seront précis ou fiables',
        '• Les erreurs ou défauts seront corrigés',
        'Bien que nous nous efforcions d\'assurer l\'exactitude de notre base de données de collocations, nous ne garantissons pas l\'exhaustivité ou l\'exactitude des informations linguistiques fournies.'
      ],
      
      section7Title: '7. Limitation de Responsabilité',
      section7Content: [
        'Dans toute la mesure permise par la loi, PLATCOL et ses opérateurs ne seront pas responsables des dommages indirects, accessoires, spéciaux, consécutifs ou punitifs découlant de :',
        '• Votre utilisation ou incapacité à utiliser le service',
        '• Tout accès non autorisé ou utilisation de nos serveurs',
        '• Toute interruption ou cessation de transmission',
        '• Tout bug, virus ou code malveillant transmis via le service',
        '• Toute erreur ou omission dans le contenu',
        'Notre responsabilité totale ne dépassera pas le montant payé par vous, le cas échéant, pour accéder au service.'
      ],
      
      section8Title: '8. Modifications du Service',
      section8Content: [
        'Nous nous réservons le droit de :',
        '• Modifier, suspendre ou interrompre tout aspect de PLATCOL à tout moment',
        '• Modifier ces Conditions d\'Utilisation avec notification aux utilisateurs',
        '• Mettre à jour le contenu, les fonctionnalités et les fonctionnalités',
        '• Imposer des limites sur certaines fonctionnalités ou restreindre l\'accès',
        'Les changements importants seront communiqués via la plateforme ou par e-mail si vous avez fourni des coordonnées.'
      ],
      
      section9Title: '9. Objectif Éducatif',
      section9Content: [
        'PLATCOL est conçu comme un outil éducatif et de recherche. La plateforme vise à soutenir l\'apprentissage des langues et la recherche linguistique.',
        'Le contenu doit être utilisé comme référence et aide à l\'apprentissage. Les utilisateurs sont encouragés à consulter plusieurs sources et à appliquer une pensée critique lors de l\'utilisation d\'informations linguistiques.',
        'PLATCOL ne remplace pas l\'enseignement formel des langues ou les services de traduction professionnelle.'
      ],
      
      section10Title: '10. Résiliation',
      section10Content: [
        'Nous nous réservons le droit de résilier ou de suspendre l\'accès à PLATCOL immédiatement, sans préavis, pour quelque raison que ce soit, y compris, mais sans s\'y limiter :',
        '• Violation de ces Conditions d\'Utilisation',
        '• Activité frauduleuse, abusive ou illégale',
        '• Demandes d\'agences gouvernementales ou de maintien de l\'ordre',
        'Après la résiliation, votre droit d\'utiliser le service cessera immédiatement.'
      ],
      
      section11Title: '11. Droit Applicable',
      section11Content: [
        'Ces Conditions d\'Utilisation seront régies et interprétées conformément aux lois internationales et locales applicables.',
        'Tout litige découlant de ces conditions ou de votre utilisation de PLATCOL sera résolu par une négociation de bonne foi. Si une résolution ne peut être atteinte, les litiges peuvent faire l\'objet d\'un arbitrage ou de procédures judiciaires tel que déterminé par la loi applicable.'
      ],
      
      section12Title: '12. Informations de Contact',
      section12Content: [
        'Si vous avez des questions concernant ces Conditions d\'Utilisation, veuillez nous contacter à :',
        'E-mail : legal@platcol.com',
        'Nous répondrons aux demandes dans un délai raisonnable.'
      ]
    },
    zh: {
      title: '服务条款',
      lastUpdated: '最后更新：2026年2月20日',
      intro: '欢迎使用PLATCOL。通过访问或使用我们的多语言搭配词典平台，您同意受这些服务条款的约束。请在使用我们的服务之前仔细阅读。',
      
      section1Title: '1. 接受条款',
      section1Content: [
        '通过访问和使用PLATCOL，您承认您已阅读、理解并同意受这些服务条款和我们的隐私政策的约束。如果您不同意这些条款，请不要使用我们的平台。',
        '这些条款适用于所有用户，包括访客、注册用户和贡献者。'
      ],
      
      section2Title: '2. 服务描述',
      section2Content: [
        'PLATCOL是一个为语言学习者、教育工作者和研究人员设计的多语言搭配词典平台。我们的服务包括：',
        '• 访问包含英语、西班牙语、葡萄牙语、法语和汉语普通话搭配的综合数据库',
        '• 多种搜索模式，包括基于词元的搜索、语义搜索和基于示例的搜索',
        '• 按形态句法结构和主题/领域的高级过滤选项',
        '• 翻译和跨语言参考材料',
        '• 使用示例和教育内容'
      ],
      
      section3Title: '3. 用户责任',
      section3Content: [
        '作为PLATCOL的用户，您同意：',
        '• 仅将平台用于合法、教育和研究目的',
        '• 不尝试未经授权访问系统的任何部分',
        '• 不干扰或中断服务或服务器',
        '• 未经明确书面许可不使用自动化工具（机器人、爬虫）',
        '• 尊重平台上提供内容的知识产权',
        '• 在需要时提供准确的信息',
        '• 维护账户凭据的机密性'
      ],
      
      section4Title: '4. 知识产权',
      section4Content: [
        'PLATCOL上提供的所有内容，包括但不限于搭配条目、定义、示例、翻译和界面设计，均受知识产权法保护。',
        'PLATCOL平台及其原始内容归PLATCOL及其许可方所有。未经明确书面许可，您不得复制、分发、修改或创建我们内容的衍生作品。',
        '允许学术引用和用于教育目的的合理使用，前提是适当归功于PLATCOL。'
      ],
      
      section5Title: '5. 可接受使用政策',
      section5Content: [
        '您不得使用PLATCOL进行以下活动：',
        '• 违反任何适用的法律或法规',
        '• 侵犯他人权利',
        '• 传输有害、冒犯性或不当内容',
        '• 尝试进行反向工程、反编译或提取源代码',
        '• 规避任何安全功能或访问限制',
        '• 参与可能损害平台或其用户的任何活动',
        '• 未经授权将服务用于商业目的'
      ],
      
      section6Title: '6. 免责声明',
      section6Content: [
        'PLATCOL按"原样"和"可用"提供，不提供任何明示或暗示的保证。',
        '我们不保证：',
        '• 服务将不间断、及时、安全或无错误',
        '• 使用服务获得的结果将准确或可靠',
        '• 将更正任何错误或缺陷',
        '虽然我们努力确保搭配数据库的准确性，但我们不保证所提供语言信息的完整性或准确性。'
      ],
      
      section7Title: '7. 责任限制',
      section7Content: [
        '在法律允许的最大范围内，PLATCOL及其运营商不对以下产生的任何间接、附带、特殊、后果性或惩罚性损害负责：',
        '• 您使用或无法使用服务',
        '• 对我们服务器的任何未经授权的访问或使用',
        '• 任何传输中断或停止',
        '• 通过服务传输的任何错误、病毒或恶意代码',
        '• 内容中的任何错误或遗漏',
        '我们的总责任不应超过您为访问服务而支付的金额（如有）。'
      ],
      
      section8Title: '8. 服务修改',
      section8Content: [
        '我们保留以下权利：',
        '• 随时修改、暂停或中止PLATCOL的任何方面',
        '• 在通知用户的情况下更改这些服务条款',
        '• 更新内容、功能和功能性',
        '• 对某些功能施加限制或限制访问',
        '如果您提供了联系信息，重大变更将通过平台或电子邮件进行通知。'
      ],
      
      section9Title: '9. 教育目的',
      section9Content: [
        'PLATCOL旨在作为教育和研究工具。该平台旨在支持语言学习和语言研究。',
        '内容应用作参考和学习辅助。鼓励用户在使用语言信息时咨询多个来源并运用批判性思维。',
        'PLATCOL不能替代正规的语言教学或专业翻译服务。'
      ],
      
      section10Title: '10. 终止',
      section10Content: [
        '我们保留立即终止或暂停访问PLATCOL的权利，无需事先通知，原因包括但不限于：',
        '• 违反这些服务条款',
        '• 欺诈、滥用或非法活动',
        '• 执法或政府机构的请求',
        '终止后，您使用服务的权利将立即停止。'
      ],
      
      section11Title: '11. 适用法律',
      section11Content: [
        '这些服务条款应根据适用的国际和地方法律进行管辖和解释。',
        '因这些条款或您使用PLATCOL而产生的任何争议应通过善意协商解决。如果无法达成解决方案，争议可能根据适用法律的规定进行仲裁或法院诉讼。'
      ],
      
      section12Title: '12. 联系信息',
      section12Content: [
        '如果您对这些服务条款有任何疑问，请通过以下方式与我们联系：',
        '电子邮件：legal@platcol.com',
        '我们将在合理的时间范围内回复询问。'
      ]
    }
  };

  const text = content[pageLanguage];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <header className="mb-8 sm:mb-12 pb-6 sm:pb-8 border-b border-gray-200">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-3 sm:mb-4">{text.title}</h1>
        <p className="text-sm sm:text-base text-gray-500">{text.lastUpdated}</p>
      </header>

      <div className="prose prose-sm sm:prose-base max-w-none space-y-6 sm:space-y-8">
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          {text.intro}
        </p>

        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => {
          const titleKey = `section${num}Title` as keyof typeof text;
          const contentKey = `section${num}Content` as keyof typeof text;
          const title = text[titleKey] as string;
          const content = text[contentKey] as string[];
          
          return (
            <section key={num}>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{title}</h2>
              {content.map((paragraph, index) => (
                <p key={index} className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2">
                  {paragraph}
                </p>
              ))}
            </section>
          );
        })}
      </div>
    </article>
  );
}
