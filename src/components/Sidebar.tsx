import { X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
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
        className={`fixed top-0 right-0 h-full w-80 bg-white border-l border-gray-200 shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Menu</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Sidebar Content */}
          <nav className="flex-1 overflow-y-auto p-6">
            <div className="space-y-8">
              {/* About Section */}
              <div>
                <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4 px-4">
                  About
                </h3>
                <div className="space-y-1">
                  <a
                    href="/about"
                    className="block px-4 py-2.5 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    About the Project
                  </a>
                  <a
                    href="/publications"
                    className="block px-4 py-2.5 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    Publications
                  </a>
                  <a
                    href="/related-platforms"
                    className="block px-4 py-2.5 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    Related Platforms
                  </a>
                </div>
              </div>

              {/* Help & Resources Section */}
              <div>
                <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4 px-4">
                  Help & Resources
                </h3>
                <div className="space-y-1">
                  <a
                    href="/user-guide"
                    className="block px-4 py-2.5 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    User Guide
                  </a>
                  <a
                    href="/faq"
                    className="block px-4 py-2.5 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    FAQ
                  </a>
                  <a
                    href="/contact"
                    className="block px-4 py-2.5 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    Contact & Feedback
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
}