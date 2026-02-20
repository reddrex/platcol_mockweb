import { usePageLanguage } from '../contexts/PageLanguageContext';

export function CookiePolicy() {
  const { pageLanguage } = usePageLanguage();

  const content = {
    en: {
      title: 'Cookie Policy',
      lastUpdated: 'Last Updated: February 20, 2026',
      intro: 'This Cookie Policy explains how PLATCOL uses cookies and similar tracking technologies on our multilingual collocation dictionary platform. By using our services, you consent to the use of cookies as described in this policy.',
      
      section1Title: '1. What Are Cookies?',
      section1Content: [
        'Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.',
        'Cookies help us remember your preferences, understand how you use our platform, and improve your overall experience.'
      ],
      
      section2Title: '2. Types of Cookies We Use',
      section2Subtitle1: 'Essential Cookies',
      section2Content1: [
        'These cookies are necessary for the basic functioning of PLATCOL. They enable core features such as:',
        '• Page navigation and access to secure areas',
        '• Maintaining your session while using the platform',
        '• Basic security functions',
        'These cookies cannot be disabled as the platform would not function properly without them.'
      ],
      
      section2Subtitle2: 'Preference Cookies',
      section2Content2: [
        'These cookies remember your choices and preferences to provide a personalized experience:',
        '• Your selected search language (English, Spanish, Portuguese, French, or Mandarin Chinese)',
        '• Your selected interface/page language',
        '• Display preferences and accessibility settings',
        '• Search mode preferences (lemma-based, semantic, or example-based)',
        'These cookies enhance your user experience but are not essential for the platform to function.'
      ],
      
      section2Subtitle3: 'Analytics Cookies',
      section2Content3: [
        'These cookies help us understand how visitors interact with our platform by collecting anonymous information:',
        '• Pages visited and time spent on each page',
        '• Search queries and patterns (anonymized)',
        '• Click patterns and navigation flow',
        '• Device and browser information',
        '• Error messages and technical issues',
        'We use this information to improve our content, fix problems, and enhance the user experience. All data collected is aggregated and anonymous.'
      ],
      
      section2Subtitle4: 'Performance Cookies',
      section2Content4: [
        'These cookies help us monitor and improve the performance of PLATCOL:',
        '• Load times and page speed',
        '• Search result relevance and accuracy',
        '• Platform stability and errors',
        'This data helps us identify technical issues and optimize the platform for better performance.'
      ],
      
      section3Title: '3. Cookies We Do NOT Use',
      section3Content: [
        'PLATCOL does not use the following types of cookies:',
        '• Advertising cookies: We do not display advertisements or use cookies for advertising purposes',
        '• Third-party marketing cookies: We do not share your data with third parties for marketing',
        '• Social media tracking cookies: We do not track your activity across social media platforms',
        '• Cross-site tracking cookies: We do not track your browsing activity on other websites'
      ],
      
      section4Title: '4. First-Party vs Third-Party Cookies',
      section4Subtitle1: 'First-Party Cookies',
      section4Content1: [
        'Most cookies used by PLATCOL are first-party cookies, which are set directly by our platform. These include:',
        '• Language preference cookies',
        '• Search settings and filters',
        '• Session management cookies'
      ],
      
      section4Subtitle2: 'Third-Party Cookies',
      section4Content2: [
        'We may use limited third-party services that set their own cookies:',
        '• Analytics services to understand user behavior (e.g., anonymized usage statistics)',
        '• Content delivery networks (CDN) to ensure fast loading times',
        'These third-party services are carefully selected and comply with data protection regulations. You can review their privacy policies through their respective websites.'
      ],
      
      section5Title: '5. How Long Do Cookies Last?',
      section5Subtitle1: 'Session Cookies',
      section5Content1: [
        'These temporary cookies are deleted when you close your browser. They are used for:',
        '• Managing your current session',
        '• Maintaining search state during your visit',
        '• Ensuring security during your session'
      ],
      
      section5Subtitle2: 'Persistent Cookies',
      section5Content2: [
        'These cookies remain on your device for a set period or until you delete them. They are used for:',
        '• Remembering your language preferences (expires after 1 year)',
        '• Analytics and performance monitoring (expires after 2 years)',
        '• Returning user recognition (expires after 6 months)'
      ],
      
      section6Title: '6. Managing Your Cookie Preferences',
      section6Content: [
        'You have several options to manage cookies:'
      ],
      
      section6Subtitle1: 'Browser Settings',
      section6Content1: [
        'Most web browsers allow you to control cookies through their settings. You can:',
        '• Block all cookies',
        '• Block third-party cookies only',
        '• Delete cookies after each session',
        '• Set exceptions for specific websites',
        '',
        'Common browsers provide cookie management at:',
        '• Chrome: Settings > Privacy and Security > Cookies',
        '• Firefox: Settings > Privacy & Security > Cookies and Site Data',
        '• Safari: Preferences > Privacy > Cookies and website data',
        '• Edge: Settings > Privacy, search, and services > Cookies',
        '',
        'Note: Blocking all cookies may affect your experience on PLATCOL, as some features may not function properly.'
      ],
      
      section6Subtitle2: 'Platform Settings',
      section6Content2: [
        'PLATCOL provides controls for certain cookies:',
        '• You can clear your language preferences at any time by changing them in the interface',
        '• You can opt out of analytics cookies (if we implement this feature in the future)',
        '• Essential cookies cannot be disabled as they are necessary for the platform to function'
      ],
      
      section7Title: '7. Do Not Track (DNT) Signals',
      section7Content: [
        'Some browsers support a "Do Not Track" feature that sends signals to websites requesting not to be tracked. Currently, there is no industry standard for how websites should respond to DNT signals.',
        'PLATCOL respects user privacy and minimizes data collection. If you enable DNT in your browser, we will honor this preference to the extent possible while still providing essential functionality.'
      ],
      
      section8Title: '8. Cookies and Personal Data',
      section8Content: [
        'Most cookies used by PLATCOL do not contain personally identifiable information. However, some cookies may be linked to your browsing session or preferences.',
        'Any personal data collected through cookies is handled in accordance with our Privacy Policy and applicable data protection regulations (GDPR, CCPA, etc.).',
        'You have the right to:',
        '• Access cookie data associated with your session',
        '• Request deletion of cookie data',
        '• Object to certain types of cookie usage',
        'For more information, see our Privacy Policy or contact us at privacy@platcol.com.'
      ],
      
      section9Title: '9. Updates to This Cookie Policy',
      section9Content: [
        'We may update this Cookie Policy from time to time to reflect changes in our practices, technologies, or legal requirements.',
        'When we make significant changes, we will:',
        '• Update the "Last Updated" date at the top of this policy',
        '• Notify users through a banner or notice on the platform',
        '• Request renewed consent if required by law',
        'We encourage you to review this policy periodically to stay informed about how we use cookies.'
      ],
      
      section10Title: '10. Contact Us',
      section10Content: [
        'If you have questions or concerns about our use of cookies, please contact us at:',
        'Email: privacy@platcol.com',
        'Subject: Cookie Policy Inquiry',
        '',
        'We will respond to your inquiry within 30 days.'
      ]
    },
    es: {
      title: 'Política de Cookies',
      lastUpdated: 'Última actualización: 20 de febrero de 2026',
      intro: 'Esta Política de Cookies explica cómo PLATCOL utiliza cookies y tecnologías de seguimiento similares en nuestra plataforma de diccionario de colocaciones multilingüe. Al utilizar nuestros servicios, usted acepta el uso de cookies como se describe en esta política.',
      
      section1Title: '1. ¿Qué son las Cookies?',
      section1Content: [
        'Las cookies son pequeños archivos de texto que se colocan en su dispositivo (computadora, teléfono inteligente o tableta) cuando visita un sitio web. Se utilizan ampliamente para hacer que los sitios web funcionen de manera más eficiente y proporcionar información a los propietarios del sitio.',
        'Las cookies nos ayudan a recordar sus preferencias, comprender cómo usa nuestra plataforma y mejorar su experiencia general.'
      ],
      
      section2Title: '2. Tipos de Cookies que Utilizamos',
      section2Subtitle1: 'Cookies Esenciales',
      section2Content1: [
        'Estas cookies son necesarias para el funcionamiento básico de PLATCOL. Habilitan funciones principales como:',
        '• Navegación de páginas y acceso a áreas seguras',
        '• Mantener su sesión mientras usa la plataforma',
        '• Funciones básicas de seguridad',
        'Estas cookies no se pueden deshabilitar ya que la plataforma no funcionaría correctamente sin ellas.'
      ],
      
      section2Subtitle2: 'Cookies de Preferencias',
      section2Content2: [
        'Estas cookies recuerdan sus elecciones y preferencias para proporcionar una experiencia personalizada:',
        '• Su idioma de búsqueda seleccionado (inglés, español, portugués, francés o chino mandarín)',
        '• Su idioma de interfaz/página seleccionado',
        '• Preferencias de visualización y configuración de accesibilidad',
        '• Preferencias de modo de búsqueda (basado en lemas, semántico o basado en ejemplos)',
        'Estas cookies mejoran su experiencia de usuario pero no son esenciales para que la plataforma funcione.'
      ],
      
      section2Subtitle3: 'Cookies de Análisis',
      section2Content3: [
        'Estas cookies nos ayudan a comprender cómo los visitantes interactúan con nuestra plataforma al recopilar información anónima:',
        '• Páginas visitadas y tiempo pasado en cada página',
        '• Consultas de búsqueda y patrones (anonimizados)',
        '• Patrones de clics y flujo de navegación',
        '• Información del dispositivo y navegador',
        '• Mensajes de error y problemas técnicos',
        'Utilizamos esta información para mejorar nuestro contenido, solucionar problemas y mejorar la experiencia del usuario. Todos los datos recopilados son agregados y anónimos.'
      ],
      
      section2Subtitle4: 'Cookies de Rendimiento',
      section2Content4: [
        'Estas cookies nos ayudan a monitorear y mejorar el rendimiento de PLATCOL:',
        '• Tiempos de carga y velocidad de la página',
        '• Relevancia y precisión de los resultados de búsqueda',
        '• Estabilidad de la plataforma y errores',
        'Estos datos nos ayudan a identificar problemas técnicos y optimizar la plataforma para un mejor rendimiento.'
      ],
      
      section3Title: '3. Cookies que NO Utilizamos',
      section3Content: [
        'PLATCOL no utiliza los siguientes tipos de cookies:',
        '• Cookies publicitarias: No mostramos anuncios ni utilizamos cookies con fines publicitarios',
        '• Cookies de marketing de terceros: No compartimos sus datos con terceros para marketing',
        '• Cookies de seguimiento de redes sociales: No rastreamos su actividad en plataformas de redes sociales',
        '• Cookies de seguimiento entre sitios: No rastreamos su actividad de navegación en otros sitios web'
      ],
      
      section4Title: '4. Cookies Propias vs de Terceros',
      section4Subtitle1: 'Cookies Propias',
      section4Content1: [
        'La mayoría de las cookies utilizadas por PLATCOL son cookies propias, que son establecidas directamente por nuestra plataforma. Estas incluyen:',
        '• Cookies de preferencia de idioma',
        '• Configuración de búsqueda y filtros',
        '• Cookies de gestión de sesión'
      ],
      
      section4Subtitle2: 'Cookies de Terceros',
      section4Content2: [
        'Podemos utilizar servicios limitados de terceros que establecen sus propias cookies:',
        '• Servicios de análisis para comprender el comportamiento del usuario (por ejemplo, estadísticas de uso anonimizadas)',
        '• Redes de entrega de contenido (CDN) para garantizar tiempos de carga rápidos',
        'Estos servicios de terceros se seleccionan cuidadosamente y cumplen con las regulaciones de protección de datos. Puede revisar sus políticas de privacidad a través de sus respectivos sitios web.'
      ],
      
      section5Title: '5. ¿Cuánto Duran las Cookies?',
      section5Subtitle1: 'Cookies de Sesión',
      section5Content1: [
        'Estas cookies temporales se eliminan cuando cierra su navegador. Se utilizan para:',
        '• Gestionar su sesión actual',
        '• Mantener el estado de búsqueda durante su visita',
        '• Garantizar la seguridad durante su sesión'
      ],
      
      section5Subtitle2: 'Cookies Persistentes',
      section5Content2: [
        'Estas cookies permanecen en su dispositivo durante un período establecido o hasta que las elimine. Se utilizan para:',
        '• Recordar sus preferencias de idioma (caduca después de 1 año)',
        '• Análisis y monitoreo de rendimiento (caduca después de 2 años)',
        '• Reconocimiento de usuarios que regresan (caduca después de 6 meses)'
      ],
      
      section6Title: '6. Gestión de sus Preferencias de Cookies',
      section6Content: [
        'Tiene varias opciones para administrar las cookies:'
      ],
      
      section6Subtitle1: 'Configuración del Navegador',
      section6Content1: [
        'La mayoría de los navegadores web le permiten controlar las cookies a través de su configuración. Puede:',
        '• Bloquear todas las cookies',
        '• Bloquear solo cookies de terceros',
        '• Eliminar cookies después de cada sesión',
        '• Establecer excepciones para sitios web específicos',
        '',
        'Los navegadores comunes proporcionan gestión de cookies en:',
        '• Chrome: Configuración > Privacidad y seguridad > Cookies',
        '• Firefox: Configuración > Privacidad y seguridad > Cookies y datos del sitio',
        '• Safari: Preferencias > Privacidad > Cookies y datos de sitios web',
        '• Edge: Configuración > Privacidad, búsqueda y servicios > Cookies',
        '',
        'Nota: Bloquear todas las cookies puede afectar su experiencia en PLATCOL, ya que algunas funciones pueden no funcionar correctamente.'
      ],
      
      section6Subtitle2: 'Configuración de la Plataforma',
      section6Content2: [
        'PLATCOL proporciona controles para ciertas cookies:',
        '• Puede borrar sus preferencias de idioma en cualquier momento cambiándolas en la interfaz',
        '• Puede optar por no recibir cookies de análisis (si implementamos esta función en el futuro)',
        '• Las cookies esenciales no se pueden deshabilitar ya que son necesarias para que la plataforma funcione'
      ],
      
      section7Title: '7. Señales de No Rastrear (DNT)',
      section7Content: [
        'Algunos navegadores admiten una función de "No rastrear" que envía señales a los sitios web solicitando no ser rastreados. Actualmente, no existe un estándar de la industria sobre cómo los sitios web deben responder a las señales DNT.',
        'PLATCOL respeta la privacidad del usuario y minimiza la recopilación de datos. Si habilita DNT en su navegador, respetaremos esta preferencia en la medida de lo posible mientras seguimos proporcionando funcionalidad esencial.'
      ],
      
      section8Title: '8. Cookies y Datos Personales',
      section8Content: [
        'La mayoría de las cookies utilizadas por PLATCOL no contienen información de identificación personal. Sin embargo, algunas cookies pueden estar vinculadas a su sesión de navegación o preferencias.',
        'Cualquier dato personal recopilado a través de cookies se maneja de acuerdo con nuestra Política de Privacidad y las regulaciones de protección de datos aplicables (RGPD, CCPA, etc.).',
        'Usted tiene derecho a:',
        '• Acceder a los datos de cookies asociados con su sesión',
        '• Solicitar la eliminación de datos de cookies',
        '• Oponerse a ciertos tipos de uso de cookies',
        'Para obtener más información, consulte nuestra Política de Privacidad o contáctenos en privacy@platcol.com.'
      ],
      
      section9Title: '9. Actualizaciones de esta Política de Cookies',
      section9Content: [
        'Podemos actualizar esta Política de Cookies de vez en cuando para reflejar cambios en nuestras prácticas, tecnologías o requisitos legales.',
        'Cuando realizamos cambios significativos:',
        '• Actualizamos la fecha de "Última actualización" en la parte superior de esta política',
        '• Notificamos a los usuarios a través de un banner o aviso en la plataforma',
        '• Solicitamos un consentimiento renovado si lo requiere la ley',
        'Le recomendamos que revise esta política periódicamente para mantenerse informado sobre cómo usamos las cookies.'
      ],
      
      section10Title: '10. Contáctenos',
      section10Content: [
        'Si tiene preguntas o inquietudes sobre nuestro uso de cookies, contáctenos en:',
        'Correo electrónico: privacy@platcol.com',
        'Asunto: Consulta sobre la Política de Cookies',
        '',
        'Responderemos a su consulta dentro de los 30 días.'
      ]
    },
    pt: {
      title: 'Política de Cookies',
      lastUpdated: 'Última atualização: 20 de fevereiro de 2026',
      intro: 'Esta Política de Cookies explica como o PLATCOL usa cookies e tecnologias de rastreamento semelhantes em nossa plataforma de dicionário de colocações multilíngue. Ao usar nossos serviços, você consente com o uso de cookies conforme descrito nesta política.',
      
      section1Title: '1. O que são Cookies?',
      section1Content: [
        'Cookies são pequenos arquivos de texto colocados no seu dispositivo (computador, smartphone ou tablet) quando você visita um site. Eles são amplamente usados para fazer os sites funcionarem de forma mais eficiente e fornecer informações aos proprietários do site.',
        'Os cookies nos ajudam a lembrar suas preferências, entender como você usa nossa plataforma e melhorar sua experiência geral.'
      ],
      
      section2Title: '2. Tipos de Cookies que Usamos',
      section2Subtitle1: 'Cookies Essenciais',
      section2Content1: [
        'Esses cookies são necessários para o funcionamento básico do PLATCOL. Eles habilitam recursos principais como:',
        '• Navegação de páginas e acesso a áreas seguras',
        '• Manter sua sessão enquanto usa a plataforma',
        '• Funções básicas de segurança',
        'Esses cookies não podem ser desabilitados, pois a plataforma não funcionaria corretamente sem eles.'
      ],
      
      section2Subtitle2: 'Cookies de Preferência',
      section2Content2: [
        'Esses cookies lembram suas escolhas e preferências para fornecer uma experiência personalizada:',
        '• Seu idioma de pesquisa selecionado (inglês, espanhol, português, francês ou chinês mandarim)',
        '• Seu idioma de interface/página selecionado',
        '• Preferências de exibição e configurações de acessibilidade',
        '• Preferências de modo de pesquisa (baseado em lema, semântico ou baseado em exemplos)',
        'Esses cookies melhoram sua experiência de usuário, mas não são essenciais para o funcionamento da plataforma.'
      ],
      
      section2Subtitle3: 'Cookies de Análise',
      section2Content3: [
        'Esses cookies nos ajudam a entender como os visitantes interagem com nossa plataforma coletando informações anônimas:',
        '• Páginas visitadas e tempo gasto em cada página',
        '• Consultas de pesquisa e padrões (anonimizados)',
        '• Padrões de cliques e fluxo de navegação',
        '• Informações do dispositivo e navegador',
        '• Mensagens de erro e problemas técnicos',
        'Usamos essas informações para melhorar nosso conteúdo, corrigir problemas e aprimorar a experiência do usuário. Todos os dados coletados são agregados e anônimos.'
      ],
      
      section2Subtitle4: 'Cookies de Desempenho',
      section2Content4: [
        'Esses cookies nos ajudam a monitorar e melhorar o desempenho do PLATCOL:',
        '• Tempos de carregamento e velocidade da página',
        '• Relevância e precisão dos resultados de pesquisa',
        '• Estabilidade da plataforma e erros',
        'Esses dados nos ajudam a identificar problemas técnicos e otimizar a plataforma para melhor desempenho.'
      ],
      
      section3Title: '3. Cookies que NÃO Usamos',
      section3Content: [
        'O PLATCOL não usa os seguintes tipos de cookies:',
        '• Cookies de publicidade: Não exibimos anúncios nem usamos cookies para fins publicitários',
        '• Cookies de marketing de terceiros: Não compartilhamos seus dados com terceiros para marketing',
        '• Cookies de rastreamento de mídia social: Não rastreamos sua atividade em plataformas de mídia social',
        '• Cookies de rastreamento entre sites: Não rastreamos sua atividade de navegação em outros sites'
      ],
      
      section4Title: '4. Cookies Próprios vs de Terceiros',
      section4Subtitle1: 'Cookies Próprios',
      section4Content1: [
        'A maioria dos cookies usados pelo PLATCOL são cookies próprios, que são definidos diretamente por nossa plataforma. Estes incluem:',
        '• Cookies de preferência de idioma',
        '• Configurações de pesquisa e filtros',
        '• Cookies de gerenciamento de sessão'
      ],
      
      section4Subtitle2: 'Cookies de Terceiros',
      section4Content2: [
        'Podemos usar serviços limitados de terceiros que definem seus próprios cookies:',
        '• Serviços de análise para entender o comportamento do usuário (por exemplo, estatísticas de uso anonimizadas)',
        '• Redes de distribuição de conteúdo (CDN) para garantir tempos de carregamento rápidos',
        'Esses serviços de terceiros são cuidadosamente selecionados e cumprem com os regulamentos de proteção de dados. Você pode revisar suas políticas de privacidade através de seus respectivos sites.'
      ],
      
      section5Title: '5. Quanto Tempo Duram os Cookies?',
      section5Subtitle1: 'Cookies de Sessão',
      section5Content1: [
        'Esses cookies temporários são excluídos quando você fecha seu navegador. Eles são usados para:',
        '• Gerenciar sua sessão atual',
        '• Manter o estado de pesquisa durante sua visita',
        '• Garantir segurança durante sua sessão'
      ],
      
      section5Subtitle2: 'Cookies Persistentes',
      section5Content2: [
        'Esses cookies permanecem no seu dispositivo por um período definido ou até que você os exclua. Eles são usados para:',
        '• Lembrar suas preferências de idioma (expira após 1 ano)',
        '• Análise e monitoramento de desempenho (expira após 2 anos)',
        '• Reconhecimento de usuários que retornam (expira após 6 meses)'
      ],
      
      section6Title: '6. Gerenciando suas Preferências de Cookies',
      section6Content: [
        'Você tem várias opções para gerenciar cookies:'
      ],
      
      section6Subtitle1: 'Configurações do Navegador',
      section6Content1: [
        'A maioria dos navegadores permite controlar cookies através de suas configurações. Você pode:',
        '• Bloquear todos os cookies',
        '• Bloquear apenas cookies de terceiros',
        '• Excluir cookies após cada sessão',
        '• Definir exceções para sites específicos',
        '',
        'Navegadores comuns fornecem gerenciamento de cookies em:',
        '• Chrome: Configurações > Privacidade e segurança > Cookies',
        '• Firefox: Configurações > Privacidade e segurança > Cookies e dados do site',
        '• Safari: Preferências > Privacidade > Cookies e dados de sites',
        '• Edge: Configurações > Privacidade, pesquisa e serviços > Cookies',
        '',
        'Nota: Bloquear todos os cookies pode afetar sua experiência no PLATCOL, pois alguns recursos podem não funcionar corretamente.'
      ],
      
      section6Subtitle2: 'Configurações da Plataforma',
      section6Content2: [
        'O PLATCOL fornece controles para certos cookies:',
        '• Você pode limpar suas preferências de idioma a qualquer momento alterando-as na interface',
        '• Você pode optar por não receber cookies de análise (se implementarmos este recurso no futuro)',
        '• Cookies essenciais não podem ser desabilitados, pois são necessários para o funcionamento da plataforma'
      ],
      
      section7Title: '7. Sinais de Não Rastrear (DNT)',
      section7Content: [
        'Alguns navegadores suportam um recurso "Não Rastrear" que envia sinais para sites solicitando não ser rastreado. Atualmente, não há um padrão da indústria sobre como os sites devem responder aos sinais DNT.',
        'O PLATCOL respeita a privacidade do usuário e minimiza a coleta de dados. Se você habilitar o DNT em seu navegador, respeitaremos essa preferência na medida do possível enquanto ainda fornecemos funcionalidade essencial.'
      ],
      
      section8Title: '8. Cookies e Dados Pessoais',
      section8Content: [
        'A maioria dos cookies usados pelo PLATCOL não contém informações pessoalmente identificáveis. No entanto, alguns cookies podem estar vinculados à sua sessão de navegação ou preferências.',
        'Quaisquer dados pessoais coletados através de cookies são tratados de acordo com nossa Política de Privacidade e regulamentos de proteção de dados aplicáveis (GDPR, CCPA, etc.).',
        'Você tem o direito de:',
        '• Acessar dados de cookies associados à sua sessão',
        '• Solicitar a exclusão de dados de cookies',
        '• Objetar a certos tipos de uso de cookies',
        'Para mais informações, consulte nossa Política de Privacidade ou entre em contato conosco em privacy@platcol.com.'
      ],
      
      section9Title: '9. Atualizações desta Política de Cookies',
      section9Content: [
        'Podemos atualizar esta Política de Cookies periodicamente para refletir mudanças em nossas práticas, tecnologias ou requisitos legais.',
        'Quando fazemos mudanças significativas:',
        '• Atualizamos a data de "Última atualização" no topo desta política',
        '• Notificamos os usuários através de um banner ou aviso na plataforma',
        '• Solicitamos consentimento renovado se exigido por lei',
        'Encorajamos você a revisar esta política periodicamente para se manter informado sobre como usamos cookies.'
      ],
      
      section10Title: '10. Entre em Contato',
      section10Content: [
        'Se você tiver dúvidas ou preocupações sobre nosso uso de cookies, entre em contato conosco em:',
        'E-mail: privacy@platcol.com',
        'Assunto: Consulta sobre Política de Cookies',
        '',
        'Responderemos à sua consulta dentro de 30 dias.'
      ]
    },
    fr: {
      title: 'Politique en Matière de Cookies',
      lastUpdated: 'Dernière mise à jour : 20 février 2026',
      intro: 'Cette Politique en matière de Cookies explique comment PLATCOL utilise les cookies et les technologies de suivi similaires sur notre plateforme de dictionnaire de collocations multilingue. En utilisant nos services, vous consentez à l\'utilisation de cookies telle que décrite dans cette politique.',
      
      section1Title: '1. Que sont les Cookies ?',
      section1Content: [
        'Les cookies sont de petits fichiers texte placés sur votre appareil (ordinateur, smartphone ou tablette) lorsque vous visitez un site Web. Ils sont largement utilisés pour faire fonctionner les sites Web de manière plus efficace et fournir des informations aux propriétaires de sites Web.',
        'Les cookies nous aident à mémoriser vos préférences, à comprendre comment vous utilisez notre plateforme et à améliorer votre expérience globale.'
      ],
      
      section2Title: '2. Types de Cookies que Nous Utilisons',
      section2Subtitle1: 'Cookies Essentiels',
      section2Content1: [
        'Ces cookies sont nécessaires au fonctionnement de base de PLATCOL. Ils activent des fonctionnalités principales telles que :',
        '• Navigation sur les pages et accès aux zones sécurisées',
        '• Maintien de votre session pendant l\'utilisation de la plateforme',
        '• Fonctions de sécurité de base',
        'Ces cookies ne peuvent pas être désactivés car la plateforme ne fonctionnerait pas correctement sans eux.'
      ],
      
      section2Subtitle2: 'Cookies de Préférence',
      section2Content2: [
        'Ces cookies mémorisent vos choix et préférences pour offrir une expérience personnalisée :',
        '• Votre langue de recherche sélectionnée (anglais, espagnol, portugais, français ou chinois mandarin)',
        '• Votre langue d\'interface/page sélectionnée',
        '• Préférences d\'affichage et paramètres d\'accessibilité',
        '• Préférences de mode de recherche (basé sur les lemmes, sémantique ou basé sur des exemples)',
        'Ces cookies améliorent votre expérience utilisateur mais ne sont pas essentiels au fonctionnement de la plateforme.'
      ],
      
      section2Subtitle3: 'Cookies d\'Analyse',
      section2Content3: [
        'Ces cookies nous aident à comprendre comment les visiteurs interagissent avec notre plateforme en collectant des informations anonymes :',
        '• Pages visitées et temps passé sur chaque page',
        '• Requêtes de recherche et modèles (anonymisés)',
        '• Modèles de clics et flux de navigation',
        '• Informations sur l\'appareil et le navigateur',
        '• Messages d\'erreur et problèmes techniques',
        'Nous utilisons ces informations pour améliorer notre contenu, résoudre les problèmes et améliorer l\'expérience utilisateur. Toutes les données collectées sont agrégées et anonymes.'
      ],
      
      section2Subtitle4: 'Cookies de Performance',
      section2Content4: [
        'Ces cookies nous aident à surveiller et à améliorer les performances de PLATCOL :',
        '• Temps de chargement et vitesse de la page',
        '• Pertinence et précision des résultats de recherche',
        '• Stabilité de la plateforme et erreurs',
        'Ces données nous aident à identifier les problèmes techniques et à optimiser la plateforme pour de meilleures performances.'
      ],
      
      section3Title: '3. Cookies que Nous N\'Utilisons PAS',
      section3Content: [
        'PLATCOL n\'utilise pas les types de cookies suivants :',
        '• Cookies publicitaires : Nous n\'affichons pas de publicités ni n\'utilisons de cookies à des fins publicitaires',
        '• Cookies marketing tiers : Nous ne partageons pas vos données avec des tiers à des fins marketing',
        '• Cookies de suivi des médias sociaux : Nous ne suivons pas votre activité sur les plateformes de médias sociaux',
        '• Cookies de suivi inter-sites : Nous ne suivons pas votre activité de navigation sur d\'autres sites Web'
      ],
      
      section4Title: '4. Cookies Propriétaires vs Tiers',
      section4Subtitle1: 'Cookies Propriétaires',
      section4Content1: [
        'La plupart des cookies utilisés par PLATCOL sont des cookies propriétaires, qui sont définis directement par notre plateforme. Ceux-ci incluent :',
        '• Cookies de préférence de langue',
        '• Paramètres de recherche et filtres',
        '• Cookies de gestion de session'
      ],
      
      section4Subtitle2: 'Cookies Tiers',
      section4Content2: [
        'Nous pouvons utiliser des services tiers limités qui définissent leurs propres cookies :',
        '• Services d\'analyse pour comprendre le comportement des utilisateurs (par exemple, statistiques d\'utilisation anonymisées)',
        '• Réseaux de distribution de contenu (CDN) pour garantir des temps de chargement rapides',
        'Ces services tiers sont soigneusement sélectionnés et respectent les réglementations en matière de protection des données. Vous pouvez consulter leurs politiques de confidentialité via leurs sites Web respectifs.'
      ],
      
      section5Title: '5. Combien de Temps Durent les Cookies ?',
      section5Subtitle1: 'Cookies de Session',
      section5Content1: [
        'Ces cookies temporaires sont supprimés lorsque vous fermez votre navigateur. Ils sont utilisés pour :',
        '• Gérer votre session actuelle',
        '• Maintenir l\'état de recherche pendant votre visite',
        '• Assurer la sécurité pendant votre session'
      ],
      
      section5Subtitle2: 'Cookies Persistants',
      section5Content2: [
        'Ces cookies restent sur votre appareil pendant une période définie ou jusqu\'à ce que vous les supprimiez. Ils sont utilisés pour :',
        '• Mémoriser vos préférences linguistiques (expire après 1 an)',
        '• Analyse et surveillance des performances (expire après 2 ans)',
        '• Reconnaissance des utilisateurs qui reviennent (expire après 6 mois)'
      ],
      
      section6Title: '6. Gestion de vos Préférences en Matière de Cookies',
      section6Content: [
        'Vous disposez de plusieurs options pour gérer les cookies :'
      ],
      
      section6Subtitle1: 'Paramètres du Navigateur',
      section6Content1: [
        'La plupart des navigateurs Web vous permettent de contrôler les cookies via leurs paramètres. Vous pouvez :',
        '• Bloquer tous les cookies',
        '• Bloquer uniquement les cookies tiers',
        '• Supprimer les cookies après chaque session',
        '• Définir des exceptions pour des sites Web spécifiques',
        '',
        'Les navigateurs courants fournissent une gestion des cookies à :',
        '• Chrome : Paramètres > Confidentialité et sécurité > Cookies',
        '• Firefox : Paramètres > Confidentialité et sécurité > Cookies et données de sites',
        '• Safari : Préférences > Confidentialité > Cookies et données de sites Web',
        '• Edge : Paramètres > Confidentialité, recherche et services > Cookies',
        '',
        'Note : Bloquer tous les cookies peut affecter votre expérience sur PLATCOL, car certaines fonctionnalités peuvent ne pas fonctionner correctement.'
      ],
      
      section6Subtitle2: 'Paramètres de la Plateforme',
      section6Content2: [
        'PLATCOL fournit des contrôles pour certains cookies :',
        '• Vous pouvez effacer vos préférences linguistiques à tout moment en les modifiant dans l\'interface',
        '• Vous pouvez refuser les cookies d\'analyse (si nous implémentons cette fonctionnalité à l\'avenir)',
        '• Les cookies essentiels ne peuvent pas être désactivés car ils sont nécessaires au fonctionnement de la plateforme'
      ],
      
      section7Title: '7. Signaux Do Not Track (DNT)',
      section7Content: [
        'Certains navigateurs prennent en charge une fonctionnalité "Do Not Track" qui envoie des signaux aux sites Web demandant de ne pas être suivi. Actuellement, il n\'existe pas de norme industrielle sur la façon dont les sites Web doivent répondre aux signaux DNT.',
        'PLATCOL respecte la confidentialité des utilisateurs et minimise la collecte de données. Si vous activez DNT dans votre navigateur, nous honorerons cette préférence dans la mesure du possible tout en continuant à fournir les fonctionnalités essentielles.'
      ],
      
      section8Title: '8. Cookies et Données Personnelles',
      section8Content: [
        'La plupart des cookies utilisés par PLATCOL ne contiennent pas d\'informations personnellement identifiables. Cependant, certains cookies peuvent être liés à votre session de navigation ou à vos préférences.',
        'Toutes les données personnelles collectées via des cookies sont traitées conformément à notre Politique de Confidentialité et aux réglementations applicables en matière de protection des données (RGPD, CCPA, etc.).',
        'Vous avez le droit de :',
        '• Accéder aux données de cookies associées à votre session',
        '• Demander la suppression des données de cookies',
        '• Vous opposer à certains types d\'utilisation de cookies',
        'Pour plus d\'informations, consultez notre Politique de Confidentialité ou contactez-nous à privacy@platcol.com.'
      ],
      
      section9Title: '9. Mises à Jour de cette Politique en Matière de Cookies',
      section9Content: [
        'Nous pouvons mettre à jour cette Politique en matière de Cookies de temps en temps pour refléter les changements dans nos pratiques, technologies ou exigences légales.',
        'Lorsque nous apportons des changements importants :',
        '• Nous mettons à jour la date "Dernière mise à jour" en haut de cette politique',
        '• Nous informons les utilisateurs via une bannière ou un avis sur la plateforme',
        '• Nous demandons un consentement renouvelé si requis par la loi',
        'Nous vous encourageons à consulter cette politique périodiquement pour rester informé de la façon dont nous utilisons les cookies.'
      ],
      
      section10Title: '10. Nous Contacter',
      section10Content: [
        'Si vous avez des questions ou des préoccupations concernant notre utilisation des cookies, veuillez nous contacter à :',
        'E-mail : privacy@platcol.com',
        'Objet : Demande concernant la Politique en matière de Cookies',
        '',
        'Nous répondrons à votre demande dans les 30 jours.'
      ]
    },
    zh: {
      title: 'Cookie政策',
      lastUpdated: '最后更新：2026年2月20日',
      intro: '本Cookie政策说明了PLATCOL如何在我们的多语言搭配词典平台上使用Cookie和类似的跟踪技术。通过使用我们的服务，您同意按照本政策所述使用Cookie。',
      
      section1Title: '1. 什么是Cookie？',
      section1Content: [
        'Cookie是在您访问网站时放置在您的设备（计算机、智能手机或平板电脑）上的小型文本文件。它们被广泛用于使网站更有效地工作并向网站所有者提供信息。',
        'Cookie帮助我们记住您的偏好，了解您如何使用我们的平台，并改善您的整体体验。'
      ],
      
      section2Title: '2. 我们使用的Cookie类型',
      section2Subtitle1: '必要Cookie',
      section2Content1: [
        '这些Cookie对PLATCOL的基本功能是必需的。它们启用核心功能，例如：',
        '• 页面导航和访问安全区域',
        '• 在您使用平台时维护您的会话',
        '• 基本安全功能',
        '这些Cookie无法禁用，因为没有它们平台将无法正常运行。'
      ],
      
      section2Subtitle2: '偏好Cookie',
      section2Content2: [
        '这些Cookie记住您的选择和偏好以提供个性化体验：',
        '• 您选择的搜索语言（英语、西班牙语、葡萄牙语、法语或普通话）',
        '• 您选择的界面/页面语言',
        '• 显示偏好和辅助功能设置',
        '• 搜索模式偏好（基于词元、语义或基于示例）',
        '这些Cookie增强了您的用户体验，但对平台运行不是必需的。'
      ],
      
      section2Subtitle3: '分析Cookie',
      section2Content3: [
        '这些Cookie通过收集匿名信息帮助我们了解访问者如何与我们的平台互动：',
        '• 访问的页面和在每个页面上花费的时间',
        '• 搜索查询和模式（匿名化）',
        '• 点击模式和导航流程',
        '• 设备和浏览器信息',
        '• 错误消息和技术问题',
        '我们使用这些信息来改进我们的内容、修复问题并增强用户体验。收集的所有数据都是汇总和匿名的。'
      ],
      
      section2Subtitle4: '性能Cookie',
      section2Content4: [
        '这些Cookie帮助我们监控和改进PLATCOL的性能：',
        '• 加载时间和页面速度',
        '• 搜索结果的相关性和准确性',
        '• 平台稳定性和错误',
        '这些数据帮助我们识别技术问题并优化平台以获得更好的性能。'
      ],
      
      section3Title: '3. 我们不使用的Cookie',
      section3Content: [
        'PLATCOL不使用以下类型的Cookie：',
        '• 广告Cookie：我们不显示广告或使用Cookie进行广告目的',
        '• 第三方营销Cookie：我们不会为营销目的与第三方共享您的数据',
        '• 社交媒体跟踪Cookie：我们不会跟踪您在社交媒体平台上的活动',
        '• 跨站点跟踪Cookie：我们不会跟踪您在其他网站上的浏览活动'
      ],
      
      section4Title: '4. 第一方Cookie与第三方Cookie',
      section4Subtitle1: '第一方Cookie',
      section4Content1: [
        'PLATCOL使用的大多数Cookie都是第一方Cookie，由我们的平台直接设置。这些包括：',
        '• 语言偏好Cookie',
        '• 搜索设置和过滤器',
        '• 会话管理Cookie'
      ],
      
      section4Subtitle2: '第三方Cookie',
      section4Content2: [
        '我们可能使用有限的第三方服务，这些服务设置自己的Cookie：',
        '• 分析服务以了解用户行为（例如，匿名使用统计）',
        '• 内容分发网络（CDN）以确保快速加载时间',
        '这些第三方服务经过精心选择，并遵守数据保护法规。您可以通过其各自的网站查看其隐私政策。'
      ],
      
      section5Title: '5. Cookie持续多长时间？',
      section5Subtitle1: '会话Cookie',
      section5Content1: [
        '这些临时Cookie在您关闭浏览器时会被删除。它们用于：',
        '• 管理您的当前会话',
        '• 在您访问期间维护搜索状态',
        '• 确保会话期间的安全'
      ],
      
      section5Subtitle2: '持久Cookie',
      section5Content2: [
        '这些Cookie在您的设备上保留设定的时间段或直到您删除它们。它们用于：',
        '• 记住您的语言偏好（1年后过期）',
        '• 分析和性能监控（2年后过期）',
        '• 识别返回用户（6个月后过期）'
      ],
      
      section6Title: '6. 管理您的Cookie偏好',
      section6Content: [
        '您有几个选项来管理Cookie：'
      ],
      
      section6Subtitle1: '浏览器设置',
      section6Content1: [
        '大多数网络浏览器允许您通过其设置控制Cookie。您可以：',
        '• 阻止所有Cookie',
        '• 仅阻止第三方Cookie',
        '• 在每次会话后删除Cookie',
        '• 为特定网站设置例外',
        '',
        '常见浏览器在以下位置提供Cookie管理：',
        '• Chrome：设置 > 隐私和安全 > Cookie',
        '• Firefox：设置 > 隐私和安全 > Cookie和网站数据',
        '• Safari：偏好设置 > 隐私 > Cookie和网站数据',
        '• Edge：设置 > 隐私、搜索和服务 > Cookie',
        '',
        '注意：阻止所有Cookie可能会影响您在PLATCOL上的体验，因为某些功能可能无法正常工作。'
      ],
      
      section6Subtitle2: '平台设置',
      section6Content2: [
        'PLATCOL为某些Cookie提供控制：',
        '• 您可以随时通过在界面中更改来清除您的语言偏好',
        '• 您可以选择退出分析Cookie（如果我们将来实施此功能）',
        '• 必要Cookie无法禁用，因为它们是平台运行所必需的'
      ],
      
      section7Title: '7. 请勿跟踪（DNT）信号',
      section7Content: [
        '一些浏览器支持"请勿跟踪"功能，向网站发送请求不被跟踪的信号。目前，关于网站应如何响应DNT信号没有行业标准。',
        'PLATCOL尊重用户隐私并最小化数据收集。如果您在浏览器中启用DNT，我们将在提供基本功能的同时尽可能尊重此偏好。'
      ],
      
      section8Title: '8. Cookie和个人数据',
      section8Content: [
        'PLATCOL使用的大多数Cookie不包含个人可识别信息。但是，某些Cookie可能与您的浏览会话或偏好相关联。',
        '通过Cookie收集的任何个人数据均按照我们的隐私政策和适用的数据保护法规（GDPR、CCPA等）进行处理。',
        '您有权：',
        '• 访问与您的会话相关的Cookie数据',
        '• 请求删除Cookie数据',
        '• 反对某些类型的Cookie使用',
        '有关更多信息，请参阅我们的隐私政策或通过privacy@platcol.com与我们联系。'
      ],
      
      section9Title: '9. 本Cookie政策的更新',
      section9Content: [
        '我们可能会不时更新本Cookie政策，以反映我们实践、技术或法律要求的变化。',
        '当我们进行重大更改时：',
        '• 我们会更新本政策顶部的"最后更新"日期',
        '• 我们通过平台上的横幅或通知告知用户',
        '• 如果法律要求，我们会请求更新同意',
        '我们鼓励您定期查看本政策，以了解我们如何使用Cookie。'
      ],
      
      section10Title: '10. 联系我们',
      section10Content: [
        '如果您对我们使用Cookie有疑问或担忧，请通过以下方式与我们联系：',
        '电子邮件：privacy@platcol.com',
        '主题：Cookie政策咨询',
        '',
        '我们将在30天内回复您的询问。'
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

        {/* Section 1 */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{text.section1Title}</h2>
          {text.section1Content.map((paragraph, index) => (
            <p key={index} className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2">
              {paragraph}
            </p>
          ))}
        </section>

        {/* Section 2 - with multiple subsections */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{text.section2Title}</h2>
          
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 mt-4">{text.section2Subtitle1}</h3>
          {text.section2Content1.map((paragraph, index) => (
            <p key={index} className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2">
              {paragraph}
            </p>
          ))}

          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 mt-4">{text.section2Subtitle2}</h3>
          {text.section2Content2.map((paragraph, index) => (
            <p key={index} className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2">
              {paragraph}
            </p>
          ))}

          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 mt-4">{text.section2Subtitle3}</h3>
          {text.section2Content3.map((paragraph, index) => (
            <p key={index} className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2">
              {paragraph}
            </p>
          ))}

          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 mt-4">{text.section2Subtitle4}</h3>
          {text.section2Content4.map((paragraph, index) => (
            <p key={index} className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2">
              {paragraph}
            </p>
          ))}
        </section>

        {/* Sections 3, 4, 5 */}
        {[3, 4, 5].map((num) => {
          const titleKey = `section${num}Title` as keyof typeof text;
          const contentKey = `section${num}Content` as keyof typeof text;
          const subtitle1Key = `section${num}Subtitle1` as keyof typeof text;
          const content1Key = `section${num}Content1` as keyof typeof text;
          const subtitle2Key = `section${num}Subtitle2` as keyof typeof text;
          const content2Key = `section${num}Content2` as keyof typeof text;

          const title = text[titleKey] as string;
          const hasSubsections = text[subtitle1Key] !== undefined;

          if (!hasSubsections) {
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
          }

          const subtitle1 = text[subtitle1Key] as string;
          const content1 = text[content1Key] as string[];
          const subtitle2 = text[subtitle2Key] as string;
          const content2 = text[content2Key] as string[];

          return (
            <section key={num}>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{title}</h2>
              
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 mt-4">{subtitle1}</h3>
              {content1.map((paragraph, index) => (
                <p key={index} className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2">
                  {paragraph}
                </p>
              ))}

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 mt-4">{subtitle2}</h3>
              {content2.map((paragraph, index) => (
                <p key={index} className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2">
                  {paragraph}
                </p>
              ))}
            </section>
          );
        })}

        {/* Section 6 - with subsections */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{text.section6Title}</h2>
          {text.section6Content.map((paragraph, index) => (
            <p key={index} className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2">
              {paragraph}
            </p>
          ))}

          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 mt-4">{text.section6Subtitle1}</h3>
          {text.section6Content1.map((paragraph, index) => (
            <p key={index} className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2">
              {paragraph}
            </p>
          ))}

          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 mt-4">{text.section6Subtitle2}</h3>
          {text.section6Content2.map((paragraph, index) => (
            <p key={index} className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2">
              {paragraph}
            </p>
          ))}
        </section>

        {/* Sections 7-10 */}
        {[7, 8, 9, 10].map((num) => {
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
