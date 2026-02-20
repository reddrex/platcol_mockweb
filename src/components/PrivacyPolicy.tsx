import { usePageLanguage } from '../contexts/PageLanguageContext';

export function PrivacyPolicy() {
  const { pageLanguage } = usePageLanguage();

  const content = {
    en: {
      title: 'Privacy Policy',
      lastUpdated: 'Last Updated: February 20, 2026',
      intro: 'At PLATCOL, we are committed to protecting your privacy and ensuring transparency in how we collect, use, and safeguard your information. This Privacy Policy explains our practices regarding data collection and usage when you use our multilingual collocation dictionary platform.',
      
      section1Title: '1. Information We Collect',
      section1Content: [
        'We collect minimal information necessary to provide and improve our services:',
        '• Search queries and browsing patterns to improve search results and user experience',
        '• Language preferences to maintain your selected interface and search languages',
        '• Technical information such as browser type, device information, and IP address for security and analytics purposes',
        '• Cookies and similar technologies to remember your preferences and analyze site usage'
      ],
      
      section2Title: '2. How We Use Your Information',
      section2Content: [
        'The information we collect is used solely for the following purposes:',
        '• Providing accurate and relevant collocation search results',
        '• Personalizing your experience based on language preferences',
        '• Improving our dictionary content and search algorithms',
        '• Analyzing usage patterns to enhance platform performance',
        '• Maintaining security and preventing misuse of our services'
      ],
      
      section3Title: '3. Data Storage and Security',
      section3Content: [
        'We implement appropriate technical and organizational measures to protect your data:',
        '• All data is stored securely using industry-standard encryption',
        '• We retain search history only for analytical purposes and do not associate it with personally identifiable information',
        '• Access to data is restricted to authorized personnel only',
        '• We regularly review and update our security practices'
      ],
      
      section4Title: '4. Third-Party Services',
      section4Content: [
        'PLATCOL may use third-party services for analytics and functionality. These services have their own privacy policies:',
        '• Analytics tools to understand user behavior and improve our services',
        '• Content delivery networks to ensure fast and reliable access',
        '• We do not sell or share your personal information with third parties for marketing purposes'
      ],
      
      section5Title: '5. Your Rights',
      section5Content: [
        'You have the following rights regarding your data:',
        '• Access: Request information about data we have collected',
        '• Correction: Request correction of inaccurate information',
        '• Deletion: Request deletion of your data, subject to legal obligations',
        '• Objection: Object to certain types of data processing',
        '• Data Portability: Request a copy of your data in a structured format'
      ],
      
      section6Title: '6. Cookies',
      section6Content: [
        'We use cookies to enhance your experience:',
        '• Essential cookies: Required for basic site functionality',
        '• Preference cookies: Remember your language and interface settings',
        '• Analytics cookies: Help us understand how users interact with our platform',
        'You can manage cookie preferences through your browser settings. See our Cookie Policy for more details.'
      ],
      
      section7Title: '7. Children\'s Privacy',
      section7Content: [
        'PLATCOL is designed for educational purposes and may be used by language learners of all ages. We do not knowingly collect personal information from children without parental consent. If you believe we have inadvertently collected such information, please contact us immediately.'
      ],
      
      section8Title: '8. International Users',
      section8Content: [
        'PLATCOL is accessible globally. By using our services, you consent to the transfer and processing of your information in accordance with this Privacy Policy, regardless of your location.'
      ],
      
      section9Title: '9. Changes to This Policy',
      section9Content: [
        'We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify users of significant changes by posting the updated policy on this page with a revised "Last Updated" date.'
      ],
      
      section10Title: '10. Contact Us',
      section10Content: [
        'If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:',
        'Email: privacy@platcol.com',
        'We will respond to your inquiries within 30 days.'
      ]
    },
    es: {
      title: 'Política de Privacidad',
      lastUpdated: 'Última actualización: 20 de febrero de 2026',
      intro: 'En PLATCOL, nos comprometemos a proteger su privacidad y garantizar la transparencia en la forma en que recopilamos, usamos y protegemos su información. Esta Política de Privacidad explica nuestras prácticas en relación con la recopilación y el uso de datos cuando utiliza nuestra plataforma de diccionario de colocaciones multilingüe.',
      
      section1Title: '1. Información que Recopilamos',
      section1Content: [
        'Recopilamos la información mínima necesaria para proporcionar y mejorar nuestros servicios:',
        '• Consultas de búsqueda y patrones de navegación para mejorar los resultados y la experiencia del usuario',
        '• Preferencias de idioma para mantener sus idiomas de interfaz y búsqueda seleccionados',
        '• Información técnica como tipo de navegador, información del dispositivo y dirección IP con fines de seguridad y análisis',
        '• Cookies y tecnologías similares para recordar sus preferencias y analizar el uso del sitio'
      ],
      
      section2Title: '2. Cómo Usamos su Información',
      section2Content: [
        'La información que recopilamos se utiliza únicamente para los siguientes fines:',
        '• Proporcionar resultados de búsqueda de colocaciones precisos y relevantes',
        '• Personalizar su experiencia según las preferencias de idioma',
        '• Mejorar el contenido de nuestro diccionario y los algoritmos de búsqueda',
        '• Analizar patrones de uso para mejorar el rendimiento de la plataforma',
        '• Mantener la seguridad y prevenir el uso indebido de nuestros servicios'
      ],
      
      section3Title: '3. Almacenamiento y Seguridad de Datos',
      section3Content: [
        'Implementamos medidas técnicas y organizativas apropiadas para proteger sus datos:',
        '• Todos los datos se almacenan de forma segura utilizando cifrado estándar de la industria',
        '• Conservamos el historial de búsqueda solo con fines analíticos y no lo asociamos con información de identificación personal',
        '• El acceso a los datos está restringido solo al personal autorizado',
        '• Revisamos y actualizamos regularmente nuestras prácticas de seguridad'
      ],
      
      section4Title: '4. Servicios de Terceros',
      section4Content: [
        'PLATCOL puede utilizar servicios de terceros para análisis y funcionalidad. Estos servicios tienen sus propias políticas de privacidad:',
        '• Herramientas de análisis para comprender el comportamiento del usuario y mejorar nuestros servicios',
        '• Redes de entrega de contenido para garantizar un acceso rápido y confiable',
        '• No vendemos ni compartimos su información personal con terceros con fines de marketing'
      ],
      
      section5Title: '5. Sus Derechos',
      section5Content: [
        'Usted tiene los siguientes derechos con respecto a sus datos:',
        '• Acceso: Solicitar información sobre los datos que hemos recopilado',
        '• Corrección: Solicitar la corrección de información inexacta',
        '• Eliminación: Solicitar la eliminación de sus datos, sujeto a obligaciones legales',
        '• Objeción: Oponerse a ciertos tipos de procesamiento de datos',
        '• Portabilidad de Datos: Solicitar una copia de sus datos en un formato estructurado'
      ],
      
      section6Title: '6. Cookies',
      section6Content: [
        'Utilizamos cookies para mejorar su experiencia:',
        '• Cookies esenciales: Necesarias para la funcionalidad básica del sitio',
        '• Cookies de preferencias: Recuerdan sus configuraciones de idioma e interfaz',
        '• Cookies de análisis: Nos ayudan a entender cómo los usuarios interactúan con nuestra plataforma',
        'Puede administrar las preferencias de cookies a través de la configuración de su navegador. Consulte nuestra Política de Cookies para más detalles.'
      ],
      
      section7Title: '7. Privacidad de Menores',
      section7Content: [
        'PLATCOL está diseñado con fines educativos y puede ser utilizado por estudiantes de idiomas de todas las edades. No recopilamos intencionalmente información personal de menores sin el consentimiento de los padres. Si cree que hemos recopilado inadvertidamente dicha información, contáctenos de inmediato.'
      ],
      
      section8Title: '8. Usuarios Internacionales',
      section8Content: [
        'PLATCOL es accesible a nivel mundial. Al utilizar nuestros servicios, usted acepta la transferencia y el procesamiento de su información de acuerdo con esta Política de Privacidad, independientemente de su ubicación.'
      ],
      
      section9Title: '9. Cambios a esta Política',
      section9Content: [
        'Podemos actualizar esta Política de Privacidad periódicamente para reflejar cambios en nuestras prácticas o requisitos legales. Notificaremos a los usuarios de cambios significativos publicando la política actualizada en esta página con una fecha de "Última actualización" revisada.'
      ],
      
      section10Title: '10. Contáctenos',
      section10Content: [
        'Si tiene preguntas o inquietudes sobre esta Política de Privacidad o nuestras prácticas de datos, contáctenos en:',
        'Correo electrónico: privacy@platcol.com',
        'Responderemos a sus consultas dentro de los 30 días.'
      ]
    },
    pt: {
      title: 'Política de Privacidade',
      lastUpdated: 'Última atualização: 20 de fevereiro de 2026',
      intro: 'Na PLATCOL, estamos comprometidos em proteger sua privacidade e garantir transparência sobre como coletamos, usamos e protegemos suas informações. Esta Política de Privacidade explica nossas práticas em relação à coleta e uso de dados quando você usa nossa plataforma de dicionário de colocações multilíngue.',
      
      section1Title: '1. Informações que Coletamos',
      section1Content: [
        'Coletamos o mínimo de informações necessárias para fornecer e melhorar nossos serviços:',
        '• Consultas de pesquisa e padrões de navegação para melhorar os resultados e a experiência do usuário',
        '• Preferências de idioma para manter seus idiomas de interface e pesquisa selecionados',
        '• Informações técnicas como tipo de navegador, informações do dispositivo e endereço IP para fins de segurança e análise',
        '• Cookies e tecnologias semelhantes para lembrar suas preferências e analisar o uso do site'
      ],
      
      section2Title: '2. Como Usamos suas Informações',
      section2Content: [
        'As informações que coletamos são usadas exclusivamente para os seguintes fins:',
        '• Fornecer resultados de pesquisa de colocações precisos e relevantes',
        '• Personalizar sua experiência com base nas preferências de idioma',
        '• Melhorar o conteúdo do nosso dicionário e os algoritmos de pesquisa',
        '• Analisar padrões de uso para aprimorar o desempenho da plataforma',
        '• Manter a segurança e prevenir o uso indevido de nossos serviços'
      ],
      
      section3Title: '3. Armazenamento e Segurança de Dados',
      section3Content: [
        'Implementamos medidas técnicas e organizacionais apropriadas para proteger seus dados:',
        '• Todos os dados são armazenados com segurança usando criptografia padrão da indústria',
        '• Mantemos o histórico de pesquisa apenas para fins analíticos e não o associamos a informações de identificação pessoal',
        '• O acesso aos dados é restrito apenas ao pessoal autorizado',
        '• Revisamos e atualizamos regularmente nossas práticas de segurança'
      ],
      
      section4Title: '4. Serviços de Terceiros',
      section4Content: [
        'A PLATCOL pode usar serviços de terceiros para análise e funcionalidade. Esses serviços têm suas próprias políticas de privacidade:',
        '• Ferramentas de análise para entender o comportamento do usuário e melhorar nossos serviços',
        '• Redes de entrega de conteúdo para garantir acesso rápido e confiável',
        '• Não vendemos ou compartilhamos suas informações pessoais com terceiros para fins de marketing'
      ],
      
      section5Title: '5. Seus Direitos',
      section5Content: [
        'Você tem os seguintes direitos em relação aos seus dados:',
        '• Acesso: Solicitar informações sobre os dados que coletamos',
        '• Correção: Solicitar a correção de informações imprecisas',
        '• Exclusão: Solicitar a exclusão de seus dados, sujeito a obrigações legais',
        '• Objeção: Objetar a certos tipos de processamento de dados',
        '• Portabilidade de Dados: Solicitar uma cópia de seus dados em formato estruturado'
      ],
      
      section6Title: '6. Cookies',
      section6Content: [
        'Usamos cookies para melhorar sua experiência:',
        '• Cookies essenciais: Necessários para a funcionalidade básica do site',
        '• Cookies de preferência: Lembram suas configurações de idioma e interface',
        '• Cookies de análise: Nos ajudam a entender como os usuários interagem com nossa plataforma',
        'Você pode gerenciar as preferências de cookies nas configurações do seu navegador. Consulte nossa Política de Cookies para mais detalhes.'
      ],
      
      section7Title: '7. Privacidade de Crianças',
      section7Content: [
        'A PLATCOL é projetada para fins educacionais e pode ser usada por estudantes de idiomas de todas as idades. Não coletamos intencionalmente informações pessoais de crianças sem o consentimento dos pais. Se você acredita que coletamos inadvertidamente tais informações, entre em contato conosco imediatamente.'
      ],
      
      section8Title: '8. Usuários Internacionais',
      section8Content: [
        'A PLATCOL é acessível globalmente. Ao usar nossos serviços, você consente com a transferência e processamento de suas informações de acordo com esta Política de Privacidade, independentemente de sua localização.'
      ],
      
      section9Title: '9. Mudanças nesta Política',
      section9Content: [
        'Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas ou requisitos legais. Notificaremos os usuários sobre mudanças significativas publicando a política atualizada nesta página com uma data de "Última atualização" revisada.'
      ],
      
      section10Title: '10. Entre em Contato',
      section10Content: [
        'Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade ou nossas práticas de dados, entre em contato conosco em:',
        'E-mail: privacy@platcol.com',
        'Responderemos às suas consultas dentro de 30 dias.'
      ]
    },
    fr: {
      title: 'Politique de Confidentialité',
      lastUpdated: 'Dernière mise à jour : 20 février 2026',
      intro: 'Chez PLATCOL, nous nous engageons à protéger votre vie privée et à garantir la transparence sur la manière dont nous collectons, utilisons et protégeons vos informations. Cette Politique de Confidentialité explique nos pratiques concernant la collecte et l\'utilisation des données lorsque vous utilisez notre plateforme de dictionnaire de collocations multilingue.',
      
      section1Title: '1. Informations que Nous Collectons',
      section1Content: [
        'Nous collectons le minimum d\'informations nécessaires pour fournir et améliorer nos services :',
        '• Requêtes de recherche et modèles de navigation pour améliorer les résultats et l\'expérience utilisateur',
        '• Préférences linguistiques pour maintenir vos langues d\'interface et de recherche sélectionnées',
        '• Informations techniques telles que le type de navigateur, les informations sur l\'appareil et l\'adresse IP à des fins de sécurité et d\'analyse',
        '• Cookies et technologies similaires pour mémoriser vos préférences et analyser l\'utilisation du site'
      ],
      
      section2Title: '2. Comment Nous Utilisons Vos Informations',
      section2Content: [
        'Les informations que nous collectons sont utilisées uniquement aux fins suivantes :',
        '• Fournir des résultats de recherche de collocations précis et pertinents',
        '• Personnaliser votre expérience en fonction des préférences linguistiques',
        '• Améliorer le contenu de notre dictionnaire et les algorithmes de recherche',
        '• Analyser les modèles d\'utilisation pour améliorer les performances de la plateforme',
        '• Maintenir la sécurité et prévenir l\'utilisation abusive de nos services'
      ],
      
      section3Title: '3. Stockage et Sécurité des Données',
      section3Content: [
        'Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données :',
        '• Toutes les données sont stockées en toute sécurité à l\'aide d\'un cryptage standard de l\'industrie',
        '• Nous conservons l\'historique de recherche uniquement à des fins analytiques et ne l\'associons pas à des informations personnellement identifiables',
        '• L\'accès aux données est restreint au personnel autorisé uniquement',
        '• Nous révisons et mettons à jour régulièrement nos pratiques de sécurité'
      ],
      
      section4Title: '4. Services Tiers',
      section4Content: [
        'PLATCOL peut utiliser des services tiers pour l\'analyse et la fonctionnalité. Ces services ont leurs propres politiques de confidentialité :',
        '• Outils d\'analyse pour comprendre le comportement des utilisateurs et améliorer nos services',
        '• Réseaux de distribution de contenu pour garantir un accès rapide et fiable',
        '• Nous ne vendons ni ne partageons vos informations personnelles avec des tiers à des fins de marketing'
      ],
      
      section5Title: '5. Vos Droits',
      section5Content: [
        'Vous avez les droits suivants concernant vos données :',
        '• Accès : Demander des informations sur les données que nous avons collectées',
        '• Correction : Demander la correction d\'informations inexactes',
        '• Suppression : Demander la suppression de vos données, sous réserve d\'obligations légales',
        '• Objection : Vous opposer à certains types de traitement de données',
        '• Portabilité des Données : Demander une copie de vos données dans un format structuré'
      ],
      
      section6Title: '6. Cookies',
      section6Content: [
        'Nous utilisons des cookies pour améliorer votre expérience :',
        '• Cookies essentiels : Nécessaires pour la fonctionnalité de base du site',
        '• Cookies de préférence : Mémorisent vos paramètres de langue et d\'interface',
        '• Cookies d\'analyse : Nous aident à comprendre comment les utilisateurs interagissent avec notre plateforme',
        'Vous pouvez gérer les préférences de cookies via les paramètres de votre navigateur. Consultez notre Politique de Cookies pour plus de détails.'
      ],
      
      section7Title: '7. Confidentialité des Enfants',
      section7Content: [
        'PLATCOL est conçu à des fins éducatives et peut être utilisé par des apprenants de langues de tous âges. Nous ne collectons pas sciemment d\'informations personnelles auprès d\'enfants sans le consentement des parents. Si vous pensez que nous avons collecté par inadvertance de telles informations, veuillez nous contacter immédiatement.'
      ],
      
      section8Title: '8. Utilisateurs Internationaux',
      section8Content: [
        'PLATCOL est accessible dans le monde entier. En utilisant nos services, vous consentez au transfert et au traitement de vos informations conformément à cette Politique de Confidentialité, quel que soit votre emplacement.'
      ],
      
      section9Title: '9. Modifications de cette Politique',
      section9Content: [
        'Nous pouvons mettre à jour cette Politique de Confidentialité périodiquement pour refléter des changements dans nos pratiques ou exigences légales. Nous informerons les utilisateurs des changements importants en publiant la politique mise à jour sur cette page avec une date de "Dernière mise à jour" révisée.'
      ],
      
      section10Title: '10. Nous Contacter',
      section10Content: [
        'Si vous avez des questions ou des préoccupations concernant cette Politique de Confidentialité ou nos pratiques de données, veuillez nous contacter à :',
        'E-mail : privacy@platcol.com',
        'Nous répondrons à vos demandes dans les 30 jours.'
      ]
    },
    zh: {
      title: '隐私政策',
      lastUpdated: '最后更新：2026年2月20日',
      intro: '在PLATCOL，我们致力于保护您的隐私，并确保在收集、使用和保护您的信息方面的透明度。本隐私政策解释了当您使用我们的多语言搭配词典平台时，我们在数据收集和使用方面的做法。',
      
      section1Title: '1. 我们收集的信息',
      section1Content: [
        '我们收集提供和改进服务所需的最少信息：',
        '• 搜索查询和浏览模式，以改进搜索结果和用户体验',
        '• 语言偏好，以维护您选择的界面和搜索语言',
        '• 技术信息，如浏览器类型、设备信息和IP地址，用于安全和分析目的',
        '• Cookie和类似技术，以记住您的偏好并分析网站使用情况'
      ],
      
      section2Title: '2. 我们如何使用您的信息',
      section2Content: [
        '我们收集的信息仅用于以下目的：',
        '• 提供准确和相关的搭配搜索结果',
        '• 根据语言偏好个性化您的体验',
        '• 改进我们的词典内容和搜索算法',
        '• 分析使用模式以增强平台性能',
        '• 维护安全并防止滥用我们的服务'
      ],
      
      section3Title: '3. 数据存储和安全',
      section3Content: [
        '我们实施适当的技术和组织措施来保护您的数据：',
        '• 所有数据均使用行业标准加密安全存储',
        '• 我们仅出于分析目的保留搜索历史记录，不将其与个人可识别信息关联',
        '• 数据访问仅限于授权人员',
        '• 我们定期审查和更新我们的安全实践'
      ],
      
      section4Title: '4. 第三方服务',
      section4Content: [
        'PLATCOL可能使用第三方服务进行分析和功能。这些服务有自己的隐私政策：',
        '• 分析工具，以了解用户行为并改进我们的服务',
        '• 内容分发网络，以确保快速可靠的访问',
        '• 我们不会出于营销目的向第三方出售或共享您的个人信息'
      ],
      
      section5Title: '5. 您的权利',
      section5Content: [
        '您对您的数据拥有以下权利：',
        '• 访问：请求我们收集的数据信息',
        '• 更正：请求更正不准确的信息',
        '• 删除：请求删除您的数据，但须遵守法律义务',
        '• 反对：反对某些类型的数据处理',
        '• 数据可移植性：请求以结构化格式获取您的数据副本'
      ],
      
      section6Title: '6. Cookie',
      section6Content: [
        '我们使用Cookie来增强您的体验：',
        '• 必要Cookie：网站基本功能所需',
        '• 偏好Cookie：记住您的语言和界面设置',
        '• 分析Cookie：帮助我们了解用户如何与我们的平台互动',
        '您可以通过浏览器设置管理Cookie偏好。有关更多详细信息，请参阅我们的Cookie政策。'
      ],
      
      section7Title: '7. 儿童隐私',
      section7Content: [
        'PLATCOL专为教育目的而设计，可供所有年龄段的语言学习者使用。我们不会在未经父母同意的情况下故意收集儿童的个人信息。如果您认为我们无意中收集了此类信息，请立即与我们联系。'
      ],
      
      section8Title: '8. 国际用户',
      section8Content: [
        'PLATCOL可在全球范围内访问。通过使用我们的服务，您同意根据本隐私政策传输和处理您的信息，无论您身在何处。'
      ],
      
      section9Title: '9. 本政策的变更',
      section9Content: [
        '我们可能会定期更新本隐私政策，以反映我们实践或法律要求的变化。我们将通过在此页面上发布更新的政策并附上修订的"最后更新"日期来通知用户重大变更。'
      ],
      
      section10Title: '10. 联系我们',
      section10Content: [
        '如果您对本隐私政策或我们的数据实践有疑问或担忧，请通过以下方式与我们联系：',
        '电子邮件：privacy@platcol.com',
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

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{text.section1Title}</h2>
          {text.section1Content.map((paragraph, index) => (
            <p key={index} className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2">
              {paragraph}
            </p>
          ))}
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{text.section2Title}</h2>
          {text.section2Content.map((paragraph, index) => (
            <p key={index} className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2">
              {paragraph}
            </p>
          ))}
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{text.section3Title}</h2>
          {text.section3Content.map((paragraph, index) => (
            <p key={index} className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2">
              {paragraph}
            </p>
          ))}
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{text.section4Title}</h2>
          {text.section4Content.map((paragraph, index) => (
            <p key={index} className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2">
              {paragraph}
            </p>
          ))}
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{text.section5Title}</h2>
          {text.section5Content.map((paragraph, index) => (
            <p key={index} className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2">
              {paragraph}
            </p>
          ))}
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{text.section6Title}</h2>
          {text.section6Content.map((paragraph, index) => (
            <p key={index} className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2">
              {paragraph}
            </p>
          ))}
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{text.section7Title}</h2>
          {text.section7Content.map((paragraph, index) => (
            <p key={index} className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2">
              {paragraph}
            </p>
          ))}
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{text.section8Title}</h2>
          {text.section8Content.map((paragraph, index) => (
            <p key={index} className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2">
              {paragraph}
            </p>
          ))}
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{text.section9Title}</h2>
          {text.section9Content.map((paragraph, index) => (
            <p key={index} className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2">
              {paragraph}
            </p>
          ))}
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{text.section10Title}</h2>
          {text.section10Content.map((paragraph, index) => (
            <p key={index} className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2">
              {paragraph}
            </p>
          ))}
        </section>
      </div>
    </article>
  );
}
