import { X } from 'lucide-react';
import { usePageLanguage } from '../contexts/PageLanguageContext';
import { getTranslation } from '../utils/translations';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (page: 'about' | 'publications' | 'related-platforms' | 'user-guide' | 'faq' | 'contact' | 'privacy' | 'terms' | 'cookies') => void;
}

export function Sidebar({ isOpen, onClose, onNavigate }: SidebarProps) {
  const { pageLanguage } = usePageLanguage();
  
  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('about');
      onClose();
    }
  };
  
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-96 md:w-80 bg-white border-l border-gray-200 shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">{getTranslation('menu', pageLanguage)}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Sidebar Content */}
          <nav className="flex-1 overflow-y-auto p-4 sm:p-6">
            <div className="space-y-8">
              {/* About Section */}
              <div>
                <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4 px-4">
                  {getTranslation('about', pageLanguage)}
                </h3>
                <div className="space-y-1">
                  <button
                    onClick={handleAboutClick}
                    className="w-full text-left block px-4 py-2.5 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    {getTranslation('aboutTheProject', pageLanguage)}
                  </button>
                  <button
                    onClick={() => {
                      if (onNavigate) {
                        onNavigate('publications');
                        onClose();
                      }
                    }}
                    className="w-full text-left block px-4 py-2.5 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    {getTranslation('publications', pageLanguage)}
                  </button>
                  <button
                    onClick={() => {
                      if (onNavigate) {
                        onNavigate('related-platforms');
                        onClose();
                      }
                    }}
                    className="w-full text-left block px-4 py-2.5 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    {getTranslation('relatedPlatforms', pageLanguage)}
                  </button>
                </div>
              </div>

              {/* Help & Resources Section */}
              <div>
                <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4 px-4">
                  {getTranslation('helpResources', pageLanguage)}
                </h3>
                <div className="space-y-1">
                  <button
                    onClick={() => {
                      if (onNavigate) {
                        onNavigate('user-guide');
                        onClose();
                      }
                    }}
                    className="w-full text-left block px-4 py-2.5 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    {getTranslation('userGuide', pageLanguage)}
                  </button>
                  <button
                    onClick={() => {
                      if (onNavigate) {
                        onNavigate('faq');
                        onClose();
                      }
                    }}
                    className="w-full text-left block px-4 py-2.5 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    {getTranslation('faq', pageLanguage)}
                  </button>
                  <button
                    onClick={() => {
                      if (onNavigate) {
                        onNavigate('contact');
                        onClose();
                      }
                    }}
                    className="w-full text-left block px-4 py-2.5 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    {getTranslation('contactFeedback', pageLanguage)}
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
}