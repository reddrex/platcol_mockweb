import { Mail, Linkedin, Twitter, Facebook, Globe } from 'lucide-react';
import { useState } from 'react';
import { usePageLanguage, PageLanguage } from '../contexts/PageLanguageContext';
import { getTranslation } from '../utils/translations';

export function Footer() {
  const { pageLanguage, setPageLanguage } = usePageLanguage();
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const pageLanguages = [
    { code: 'en' as PageLanguage, label: 'English', nativeLabel: 'English' },
    { code: 'es' as PageLanguage, label: 'Spanish', nativeLabel: 'Español' },
    { code: 'pt' as PageLanguage, label: 'Portuguese', nativeLabel: 'Português' },
    { code: 'fr' as PageLanguage, label: 'French', nativeLabel: 'Français' },
    { code: 'zh' as PageLanguage, label: 'Chinese', nativeLabel: '中文' },
  ];

  const currentLanguage = pageLanguages.find(lang => lang.code === pageLanguage);

  return (
    <footer className="border-t border-blue-800 bg-blue-950 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">{getTranslation('quickLinks', pageLanguage)}</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-sm text-blue-100 hover:text-white transition-colors">
                  {getTranslation('aboutUs', pageLanguage)}
                </a>
              </li>
              <li>
                <a href="/blog" className="text-sm text-blue-100 hover:text-white transition-colors">
                  {getTranslation('blog', pageLanguage)}
                </a>
              </li>
              <li>
                <a href="/help" className="text-sm text-blue-100 hover:text-white transition-colors">
                  {getTranslation('helpCenter', pageLanguage)}
                </a>
              </li>
              <li>
                <a href="/guide" className="text-sm text-blue-100 hover:text-white transition-colors">
                  {getTranslation('userGuide', pageLanguage)}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4">{getTranslation('legal', pageLanguage)}</h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-sm text-blue-100 hover:text-white transition-colors">
                  {getTranslation('privacyPolicy', pageLanguage)}
                </a>
              </li>
              <li>
                <a href="/terms" className="text-sm text-blue-100 hover:text-white transition-colors">
                  {getTranslation('termsOfService', pageLanguage)}
                </a>
              </li>
              <li>
                <a href="/cookies" className="text-sm text-blue-100 hover:text-white transition-colors">
                  {getTranslation('cookiePolicy', pageLanguage)}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-semibold text-white mb-4">{getTranslation('connect', pageLanguage)}</h3>
            <div className="flex items-center gap-4 mb-4">
              <a
                href="mailto:contact@platcol.com"
                className="text-blue-100 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/platcol"
                className="text-blue-100 hover:text-white transition-colors"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/platcol"
                className="text-blue-100 hover:text-white transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/platcol"
                className="text-blue-100 hover:text-white transition-colors"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-blue-100">
              <a href="mailto:contact@platcol.com" className="hover:text-white transition-colors">
                contact@platcol.com
              </a>
            </p>
          </div>
        </div>

        {/* Page Language Selector & Copyright */}
        <div className="border-t border-blue-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Page Language Selector */}
            <div className="relative">
              <label className="text-sm text-blue-200 mr-3 inline-block">
                {getTranslation('pageLanguage', pageLanguage)}
              </label>
              <div className="inline-block relative">
                <button
                  onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                  className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors flex items-center gap-2 text-sm"
                  aria-label="Select page language"
                  aria-expanded={showLanguageDropdown}
                >
                  <Globe className="w-4 h-4" />
                  {currentLanguage?.nativeLabel}
                </button>
                
                {showLanguageDropdown && (
                  <>
                    <div 
                      className="fixed inset-0 z-10" 
                      onClick={() => setShowLanguageDropdown(false)}
                    />
                    <div className="absolute bottom-full left-0 mb-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                      {pageLanguages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setPageLanguage(lang.code);
                            setShowLanguageDropdown(false);
                          }}
                          className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg text-sm ${
                            pageLanguage === lang.code ? 'bg-gray-50 font-medium' : ''
                          }`}
                        >
                          <span className="text-gray-900">{lang.nativeLabel}</span>
                          <span className="text-gray-500 text-xs ml-2">({lang.label})</span>
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Copyright */}
            <p className="text-sm text-blue-200">
              © {new Date().getFullYear()} PLATCOL. {getTranslation('allRightsReserved', pageLanguage)}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}