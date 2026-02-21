import { useState } from 'react';
import { usePageLanguage } from '../contexts/PageLanguageContext';
import { Mail, MessageSquare, User, Send, CheckCircle } from 'lucide-react';

export function Contact() {
  const { pageLanguage } = usePageLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const content = {
    en: {
      title: 'Contact & Feedback',
      subtitle: 'Get in touch with the PLATCOL team',
      form: {
        name: 'Name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'your.email@example.com',
        category: 'Category',
        categoryPlaceholder: 'Select a category',
        message: 'Message',
        messagePlaceholder: 'Tell us how we can help you...',
        submit: 'Send Message',
        required: 'Required'
      },
      categories: [
        { value: 'general', label: 'General Inquiry' },
        { value: 'feedback', label: 'Feedback & Suggestions' },
        { value: 'technical', label: 'Technical Support' },
        { value: 'academic', label: 'Academic Collaboration' },
        { value: 'content', label: 'Content Error or Issue' },
        { value: 'other', label: 'Other' }
      ],
      success: {
        title: 'Message Sent Successfully!',
        description: 'Thank you for contacting us. We will get back to you as soon as possible.',
        button: 'Send Another Message'
      },
      info: {
        title: 'Other Ways to Reach Us',
        items: [
          {
            title: 'Academic Inquiries',
            description: 'For research collaborations and academic partnerships, please visit our About page to learn more about our team and their research profiles.'
          },
          {
            title: 'Response Time',
            description: 'We typically respond to all inquiries within 2-3 business days.'
          },
          {
            title: 'Before Contacting',
            description: 'Please check our FAQ and User Guide pages – your question may already be answered there.'
          }
        ]
      }
    },
    es: {
      title: 'Contacto y Comentarios',
      subtitle: 'Póngase en contacto con el equipo de PLATCOL',
      form: {
        name: 'Nombre',
        namePlaceholder: 'Su nombre',
        email: 'Correo electrónico',
        emailPlaceholder: 'su.correo@ejemplo.com',
        category: 'Categoría',
        categoryPlaceholder: 'Seleccione una categoría',
        message: 'Mensaje',
        messagePlaceholder: 'Cuéntenos cómo podemos ayudarle...',
        submit: 'Enviar Mensaje',
        required: 'Obligatorio'
      },
      categories: [
        { value: 'general', label: 'Consulta General' },
        { value: 'feedback', label: 'Comentarios y Sugerencias' },
        { value: 'technical', label: 'Soporte Técnico' },
        { value: 'academic', label: 'Colaboración Académica' },
        { value: 'content', label: 'Error o Problema de Contenido' },
        { value: 'other', label: 'Otro' }
      ],
      success: {
        title: '¡Mensaje Enviado con Éxito!',
        description: 'Gracias por contactarnos. Le responderemos lo antes posible.',
        button: 'Enviar Otro Mensaje'
      },
      info: {
        title: 'Otras Formas de Contactarnos',
        items: [
          {
            title: 'Consultas Académicas',
            description: 'Para colaboraciones de investigación y asociaciones académicas, visite nuestra página Acerca de para conocer más sobre nuestro equipo y sus perfiles de investigación.'
          },
          {
            title: 'Tiempo de Respuesta',
            description: 'Normalmente respondemos a todas las consultas en 2-3 días hábiles.'
          },
          {
            title: 'Antes de Contactar',
            description: 'Consulte nuestras páginas de Preguntas Frecuentes y Guía del Usuario: es posible que su pregunta ya esté respondida allí.'
          }
        ]
      }
    },
    pt: {
      title: 'Contato e Feedback',
      subtitle: 'Entre em contato com a equipe do PLATCOL',
      form: {
        name: 'Nome',
        namePlaceholder: 'Seu nome',
        email: 'E-mail',
        emailPlaceholder: 'seu.email@exemplo.com',
        category: 'Categoria',
        categoryPlaceholder: 'Selecione uma categoria',
        message: 'Mensagem',
        messagePlaceholder: 'Conte-nos como podemos ajudá-lo...',
        submit: 'Enviar Mensagem',
        required: 'Obrigatório'
      },
      categories: [
        { value: 'general', label: 'Consulta Geral' },
        { value: 'feedback', label: 'Feedback e Sugestões' },
        { value: 'technical', label: 'Suporte Técnico' },
        { value: 'academic', label: 'Colaboração Acadêmica' },
        { value: 'content', label: 'Erro ou Problema de Conteúdo' },
        { value: 'other', label: 'Outro' }
      ],
      success: {
        title: 'Mensagem Enviada com Sucesso!',
        description: 'Obrigado por entrar em contato. Responderemos o mais breve possível.',
        button: 'Enviar Outra Mensagem'
      },
      info: {
        title: 'Outras Formas de Nos Contatar',
        items: [
          {
            title: 'Consultas Acadêmicas',
            description: 'Para colaborações de pesquisa e parcerias acadêmicas, visite nossa página Sobre para saber mais sobre nossa equipe e seus perfis de pesquisa.'
          },
          {
            title: 'Tempo de Resposta',
            description: 'Normalmente respondemos a todas as consultas em 2-3 dias úteis.'
          },
          {
            title: 'Antes de Contatar',
            description: 'Consulte nossas páginas de Perguntas Frequentes e Guia do Usuário – sua pergunta pode já estar respondida lá.'
          }
        ]
      }
    },
    fr: {
      title: 'Contact et Feedback',
      subtitle: 'Contactez l\'équipe PLATCOL',
      form: {
        name: 'Nom',
        namePlaceholder: 'Votre nom',
        email: 'E-mail',
        emailPlaceholder: 'votre.email@exemple.com',
        category: 'Catégorie',
        categoryPlaceholder: 'Sélectionnez une catégorie',
        message: 'Message',
        messagePlaceholder: 'Dites-nous comment nous pouvons vous aider...',
        submit: 'Envoyer le Message',
        required: 'Obligatoire'
      },
      categories: [
        { value: 'general', label: 'Demande Générale' },
        { value: 'feedback', label: 'Commentaires et Suggestions' },
        { value: 'technical', label: 'Support Technique' },
        { value: 'academic', label: 'Collaboration Académique' },
        { value: 'content', label: 'Erreur ou Problème de Contenu' },
        { value: 'other', label: 'Autre' }
      ],
      success: {
        title: 'Message Envoyé avec Succès !',
        description: 'Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.',
        button: 'Envoyer un Autre Message'
      },
      info: {
        title: 'Autres Moyens de Nous Contacter',
        items: [
          {
            title: 'Demandes Académiques',
            description: 'Pour les collaborations de recherche et les partenariats académiques, veuillez visiter notre page À Propos pour en savoir plus sur notre équipe et leurs profils de recherche.'
          },
          {
            title: 'Délai de Réponse',
            description: 'Nous répondons généralement à toutes les demandes dans un délai de 2 à 3 jours ouvrables.'
          },
          {
            title: 'Avant de Contacter',
            description: 'Veuillez consulter nos pages FAQ et Guide de l\'Utilisateur – votre question pourrait déjà y trouver une réponse.'
          }
        ]
      }
    },
    zh: {
      title: '联系与反馈',
      subtitle: '与PLATCOL团队取得联系',
      form: {
        name: '姓名',
        namePlaceholder: '您的姓名',
        email: '电子邮件',
        emailPlaceholder: 'your.email@example.com',
        category: '类别',
        categoryPlaceholder: '选择类别',
        message: '留言',
        messagePlaceholder: '告诉我们如何帮助您...',
        submit: '发送消息',
        required: '必填'
      },
      categories: [
        { value: 'general', label: '一般咨询' },
        { value: 'feedback', label: '反馈与建议' },
        { value: 'technical', label: '技术支持' },
        { value: 'academic', label: '学术合作' },
        { value: 'content', label: '内容错误或问题' },
        { value: 'other', label: '其他' }
      ],
      success: {
        title: '消息发送成功！',
        description: '感谢您与我们联系。我们会尽快回复您。',
        button: '发送另一条消息'
      },
      info: {
        title: '其他联系方式',
        items: [
          {
            title: '学术咨询',
            description: '如需研究合作和学术伙伴关系，请访问我们的关于页面以了解更多关于我们团队及其研究资料的信息。'
          },
          {
            title: '响应时间',
            description: '我们通常在2-3个工作日内回复所有咨询。'
          },
          {
            title: '联系前',
            description: '请查看我们的常见问题和用户指南页面 - 您的问题可能已经在那里得到解答。'
          }
        ]
      }
    }
  };

  const text = content[pageLanguage];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the data to a server
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      category: '',
      message: ''
    });
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="text-center py-12 sm:py-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
            {text.success.title}
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {text.success.description}
          </p>
          <button
            onClick={resetForm}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors font-semibold"
          >
            <Mail className="w-4 h-4" />
            {text.success.button}
          </button>
        </div>
      </article>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Header */}
      <header className="text-center mb-12 sm:mb-16">
        <div className="flex justify-center mb-4">
          <Mail className="w-12 h-12 text-blue-900" />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-3 sm:mb-4">{text.title}</h1>
        <p className="text-lg sm:text-xl text-gray-600">{text.subtitle}</p>
      </header>

      <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-2">
                <User className="w-4 h-4 text-blue-900" />
                {text.form.name}
                <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={text.form.namePlaceholder}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-shadow"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-2">
                <Mail className="w-4 h-4 text-blue-900" />
                {text.form.email}
                <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={text.form.emailPlaceholder}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-shadow"
              />
            </div>

            {/* Category Field */}
            <div>
              <label htmlFor="category" className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-2">
                <MessageSquare className="w-4 h-4 text-blue-900" />
                {text.form.category}
                <span className="text-red-600">*</span>
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-shadow bg-white"
              >
                <option value="">{text.form.categoryPlaceholder}</option>
                {text.categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-2">
                <MessageSquare className="w-4 h-4 text-blue-900" />
                {text.form.message}
                <span className="text-red-600">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder={text.form.messagePlaceholder}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-shadow resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors font-semibold"
            >
              <Send className="w-4 h-4" />
              {text.form.submit}
            </button>
          </form>
        </div>

        {/* Additional Information */}
        <div className="lg:col-span-1">
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 sticky top-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              {text.info.title}
            </h2>
            <div className="space-y-4">
              {text.info.items.map((item, index) => (
                <div key={index}>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}