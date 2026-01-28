import { Mail, Linkedin, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-blue-800 bg-blue-950 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-semibold text-white mb-4">About PLATCOL</h3>
            <p className="text-sm text-blue-100 leading-relaxed">
              A minimalist dictionary platform designed specifically for language learners, 
              focusing on collocation information and usage patterns.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-sm text-blue-100 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/blog" className="text-sm text-blue-100 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/help" className="text-sm text-blue-100 hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/guide" className="text-sm text-blue-100 hover:text-white transition-colors">
                  User Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-sm text-blue-100 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-sm text-blue-100 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/cookies" className="text-sm text-blue-100 hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-semibold text-white mb-4">Connect</h3>
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

        {/* Copyright */}
        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-sm text-blue-200">
            © {new Date().getFullYear()} PLATCOL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}